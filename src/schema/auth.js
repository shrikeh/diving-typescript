/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const auth = $root.auth = (() => {

    /**
     * Namespace auth.
     * @exports auth
     * @namespace
     */
    const auth = {};

    auth.LoginCredentials = (function() {

        /**
         * Properties of a LoginCredentials.
         * @memberof auth
         * @interface ILoginCredentials
         * @property {string|null} [credentials] LoginCredentials credentials
         */

        /**
         * Constructs a new LoginCredentials.
         * @memberof auth
         * @classdesc Represents a LoginCredentials.
         * @implements ILoginCredentials
         * @constructor
         * @param {auth.ILoginCredentials=} [properties] Properties to set
         */
        function LoginCredentials(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginCredentials credentials.
         * @member {string} credentials
         * @memberof auth.LoginCredentials
         * @instance
         */
        LoginCredentials.prototype.credentials = "";

        /**
         * Creates a new LoginCredentials instance using the specified properties.
         * @function create
         * @memberof auth.LoginCredentials
         * @static
         * @param {auth.ILoginCredentials=} [properties] Properties to set
         * @returns {auth.LoginCredentials} LoginCredentials instance
         */
        LoginCredentials.create = function create(properties) {
            return new LoginCredentials(properties);
        };

        /**
         * Encodes the specified LoginCredentials message. Does not implicitly {@link auth.LoginCredentials.verify|verify} messages.
         * @function encode
         * @memberof auth.LoginCredentials
         * @static
         * @param {auth.ILoginCredentials} message LoginCredentials message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCredentials.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.credentials != null && Object.hasOwnProperty.call(message, "credentials"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.credentials);
            return writer;
        };

        /**
         * Encodes the specified LoginCredentials message, length delimited. Does not implicitly {@link auth.LoginCredentials.verify|verify} messages.
         * @function encodeDelimited
         * @memberof auth.LoginCredentials
         * @static
         * @param {auth.ILoginCredentials} message LoginCredentials message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginCredentials.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginCredentials message from the specified reader or buffer.
         * @function decode
         * @memberof auth.LoginCredentials
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {auth.LoginCredentials} LoginCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCredentials.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.auth.LoginCredentials();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.credentials = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginCredentials message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof auth.LoginCredentials
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {auth.LoginCredentials} LoginCredentials
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginCredentials.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginCredentials message.
         * @function verify
         * @memberof auth.LoginCredentials
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginCredentials.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                if (!$util.isString(message.credentials))
                    return "credentials: string expected";
            return null;
        };

        /**
         * Creates a LoginCredentials message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof auth.LoginCredentials
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {auth.LoginCredentials} LoginCredentials
         */
        LoginCredentials.fromObject = function fromObject(object) {
            if (object instanceof $root.auth.LoginCredentials)
                return object;
            let message = new $root.auth.LoginCredentials();
            if (object.credentials != null)
                message.credentials = String(object.credentials);
            return message;
        };

        /**
         * Creates a plain object from a LoginCredentials message. Also converts values to other types if specified.
         * @function toObject
         * @memberof auth.LoginCredentials
         * @static
         * @param {auth.LoginCredentials} message LoginCredentials
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginCredentials.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.credentials = "";
            if (message.credentials != null && message.hasOwnProperty("credentials"))
                object.credentials = message.credentials;
            return object;
        };

        /**
         * Converts this LoginCredentials to JSON.
         * @function toJSON
         * @memberof auth.LoginCredentials
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginCredentials.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginCredentials;
    })();

    return auth;
})();

export { $root as default };
