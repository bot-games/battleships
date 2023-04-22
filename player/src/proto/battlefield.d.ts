import * as $protobuf from "protobufjs";
/** Properties of an Options. */
export interface IOptions {
}

/** Represents an Options. */
export class Options implements IOptions {

    /**
     * Constructs a new Options.
     * @param [properties] Properties to set
     */
    constructor(properties?: IOptions);

    /**
     * Creates a new Options instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Options instance
     */
    public static create(properties?: IOptions): Options;

    /**
     * Encodes the specified Options message. Does not implicitly {@link Options.verify|verify} messages.
     * @param message Options message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Options message, length delimited. Does not implicitly {@link Options.verify|verify} messages.
     * @param message Options message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Options message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Options
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Options;

    /**
     * Decodes an Options message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Options
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Options;

    /**
     * Verifies an Options message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Options message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Options
     */
    public static fromObject(object: { [k: string]: any }): Options;

    /**
     * Creates a plain object from an Options message. Also converts values to other types if specified.
     * @param message Options
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Options to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a State. */
export interface IState {

    /** State field1 */
    field1?: (Cell[]|null);

    /** State field2 */
    field2?: (Cell[]|null);
}

/** Represents a State. */
export class State implements IState {

    /**
     * Constructs a new State.
     * @param [properties] Properties to set
     */
    constructor(properties?: IState);

    /** State field1. */
    public field1: Cell[];

    /** State field2. */
    public field2: Cell[];

    /**
     * Creates a new State instance using the specified properties.
     * @param [properties] Properties to set
     * @returns State instance
     */
    public static create(properties?: IState): State;

    /**
     * Encodes the specified State message. Does not implicitly {@link State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified State message, length delimited. Does not implicitly {@link State.verify|verify} messages.
     * @param message State message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a State message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): State;

    /**
     * Decodes a State message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns State
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): State;

    /**
     * Verifies a State message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a State message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns State
     */
    public static fromObject(object: { [k: string]: any }): State;

    /**
     * Creates a plain object from a State message. Also converts values to other types if specified.
     * @param message State
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: State, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this State to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Cell enum. */
export enum Cell {
    EMPTY = 0,
    SHIP = 1,
    MISSED = 2,
    GOT = 3
}

/** Represents an Action. */
export class Action implements IAction {

    /**
     * Constructs a new Action.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAction);

    /** Action skip. */
    public skip?: (IActionSkip|null);

    /** Action setup. */
    public setup?: (IActionSetup|null);

    /** Action fire. */
    public fire?: (IActionFire|null);

    /** Action data. */
    public data?: ("skip"|"setup"|"fire");

    /**
     * Creates a new Action instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Action instance
     */
    public static create(properties?: IAction): Action;

    /**
     * Encodes the specified Action message. Does not implicitly {@link Action.verify|verify} messages.
     * @param message Action message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Action message, length delimited. Does not implicitly {@link Action.verify|verify} messages.
     * @param message Action message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAction, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Action message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Action;

    /**
     * Decodes an Action message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Action
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Action;

    /**
     * Verifies an Action message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Action message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Action
     */
    public static fromObject(object: { [k: string]: any }): Action;

    /**
     * Creates a plain object from an Action message. Also converts values to other types if specified.
     * @param message Action
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Action, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Action to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ActionSkip. */
export class ActionSkip implements IActionSkip {

    /**
     * Constructs a new ActionSkip.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionSkip);

    /**
     * Creates a new ActionSkip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionSkip instance
     */
    public static create(properties?: IActionSkip): ActionSkip;

    /**
     * Encodes the specified ActionSkip message. Does not implicitly {@link ActionSkip.verify|verify} messages.
     * @param message ActionSkip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionSkip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionSkip message, length delimited. Does not implicitly {@link ActionSkip.verify|verify} messages.
     * @param message ActionSkip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionSkip, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionSkip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionSkip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionSkip;

    /**
     * Decodes an ActionSkip message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionSkip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionSkip;

    /**
     * Verifies an ActionSkip message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionSkip message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionSkip
     */
    public static fromObject(object: { [k: string]: any }): ActionSkip;

    /**
     * Creates a plain object from an ActionSkip message. Also converts values to other types if specified.
     * @param message ActionSkip
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionSkip, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionSkip to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Represents an ActionSetup. */
export class ActionSetup implements IActionSetup {

    /**
     * Constructs a new ActionSetup.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionSetup);

    /** ActionSetup shipL4N1. */
    public shipL4N1?: (ActionSetup.IShip|null);

    /** ActionSetup shipL3N1. */
    public shipL3N1?: (ActionSetup.IShip|null);

    /** ActionSetup shipL3N2. */
    public shipL3N2?: (ActionSetup.IShip|null);

    /** ActionSetup shipL2N1. */
    public shipL2N1?: (ActionSetup.IShip|null);

    /** ActionSetup shipL2N2. */
    public shipL2N2?: (ActionSetup.IShip|null);

    /** ActionSetup shipL2N3. */
    public shipL2N3?: (ActionSetup.IShip|null);

    /** ActionSetup shipL1N1. */
    public shipL1N1?: (ActionSetup.IShip|null);

    /** ActionSetup shipL1N2. */
    public shipL1N2?: (ActionSetup.IShip|null);

    /** ActionSetup shipL1N3. */
    public shipL1N3?: (ActionSetup.IShip|null);

    /** ActionSetup shipL1N4. */
    public shipL1N4?: (ActionSetup.IShip|null);

    /**
     * Creates a new ActionSetup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionSetup instance
     */
    public static create(properties?: IActionSetup): ActionSetup;

    /**
     * Encodes the specified ActionSetup message. Does not implicitly {@link ActionSetup.verify|verify} messages.
     * @param message ActionSetup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionSetup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionSetup message, length delimited. Does not implicitly {@link ActionSetup.verify|verify} messages.
     * @param message ActionSetup message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionSetup, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionSetup message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionSetup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionSetup;

    /**
     * Decodes an ActionSetup message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionSetup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionSetup;

    /**
     * Verifies an ActionSetup message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionSetup message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionSetup
     */
    public static fromObject(object: { [k: string]: any }): ActionSetup;

    /**
     * Creates a plain object from an ActionSetup message. Also converts values to other types if specified.
     * @param message ActionSetup
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionSetup, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionSetup to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ActionSetup {

    /** Properties of a Ship. */
    interface IShip {

        /** Ship coordinate */
        coordinate?: (string|null);

        /** Ship vertical */
        vertical?: (boolean|null);
    }

    /** Represents a Ship. */
    class Ship implements IShip {

        /**
         * Constructs a new Ship.
         * @param [properties] Properties to set
         */
        constructor(properties?: ActionSetup.IShip);

        /** Ship coordinate. */
        public coordinate: string;

        /** Ship vertical. */
        public vertical: boolean;

        /**
         * Creates a new Ship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Ship instance
         */
        public static create(properties?: ActionSetup.IShip): ActionSetup.Ship;

        /**
         * Encodes the specified Ship message. Does not implicitly {@link ActionSetup.Ship.verify|verify} messages.
         * @param message Ship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: ActionSetup.IShip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Ship message, length delimited. Does not implicitly {@link ActionSetup.Ship.verify|verify} messages.
         * @param message Ship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: ActionSetup.IShip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Ship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Ship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionSetup.Ship;

        /**
         * Decodes a Ship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Ship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionSetup.Ship;

        /**
         * Verifies a Ship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Ship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Ship
         */
        public static fromObject(object: { [k: string]: any }): ActionSetup.Ship;

        /**
         * Creates a plain object from a Ship message. Also converts values to other types if specified.
         * @param message Ship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: ActionSetup.Ship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Ship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Represents an ActionFire. */
export class ActionFire implements IActionFire {

    /**
     * Constructs a new ActionFire.
     * @param [properties] Properties to set
     */
    constructor(properties?: IActionFire);

    /** ActionFire coordinate. */
    public coordinate: string;

    /**
     * Creates a new ActionFire instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ActionFire instance
     */
    public static create(properties?: IActionFire): ActionFire;

    /**
     * Encodes the specified ActionFire message. Does not implicitly {@link ActionFire.verify|verify} messages.
     * @param message ActionFire message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IActionFire, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ActionFire message, length delimited. Does not implicitly {@link ActionFire.verify|verify} messages.
     * @param message ActionFire message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IActionFire, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ActionFire message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ActionFire
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ActionFire;

    /**
     * Decodes an ActionFire message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ActionFire
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ActionFire;

    /**
     * Verifies an ActionFire message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ActionFire message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ActionFire
     */
    public static fromObject(object: { [k: string]: any }): ActionFire;

    /**
     * Creates a plain object from an ActionFire message. Also converts values to other types if specified.
     * @param message ActionFire
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ActionFire, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ActionFire to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
