import * as THREE from 'three'
import {Water} from 'three/examples/jsm/objects/Water'
import {Sky} from "three/examples/jsm/objects/Sky"
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader"
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry"
import {Controller, GUI} from 'three/examples/jsm/libs/lil-gui.module.min'
import {Cell, State} from "./proto/battlefield"
import particleFire from 'three-particle-fire'
import {Font, FontLoader} from "three/examples/jsm/loaders/FontLoader"
import waterTex from './assets/waternormals.jpg'
import fontJson from './assets/Roboto_Regular.json'
import cruiserObj from './assets/cruiser.obj'

particleFire.install({THREE: THREE})

type GamesDataActionV1 = {
    data: number[]
    user: number
}

type GamesDataTickV1 = {
    tick: number
    state: string
    actions: GamesDataActionV1[]
}

type GamesDataUserV1 = {
    id: number
    gh_login: string
    name: string
    avatar_url: string
}

type GamesDataGameUserV1 = {
    score: number
    new_score: number
    user: GamesDataUserV1
}

type GamesDataGameV1 = {
    ts: string
    participants: GamesDataGameUserV1[]
    winner: number
    options: number[]
    ticks: GamesDataTickV1[]
}

export class Player {
    private readonly container: HTMLElement
    private readonly ticks: Array<State>
    private readonly participants: GamesDataGameUserV1[]
    private readonly winner: number
    private settings: {
        curTick: number
        play: Function
        pause: Function
    }
    private readonly clock = new THREE.Clock()
    private readonly scene: THREE.Scene
    private readonly camera: THREE.PerspectiveCamera
    private readonly renderer: THREE.WebGLRenderer
    private font: Font
    private water: THREE.Mesh
    private ships: { [key: number]: THREE.Group } = {}
    private fires: { [key: number]: THREE.Points } = {}

    constructor(container: HTMLElement, gameData: GamesDataGameV1) {
        this.container = container
        container.style.height = (container.clientWidth / 2).toString().concat('px')

        this.ticks = gameData.ticks.map(t => {
            return State.decode(Uint8Array.from(window.atob(t.state), (v) => v.charCodeAt(0)))
        })
        this.participants = gameData.participants
        this.winner = gameData.winner

        this.scene = new THREE.Scene()
        this.scene.fog = new THREE.Fog(0x333333, 1, 20000)

        this.camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.offsetHeight, 1, 20000)
        this.camera.position.set(0, 1000, 0)
        this.camera.lookAt(0, -250, -1000)

        this.renderer = new THREE.WebGLRenderer({antialias: true})
        this.renderer.setSize(container.clientWidth, container.offsetHeight)
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping
        container.appendChild(this.renderer.domElement)

        const manager = new THREE.LoadingManager()
        manager.onLoad = () => {
            this.initScene()
        }
        manager.onError = (url) => {
            alert('Cannot load ' + url)
        }

        const fontLoader = new FontLoader(manager)
        const objLoader = new OBJLoader(manager)

        this.font = fontLoader.parse(fontJson)

        objLoader.load(cruiserObj, obj => {
            this.ticks[this.ticks.length - 1].field1.forEach((cell, i) => {
                if (cell == Cell.SHIP || cell == Cell.GOT) {
                    const ship = obj.clone()
                    ship.scale.set(20, 20, 10)
                    ship.position.set(-1035 + (i % 10) * 100, 1270 - Math.floor(i / 10) * 60, -3)
                    ship.rotateY(Math.PI / 2)
                    ship.rotateZ(Math.PI / 2)

                    this.ships[i] = ship
                    this.scene.add(ship)
                }

                if (cell == Cell.GOT) {
                    const fire = this.newFire(-1000 + (i % 10) * 100, 1270 - Math.floor(i / 10) * 60, 0xff2200)
                    this.fires[i] = fire
                    this.scene.add(fire)
                }

                if (cell == Cell.MISSED) {
                    const fire = this.newFire(-1000 + (i % 10) * 100, 1270 - Math.floor(i / 10) * 60, 0x080808)
                    this.fires[i] = fire
                    this.scene.add(fire)
                }
            })

            this.ticks[this.ticks.length - 1].field2.forEach((cell, i) => {
                if (cell == Cell.SHIP || cell == Cell.GOT) {
                    const ship = obj.clone()
                    ship.scale.set(20, 20, 10)
                    ship.position.set(135 + (i % 10) * 100, 1270 - Math.floor(i / 10) * 60, -3)
                    ship.rotateY(Math.PI / 2)
                    ship.rotateX(Math.PI)
                    ship.rotateZ(Math.PI / 2)

                    this.ships[i * 100] = ship
                    this.scene.add(ship)
                }

                if (cell == Cell.GOT) {
                    const fire = this.newFire(100 + (i % 10) * 100, 1270 - Math.floor(i / 10) * 60, 0xff2200)
                    this.fires[i * 100] = fire
                    this.scene.add(fire)
                }

                if (cell == Cell.MISSED) {
                    const fire = this.newFire(100 + (i % 10) * 100, 1270 - Math.floor(i / 10) * 60, 0x080808)
                    this.fires[i * 100] = fire
                    this.scene.add(fire)
                }
            })
        })

        this.initGUI()
    }

    private initScene() {
        const sun = new THREE.Vector3()
        sun.setFromSphericalCoords(1, THREE.MathUtils.degToRad(80), THREE.MathUtils.degToRad(-20))

        this.scene.add(new THREE.AmbientLight(0xffffff, 0.3))

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7)
        directionalLight.position.set(sun.x, sun.y, sun.z)
        this.scene.add(directionalLight)

        const water = new Water(
            new THREE.PlaneGeometry(10000, 10000),
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load(waterTex, function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
                }),
                sunDirection: new THREE.Vector3(),
                sunColor: 0xffffff,
                waterColor: 0x001e0f,
                distortionScale: 3.7,
                fog: true,
            }
        )

        this.scene.add(water)
        this.water = water

        const sky = new Sky()
        sky.scale.setScalar(10000)
        this.scene.add(sky)

        const skyUniforms = (sky.material as THREE.ShaderMaterial).uniforms
        skyUniforms['turbidity'].value = 10
        skyUniforms['rayleigh'].value = 2
        skyUniforms['mieCoefficient'].value = 0.005
        skyUniforms['mieDirectionalG'].value = 0.8
        skyUniforms['sunPosition'].value.copy(sun)

        const gridHelper1 = new THREE.GridHelper(10, 10, 0x888888, 0x0888888)
        gridHelper1.scale.x = 100
        gridHelper1.scale.z = 60
        gridHelper1.rotation.x = -Math.PI / 2
        gridHelper1.translateX(-550)
        gridHelper1.translateY(-1)
        gridHelper1.translateZ(1000)
        this.scene.add(gridHelper1)

        const gridHelper2 = new THREE.GridHelper(10, 10, 0x888888, 0x0888888)
        gridHelper2.scale.x = 100
        gridHelper2.scale.z = 60
        gridHelper2.rotation.x = -Math.PI / 2
        gridHelper2.translateX(550)
        gridHelper2.translateY(-1)
        gridHelper2.translateZ(1000)
        this.scene.add(gridHelper2);

        'ABCDEFGHIJ'.split('').forEach((l, i) => {
            const t = this.newText(l)
            t.geometry.computeBoundingBox()
            t.position.set(-(t.geometry.boundingBox.max.x - t.geometry.boundingBox.min.x) / 2, 1240 - i * 60, -2)
            this.scene.add(t)
        });

        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((n, i) => {
            let t = this.newText(n.toString())
            t.geometry.computeBoundingBox()
            t.position.set(-1000 - (t.geometry.boundingBox.max.x - t.geometry.boundingBox.min.x) / 2 + i * 100, 640, -2)
            this.scene.add(t)

            t = t.clone()
            t.position.set(100 - (t.geometry.boundingBox.max.x - t.geometry.boundingBox.min.x) / 2 + i * 100, 640, -2)
            this.scene.add(t)
        })

        this.participants.forEach((p, i) => {
            const t = this.newText(
                p.user.name || p.user.gh_login,
                this.winner > 0 && i + 1 == this.winner
                    ? [
                        new THREE.MeshPhongMaterial({color: 0x006600, flatShading: true}), // front
                        new THREE.MeshPhongMaterial({color: 0x008800}) // side
                    ]
                    : this.winner > 0 && i + 1 != this.winner
                        ? [
                            new THREE.MeshPhongMaterial({color: 0x660000, flatShading: true}), // front
                            new THREE.MeshPhongMaterial({color: 0x880000}) // side
                        ]
                        : this.lettersMaterial
            )
            t.geometry.computeBoundingBox()
            t.position.set((i == 0 ? -550 : 550) - (t.geometry.boundingBox.max.x - t.geometry.boundingBox.min.x) / 2, 1400, -2)
            this.scene.add(t)
        })

        this.scene.rotateX(-Math.PI / 2)

        this.animate()
    }

    private initGUI() {
        let curTickCtrl: Controller
        let playBtn: Controller
        let pauseBtn: Controller

        this.settings = {
            curTick: 0,
            play: () => {
                playBtn.hide()
                pauseBtn.show()

                if (this.settings.curTick == this.ticks.length - 1)
                    curTickCtrl.setValue(0)

                const play = () => {
                    if (pauseBtn._hidden)
                        return

                    if (this.settings.curTick < this.ticks.length - 1) {
                        this.settings.curTick++
                        curTickCtrl.setValue(this.settings.curTick)
                    } else {
                        pauseBtn.hide()
                        playBtn.show()
                    }

                    window.setTimeout(play, 100)
                }
                play()
            },
            pause() {
                pauseBtn.hide()
                playBtn.show()
            }
        }

        const panel = new GUI({
            title: 'Battleships',
            container: this.container,
            width: this.container.clientWidth,
            autoPlace: true
        })
        curTickCtrl = panel.add(this.settings, 'curTick', 0, this.ticks.length - 1, 1)
            .name('Current tick')
            .listen()
            .onChange(() => {
                this.ticks[this.settings.curTick].field1.forEach((cell, i) => {
                    if (this.fires[i]) {
                        this.fires[i].position.setZ(cell == Cell.EMPTY || cell == Cell.SHIP ? -1000000 : 0)
                    }
                })

                this.ticks[this.settings.curTick].field2.forEach((cell, i) => {
                    if (this.fires[100 * i]) {
                        this.fires[100 * i].position.setZ(cell == Cell.EMPTY || cell == Cell.SHIP ? -1000000 : 0)
                    }
                })
            })

        playBtn = panel.add(this.settings, 'play')
            .name('Play')

        pauseBtn = panel.add(this.settings, 'pause')
            .name('Pause')
            .hide()

        window.addEventListener('resize', () => {
            this.container.style.height = (this.container.clientWidth / 2).toString().concat('px')
            this.camera.aspect = this.container.clientWidth / this.container.offsetHeight
            this.camera.updateProjectionMatrix()

            this.renderer.setSize(this.container.clientWidth, this.container.offsetHeight)
        })
    }

    private animate() {
        requestAnimationFrame(() => {
            this.animate()
        })

        const delta = this.clock.getDelta();

        (this.water.material as THREE.ShaderMaterial).uniforms['time'].value += delta
        Object.values(this.fires).forEach(f => {
            (f.material as any).update(delta)
        })

        this.renderer.render(this.scene, this.camera)
    }

    private newFire(x: number, y: number, color: number): THREE.Points {
        const g = new particleFire.Geometry(20, 100, 300)
        const m = new particleFire.Material({color: color, size: 30})
        m.setPerspective(50, this.container.offsetHeight)
        const fire = new THREE.Points(g, m)
        fire.position.set(x, y, -1000000)
        return fire
    }

    private lettersMaterial = [
        new THREE.MeshPhongMaterial({color: 0x555555, flatShading: true}), // front
        new THREE.MeshPhongMaterial({color: 0x888888}) // side
    ]

    private newText(text: string, material: Array<THREE.MeshPhongMaterial> = this.lettersMaterial) {
        return new THREE.Mesh(
            new TextGeometry(text, {
                font: this.font,
                size: 45,
                height: 4,
                curveSegments: 40,
                bevelThickness: 2,
                bevelSize: 1.5,
                bevelEnabled: true
            }),
            material
        )
    }

    public next() {
        console.log('next')
    }
}