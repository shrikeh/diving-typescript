import * as $protobuf from "protobufjs";
/** Namespace auth. */
export namespace auth {

    /** Properties of a LoginCredentials. */
    interface ILoginCredentials {

        /** LoginCredentials credentials */
        credentials?: (string|null);
    }

    /** Represents a LoginCredentials. */
    class LoginCredentials implements ILoginCredentials {

        /**
         * Constructs a new LoginCredentials.
         * @param [properties] Properties to set
         */
        constructor(properties?: auth.ILoginCredentials);

        /** LoginCredentials credentials. */
        public credentials: string;

        /**
         * Creates a new LoginCredentials instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginCredentials instance
         */
        public static create(properties?: auth.ILoginCredentials): auth.LoginCredentials;

        /**
         * Encodes the specified LoginCredentials message. Does not implicitly {@link auth.LoginCredentials.verify|verify} messages.
         * @param message LoginCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: auth.ILoginCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginCredentials message, length delimited. Does not implicitly {@link auth.LoginCredentials.verify|verify} messages.
         * @param message LoginCredentials message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: auth.ILoginCredentials, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginCredentials message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): auth.LoginCredentials;

        /**
         * Decodes a LoginCredentials message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): auth.LoginCredentials;

        /**
         * Verifies a LoginCredentials message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginCredentials message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginCredentials
         */
        public static fromObject(object: { [k: string]: any }): auth.LoginCredentials;

        /**
         * Creates a plain object from a LoginCredentials message. Also converts values to other types if specified.
         * @param message LoginCredentials
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: auth.LoginCredentials, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginCredentials to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
