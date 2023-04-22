/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Options = $root.Options = (() => {

    /**
     * Properties of an Options.
     * @exports IOptions
     * @interface IOptions
     */

    /**
     * Constructs a new Options.
     * @exports Options
     * @classdesc Represents an Options.
     * @implements IOptions
     * @constructor
     * @param {IOptions=} [properties] Properties to set
     */
    function Options(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new Options instance using the specified properties.
     * @function create
     * @memberof Options
     * @static
     * @param {IOptions=} [properties] Properties to set
     * @returns {Options} Options instance
     */
    Options.create = function create(properties) {
        return new Options(properties);
    };

    /**
     * Encodes the specified Options message. Does not implicitly {@link Options.verify|verify} messages.
     * @function encode
     * @memberof Options
     * @static
     * @param {IOptions} message Options message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Options.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified Options message, length delimited. Does not implicitly {@link Options.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Options
     * @static
     * @param {IOptions} message Options message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Options.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Options message from the specified reader or buffer.
     * @function decode
     * @memberof Options
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Options} Options
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Options.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Options();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Options message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Options
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Options} Options
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Options.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Options message.
     * @function verify
     * @memberof Options
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Options.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an Options message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Options
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Options} Options
     */
    Options.fromObject = function fromObject(object) {
        if (object instanceof $root.Options)
            return object;
        return new $root.Options();
    };

    /**
     * Creates a plain object from an Options message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Options
     * @static
     * @param {Options} message Options
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Options.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this Options to JSON.
     * @function toJSON
     * @memberof Options
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Options.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Options;
})();

export const State = $root.State = (() => {

    /**
     * Properties of a State.
     * @exports IState
     * @interface IState
     * @property {Array.<Cell>|null} [field1] State field1
     * @property {Array.<Cell>|null} [field2] State field2
     */

    /**
     * Constructs a new State.
     * @exports State
     * @classdesc Represents a State.
     * @implements IState
     * @constructor
     * @param {IState=} [properties] Properties to set
     */
    function State(properties) {
        this.field1 = [];
        this.field2 = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * State field1.
     * @member {Array.<Cell>} field1
     * @memberof State
     * @instance
     */
    State.prototype.field1 = $util.emptyArray;

    /**
     * State field2.
     * @member {Array.<Cell>} field2
     * @memberof State
     * @instance
     */
    State.prototype.field2 = $util.emptyArray;

    /**
     * Creates a new State instance using the specified properties.
     * @function create
     * @memberof State
     * @static
     * @param {IState=} [properties] Properties to set
     * @returns {State} State instance
     */
    State.create = function create(properties) {
        return new State(properties);
    };

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @function encode
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.field1 != null && message.field1.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (let i = 0; i < message.field1.length; ++i)
                writer.int32(message.field1[i]);
            writer.ldelim();
        }
        if (message.field2 != null && message.field2.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (let i = 0; i < message.field2.length; ++i)
                writer.int32(message.field2[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @function encodeDelimited
     * @memberof State
     * @static
     * @param {IState} message State message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    State.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a State message from the specified reader or buffer.
     * @function decode
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.State();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.field1 && message.field1.length))
                    message.field1 = [];
                if ((tag & 7) === 2) {
                    let end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.field1.push(reader.int32());
                } else
                    message.field1.push(reader.int32());
                break;
            case 2:
                if (!(message.field2 && message.field2.length))
                    message.field2 = [];
                if ((tag & 7) === 2) {
                    let end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.field2.push(reader.int32());
                } else
                    message.field2.push(reader.int32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof State
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {State} State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    State.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a State message.
     * @function verify
     * @memberof State
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    State.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.field1 != null && message.hasOwnProperty("field1")) {
            if (!Array.isArray(message.field1))
                return "field1: array expected";
            for (let i = 0; i < message.field1.length; ++i)
                switch (message.field1[i]) {
                default:
                    return "field1: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
        }
        if (message.field2 != null && message.hasOwnProperty("field2")) {
            if (!Array.isArray(message.field2))
                return "field2: array expected";
            for (let i = 0; i < message.field2.length; ++i)
                switch (message.field2[i]) {
                default:
                    return "field2: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
        }
        return null;
    };

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof State
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {State} State
     */
    State.fromObject = function fromObject(object) {
        if (object instanceof $root.State)
            return object;
        let message = new $root.State();
        if (object.field1) {
            if (!Array.isArray(object.field1))
                throw TypeError(".State.field1: array expected");
            message.field1 = [];
            for (let i = 0; i < object.field1.length; ++i)
                switch (object.field1[i]) {
                default:
                case "EMPTY":
                case 0:
                    message.field1[i] = 0;
                    break;
                case "SHIP":
                case 1:
                    message.field1[i] = 1;
                    break;
                case "MISSED":
                case 2:
                    message.field1[i] = 2;
                    break;
                case "GOT":
                case 3:
                    message.field1[i] = 3;
                    break;
                }
        }
        if (object.field2) {
            if (!Array.isArray(object.field2))
                throw TypeError(".State.field2: array expected");
            message.field2 = [];
            for (let i = 0; i < object.field2.length; ++i)
                switch (object.field2[i]) {
                default:
                case "EMPTY":
                case 0:
                    message.field2[i] = 0;
                    break;
                case "SHIP":
                case 1:
                    message.field2[i] = 1;
                    break;
                case "MISSED":
                case 2:
                    message.field2[i] = 2;
                    break;
                case "GOT":
                case 3:
                    message.field2[i] = 3;
                    break;
                }
        }
        return message;
    };

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @function toObject
     * @memberof State
     * @static
     * @param {State} message State
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    State.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.field1 = [];
            object.field2 = [];
        }
        if (message.field1 && message.field1.length) {
            object.field1 = [];
            for (let j = 0; j < message.field1.length; ++j)
                object.field1[j] = options.enums === String ? $root.Cell[message.field1[j]] : message.field1[j];
        }
        if (message.field2 && message.field2.length) {
            object.field2 = [];
            for (let j = 0; j < message.field2.length; ++j)
                object.field2[j] = options.enums === String ? $root.Cell[message.field2[j]] : message.field2[j];
        }
        return object;
    };

    /**
     * Converts this State to JSON.
     * @function toJSON
     * @memberof State
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    State.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return State;
})();

/**
 * Cell enum.
 * @exports Cell
 * @enum {number}
 * @property {number} EMPTY=0 EMPTY value
 * @property {number} SHIP=1 SHIP value
 * @property {number} MISSED=2 MISSED value
 * @property {number} GOT=3 GOT value
 */
export const Cell = $root.Cell = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "EMPTY"] = 0;
    values[valuesById[1] = "SHIP"] = 1;
    values[valuesById[2] = "MISSED"] = 2;
    values[valuesById[3] = "GOT"] = 3;
    return values;
})();

export const Action = $root.Action = (() => {

    /**
     * Properties of an Action.
     * @exports IAction
     * @interface IAction
     * @property {IActionSkip|null} [skip] Action skip
     * @property {IActionSetup|null} [setup] Action setup
     * @property {IActionFire|null} [fire] Action fire
     */

    /**
     * Constructs a new Action.
     * @exports Action
     * @classdesc Represents an Action.
     * @implements IAction
     * @constructor
     * @param {IAction=} [properties] Properties to set
     */
    function Action(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Action skip.
     * @member {IActionSkip|null|undefined} skip
     * @memberof Action
     * @instance
     */
    Action.prototype.skip = null;

    /**
     * Action setup.
     * @member {IActionSetup|null|undefined} setup
     * @memberof Action
     * @instance
     */
    Action.prototype.setup = null;

    /**
     * Action fire.
     * @member {IActionFire|null|undefined} fire
     * @memberof Action
     * @instance
     */
    Action.prototype.fire = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Action data.
     * @member {"skip"|"setup"|"fire"|undefined} data
     * @memberof Action
     * @instance
     */
    Object.defineProperty(Action.prototype, "data", {
        get: $util.oneOfGetter($oneOfFields = ["skip", "setup", "fire"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Action instance using the specified properties.
     * @function create
     * @memberof Action
     * @static
     * @param {IAction=} [properties] Properties to set
     * @returns {Action} Action instance
     */
    Action.create = function create(properties) {
        return new Action(properties);
    };

    /**
     * Encodes the specified Action message. Does not implicitly {@link Action.verify|verify} messages.
     * @function encode
     * @memberof Action
     * @static
     * @param {IAction} message Action message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Action.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.skip != null && Object.hasOwnProperty.call(message, "skip"))
            $root.ActionSkip.encode(message.skip, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.setup != null && Object.hasOwnProperty.call(message, "setup"))
            $root.ActionSetup.encode(message.setup, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.fire != null && Object.hasOwnProperty.call(message, "fire"))
            $root.ActionFire.encode(message.fire, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Action message, length delimited. Does not implicitly {@link Action.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Action
     * @static
     * @param {IAction} message Action message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Action.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an Action message from the specified reader or buffer.
     * @function decode
     * @memberof Action
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Action} Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Action.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Action();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.skip = $root.ActionSkip.decode(reader, reader.uint32());
                break;
            case 2:
                message.setup = $root.ActionSetup.decode(reader, reader.uint32());
                break;
            case 3:
                message.fire = $root.ActionFire.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an Action message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Action
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Action} Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Action.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an Action message.
     * @function verify
     * @memberof Action
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Action.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.skip != null && message.hasOwnProperty("skip")) {
            properties.data = 1;
            {
                let error = $root.ActionSkip.verify(message.skip);
                if (error)
                    return "skip." + error;
            }
        }
        if (message.setup != null && message.hasOwnProperty("setup")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ActionSetup.verify(message.setup);
                if (error)
                    return "setup." + error;
            }
        }
        if (message.fire != null && message.hasOwnProperty("fire")) {
            if (properties.data === 1)
                return "data: multiple values";
            properties.data = 1;
            {
                let error = $root.ActionFire.verify(message.fire);
                if (error)
                    return "fire." + error;
            }
        }
        return null;
    };

    /**
     * Creates an Action message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Action
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Action} Action
     */
    Action.fromObject = function fromObject(object) {
        if (object instanceof $root.Action)
            return object;
        let message = new $root.Action();
        if (object.skip != null) {
            if (typeof object.skip !== "object")
                throw TypeError(".Action.skip: object expected");
            message.skip = $root.ActionSkip.fromObject(object.skip);
        }
        if (object.setup != null) {
            if (typeof object.setup !== "object")
                throw TypeError(".Action.setup: object expected");
            message.setup = $root.ActionSetup.fromObject(object.setup);
        }
        if (object.fire != null) {
            if (typeof object.fire !== "object")
                throw TypeError(".Action.fire: object expected");
            message.fire = $root.ActionFire.fromObject(object.fire);
        }
        return message;
    };

    /**
     * Creates a plain object from an Action message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Action
     * @static
     * @param {Action} message Action
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Action.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.skip != null && message.hasOwnProperty("skip")) {
            object.skip = $root.ActionSkip.toObject(message.skip, options);
            if (options.oneofs)
                object.data = "skip";
        }
        if (message.setup != null && message.hasOwnProperty("setup")) {
            object.setup = $root.ActionSetup.toObject(message.setup, options);
            if (options.oneofs)
                object.data = "setup";
        }
        if (message.fire != null && message.hasOwnProperty("fire")) {
            object.fire = $root.ActionFire.toObject(message.fire, options);
            if (options.oneofs)
                object.data = "fire";
        }
        return object;
    };

    /**
     * Converts this Action to JSON.
     * @function toJSON
     * @memberof Action
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Action.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Action;
})();

export const ActionSkip = $root.ActionSkip = (() => {

    /**
     * Properties of an ActionSkip.
     * @exports IActionSkip
     * @interface IActionSkip
     */

    /**
     * Constructs a new ActionSkip.
     * @exports ActionSkip
     * @classdesc Represents an ActionSkip.
     * @implements IActionSkip
     * @constructor
     * @param {IActionSkip=} [properties] Properties to set
     */
    function ActionSkip(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new ActionSkip instance using the specified properties.
     * @function create
     * @memberof ActionSkip
     * @static
     * @param {IActionSkip=} [properties] Properties to set
     * @returns {ActionSkip} ActionSkip instance
     */
    ActionSkip.create = function create(properties) {
        return new ActionSkip(properties);
    };

    /**
     * Encodes the specified ActionSkip message. Does not implicitly {@link ActionSkip.verify|verify} messages.
     * @function encode
     * @memberof ActionSkip
     * @static
     * @param {IActionSkip} message ActionSkip message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionSkip.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified ActionSkip message, length delimited. Does not implicitly {@link ActionSkip.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActionSkip
     * @static
     * @param {IActionSkip} message ActionSkip message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionSkip.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActionSkip message from the specified reader or buffer.
     * @function decode
     * @memberof ActionSkip
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActionSkip} ActionSkip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionSkip.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionSkip();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActionSkip message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActionSkip
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActionSkip} ActionSkip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionSkip.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActionSkip message.
     * @function verify
     * @memberof ActionSkip
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActionSkip.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates an ActionSkip message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActionSkip
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActionSkip} ActionSkip
     */
    ActionSkip.fromObject = function fromObject(object) {
        if (object instanceof $root.ActionSkip)
            return object;
        return new $root.ActionSkip();
    };

    /**
     * Creates a plain object from an ActionSkip message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActionSkip
     * @static
     * @param {ActionSkip} message ActionSkip
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActionSkip.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this ActionSkip to JSON.
     * @function toJSON
     * @memberof ActionSkip
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActionSkip.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActionSkip;
})();

export const ActionSetup = $root.ActionSetup = (() => {

    /**
     * Properties of an ActionSetup.
     * @exports IActionSetup
     * @interface IActionSetup
     * @property {ActionSetup.IShip|null} [shipL4N1] ActionSetup shipL4N1
     * @property {ActionSetup.IShip|null} [shipL3N1] ActionSetup shipL3N1
     * @property {ActionSetup.IShip|null} [shipL3N2] ActionSetup shipL3N2
     * @property {ActionSetup.IShip|null} [shipL2N1] ActionSetup shipL2N1
     * @property {ActionSetup.IShip|null} [shipL2N2] ActionSetup shipL2N2
     * @property {ActionSetup.IShip|null} [shipL2N3] ActionSetup shipL2N3
     * @property {ActionSetup.IShip|null} [shipL1N1] ActionSetup shipL1N1
     * @property {ActionSetup.IShip|null} [shipL1N2] ActionSetup shipL1N2
     * @property {ActionSetup.IShip|null} [shipL1N3] ActionSetup shipL1N3
     * @property {ActionSetup.IShip|null} [shipL1N4] ActionSetup shipL1N4
     */

    /**
     * Constructs a new ActionSetup.
     * @exports ActionSetup
     * @classdesc Represents an ActionSetup.
     * @implements IActionSetup
     * @constructor
     * @param {IActionSetup=} [properties] Properties to set
     */
    function ActionSetup(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActionSetup shipL4N1.
     * @member {ActionSetup.IShip|null|undefined} shipL4N1
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL4N1 = null;

    /**
     * ActionSetup shipL3N1.
     * @member {ActionSetup.IShip|null|undefined} shipL3N1
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL3N1 = null;

    /**
     * ActionSetup shipL3N2.
     * @member {ActionSetup.IShip|null|undefined} shipL3N2
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL3N2 = null;

    /**
     * ActionSetup shipL2N1.
     * @member {ActionSetup.IShip|null|undefined} shipL2N1
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL2N1 = null;

    /**
     * ActionSetup shipL2N2.
     * @member {ActionSetup.IShip|null|undefined} shipL2N2
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL2N2 = null;

    /**
     * ActionSetup shipL2N3.
     * @member {ActionSetup.IShip|null|undefined} shipL2N3
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL2N3 = null;

    /**
     * ActionSetup shipL1N1.
     * @member {ActionSetup.IShip|null|undefined} shipL1N1
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL1N1 = null;

    /**
     * ActionSetup shipL1N2.
     * @member {ActionSetup.IShip|null|undefined} shipL1N2
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL1N2 = null;

    /**
     * ActionSetup shipL1N3.
     * @member {ActionSetup.IShip|null|undefined} shipL1N3
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL1N3 = null;

    /**
     * ActionSetup shipL1N4.
     * @member {ActionSetup.IShip|null|undefined} shipL1N4
     * @memberof ActionSetup
     * @instance
     */
    ActionSetup.prototype.shipL1N4 = null;

    /**
     * Creates a new ActionSetup instance using the specified properties.
     * @function create
     * @memberof ActionSetup
     * @static
     * @param {IActionSetup=} [properties] Properties to set
     * @returns {ActionSetup} ActionSetup instance
     */
    ActionSetup.create = function create(properties) {
        return new ActionSetup(properties);
    };

    /**
     * Encodes the specified ActionSetup message. Does not implicitly {@link ActionSetup.verify|verify} messages.
     * @function encode
     * @memberof ActionSetup
     * @static
     * @param {IActionSetup} message ActionSetup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionSetup.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.shipL4N1 != null && Object.hasOwnProperty.call(message, "shipL4N1"))
            $root.ActionSetup.Ship.encode(message.shipL4N1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.shipL3N1 != null && Object.hasOwnProperty.call(message, "shipL3N1"))
            $root.ActionSetup.Ship.encode(message.shipL3N1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.shipL3N2 != null && Object.hasOwnProperty.call(message, "shipL3N2"))
            $root.ActionSetup.Ship.encode(message.shipL3N2, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.shipL2N1 != null && Object.hasOwnProperty.call(message, "shipL2N1"))
            $root.ActionSetup.Ship.encode(message.shipL2N1, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.shipL2N2 != null && Object.hasOwnProperty.call(message, "shipL2N2"))
            $root.ActionSetup.Ship.encode(message.shipL2N2, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.shipL2N3 != null && Object.hasOwnProperty.call(message, "shipL2N3"))
            $root.ActionSetup.Ship.encode(message.shipL2N3, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.shipL1N1 != null && Object.hasOwnProperty.call(message, "shipL1N1"))
            $root.ActionSetup.Ship.encode(message.shipL1N1, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.shipL1N2 != null && Object.hasOwnProperty.call(message, "shipL1N2"))
            $root.ActionSetup.Ship.encode(message.shipL1N2, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.shipL1N3 != null && Object.hasOwnProperty.call(message, "shipL1N3"))
            $root.ActionSetup.Ship.encode(message.shipL1N3, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.shipL1N4 != null && Object.hasOwnProperty.call(message, "shipL1N4"))
            $root.ActionSetup.Ship.encode(message.shipL1N4, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ActionSetup message, length delimited. Does not implicitly {@link ActionSetup.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActionSetup
     * @static
     * @param {IActionSetup} message ActionSetup message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionSetup.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActionSetup message from the specified reader or buffer.
     * @function decode
     * @memberof ActionSetup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActionSetup} ActionSetup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionSetup.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionSetup();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.shipL4N1 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 2:
                message.shipL3N1 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 3:
                message.shipL3N2 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 4:
                message.shipL2N1 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 5:
                message.shipL2N2 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 6:
                message.shipL2N3 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 7:
                message.shipL1N1 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 8:
                message.shipL1N2 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 9:
                message.shipL1N3 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            case 10:
                message.shipL1N4 = $root.ActionSetup.Ship.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActionSetup message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActionSetup
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActionSetup} ActionSetup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionSetup.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActionSetup message.
     * @function verify
     * @memberof ActionSetup
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActionSetup.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.shipL4N1 != null && message.hasOwnProperty("shipL4N1")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL4N1);
            if (error)
                return "shipL4N1." + error;
        }
        if (message.shipL3N1 != null && message.hasOwnProperty("shipL3N1")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL3N1);
            if (error)
                return "shipL3N1." + error;
        }
        if (message.shipL3N2 != null && message.hasOwnProperty("shipL3N2")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL3N2);
            if (error)
                return "shipL3N2." + error;
        }
        if (message.shipL2N1 != null && message.hasOwnProperty("shipL2N1")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL2N1);
            if (error)
                return "shipL2N1." + error;
        }
        if (message.shipL2N2 != null && message.hasOwnProperty("shipL2N2")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL2N2);
            if (error)
                return "shipL2N2." + error;
        }
        if (message.shipL2N3 != null && message.hasOwnProperty("shipL2N3")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL2N3);
            if (error)
                return "shipL2N3." + error;
        }
        if (message.shipL1N1 != null && message.hasOwnProperty("shipL1N1")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL1N1);
            if (error)
                return "shipL1N1." + error;
        }
        if (message.shipL1N2 != null && message.hasOwnProperty("shipL1N2")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL1N2);
            if (error)
                return "shipL1N2." + error;
        }
        if (message.shipL1N3 != null && message.hasOwnProperty("shipL1N3")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL1N3);
            if (error)
                return "shipL1N3." + error;
        }
        if (message.shipL1N4 != null && message.hasOwnProperty("shipL1N4")) {
            let error = $root.ActionSetup.Ship.verify(message.shipL1N4);
            if (error)
                return "shipL1N4." + error;
        }
        return null;
    };

    /**
     * Creates an ActionSetup message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActionSetup
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActionSetup} ActionSetup
     */
    ActionSetup.fromObject = function fromObject(object) {
        if (object instanceof $root.ActionSetup)
            return object;
        let message = new $root.ActionSetup();
        if (object.shipL4N1 != null) {
            if (typeof object.shipL4N1 !== "object")
                throw TypeError(".ActionSetup.shipL4N1: object expected");
            message.shipL4N1 = $root.ActionSetup.Ship.fromObject(object.shipL4N1);
        }
        if (object.shipL3N1 != null) {
            if (typeof object.shipL3N1 !== "object")
                throw TypeError(".ActionSetup.shipL3N1: object expected");
            message.shipL3N1 = $root.ActionSetup.Ship.fromObject(object.shipL3N1);
        }
        if (object.shipL3N2 != null) {
            if (typeof object.shipL3N2 !== "object")
                throw TypeError(".ActionSetup.shipL3N2: object expected");
            message.shipL3N2 = $root.ActionSetup.Ship.fromObject(object.shipL3N2);
        }
        if (object.shipL2N1 != null) {
            if (typeof object.shipL2N1 !== "object")
                throw TypeError(".ActionSetup.shipL2N1: object expected");
            message.shipL2N1 = $root.ActionSetup.Ship.fromObject(object.shipL2N1);
        }
        if (object.shipL2N2 != null) {
            if (typeof object.shipL2N2 !== "object")
                throw TypeError(".ActionSetup.shipL2N2: object expected");
            message.shipL2N2 = $root.ActionSetup.Ship.fromObject(object.shipL2N2);
        }
        if (object.shipL2N3 != null) {
            if (typeof object.shipL2N3 !== "object")
                throw TypeError(".ActionSetup.shipL2N3: object expected");
            message.shipL2N3 = $root.ActionSetup.Ship.fromObject(object.shipL2N3);
        }
        if (object.shipL1N1 != null) {
            if (typeof object.shipL1N1 !== "object")
                throw TypeError(".ActionSetup.shipL1N1: object expected");
            message.shipL1N1 = $root.ActionSetup.Ship.fromObject(object.shipL1N1);
        }
        if (object.shipL1N2 != null) {
            if (typeof object.shipL1N2 !== "object")
                throw TypeError(".ActionSetup.shipL1N2: object expected");
            message.shipL1N2 = $root.ActionSetup.Ship.fromObject(object.shipL1N2);
        }
        if (object.shipL1N3 != null) {
            if (typeof object.shipL1N3 !== "object")
                throw TypeError(".ActionSetup.shipL1N3: object expected");
            message.shipL1N3 = $root.ActionSetup.Ship.fromObject(object.shipL1N3);
        }
        if (object.shipL1N4 != null) {
            if (typeof object.shipL1N4 !== "object")
                throw TypeError(".ActionSetup.shipL1N4: object expected");
            message.shipL1N4 = $root.ActionSetup.Ship.fromObject(object.shipL1N4);
        }
        return message;
    };

    /**
     * Creates a plain object from an ActionSetup message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActionSetup
     * @static
     * @param {ActionSetup} message ActionSetup
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActionSetup.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.shipL4N1 = null;
            object.shipL3N1 = null;
            object.shipL3N2 = null;
            object.shipL2N1 = null;
            object.shipL2N2 = null;
            object.shipL2N3 = null;
            object.shipL1N1 = null;
            object.shipL1N2 = null;
            object.shipL1N3 = null;
            object.shipL1N4 = null;
        }
        if (message.shipL4N1 != null && message.hasOwnProperty("shipL4N1"))
            object.shipL4N1 = $root.ActionSetup.Ship.toObject(message.shipL4N1, options);
        if (message.shipL3N1 != null && message.hasOwnProperty("shipL3N1"))
            object.shipL3N1 = $root.ActionSetup.Ship.toObject(message.shipL3N1, options);
        if (message.shipL3N2 != null && message.hasOwnProperty("shipL3N2"))
            object.shipL3N2 = $root.ActionSetup.Ship.toObject(message.shipL3N2, options);
        if (message.shipL2N1 != null && message.hasOwnProperty("shipL2N1"))
            object.shipL2N1 = $root.ActionSetup.Ship.toObject(message.shipL2N1, options);
        if (message.shipL2N2 != null && message.hasOwnProperty("shipL2N2"))
            object.shipL2N2 = $root.ActionSetup.Ship.toObject(message.shipL2N2, options);
        if (message.shipL2N3 != null && message.hasOwnProperty("shipL2N3"))
            object.shipL2N3 = $root.ActionSetup.Ship.toObject(message.shipL2N3, options);
        if (message.shipL1N1 != null && message.hasOwnProperty("shipL1N1"))
            object.shipL1N1 = $root.ActionSetup.Ship.toObject(message.shipL1N1, options);
        if (message.shipL1N2 != null && message.hasOwnProperty("shipL1N2"))
            object.shipL1N2 = $root.ActionSetup.Ship.toObject(message.shipL1N2, options);
        if (message.shipL1N3 != null && message.hasOwnProperty("shipL1N3"))
            object.shipL1N3 = $root.ActionSetup.Ship.toObject(message.shipL1N3, options);
        if (message.shipL1N4 != null && message.hasOwnProperty("shipL1N4"))
            object.shipL1N4 = $root.ActionSetup.Ship.toObject(message.shipL1N4, options);
        return object;
    };

    /**
     * Converts this ActionSetup to JSON.
     * @function toJSON
     * @memberof ActionSetup
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActionSetup.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    ActionSetup.Ship = (function() {

        /**
         * Properties of a Ship.
         * @memberof ActionSetup
         * @interface IShip
         * @property {string|null} [coordinate] Ship coordinate
         * @property {boolean|null} [vertical] Ship vertical
         */

        /**
         * Constructs a new Ship.
         * @memberof ActionSetup
         * @classdesc Represents a Ship.
         * @implements IShip
         * @constructor
         * @param {ActionSetup.IShip=} [properties] Properties to set
         */
        function Ship(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Ship coordinate.
         * @member {string} coordinate
         * @memberof ActionSetup.Ship
         * @instance
         */
        Ship.prototype.coordinate = "";

        /**
         * Ship vertical.
         * @member {boolean} vertical
         * @memberof ActionSetup.Ship
         * @instance
         */
        Ship.prototype.vertical = false;

        /**
         * Creates a new Ship instance using the specified properties.
         * @function create
         * @memberof ActionSetup.Ship
         * @static
         * @param {ActionSetup.IShip=} [properties] Properties to set
         * @returns {ActionSetup.Ship} Ship instance
         */
        Ship.create = function create(properties) {
            return new Ship(properties);
        };

        /**
         * Encodes the specified Ship message. Does not implicitly {@link ActionSetup.Ship.verify|verify} messages.
         * @function encode
         * @memberof ActionSetup.Ship
         * @static
         * @param {ActionSetup.IShip} message Ship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.coordinate != null && Object.hasOwnProperty.call(message, "coordinate"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.coordinate);
            if (message.vertical != null && Object.hasOwnProperty.call(message, "vertical"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.vertical);
            return writer;
        };

        /**
         * Encodes the specified Ship message, length delimited. Does not implicitly {@link ActionSetup.Ship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ActionSetup.Ship
         * @static
         * @param {ActionSetup.IShip} message Ship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Ship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Ship message from the specified reader or buffer.
         * @function decode
         * @memberof ActionSetup.Ship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ActionSetup.Ship} Ship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ship.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionSetup.Ship();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.coordinate = reader.string();
                    break;
                case 2:
                    message.vertical = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Ship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ActionSetup.Ship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ActionSetup.Ship} Ship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Ship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Ship message.
         * @function verify
         * @memberof ActionSetup.Ship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Ship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.coordinate != null && message.hasOwnProperty("coordinate"))
                if (!$util.isString(message.coordinate))
                    return "coordinate: string expected";
            if (message.vertical != null && message.hasOwnProperty("vertical"))
                if (typeof message.vertical !== "boolean")
                    return "vertical: boolean expected";
            return null;
        };

        /**
         * Creates a Ship message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ActionSetup.Ship
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ActionSetup.Ship} Ship
         */
        Ship.fromObject = function fromObject(object) {
            if (object instanceof $root.ActionSetup.Ship)
                return object;
            let message = new $root.ActionSetup.Ship();
            if (object.coordinate != null)
                message.coordinate = String(object.coordinate);
            if (object.vertical != null)
                message.vertical = Boolean(object.vertical);
            return message;
        };

        /**
         * Creates a plain object from a Ship message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ActionSetup.Ship
         * @static
         * @param {ActionSetup.Ship} message Ship
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Ship.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.coordinate = "";
                object.vertical = false;
            }
            if (message.coordinate != null && message.hasOwnProperty("coordinate"))
                object.coordinate = message.coordinate;
            if (message.vertical != null && message.hasOwnProperty("vertical"))
                object.vertical = message.vertical;
            return object;
        };

        /**
         * Converts this Ship to JSON.
         * @function toJSON
         * @memberof ActionSetup.Ship
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Ship.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Ship;
    })();

    return ActionSetup;
})();

export const ActionFire = $root.ActionFire = (() => {

    /**
     * Properties of an ActionFire.
     * @exports IActionFire
     * @interface IActionFire
     * @property {string|null} [coordinate] ActionFire coordinate
     */

    /**
     * Constructs a new ActionFire.
     * @exports ActionFire
     * @classdesc Represents an ActionFire.
     * @implements IActionFire
     * @constructor
     * @param {IActionFire=} [properties] Properties to set
     */
    function ActionFire(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ActionFire coordinate.
     * @member {string} coordinate
     * @memberof ActionFire
     * @instance
     */
    ActionFire.prototype.coordinate = "";

    /**
     * Creates a new ActionFire instance using the specified properties.
     * @function create
     * @memberof ActionFire
     * @static
     * @param {IActionFire=} [properties] Properties to set
     * @returns {ActionFire} ActionFire instance
     */
    ActionFire.create = function create(properties) {
        return new ActionFire(properties);
    };

    /**
     * Encodes the specified ActionFire message. Does not implicitly {@link ActionFire.verify|verify} messages.
     * @function encode
     * @memberof ActionFire
     * @static
     * @param {IActionFire} message ActionFire message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionFire.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.coordinate != null && Object.hasOwnProperty.call(message, "coordinate"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.coordinate);
        return writer;
    };

    /**
     * Encodes the specified ActionFire message, length delimited. Does not implicitly {@link ActionFire.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ActionFire
     * @static
     * @param {IActionFire} message ActionFire message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ActionFire.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ActionFire message from the specified reader or buffer.
     * @function decode
     * @memberof ActionFire
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ActionFire} ActionFire
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionFire.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ActionFire();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.coordinate = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ActionFire message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ActionFire
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ActionFire} ActionFire
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ActionFire.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ActionFire message.
     * @function verify
     * @memberof ActionFire
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ActionFire.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.coordinate != null && message.hasOwnProperty("coordinate"))
            if (!$util.isString(message.coordinate))
                return "coordinate: string expected";
        return null;
    };

    /**
     * Creates an ActionFire message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ActionFire
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ActionFire} ActionFire
     */
    ActionFire.fromObject = function fromObject(object) {
        if (object instanceof $root.ActionFire)
            return object;
        let message = new $root.ActionFire();
        if (object.coordinate != null)
            message.coordinate = String(object.coordinate);
        return message;
    };

    /**
     * Creates a plain object from an ActionFire message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ActionFire
     * @static
     * @param {ActionFire} message ActionFire
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ActionFire.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.coordinate = "";
        if (message.coordinate != null && message.hasOwnProperty("coordinate"))
            object.coordinate = message.coordinate;
        return object;
    };

    /**
     * Converts this ActionFire to JSON.
     * @function toJSON
     * @memberof ActionFire
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ActionFire.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ActionFire;
})();

export { $root as default };
