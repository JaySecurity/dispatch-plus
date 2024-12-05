import { app, BrowserWindow } from "electron";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import path$1 from "node:path";
import require$$1$1 from "process";
import require$$0$1 from "tls";
import require$$0 from "fs";
import require$$0$2 from "os";
import require$$0$3 from "net";
import require$$0$4 from "events";
import require$$1$2 from "stream";
import require$$1$3 from "path";
import require$$0$5 from "http2";
import require$$3$1 from "http";
import require$$7 from "url";
import require$$1$4 from "dns";
import require$$0$6 from "zlib";
import require$$1$5 from "util";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var src$2 = {};
var callCredentials = {};
var metadata = {};
var logging$9 = {};
var constants = {};
Object.defineProperty(constants, "__esModule", { value: true });
constants.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = constants.DEFAULT_MAX_SEND_MESSAGE_LENGTH = constants.Propagate = constants.LogVerbosity = constants.Status = void 0;
var Status;
(function(Status2) {
  Status2[Status2["OK"] = 0] = "OK";
  Status2[Status2["CANCELLED"] = 1] = "CANCELLED";
  Status2[Status2["UNKNOWN"] = 2] = "UNKNOWN";
  Status2[Status2["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
  Status2[Status2["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
  Status2[Status2["NOT_FOUND"] = 5] = "NOT_FOUND";
  Status2[Status2["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
  Status2[Status2["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
  Status2[Status2["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
  Status2[Status2["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
  Status2[Status2["ABORTED"] = 10] = "ABORTED";
  Status2[Status2["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
  Status2[Status2["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
  Status2[Status2["INTERNAL"] = 13] = "INTERNAL";
  Status2[Status2["UNAVAILABLE"] = 14] = "UNAVAILABLE";
  Status2[Status2["DATA_LOSS"] = 15] = "DATA_LOSS";
  Status2[Status2["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
})(Status || (constants.Status = Status = {}));
var LogVerbosity;
(function(LogVerbosity2) {
  LogVerbosity2[LogVerbosity2["DEBUG"] = 0] = "DEBUG";
  LogVerbosity2[LogVerbosity2["INFO"] = 1] = "INFO";
  LogVerbosity2[LogVerbosity2["ERROR"] = 2] = "ERROR";
  LogVerbosity2[LogVerbosity2["NONE"] = 3] = "NONE";
})(LogVerbosity || (constants.LogVerbosity = LogVerbosity = {}));
var Propagate;
(function(Propagate2) {
  Propagate2[Propagate2["DEADLINE"] = 1] = "DEADLINE";
  Propagate2[Propagate2["CENSUS_STATS_CONTEXT"] = 2] = "CENSUS_STATS_CONTEXT";
  Propagate2[Propagate2["CENSUS_TRACING_CONTEXT"] = 4] = "CENSUS_TRACING_CONTEXT";
  Propagate2[Propagate2["CANCELLATION"] = 8] = "CANCELLATION";
  Propagate2[Propagate2["DEFAULTS"] = 65535] = "DEFAULTS";
})(Propagate || (constants.Propagate = Propagate = {}));
constants.DEFAULT_MAX_SEND_MESSAGE_LENGTH = -1;
constants.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH = 4 * 1024 * 1024;
const name = "@grpc/grpc-js";
const version = "1.12.3";
const description = "gRPC Library for Node - pure JS implementation";
const homepage = "https://grpc.io/";
const repository = "https://github.com/grpc/grpc-node/tree/master/packages/grpc-js";
const main = "build/src/index.js";
const engines = {
  node: ">=12.10.0"
};
const keywords = [];
const author = {
  name: "Google Inc."
};
const types$1 = "build/src/index.d.ts";
const license = "Apache-2.0";
const devDependencies = {
  "@grpc/proto-loader": "file:../proto-loader",
  "@types/gulp": "^4.0.17",
  "@types/gulp-mocha": "0.0.37",
  "@types/lodash": "^4.14.202",
  "@types/mocha": "^10.0.6",
  "@types/ncp": "^2.0.8",
  "@types/node": ">=20.11.20",
  "@types/pify": "^5.0.4",
  "@types/semver": "^7.5.8",
  "@typescript-eslint/eslint-plugin": "^7.1.0",
  "@typescript-eslint/parser": "^7.1.0",
  "@typescript-eslint/typescript-estree": "^7.1.0",
  "clang-format": "^1.8.0",
  eslint: "^8.42.0",
  "eslint-config-prettier": "^8.8.0",
  "eslint-plugin-node": "^11.1.0",
  "eslint-plugin-prettier": "^4.2.1",
  execa: "^2.0.3",
  gulp: "^4.0.2",
  "gulp-mocha": "^6.0.0",
  lodash: "^4.17.21",
  madge: "^5.0.1",
  "mocha-jenkins-reporter": "^0.4.1",
  ncp: "^2.0.0",
  pify: "^4.0.1",
  prettier: "^2.8.8",
  rimraf: "^3.0.2",
  semver: "^7.6.0",
  "ts-node": "^10.9.2",
  typescript: "^5.3.3"
};
const contributors = [
  {
    name: "Google Inc."
  }
];
const scripts = {
  build: "npm run compile",
  clean: "rimraf ./build",
  compile: "tsc -p .",
  format: 'clang-format -i -style="{Language: JavaScript, BasedOnStyle: Google, ColumnLimit: 80}" src/*.ts test/*.ts',
  lint: "eslint src/*.ts test/*.ts",
  prepare: "npm run generate-types && npm run compile",
  test: "gulp test",
  check: "npm run lint",
  fix: "eslint --fix src/*.ts test/*.ts",
  pretest: "npm run generate-types && npm run generate-test-types && npm run compile",
  posttest: "npm run check && madge -c ./build/src",
  "generate-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --includeDirs proto/ --include-dirs test/fixtures/ -O src/generated/ --grpcLib ../index channelz.proto",
  "generate-test-types": "proto-loader-gen-types --keepCase --longs String --enums String --defaults --oneofs --includeComments --include-dirs test/fixtures/ -O test/generated/ --grpcLib ../../src/index test_service.proto"
};
const dependencies = {
  "@grpc/proto-loader": "^0.7.13",
  "@js-sdsl/ordered-map": "^4.4.2"
};
const files = [
  "src/**/*.ts",
  "build/src/**/*.{js,d.ts,js.map}",
  "proto/*.proto",
  "LICENSE",
  "deps/envoy-api/envoy/api/v2/**/*.proto",
  "deps/envoy-api/envoy/config/**/*.proto",
  "deps/envoy-api/envoy/service/**/*.proto",
  "deps/envoy-api/envoy/type/**/*.proto",
  "deps/udpa/udpa/**/*.proto",
  "deps/googleapis/google/api/*.proto",
  "deps/googleapis/google/rpc/*.proto",
  "deps/protoc-gen-validate/validate/**/*.proto"
];
const require$$12 = {
  name,
  version,
  description,
  homepage,
  repository,
  main,
  engines,
  keywords,
  author,
  types: types$1,
  license,
  devDependencies,
  contributors,
  scripts,
  dependencies,
  files
};
(function(exports) {
  var _a, _b, _c, _d;
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isTracerEnabled = exports.trace = exports.log = exports.setLoggerVerbosity = exports.setLogger = exports.getLogger = void 0;
  const constants_12 = constants;
  const process_1 = require$$1$1;
  const clientVersion = require$$12.version;
  const DEFAULT_LOGGER = {
    error: (message2, ...optionalParams) => {
      console.error("E " + message2, ...optionalParams);
    },
    info: (message2, ...optionalParams) => {
      console.error("I " + message2, ...optionalParams);
    },
    debug: (message2, ...optionalParams) => {
      console.error("D " + message2, ...optionalParams);
    }
  };
  let _logger = DEFAULT_LOGGER;
  let _logVerbosity = constants_12.LogVerbosity.ERROR;
  const verbosityString = (_b = (_a = process.env.GRPC_NODE_VERBOSITY) !== null && _a !== void 0 ? _a : process.env.GRPC_VERBOSITY) !== null && _b !== void 0 ? _b : "";
  switch (verbosityString.toUpperCase()) {
    case "DEBUG":
      _logVerbosity = constants_12.LogVerbosity.DEBUG;
      break;
    case "INFO":
      _logVerbosity = constants_12.LogVerbosity.INFO;
      break;
    case "ERROR":
      _logVerbosity = constants_12.LogVerbosity.ERROR;
      break;
    case "NONE":
      _logVerbosity = constants_12.LogVerbosity.NONE;
      break;
  }
  const getLogger = () => {
    return _logger;
  };
  exports.getLogger = getLogger;
  const setLogger = (logger) => {
    _logger = logger;
  };
  exports.setLogger = setLogger;
  const setLoggerVerbosity = (verbosity) => {
    _logVerbosity = verbosity;
  };
  exports.setLoggerVerbosity = setLoggerVerbosity;
  const log = (severity, ...args) => {
    let logFunction;
    if (severity >= _logVerbosity) {
      switch (severity) {
        case constants_12.LogVerbosity.DEBUG:
          logFunction = _logger.debug;
          break;
        case constants_12.LogVerbosity.INFO:
          logFunction = _logger.info;
          break;
        case constants_12.LogVerbosity.ERROR:
          logFunction = _logger.error;
          break;
      }
      if (!logFunction) {
        logFunction = _logger.error;
      }
      if (logFunction) {
        logFunction.bind(_logger)(...args);
      }
    }
  };
  exports.log = log;
  const tracersString = (_d = (_c = process.env.GRPC_NODE_TRACE) !== null && _c !== void 0 ? _c : process.env.GRPC_TRACE) !== null && _d !== void 0 ? _d : "";
  const enabledTracers = /* @__PURE__ */ new Set();
  const disabledTracers = /* @__PURE__ */ new Set();
  for (const tracerName of tracersString.split(",")) {
    if (tracerName.startsWith("-")) {
      disabledTracers.add(tracerName.substring(1));
    } else {
      enabledTracers.add(tracerName);
    }
  }
  const allEnabled = enabledTracers.has("all");
  function trace2(severity, tracer, text) {
    if (isTracerEnabled(tracer)) {
      (0, exports.log)(severity, (/* @__PURE__ */ new Date()).toISOString() + " | v" + clientVersion + " " + process_1.pid + " | " + tracer + " | " + text);
    }
  }
  exports.trace = trace2;
  function isTracerEnabled(tracer) {
    return !disabledTracers.has(tracer) && (allEnabled || enabledTracers.has(tracer));
  }
  exports.isTracerEnabled = isTracerEnabled;
})(logging$9);
var error = {};
Object.defineProperty(error, "__esModule", { value: true });
error.getErrorCode = error.getErrorMessage = void 0;
function getErrorMessage(error2) {
  if (error2 instanceof Error) {
    return error2.message;
  } else {
    return String(error2);
  }
}
error.getErrorMessage = getErrorMessage;
function getErrorCode(error2) {
  if (typeof error2 === "object" && error2 !== null && "code" in error2 && typeof error2.code === "number") {
    return error2.code;
  } else {
    return null;
  }
}
error.getErrorCode = getErrorCode;
Object.defineProperty(metadata, "__esModule", { value: true });
metadata.Metadata = void 0;
const logging_1$1 = logging$9;
const constants_1$e = constants;
const error_1$2 = error;
const LEGAL_KEY_REGEX = /^[0-9a-z_.-]+$/;
const LEGAL_NON_BINARY_VALUE_REGEX = /^[ -~]*$/;
function isLegalKey(key) {
  return LEGAL_KEY_REGEX.test(key);
}
function isLegalNonBinaryValue(value) {
  return LEGAL_NON_BINARY_VALUE_REGEX.test(value);
}
function isBinaryKey(key) {
  return key.endsWith("-bin");
}
function isCustomMetadata(key) {
  return !key.startsWith("grpc-");
}
function normalizeKey(key) {
  return key.toLowerCase();
}
function validate(key, value) {
  if (!isLegalKey(key)) {
    throw new Error('Metadata key "' + key + '" contains illegal characters');
  }
  if (value !== null && value !== void 0) {
    if (isBinaryKey(key)) {
      if (!Buffer.isBuffer(value)) {
        throw new Error("keys that end with '-bin' must have Buffer values");
      }
    } else {
      if (Buffer.isBuffer(value)) {
        throw new Error("keys that don't end with '-bin' must have String values");
      }
      if (!isLegalNonBinaryValue(value)) {
        throw new Error('Metadata string value "' + value + '" contains illegal characters');
      }
    }
  }
}
class Metadata {
  constructor(options = {}) {
    this.internalRepr = /* @__PURE__ */ new Map();
    this.options = options;
  }
  /**
   * Sets the given value for the given key by replacing any other values
   * associated with that key. Normalizes the key.
   * @param key The key to whose value should be set.
   * @param value The value to set. Must be a buffer if and only
   *   if the normalized key ends with '-bin'.
   */
  set(key, value) {
    key = normalizeKey(key);
    validate(key, value);
    this.internalRepr.set(key, [value]);
  }
  /**
   * Adds the given value for the given key by appending to a list of previous
   * values associated with that key. Normalizes the key.
   * @param key The key for which a new value should be appended.
   * @param value The value to add. Must be a buffer if and only
   *   if the normalized key ends with '-bin'.
   */
  add(key, value) {
    key = normalizeKey(key);
    validate(key, value);
    const existingValue = this.internalRepr.get(key);
    if (existingValue === void 0) {
      this.internalRepr.set(key, [value]);
    } else {
      existingValue.push(value);
    }
  }
  /**
   * Removes the given key and any associated values. Normalizes the key.
   * @param key The key whose values should be removed.
   */
  remove(key) {
    key = normalizeKey(key);
    this.internalRepr.delete(key);
  }
  /**
   * Gets a list of all values associated with the key. Normalizes the key.
   * @param key The key whose value should be retrieved.
   * @return A list of values associated with the given key.
   */
  get(key) {
    key = normalizeKey(key);
    return this.internalRepr.get(key) || [];
  }
  /**
   * Gets a plain object mapping each key to the first value associated with it.
   * This reflects the most common way that people will want to see metadata.
   * @return A key/value mapping of the metadata.
   */
  getMap() {
    const result = {};
    for (const [key, values] of this.internalRepr) {
      if (values.length > 0) {
        const v = values[0];
        result[key] = Buffer.isBuffer(v) ? Buffer.from(v) : v;
      }
    }
    return result;
  }
  /**
   * Clones the metadata object.
   * @return The newly cloned object.
   */
  clone() {
    const newMetadata = new Metadata(this.options);
    const newInternalRepr = newMetadata.internalRepr;
    for (const [key, value] of this.internalRepr) {
      const clonedValue = value.map((v) => {
        if (Buffer.isBuffer(v)) {
          return Buffer.from(v);
        } else {
          return v;
        }
      });
      newInternalRepr.set(key, clonedValue);
    }
    return newMetadata;
  }
  /**
   * Merges all key-value pairs from a given Metadata object into this one.
   * If both this object and the given object have values in the same key,
   * values from the other Metadata object will be appended to this object's
   * values.
   * @param other A Metadata object.
   */
  merge(other) {
    for (const [key, values] of other.internalRepr) {
      const mergedValue = (this.internalRepr.get(key) || []).concat(values);
      this.internalRepr.set(key, mergedValue);
    }
  }
  setOptions(options) {
    this.options = options;
  }
  getOptions() {
    return this.options;
  }
  /**
   * Creates an OutgoingHttpHeaders object that can be used with the http2 API.
   */
  toHttp2Headers() {
    const result = {};
    for (const [key, values] of this.internalRepr) {
      result[key] = values.map(bufToString);
    }
    return result;
  }
  /**
   * This modifies the behavior of JSON.stringify to show an object
   * representation of the metadata map.
   */
  toJSON() {
    const result = {};
    for (const [key, values] of this.internalRepr) {
      result[key] = values;
    }
    return result;
  }
  /**
   * Returns a new Metadata object based fields in a given IncomingHttpHeaders
   * object.
   * @param headers An IncomingHttpHeaders object.
   */
  static fromHttp2Headers(headers) {
    const result = new Metadata();
    for (const key of Object.keys(headers)) {
      if (key.charAt(0) === ":") {
        continue;
      }
      const values = headers[key];
      try {
        if (isBinaryKey(key)) {
          if (Array.isArray(values)) {
            values.forEach((value) => {
              result.add(key, Buffer.from(value, "base64"));
            });
          } else if (values !== void 0) {
            if (isCustomMetadata(key)) {
              values.split(",").forEach((v) => {
                result.add(key, Buffer.from(v.trim(), "base64"));
              });
            } else {
              result.add(key, Buffer.from(values, "base64"));
            }
          }
        } else {
          if (Array.isArray(values)) {
            values.forEach((value) => {
              result.add(key, value);
            });
          } else if (values !== void 0) {
            result.add(key, values);
          }
        }
      } catch (error2) {
        const message2 = `Failed to add metadata entry ${key}: ${values}. ${(0, error_1$2.getErrorMessage)(error2)}. For more information see https://github.com/grpc/grpc-node/issues/1173`;
        (0, logging_1$1.log)(constants_1$e.LogVerbosity.ERROR, message2);
      }
    }
    return result;
  }
}
metadata.Metadata = Metadata;
const bufToString = (val) => {
  return Buffer.isBuffer(val) ? val.toString("base64") : val;
};
Object.defineProperty(callCredentials, "__esModule", { value: true });
callCredentials.CallCredentials = void 0;
const metadata_1$9 = metadata;
function isCurrentOauth2Client(client2) {
  return "getRequestHeaders" in client2 && typeof client2.getRequestHeaders === "function";
}
class CallCredentials {
  /**
   * Creates a new CallCredentials object from a given function that generates
   * Metadata objects.
   * @param metadataGenerator A function that accepts a set of options, and
   * generates a Metadata object based on these options, which is passed back
   * to the caller via a supplied (err, metadata) callback.
   */
  static createFromMetadataGenerator(metadataGenerator) {
    return new SingleCallCredentials(metadataGenerator);
  }
  /**
   * Create a gRPC credential from a Google credential object.
   * @param googleCredentials The authentication client to use.
   * @return The resulting CallCredentials object.
   */
  static createFromGoogleCredential(googleCredentials) {
    return CallCredentials.createFromMetadataGenerator((options, callback) => {
      let getHeaders;
      if (isCurrentOauth2Client(googleCredentials)) {
        getHeaders = googleCredentials.getRequestHeaders(options.service_url);
      } else {
        getHeaders = new Promise((resolve, reject) => {
          googleCredentials.getRequestMetadata(options.service_url, (err, headers) => {
            if (err) {
              reject(err);
              return;
            }
            if (!headers) {
              reject(new Error("Headers not set by metadata plugin"));
              return;
            }
            resolve(headers);
          });
        });
      }
      getHeaders.then((headers) => {
        const metadata2 = new metadata_1$9.Metadata();
        for (const key of Object.keys(headers)) {
          metadata2.add(key, headers[key]);
        }
        callback(null, metadata2);
      }, (err) => {
        callback(err);
      });
    });
  }
  static createEmpty() {
    return new EmptyCallCredentials();
  }
}
callCredentials.CallCredentials = CallCredentials;
class ComposedCallCredentials extends CallCredentials {
  constructor(creds) {
    super();
    this.creds = creds;
  }
  async generateMetadata(options) {
    const base = new metadata_1$9.Metadata();
    const generated = await Promise.all(this.creds.map((cred) => cred.generateMetadata(options)));
    for (const gen of generated) {
      base.merge(gen);
    }
    return base;
  }
  compose(other) {
    return new ComposedCallCredentials(this.creds.concat([other]));
  }
  _equals(other) {
    if (this === other) {
      return true;
    }
    if (other instanceof ComposedCallCredentials) {
      return this.creds.every((value, index) => value._equals(other.creds[index]));
    } else {
      return false;
    }
  }
}
class SingleCallCredentials extends CallCredentials {
  constructor(metadataGenerator) {
    super();
    this.metadataGenerator = metadataGenerator;
  }
  generateMetadata(options) {
    return new Promise((resolve, reject) => {
      this.metadataGenerator(options, (err, metadata2) => {
        if (metadata2 !== void 0) {
          resolve(metadata2);
        } else {
          reject(err);
        }
      });
    });
  }
  compose(other) {
    return new ComposedCallCredentials([this, other]);
  }
  _equals(other) {
    if (this === other) {
      return true;
    }
    if (other instanceof SingleCallCredentials) {
      return this.metadataGenerator === other.metadataGenerator;
    } else {
      return false;
    }
  }
}
class EmptyCallCredentials extends CallCredentials {
  generateMetadata(options) {
    return Promise.resolve(new metadata_1$9.Metadata());
  }
  compose(other) {
    return other;
  }
  _equals(other) {
    return other instanceof EmptyCallCredentials;
  }
}
var channel = {};
var channelCredentials = {};
var tlsHelpers = {};
Object.defineProperty(tlsHelpers, "__esModule", { value: true });
tlsHelpers.getDefaultRootsData = tlsHelpers.CIPHER_SUITES = void 0;
const fs = require$$0;
tlsHelpers.CIPHER_SUITES = process.env.GRPC_SSL_CIPHER_SUITES;
const DEFAULT_ROOTS_FILE_PATH = process.env.GRPC_DEFAULT_SSL_ROOTS_FILE_PATH;
let defaultRootsData = null;
function getDefaultRootsData() {
  if (DEFAULT_ROOTS_FILE_PATH) {
    if (defaultRootsData === null) {
      defaultRootsData = fs.readFileSync(DEFAULT_ROOTS_FILE_PATH);
    }
    return defaultRootsData;
  }
  return null;
}
tlsHelpers.getDefaultRootsData = getDefaultRootsData;
Object.defineProperty(channelCredentials, "__esModule", { value: true });
channelCredentials.createCertificateProviderChannelCredentials = channelCredentials.ChannelCredentials = void 0;
const tls_1 = require$$0$1;
const call_credentials_1 = callCredentials;
const tls_helpers_1$1 = tlsHelpers;
function verifyIsBufferOrNull(obj, friendlyName) {
  if (obj && !(obj instanceof Buffer)) {
    throw new TypeError(`${friendlyName}, if provided, must be a Buffer.`);
  }
}
class ChannelCredentials {
  constructor(callCredentials2) {
    this.callCredentials = callCredentials2 || call_credentials_1.CallCredentials.createEmpty();
  }
  /**
   * Gets the set of per-call credentials associated with this instance.
   */
  _getCallCredentials() {
    return this.callCredentials;
  }
  _ref() {
  }
  _unref() {
  }
  /**
   * Return a new ChannelCredentials instance with a given set of credentials.
   * The resulting instance can be used to construct a Channel that communicates
   * over TLS.
   * @param rootCerts The root certificate data.
   * @param privateKey The client certificate private key, if available.
   * @param certChain The client certificate key chain, if available.
   * @param verifyOptions Additional options to modify certificate verification
   */
  static createSsl(rootCerts, privateKey, certChain, verifyOptions) {
    var _a;
    verifyIsBufferOrNull(rootCerts, "Root certificate");
    verifyIsBufferOrNull(privateKey, "Private key");
    verifyIsBufferOrNull(certChain, "Certificate chain");
    if (privateKey && !certChain) {
      throw new Error("Private key must be given with accompanying certificate chain");
    }
    if (!privateKey && certChain) {
      throw new Error("Certificate chain must be given with accompanying private key");
    }
    const secureContext = (0, tls_1.createSecureContext)({
      ca: (_a = rootCerts !== null && rootCerts !== void 0 ? rootCerts : (0, tls_helpers_1$1.getDefaultRootsData)()) !== null && _a !== void 0 ? _a : void 0,
      key: privateKey !== null && privateKey !== void 0 ? privateKey : void 0,
      cert: certChain !== null && certChain !== void 0 ? certChain : void 0,
      ciphers: tls_helpers_1$1.CIPHER_SUITES
    });
    return new SecureChannelCredentialsImpl(secureContext, verifyOptions !== null && verifyOptions !== void 0 ? verifyOptions : {});
  }
  /**
   * Return a new ChannelCredentials instance with credentials created using
   * the provided secureContext. The resulting instances can be used to
   * construct a Channel that communicates over TLS. gRPC will not override
   * anything in the provided secureContext, so the environment variables
   * GRPC_SSL_CIPHER_SUITES and GRPC_DEFAULT_SSL_ROOTS_FILE_PATH will
   * not be applied.
   * @param secureContext The return value of tls.createSecureContext()
   * @param verifyOptions Additional options to modify certificate verification
   */
  static createFromSecureContext(secureContext, verifyOptions) {
    return new SecureChannelCredentialsImpl(secureContext, verifyOptions !== null && verifyOptions !== void 0 ? verifyOptions : {});
  }
  /**
   * Return a new ChannelCredentials instance with no credentials.
   */
  static createInsecure() {
    return new InsecureChannelCredentialsImpl();
  }
}
channelCredentials.ChannelCredentials = ChannelCredentials;
class InsecureChannelCredentialsImpl extends ChannelCredentials {
  constructor() {
    super();
  }
  compose(callCredentials2) {
    throw new Error("Cannot compose insecure credentials");
  }
  _getConnectionOptions() {
    return {};
  }
  _isSecure() {
    return false;
  }
  _equals(other) {
    return other instanceof InsecureChannelCredentialsImpl;
  }
}
class SecureChannelCredentialsImpl extends ChannelCredentials {
  constructor(secureContext, verifyOptions) {
    super();
    this.secureContext = secureContext;
    this.verifyOptions = verifyOptions;
    this.connectionOptions = {
      secureContext
    };
    if (verifyOptions === null || verifyOptions === void 0 ? void 0 : verifyOptions.checkServerIdentity) {
      this.connectionOptions.checkServerIdentity = verifyOptions.checkServerIdentity;
    }
    if ((verifyOptions === null || verifyOptions === void 0 ? void 0 : verifyOptions.rejectUnauthorized) !== void 0) {
      this.connectionOptions.rejectUnauthorized = verifyOptions.rejectUnauthorized;
    }
  }
  compose(callCredentials2) {
    const combinedCallCredentials = this.callCredentials.compose(callCredentials2);
    return new ComposedChannelCredentialsImpl(this, combinedCallCredentials);
  }
  _getConnectionOptions() {
    return Object.assign({}, this.connectionOptions);
  }
  _isSecure() {
    return true;
  }
  _equals(other) {
    if (this === other) {
      return true;
    }
    if (other instanceof SecureChannelCredentialsImpl) {
      return this.secureContext === other.secureContext && this.verifyOptions.checkServerIdentity === other.verifyOptions.checkServerIdentity;
    } else {
      return false;
    }
  }
}
class CertificateProviderChannelCredentialsImpl extends ChannelCredentials {
  constructor(caCertificateProvider, identityCertificateProvider, verifyOptions) {
    super();
    this.caCertificateProvider = caCertificateProvider;
    this.identityCertificateProvider = identityCertificateProvider;
    this.verifyOptions = verifyOptions;
    this.refcount = 0;
    this.latestCaUpdate = null;
    this.latestIdentityUpdate = null;
    this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this);
    this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
  }
  compose(callCredentials2) {
    const combinedCallCredentials = this.callCredentials.compose(callCredentials2);
    return new ComposedChannelCredentialsImpl(this, combinedCallCredentials);
  }
  _getConnectionOptions() {
    var _a, _b, _c;
    if (this.latestCaUpdate === null) {
      return null;
    }
    if (this.identityCertificateProvider !== null && this.latestIdentityUpdate === null) {
      return null;
    }
    const secureContext = (0, tls_1.createSecureContext)({
      ca: this.latestCaUpdate.caCertificate,
      key: (_a = this.latestIdentityUpdate) === null || _a === void 0 ? void 0 : _a.privateKey,
      cert: (_b = this.latestIdentityUpdate) === null || _b === void 0 ? void 0 : _b.certificate,
      ciphers: tls_helpers_1$1.CIPHER_SUITES
    });
    const options = {
      secureContext
    };
    if ((_c = this.verifyOptions) === null || _c === void 0 ? void 0 : _c.checkServerIdentity) {
      options.checkServerIdentity = this.verifyOptions.checkServerIdentity;
    }
    return options;
  }
  _isSecure() {
    return true;
  }
  _equals(other) {
    var _a, _b;
    if (this === other) {
      return true;
    }
    if (other instanceof CertificateProviderChannelCredentialsImpl) {
      return this.caCertificateProvider === other.caCertificateProvider && this.identityCertificateProvider === other.identityCertificateProvider && ((_a = this.verifyOptions) === null || _a === void 0 ? void 0 : _a.checkServerIdentity) === ((_b = other.verifyOptions) === null || _b === void 0 ? void 0 : _b.checkServerIdentity);
    } else {
      return false;
    }
  }
  _ref() {
    var _a;
    if (this.refcount === 0) {
      this.caCertificateProvider.addCaCertificateListener(this.caCertificateUpdateListener);
      (_a = this.identityCertificateProvider) === null || _a === void 0 ? void 0 : _a.addIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    this.refcount += 1;
  }
  _unref() {
    var _a;
    this.refcount -= 1;
    if (this.refcount === 0) {
      this.caCertificateProvider.removeCaCertificateListener(this.caCertificateUpdateListener);
      (_a = this.identityCertificateProvider) === null || _a === void 0 ? void 0 : _a.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
  }
  handleCaCertificateUpdate(update) {
    this.latestCaUpdate = update;
  }
  handleIdentityCertitificateUpdate(update) {
    this.latestIdentityUpdate = update;
  }
}
function createCertificateProviderChannelCredentials(caCertificateProvider, identityCertificateProvider, verifyOptions) {
  return new CertificateProviderChannelCredentialsImpl(caCertificateProvider, identityCertificateProvider, verifyOptions !== null && verifyOptions !== void 0 ? verifyOptions : null);
}
channelCredentials.createCertificateProviderChannelCredentials = createCertificateProviderChannelCredentials;
class ComposedChannelCredentialsImpl extends ChannelCredentials {
  constructor(channelCredentials2, callCreds) {
    super(callCreds);
    this.channelCredentials = channelCredentials2;
    if (!channelCredentials2._isSecure()) {
      throw new Error("Cannot compose insecure credentials");
    }
  }
  compose(callCredentials2) {
    const combinedCallCredentials = this.callCredentials.compose(callCredentials2);
    return new ComposedChannelCredentialsImpl(this.channelCredentials, combinedCallCredentials);
  }
  _getConnectionOptions() {
    return this.channelCredentials._getConnectionOptions();
  }
  _isSecure() {
    return true;
  }
  _equals(other) {
    if (this === other) {
      return true;
    }
    if (other instanceof ComposedChannelCredentialsImpl) {
      return this.channelCredentials._equals(other.channelCredentials) && this.callCredentials._equals(other.callCredentials);
    } else {
      return false;
    }
  }
}
var internalChannel = {};
var resolvingLoadBalancer = {};
var loadBalancer = {};
var hasRequiredLoadBalancer;
function requireLoadBalancer() {
  if (hasRequiredLoadBalancer) return loadBalancer;
  hasRequiredLoadBalancer = 1;
  Object.defineProperty(loadBalancer, "__esModule", { value: true });
  loadBalancer.selectLbConfigFromList = loadBalancer.getDefaultConfig = loadBalancer.parseLoadBalancingConfig = loadBalancer.isLoadBalancerNameRegistered = loadBalancer.createLoadBalancer = loadBalancer.registerDefaultLoadBalancerType = loadBalancer.registerLoadBalancerType = loadBalancer.createChildChannelControlHelper = void 0;
  const logging_12 = logging$9;
  const constants_12 = constants;
  function createChildChannelControlHelper(parent, overrides) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    return {
      createSubchannel: (_b = (_a = overrides.createSubchannel) === null || _a === void 0 ? void 0 : _a.bind(overrides)) !== null && _b !== void 0 ? _b : parent.createSubchannel.bind(parent),
      updateState: (_d = (_c = overrides.updateState) === null || _c === void 0 ? void 0 : _c.bind(overrides)) !== null && _d !== void 0 ? _d : parent.updateState.bind(parent),
      requestReresolution: (_f = (_e = overrides.requestReresolution) === null || _e === void 0 ? void 0 : _e.bind(overrides)) !== null && _f !== void 0 ? _f : parent.requestReresolution.bind(parent),
      addChannelzChild: (_h = (_g = overrides.addChannelzChild) === null || _g === void 0 ? void 0 : _g.bind(overrides)) !== null && _h !== void 0 ? _h : parent.addChannelzChild.bind(parent),
      removeChannelzChild: (_k = (_j = overrides.removeChannelzChild) === null || _j === void 0 ? void 0 : _j.bind(overrides)) !== null && _k !== void 0 ? _k : parent.removeChannelzChild.bind(parent)
    };
  }
  loadBalancer.createChildChannelControlHelper = createChildChannelControlHelper;
  const registeredLoadBalancerTypes = {};
  let defaultLoadBalancerType = null;
  function registerLoadBalancerType(typeName, loadBalancerType, loadBalancingConfigType) {
    registeredLoadBalancerTypes[typeName] = {
      LoadBalancer: loadBalancerType,
      LoadBalancingConfig: loadBalancingConfigType
    };
  }
  loadBalancer.registerLoadBalancerType = registerLoadBalancerType;
  function registerDefaultLoadBalancerType(typeName) {
    defaultLoadBalancerType = typeName;
  }
  loadBalancer.registerDefaultLoadBalancerType = registerDefaultLoadBalancerType;
  function createLoadBalancer(config, channelControlHelper, credentials, options) {
    const typeName = config.getLoadBalancerName();
    if (typeName in registeredLoadBalancerTypes) {
      return new registeredLoadBalancerTypes[typeName].LoadBalancer(channelControlHelper, credentials, options);
    } else {
      return null;
    }
  }
  loadBalancer.createLoadBalancer = createLoadBalancer;
  function isLoadBalancerNameRegistered(typeName) {
    return typeName in registeredLoadBalancerTypes;
  }
  loadBalancer.isLoadBalancerNameRegistered = isLoadBalancerNameRegistered;
  function parseLoadBalancingConfig(rawConfig) {
    const keys = Object.keys(rawConfig);
    if (keys.length !== 1) {
      throw new Error("Provided load balancing config has multiple conflicting entries");
    }
    const typeName = keys[0];
    if (typeName in registeredLoadBalancerTypes) {
      try {
        return registeredLoadBalancerTypes[typeName].LoadBalancingConfig.createFromJson(rawConfig[typeName]);
      } catch (e) {
        throw new Error(`${typeName}: ${e.message}`);
      }
    } else {
      throw new Error(`Unrecognized load balancing config name ${typeName}`);
    }
  }
  loadBalancer.parseLoadBalancingConfig = parseLoadBalancingConfig;
  function getDefaultConfig() {
    if (!defaultLoadBalancerType) {
      throw new Error("No default load balancer type registered");
    }
    return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig();
  }
  loadBalancer.getDefaultConfig = getDefaultConfig;
  function selectLbConfigFromList(configs, fallbackTodefault = false) {
    for (const config of configs) {
      try {
        return parseLoadBalancingConfig(config);
      } catch (e) {
        (0, logging_12.log)(constants_12.LogVerbosity.DEBUG, "Config parsing failed with error", e.message);
        continue;
      }
    }
    if (fallbackTodefault) {
      if (defaultLoadBalancerType) {
        return new registeredLoadBalancerTypes[defaultLoadBalancerType].LoadBalancingConfig();
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  loadBalancer.selectLbConfigFromList = selectLbConfigFromList;
  return loadBalancer;
}
var serviceConfig = {};
var hasRequiredServiceConfig;
function requireServiceConfig() {
  if (hasRequiredServiceConfig) return serviceConfig;
  hasRequiredServiceConfig = 1;
  Object.defineProperty(serviceConfig, "__esModule", { value: true });
  serviceConfig.extractAndSelectServiceConfig = serviceConfig.validateServiceConfig = serviceConfig.validateRetryThrottling = void 0;
  const os2 = require$$0$2;
  const constants_12 = constants;
  const DURATION_REGEX = /^\d+(\.\d{1,9})?s$/;
  const CLIENT_LANGUAGE_STRING = "node";
  function validateName(obj) {
    if ("service" in obj && obj.service !== "") {
      if (typeof obj.service !== "string") {
        throw new Error(`Invalid method config name: invalid service: expected type string, got ${typeof obj.service}`);
      }
      if ("method" in obj && obj.method !== "") {
        if (typeof obj.method !== "string") {
          throw new Error(`Invalid method config name: invalid method: expected type string, got ${typeof obj.service}`);
        }
        return {
          service: obj.service,
          method: obj.method
        };
      } else {
        return {
          service: obj.service
        };
      }
    } else {
      if ("method" in obj && obj.method !== void 0) {
        throw new Error(`Invalid method config name: method set with empty or unset service`);
      }
      return {};
    }
  }
  function validateRetryPolicy(obj) {
    if (!("maxAttempts" in obj) || !Number.isInteger(obj.maxAttempts) || obj.maxAttempts < 2) {
      throw new Error("Invalid method config retry policy: maxAttempts must be an integer at least 2");
    }
    if (!("initialBackoff" in obj) || typeof obj.initialBackoff !== "string" || !DURATION_REGEX.test(obj.initialBackoff)) {
      throw new Error("Invalid method config retry policy: initialBackoff must be a string consisting of a positive integer or decimal followed by s");
    }
    if (!("maxBackoff" in obj) || typeof obj.maxBackoff !== "string" || !DURATION_REGEX.test(obj.maxBackoff)) {
      throw new Error("Invalid method config retry policy: maxBackoff must be a string consisting of a positive integer or decimal followed by s");
    }
    if (!("backoffMultiplier" in obj) || typeof obj.backoffMultiplier !== "number" || obj.backoffMultiplier <= 0) {
      throw new Error("Invalid method config retry policy: backoffMultiplier must be a number greater than 0");
    }
    if (!("retryableStatusCodes" in obj && Array.isArray(obj.retryableStatusCodes))) {
      throw new Error("Invalid method config retry policy: retryableStatusCodes is required");
    }
    if (obj.retryableStatusCodes.length === 0) {
      throw new Error("Invalid method config retry policy: retryableStatusCodes must be non-empty");
    }
    for (const value of obj.retryableStatusCodes) {
      if (typeof value === "number") {
        if (!Object.values(constants_12.Status).includes(value)) {
          throw new Error("Invalid method config retry policy: retryableStatusCodes value not in status code range");
        }
      } else if (typeof value === "string") {
        if (!Object.values(constants_12.Status).includes(value.toUpperCase())) {
          throw new Error("Invalid method config retry policy: retryableStatusCodes value not a status code name");
        }
      } else {
        throw new Error("Invalid method config retry policy: retryableStatusCodes value must be a string or number");
      }
    }
    return {
      maxAttempts: obj.maxAttempts,
      initialBackoff: obj.initialBackoff,
      maxBackoff: obj.maxBackoff,
      backoffMultiplier: obj.backoffMultiplier,
      retryableStatusCodes: obj.retryableStatusCodes
    };
  }
  function validateHedgingPolicy(obj) {
    if (!("maxAttempts" in obj) || !Number.isInteger(obj.maxAttempts) || obj.maxAttempts < 2) {
      throw new Error("Invalid method config hedging policy: maxAttempts must be an integer at least 2");
    }
    if ("hedgingDelay" in obj && (typeof obj.hedgingDelay !== "string" || !DURATION_REGEX.test(obj.hedgingDelay))) {
      throw new Error("Invalid method config hedging policy: hedgingDelay must be a string consisting of a positive integer followed by s");
    }
    if ("nonFatalStatusCodes" in obj && Array.isArray(obj.nonFatalStatusCodes)) {
      for (const value of obj.nonFatalStatusCodes) {
        if (typeof value === "number") {
          if (!Object.values(constants_12.Status).includes(value)) {
            throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value not in status code range");
          }
        } else if (typeof value === "string") {
          if (!Object.values(constants_12.Status).includes(value.toUpperCase())) {
            throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value not a status code name");
          }
        } else {
          throw new Error("Invalid method config hedging policy: nonFatalStatusCodes value must be a string or number");
        }
      }
    }
    const result = {
      maxAttempts: obj.maxAttempts
    };
    if (obj.hedgingDelay) {
      result.hedgingDelay = obj.hedgingDelay;
    }
    if (obj.nonFatalStatusCodes) {
      result.nonFatalStatusCodes = obj.nonFatalStatusCodes;
    }
    return result;
  }
  function validateMethodConfig(obj) {
    var _a;
    const result = {
      name: []
    };
    if (!("name" in obj) || !Array.isArray(obj.name)) {
      throw new Error("Invalid method config: invalid name array");
    }
    for (const name2 of obj.name) {
      result.name.push(validateName(name2));
    }
    if ("waitForReady" in obj) {
      if (typeof obj.waitForReady !== "boolean") {
        throw new Error("Invalid method config: invalid waitForReady");
      }
      result.waitForReady = obj.waitForReady;
    }
    if ("timeout" in obj) {
      if (typeof obj.timeout === "object") {
        if (!("seconds" in obj.timeout) || !(typeof obj.timeout.seconds === "number")) {
          throw new Error("Invalid method config: invalid timeout.seconds");
        }
        if (!("nanos" in obj.timeout) || !(typeof obj.timeout.nanos === "number")) {
          throw new Error("Invalid method config: invalid timeout.nanos");
        }
        result.timeout = obj.timeout;
      } else if (typeof obj.timeout === "string" && DURATION_REGEX.test(obj.timeout)) {
        const timeoutParts = obj.timeout.substring(0, obj.timeout.length - 1).split(".");
        result.timeout = {
          seconds: timeoutParts[0] | 0,
          nanos: ((_a = timeoutParts[1]) !== null && _a !== void 0 ? _a : 0) | 0
        };
      } else {
        throw new Error("Invalid method config: invalid timeout");
      }
    }
    if ("maxRequestBytes" in obj) {
      if (typeof obj.maxRequestBytes !== "number") {
        throw new Error("Invalid method config: invalid maxRequestBytes");
      }
      result.maxRequestBytes = obj.maxRequestBytes;
    }
    if ("maxResponseBytes" in obj) {
      if (typeof obj.maxResponseBytes !== "number") {
        throw new Error("Invalid method config: invalid maxRequestBytes");
      }
      result.maxResponseBytes = obj.maxResponseBytes;
    }
    if ("retryPolicy" in obj) {
      if ("hedgingPolicy" in obj) {
        throw new Error("Invalid method config: retryPolicy and hedgingPolicy cannot both be specified");
      } else {
        result.retryPolicy = validateRetryPolicy(obj.retryPolicy);
      }
    } else if ("hedgingPolicy" in obj) {
      result.hedgingPolicy = validateHedgingPolicy(obj.hedgingPolicy);
    }
    return result;
  }
  function validateRetryThrottling(obj) {
    if (!("maxTokens" in obj) || typeof obj.maxTokens !== "number" || obj.maxTokens <= 0 || obj.maxTokens > 1e3) {
      throw new Error("Invalid retryThrottling: maxTokens must be a number in (0, 1000]");
    }
    if (!("tokenRatio" in obj) || typeof obj.tokenRatio !== "number" || obj.tokenRatio <= 0) {
      throw new Error("Invalid retryThrottling: tokenRatio must be a number greater than 0");
    }
    return {
      maxTokens: +obj.maxTokens.toFixed(3),
      tokenRatio: +obj.tokenRatio.toFixed(3)
    };
  }
  serviceConfig.validateRetryThrottling = validateRetryThrottling;
  function validateLoadBalancingConfig(obj) {
    if (!(typeof obj === "object" && obj !== null)) {
      throw new Error(`Invalid loadBalancingConfig: unexpected type ${typeof obj}`);
    }
    const keys = Object.keys(obj);
    if (keys.length > 1) {
      throw new Error(`Invalid loadBalancingConfig: unexpected multiple keys ${keys}`);
    }
    if (keys.length === 0) {
      throw new Error("Invalid loadBalancingConfig: load balancing policy name required");
    }
    return {
      [keys[0]]: obj[keys[0]]
    };
  }
  function validateServiceConfig(obj) {
    const result = {
      loadBalancingConfig: [],
      methodConfig: []
    };
    if ("loadBalancingPolicy" in obj) {
      if (typeof obj.loadBalancingPolicy === "string") {
        result.loadBalancingPolicy = obj.loadBalancingPolicy;
      } else {
        throw new Error("Invalid service config: invalid loadBalancingPolicy");
      }
    }
    if ("loadBalancingConfig" in obj) {
      if (Array.isArray(obj.loadBalancingConfig)) {
        for (const config of obj.loadBalancingConfig) {
          result.loadBalancingConfig.push(validateLoadBalancingConfig(config));
        }
      } else {
        throw new Error("Invalid service config: invalid loadBalancingConfig");
      }
    }
    if ("methodConfig" in obj) {
      if (Array.isArray(obj.methodConfig)) {
        for (const methodConfig of obj.methodConfig) {
          result.methodConfig.push(validateMethodConfig(methodConfig));
        }
      }
    }
    if ("retryThrottling" in obj) {
      result.retryThrottling = validateRetryThrottling(obj.retryThrottling);
    }
    const seenMethodNames = [];
    for (const methodConfig of result.methodConfig) {
      for (const name2 of methodConfig.name) {
        for (const seenName of seenMethodNames) {
          if (name2.service === seenName.service && name2.method === seenName.method) {
            throw new Error(`Invalid service config: duplicate name ${name2.service}/${name2.method}`);
          }
        }
        seenMethodNames.push(name2);
      }
    }
    return result;
  }
  serviceConfig.validateServiceConfig = validateServiceConfig;
  function validateCanaryConfig(obj) {
    if (!("serviceConfig" in obj)) {
      throw new Error("Invalid service config choice: missing service config");
    }
    const result = {
      serviceConfig: validateServiceConfig(obj.serviceConfig)
    };
    if ("clientLanguage" in obj) {
      if (Array.isArray(obj.clientLanguage)) {
        result.clientLanguage = [];
        for (const lang of obj.clientLanguage) {
          if (typeof lang === "string") {
            result.clientLanguage.push(lang);
          } else {
            throw new Error("Invalid service config choice: invalid clientLanguage");
          }
        }
      } else {
        throw new Error("Invalid service config choice: invalid clientLanguage");
      }
    }
    if ("clientHostname" in obj) {
      if (Array.isArray(obj.clientHostname)) {
        result.clientHostname = [];
        for (const lang of obj.clientHostname) {
          if (typeof lang === "string") {
            result.clientHostname.push(lang);
          } else {
            throw new Error("Invalid service config choice: invalid clientHostname");
          }
        }
      } else {
        throw new Error("Invalid service config choice: invalid clientHostname");
      }
    }
    if ("percentage" in obj) {
      if (typeof obj.percentage === "number" && 0 <= obj.percentage && obj.percentage <= 100) {
        result.percentage = obj.percentage;
      } else {
        throw new Error("Invalid service config choice: invalid percentage");
      }
    }
    const allowedFields = [
      "clientLanguage",
      "percentage",
      "clientHostname",
      "serviceConfig"
    ];
    for (const field2 in obj) {
      if (!allowedFields.includes(field2)) {
        throw new Error(`Invalid service config choice: unexpected field ${field2}`);
      }
    }
    return result;
  }
  function validateAndSelectCanaryConfig(obj, percentage) {
    if (!Array.isArray(obj)) {
      throw new Error("Invalid service config list");
    }
    for (const config of obj) {
      const validatedConfig = validateCanaryConfig(config);
      if (typeof validatedConfig.percentage === "number" && percentage > validatedConfig.percentage) {
        continue;
      }
      if (Array.isArray(validatedConfig.clientHostname)) {
        let hostnameMatched = false;
        for (const hostname of validatedConfig.clientHostname) {
          if (hostname === os2.hostname()) {
            hostnameMatched = true;
          }
        }
        if (!hostnameMatched) {
          continue;
        }
      }
      if (Array.isArray(validatedConfig.clientLanguage)) {
        let languageMatched = false;
        for (const language of validatedConfig.clientLanguage) {
          if (language === CLIENT_LANGUAGE_STRING) {
            languageMatched = true;
          }
        }
        if (!languageMatched) {
          continue;
        }
      }
      return validatedConfig.serviceConfig;
    }
    throw new Error("No matching service config found");
  }
  function extractAndSelectServiceConfig(txtRecord, percentage) {
    for (const record of txtRecord) {
      if (record.length > 0 && record[0].startsWith("grpc_config=")) {
        const recordString = record.join("").substring("grpc_config=".length);
        const recordJson = JSON.parse(recordString);
        return validateAndSelectCanaryConfig(recordJson, percentage);
      }
    }
    return null;
  }
  serviceConfig.extractAndSelectServiceConfig = extractAndSelectServiceConfig;
  return serviceConfig;
}
var connectivityState = {};
Object.defineProperty(connectivityState, "__esModule", { value: true });
connectivityState.ConnectivityState = void 0;
var ConnectivityState;
(function(ConnectivityState2) {
  ConnectivityState2[ConnectivityState2["IDLE"] = 0] = "IDLE";
  ConnectivityState2[ConnectivityState2["CONNECTING"] = 1] = "CONNECTING";
  ConnectivityState2[ConnectivityState2["READY"] = 2] = "READY";
  ConnectivityState2[ConnectivityState2["TRANSIENT_FAILURE"] = 3] = "TRANSIENT_FAILURE";
  ConnectivityState2[ConnectivityState2["SHUTDOWN"] = 4] = "SHUTDOWN";
})(ConnectivityState || (connectivityState.ConnectivityState = ConnectivityState = {}));
var resolver = {};
var uriParser = {};
Object.defineProperty(uriParser, "__esModule", { value: true });
uriParser.uriToString = uriParser.combineHostPort = uriParser.splitHostPort = uriParser.parseUri = void 0;
const URI_REGEX = /^(?:([A-Za-z0-9+.-]+):)?(?:\/\/([^/]*)\/)?(.+)$/;
function parseUri(uriString) {
  const parsedUri = URI_REGEX.exec(uriString);
  if (parsedUri === null) {
    return null;
  }
  return {
    scheme: parsedUri[1],
    authority: parsedUri[2],
    path: parsedUri[3]
  };
}
uriParser.parseUri = parseUri;
const NUMBER_REGEX = /^\d+$/;
function splitHostPort(path2) {
  if (path2.startsWith("[")) {
    const hostEnd = path2.indexOf("]");
    if (hostEnd === -1) {
      return null;
    }
    const host = path2.substring(1, hostEnd);
    if (host.indexOf(":") === -1) {
      return null;
    }
    if (path2.length > hostEnd + 1) {
      if (path2[hostEnd + 1] === ":") {
        const portString = path2.substring(hostEnd + 2);
        if (NUMBER_REGEX.test(portString)) {
          return {
            host,
            port: +portString
          };
        } else {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return {
        host
      };
    }
  } else {
    const splitPath = path2.split(":");
    if (splitPath.length === 2) {
      if (NUMBER_REGEX.test(splitPath[1])) {
        return {
          host: splitPath[0],
          port: +splitPath[1]
        };
      } else {
        return null;
      }
    } else {
      return {
        host: path2
      };
    }
  }
}
uriParser.splitHostPort = splitHostPort;
function combineHostPort(hostPort) {
  if (hostPort.port === void 0) {
    return hostPort.host;
  } else {
    if (hostPort.host.includes(":")) {
      return `[${hostPort.host}]:${hostPort.port}`;
    } else {
      return `${hostPort.host}:${hostPort.port}`;
    }
  }
}
uriParser.combineHostPort = combineHostPort;
function uriToString(uri) {
  let result = "";
  if (uri.scheme !== void 0) {
    result += uri.scheme + ":";
  }
  if (uri.authority !== void 0) {
    result += "//" + uri.authority + "/";
  }
  result += uri.path;
  return result;
}
uriParser.uriToString = uriToString;
Object.defineProperty(resolver, "__esModule", { value: true });
resolver.mapUriDefaultScheme = resolver.getDefaultAuthority = resolver.createResolver = resolver.registerDefaultScheme = resolver.registerResolver = void 0;
const uri_parser_1$4 = uriParser;
const registeredResolvers = {};
let defaultScheme = null;
function registerResolver(scheme, resolverClass) {
  registeredResolvers[scheme] = resolverClass;
}
resolver.registerResolver = registerResolver;
function registerDefaultScheme(scheme) {
  defaultScheme = scheme;
}
resolver.registerDefaultScheme = registerDefaultScheme;
function createResolver(target, listener, options) {
  if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
    return new registeredResolvers[target.scheme](target, listener, options);
  } else {
    throw new Error(`No resolver could be created for target ${(0, uri_parser_1$4.uriToString)(target)}`);
  }
}
resolver.createResolver = createResolver;
function getDefaultAuthority(target) {
  if (target.scheme !== void 0 && target.scheme in registeredResolvers) {
    return registeredResolvers[target.scheme].getDefaultAuthority(target);
  } else {
    throw new Error(`Invalid target ${(0, uri_parser_1$4.uriToString)(target)}`);
  }
}
resolver.getDefaultAuthority = getDefaultAuthority;
function mapUriDefaultScheme(target) {
  if (target.scheme === void 0 || !(target.scheme in registeredResolvers)) {
    if (defaultScheme !== null) {
      return {
        scheme: defaultScheme,
        authority: void 0,
        path: (0, uri_parser_1$4.uriToString)(target)
      };
    } else {
      return null;
    }
  }
  return target;
}
resolver.mapUriDefaultScheme = mapUriDefaultScheme;
var picker = {};
Object.defineProperty(picker, "__esModule", { value: true });
picker.QueuePicker = picker.UnavailablePicker = picker.PickResultType = void 0;
const metadata_1$8 = metadata;
const constants_1$d = constants;
var PickResultType;
(function(PickResultType2) {
  PickResultType2[PickResultType2["COMPLETE"] = 0] = "COMPLETE";
  PickResultType2[PickResultType2["QUEUE"] = 1] = "QUEUE";
  PickResultType2[PickResultType2["TRANSIENT_FAILURE"] = 2] = "TRANSIENT_FAILURE";
  PickResultType2[PickResultType2["DROP"] = 3] = "DROP";
})(PickResultType || (picker.PickResultType = PickResultType = {}));
class UnavailablePicker {
  constructor(status) {
    this.status = Object.assign({ code: constants_1$d.Status.UNAVAILABLE, details: "No connection established", metadata: new metadata_1$8.Metadata() }, status);
  }
  pick(pickArgs) {
    return {
      pickResultType: PickResultType.TRANSIENT_FAILURE,
      subchannel: null,
      status: this.status,
      onCallStarted: null,
      onCallEnded: null
    };
  }
}
picker.UnavailablePicker = UnavailablePicker;
class QueuePicker {
  // Constructed with a load balancer. Calls exitIdle on it the first time pick is called
  constructor(loadBalancer2, childPicker) {
    this.loadBalancer = loadBalancer2;
    this.childPicker = childPicker;
    this.calledExitIdle = false;
  }
  pick(pickArgs) {
    if (!this.calledExitIdle) {
      process.nextTick(() => {
        this.loadBalancer.exitIdle();
      });
      this.calledExitIdle = true;
    }
    if (this.childPicker) {
      return this.childPicker.pick(pickArgs);
    } else {
      return {
        pickResultType: PickResultType.QUEUE,
        subchannel: null,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
}
picker.QueuePicker = QueuePicker;
var backoffTimeout = {};
var hasRequiredBackoffTimeout;
function requireBackoffTimeout() {
  if (hasRequiredBackoffTimeout) return backoffTimeout;
  hasRequiredBackoffTimeout = 1;
  Object.defineProperty(backoffTimeout, "__esModule", { value: true });
  backoffTimeout.BackoffTimeout = void 0;
  const INITIAL_BACKOFF_MS = 1e3;
  const BACKOFF_MULTIPLIER = 1.6;
  const MAX_BACKOFF_MS = 12e4;
  const BACKOFF_JITTER = 0.2;
  function uniformRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  class BackoffTimeout {
    constructor(callback, options) {
      this.callback = callback;
      this.initialDelay = INITIAL_BACKOFF_MS;
      this.multiplier = BACKOFF_MULTIPLIER;
      this.maxDelay = MAX_BACKOFF_MS;
      this.jitter = BACKOFF_JITTER;
      this.running = false;
      this.hasRef = true;
      this.startTime = /* @__PURE__ */ new Date();
      this.endTime = /* @__PURE__ */ new Date();
      if (options) {
        if (options.initialDelay) {
          this.initialDelay = options.initialDelay;
        }
        if (options.multiplier) {
          this.multiplier = options.multiplier;
        }
        if (options.jitter) {
          this.jitter = options.jitter;
        }
        if (options.maxDelay) {
          this.maxDelay = options.maxDelay;
        }
      }
      this.nextDelay = this.initialDelay;
      this.timerId = setTimeout(() => {
      }, 0);
      clearTimeout(this.timerId);
    }
    runTimer(delay) {
      var _a, _b;
      this.endTime = this.startTime;
      this.endTime.setMilliseconds(this.endTime.getMilliseconds() + this.nextDelay);
      clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.callback();
        this.running = false;
      }, delay);
      if (!this.hasRef) {
        (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    }
    /**
     * Call the callback after the current amount of delay time
     */
    runOnce() {
      this.running = true;
      this.startTime = /* @__PURE__ */ new Date();
      this.runTimer(this.nextDelay);
      const nextBackoff = Math.min(this.nextDelay * this.multiplier, this.maxDelay);
      const jitterMagnitude = nextBackoff * this.jitter;
      this.nextDelay = nextBackoff + uniformRandom(-jitterMagnitude, jitterMagnitude);
    }
    /**
     * Stop the timer. The callback will not be called until `runOnce` is called
     * again.
     */
    stop() {
      clearTimeout(this.timerId);
      this.running = false;
    }
    /**
     * Reset the delay time to its initial value. If the timer is still running,
     * retroactively apply that reset to the current timer.
     */
    reset() {
      this.nextDelay = this.initialDelay;
      if (this.running) {
        const now = /* @__PURE__ */ new Date();
        const newEndTime = this.startTime;
        newEndTime.setMilliseconds(newEndTime.getMilliseconds() + this.nextDelay);
        clearTimeout(this.timerId);
        if (now < newEndTime) {
          this.runTimer(newEndTime.getTime() - now.getTime());
        } else {
          this.running = false;
        }
      }
    }
    /**
     * Check whether the timer is currently running.
     */
    isRunning() {
      return this.running;
    }
    /**
     * Set that while the timer is running, it should keep the Node process
     * running.
     */
    ref() {
      var _a, _b;
      this.hasRef = true;
      (_b = (_a = this.timerId).ref) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Set that while the timer is running, it should not keep the Node process
     * running.
     */
    unref() {
      var _a, _b;
      this.hasRef = false;
      (_b = (_a = this.timerId).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Get the approximate timestamp of when the timer will fire. Only valid if
     * this.isRunning() is true.
     */
    getEndTime() {
      return this.endTime;
    }
  }
  backoffTimeout.BackoffTimeout = BackoffTimeout;
  return backoffTimeout;
}
var loadBalancerChildHandler = {};
var hasRequiredLoadBalancerChildHandler;
function requireLoadBalancerChildHandler() {
  if (hasRequiredLoadBalancerChildHandler) return loadBalancerChildHandler;
  hasRequiredLoadBalancerChildHandler = 1;
  Object.defineProperty(loadBalancerChildHandler, "__esModule", { value: true });
  loadBalancerChildHandler.ChildLoadBalancerHandler = void 0;
  const load_balancer_12 = requireLoadBalancer();
  const connectivity_state_12 = connectivityState;
  const TYPE_NAME = "child_load_balancer_helper";
  class ChildLoadBalancerHandler {
    constructor(channelControlHelper, credentials, options) {
      this.channelControlHelper = channelControlHelper;
      this.credentials = credentials;
      this.options = options;
      this.currentChild = null;
      this.pendingChild = null;
      this.latestConfig = null;
      this.ChildPolicyHelper = class {
        constructor(parent) {
          this.parent = parent;
          this.child = null;
        }
        createSubchannel(subchannelAddress2, subchannelArgs, credentialsOverride) {
          return this.parent.channelControlHelper.createSubchannel(subchannelAddress2, subchannelArgs, credentialsOverride);
        }
        updateState(connectivityState2, picker2) {
          var _a;
          if (this.calledByPendingChild()) {
            if (connectivityState2 === connectivity_state_12.ConnectivityState.CONNECTING) {
              return;
            }
            (_a = this.parent.currentChild) === null || _a === void 0 ? void 0 : _a.destroy();
            this.parent.currentChild = this.parent.pendingChild;
            this.parent.pendingChild = null;
          } else if (!this.calledByCurrentChild()) {
            return;
          }
          this.parent.channelControlHelper.updateState(connectivityState2, picker2);
        }
        requestReresolution() {
          var _a;
          const latestChild = (_a = this.parent.pendingChild) !== null && _a !== void 0 ? _a : this.parent.currentChild;
          if (this.child === latestChild) {
            this.parent.channelControlHelper.requestReresolution();
          }
        }
        setChild(newChild) {
          this.child = newChild;
        }
        addChannelzChild(child) {
          this.parent.channelControlHelper.addChannelzChild(child);
        }
        removeChannelzChild(child) {
          this.parent.channelControlHelper.removeChannelzChild(child);
        }
        calledByPendingChild() {
          return this.child === this.parent.pendingChild;
        }
        calledByCurrentChild() {
          return this.child === this.parent.currentChild;
        }
      };
    }
    configUpdateRequiresNewPolicyInstance(oldConfig, newConfig) {
      return oldConfig.getLoadBalancerName() !== newConfig.getLoadBalancerName();
    }
    /**
     * Prerequisites: lbConfig !== null and lbConfig.name is registered
     * @param endpointList
     * @param lbConfig
     * @param attributes
     */
    updateAddressList(endpointList, lbConfig, attributes) {
      let childToUpdate;
      if (this.currentChild === null || this.latestConfig === null || this.configUpdateRequiresNewPolicyInstance(this.latestConfig, lbConfig)) {
        const newHelper = new this.ChildPolicyHelper(this);
        const newChild = (0, load_balancer_12.createLoadBalancer)(lbConfig, newHelper, this.credentials, this.options);
        newHelper.setChild(newChild);
        if (this.currentChild === null) {
          this.currentChild = newChild;
          childToUpdate = this.currentChild;
        } else {
          if (this.pendingChild) {
            this.pendingChild.destroy();
          }
          this.pendingChild = newChild;
          childToUpdate = this.pendingChild;
        }
      } else {
        if (this.pendingChild === null) {
          childToUpdate = this.currentChild;
        } else {
          childToUpdate = this.pendingChild;
        }
      }
      this.latestConfig = lbConfig;
      childToUpdate.updateAddressList(endpointList, lbConfig, attributes);
    }
    exitIdle() {
      if (this.currentChild) {
        this.currentChild.exitIdle();
        if (this.pendingChild) {
          this.pendingChild.exitIdle();
        }
      }
    }
    resetBackoff() {
      if (this.currentChild) {
        this.currentChild.resetBackoff();
        if (this.pendingChild) {
          this.pendingChild.resetBackoff();
        }
      }
    }
    destroy() {
      if (this.currentChild) {
        this.currentChild.destroy();
        this.currentChild = null;
      }
      if (this.pendingChild) {
        this.pendingChild.destroy();
        this.pendingChild = null;
      }
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  loadBalancerChildHandler.ChildLoadBalancerHandler = ChildLoadBalancerHandler;
  return loadBalancerChildHandler;
}
Object.defineProperty(resolvingLoadBalancer, "__esModule", { value: true });
resolvingLoadBalancer.ResolvingLoadBalancer = void 0;
const load_balancer_1 = requireLoadBalancer();
const service_config_1 = requireServiceConfig();
const connectivity_state_1$1 = connectivityState;
const resolver_1$2 = resolver;
const picker_1$1 = picker;
const backoff_timeout_1 = requireBackoffTimeout();
const constants_1$c = constants;
const metadata_1$7 = metadata;
const logging$8 = logging$9;
const constants_2$1 = constants;
const uri_parser_1$3 = uriParser;
const load_balancer_child_handler_1 = requireLoadBalancerChildHandler();
const TRACER_NAME$7 = "resolving_load_balancer";
function trace$2(text) {
  logging$8.trace(constants_2$1.LogVerbosity.DEBUG, TRACER_NAME$7, text);
}
const NAME_MATCH_LEVEL_ORDER = [
  "SERVICE_AND_METHOD",
  "SERVICE",
  "EMPTY"
];
function hasMatchingName(service2, method2, methodConfig, matchLevel) {
  for (const name2 of methodConfig.name) {
    switch (matchLevel) {
      case "EMPTY":
        if (!name2.service && !name2.method) {
          return true;
        }
        break;
      case "SERVICE":
        if (name2.service === service2 && !name2.method) {
          return true;
        }
        break;
      case "SERVICE_AND_METHOD":
        if (name2.service === service2 && name2.method === method2) {
          return true;
        }
    }
  }
  return false;
}
function findMatchingConfig(service2, method2, methodConfigs, matchLevel) {
  for (const config of methodConfigs) {
    if (hasMatchingName(service2, method2, config, matchLevel)) {
      return config;
    }
  }
  return null;
}
function getDefaultConfigSelector(serviceConfig2) {
  return function defaultConfigSelector(methodName, metadata2) {
    var _a, _b;
    const splitName = methodName.split("/").filter((x) => x.length > 0);
    const service2 = (_a = splitName[0]) !== null && _a !== void 0 ? _a : "";
    const method2 = (_b = splitName[1]) !== null && _b !== void 0 ? _b : "";
    if (serviceConfig2 && serviceConfig2.methodConfig) {
      for (const matchLevel of NAME_MATCH_LEVEL_ORDER) {
        const matchingConfig = findMatchingConfig(service2, method2, serviceConfig2.methodConfig, matchLevel);
        if (matchingConfig) {
          return {
            methodConfig: matchingConfig,
            pickInformation: {},
            status: constants_1$c.Status.OK,
            dynamicFilterFactories: []
          };
        }
      }
    }
    return {
      methodConfig: { name: [] },
      pickInformation: {},
      status: constants_1$c.Status.OK,
      dynamicFilterFactories: []
    };
  };
}
class ResolvingLoadBalancer {
  /**
   * Wrapper class that behaves like a `LoadBalancer` and also handles name
   * resolution internally.
   * @param target The address of the backend to connect to.
   * @param channelControlHelper `ChannelControlHelper` instance provided by
   *     this load balancer's owner.
   * @param defaultServiceConfig The default service configuration to be used
   *     if none is provided by the name resolver. A `null` value indicates
   *     that the default behavior should be the default unconfigured behavior.
   *     In practice, that means using the "pick first" load balancer
   *     implmentation
   */
  constructor(target, channelControlHelper, credentials, channelOptions2, onSuccessfulResolution, onFailedResolution) {
    this.target = target;
    this.channelControlHelper = channelControlHelper;
    this.onSuccessfulResolution = onSuccessfulResolution;
    this.onFailedResolution = onFailedResolution;
    this.latestChildState = connectivity_state_1$1.ConnectivityState.IDLE;
    this.latestChildPicker = new picker_1$1.QueuePicker(this);
    this.currentState = connectivity_state_1$1.ConnectivityState.IDLE;
    this.previousServiceConfig = null;
    this.continueResolving = false;
    if (channelOptions2["grpc.service_config"]) {
      this.defaultServiceConfig = (0, service_config_1.validateServiceConfig)(JSON.parse(channelOptions2["grpc.service_config"]));
    } else {
      this.defaultServiceConfig = {
        loadBalancingConfig: [],
        methodConfig: []
      };
    }
    this.updateState(connectivity_state_1$1.ConnectivityState.IDLE, new picker_1$1.QueuePicker(this));
    this.childLoadBalancer = new load_balancer_child_handler_1.ChildLoadBalancerHandler({
      createSubchannel: channelControlHelper.createSubchannel.bind(channelControlHelper),
      requestReresolution: () => {
        if (this.backoffTimeout.isRunning()) {
          trace$2("requestReresolution delayed by backoff timer until " + this.backoffTimeout.getEndTime().toISOString());
          this.continueResolving = true;
        } else {
          this.updateResolution();
        }
      },
      updateState: (newState, picker2) => {
        this.latestChildState = newState;
        this.latestChildPicker = picker2;
        this.updateState(newState, picker2);
      },
      addChannelzChild: channelControlHelper.addChannelzChild.bind(channelControlHelper),
      removeChannelzChild: channelControlHelper.removeChannelzChild.bind(channelControlHelper)
    }, credentials, channelOptions2);
    this.innerResolver = (0, resolver_1$2.createResolver)(target, {
      onSuccessfulResolution: (endpointList, serviceConfig2, serviceConfigError, configSelector, attributes) => {
        var _a;
        this.backoffTimeout.stop();
        this.backoffTimeout.reset();
        let workingServiceConfig = null;
        if (serviceConfig2 === null) {
          if (serviceConfigError === null) {
            this.previousServiceConfig = null;
            workingServiceConfig = this.defaultServiceConfig;
          } else {
            if (this.previousServiceConfig === null) {
              this.handleResolutionFailure(serviceConfigError);
            } else {
              workingServiceConfig = this.previousServiceConfig;
            }
          }
        } else {
          workingServiceConfig = serviceConfig2;
          this.previousServiceConfig = serviceConfig2;
        }
        const workingConfigList = (_a = workingServiceConfig === null || workingServiceConfig === void 0 ? void 0 : workingServiceConfig.loadBalancingConfig) !== null && _a !== void 0 ? _a : [];
        const loadBalancingConfig = (0, load_balancer_1.selectLbConfigFromList)(workingConfigList, true);
        if (loadBalancingConfig === null) {
          this.handleResolutionFailure({
            code: constants_1$c.Status.UNAVAILABLE,
            details: "All load balancer options in service config are not compatible",
            metadata: new metadata_1$7.Metadata()
          });
          return;
        }
        this.childLoadBalancer.updateAddressList(endpointList, loadBalancingConfig, attributes);
        const finalServiceConfig = workingServiceConfig !== null && workingServiceConfig !== void 0 ? workingServiceConfig : this.defaultServiceConfig;
        this.onSuccessfulResolution(finalServiceConfig, configSelector !== null && configSelector !== void 0 ? configSelector : getDefaultConfigSelector(finalServiceConfig));
      },
      onError: (error2) => {
        this.handleResolutionFailure(error2);
      }
    }, channelOptions2);
    const backoffOptions = {
      initialDelay: channelOptions2["grpc.initial_reconnect_backoff_ms"],
      maxDelay: channelOptions2["grpc.max_reconnect_backoff_ms"]
    };
    this.backoffTimeout = new backoff_timeout_1.BackoffTimeout(() => {
      if (this.continueResolving) {
        this.updateResolution();
        this.continueResolving = false;
      } else {
        this.updateState(this.latestChildState, this.latestChildPicker);
      }
    }, backoffOptions);
    this.backoffTimeout.unref();
  }
  updateResolution() {
    this.innerResolver.updateResolution();
    if (this.currentState === connectivity_state_1$1.ConnectivityState.IDLE) {
      this.updateState(connectivity_state_1$1.ConnectivityState.CONNECTING, this.latestChildPicker);
    }
    this.backoffTimeout.runOnce();
  }
  updateState(connectivityState2, picker2) {
    trace$2((0, uri_parser_1$3.uriToString)(this.target) + " " + connectivity_state_1$1.ConnectivityState[this.currentState] + " -> " + connectivity_state_1$1.ConnectivityState[connectivityState2]);
    if (connectivityState2 === connectivity_state_1$1.ConnectivityState.IDLE) {
      picker2 = new picker_1$1.QueuePicker(this, picker2);
    }
    this.currentState = connectivityState2;
    this.channelControlHelper.updateState(connectivityState2, picker2);
  }
  handleResolutionFailure(error2) {
    if (this.latestChildState === connectivity_state_1$1.ConnectivityState.IDLE) {
      this.updateState(connectivity_state_1$1.ConnectivityState.TRANSIENT_FAILURE, new picker_1$1.UnavailablePicker(error2));
      this.onFailedResolution(error2);
    }
  }
  exitIdle() {
    if (this.currentState === connectivity_state_1$1.ConnectivityState.IDLE || this.currentState === connectivity_state_1$1.ConnectivityState.TRANSIENT_FAILURE) {
      if (this.backoffTimeout.isRunning()) {
        this.continueResolving = true;
      } else {
        this.updateResolution();
      }
    }
    this.childLoadBalancer.exitIdle();
  }
  updateAddressList(endpointList, lbConfig) {
    throw new Error("updateAddressList not supported on ResolvingLoadBalancer");
  }
  resetBackoff() {
    this.backoffTimeout.reset();
    this.childLoadBalancer.resetBackoff();
  }
  destroy() {
    this.childLoadBalancer.destroy();
    this.innerResolver.destroy();
    this.backoffTimeout.reset();
    this.backoffTimeout.stop();
    this.latestChildState = connectivity_state_1$1.ConnectivityState.IDLE;
    this.latestChildPicker = new picker_1$1.QueuePicker(this);
    this.currentState = connectivity_state_1$1.ConnectivityState.IDLE;
    this.previousServiceConfig = null;
    this.continueResolving = false;
  }
  getTypeName() {
    return "resolving_load_balancer";
  }
}
resolvingLoadBalancer.ResolvingLoadBalancer = ResolvingLoadBalancer;
var subchannelPool = {};
var channelOptions = {};
Object.defineProperty(channelOptions, "__esModule", { value: true });
channelOptions.channelOptionsEqual = channelOptions.recognizedOptions = void 0;
channelOptions.recognizedOptions = {
  "grpc.ssl_target_name_override": true,
  "grpc.primary_user_agent": true,
  "grpc.secondary_user_agent": true,
  "grpc.default_authority": true,
  "grpc.keepalive_time_ms": true,
  "grpc.keepalive_timeout_ms": true,
  "grpc.keepalive_permit_without_calls": true,
  "grpc.service_config": true,
  "grpc.max_concurrent_streams": true,
  "grpc.initial_reconnect_backoff_ms": true,
  "grpc.max_reconnect_backoff_ms": true,
  "grpc.use_local_subchannel_pool": true,
  "grpc.max_send_message_length": true,
  "grpc.max_receive_message_length": true,
  "grpc.enable_http_proxy": true,
  "grpc.enable_channelz": true,
  "grpc.dns_min_time_between_resolutions_ms": true,
  "grpc.enable_retries": true,
  "grpc.per_rpc_retry_buffer_size": true,
  "grpc.retry_buffer_size": true,
  "grpc.max_connection_age_ms": true,
  "grpc.max_connection_age_grace_ms": true,
  "grpc-node.max_session_memory": true,
  "grpc.service_config_disable_resolution": true,
  "grpc.client_idle_timeout_ms": true,
  "grpc-node.tls_enable_trace": true,
  "grpc.lb.ring_hash.ring_size_cap": true,
  "grpc-node.retry_max_attempts_limit": true
};
function channelOptionsEqual(options1, options2) {
  const keys1 = Object.keys(options1).sort();
  const keys2 = Object.keys(options2).sort();
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i += 1) {
    if (keys1[i] !== keys2[i]) {
      return false;
    }
    if (options1[keys1[i]] !== options2[keys2[i]]) {
      return false;
    }
  }
  return true;
}
channelOptions.channelOptionsEqual = channelOptionsEqual;
var subchannel = {};
var subchannelAddress = {};
Object.defineProperty(subchannelAddress, "__esModule", { value: true });
subchannelAddress.EndpointMap = subchannelAddress.endpointHasAddress = subchannelAddress.endpointToString = subchannelAddress.endpointEqual = subchannelAddress.stringToSubchannelAddress = subchannelAddress.subchannelAddressToString = subchannelAddress.subchannelAddressEqual = subchannelAddress.isTcpSubchannelAddress = void 0;
const net_1 = require$$0$3;
function isTcpSubchannelAddress(address) {
  return "port" in address;
}
subchannelAddress.isTcpSubchannelAddress = isTcpSubchannelAddress;
function subchannelAddressEqual(address1, address2) {
  if (!address1 && !address2) {
    return true;
  }
  if (!address1 || !address2) {
    return false;
  }
  if (isTcpSubchannelAddress(address1)) {
    return isTcpSubchannelAddress(address2) && address1.host === address2.host && address1.port === address2.port;
  } else {
    return !isTcpSubchannelAddress(address2) && address1.path === address2.path;
  }
}
subchannelAddress.subchannelAddressEqual = subchannelAddressEqual;
function subchannelAddressToString(address) {
  if (isTcpSubchannelAddress(address)) {
    if ((0, net_1.isIPv6)(address.host)) {
      return "[" + address.host + "]:" + address.port;
    } else {
      return address.host + ":" + address.port;
    }
  } else {
    return address.path;
  }
}
subchannelAddress.subchannelAddressToString = subchannelAddressToString;
const DEFAULT_PORT = 443;
function stringToSubchannelAddress(addressString, port) {
  if ((0, net_1.isIP)(addressString)) {
    return {
      host: addressString,
      port: port !== null && port !== void 0 ? port : DEFAULT_PORT
    };
  } else {
    return {
      path: addressString
    };
  }
}
subchannelAddress.stringToSubchannelAddress = stringToSubchannelAddress;
function endpointEqual(endpoint1, endpoint2) {
  if (endpoint1.addresses.length !== endpoint2.addresses.length) {
    return false;
  }
  for (let i = 0; i < endpoint1.addresses.length; i++) {
    if (!subchannelAddressEqual(endpoint1.addresses[i], endpoint2.addresses[i])) {
      return false;
    }
  }
  return true;
}
subchannelAddress.endpointEqual = endpointEqual;
function endpointToString(endpoint) {
  return "[" + endpoint.addresses.map(subchannelAddressToString).join(", ") + "]";
}
subchannelAddress.endpointToString = endpointToString;
function endpointHasAddress(endpoint, expectedAddress) {
  for (const address of endpoint.addresses) {
    if (subchannelAddressEqual(address, expectedAddress)) {
      return true;
    }
  }
  return false;
}
subchannelAddress.endpointHasAddress = endpointHasAddress;
function endpointEqualUnordered(endpoint1, endpoint2) {
  if (endpoint1.addresses.length !== endpoint2.addresses.length) {
    return false;
  }
  for (const address1 of endpoint1.addresses) {
    let matchFound = false;
    for (const address2 of endpoint2.addresses) {
      if (subchannelAddressEqual(address1, address2)) {
        matchFound = true;
        break;
      }
    }
    if (!matchFound) {
      return false;
    }
  }
  return true;
}
class EndpointMap {
  constructor() {
    this.map = /* @__PURE__ */ new Set();
  }
  get size() {
    return this.map.size;
  }
  getForSubchannelAddress(address) {
    for (const entry of this.map) {
      if (endpointHasAddress(entry.key, address)) {
        return entry.value;
      }
    }
    return void 0;
  }
  /**
   * Delete any entries in this map with keys that are not in endpoints
   * @param endpoints
   */
  deleteMissing(endpoints) {
    const removedValues = [];
    for (const entry of this.map) {
      let foundEntry = false;
      for (const endpoint of endpoints) {
        if (endpointEqualUnordered(endpoint, entry.key)) {
          foundEntry = true;
        }
      }
      if (!foundEntry) {
        removedValues.push(entry.value);
        this.map.delete(entry);
      }
    }
    return removedValues;
  }
  get(endpoint) {
    for (const entry of this.map) {
      if (endpointEqualUnordered(endpoint, entry.key)) {
        return entry.value;
      }
    }
    return void 0;
  }
  set(endpoint, mapEntry) {
    for (const entry of this.map) {
      if (endpointEqualUnordered(endpoint, entry.key)) {
        entry.value = mapEntry;
        return;
      }
    }
    this.map.add({ key: endpoint, value: mapEntry });
  }
  delete(endpoint) {
    for (const entry of this.map) {
      if (endpointEqualUnordered(endpoint, entry.key)) {
        this.map.delete(entry);
        return;
      }
    }
  }
  has(endpoint) {
    for (const entry of this.map) {
      if (endpointEqualUnordered(endpoint, entry.key)) {
        return true;
      }
    }
    return false;
  }
  clear() {
    this.map.clear();
  }
  *keys() {
    for (const entry of this.map) {
      yield entry.key;
    }
  }
  *values() {
    for (const entry of this.map) {
      yield entry.value;
    }
  }
  *entries() {
    for (const entry of this.map) {
      yield [entry.key, entry.value];
    }
  }
}
subchannelAddress.EndpointMap = EndpointMap;
var channelz = {};
var extendStatics = function(e, r) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e2, r2) {
    e2.__proto__ = r2;
  } || function(e2, r2) {
    for (var t in r2) if (Object.prototype.hasOwnProperty.call(r2, t)) e2[t] = r2[t];
  };
  return extendStatics(e, r);
};
function __extends(e, r) {
  if (typeof r !== "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
  extendStatics(e, r);
  function __() {
    this.constructor = e;
  }
  e.prototype = r === null ? Object.create(r) : (__.prototype = r.prototype, new __());
}
function __generator(e, r) {
  var t = {
    label: 0,
    sent: function() {
      if (s[0] & 1) throw s[1];
      return s[1];
    },
    trys: [],
    ops: []
  }, i, n, s, h;
  return h = {
    next: verb(0),
    throw: verb(1),
    return: verb(2)
  }, typeof Symbol === "function" && (h[Symbol.iterator] = function() {
    return this;
  }), h;
  function verb(e2) {
    return function(r2) {
      return step([e2, r2]);
    };
  }
  function step(a) {
    if (i) throw new TypeError("Generator is already executing.");
    while (h && (h = 0, a[0] && (t = 0)), t) try {
      if (i = 1, n && (s = a[0] & 2 ? n["return"] : a[0] ? n["throw"] || ((s = n["return"]) && s.call(n), 0) : n.next) && !(s = s.call(n, a[1])).done) return s;
      if (n = 0, s) a = [a[0] & 2, s.value];
      switch (a[0]) {
        case 0:
        case 1:
          s = a;
          break;
        case 4:
          t.label++;
          return {
            value: a[1],
            done: false
          };
        case 5:
          t.label++;
          n = a[1];
          a = [0];
          continue;
        case 7:
          a = t.ops.pop();
          t.trys.pop();
          continue;
        default:
          if (!(s = t.trys, s = s.length > 0 && s[s.length - 1]) && (a[0] === 6 || a[0] === 2)) {
            t = 0;
            continue;
          }
          if (a[0] === 3 && (!s || a[1] > s[0] && a[1] < s[3])) {
            t.label = a[1];
            break;
          }
          if (a[0] === 6 && t.label < s[1]) {
            t.label = s[1];
            s = a;
            break;
          }
          if (s && t.label < s[2]) {
            t.label = s[2];
            t.ops.push(a);
            break;
          }
          if (s[2]) t.ops.pop();
          t.trys.pop();
          continue;
      }
      a = r.call(e, t);
    } catch (e2) {
      a = [6, e2];
      n = 0;
    } finally {
      i = s = 0;
    }
    if (a[0] & 5) throw a[1];
    return {
      value: a[0] ? a[1] : void 0,
      done: true
    };
  }
}
typeof SuppressedError === "function" ? SuppressedError : function(e, r, t) {
  var i = new Error(t);
  return i.name = "SuppressedError", i.error = e, i.suppressed = r, i;
};
var TreeNode = function() {
  function TreeNode2(e, r, t) {
    if (t === void 0) {
      t = 1;
    }
    this.t = void 0;
    this.i = void 0;
    this.h = void 0;
    this.u = e;
    this.o = r;
    this.l = t;
  }
  TreeNode2.prototype.v = function() {
    var e = this;
    var r = e.h.h === e;
    if (r && e.l === 1) {
      e = e.i;
    } else if (e.t) {
      e = e.t;
      while (e.i) {
        e = e.i;
      }
    } else {
      if (r) {
        return e.h;
      }
      var t = e.h;
      while (t.t === e) {
        e = t;
        t = e.h;
      }
      e = t;
    }
    return e;
  };
  TreeNode2.prototype.p = function() {
    var e = this;
    if (e.i) {
      e = e.i;
      while (e.t) {
        e = e.t;
      }
      return e;
    } else {
      var r = e.h;
      while (r.i === e) {
        e = r;
        r = e.h;
      }
      if (e.i !== r) {
        return r;
      } else return e;
    }
  };
  TreeNode2.prototype.T = function() {
    var e = this.h;
    var r = this.i;
    var t = r.t;
    if (e.h === this) e.h = r;
    else if (e.t === this) e.t = r;
    else e.i = r;
    r.h = e;
    r.t = this;
    this.h = r;
    this.i = t;
    if (t) t.h = this;
    return r;
  };
  TreeNode2.prototype.I = function() {
    var e = this.h;
    var r = this.t;
    var t = r.i;
    if (e.h === this) e.h = r;
    else if (e.t === this) e.t = r;
    else e.i = r;
    r.h = e;
    r.i = this;
    this.h = r;
    this.t = t;
    if (t) t.h = this;
    return r;
  };
  return TreeNode2;
}();
var TreeNodeEnableIndex = function(e) {
  __extends(TreeNodeEnableIndex2, e);
  function TreeNodeEnableIndex2() {
    var r = e !== null && e.apply(this, arguments) || this;
    r.O = 1;
    return r;
  }
  TreeNodeEnableIndex2.prototype.T = function() {
    var r = e.prototype.T.call(this);
    this.M();
    r.M();
    return r;
  };
  TreeNodeEnableIndex2.prototype.I = function() {
    var r = e.prototype.I.call(this);
    this.M();
    r.M();
    return r;
  };
  TreeNodeEnableIndex2.prototype.M = function() {
    this.O = 1;
    if (this.t) {
      this.O += this.t.O;
    }
    if (this.i) {
      this.O += this.i.O;
    }
  };
  return TreeNodeEnableIndex2;
}(TreeNode);
var ContainerIterator = function() {
  function ContainerIterator2(e) {
    if (e === void 0) {
      e = 0;
    }
    this.iteratorType = e;
  }
  ContainerIterator2.prototype.equals = function(e) {
    return this.C === e.C;
  };
  return ContainerIterator2;
}();
var Base = function() {
  function Base2() {
    this._ = 0;
  }
  Object.defineProperty(Base2.prototype, "length", {
    get: function() {
      return this._;
    },
    enumerable: false,
    configurable: true
  });
  Base2.prototype.size = function() {
    return this._;
  };
  Base2.prototype.empty = function() {
    return this._ === 0;
  };
  return Base2;
}();
var Container = function(e) {
  __extends(Container2, e);
  function Container2() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return Container2;
}(Base);
function throwIteratorAccessError() {
  throw new RangeError("Iterator access denied!");
}
var TreeContainer = function(e) {
  __extends(TreeContainer2, e);
  function TreeContainer2(r, t) {
    if (r === void 0) {
      r = function(e2, r2) {
        if (e2 < r2) return -1;
        if (e2 > r2) return 1;
        return 0;
      };
    }
    if (t === void 0) {
      t = false;
    }
    var i = e.call(this) || this;
    i.N = void 0;
    i.g = r;
    i.enableIndex = t;
    i.S = t ? TreeNodeEnableIndex : TreeNode;
    i.A = new i.S();
    return i;
  }
  TreeContainer2.prototype.m = function(e2, r) {
    var t = this.A;
    while (e2) {
      var i = this.g(e2.u, r);
      if (i < 0) {
        e2 = e2.i;
      } else if (i > 0) {
        t = e2;
        e2 = e2.t;
      } else return e2;
    }
    return t;
  };
  TreeContainer2.prototype.B = function(e2, r) {
    var t = this.A;
    while (e2) {
      var i = this.g(e2.u, r);
      if (i <= 0) {
        e2 = e2.i;
      } else {
        t = e2;
        e2 = e2.t;
      }
    }
    return t;
  };
  TreeContainer2.prototype.j = function(e2, r) {
    var t = this.A;
    while (e2) {
      var i = this.g(e2.u, r);
      if (i < 0) {
        t = e2;
        e2 = e2.i;
      } else if (i > 0) {
        e2 = e2.t;
      } else return e2;
    }
    return t;
  };
  TreeContainer2.prototype.k = function(e2, r) {
    var t = this.A;
    while (e2) {
      var i = this.g(e2.u, r);
      if (i < 0) {
        t = e2;
        e2 = e2.i;
      } else {
        e2 = e2.t;
      }
    }
    return t;
  };
  TreeContainer2.prototype.R = function(e2) {
    while (true) {
      var r = e2.h;
      if (r === this.A) return;
      if (e2.l === 1) {
        e2.l = 0;
        return;
      }
      if (e2 === r.t) {
        var t = r.i;
        if (t.l === 1) {
          t.l = 0;
          r.l = 1;
          if (r === this.N) {
            this.N = r.T();
          } else r.T();
        } else {
          if (t.i && t.i.l === 1) {
            t.l = r.l;
            r.l = 0;
            t.i.l = 0;
            if (r === this.N) {
              this.N = r.T();
            } else r.T();
            return;
          } else if (t.t && t.t.l === 1) {
            t.l = 1;
            t.t.l = 0;
            t.I();
          } else {
            t.l = 1;
            e2 = r;
          }
        }
      } else {
        var t = r.t;
        if (t.l === 1) {
          t.l = 0;
          r.l = 1;
          if (r === this.N) {
            this.N = r.I();
          } else r.I();
        } else {
          if (t.t && t.t.l === 1) {
            t.l = r.l;
            r.l = 0;
            t.t.l = 0;
            if (r === this.N) {
              this.N = r.I();
            } else r.I();
            return;
          } else if (t.i && t.i.l === 1) {
            t.l = 1;
            t.i.l = 0;
            t.T();
          } else {
            t.l = 1;
            e2 = r;
          }
        }
      }
    }
  };
  TreeContainer2.prototype.G = function(e2) {
    if (this._ === 1) {
      this.clear();
      return;
    }
    var r = e2;
    while (r.t || r.i) {
      if (r.i) {
        r = r.i;
        while (r.t) r = r.t;
      } else {
        r = r.t;
      }
      var t = e2.u;
      e2.u = r.u;
      r.u = t;
      var i = e2.o;
      e2.o = r.o;
      r.o = i;
      e2 = r;
    }
    if (this.A.t === r) {
      this.A.t = r.h;
    } else if (this.A.i === r) {
      this.A.i = r.h;
    }
    this.R(r);
    var n = r.h;
    if (r === n.t) {
      n.t = void 0;
    } else n.i = void 0;
    this._ -= 1;
    this.N.l = 0;
    if (this.enableIndex) {
      while (n !== this.A) {
        n.O -= 1;
        n = n.h;
      }
    }
  };
  TreeContainer2.prototype.P = function(e2) {
    var r = typeof e2 === "number" ? e2 : void 0;
    var t = typeof e2 === "function" ? e2 : void 0;
    var i = typeof e2 === "undefined" ? [] : void 0;
    var n = 0;
    var s = this.N;
    var h = [];
    while (h.length || s) {
      if (s) {
        h.push(s);
        s = s.t;
      } else {
        s = h.pop();
        if (n === r) return s;
        i && i.push(s);
        t && t(s, n, this);
        n += 1;
        s = s.i;
      }
    }
    return i;
  };
  TreeContainer2.prototype.q = function(e2) {
    while (true) {
      var r = e2.h;
      if (r.l === 0) return;
      var t = r.h;
      if (r === t.t) {
        var i = t.i;
        if (i && i.l === 1) {
          i.l = r.l = 0;
          if (t === this.N) return;
          t.l = 1;
          e2 = t;
          continue;
        } else if (e2 === r.i) {
          e2.l = 0;
          if (e2.t) {
            e2.t.h = r;
          }
          if (e2.i) {
            e2.i.h = t;
          }
          r.i = e2.t;
          t.t = e2.i;
          e2.t = r;
          e2.i = t;
          if (t === this.N) {
            this.N = e2;
            this.A.h = e2;
          } else {
            var n = t.h;
            if (n.t === t) {
              n.t = e2;
            } else n.i = e2;
          }
          e2.h = t.h;
          r.h = e2;
          t.h = e2;
          t.l = 1;
        } else {
          r.l = 0;
          if (t === this.N) {
            this.N = t.I();
          } else t.I();
          t.l = 1;
          return;
        }
      } else {
        var i = t.t;
        if (i && i.l === 1) {
          i.l = r.l = 0;
          if (t === this.N) return;
          t.l = 1;
          e2 = t;
          continue;
        } else if (e2 === r.t) {
          e2.l = 0;
          if (e2.t) {
            e2.t.h = t;
          }
          if (e2.i) {
            e2.i.h = r;
          }
          t.i = e2.t;
          r.t = e2.i;
          e2.t = t;
          e2.i = r;
          if (t === this.N) {
            this.N = e2;
            this.A.h = e2;
          } else {
            var n = t.h;
            if (n.t === t) {
              n.t = e2;
            } else n.i = e2;
          }
          e2.h = t.h;
          r.h = e2;
          t.h = e2;
          t.l = 1;
        } else {
          r.l = 0;
          if (t === this.N) {
            this.N = t.T();
          } else t.T();
          t.l = 1;
          return;
        }
      }
      if (this.enableIndex) {
        r.M();
        t.M();
        e2.M();
      }
      return;
    }
  };
  TreeContainer2.prototype.D = function(e2, r, t) {
    if (this.N === void 0) {
      this._ += 1;
      this.N = new this.S(e2, r, 0);
      this.N.h = this.A;
      this.A.h = this.A.t = this.A.i = this.N;
      return this._;
    }
    var i;
    var n = this.A.t;
    var s = this.g(n.u, e2);
    if (s === 0) {
      n.o = r;
      return this._;
    } else if (s > 0) {
      n.t = new this.S(e2, r);
      n.t.h = n;
      i = n.t;
      this.A.t = i;
    } else {
      var h = this.A.i;
      var a = this.g(h.u, e2);
      if (a === 0) {
        h.o = r;
        return this._;
      } else if (a < 0) {
        h.i = new this.S(e2, r);
        h.i.h = h;
        i = h.i;
        this.A.i = i;
      } else {
        if (t !== void 0) {
          var u = t.C;
          if (u !== this.A) {
            var f = this.g(u.u, e2);
            if (f === 0) {
              u.o = r;
              return this._;
            } else if (f > 0) {
              var o = u.v();
              var d = this.g(o.u, e2);
              if (d === 0) {
                o.o = r;
                return this._;
              } else if (d < 0) {
                i = new this.S(e2, r);
                if (o.i === void 0) {
                  o.i = i;
                  i.h = o;
                } else {
                  u.t = i;
                  i.h = u;
                }
              }
            }
          }
        }
        if (i === void 0) {
          i = this.N;
          while (true) {
            var c = this.g(i.u, e2);
            if (c > 0) {
              if (i.t === void 0) {
                i.t = new this.S(e2, r);
                i.t.h = i;
                i = i.t;
                break;
              }
              i = i.t;
            } else if (c < 0) {
              if (i.i === void 0) {
                i.i = new this.S(e2, r);
                i.i.h = i;
                i = i.i;
                break;
              }
              i = i.i;
            } else {
              i.o = r;
              return this._;
            }
          }
        }
      }
    }
    if (this.enableIndex) {
      var l = i.h;
      while (l !== this.A) {
        l.O += 1;
        l = l.h;
      }
    }
    this.q(i);
    this._ += 1;
    return this._;
  };
  TreeContainer2.prototype.F = function(e2, r) {
    while (e2) {
      var t = this.g(e2.u, r);
      if (t < 0) {
        e2 = e2.i;
      } else if (t > 0) {
        e2 = e2.t;
      } else return e2;
    }
    return e2 || this.A;
  };
  TreeContainer2.prototype.clear = function() {
    this._ = 0;
    this.N = void 0;
    this.A.h = void 0;
    this.A.t = this.A.i = void 0;
  };
  TreeContainer2.prototype.updateKeyByIterator = function(e2, r) {
    var t = e2.C;
    if (t === this.A) {
      throwIteratorAccessError();
    }
    if (this._ === 1) {
      t.u = r;
      return true;
    }
    var i = t.p().u;
    if (t === this.A.t) {
      if (this.g(i, r) > 0) {
        t.u = r;
        return true;
      }
      return false;
    }
    var n = t.v().u;
    if (t === this.A.i) {
      if (this.g(n, r) < 0) {
        t.u = r;
        return true;
      }
      return false;
    }
    if (this.g(n, r) >= 0 || this.g(i, r) <= 0) return false;
    t.u = r;
    return true;
  };
  TreeContainer2.prototype.eraseElementByPos = function(e2) {
    if (e2 < 0 || e2 > this._ - 1) {
      throw new RangeError();
    }
    var r = this.P(e2);
    this.G(r);
    return this._;
  };
  TreeContainer2.prototype.eraseElementByKey = function(e2) {
    if (this._ === 0) return false;
    var r = this.F(this.N, e2);
    if (r === this.A) return false;
    this.G(r);
    return true;
  };
  TreeContainer2.prototype.eraseElementByIterator = function(e2) {
    var r = e2.C;
    if (r === this.A) {
      throwIteratorAccessError();
    }
    var t = r.i === void 0;
    var i = e2.iteratorType === 0;
    if (i) {
      if (t) e2.next();
    } else {
      if (!t || r.t === void 0) e2.next();
    }
    this.G(r);
    return e2;
  };
  TreeContainer2.prototype.getHeight = function() {
    if (this._ === 0) return 0;
    function traversal(e2) {
      if (!e2) return 0;
      return Math.max(traversal(e2.t), traversal(e2.i)) + 1;
    }
    return traversal(this.N);
  };
  return TreeContainer2;
}(Container);
var TreeIterator = function(e) {
  __extends(TreeIterator2, e);
  function TreeIterator2(r, t, i) {
    var n = e.call(this, i) || this;
    n.C = r;
    n.A = t;
    if (n.iteratorType === 0) {
      n.pre = function() {
        if (this.C === this.A.t) {
          throwIteratorAccessError();
        }
        this.C = this.C.v();
        return this;
      };
      n.next = function() {
        if (this.C === this.A) {
          throwIteratorAccessError();
        }
        this.C = this.C.p();
        return this;
      };
    } else {
      n.pre = function() {
        if (this.C === this.A.i) {
          throwIteratorAccessError();
        }
        this.C = this.C.p();
        return this;
      };
      n.next = function() {
        if (this.C === this.A) {
          throwIteratorAccessError();
        }
        this.C = this.C.v();
        return this;
      };
    }
    return n;
  }
  Object.defineProperty(TreeIterator2.prototype, "index", {
    get: function() {
      var e2 = this.C;
      var r = this.A.h;
      if (e2 === this.A) {
        if (r) {
          return r.O - 1;
        }
        return 0;
      }
      var t = 0;
      if (e2.t) {
        t += e2.t.O;
      }
      while (e2 !== r) {
        var i = e2.h;
        if (e2 === i.i) {
          t += 1;
          if (i.t) {
            t += i.t.O;
          }
        }
        e2 = i;
      }
      return t;
    },
    enumerable: false,
    configurable: true
  });
  TreeIterator2.prototype.isAccessible = function() {
    return this.C !== this.A;
  };
  return TreeIterator2;
}(ContainerIterator);
var OrderedMapIterator = function(e) {
  __extends(OrderedMapIterator2, e);
  function OrderedMapIterator2(r, t, i, n) {
    var s = e.call(this, r, t, n) || this;
    s.container = i;
    return s;
  }
  Object.defineProperty(OrderedMapIterator2.prototype, "pointer", {
    get: function() {
      if (this.C === this.A) {
        throwIteratorAccessError();
      }
      var e2 = this;
      return new Proxy([], {
        get: function(r, t) {
          if (t === "0") return e2.C.u;
          else if (t === "1") return e2.C.o;
          r[0] = e2.C.u;
          r[1] = e2.C.o;
          return r[t];
        },
        set: function(r, t, i) {
          if (t !== "1") {
            throw new TypeError("prop must be 1");
          }
          e2.C.o = i;
          return true;
        }
      });
    },
    enumerable: false,
    configurable: true
  });
  OrderedMapIterator2.prototype.copy = function() {
    return new OrderedMapIterator2(this.C, this.A, this.container, this.iteratorType);
  };
  return OrderedMapIterator2;
}(TreeIterator);
var OrderedMap = function(e) {
  __extends(OrderedMap2, e);
  function OrderedMap2(r, t, i) {
    if (r === void 0) {
      r = [];
    }
    var n = e.call(this, t, i) || this;
    var s = n;
    r.forEach(function(e2) {
      s.setElement(e2[0], e2[1]);
    });
    return n;
  }
  OrderedMap2.prototype.begin = function() {
    return new OrderedMapIterator(this.A.t || this.A, this.A, this);
  };
  OrderedMap2.prototype.end = function() {
    return new OrderedMapIterator(this.A, this.A, this);
  };
  OrderedMap2.prototype.rBegin = function() {
    return new OrderedMapIterator(this.A.i || this.A, this.A, this, 1);
  };
  OrderedMap2.prototype.rEnd = function() {
    return new OrderedMapIterator(this.A, this.A, this, 1);
  };
  OrderedMap2.prototype.front = function() {
    if (this._ === 0) return;
    var e2 = this.A.t;
    return [e2.u, e2.o];
  };
  OrderedMap2.prototype.back = function() {
    if (this._ === 0) return;
    var e2 = this.A.i;
    return [e2.u, e2.o];
  };
  OrderedMap2.prototype.lowerBound = function(e2) {
    var r = this.m(this.N, e2);
    return new OrderedMapIterator(r, this.A, this);
  };
  OrderedMap2.prototype.upperBound = function(e2) {
    var r = this.B(this.N, e2);
    return new OrderedMapIterator(r, this.A, this);
  };
  OrderedMap2.prototype.reverseLowerBound = function(e2) {
    var r = this.j(this.N, e2);
    return new OrderedMapIterator(r, this.A, this);
  };
  OrderedMap2.prototype.reverseUpperBound = function(e2) {
    var r = this.k(this.N, e2);
    return new OrderedMapIterator(r, this.A, this);
  };
  OrderedMap2.prototype.forEach = function(e2) {
    this.P(function(r, t, i) {
      e2([r.u, r.o], t, i);
    });
  };
  OrderedMap2.prototype.setElement = function(e2, r, t) {
    return this.D(e2, r, t);
  };
  OrderedMap2.prototype.getElementByPos = function(e2) {
    if (e2 < 0 || e2 > this._ - 1) {
      throw new RangeError();
    }
    var r = this.P(e2);
    return [r.u, r.o];
  };
  OrderedMap2.prototype.find = function(e2) {
    var r = this.F(this.N, e2);
    return new OrderedMapIterator(r, this.A, this);
  };
  OrderedMap2.prototype.getElementByKey = function(e2) {
    var r = this.F(this.N, e2);
    return r.o;
  };
  OrderedMap2.prototype.union = function(e2) {
    var r = this;
    e2.forEach(function(e3) {
      r.setElement(e3[0], e3[1]);
    });
    return this._;
  };
  OrderedMap2.prototype[Symbol.iterator] = function() {
    var e2, r, t, i;
    return __generator(this, function(n) {
      switch (n.label) {
        case 0:
          e2 = this._;
          r = this.P();
          t = 0;
          n.label = 1;
        case 1:
          if (!(t < e2)) return [3, 4];
          i = r[t];
          return [4, [i.u, i.o]];
        case 2:
          n.sent();
          n.label = 3;
        case 3:
          ++t;
          return [3, 1];
        case 4:
          return [2];
      }
    });
  };
  return OrderedMap2;
}(TreeContainer);
const esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  OrderedMap
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(esm);
var admin = {};
Object.defineProperty(admin, "__esModule", { value: true });
admin.addAdminServicesToServer = admin.registerAdminService = void 0;
const registeredAdminServices = [];
function registerAdminService(getServiceDefinition, getHandlers) {
  registeredAdminServices.push({ getServiceDefinition, getHandlers });
}
admin.registerAdminService = registerAdminService;
function addAdminServicesToServer(server2) {
  for (const { getServiceDefinition, getHandlers } of registeredAdminServices) {
    server2.addService(getServiceDefinition(), getHandlers());
  }
}
admin.addAdminServicesToServer = addAdminServicesToServer;
var makeClient = {};
var client = {};
var call = {};
Object.defineProperty(call, "__esModule", { value: true });
call.ClientDuplexStreamImpl = call.ClientWritableStreamImpl = call.ClientReadableStreamImpl = call.ClientUnaryCallImpl = call.callErrorFromStatus = void 0;
const events_1$1 = require$$0$4;
const stream_1$1 = require$$1$2;
const constants_1$b = constants;
function callErrorFromStatus(status, callerStack) {
  const message2 = `${status.code} ${constants_1$b.Status[status.code]}: ${status.details}`;
  const error2 = new Error(message2);
  const stack = `${error2.stack}
for call at
${callerStack}`;
  return Object.assign(new Error(message2), status, { stack });
}
call.callErrorFromStatus = callErrorFromStatus;
class ClientUnaryCallImpl extends events_1$1.EventEmitter {
  constructor() {
    super();
  }
  cancel() {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1$b.Status.CANCELLED, "Cancelled on client");
  }
  getPeer() {
    var _a, _b;
    return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
  }
}
call.ClientUnaryCallImpl = ClientUnaryCallImpl;
class ClientReadableStreamImpl extends stream_1$1.Readable {
  constructor(deserialize) {
    super({ objectMode: true });
    this.deserialize = deserialize;
  }
  cancel() {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1$b.Status.CANCELLED, "Cancelled on client");
  }
  getPeer() {
    var _a, _b;
    return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
  }
  _read(_size) {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
  }
}
call.ClientReadableStreamImpl = ClientReadableStreamImpl;
class ClientWritableStreamImpl extends stream_1$1.Writable {
  constructor(serialize) {
    super({ objectMode: true });
    this.serialize = serialize;
  }
  cancel() {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1$b.Status.CANCELLED, "Cancelled on client");
  }
  getPeer() {
    var _a, _b;
    return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
  }
  _write(chunk, encoding, cb) {
    var _a;
    const context = {
      callback: cb
    };
    const flags = Number(encoding);
    if (!Number.isNaN(flags)) {
      context.flags = flags;
    }
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
  }
  _final(cb) {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
    cb();
  }
}
call.ClientWritableStreamImpl = ClientWritableStreamImpl;
class ClientDuplexStreamImpl extends stream_1$1.Duplex {
  constructor(serialize, deserialize) {
    super({ objectMode: true });
    this.serialize = serialize;
    this.deserialize = deserialize;
  }
  cancel() {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(constants_1$b.Status.CANCELLED, "Cancelled on client");
  }
  getPeer() {
    var _a, _b;
    return (_b = (_a = this.call) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : "unknown";
  }
  _read(_size) {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.startRead();
  }
  _write(chunk, encoding, cb) {
    var _a;
    const context = {
      callback: cb
    };
    const flags = Number(encoding);
    if (!Number.isNaN(flags)) {
      context.flags = flags;
    }
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.sendMessageWithContext(context, chunk);
  }
  _final(cb) {
    var _a;
    (_a = this.call) === null || _a === void 0 ? void 0 : _a.halfClose();
    cb();
  }
}
call.ClientDuplexStreamImpl = ClientDuplexStreamImpl;
var clientInterceptors = {};
var callInterface = {};
Object.defineProperty(callInterface, "__esModule", { value: true });
callInterface.InterceptingListenerImpl = callInterface.isInterceptingListener = void 0;
function isInterceptingListener(listener) {
  return listener.onReceiveMetadata !== void 0 && listener.onReceiveMetadata.length === 1;
}
callInterface.isInterceptingListener = isInterceptingListener;
class InterceptingListenerImpl {
  constructor(listener, nextListener) {
    this.listener = listener;
    this.nextListener = nextListener;
    this.processingMetadata = false;
    this.hasPendingMessage = false;
    this.processingMessage = false;
    this.pendingStatus = null;
  }
  processPendingMessage() {
    if (this.hasPendingMessage) {
      this.nextListener.onReceiveMessage(this.pendingMessage);
      this.pendingMessage = null;
      this.hasPendingMessage = false;
    }
  }
  processPendingStatus() {
    if (this.pendingStatus) {
      this.nextListener.onReceiveStatus(this.pendingStatus);
    }
  }
  onReceiveMetadata(metadata2) {
    this.processingMetadata = true;
    this.listener.onReceiveMetadata(metadata2, (metadata3) => {
      this.processingMetadata = false;
      this.nextListener.onReceiveMetadata(metadata3);
      this.processPendingMessage();
      this.processPendingStatus();
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onReceiveMessage(message2) {
    this.processingMessage = true;
    this.listener.onReceiveMessage(message2, (msg) => {
      this.processingMessage = false;
      if (this.processingMetadata) {
        this.pendingMessage = msg;
        this.hasPendingMessage = true;
      } else {
        this.nextListener.onReceiveMessage(msg);
        this.processPendingStatus();
      }
    });
  }
  onReceiveStatus(status) {
    this.listener.onReceiveStatus(status, (processedStatus) => {
      if (this.processingMetadata || this.processingMessage) {
        this.pendingStatus = processedStatus;
      } else {
        this.nextListener.onReceiveStatus(processedStatus);
      }
    });
  }
}
callInterface.InterceptingListenerImpl = InterceptingListenerImpl;
Object.defineProperty(clientInterceptors, "__esModule", { value: true });
clientInterceptors.getInterceptingCall = clientInterceptors.InterceptingCall = clientInterceptors.RequesterBuilder = clientInterceptors.ListenerBuilder = clientInterceptors.InterceptorConfigurationError = void 0;
const metadata_1$6 = metadata;
const call_interface_1 = callInterface;
const constants_1$a = constants;
const error_1$1 = error;
class InterceptorConfigurationError extends Error {
  constructor(message2) {
    super(message2);
    this.name = "InterceptorConfigurationError";
    Error.captureStackTrace(this, InterceptorConfigurationError);
  }
}
clientInterceptors.InterceptorConfigurationError = InterceptorConfigurationError;
class ListenerBuilder {
  constructor() {
    this.metadata = void 0;
    this.message = void 0;
    this.status = void 0;
  }
  withOnReceiveMetadata(onReceiveMetadata) {
    this.metadata = onReceiveMetadata;
    return this;
  }
  withOnReceiveMessage(onReceiveMessage) {
    this.message = onReceiveMessage;
    return this;
  }
  withOnReceiveStatus(onReceiveStatus) {
    this.status = onReceiveStatus;
    return this;
  }
  build() {
    return {
      onReceiveMetadata: this.metadata,
      onReceiveMessage: this.message,
      onReceiveStatus: this.status
    };
  }
}
clientInterceptors.ListenerBuilder = ListenerBuilder;
class RequesterBuilder {
  constructor() {
    this.start = void 0;
    this.message = void 0;
    this.halfClose = void 0;
    this.cancel = void 0;
  }
  withStart(start) {
    this.start = start;
    return this;
  }
  withSendMessage(sendMessage) {
    this.message = sendMessage;
    return this;
  }
  withHalfClose(halfClose) {
    this.halfClose = halfClose;
    return this;
  }
  withCancel(cancel) {
    this.cancel = cancel;
    return this;
  }
  build() {
    return {
      start: this.start,
      sendMessage: this.message,
      halfClose: this.halfClose,
      cancel: this.cancel
    };
  }
}
clientInterceptors.RequesterBuilder = RequesterBuilder;
const defaultListener = {
  onReceiveMetadata: (metadata2, next) => {
    next(metadata2);
  },
  onReceiveMessage: (message2, next) => {
    next(message2);
  },
  onReceiveStatus: (status, next) => {
    next(status);
  }
};
const defaultRequester = {
  start: (metadata2, listener, next) => {
    next(metadata2, listener);
  },
  sendMessage: (message2, next) => {
    next(message2);
  },
  halfClose: (next) => {
    next();
  },
  cancel: (next) => {
    next();
  }
};
class InterceptingCall {
  constructor(nextCall, requester) {
    var _a, _b, _c, _d;
    this.nextCall = nextCall;
    this.processingMetadata = false;
    this.pendingMessageContext = null;
    this.processingMessage = false;
    this.pendingHalfClose = false;
    if (requester) {
      this.requester = {
        start: (_a = requester.start) !== null && _a !== void 0 ? _a : defaultRequester.start,
        sendMessage: (_b = requester.sendMessage) !== null && _b !== void 0 ? _b : defaultRequester.sendMessage,
        halfClose: (_c = requester.halfClose) !== null && _c !== void 0 ? _c : defaultRequester.halfClose,
        cancel: (_d = requester.cancel) !== null && _d !== void 0 ? _d : defaultRequester.cancel
      };
    } else {
      this.requester = defaultRequester;
    }
  }
  cancelWithStatus(status, details) {
    this.requester.cancel(() => {
      this.nextCall.cancelWithStatus(status, details);
    });
  }
  getPeer() {
    return this.nextCall.getPeer();
  }
  processPendingMessage() {
    if (this.pendingMessageContext) {
      this.nextCall.sendMessageWithContext(this.pendingMessageContext, this.pendingMessage);
      this.pendingMessageContext = null;
      this.pendingMessage = null;
    }
  }
  processPendingHalfClose() {
    if (this.pendingHalfClose) {
      this.nextCall.halfClose();
    }
  }
  start(metadata2, interceptingListener) {
    var _a, _b, _c, _d, _e, _f;
    const fullInterceptingListener = {
      onReceiveMetadata: (_b = (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(interceptingListener)) !== null && _b !== void 0 ? _b : (metadata3) => {
      },
      onReceiveMessage: (_d = (_c = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _c === void 0 ? void 0 : _c.bind(interceptingListener)) !== null && _d !== void 0 ? _d : (message2) => {
      },
      onReceiveStatus: (_f = (_e = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _e === void 0 ? void 0 : _e.bind(interceptingListener)) !== null && _f !== void 0 ? _f : (status) => {
      }
    };
    this.processingMetadata = true;
    this.requester.start(metadata2, fullInterceptingListener, (md, listener) => {
      var _a2, _b2, _c2;
      this.processingMetadata = false;
      let finalInterceptingListener;
      if ((0, call_interface_1.isInterceptingListener)(listener)) {
        finalInterceptingListener = listener;
      } else {
        const fullListener = {
          onReceiveMetadata: (_a2 = listener.onReceiveMetadata) !== null && _a2 !== void 0 ? _a2 : defaultListener.onReceiveMetadata,
          onReceiveMessage: (_b2 = listener.onReceiveMessage) !== null && _b2 !== void 0 ? _b2 : defaultListener.onReceiveMessage,
          onReceiveStatus: (_c2 = listener.onReceiveStatus) !== null && _c2 !== void 0 ? _c2 : defaultListener.onReceiveStatus
        };
        finalInterceptingListener = new call_interface_1.InterceptingListenerImpl(fullListener, fullInterceptingListener);
      }
      this.nextCall.start(md, finalInterceptingListener);
      this.processPendingMessage();
      this.processPendingHalfClose();
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessageWithContext(context, message2) {
    this.processingMessage = true;
    this.requester.sendMessage(message2, (finalMessage) => {
      this.processingMessage = false;
      if (this.processingMetadata) {
        this.pendingMessageContext = context;
        this.pendingMessage = message2;
      } else {
        this.nextCall.sendMessageWithContext(context, finalMessage);
        this.processPendingHalfClose();
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessage(message2) {
    this.sendMessageWithContext({}, message2);
  }
  startRead() {
    this.nextCall.startRead();
  }
  halfClose() {
    this.requester.halfClose(() => {
      if (this.processingMetadata || this.processingMessage) {
        this.pendingHalfClose = true;
      } else {
        this.nextCall.halfClose();
      }
    });
  }
}
clientInterceptors.InterceptingCall = InterceptingCall;
function getCall(channel2, path2, options) {
  var _a, _b;
  const deadline2 = (_a = options.deadline) !== null && _a !== void 0 ? _a : Infinity;
  const host = options.host;
  const parent = (_b = options.parent) !== null && _b !== void 0 ? _b : null;
  const propagateFlags = options.propagate_flags;
  const credentials = options.credentials;
  const call2 = channel2.createCall(path2, deadline2, host, parent, propagateFlags);
  if (credentials) {
    call2.setCredentials(credentials);
  }
  return call2;
}
class BaseInterceptingCall {
  constructor(call2, methodDefinition) {
    this.call = call2;
    this.methodDefinition = methodDefinition;
  }
  cancelWithStatus(status, details) {
    this.call.cancelWithStatus(status, details);
  }
  getPeer() {
    return this.call.getPeer();
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessageWithContext(context, message2) {
    let serialized;
    try {
      serialized = this.methodDefinition.requestSerialize(message2);
    } catch (e) {
      this.call.cancelWithStatus(constants_1$a.Status.INTERNAL, `Request message serialization failure: ${(0, error_1$1.getErrorMessage)(e)}`);
      return;
    }
    this.call.sendMessageWithContext(context, serialized);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendMessage(message2) {
    this.sendMessageWithContext({}, message2);
  }
  start(metadata2, interceptingListener) {
    let readError = null;
    this.call.start(metadata2, {
      onReceiveMetadata: (metadata3) => {
        var _a;
        (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, metadata3);
      },
      onReceiveMessage: (message2) => {
        var _a;
        let deserialized;
        try {
          deserialized = this.methodDefinition.responseDeserialize(message2);
        } catch (e) {
          readError = {
            code: constants_1$a.Status.INTERNAL,
            details: `Response message parsing error: ${(0, error_1$1.getErrorMessage)(e)}`,
            metadata: new metadata_1$6.Metadata()
          };
          this.call.cancelWithStatus(readError.code, readError.details);
          return;
        }
        (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveMessage) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, deserialized);
      },
      onReceiveStatus: (status) => {
        var _a, _b;
        if (readError) {
          (_a = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _a === void 0 ? void 0 : _a.call(interceptingListener, readError);
        } else {
          (_b = interceptingListener === null || interceptingListener === void 0 ? void 0 : interceptingListener.onReceiveStatus) === null || _b === void 0 ? void 0 : _b.call(interceptingListener, status);
        }
      }
    });
  }
  startRead() {
    this.call.startRead();
  }
  halfClose() {
    this.call.halfClose();
  }
}
class BaseUnaryInterceptingCall extends BaseInterceptingCall {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(call2, methodDefinition) {
    super(call2, methodDefinition);
  }
  start(metadata2, listener) {
    var _a, _b;
    let receivedMessage = false;
    const wrapperListener = {
      onReceiveMetadata: (_b = (_a = listener === null || listener === void 0 ? void 0 : listener.onReceiveMetadata) === null || _a === void 0 ? void 0 : _a.bind(listener)) !== null && _b !== void 0 ? _b : (metadata3) => {
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onReceiveMessage: (message2) => {
        var _a2;
        receivedMessage = true;
        (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, message2);
      },
      onReceiveStatus: (status) => {
        var _a2, _b2;
        if (!receivedMessage) {
          (_a2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveMessage) === null || _a2 === void 0 ? void 0 : _a2.call(listener, null);
        }
        (_b2 = listener === null || listener === void 0 ? void 0 : listener.onReceiveStatus) === null || _b2 === void 0 ? void 0 : _b2.call(listener, status);
      }
    };
    super.start(metadata2, wrapperListener);
    this.call.startRead();
  }
}
class BaseStreamingInterceptingCall extends BaseInterceptingCall {
}
function getBottomInterceptingCall(channel2, options, methodDefinition) {
  const call2 = getCall(channel2, methodDefinition.path, options);
  if (methodDefinition.responseStream) {
    return new BaseStreamingInterceptingCall(call2, methodDefinition);
  } else {
    return new BaseUnaryInterceptingCall(call2, methodDefinition);
  }
}
function getInterceptingCall(interceptorArgs, methodDefinition, options, channel2) {
  if (interceptorArgs.clientInterceptors.length > 0 && interceptorArgs.clientInterceptorProviders.length > 0) {
    throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
  }
  if (interceptorArgs.callInterceptors.length > 0 && interceptorArgs.callInterceptorProviders.length > 0) {
    throw new InterceptorConfigurationError("Both interceptors and interceptor_providers were passed as call options. Only one of these is allowed.");
  }
  let interceptors = [];
  if (interceptorArgs.callInterceptors.length > 0 || interceptorArgs.callInterceptorProviders.length > 0) {
    interceptors = [].concat(interceptorArgs.callInterceptors, interceptorArgs.callInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
  } else {
    interceptors = [].concat(interceptorArgs.clientInterceptors, interceptorArgs.clientInterceptorProviders.map((provider) => provider(methodDefinition))).filter((interceptor) => interceptor);
  }
  const interceptorOptions = Object.assign({}, options, {
    method_definition: methodDefinition
  });
  const getCall2 = interceptors.reduceRight((nextCall, nextInterceptor) => {
    return (currentOptions) => nextInterceptor(currentOptions, nextCall);
  }, (finalOptions) => getBottomInterceptingCall(channel2, finalOptions, methodDefinition));
  return getCall2(interceptorOptions);
}
clientInterceptors.getInterceptingCall = getInterceptingCall;
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  Object.defineProperty(client, "__esModule", { value: true });
  client.Client = void 0;
  const call_1 = call;
  const channel_1 = requireChannel();
  const connectivity_state_12 = connectivityState;
  const constants_12 = constants;
  const metadata_12 = metadata;
  const client_interceptors_1 = clientInterceptors;
  const CHANNEL_SYMBOL = Symbol();
  const INTERCEPTOR_SYMBOL = Symbol();
  const INTERCEPTOR_PROVIDER_SYMBOL = Symbol();
  const CALL_INVOCATION_TRANSFORMER_SYMBOL = Symbol();
  function isFunction(arg) {
    return typeof arg === "function";
  }
  function getErrorStackString(error2) {
    var _a;
    return ((_a = error2.stack) === null || _a === void 0 ? void 0 : _a.split("\n").slice(1).join("\n")) || "no stack trace available";
  }
  class Client {
    constructor(address, credentials, options = {}) {
      var _a, _b;
      options = Object.assign({}, options);
      this[INTERCEPTOR_SYMBOL] = (_a = options.interceptors) !== null && _a !== void 0 ? _a : [];
      delete options.interceptors;
      this[INTERCEPTOR_PROVIDER_SYMBOL] = (_b = options.interceptor_providers) !== null && _b !== void 0 ? _b : [];
      delete options.interceptor_providers;
      if (this[INTERCEPTOR_SYMBOL].length > 0 && this[INTERCEPTOR_PROVIDER_SYMBOL].length > 0) {
        throw new Error("Both interceptors and interceptor_providers were passed as options to the client constructor. Only one of these is allowed.");
      }
      this[CALL_INVOCATION_TRANSFORMER_SYMBOL] = options.callInvocationTransformer;
      delete options.callInvocationTransformer;
      if (options.channelOverride) {
        this[CHANNEL_SYMBOL] = options.channelOverride;
      } else if (options.channelFactoryOverride) {
        const channelFactoryOverride = options.channelFactoryOverride;
        delete options.channelFactoryOverride;
        this[CHANNEL_SYMBOL] = channelFactoryOverride(address, credentials, options);
      } else {
        this[CHANNEL_SYMBOL] = new channel_1.ChannelImplementation(address, credentials, options);
      }
    }
    close() {
      this[CHANNEL_SYMBOL].close();
    }
    getChannel() {
      return this[CHANNEL_SYMBOL];
    }
    waitForReady(deadline2, callback) {
      const checkState = (err) => {
        if (err) {
          callback(new Error("Failed to connect before the deadline"));
          return;
        }
        let newState;
        try {
          newState = this[CHANNEL_SYMBOL].getConnectivityState(true);
        } catch (e) {
          callback(new Error("The channel has been closed"));
          return;
        }
        if (newState === connectivity_state_12.ConnectivityState.READY) {
          callback();
        } else {
          try {
            this[CHANNEL_SYMBOL].watchConnectivityState(newState, deadline2, checkState);
          } catch (e) {
            callback(new Error("The channel has been closed"));
          }
        }
      };
      setImmediate(checkState);
    }
    checkOptionalUnaryResponseArguments(arg1, arg2, arg3) {
      if (isFunction(arg1)) {
        return { metadata: new metadata_12.Metadata(), options: {}, callback: arg1 };
      } else if (isFunction(arg2)) {
        if (arg1 instanceof metadata_12.Metadata) {
          return { metadata: arg1, options: {}, callback: arg2 };
        } else {
          return { metadata: new metadata_12.Metadata(), options: arg1, callback: arg2 };
        }
      } else {
        if (!(arg1 instanceof metadata_12.Metadata && arg2 instanceof Object && isFunction(arg3))) {
          throw new Error("Incorrect arguments passed");
        }
        return { metadata: arg1, options: arg2, callback: arg3 };
      }
    }
    makeUnaryRequest(method2, serialize, deserialize, argument, metadata2, options, callback) {
      var _a, _b;
      const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata2, options, callback);
      const methodDefinition = {
        path: method2,
        requestStream: false,
        responseStream: false,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        argument,
        metadata: checkedArguments.metadata,
        call: new call_1.ClientUnaryCallImpl(),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options,
        callback: checkedArguments.callback
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const emitter = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
      };
      const call2 = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      emitter.call = call2;
      let responseMessage = null;
      let receivedStatus = false;
      let callerStackError = new Error();
      call2.start(callProperties.metadata, {
        onReceiveMetadata: (metadata3) => {
          emitter.emit("metadata", metadata3);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onReceiveMessage(message2) {
          if (responseMessage !== null) {
            call2.cancelWithStatus(constants_12.Status.UNIMPLEMENTED, "Too many responses received");
          }
          responseMessage = message2;
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          if (status.code === constants_12.Status.OK) {
            if (responseMessage === null) {
              const callerStack = getErrorStackString(callerStackError);
              callProperties.callback((0, call_1.callErrorFromStatus)({
                code: constants_12.Status.UNIMPLEMENTED,
                details: "No message received",
                metadata: status.metadata
              }, callerStack));
            } else {
              callProperties.callback(null, responseMessage);
            }
          } else {
            const callerStack = getErrorStackString(callerStackError);
            callProperties.callback((0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          emitter.emit("status", status);
        }
      });
      call2.sendMessage(argument);
      call2.halfClose();
      return emitter;
    }
    makeClientStreamRequest(method2, serialize, deserialize, metadata2, options, callback) {
      var _a, _b;
      const checkedArguments = this.checkOptionalUnaryResponseArguments(metadata2, options, callback);
      const methodDefinition = {
        path: method2,
        requestStream: true,
        responseStream: false,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        metadata: checkedArguments.metadata,
        call: new call_1.ClientWritableStreamImpl(serialize),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options,
        callback: checkedArguments.callback
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const emitter = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
      };
      const call2 = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      emitter.call = call2;
      let responseMessage = null;
      let receivedStatus = false;
      let callerStackError = new Error();
      call2.start(callProperties.metadata, {
        onReceiveMetadata: (metadata3) => {
          emitter.emit("metadata", metadata3);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onReceiveMessage(message2) {
          if (responseMessage !== null) {
            call2.cancelWithStatus(constants_12.Status.UNIMPLEMENTED, "Too many responses received");
          }
          responseMessage = message2;
          call2.startRead();
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          if (status.code === constants_12.Status.OK) {
            if (responseMessage === null) {
              const callerStack = getErrorStackString(callerStackError);
              callProperties.callback((0, call_1.callErrorFromStatus)({
                code: constants_12.Status.UNIMPLEMENTED,
                details: "No message received",
                metadata: status.metadata
              }, callerStack));
            } else {
              callProperties.callback(null, responseMessage);
            }
          } else {
            const callerStack = getErrorStackString(callerStackError);
            callProperties.callback((0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          emitter.emit("status", status);
        }
      });
      return emitter;
    }
    checkMetadataAndOptions(arg1, arg2) {
      let metadata2;
      let options;
      if (arg1 instanceof metadata_12.Metadata) {
        metadata2 = arg1;
        if (arg2) {
          options = arg2;
        } else {
          options = {};
        }
      } else {
        if (arg1) {
          options = arg1;
        } else {
          options = {};
        }
        metadata2 = new metadata_12.Metadata();
      }
      return { metadata: metadata2, options };
    }
    makeServerStreamRequest(method2, serialize, deserialize, argument, metadata2, options) {
      var _a, _b;
      const checkedArguments = this.checkMetadataAndOptions(metadata2, options);
      const methodDefinition = {
        path: method2,
        requestStream: false,
        responseStream: true,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        argument,
        metadata: checkedArguments.metadata,
        call: new call_1.ClientReadableStreamImpl(deserialize),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const stream = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
      };
      const call2 = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      stream.call = call2;
      let receivedStatus = false;
      let callerStackError = new Error();
      call2.start(callProperties.metadata, {
        onReceiveMetadata(metadata3) {
          stream.emit("metadata", metadata3);
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onReceiveMessage(message2) {
          stream.push(message2);
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          stream.push(null);
          if (status.code !== constants_12.Status.OK) {
            const callerStack = getErrorStackString(callerStackError);
            stream.emit("error", (0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          stream.emit("status", status);
        }
      });
      call2.sendMessage(argument);
      call2.halfClose();
      return stream;
    }
    makeBidiStreamRequest(method2, serialize, deserialize, metadata2, options) {
      var _a, _b;
      const checkedArguments = this.checkMetadataAndOptions(metadata2, options);
      const methodDefinition = {
        path: method2,
        requestStream: true,
        responseStream: true,
        requestSerialize: serialize,
        responseDeserialize: deserialize
      };
      let callProperties = {
        metadata: checkedArguments.metadata,
        call: new call_1.ClientDuplexStreamImpl(serialize, deserialize),
        channel: this[CHANNEL_SYMBOL],
        methodDefinition,
        callOptions: checkedArguments.options
      };
      if (this[CALL_INVOCATION_TRANSFORMER_SYMBOL]) {
        callProperties = this[CALL_INVOCATION_TRANSFORMER_SYMBOL](callProperties);
      }
      const stream = callProperties.call;
      const interceptorArgs = {
        clientInterceptors: this[INTERCEPTOR_SYMBOL],
        clientInterceptorProviders: this[INTERCEPTOR_PROVIDER_SYMBOL],
        callInterceptors: (_a = callProperties.callOptions.interceptors) !== null && _a !== void 0 ? _a : [],
        callInterceptorProviders: (_b = callProperties.callOptions.interceptor_providers) !== null && _b !== void 0 ? _b : []
      };
      const call2 = (0, client_interceptors_1.getInterceptingCall)(interceptorArgs, callProperties.methodDefinition, callProperties.callOptions, callProperties.channel);
      stream.call = call2;
      let receivedStatus = false;
      let callerStackError = new Error();
      call2.start(callProperties.metadata, {
        onReceiveMetadata(metadata3) {
          stream.emit("metadata", metadata3);
        },
        onReceiveMessage(message2) {
          stream.push(message2);
        },
        onReceiveStatus(status) {
          if (receivedStatus) {
            return;
          }
          receivedStatus = true;
          stream.push(null);
          if (status.code !== constants_12.Status.OK) {
            const callerStack = getErrorStackString(callerStackError);
            stream.emit("error", (0, call_1.callErrorFromStatus)(status, callerStack));
          }
          callerStackError = null;
          stream.emit("status", status);
        }
      });
      return stream;
    }
  }
  client.Client = Client;
  return client;
}
var hasRequiredMakeClient;
function requireMakeClient() {
  if (hasRequiredMakeClient) return makeClient;
  hasRequiredMakeClient = 1;
  Object.defineProperty(makeClient, "__esModule", { value: true });
  makeClient.loadPackageDefinition = makeClient.makeClientConstructor = void 0;
  const client_1 = requireClient();
  const requesterFuncs = {
    unary: client_1.Client.prototype.makeUnaryRequest,
    server_stream: client_1.Client.prototype.makeServerStreamRequest,
    client_stream: client_1.Client.prototype.makeClientStreamRequest,
    bidi: client_1.Client.prototype.makeBidiStreamRequest
  };
  function isPrototypePolluted(key) {
    return ["__proto__", "prototype", "constructor"].includes(key);
  }
  function makeClientConstructor(methods, serviceName, classOptions) {
    class ServiceClientImpl extends client_1.Client {
    }
    Object.keys(methods).forEach((name2) => {
      if (isPrototypePolluted(name2)) {
        return;
      }
      const attrs = methods[name2];
      let methodType;
      if (typeof name2 === "string" && name2.charAt(0) === "$") {
        throw new Error("Method names cannot start with $");
      }
      if (attrs.requestStream) {
        if (attrs.responseStream) {
          methodType = "bidi";
        } else {
          methodType = "client_stream";
        }
      } else {
        if (attrs.responseStream) {
          methodType = "server_stream";
        } else {
          methodType = "unary";
        }
      }
      const serialize = attrs.requestSerialize;
      const deserialize = attrs.responseDeserialize;
      const methodFunc = partial(requesterFuncs[methodType], attrs.path, serialize, deserialize);
      ServiceClientImpl.prototype[name2] = methodFunc;
      Object.assign(ServiceClientImpl.prototype[name2], attrs);
      if (attrs.originalName && !isPrototypePolluted(attrs.originalName)) {
        ServiceClientImpl.prototype[attrs.originalName] = ServiceClientImpl.prototype[name2];
      }
    });
    ServiceClientImpl.service = methods;
    ServiceClientImpl.serviceName = serviceName;
    return ServiceClientImpl;
  }
  makeClient.makeClientConstructor = makeClientConstructor;
  function partial(fn, path2, serialize, deserialize) {
    return function(...args) {
      return fn.call(this, path2, serialize, deserialize, ...args);
    };
  }
  function isProtobufTypeDefinition(obj) {
    return "format" in obj;
  }
  function loadPackageDefinition(packageDef) {
    const result = {};
    for (const serviceFqn in packageDef) {
      if (Object.prototype.hasOwnProperty.call(packageDef, serviceFqn)) {
        const service2 = packageDef[serviceFqn];
        const nameComponents = serviceFqn.split(".");
        if (nameComponents.some((comp) => isPrototypePolluted(comp))) {
          continue;
        }
        const serviceName = nameComponents[nameComponents.length - 1];
        let current = result;
        for (const packageName of nameComponents.slice(0, -1)) {
          if (!current[packageName]) {
            current[packageName] = {};
          }
          current = current[packageName];
        }
        if (isProtobufTypeDefinition(service2)) {
          current[serviceName] = service2;
        } else {
          current[serviceName] = makeClientConstructor(service2, serviceName);
        }
      }
    }
    return result;
  }
  makeClient.loadPackageDefinition = loadPackageDefinition;
  return makeClient;
}
var src$1 = {};
var lodash_camelcase;
var hasRequiredLodash_camelcase;
function requireLodash_camelcase() {
  if (hasRequiredLodash_camelcase) return lodash_camelcase;
  hasRequiredLodash_camelcase = 1;
  var INFINITY = 1 / 0;
  var symbolTag = "[object Symbol]";
  var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
  var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
  var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23", rsComboSymbolsRange = "\\u20d0-\\u20f0", rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
  var rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
  var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")", rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
  var reApos = RegExp(rsApos, "g");
  var reComboMark = RegExp(rsCombo, "g");
  var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
  var reUnicodeWord = RegExp([
    rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
    rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
    rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
    rsUpper + "+" + rsOptUpperContr,
    rsDigits,
    rsEmoji
  ].join("|"), "g");
  var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
  var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
  var deburredLetters = {
    // Latin-1 Supplement block.
    "À": "A",
    "Á": "A",
    "Â": "A",
    "Ã": "A",
    "Ä": "A",
    "Å": "A",
    "à": "a",
    "á": "a",
    "â": "a",
    "ã": "a",
    "ä": "a",
    "å": "a",
    "Ç": "C",
    "ç": "c",
    "Ð": "D",
    "ð": "d",
    "È": "E",
    "É": "E",
    "Ê": "E",
    "Ë": "E",
    "è": "e",
    "é": "e",
    "ê": "e",
    "ë": "e",
    "Ì": "I",
    "Í": "I",
    "Î": "I",
    "Ï": "I",
    "ì": "i",
    "í": "i",
    "î": "i",
    "ï": "i",
    "Ñ": "N",
    "ñ": "n",
    "Ò": "O",
    "Ó": "O",
    "Ô": "O",
    "Õ": "O",
    "Ö": "O",
    "Ø": "O",
    "ò": "o",
    "ó": "o",
    "ô": "o",
    "õ": "o",
    "ö": "o",
    "ø": "o",
    "Ù": "U",
    "Ú": "U",
    "Û": "U",
    "Ü": "U",
    "ù": "u",
    "ú": "u",
    "û": "u",
    "ü": "u",
    "Ý": "Y",
    "ý": "y",
    "ÿ": "y",
    "Æ": "Ae",
    "æ": "ae",
    "Þ": "Th",
    "þ": "th",
    "ß": "ss",
    // Latin Extended-A block.
    "Ā": "A",
    "Ă": "A",
    "Ą": "A",
    "ā": "a",
    "ă": "a",
    "ą": "a",
    "Ć": "C",
    "Ĉ": "C",
    "Ċ": "C",
    "Č": "C",
    "ć": "c",
    "ĉ": "c",
    "ċ": "c",
    "č": "c",
    "Ď": "D",
    "Đ": "D",
    "ď": "d",
    "đ": "d",
    "Ē": "E",
    "Ĕ": "E",
    "Ė": "E",
    "Ę": "E",
    "Ě": "E",
    "ē": "e",
    "ĕ": "e",
    "ė": "e",
    "ę": "e",
    "ě": "e",
    "Ĝ": "G",
    "Ğ": "G",
    "Ġ": "G",
    "Ģ": "G",
    "ĝ": "g",
    "ğ": "g",
    "ġ": "g",
    "ģ": "g",
    "Ĥ": "H",
    "Ħ": "H",
    "ĥ": "h",
    "ħ": "h",
    "Ĩ": "I",
    "Ī": "I",
    "Ĭ": "I",
    "Į": "I",
    "İ": "I",
    "ĩ": "i",
    "ī": "i",
    "ĭ": "i",
    "į": "i",
    "ı": "i",
    "Ĵ": "J",
    "ĵ": "j",
    "Ķ": "K",
    "ķ": "k",
    "ĸ": "k",
    "Ĺ": "L",
    "Ļ": "L",
    "Ľ": "L",
    "Ŀ": "L",
    "Ł": "L",
    "ĺ": "l",
    "ļ": "l",
    "ľ": "l",
    "ŀ": "l",
    "ł": "l",
    "Ń": "N",
    "Ņ": "N",
    "Ň": "N",
    "Ŋ": "N",
    "ń": "n",
    "ņ": "n",
    "ň": "n",
    "ŋ": "n",
    "Ō": "O",
    "Ŏ": "O",
    "Ő": "O",
    "ō": "o",
    "ŏ": "o",
    "ő": "o",
    "Ŕ": "R",
    "Ŗ": "R",
    "Ř": "R",
    "ŕ": "r",
    "ŗ": "r",
    "ř": "r",
    "Ś": "S",
    "Ŝ": "S",
    "Ş": "S",
    "Š": "S",
    "ś": "s",
    "ŝ": "s",
    "ş": "s",
    "š": "s",
    "Ţ": "T",
    "Ť": "T",
    "Ŧ": "T",
    "ţ": "t",
    "ť": "t",
    "ŧ": "t",
    "Ũ": "U",
    "Ū": "U",
    "Ŭ": "U",
    "Ů": "U",
    "Ű": "U",
    "Ų": "U",
    "ũ": "u",
    "ū": "u",
    "ŭ": "u",
    "ů": "u",
    "ű": "u",
    "ų": "u",
    "Ŵ": "W",
    "ŵ": "w",
    "Ŷ": "Y",
    "ŷ": "y",
    "Ÿ": "Y",
    "Ź": "Z",
    "Ż": "Z",
    "Ž": "Z",
    "ź": "z",
    "ż": "z",
    "ž": "z",
    "Ĳ": "IJ",
    "ĳ": "ij",
    "Œ": "Oe",
    "œ": "oe",
    "ŉ": "'n",
    "ſ": "ss"
  };
  var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root2 = freeGlobal || freeSelf || Function("return this")();
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1, length = array ? array.length : 0;
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }
  function asciiToArray(string) {
    return string.split("");
  }
  function asciiWords(string) {
    return string.match(reAsciiWord) || [];
  }
  function basePropertyOf(object2) {
    return function(key) {
      return object2 == null ? void 0 : object2[key];
    };
  }
  var deburrLetter = basePropertyOf(deburredLetters);
  function hasUnicode(string) {
    return reHasUnicode.test(string);
  }
  function hasUnicodeWord(string) {
    return reHasUnicodeWord.test(string);
  }
  function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
  }
  function unicodeToArray(string) {
    return string.match(reUnicode) || [];
  }
  function unicodeWords(string) {
    return string.match(reUnicodeWord) || [];
  }
  var objectProto = Object.prototype;
  var objectToString = objectProto.toString;
  var Symbol2 = root2.Symbol;
  var symbolProto = Symbol2 ? Symbol2.prototype : void 0, symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  function castSlice(array, start, end) {
    var length = array.length;
    end = end === void 0 ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
  }
  function createCaseFirst(methodName) {
    return function(string) {
      string = toString(string);
      var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
      var chr = strSymbols ? strSymbols[0] : string.charAt(0);
      var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
      return chr[methodName]() + trailing;
    };
  }
  function createCompounder(callback) {
    return function(string) {
      return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
    };
  }
  function isObjectLike(value) {
    return !!value && typeof value == "object";
  }
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  function toString(value) {
    return value == null ? "" : baseToString(value);
  }
  var camelCase = createCompounder(function(result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize(word) : word);
  });
  function capitalize(string) {
    return upperFirst(toString(string).toLowerCase());
  }
  function deburr(string) {
    string = toString(string);
    return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
  }
  var upperFirst = createCaseFirst("toUpperCase");
  function words(string, pattern, guard) {
    string = toString(string);
    pattern = pattern;
    if (pattern === void 0) {
      return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
    }
    return string.match(pattern) || [];
  }
  lodash_camelcase = camelCase;
  return lodash_camelcase;
}
var src = { exports: {} };
var indexLight = { exports: {} };
var indexMinimal = {};
var minimal = {};
var aspromise;
var hasRequiredAspromise;
function requireAspromise() {
  if (hasRequiredAspromise) return aspromise;
  hasRequiredAspromise = 1;
  aspromise = asPromise;
  function asPromise(fn, ctx) {
    var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
    while (index < arguments.length)
      params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
      params[offset] = function callback(err) {
        if (pending) {
          pending = false;
          if (err)
            reject(err);
          else {
            var params2 = new Array(arguments.length - 1), offset2 = 0;
            while (offset2 < params2.length)
              params2[offset2++] = arguments[offset2];
            resolve.apply(null, params2);
          }
        }
      };
      try {
        fn.apply(ctx || null, params);
      } catch (err) {
        if (pending) {
          pending = false;
          reject(err);
        }
      }
    });
  }
  return aspromise;
}
var base64 = {};
var hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return base64;
  hasRequiredBase64 = 1;
  (function(exports) {
    var base642 = exports;
    base642.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (var i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    base642.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base642.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === void 0)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base642.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  })(base64);
  return base64;
}
var eventemitter;
var hasRequiredEventemitter;
function requireEventemitter() {
  if (hasRequiredEventemitter) return eventemitter;
  hasRequiredEventemitter = 1;
  eventemitter = EventEmitter;
  function EventEmitter() {
    this._listeners = {};
  }
  EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
      fn,
      ctx: ctx || this
    });
    return this;
  };
  EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === void 0)
      this._listeners = {};
    else {
      if (fn === void 0)
        this._listeners[evt] = [];
      else {
        var listeners = this._listeners[evt];
        for (var i = 0; i < listeners.length; )
          if (listeners[i].fn === fn)
            listeners.splice(i, 1);
          else
            ++i;
      }
    }
    return this;
  };
  EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
      var args = [], i = 1;
      for (; i < arguments.length; )
        args.push(arguments[i++]);
      for (i = 0; i < listeners.length; )
        listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
  };
  return eventemitter;
}
var float;
var hasRequiredFloat;
function requireFloat() {
  if (hasRequiredFloat) return float;
  hasRequiredFloat = 1;
  float = factory(factory);
  function factory(exports) {
    if (typeof Float32Array !== "undefined") (function() {
      var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
      function writeFloat_f32_cpy(val, buf, pos) {
        f32[0] = val;
        buf[pos] = f8b[0];
        buf[pos + 1] = f8b[1];
        buf[pos + 2] = f8b[2];
        buf[pos + 3] = f8b[3];
      }
      function writeFloat_f32_rev(val, buf, pos) {
        f32[0] = val;
        buf[pos] = f8b[3];
        buf[pos + 1] = f8b[2];
        buf[pos + 2] = f8b[1];
        buf[pos + 3] = f8b[0];
      }
      exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
      exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
      function readFloat_f32_cpy(buf, pos) {
        f8b[0] = buf[pos];
        f8b[1] = buf[pos + 1];
        f8b[2] = buf[pos + 2];
        f8b[3] = buf[pos + 3];
        return f32[0];
      }
      function readFloat_f32_rev(buf, pos) {
        f8b[3] = buf[pos];
        f8b[2] = buf[pos + 1];
        f8b[1] = buf[pos + 2];
        f8b[0] = buf[pos + 3];
        return f32[0];
      }
      exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
      exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
    })();
    else (function() {
      function writeFloat_ieee754(writeUint, val, buf, pos) {
        var sign = val < 0 ? 1 : 0;
        if (sign)
          val = -val;
        if (val === 0)
          writeUint(1 / val > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), buf, pos);
        else if (isNaN(val))
          writeUint(2143289344, buf, pos);
        else if (val > 34028234663852886e22)
          writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
        else if (val < 11754943508222875e-54)
          writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
        else {
          var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
          writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
        }
      }
      exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
      exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
      function readFloat_ieee754(readUint, buf, pos) {
        var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
        return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
      }
      exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
      exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
    })();
    if (typeof Float64Array !== "undefined") (function() {
      var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
      function writeDouble_f64_cpy(val, buf, pos) {
        f64[0] = val;
        buf[pos] = f8b[0];
        buf[pos + 1] = f8b[1];
        buf[pos + 2] = f8b[2];
        buf[pos + 3] = f8b[3];
        buf[pos + 4] = f8b[4];
        buf[pos + 5] = f8b[5];
        buf[pos + 6] = f8b[6];
        buf[pos + 7] = f8b[7];
      }
      function writeDouble_f64_rev(val, buf, pos) {
        f64[0] = val;
        buf[pos] = f8b[7];
        buf[pos + 1] = f8b[6];
        buf[pos + 2] = f8b[5];
        buf[pos + 3] = f8b[4];
        buf[pos + 4] = f8b[3];
        buf[pos + 5] = f8b[2];
        buf[pos + 6] = f8b[1];
        buf[pos + 7] = f8b[0];
      }
      exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
      exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
      function readDouble_f64_cpy(buf, pos) {
        f8b[0] = buf[pos];
        f8b[1] = buf[pos + 1];
        f8b[2] = buf[pos + 2];
        f8b[3] = buf[pos + 3];
        f8b[4] = buf[pos + 4];
        f8b[5] = buf[pos + 5];
        f8b[6] = buf[pos + 6];
        f8b[7] = buf[pos + 7];
        return f64[0];
      }
      function readDouble_f64_rev(buf, pos) {
        f8b[7] = buf[pos];
        f8b[6] = buf[pos + 1];
        f8b[5] = buf[pos + 2];
        f8b[4] = buf[pos + 3];
        f8b[3] = buf[pos + 4];
        f8b[2] = buf[pos + 5];
        f8b[1] = buf[pos + 6];
        f8b[0] = buf[pos + 7];
        return f64[0];
      }
      exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
      exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
    })();
    else (function() {
      function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
        var sign = val < 0 ? 1 : 0;
        if (sign)
          val = -val;
        if (val === 0) {
          writeUint(0, buf, pos + off0);
          writeUint(1 / val > 0 ? (
            /* positive */
            0
          ) : (
            /* negative 0 */
            2147483648
          ), buf, pos + off1);
        } else if (isNaN(val)) {
          writeUint(0, buf, pos + off0);
          writeUint(2146959360, buf, pos + off1);
        } else if (val > 17976931348623157e292) {
          writeUint(0, buf, pos + off0);
          writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
        } else {
          var mantissa;
          if (val < 22250738585072014e-324) {
            mantissa = val / 5e-324;
            writeUint(mantissa >>> 0, buf, pos + off0);
            writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
          } else {
            var exponent = Math.floor(Math.log(val) / Math.LN2);
            if (exponent === 1024)
              exponent = 1023;
            mantissa = val * Math.pow(2, -exponent);
            writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
            writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
          }
        }
      }
      exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
      exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
      function readDouble_ieee754(readUint, off0, off1, buf, pos) {
        var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
        var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
        return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
      }
      exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
      exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
    })();
    return exports;
  }
  function writeUintLE(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  }
  function writeUintBE(val, buf, pos) {
    buf[pos] = val >>> 24;
    buf[pos + 1] = val >>> 16 & 255;
    buf[pos + 2] = val >>> 8 & 255;
    buf[pos + 3] = val & 255;
  }
  function readUintLE(buf, pos) {
    return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
  }
  function readUintBE(buf, pos) {
    return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
  }
  return float;
}
var inquire_1;
var hasRequiredInquire;
function requireInquire() {
  if (hasRequiredInquire) return inquire_1;
  hasRequiredInquire = 1;
  inquire_1 = inquire;
  function inquire(moduleName) {
    try {
      var mod = eval("quire".replace(/^/, "re"))(moduleName);
      if (mod && (mod.length || Object.keys(mod).length))
        return mod;
    } catch (e) {
    }
    return null;
  }
  return inquire_1;
}
var utf8 = {};
var hasRequiredUtf8;
function requireUtf8() {
  if (hasRequiredUtf8) return utf8;
  hasRequiredUtf8 = 1;
  (function(exports) {
    var utf82 = exports;
    utf82.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf82.read = function utf8_read(buffer, start, end) {
      var len = end - start;
      if (len < 1)
        return "";
      var parts = null, chunk = [], i = 0, t;
      while (start < end) {
        t = buffer[start++];
        if (t < 128)
          chunk[i++] = t;
        else if (t > 191 && t < 224)
          chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
          t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 65536;
          chunk[i++] = 55296 + (t >> 10);
          chunk[i++] = 56320 + (t & 1023);
        } else
          chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i = 0;
        }
      }
      if (parts) {
        if (i)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i));
    };
    utf82.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  })(utf8);
  return utf8;
}
var pool_1;
var hasRequiredPool;
function requirePool() {
  if (hasRequiredPool) return pool_1;
  hasRequiredPool = 1;
  pool_1 = pool;
  function pool(alloc, slice, size) {
    var SIZE = size || 8192;
    var MAX = SIZE >>> 1;
    var slab = null;
    var offset = SIZE;
    return function pool_alloc(size2) {
      if (size2 < 1 || size2 > MAX)
        return alloc(size2);
      if (offset + size2 > SIZE) {
        slab = alloc(SIZE);
        offset = 0;
      }
      var buf = slice.call(slab, offset, offset += size2);
      if (offset & 7)
        offset = (offset | 7) + 1;
      return buf;
    };
  }
  return pool_1;
}
var longbits;
var hasRequiredLongbits;
function requireLongbits() {
  if (hasRequiredLongbits) return longbits;
  hasRequiredLongbits = 1;
  longbits = LongBits;
  var util2 = requireMinimal();
  function LongBits(lo, hi) {
    this.lo = lo >>> 0;
    this.hi = hi >>> 0;
  }
  var zero = LongBits.zero = new LongBits(0, 0);
  zero.toNumber = function() {
    return 0;
  };
  zero.zzEncode = zero.zzDecode = function() {
    return this;
  };
  zero.length = function() {
    return 1;
  };
  var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
  LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
      return zero;
    var sign = value < 0;
    if (sign)
      value = -value;
    var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
      hi = ~hi >>> 0;
      lo = ~lo >>> 0;
      if (++lo > 4294967295) {
        lo = 0;
        if (++hi > 4294967295)
          hi = 0;
      }
    }
    return new LongBits(lo, hi);
  };
  LongBits.from = function from(value) {
    if (typeof value === "number")
      return LongBits.fromNumber(value);
    if (util2.isString(value)) {
      if (util2.Long)
        value = util2.Long.fromString(value);
      else
        return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
  };
  LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
      var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
      if (!lo)
        hi = hi + 1 >>> 0;
      return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
  };
  LongBits.prototype.toLong = function toLong(unsigned) {
    return util2.Long ? new util2.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
  };
  var charCodeAt = String.prototype.charCodeAt;
  LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
      return zero;
    return new LongBits(
      (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
      (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
    );
  };
  LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
      this.lo & 255,
      this.lo >>> 8 & 255,
      this.lo >>> 16 & 255,
      this.lo >>> 24,
      this.hi & 255,
      this.hi >>> 8 & 255,
      this.hi >>> 16 & 255,
      this.hi >>> 24
    );
  };
  LongBits.prototype.zzEncode = function zzEncode() {
    var mask = this.hi >> 31;
    this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo = (this.lo << 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi = (this.hi >>> 1 ^ mask) >>> 0;
    return this;
  };
  LongBits.prototype.length = function length() {
    var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
    return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
  };
  return longbits;
}
var hasRequiredMinimal;
function requireMinimal() {
  if (hasRequiredMinimal) return minimal;
  hasRequiredMinimal = 1;
  (function(exports) {
    var util2 = exports;
    util2.asPromise = requireAspromise();
    util2.base64 = requireBase64();
    util2.EventEmitter = requireEventemitter();
    util2.float = requireFloat();
    util2.inquire = requireInquire();
    util2.utf8 = requireUtf8();
    util2.pool = requirePool();
    util2.LongBits = requireLongbits();
    util2.isNode = Boolean(typeof commonjsGlobal !== "undefined" && commonjsGlobal && commonjsGlobal.process && commonjsGlobal.process.versions && commonjsGlobal.process.versions.node);
    util2.global = util2.isNode && commonjsGlobal || typeof window !== "undefined" && window || typeof self !== "undefined" && self || commonjsGlobal;
    util2.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    );
    util2.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    );
    util2.isInteger = Number.isInteger || /* istanbul ignore next */
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util2.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util2.isObject = function isObject(value) {
      return value && typeof value === "object";
    };
    util2.isset = /**
     * Checks if a property on a message is considered to be present.
     * @param {Object} obj Plain object or message instance
     * @param {string} prop Property name
     * @returns {boolean} `true` if considered to be present, otherwise `false`
     */
    util2.isSet = function isSet2(obj, prop) {
      var value = obj[prop];
      if (value != null && obj.hasOwnProperty(prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util2.Buffer = function() {
      try {
        var Buffer2 = util2.inquire("buffer").Buffer;
        return Buffer2.prototype.utf8Write ? Buffer2 : (
          /* istanbul ignore next */
          null
        );
      } catch (e) {
        return null;
      }
    }();
    util2._Buffer_from = null;
    util2._Buffer_allocUnsafe = null;
    util2.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util2.Buffer ? util2._Buffer_allocUnsafe(sizeOrArray) : new util2.Array(sizeOrArray) : util2.Buffer ? util2._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util2.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util2.Long = /* istanbul ignore next */
    util2.global.dcodeIO && /* istanbul ignore next */
    util2.global.dcodeIO.Long || /* istanbul ignore next */
    util2.global.Long || util2.inquire("long");
    util2.key2Re = /^true|false|0|1$/;
    util2.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util2.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util2.longToHash = function longToHash(value) {
      return value ? util2.LongBits.from(value).toHash() : util2.LongBits.zeroHash;
    };
    util2.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util2.LongBits.fromHash(hash);
      if (util2.Long)
        return util2.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge(dst, src2, ifNotSet) {
      for (var keys = Object.keys(src2), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === void 0 || !ifNotSet)
          dst[keys[i]] = src2[keys[i]];
      return dst;
    }
    util2.merge = merge;
    util2.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name2) {
      function CustomError(message2, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message2, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message2;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge(this, properties);
      }
      CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          enumerable: false,
          configurable: true
        },
        name: {
          get: function get() {
            return name2;
          },
          set: void 0,
          enumerable: false,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: true
        },
        toString: {
          value: function value() {
            return this.name + ": " + this.message;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      return CustomError;
    }
    util2.newError = newError;
    util2.ProtocolError = newError("ProtocolError");
    util2.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== void 0 && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util2.oneOfSetter = function setOneOf(fieldNames) {
      return function(name2) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name2)
            delete this[fieldNames[i]];
      };
    };
    util2.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util2._configure = function() {
      var Buffer2 = util2.Buffer;
      if (!Buffer2) {
        util2._Buffer_from = util2._Buffer_allocUnsafe = null;
        return;
      }
      util2._Buffer_from = Buffer2.from !== Uint8Array.from && Buffer2.from || /* istanbul ignore next */
      function Buffer_from(value, encoding) {
        return new Buffer2(value, encoding);
      };
      util2._Buffer_allocUnsafe = Buffer2.allocUnsafe || /* istanbul ignore next */
      function Buffer_allocUnsafe(size) {
        return new Buffer2(size);
      };
    };
  })(minimal);
  return minimal;
}
var writer;
var hasRequiredWriter;
function requireWriter() {
  if (hasRequiredWriter) return writer;
  hasRequiredWriter = 1;
  writer = Writer;
  var util2 = requireMinimal();
  var BufferWriter;
  var LongBits = util2.LongBits, base642 = util2.base64, utf82 = util2.utf8;
  function Op(fn, len, val) {
    this.fn = fn;
    this.len = len;
    this.next = void 0;
    this.val = val;
  }
  function noop2() {
  }
  function State(writer2) {
    this.head = writer2.head;
    this.tail = writer2.tail;
    this.len = writer2.len;
    this.next = writer2.states;
  }
  function Writer() {
    this.len = 0;
    this.head = new Op(noop2, 0, 0);
    this.tail = this.head;
    this.states = null;
  }
  var create = function create2() {
    return util2.Buffer ? function create_buffer_setup() {
      return (Writer.create = function create_buffer() {
        return new BufferWriter();
      })();
    } : function create_array() {
      return new Writer();
    };
  };
  Writer.create = create();
  Writer.alloc = function alloc(size) {
    return new util2.Array(size);
  };
  if (util2.Array !== Array)
    Writer.alloc = util2.pool(Writer.alloc, util2.Array.prototype.subarray);
  Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
  };
  function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
  }
  function writeVarint32(val, buf, pos) {
    while (val > 127) {
      buf[pos++] = val & 127 | 128;
      val >>>= 7;
    }
    buf[pos] = val;
  }
  function VarintOp(len, val) {
    this.len = len;
    this.next = void 0;
    this.val = val;
  }
  VarintOp.prototype = Object.create(Op.prototype);
  VarintOp.prototype.fn = writeVarint32;
  Writer.prototype.uint32 = function write_uint32(value) {
    this.len += (this.tail = this.tail.next = new VarintOp(
      (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
      value
    )).len;
    return this;
  };
  Writer.prototype.int32 = function write_int32(value) {
    return value < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
  };
  Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
  };
  function writeVarint64(val, buf, pos) {
    while (val.hi) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
      val.hi >>>= 7;
    }
    while (val.lo > 127) {
      buf[pos++] = val.lo & 127 | 128;
      val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
  }
  Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.int64 = Writer.prototype.uint64;
  Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
  };
  Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
  };
  function writeFixed32(val, buf, pos) {
    buf[pos] = val & 255;
    buf[pos + 1] = val >>> 8 & 255;
    buf[pos + 2] = val >>> 16 & 255;
    buf[pos + 3] = val >>> 24;
  }
  Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
  };
  Writer.prototype.sfixed32 = Writer.prototype.fixed32;
  Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
  };
  Writer.prototype.sfixed64 = Writer.prototype.fixed64;
  Writer.prototype.float = function write_float(value) {
    return this._push(util2.float.writeFloatLE, 4, value);
  };
  Writer.prototype.double = function write_double(value) {
    return this._push(util2.float.writeDoubleLE, 8, value);
  };
  var writeBytes = util2.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
    buf.set(val, pos);
  } : function writeBytes_for(val, buf, pos) {
    for (var i = 0; i < val.length; ++i)
      buf[pos + i] = val[i];
  };
  Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
      return this._push(writeByte, 1, 0);
    if (util2.isString(value)) {
      var buf = Writer.alloc(len = base642.length(value));
      base642.decode(value, buf, 0);
      value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
  };
  Writer.prototype.string = function write_string(value) {
    var len = utf82.length(value);
    return len ? this.uint32(len)._push(utf82.write, len, value) : this._push(writeByte, 1, 0);
  };
  Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop2, 0, 0);
    this.len = 0;
    return this;
  };
  Writer.prototype.reset = function reset() {
    if (this.states) {
      this.head = this.states.head;
      this.tail = this.states.tail;
      this.len = this.states.len;
      this.states = this.states.next;
    } else {
      this.head = this.tail = new Op(noop2, 0, 0);
      this.len = 0;
    }
    return this;
  };
  Writer.prototype.ldelim = function ldelim() {
    var head = this.head, tail = this.tail, len = this.len;
    this.reset().uint32(len);
    if (len) {
      this.tail.next = head.next;
      this.tail = tail;
      this.len += len;
    }
    return this;
  };
  Writer.prototype.finish = function finish() {
    var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
    while (head) {
      head.fn(head.val, buf, pos);
      pos += head.len;
      head = head.next;
    }
    return buf;
  };
  Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
  };
  return writer;
}
var writer_buffer;
var hasRequiredWriter_buffer;
function requireWriter_buffer() {
  if (hasRequiredWriter_buffer) return writer_buffer;
  hasRequiredWriter_buffer = 1;
  writer_buffer = BufferWriter;
  var Writer = requireWriter();
  (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
  var util2 = requireMinimal();
  function BufferWriter() {
    Writer.call(this);
  }
  BufferWriter._configure = function() {
    BufferWriter.alloc = util2._Buffer_allocUnsafe;
    BufferWriter.writeBytesBuffer = util2.Buffer && util2.Buffer.prototype instanceof Uint8Array && util2.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytesBuffer_copy(val, buf, pos) {
      if (val.copy)
        val.copy(buf, pos, 0, val.length);
      else for (var i = 0; i < val.length; )
        buf[pos++] = val[i++];
    };
  };
  BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util2.isString(value))
      value = util2._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
      this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
  };
  function writeStringBuffer(val, buf, pos) {
    if (val.length < 40)
      util2.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
      buf.utf8Write(val, pos);
    else
      buf.write(val, pos);
  }
  BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util2.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
      this._push(writeStringBuffer, len, value);
    return this;
  };
  BufferWriter._configure();
  return writer_buffer;
}
var reader;
var hasRequiredReader;
function requireReader() {
  if (hasRequiredReader) return reader;
  hasRequiredReader = 1;
  reader = Reader;
  var util2 = requireMinimal();
  var BufferReader;
  var LongBits = util2.LongBits, utf82 = util2.utf8;
  function indexOutOfRange(reader2, writeLength) {
    return RangeError("index out of range: " + reader2.pos + " + " + (writeLength || 1) + " > " + reader2.len);
  }
  function Reader(buffer) {
    this.buf = buffer;
    this.pos = 0;
    this.len = buffer.length;
  }
  var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
    if (buffer instanceof Uint8Array || Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  } : function create_array2(buffer) {
    if (Array.isArray(buffer))
      return new Reader(buffer);
    throw Error("illegal buffer");
  };
  var create = function create2() {
    return util2.Buffer ? function create_buffer_setup(buffer) {
      return (Reader.create = function create_buffer(buffer2) {
        return util2.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
      })(buffer);
    } : create_array;
  };
  Reader.create = create();
  Reader.prototype._slice = util2.Array.prototype.subarray || /* istanbul ignore next */
  util2.Array.prototype.slice;
  Reader.prototype.uint32 = /* @__PURE__ */ function read_uint32_setup() {
    var value = 4294967295;
    return function read_uint32() {
      value = (this.buf[this.pos] & 127) >>> 0;
      if (this.buf[this.pos++] < 128) return value;
      value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
      if (this.buf[this.pos++] < 128) return value;
      value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
      if (this.buf[this.pos++] < 128) return value;
      value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
      if (this.buf[this.pos++] < 128) return value;
      value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
      if (this.buf[this.pos++] < 128) return value;
      if ((this.pos += 5) > this.len) {
        this.pos = this.len;
        throw indexOutOfRange(this, 10);
      }
      return value;
    };
  }();
  Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
  };
  Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
  };
  function readLongVarint() {
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) {
      for (; i < 4; ++i) {
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
      bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
      if (this.buf[this.pos++] < 128)
        return bits;
      i = 0;
    } else {
      for (; i < 3; ++i) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
      bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
      return bits;
    }
    if (this.len - this.pos > 4) {
      for (; i < 5; ++i) {
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    } else {
      for (; i < 5; ++i) {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
      }
    }
    throw Error("invalid varint encoding");
  }
  Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
  };
  function readFixed32_end(buf, end) {
    return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
  }
  Reader.prototype.fixed32 = function read_fixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4);
  };
  Reader.prototype.sfixed32 = function read_sfixed32() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    return readFixed32_end(this.buf, this.pos += 4) | 0;
  };
  function readFixed64() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 8);
    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
  }
  Reader.prototype.float = function read_float() {
    if (this.pos + 4 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util2.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
  };
  Reader.prototype.double = function read_double() {
    if (this.pos + 8 > this.len)
      throw indexOutOfRange(this, 4);
    var value = util2.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
  };
  Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(), start = this.pos, end = this.pos + length;
    if (end > this.len)
      throw indexOutOfRange(this, length);
    this.pos += length;
    if (Array.isArray(this.buf))
      return this.buf.slice(start, end);
    if (start === end) {
      var nativeBuffer = util2.Buffer;
      return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
    }
    return this._slice.call(this.buf, start, end);
  };
  Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf82.read(bytes, 0, bytes.length);
  };
  Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
      if (this.pos + length > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
    } else {
      do {
        if (this.pos >= this.len)
          throw indexOutOfRange(this);
      } while (this.buf[this.pos++] & 128);
    }
    return this;
  };
  Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
      case 0:
        this.skip();
        break;
      case 1:
        this.skip(8);
        break;
      case 2:
        this.skip(this.uint32());
        break;
      case 3:
        while ((wireType = this.uint32() & 7) !== 4) {
          this.skipType(wireType);
        }
        break;
      case 5:
        this.skip(4);
        break;
      default:
        throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
  };
  Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();
    var fn = util2.Long ? "toLong" : (
      /* istanbul ignore next */
      "toNumber"
    );
    util2.merge(Reader.prototype, {
      int64: function read_int64() {
        return readLongVarint.call(this)[fn](false);
      },
      uint64: function read_uint64() {
        return readLongVarint.call(this)[fn](true);
      },
      sint64: function read_sint64() {
        return readLongVarint.call(this).zzDecode()[fn](false);
      },
      fixed64: function read_fixed64() {
        return readFixed64.call(this)[fn](true);
      },
      sfixed64: function read_sfixed64() {
        return readFixed64.call(this)[fn](false);
      }
    });
  };
  return reader;
}
var reader_buffer;
var hasRequiredReader_buffer;
function requireReader_buffer() {
  if (hasRequiredReader_buffer) return reader_buffer;
  hasRequiredReader_buffer = 1;
  reader_buffer = BufferReader;
  var Reader = requireReader();
  (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
  var util2 = requireMinimal();
  function BufferReader(buffer) {
    Reader.call(this, buffer);
  }
  BufferReader._configure = function() {
    if (util2.Buffer)
      BufferReader.prototype._slice = util2.Buffer.prototype.slice;
  };
  BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32();
    return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
  };
  BufferReader._configure();
  return reader_buffer;
}
var rpc = {};
var service$1;
var hasRequiredService$1;
function requireService$1() {
  if (hasRequiredService$1) return service$1;
  hasRequiredService$1 = 1;
  service$1 = Service;
  var util2 = requireMinimal();
  (Service.prototype = Object.create(util2.EventEmitter.prototype)).constructor = Service;
  function Service(rpcImpl, requestDelimited, responseDelimited) {
    if (typeof rpcImpl !== "function")
      throw TypeError("rpcImpl must be a function");
    util2.EventEmitter.call(this);
    this.rpcImpl = rpcImpl;
    this.requestDelimited = Boolean(requestDelimited);
    this.responseDelimited = Boolean(responseDelimited);
  }
  Service.prototype.rpcCall = function rpcCall(method2, requestCtor, responseCtor, request, callback) {
    if (!request)
      throw TypeError("request must be specified");
    var self2 = this;
    if (!callback)
      return util2.asPromise(rpcCall, self2, method2, requestCtor, responseCtor, request);
    if (!self2.rpcImpl) {
      setTimeout(function() {
        callback(Error("already ended"));
      }, 0);
      return void 0;
    }
    try {
      return self2.rpcImpl(
        method2,
        requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
        function rpcCallback(err, response) {
          if (err) {
            self2.emit("error", err, method2);
            return callback(err);
          }
          if (response === null) {
            self2.end(
              /* endedByRPC */
              true
            );
            return void 0;
          }
          if (!(response instanceof responseCtor)) {
            try {
              response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
            } catch (err2) {
              self2.emit("error", err2, method2);
              return callback(err2);
            }
          }
          self2.emit("data", response, method2);
          return callback(null, response);
        }
      );
    } catch (err) {
      self2.emit("error", err, method2);
      setTimeout(function() {
        callback(err);
      }, 0);
      return void 0;
    }
  };
  Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
      if (!endedByRPC)
        this.rpcImpl(null, null, null);
      this.rpcImpl = null;
      this.emit("end").off();
    }
    return this;
  };
  return service$1;
}
var hasRequiredRpc;
function requireRpc() {
  if (hasRequiredRpc) return rpc;
  hasRequiredRpc = 1;
  (function(exports) {
    var rpc2 = exports;
    rpc2.Service = requireService$1();
  })(rpc);
  return rpc;
}
var roots;
var hasRequiredRoots;
function requireRoots() {
  if (hasRequiredRoots) return roots;
  hasRequiredRoots = 1;
  roots = {};
  return roots;
}
var hasRequiredIndexMinimal;
function requireIndexMinimal() {
  if (hasRequiredIndexMinimal) return indexMinimal;
  hasRequiredIndexMinimal = 1;
  (function(exports) {
    var protobuf = exports;
    protobuf.build = "minimal";
    protobuf.Writer = requireWriter();
    protobuf.BufferWriter = requireWriter_buffer();
    protobuf.Reader = requireReader();
    protobuf.BufferReader = requireReader_buffer();
    protobuf.util = requireMinimal();
    protobuf.rpc = requireRpc();
    protobuf.roots = requireRoots();
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  })(indexMinimal);
  return indexMinimal;
}
var util$2 = { exports: {} };
var codegen_1;
var hasRequiredCodegen;
function requireCodegen() {
  if (hasRequiredCodegen) return codegen_1;
  hasRequiredCodegen = 1;
  codegen_1 = codegen;
  function codegen(functionParams, functionName) {
    if (typeof functionParams === "string") {
      functionName = functionParams;
      functionParams = void 0;
    }
    var body = [];
    function Codegen(formatStringOrScope) {
      if (typeof formatStringOrScope !== "string") {
        var source = toString();
        if (codegen.verbose)
          console.log("codegen: " + source);
        source = "return " + source;
        if (formatStringOrScope) {
          var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
          while (scopeOffset < scopeKeys.length) {
            scopeParams[scopeOffset] = scopeKeys[scopeOffset];
            scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
          }
          scopeParams[scopeOffset] = source;
          return Function.apply(null, scopeParams).apply(null, scopeValues);
        }
        return Function(source)();
      }
      var formatParams = new Array(arguments.length - 1), formatOffset = 0;
      while (formatOffset < formatParams.length)
        formatParams[formatOffset] = arguments[++formatOffset];
      formatOffset = 0;
      formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
        var value = formatParams[formatOffset++];
        switch ($1) {
          case "d":
          case "f":
            return String(Number(value));
          case "i":
            return String(Math.floor(value));
          case "j":
            return JSON.stringify(value);
          case "s":
            return String(value);
        }
        return "%";
      });
      if (formatOffset !== formatParams.length)
        throw Error("parameter count mismatch");
      body.push(formatStringOrScope);
      return Codegen;
    }
    function toString(functionNameOverride) {
      return "function " + (functionNameOverride || functionName || "") + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
    }
    Codegen.toString = toString;
    return Codegen;
  }
  codegen.verbose = false;
  return codegen_1;
}
var fetch_1;
var hasRequiredFetch;
function requireFetch() {
  if (hasRequiredFetch) return fetch_1;
  hasRequiredFetch = 1;
  fetch_1 = fetch;
  var asPromise = requireAspromise(), inquire2 = requireInquire();
  var fs2 = inquire2("fs");
  function fetch(filename, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = {};
    } else if (!options)
      options = {};
    if (!callback)
      return asPromise(fetch, this, filename, options);
    if (!options.xhr && fs2 && fs2.readFile)
      return fs2.readFile(filename, function fetchReadFileCallback(err, contents) {
        return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
      });
    return fetch.xhr(filename, options, callback);
  }
  fetch.xhr = function fetch_xhr(filename, options, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function fetchOnReadyStateChange() {
      if (xhr.readyState !== 4)
        return void 0;
      if (xhr.status !== 0 && xhr.status !== 200)
        return callback(Error("status " + xhr.status));
      if (options.binary) {
        var buffer = xhr.response;
        if (!buffer) {
          buffer = [];
          for (var i = 0; i < xhr.responseText.length; ++i)
            buffer.push(xhr.responseText.charCodeAt(i) & 255);
        }
        return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
      }
      return callback(null, xhr.responseText);
    };
    if (options.binary) {
      if ("overrideMimeType" in xhr)
        xhr.overrideMimeType("text/plain; charset=x-user-defined");
      xhr.responseType = "arraybuffer";
    }
    xhr.open("GET", filename);
    xhr.send();
  };
  return fetch_1;
}
var path = {};
var hasRequiredPath;
function requirePath() {
  if (hasRequiredPath) return path;
  hasRequiredPath = 1;
  (function(exports) {
    var path2 = exports;
    var isAbsolute = (
      /**
       * Tests if the specified path is absolute.
       * @param {string} path Path to test
       * @returns {boolean} `true` if path is absolute
       */
      path2.isAbsolute = function isAbsolute2(path3) {
        return /^(?:\/|\w+:)/.test(path3);
      }
    );
    var normalize = (
      /**
       * Normalizes the specified path.
       * @param {string} path Path to normalize
       * @returns {string} Normalized path
       */
      path2.normalize = function normalize2(path3) {
        path3 = path3.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path3.split("/"), absolute = isAbsolute(path3), prefix = "";
        if (absolute)
          prefix = parts.shift() + "/";
        for (var i = 0; i < parts.length; ) {
          if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
              parts.splice(--i, 2);
            else if (absolute)
              parts.splice(i, 1);
            else
              ++i;
          } else if (parts[i] === ".")
            parts.splice(i, 1);
          else
            ++i;
        }
        return prefix + parts.join("/");
      }
    );
    path2.resolve = function resolve(originPath, includePath, alreadyNormalized) {
      if (!alreadyNormalized)
        includePath = normalize(includePath);
      if (isAbsolute(includePath))
        return includePath;
      if (!alreadyNormalized)
        originPath = normalize(originPath);
      return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };
  })(path);
  return path;
}
var types = {};
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types;
  hasRequiredTypes = 1;
  (function(exports) {
    var types2 = exports;
    var util2 = requireUtil$1();
    var s = [
      "double",
      // 0
      "float",
      // 1
      "int32",
      // 2
      "uint32",
      // 3
      "sint32",
      // 4
      "fixed32",
      // 5
      "sfixed32",
      // 6
      "int64",
      // 7
      "uint64",
      // 8
      "sint64",
      // 9
      "fixed64",
      // 10
      "sfixed64",
      // 11
      "bool",
      // 12
      "string",
      // 13
      "bytes"
      // 14
    ];
    function bake(values, offset) {
      var i = 0, o = {};
      offset |= 0;
      while (i < values.length) o[s[i + offset]] = values[i++];
      return o;
    }
    types2.basic = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2,
      /* bytes    */
      2
    ]);
    types2.defaults = bake([
      /* double   */
      0,
      /* float    */
      0,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      0,
      /* sfixed32 */
      0,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      0,
      /* sfixed64 */
      0,
      /* bool     */
      false,
      /* string   */
      "",
      /* bytes    */
      util2.emptyArray,
      /* message  */
      null
    ]);
    types2.long = bake([
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1
    ], 7);
    types2.mapKey = bake([
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2
    ], 2);
    types2.packed = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0
    ]);
  })(types);
  return types;
}
var field;
var hasRequiredField;
function requireField() {
  if (hasRequiredField) return field;
  hasRequiredField = 1;
  field = Field;
  var ReflectionObject = requireObject();
  ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
  var Enum = require_enum(), types2 = requireTypes(), util2 = requireUtil$1();
  var Type;
  var ruleRe = /^required|optional|repeated$/;
  Field.fromJSON = function fromJSON(name2, json) {
    return new Field(name2, json.id, json.type, json.rule, json.extend, json.options, json.comment);
  };
  function Field(name2, id, type2, rule, extend, options, comment) {
    if (util2.isObject(rule)) {
      comment = extend;
      options = rule;
      rule = extend = void 0;
    } else if (util2.isObject(extend)) {
      comment = options;
      options = extend;
      extend = void 0;
    }
    ReflectionObject.call(this, name2, options);
    if (!util2.isInteger(id) || id < 0)
      throw TypeError("id must be a non-negative integer");
    if (!util2.isString(type2))
      throw TypeError("type must be a string");
    if (rule !== void 0 && !ruleRe.test(rule = rule.toString().toLowerCase()))
      throw TypeError("rule must be a string rule");
    if (extend !== void 0 && !util2.isString(extend))
      throw TypeError("extend must be a string");
    if (rule === "proto3_optional") {
      rule = "optional";
    }
    this.rule = rule && rule !== "optional" ? rule : void 0;
    this.type = type2;
    this.id = id;
    this.extend = extend || void 0;
    this.required = rule === "required";
    this.optional = !this.required;
    this.repeated = rule === "repeated";
    this.map = false;
    this.message = null;
    this.partOf = null;
    this.typeDefault = null;
    this.defaultValue = null;
    this.long = util2.Long ? types2.long[type2] !== void 0 : (
      /* istanbul ignore next */
      false
    );
    this.bytes = type2 === "bytes";
    this.resolvedType = null;
    this.extensionField = null;
    this.declaringField = null;
    this._packed = null;
    this.comment = comment;
  }
  Object.defineProperty(Field.prototype, "packed", {
    get: function() {
      if (this._packed === null)
        this._packed = this.getOption("packed") !== false;
      return this._packed;
    }
  });
  Field.prototype.setOption = function setOption(name2, value, ifNotSet) {
    if (name2 === "packed")
      this._packed = null;
    return ReflectionObject.prototype.setOption.call(this, name2, value, ifNotSet);
  };
  Field.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "rule",
      this.rule !== "optional" && this.rule || void 0,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : void 0
    ]);
  };
  Field.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if ((this.typeDefault = types2.defaults[this.type]) === void 0) {
      this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
      if (this.resolvedType instanceof Type)
        this.typeDefault = null;
      else
        this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
    } else if (this.options && this.options.proto3_optional) {
      this.typeDefault = null;
    }
    if (this.options && this.options["default"] != null) {
      this.typeDefault = this.options["default"];
      if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
        this.typeDefault = this.resolvedType.values[this.typeDefault];
    }
    if (this.options) {
      if (this.options.packed === true || this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof Enum))
        delete this.options.packed;
      if (!Object.keys(this.options).length)
        this.options = void 0;
    }
    if (this.long) {
      this.typeDefault = util2.Long.fromNumber(this.typeDefault, this.type.charAt(0) === "u");
      if (Object.freeze)
        Object.freeze(this.typeDefault);
    } else if (this.bytes && typeof this.typeDefault === "string") {
      var buf;
      if (util2.base64.test(this.typeDefault))
        util2.base64.decode(this.typeDefault, buf = util2.newBuffer(util2.base64.length(this.typeDefault)), 0);
      else
        util2.utf8.write(this.typeDefault, buf = util2.newBuffer(util2.utf8.length(this.typeDefault)), 0);
      this.typeDefault = buf;
    }
    if (this.map)
      this.defaultValue = util2.emptyObject;
    else if (this.repeated)
      this.defaultValue = util2.emptyArray;
    else
      this.defaultValue = this.typeDefault;
    if (this.parent instanceof Type)
      this.parent.ctor.prototype[this.name] = this.defaultValue;
    return ReflectionObject.prototype.resolve.call(this);
  };
  Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
    if (typeof fieldType === "function")
      fieldType = util2.decorateType(fieldType).name;
    else if (fieldType && typeof fieldType === "object")
      fieldType = util2.decorateEnum(fieldType).name;
    return function fieldDecorator(prototype, fieldName) {
      util2.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
    };
  };
  Field._configure = function configure(Type_) {
    Type = Type_;
  };
  return field;
}
var oneof;
var hasRequiredOneof;
function requireOneof() {
  if (hasRequiredOneof) return oneof;
  hasRequiredOneof = 1;
  oneof = OneOf;
  var ReflectionObject = requireObject();
  ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
  var Field = requireField(), util2 = requireUtil$1();
  function OneOf(name2, fieldNames, options, comment) {
    if (!Array.isArray(fieldNames)) {
      options = fieldNames;
      fieldNames = void 0;
    }
    ReflectionObject.call(this, name2, options);
    if (!(fieldNames === void 0 || Array.isArray(fieldNames)))
      throw TypeError("fieldNames must be an Array");
    this.oneof = fieldNames || [];
    this.fieldsArray = [];
    this.comment = comment;
  }
  OneOf.fromJSON = function fromJSON(name2, json) {
    return new OneOf(name2, json.oneof, json.options, json.comment);
  };
  OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "options",
      this.options,
      "oneof",
      this.oneof,
      "comment",
      keepComments ? this.comment : void 0
    ]);
  };
  function addFieldsToParent(oneof2) {
    if (oneof2.parent) {
      for (var i = 0; i < oneof2.fieldsArray.length; ++i)
        if (!oneof2.fieldsArray[i].parent)
          oneof2.parent.add(oneof2.fieldsArray[i]);
    }
  }
  OneOf.prototype.add = function add(field2) {
    if (!(field2 instanceof Field))
      throw TypeError("field must be a Field");
    if (field2.parent && field2.parent !== this.parent)
      field2.parent.remove(field2);
    this.oneof.push(field2.name);
    this.fieldsArray.push(field2);
    field2.partOf = this;
    addFieldsToParent(this);
    return this;
  };
  OneOf.prototype.remove = function remove(field2) {
    if (!(field2 instanceof Field))
      throw TypeError("field must be a Field");
    var index = this.fieldsArray.indexOf(field2);
    if (index < 0)
      throw Error(field2 + " is not a member of " + this);
    this.fieldsArray.splice(index, 1);
    index = this.oneof.indexOf(field2.name);
    if (index > -1)
      this.oneof.splice(index, 1);
    field2.partOf = null;
    return this;
  };
  OneOf.prototype.onAdd = function onAdd(parent) {
    ReflectionObject.prototype.onAdd.call(this, parent);
    var self2 = this;
    for (var i = 0; i < this.oneof.length; ++i) {
      var field2 = parent.get(this.oneof[i]);
      if (field2 && !field2.partOf) {
        field2.partOf = self2;
        self2.fieldsArray.push(field2);
      }
    }
    addFieldsToParent(this);
  };
  OneOf.prototype.onRemove = function onRemove(parent) {
    for (var i = 0, field2; i < this.fieldsArray.length; ++i)
      if ((field2 = this.fieldsArray[i]).parent)
        field2.parent.remove(field2);
    ReflectionObject.prototype.onRemove.call(this, parent);
  };
  OneOf.d = function decorateOneOf() {
    var fieldNames = new Array(arguments.length), index = 0;
    while (index < arguments.length)
      fieldNames[index] = arguments[index++];
    return function oneOfDecorator(prototype, oneofName) {
      util2.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
      Object.defineProperty(prototype, oneofName, {
        get: util2.oneOfGetter(fieldNames),
        set: util2.oneOfSetter(fieldNames)
      });
    };
  };
  return oneof;
}
var namespace;
var hasRequiredNamespace;
function requireNamespace() {
  if (hasRequiredNamespace) return namespace;
  hasRequiredNamespace = 1;
  namespace = Namespace;
  var ReflectionObject = requireObject();
  ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
  var Field = requireField(), util2 = requireUtil$1(), OneOf = requireOneof();
  var Type, Service, Enum;
  Namespace.fromJSON = function fromJSON(name2, json) {
    return new Namespace(name2, json.options).addJSON(json.nested);
  };
  function arrayToJSON(array, toJSONOptions) {
    if (!(array && array.length))
      return void 0;
    var obj = {};
    for (var i = 0; i < array.length; ++i)
      obj[array[i].name] = array[i].toJSON(toJSONOptions);
    return obj;
  }
  Namespace.arrayToJSON = arrayToJSON;
  Namespace.isReservedId = function isReservedId(reserved, id) {
    if (reserved) {
      for (var i = 0; i < reserved.length; ++i)
        if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
          return true;
    }
    return false;
  };
  Namespace.isReservedName = function isReservedName(reserved, name2) {
    if (reserved) {
      for (var i = 0; i < reserved.length; ++i)
        if (reserved[i] === name2)
          return true;
    }
    return false;
  };
  function Namespace(name2, options) {
    ReflectionObject.call(this, name2, options);
    this.nested = void 0;
    this._nestedArray = null;
  }
  function clearCache(namespace2) {
    namespace2._nestedArray = null;
    return namespace2;
  }
  Object.defineProperty(Namespace.prototype, "nestedArray", {
    get: function() {
      return this._nestedArray || (this._nestedArray = util2.toArray(this.nested));
    }
  });
  Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
    return util2.toObject([
      "options",
      this.options,
      "nested",
      arrayToJSON(this.nestedArray, toJSONOptions)
    ]);
  };
  Namespace.prototype.addJSON = function addJSON(nestedJson) {
    var ns = this;
    if (nestedJson) {
      for (var names = Object.keys(nestedJson), i = 0, nested2; i < names.length; ++i) {
        nested2 = nestedJson[names[i]];
        ns.add(
          // most to least likely
          (nested2.fields !== void 0 ? Type.fromJSON : nested2.values !== void 0 ? Enum.fromJSON : nested2.methods !== void 0 ? Service.fromJSON : nested2.id !== void 0 ? Field.fromJSON : Namespace.fromJSON)(names[i], nested2)
        );
      }
    }
    return this;
  };
  Namespace.prototype.get = function get(name2) {
    return this.nested && this.nested[name2] || null;
  };
  Namespace.prototype.getEnum = function getEnum(name2) {
    if (this.nested && this.nested[name2] instanceof Enum)
      return this.nested[name2].values;
    throw Error("no such enum: " + name2);
  };
  Namespace.prototype.add = function add(object2) {
    if (!(object2 instanceof Field && object2.extend !== void 0 || object2 instanceof Type || object2 instanceof OneOf || object2 instanceof Enum || object2 instanceof Service || object2 instanceof Namespace))
      throw TypeError("object must be a valid nested object");
    if (!this.nested)
      this.nested = {};
    else {
      var prev = this.get(object2.name);
      if (prev) {
        if (prev instanceof Namespace && object2 instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
          var nested2 = prev.nestedArray;
          for (var i = 0; i < nested2.length; ++i)
            object2.add(nested2[i]);
          this.remove(prev);
          if (!this.nested)
            this.nested = {};
          object2.setOptions(prev.options, true);
        } else
          throw Error("duplicate name '" + object2.name + "' in " + this);
      }
    }
    this.nested[object2.name] = object2;
    object2.onAdd(this);
    return clearCache(this);
  };
  Namespace.prototype.remove = function remove(object2) {
    if (!(object2 instanceof ReflectionObject))
      throw TypeError("object must be a ReflectionObject");
    if (object2.parent !== this)
      throw Error(object2 + " is not a member of " + this);
    delete this.nested[object2.name];
    if (!Object.keys(this.nested).length)
      this.nested = void 0;
    object2.onRemove(this);
    return clearCache(this);
  };
  Namespace.prototype.define = function define(path2, json) {
    if (util2.isString(path2))
      path2 = path2.split(".");
    else if (!Array.isArray(path2))
      throw TypeError("illegal path");
    if (path2 && path2.length && path2[0] === "")
      throw Error("path must be relative");
    var ptr = this;
    while (path2.length > 0) {
      var part = path2.shift();
      if (ptr.nested && ptr.nested[part]) {
        ptr = ptr.nested[part];
        if (!(ptr instanceof Namespace))
          throw Error("path conflicts with non-namespace objects");
      } else
        ptr.add(ptr = new Namespace(part));
    }
    if (json)
      ptr.addJSON(json);
    return ptr;
  };
  Namespace.prototype.resolveAll = function resolveAll() {
    var nested2 = this.nestedArray, i = 0;
    while (i < nested2.length)
      if (nested2[i] instanceof Namespace)
        nested2[i++].resolveAll();
      else
        nested2[i++].resolve();
    return this.resolve();
  };
  Namespace.prototype.lookup = function lookup(path2, filterTypes, parentAlreadyChecked) {
    if (typeof filterTypes === "boolean") {
      parentAlreadyChecked = filterTypes;
      filterTypes = void 0;
    } else if (filterTypes && !Array.isArray(filterTypes))
      filterTypes = [filterTypes];
    if (util2.isString(path2) && path2.length) {
      if (path2 === ".")
        return this.root;
      path2 = path2.split(".");
    } else if (!path2.length)
      return this;
    if (path2[0] === "")
      return this.root.lookup(path2.slice(1), filterTypes);
    var found = this.get(path2[0]);
    if (found) {
      if (path2.length === 1) {
        if (!filterTypes || filterTypes.indexOf(found.constructor) > -1)
          return found;
      } else if (found instanceof Namespace && (found = found.lookup(path2.slice(1), filterTypes, true)))
        return found;
    } else
      for (var i = 0; i < this.nestedArray.length; ++i)
        if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i].lookup(path2, filterTypes, true)))
          return found;
    if (this.parent === null || parentAlreadyChecked)
      return null;
    return this.parent.lookup(path2, filterTypes);
  };
  Namespace.prototype.lookupType = function lookupType(path2) {
    var found = this.lookup(path2, [Type]);
    if (!found)
      throw Error("no such type: " + path2);
    return found;
  };
  Namespace.prototype.lookupEnum = function lookupEnum(path2) {
    var found = this.lookup(path2, [Enum]);
    if (!found)
      throw Error("no such Enum '" + path2 + "' in " + this);
    return found;
  };
  Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path2) {
    var found = this.lookup(path2, [Type, Enum]);
    if (!found)
      throw Error("no such Type or Enum '" + path2 + "' in " + this);
    return found;
  };
  Namespace.prototype.lookupService = function lookupService(path2) {
    var found = this.lookup(path2, [Service]);
    if (!found)
      throw Error("no such Service '" + path2 + "' in " + this);
    return found;
  };
  Namespace._configure = function(Type_, Service_, Enum_) {
    Type = Type_;
    Service = Service_;
    Enum = Enum_;
  };
  return namespace;
}
var mapfield;
var hasRequiredMapfield;
function requireMapfield() {
  if (hasRequiredMapfield) return mapfield;
  hasRequiredMapfield = 1;
  mapfield = MapField;
  var Field = requireField();
  ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
  var types2 = requireTypes(), util2 = requireUtil$1();
  function MapField(name2, id, keyType, type2, options, comment) {
    Field.call(this, name2, id, type2, void 0, void 0, options, comment);
    if (!util2.isString(keyType))
      throw TypeError("keyType must be a string");
    this.keyType = keyType;
    this.resolvedKeyType = null;
    this.map = true;
  }
  MapField.fromJSON = function fromJSON(name2, json) {
    return new MapField(name2, json.id, json.keyType, json.type, json.options, json.comment);
  };
  MapField.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "keyType",
      this.keyType,
      "type",
      this.type,
      "id",
      this.id,
      "extend",
      this.extend,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : void 0
    ]);
  };
  MapField.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if (types2.mapKey[this.keyType] === void 0)
      throw Error("invalid key type: " + this.keyType);
    return Field.prototype.resolve.call(this);
  };
  MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
    if (typeof fieldValueType === "function")
      fieldValueType = util2.decorateType(fieldValueType).name;
    else if (fieldValueType && typeof fieldValueType === "object")
      fieldValueType = util2.decorateEnum(fieldValueType).name;
    return function mapFieldDecorator(prototype, fieldName) {
      util2.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
    };
  };
  return mapfield;
}
var method;
var hasRequiredMethod;
function requireMethod() {
  if (hasRequiredMethod) return method;
  hasRequiredMethod = 1;
  method = Method;
  var ReflectionObject = requireObject();
  ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
  var util2 = requireUtil$1();
  function Method(name2, type2, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
    if (util2.isObject(requestStream)) {
      options = requestStream;
      requestStream = responseStream = void 0;
    } else if (util2.isObject(responseStream)) {
      options = responseStream;
      responseStream = void 0;
    }
    if (!(type2 === void 0 || util2.isString(type2)))
      throw TypeError("type must be a string");
    if (!util2.isString(requestType))
      throw TypeError("requestType must be a string");
    if (!util2.isString(responseType))
      throw TypeError("responseType must be a string");
    ReflectionObject.call(this, name2, options);
    this.type = type2 || "rpc";
    this.requestType = requestType;
    this.requestStream = requestStream ? true : void 0;
    this.responseType = responseType;
    this.responseStream = responseStream ? true : void 0;
    this.resolvedRequestType = null;
    this.resolvedResponseType = null;
    this.comment = comment;
    this.parsedOptions = parsedOptions;
  }
  Method.fromJSON = function fromJSON(name2, json) {
    return new Method(name2, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
  };
  Method.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "type",
      this.type !== "rpc" && /* istanbul ignore next */
      this.type || void 0,
      "requestType",
      this.requestType,
      "requestStream",
      this.requestStream,
      "responseType",
      this.responseType,
      "responseStream",
      this.responseStream,
      "options",
      this.options,
      "comment",
      keepComments ? this.comment : void 0,
      "parsedOptions",
      this.parsedOptions
    ]);
  };
  Method.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    this.resolvedRequestType = this.parent.lookupType(this.requestType);
    this.resolvedResponseType = this.parent.lookupType(this.responseType);
    return ReflectionObject.prototype.resolve.call(this);
  };
  return method;
}
var service;
var hasRequiredService;
function requireService() {
  if (hasRequiredService) return service;
  hasRequiredService = 1;
  service = Service;
  var Namespace = requireNamespace();
  ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
  var Method = requireMethod(), util2 = requireUtil$1(), rpc2 = requireRpc();
  function Service(name2, options) {
    Namespace.call(this, name2, options);
    this.methods = {};
    this._methodsArray = null;
  }
  Service.fromJSON = function fromJSON(name2, json) {
    var service2 = new Service(name2, json.options);
    if (json.methods)
      for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
        service2.add(Method.fromJSON(names[i], json.methods[names[i]]));
    if (json.nested)
      service2.addJSON(json.nested);
    service2.comment = json.comment;
    return service2;
  };
  Service.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "options",
      inherited && inherited.options || void 0,
      "methods",
      Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
      {},
      "nested",
      inherited && inherited.nested || void 0,
      "comment",
      keepComments ? this.comment : void 0
    ]);
  };
  Object.defineProperty(Service.prototype, "methodsArray", {
    get: function() {
      return this._methodsArray || (this._methodsArray = util2.toArray(this.methods));
    }
  });
  function clearCache(service2) {
    service2._methodsArray = null;
    return service2;
  }
  Service.prototype.get = function get(name2) {
    return this.methods[name2] || Namespace.prototype.get.call(this, name2);
  };
  Service.prototype.resolveAll = function resolveAll() {
    var methods = this.methodsArray;
    for (var i = 0; i < methods.length; ++i)
      methods[i].resolve();
    return Namespace.prototype.resolve.call(this);
  };
  Service.prototype.add = function add(object2) {
    if (this.get(object2.name))
      throw Error("duplicate name '" + object2.name + "' in " + this);
    if (object2 instanceof Method) {
      this.methods[object2.name] = object2;
      object2.parent = this;
      return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object2);
  };
  Service.prototype.remove = function remove(object2) {
    if (object2 instanceof Method) {
      if (this.methods[object2.name] !== object2)
        throw Error(object2 + " is not a member of " + this);
      delete this.methods[object2.name];
      object2.parent = null;
      return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object2);
  };
  Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
    var rpcService = new rpc2.Service(rpcImpl, requestDelimited, responseDelimited);
    for (var i = 0, method2; i < /* initializes */
    this.methodsArray.length; ++i) {
      var methodName = util2.lcFirst((method2 = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
      rpcService[methodName] = util2.codegen(["r", "c"], util2.isReserved(methodName) ? methodName + "_" : methodName)("return this.rpcCall(m,q,s,r,c)")({
        m: method2,
        q: method2.resolvedRequestType.ctor,
        s: method2.resolvedResponseType.ctor
      });
    }
    return rpcService;
  };
  return service;
}
var message;
var hasRequiredMessage;
function requireMessage() {
  if (hasRequiredMessage) return message;
  hasRequiredMessage = 1;
  message = Message;
  var util2 = requireMinimal();
  function Message(properties) {
    if (properties)
      for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
        this[keys[i]] = properties[keys[i]];
  }
  Message.create = function create(properties) {
    return this.$type.create(properties);
  };
  Message.encode = function encode(message2, writer2) {
    return this.$type.encode(message2, writer2);
  };
  Message.encodeDelimited = function encodeDelimited(message2, writer2) {
    return this.$type.encodeDelimited(message2, writer2);
  };
  Message.decode = function decode(reader2) {
    return this.$type.decode(reader2);
  };
  Message.decodeDelimited = function decodeDelimited(reader2) {
    return this.$type.decodeDelimited(reader2);
  };
  Message.verify = function verify(message2) {
    return this.$type.verify(message2);
  };
  Message.fromObject = function fromObject(object2) {
    return this.$type.fromObject(object2);
  };
  Message.toObject = function toObject(message2, options) {
    return this.$type.toObject(message2, options);
  };
  Message.prototype.toJSON = function toJSON() {
    return this.$type.toObject(this, util2.toJSONOptions);
  };
  return message;
}
var decoder_1;
var hasRequiredDecoder;
function requireDecoder() {
  if (hasRequiredDecoder) return decoder_1;
  hasRequiredDecoder = 1;
  decoder_1 = decoder;
  var Enum = require_enum(), types2 = requireTypes(), util2 = requireUtil$1();
  function missing(field2) {
    return "missing required '" + field2.name + "'";
  }
  function decoder(mtype) {
    var gen = util2.codegen(["r", "l"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field3) {
      return field3.map;
    }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
    if (mtype.group) gen("if((t&7)===4)")("break");
    gen("switch(t>>>3){");
    var i = 0;
    for (; i < /* initializes */
    mtype.fieldsArray.length; ++i) {
      var field2 = mtype._fieldsArray[i].resolve(), type2 = field2.resolvedType instanceof Enum ? "int32" : field2.type, ref = "m" + util2.safeProp(field2.name);
      gen("case %i: {", field2.id);
      if (field2.map) {
        gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
        if (types2.defaults[field2.keyType] !== void 0) gen("k=%j", types2.defaults[field2.keyType]);
        else gen("k=null");
        if (types2.defaults[type2] !== void 0) gen("value=%j", types2.defaults[type2]);
        else gen("value=null");
        gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field2.keyType)("case 2:");
        if (types2.basic[type2] === void 0) gen("value=types[%i].decode(r,r.uint32())", i);
        else gen("value=r.%s()", type2);
        gen("break")("default:")("r.skipType(tag2&7)")("break")("}")("}");
        if (types2.long[field2.keyType] !== void 0) gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
        else gen("%s[k]=value", ref);
      } else if (field2.repeated) {
        gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
        if (types2.packed[type2] !== void 0) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type2)("}else");
        if (types2.basic[type2] === void 0) gen(field2.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", ref, i);
        else gen("%s.push(r.%s())", ref, type2);
      } else if (types2.basic[type2] === void 0) gen(field2.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", ref, i);
      else gen("%s=r.%s()", ref, type2);
      gen("break")("}");
    }
    gen("default:")("r.skipType(t&7)")("break")("}")("}");
    for (i = 0; i < mtype._fieldsArray.length; ++i) {
      var rfield = mtype._fieldsArray[i];
      if (rfield.required) gen("if(!m.hasOwnProperty(%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
    }
    return gen("return m");
  }
  return decoder_1;
}
var verifier_1;
var hasRequiredVerifier;
function requireVerifier() {
  if (hasRequiredVerifier) return verifier_1;
  hasRequiredVerifier = 1;
  verifier_1 = verifier;
  var Enum = require_enum(), util2 = requireUtil$1();
  function invalid(field2, expected) {
    return field2.name + ": " + expected + (field2.repeated && expected !== "array" ? "[]" : field2.map && expected !== "object" ? "{k:" + field2.keyType + "}" : "") + " expected";
  }
  function genVerifyValue(gen, field2, fieldIndex, ref) {
    if (field2.resolvedType) {
      if (field2.resolvedType instanceof Enum) {
        gen("switch(%s){", ref)("default:")("return%j", invalid(field2, "enum value"));
        for (var keys = Object.keys(field2.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field2.resolvedType.values[keys[j]]);
        gen("break")("}");
      } else {
        gen("{")("var e=types[%i].verify(%s);", fieldIndex, ref)("if(e)")("return%j+e", field2.name + ".")("}");
      }
    } else {
      switch (field2.type) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field2, "integer"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field2, "integer|Long"));
          break;
        case "float":
        case "double":
          gen('if(typeof %s!=="number")', ref)("return%j", invalid(field2, "number"));
          break;
        case "bool":
          gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field2, "boolean"));
          break;
        case "string":
          gen("if(!util.isString(%s))", ref)("return%j", invalid(field2, "string"));
          break;
        case "bytes":
          gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field2, "buffer"));
          break;
      }
    }
    return gen;
  }
  function genVerifyKey(gen, field2, ref) {
    switch (field2.keyType) {
      case "int32":
      case "uint32":
      case "sint32":
      case "fixed32":
      case "sfixed32":
        gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field2, "integer key"));
        break;
      case "int64":
      case "uint64":
      case "sint64":
      case "fixed64":
      case "sfixed64":
        gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field2, "integer|Long key"));
        break;
      case "bool":
        gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field2, "boolean key"));
        break;
    }
    return gen;
  }
  function verifier(mtype) {
    var gen = util2.codegen(["m"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected");
    var oneofs = mtype.oneofsArray, seenFirstField = {};
    if (oneofs.length) gen("var p={}");
    for (var i = 0; i < /* initializes */
    mtype.fieldsArray.length; ++i) {
      var field2 = mtype._fieldsArray[i].resolve(), ref = "m" + util2.safeProp(field2.name);
      if (field2.optional) gen("if(%s!=null&&m.hasOwnProperty(%j)){", ref, field2.name);
      if (field2.map) {
        gen("if(!util.isObject(%s))", ref)("return%j", invalid(field2, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
        genVerifyKey(gen, field2, "k[i]");
        genVerifyValue(gen, field2, i, ref + "[k[i]]")("}");
      } else if (field2.repeated) {
        gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field2, "array"))("for(var i=0;i<%s.length;++i){", ref);
        genVerifyValue(gen, field2, i, ref + "[i]")("}");
      } else {
        if (field2.partOf) {
          var oneofProp = util2.safeProp(field2.partOf.name);
          if (seenFirstField[field2.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field2.partOf.name + ": multiple values");
          seenFirstField[field2.partOf.name] = 1;
          gen("p%s=1", oneofProp);
        }
        genVerifyValue(gen, field2, i, ref);
      }
      if (field2.optional) gen("}");
    }
    return gen("return null");
  }
  return verifier_1;
}
var converter = {};
var hasRequiredConverter;
function requireConverter() {
  if (hasRequiredConverter) return converter;
  hasRequiredConverter = 1;
  (function(exports) {
    var converter2 = exports;
    var Enum = require_enum(), util2 = requireUtil$1();
    function genValuePartial_fromObject(gen, field2, fieldIndex, prop) {
      var defaultAlreadyEmitted = false;
      if (field2.resolvedType) {
        if (field2.resolvedType instanceof Enum) {
          gen("switch(d%s){", prop);
          for (var values = field2.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
            if (values[keys[i]] === field2.typeDefault && !defaultAlreadyEmitted) {
              gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
              if (!field2.repeated) gen("break");
              defaultAlreadyEmitted = true;
            }
            gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
          }
          gen("}");
        } else gen('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field2.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field2.type) {
          case "double":
          case "float":
            gen("m%s=Number(d%s)", prop, prop);
            break;
          case "uint32":
          case "fixed32":
            gen("m%s=d%s>>>0", prop, prop);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            gen("m%s=d%s|0", prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
            break;
          case "bytes":
            gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
            break;
          case "string":
            gen("m%s=String(d%s)", prop, prop);
            break;
          case "bool":
            gen("m%s=Boolean(d%s)", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter2.fromObject = function fromObject(mtype) {
      var fields = mtype.fieldsArray;
      var gen = util2.codegen(["d"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!fields.length) return gen("return new this.ctor");
      gen("var m=new this.ctor");
      for (var i = 0; i < fields.length; ++i) {
        var field2 = fields[i].resolve(), prop = util2.safeProp(field2.name);
        if (field2.map) {
          gen("if(d%s){", prop)('if(typeof d%s!=="object")', prop)("throw TypeError(%j)", field2.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field2,
            /* not sorted */
            i,
            prop + "[ks[i]]"
          )("}")("}");
        } else if (field2.repeated) {
          gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field2.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field2,
            /* not sorted */
            i,
            prop + "[i]"
          )("}")("}");
        } else {
          if (!(field2.resolvedType instanceof Enum)) gen("if(d%s!=null){", prop);
          genValuePartial_fromObject(
            gen,
            field2,
            /* not sorted */
            i,
            prop
          );
          if (!(field2.resolvedType instanceof Enum)) gen("}");
        }
      }
      return gen("return m");
    };
    function genValuePartial_toObject(gen, field2, fieldIndex, prop) {
      if (field2.resolvedType) {
        if (field2.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
        else gen("d%s=types[%i].toObject(m%s,o)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field2.type) {
          case "double":
          case "float":
            gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
            break;
          case "uint64":
            isUnsigned = true;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen('if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
            break;
          case "bytes":
            gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
            break;
          default:
            gen("d%s=m%s", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter2.toObject = function toObject(mtype) {
      var fields = mtype.fieldsArray.slice().sort(util2.compareFieldsById);
      if (!fields.length)
        return util2.codegen()("return {}");
      var gen = util2.codegen(["m", "o"], mtype.name + "$toObject")("if(!o)")("o={}")("var d={}");
      var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
      for (; i < fields.length; ++i)
        if (!fields[i].partOf)
          (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      if (repeatedFields.length) {
        gen("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util2.safeProp(repeatedFields[i].name));
        gen("}");
      }
      if (mapFields.length) {
        gen("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util2.safeProp(mapFields[i].name));
        gen("}");
      }
      if (normalFields.length) {
        gen("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
          var field2 = normalFields[i], prop = util2.safeProp(field2.name);
          if (field2.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field2.resolvedType.valuesById[field2.typeDefault], field2.typeDefault);
          else if (field2.long) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field2.typeDefault.low, field2.typeDefault.high, field2.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", prop)("}else")("d%s=o.longs===String?%j:%i", prop, field2.typeDefault.toString(), field2.typeDefault.toNumber());
          else if (field2.bytes) {
            var arrayDefault = "[" + Array.prototype.slice.call(field2.typeDefault).join(",") + "]";
            gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field2.typeDefault))("else{")("d%s=%s", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
          } else gen("d%s=%j", prop, field2.typeDefault);
        }
        gen("}");
      }
      var hasKs2 = false;
      for (i = 0; i < fields.length; ++i) {
        var field2 = fields[i], index = mtype._fieldsArray.indexOf(field2), prop = util2.safeProp(field2.name);
        if (field2.map) {
          if (!hasKs2) {
            hasKs2 = true;
            gen("var ks2");
          }
          gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
          genValuePartial_toObject(
            gen,
            field2,
            /* sorted */
            index,
            prop + "[ks2[j]]"
          )("}");
        } else if (field2.repeated) {
          gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
          genValuePartial_toObject(
            gen,
            field2,
            /* sorted */
            index,
            prop + "[j]"
          )("}");
        } else {
          gen("if(m%s!=null&&m.hasOwnProperty(%j)){", prop, field2.name);
          genValuePartial_toObject(
            gen,
            field2,
            /* sorted */
            index,
            prop
          );
          if (field2.partOf) gen("if(o.oneofs)")("d%s=%j", util2.safeProp(field2.partOf.name), field2.name);
        }
        gen("}");
      }
      return gen("return d");
    };
  })(converter);
  return converter;
}
var wrappers = {};
var hasRequiredWrappers;
function requireWrappers() {
  if (hasRequiredWrappers) return wrappers;
  hasRequiredWrappers = 1;
  (function(exports) {
    var wrappers2 = exports;
    var Message = requireMessage();
    wrappers2[".google.protobuf.Any"] = {
      fromObject: function(object2) {
        if (object2 && object2["@type"]) {
          var name2 = object2["@type"].substring(object2["@type"].lastIndexOf("/") + 1);
          var type2 = this.lookup(name2);
          if (type2) {
            var type_url = object2["@type"].charAt(0) === "." ? object2["@type"].slice(1) : object2["@type"];
            if (type_url.indexOf("/") === -1) {
              type_url = "/" + type_url;
            }
            return this.create({
              type_url,
              value: type2.encode(type2.fromObject(object2)).finish()
            });
          }
        }
        return this.fromObject(object2);
      },
      toObject: function(message2, options) {
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name2 = "";
        if (options && options.json && message2.type_url && message2.value) {
          name2 = message2.type_url.substring(message2.type_url.lastIndexOf("/") + 1);
          prefix = message2.type_url.substring(0, message2.type_url.lastIndexOf("/") + 1);
          var type2 = this.lookup(name2);
          if (type2)
            message2 = type2.decode(message2.value);
        }
        if (!(message2 instanceof this.ctor) && message2 instanceof Message) {
          var object2 = message2.$type.toObject(message2, options);
          var messageName = message2.$type.fullName[0] === "." ? message2.$type.fullName.slice(1) : message2.$type.fullName;
          if (prefix === "") {
            prefix = googleApi;
          }
          name2 = prefix + messageName;
          object2["@type"] = name2;
          return object2;
        }
        return this.toObject(message2, options);
      }
    };
  })(wrappers);
  return wrappers;
}
var type;
var hasRequiredType;
function requireType() {
  if (hasRequiredType) return type;
  hasRequiredType = 1;
  type = Type;
  var Namespace = requireNamespace();
  ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
  var Enum = require_enum(), OneOf = requireOneof(), Field = requireField(), MapField = requireMapfield(), Service = requireService(), Message = requireMessage(), Reader = requireReader(), Writer = requireWriter(), util2 = requireUtil$1(), encoder = requireEncoder(), decoder = requireDecoder(), verifier = requireVerifier(), converter2 = requireConverter(), wrappers2 = requireWrappers();
  function Type(name2, options) {
    Namespace.call(this, name2, options);
    this.fields = {};
    this.oneofs = void 0;
    this.extensions = void 0;
    this.reserved = void 0;
    this.group = void 0;
    this._fieldsById = null;
    this._fieldsArray = null;
    this._oneofsArray = null;
    this._ctor = null;
  }
  Object.defineProperties(Type.prototype, {
    /**
     * Message fields by id.
     * @name Type#fieldsById
     * @type {Object.<number,Field>}
     * @readonly
     */
    fieldsById: {
      get: function() {
        if (this._fieldsById)
          return this._fieldsById;
        this._fieldsById = {};
        for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
          var field2 = this.fields[names[i]], id = field2.id;
          if (this._fieldsById[id])
            throw Error("duplicate id " + id + " in " + this);
          this._fieldsById[id] = field2;
        }
        return this._fieldsById;
      }
    },
    /**
     * Fields of this message as an array for iteration.
     * @name Type#fieldsArray
     * @type {Field[]}
     * @readonly
     */
    fieldsArray: {
      get: function() {
        return this._fieldsArray || (this._fieldsArray = util2.toArray(this.fields));
      }
    },
    /**
     * Oneofs of this message as an array for iteration.
     * @name Type#oneofsArray
     * @type {OneOf[]}
     * @readonly
     */
    oneofsArray: {
      get: function() {
        return this._oneofsArray || (this._oneofsArray = util2.toArray(this.oneofs));
      }
    },
    /**
     * The registered constructor, if any registered, otherwise a generic constructor.
     * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
     * @name Type#ctor
     * @type {Constructor<{}>}
     */
    ctor: {
      get: function() {
        return this._ctor || (this.ctor = Type.generateConstructor(this)());
      },
      set: function(ctor) {
        var prototype = ctor.prototype;
        if (!(prototype instanceof Message)) {
          (ctor.prototype = new Message()).constructor = ctor;
          util2.merge(ctor.prototype, prototype);
        }
        ctor.$type = ctor.prototype.$type = this;
        util2.merge(ctor, Message, true);
        this._ctor = ctor;
        var i = 0;
        for (; i < /* initializes */
        this.fieldsArray.length; ++i)
          this._fieldsArray[i].resolve();
        var ctorProperties = {};
        for (i = 0; i < /* initializes */
        this.oneofsArray.length; ++i)
          ctorProperties[this._oneofsArray[i].resolve().name] = {
            get: util2.oneOfGetter(this._oneofsArray[i].oneof),
            set: util2.oneOfSetter(this._oneofsArray[i].oneof)
          };
        if (i)
          Object.defineProperties(ctor.prototype, ctorProperties);
      }
    }
  });
  Type.generateConstructor = function generateConstructor(mtype) {
    var gen = util2.codegen(["p"], mtype.name);
    for (var i = 0, field2; i < mtype.fieldsArray.length; ++i)
      if ((field2 = mtype._fieldsArray[i]).map) gen("this%s={}", util2.safeProp(field2.name));
      else if (field2.repeated) gen("this%s=[]", util2.safeProp(field2.name));
    return gen("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
  };
  function clearCache(type2) {
    type2._fieldsById = type2._fieldsArray = type2._oneofsArray = null;
    delete type2.encode;
    delete type2.decode;
    delete type2.verify;
    return type2;
  }
  Type.fromJSON = function fromJSON(name2, json) {
    var type2 = new Type(name2, json.options);
    type2.extensions = json.extensions;
    type2.reserved = json.reserved;
    var names = Object.keys(json.fields), i = 0;
    for (; i < names.length; ++i)
      type2.add(
        (typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]])
      );
    if (json.oneofs)
      for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
        type2.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
    if (json.nested)
      for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
        var nested2 = json.nested[names[i]];
        type2.add(
          // most to least likely
          (nested2.id !== void 0 ? Field.fromJSON : nested2.fields !== void 0 ? Type.fromJSON : nested2.values !== void 0 ? Enum.fromJSON : nested2.methods !== void 0 ? Service.fromJSON : Namespace.fromJSON)(names[i], nested2)
        );
      }
    if (json.extensions && json.extensions.length)
      type2.extensions = json.extensions;
    if (json.reserved && json.reserved.length)
      type2.reserved = json.reserved;
    if (json.group)
      type2.group = true;
    if (json.comment)
      type2.comment = json.comment;
    return type2;
  };
  Type.prototype.toJSON = function toJSON(toJSONOptions) {
    var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "options",
      inherited && inherited.options || void 0,
      "oneofs",
      Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
      "fields",
      Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
        return !obj.declaringField;
      }), toJSONOptions) || {},
      "extensions",
      this.extensions && this.extensions.length ? this.extensions : void 0,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : void 0,
      "group",
      this.group || void 0,
      "nested",
      inherited && inherited.nested || void 0,
      "comment",
      keepComments ? this.comment : void 0
    ]);
  };
  Type.prototype.resolveAll = function resolveAll() {
    var fields = this.fieldsArray, i = 0;
    while (i < fields.length)
      fields[i++].resolve();
    var oneofs = this.oneofsArray;
    i = 0;
    while (i < oneofs.length)
      oneofs[i++].resolve();
    return Namespace.prototype.resolveAll.call(this);
  };
  Type.prototype.get = function get(name2) {
    return this.fields[name2] || this.oneofs && this.oneofs[name2] || this.nested && this.nested[name2] || null;
  };
  Type.prototype.add = function add(object2) {
    if (this.get(object2.name))
      throw Error("duplicate name '" + object2.name + "' in " + this);
    if (object2 instanceof Field && object2.extend === void 0) {
      if (this._fieldsById ? (
        /* istanbul ignore next */
        this._fieldsById[object2.id]
      ) : this.fieldsById[object2.id])
        throw Error("duplicate id " + object2.id + " in " + this);
      if (this.isReservedId(object2.id))
        throw Error("id " + object2.id + " is reserved in " + this);
      if (this.isReservedName(object2.name))
        throw Error("name '" + object2.name + "' is reserved in " + this);
      if (object2.parent)
        object2.parent.remove(object2);
      this.fields[object2.name] = object2;
      object2.message = this;
      object2.onAdd(this);
      return clearCache(this);
    }
    if (object2 instanceof OneOf) {
      if (!this.oneofs)
        this.oneofs = {};
      this.oneofs[object2.name] = object2;
      object2.onAdd(this);
      return clearCache(this);
    }
    return Namespace.prototype.add.call(this, object2);
  };
  Type.prototype.remove = function remove(object2) {
    if (object2 instanceof Field && object2.extend === void 0) {
      if (!this.fields || this.fields[object2.name] !== object2)
        throw Error(object2 + " is not a member of " + this);
      delete this.fields[object2.name];
      object2.parent = null;
      object2.onRemove(this);
      return clearCache(this);
    }
    if (object2 instanceof OneOf) {
      if (!this.oneofs || this.oneofs[object2.name] !== object2)
        throw Error(object2 + " is not a member of " + this);
      delete this.oneofs[object2.name];
      object2.parent = null;
      object2.onRemove(this);
      return clearCache(this);
    }
    return Namespace.prototype.remove.call(this, object2);
  };
  Type.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
  };
  Type.prototype.isReservedName = function isReservedName(name2) {
    return Namespace.isReservedName(this.reserved, name2);
  };
  Type.prototype.create = function create(properties) {
    return new this.ctor(properties);
  };
  Type.prototype.setup = function setup() {
    var fullName = this.fullName, types2 = [];
    for (var i = 0; i < /* initializes */
    this.fieldsArray.length; ++i)
      types2.push(this._fieldsArray[i].resolve().resolvedType);
    this.encode = encoder(this)({
      Writer,
      types: types2,
      util: util2
    });
    this.decode = decoder(this)({
      Reader,
      types: types2,
      util: util2
    });
    this.verify = verifier(this)({
      types: types2,
      util: util2
    });
    this.fromObject = converter2.fromObject(this)({
      types: types2,
      util: util2
    });
    this.toObject = converter2.toObject(this)({
      types: types2,
      util: util2
    });
    var wrapper = wrappers2[fullName];
    if (wrapper) {
      var originalThis = Object.create(this);
      originalThis.fromObject = this.fromObject;
      this.fromObject = wrapper.fromObject.bind(originalThis);
      originalThis.toObject = this.toObject;
      this.toObject = wrapper.toObject.bind(originalThis);
    }
    return this;
  };
  Type.prototype.encode = function encode_setup(message2, writer2) {
    return this.setup().encode(message2, writer2);
  };
  Type.prototype.encodeDelimited = function encodeDelimited(message2, writer2) {
    return this.encode(message2, writer2 && writer2.len ? writer2.fork() : writer2).ldelim();
  };
  Type.prototype.decode = function decode_setup(reader2, length) {
    return this.setup().decode(reader2, length);
  };
  Type.prototype.decodeDelimited = function decodeDelimited(reader2) {
    if (!(reader2 instanceof Reader))
      reader2 = Reader.create(reader2);
    return this.decode(reader2, reader2.uint32());
  };
  Type.prototype.verify = function verify_setup(message2) {
    return this.setup().verify(message2);
  };
  Type.prototype.fromObject = function fromObject(object2) {
    return this.setup().fromObject(object2);
  };
  Type.prototype.toObject = function toObject(message2, options) {
    return this.setup().toObject(message2, options);
  };
  Type.d = function decorateType(typeName) {
    return function typeDecorator(target) {
      util2.decorateType(target, typeName);
    };
  };
  return type;
}
var root;
var hasRequiredRoot;
function requireRoot() {
  if (hasRequiredRoot) return root;
  hasRequiredRoot = 1;
  root = Root;
  var Namespace = requireNamespace();
  ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
  var Field = requireField(), Enum = require_enum(), OneOf = requireOneof(), util2 = requireUtil$1();
  var Type, parse, common;
  function Root(options) {
    Namespace.call(this, "", options);
    this.deferred = [];
    this.files = [];
  }
  Root.fromJSON = function fromJSON(json, root2) {
    if (!root2)
      root2 = new Root();
    if (json.options)
      root2.setOptions(json.options);
    return root2.addJSON(json.nested);
  };
  Root.prototype.resolvePath = util2.path.resolve;
  Root.prototype.fetch = util2.fetch;
  function SYNC() {
  }
  Root.prototype.load = function load(filename, options, callback) {
    if (typeof options === "function") {
      callback = options;
      options = void 0;
    }
    var self2 = this;
    if (!callback)
      return util2.asPromise(load, self2, filename, options);
    var sync = callback === SYNC;
    function finish(err, root2) {
      if (!callback)
        return;
      if (sync)
        throw err;
      var cb = callback;
      callback = null;
      cb(err, root2);
    }
    function getBundledFileName(filename2) {
      var idx = filename2.lastIndexOf("google/protobuf/");
      if (idx > -1) {
        var altname = filename2.substring(idx);
        if (altname in common) return altname;
      }
      return null;
    }
    function process2(filename2, source) {
      try {
        if (util2.isString(source) && source.charAt(0) === "{")
          source = JSON.parse(source);
        if (!util2.isString(source))
          self2.setOptions(source.options).addJSON(source.nested);
        else {
          parse.filename = filename2;
          var parsed = parse(source, self2, options), resolved2, i2 = 0;
          if (parsed.imports) {
            for (; i2 < parsed.imports.length; ++i2)
              if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                fetch(resolved2);
          }
          if (parsed.weakImports) {
            for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
              if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                fetch(resolved2, true);
          }
        }
      } catch (err) {
        finish(err);
      }
      if (!sync && !queued)
        finish(null, self2);
    }
    function fetch(filename2, weak) {
      filename2 = getBundledFileName(filename2) || filename2;
      if (self2.files.indexOf(filename2) > -1)
        return;
      self2.files.push(filename2);
      if (filename2 in common) {
        if (sync)
          process2(filename2, common[filename2]);
        else {
          ++queued;
          setTimeout(function() {
            --queued;
            process2(filename2, common[filename2]);
          });
        }
        return;
      }
      if (sync) {
        var source;
        try {
          source = util2.fs.readFileSync(filename2).toString("utf8");
        } catch (err) {
          if (!weak)
            finish(err);
          return;
        }
        process2(filename2, source);
      } else {
        ++queued;
        self2.fetch(filename2, function(err, source2) {
          --queued;
          if (!callback)
            return;
          if (err) {
            if (!weak)
              finish(err);
            else if (!queued)
              finish(null, self2);
            return;
          }
          process2(filename2, source2);
        });
      }
    }
    var queued = 0;
    if (util2.isString(filename))
      filename = [filename];
    for (var i = 0, resolved; i < filename.length; ++i)
      if (resolved = self2.resolvePath("", filename[i]))
        fetch(resolved);
    if (sync)
      return self2;
    if (!queued)
      finish(null, self2);
    return void 0;
  };
  Root.prototype.loadSync = function loadSync(filename, options) {
    if (!util2.isNode)
      throw Error("not supported");
    return this.load(filename, options, SYNC);
  };
  Root.prototype.resolveAll = function resolveAll() {
    if (this.deferred.length)
      throw Error("unresolvable extensions: " + this.deferred.map(function(field2) {
        return "'extend " + field2.extend + "' in " + field2.parent.fullName;
      }).join(", "));
    return Namespace.prototype.resolveAll.call(this);
  };
  var exposeRe = /^[A-Z]/;
  function tryHandleExtension(root2, field2) {
    var extendedType = field2.parent.lookup(field2.extend);
    if (extendedType) {
      var sisterField = new Field(field2.fullName, field2.id, field2.type, field2.rule, void 0, field2.options);
      if (extendedType.get(sisterField.name)) {
        return true;
      }
      sisterField.declaringField = field2;
      field2.extensionField = sisterField;
      extendedType.add(sisterField);
      return true;
    }
    return false;
  }
  Root.prototype._handleAdd = function _handleAdd(object2) {
    if (object2 instanceof Field) {
      if (
        /* an extension field (implies not part of a oneof) */
        object2.extend !== void 0 && /* not already handled */
        !object2.extensionField
      ) {
        if (!tryHandleExtension(this, object2))
          this.deferred.push(object2);
      }
    } else if (object2 instanceof Enum) {
      if (exposeRe.test(object2.name))
        object2.parent[object2.name] = object2.values;
    } else if (!(object2 instanceof OneOf)) {
      if (object2 instanceof Type)
        for (var i = 0; i < this.deferred.length; )
          if (tryHandleExtension(this, this.deferred[i]))
            this.deferred.splice(i, 1);
          else
            ++i;
      for (var j = 0; j < /* initializes */
      object2.nestedArray.length; ++j)
        this._handleAdd(object2._nestedArray[j]);
      if (exposeRe.test(object2.name))
        object2.parent[object2.name] = object2;
    }
  };
  Root.prototype._handleRemove = function _handleRemove(object2) {
    if (object2 instanceof Field) {
      if (
        /* an extension field */
        object2.extend !== void 0
      ) {
        if (
          /* already handled */
          object2.extensionField
        ) {
          object2.extensionField.parent.remove(object2.extensionField);
          object2.extensionField = null;
        } else {
          var index = this.deferred.indexOf(object2);
          if (index > -1)
            this.deferred.splice(index, 1);
        }
      }
    } else if (object2 instanceof Enum) {
      if (exposeRe.test(object2.name))
        delete object2.parent[object2.name];
    } else if (object2 instanceof Namespace) {
      for (var i = 0; i < /* initializes */
      object2.nestedArray.length; ++i)
        this._handleRemove(object2._nestedArray[i]);
      if (exposeRe.test(object2.name))
        delete object2.parent[object2.name];
    }
  };
  Root._configure = function(Type_, parse_, common_) {
    Type = Type_;
    parse = parse_;
    common = common_;
  };
  return root;
}
var hasRequiredUtil$1;
function requireUtil$1() {
  if (hasRequiredUtil$1) return util$2.exports;
  hasRequiredUtil$1 = 1;
  var util2 = util$2.exports = requireMinimal();
  var roots2 = requireRoots();
  var Type, Enum;
  util2.codegen = requireCodegen();
  util2.fetch = requireFetch();
  util2.path = requirePath();
  util2.fs = util2.inquire("fs");
  util2.toArray = function toArray(object2) {
    if (object2) {
      var keys = Object.keys(object2), array = new Array(keys.length), index = 0;
      while (index < keys.length)
        array[index] = object2[keys[index++]];
      return array;
    }
    return [];
  };
  util2.toObject = function toObject(array) {
    var object2 = {}, index = 0;
    while (index < array.length) {
      var key = array[index++], val = array[index++];
      if (val !== void 0)
        object2[key] = val;
    }
    return object2;
  };
  var safePropBackslashRe = /\\/g, safePropQuoteRe = /"/g;
  util2.isReserved = function isReserved(name2) {
    return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(name2);
  };
  util2.safeProp = function safeProp(prop) {
    if (!/^[$\w_]+$/.test(prop) || util2.isReserved(prop))
      return '["' + prop.replace(safePropBackslashRe, "\\\\").replace(safePropQuoteRe, '\\"') + '"]';
    return "." + prop;
  };
  util2.ucFirst = function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  };
  var camelCaseRe = /_([a-z])/g;
  util2.camelCase = function camelCase(str) {
    return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
      return $1.toUpperCase();
    });
  };
  util2.compareFieldsById = function compareFieldsById(a, b) {
    return a.id - b.id;
  };
  util2.decorateType = function decorateType(ctor, typeName) {
    if (ctor.$type) {
      if (typeName && ctor.$type.name !== typeName) {
        util2.decorateRoot.remove(ctor.$type);
        ctor.$type.name = typeName;
        util2.decorateRoot.add(ctor.$type);
      }
      return ctor.$type;
    }
    if (!Type)
      Type = requireType();
    var type2 = new Type(typeName || ctor.name);
    util2.decorateRoot.add(type2);
    type2.ctor = ctor;
    Object.defineProperty(ctor, "$type", { value: type2, enumerable: false });
    Object.defineProperty(ctor.prototype, "$type", { value: type2, enumerable: false });
    return type2;
  };
  var decorateEnumIndex = 0;
  util2.decorateEnum = function decorateEnum(object2) {
    if (object2.$type)
      return object2.$type;
    if (!Enum)
      Enum = require_enum();
    var enm = new Enum("Enum" + decorateEnumIndex++, object2);
    util2.decorateRoot.add(enm);
    Object.defineProperty(object2, "$type", { value: enm, enumerable: false });
    return enm;
  };
  util2.setProperty = function setProperty(dst, path2, value) {
    function setProp(dst2, path3, value2) {
      var part = path3.shift();
      if (part === "__proto__" || part === "prototype") {
        return dst2;
      }
      if (path3.length > 0) {
        dst2[part] = setProp(dst2[part] || {}, path3, value2);
      } else {
        var prevValue = dst2[part];
        if (prevValue)
          value2 = [].concat(prevValue).concat(value2);
        dst2[part] = value2;
      }
      return dst2;
    }
    if (typeof dst !== "object")
      throw TypeError("dst must be an object");
    if (!path2)
      throw TypeError("path must be specified");
    path2 = path2.split(".");
    return setProp(dst, path2, value);
  };
  Object.defineProperty(util2, "decorateRoot", {
    get: function() {
      return roots2["decorated"] || (roots2["decorated"] = new (requireRoot())());
    }
  });
  return util$2.exports;
}
var object;
var hasRequiredObject;
function requireObject() {
  if (hasRequiredObject) return object;
  hasRequiredObject = 1;
  object = ReflectionObject;
  ReflectionObject.className = "ReflectionObject";
  var util2 = requireUtil$1();
  var Root;
  function ReflectionObject(name2, options) {
    if (!util2.isString(name2))
      throw TypeError("name must be a string");
    if (options && !util2.isObject(options))
      throw TypeError("options must be an object");
    this.options = options;
    this.parsedOptions = null;
    this.name = name2;
    this.parent = null;
    this.resolved = false;
    this.comment = null;
    this.filename = null;
  }
  Object.defineProperties(ReflectionObject.prototype, {
    /**
     * Reference to the root namespace.
     * @name ReflectionObject#root
     * @type {Root}
     * @readonly
     */
    root: {
      get: function() {
        var ptr = this;
        while (ptr.parent !== null)
          ptr = ptr.parent;
        return ptr;
      }
    },
    /**
     * Full name including leading dot.
     * @name ReflectionObject#fullName
     * @type {string}
     * @readonly
     */
    fullName: {
      get: function() {
        var path2 = [this.name], ptr = this.parent;
        while (ptr) {
          path2.unshift(ptr.name);
          ptr = ptr.parent;
        }
        return path2.join(".");
      }
    }
  });
  ReflectionObject.prototype.toJSON = /* istanbul ignore next */
  function toJSON() {
    throw Error();
  };
  ReflectionObject.prototype.onAdd = function onAdd(parent) {
    if (this.parent && this.parent !== parent)
      this.parent.remove(this);
    this.parent = parent;
    this.resolved = false;
    var root2 = parent.root;
    if (root2 instanceof Root)
      root2._handleAdd(this);
  };
  ReflectionObject.prototype.onRemove = function onRemove(parent) {
    var root2 = parent.root;
    if (root2 instanceof Root)
      root2._handleRemove(this);
    this.parent = null;
    this.resolved = false;
  };
  ReflectionObject.prototype.resolve = function resolve() {
    if (this.resolved)
      return this;
    if (this.root instanceof Root)
      this.resolved = true;
    return this;
  };
  ReflectionObject.prototype.getOption = function getOption(name2) {
    if (this.options)
      return this.options[name2];
    return void 0;
  };
  ReflectionObject.prototype.setOption = function setOption(name2, value, ifNotSet) {
    if (!ifNotSet || !this.options || this.options[name2] === void 0)
      (this.options || (this.options = {}))[name2] = value;
    return this;
  };
  ReflectionObject.prototype.setParsedOption = function setParsedOption(name2, value, propName) {
    if (!this.parsedOptions) {
      this.parsedOptions = [];
    }
    var parsedOptions = this.parsedOptions;
    if (propName) {
      var opt = parsedOptions.find(function(opt2) {
        return Object.prototype.hasOwnProperty.call(opt2, name2);
      });
      if (opt) {
        var newValue = opt[name2];
        util2.setProperty(newValue, propName, value);
      } else {
        opt = {};
        opt[name2] = util2.setProperty({}, propName, value);
        parsedOptions.push(opt);
      }
    } else {
      var newOpt = {};
      newOpt[name2] = value;
      parsedOptions.push(newOpt);
    }
    return this;
  };
  ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
    if (options)
      for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
        this.setOption(keys[i], options[keys[i]], ifNotSet);
    return this;
  };
  ReflectionObject.prototype.toString = function toString() {
    var className = this.constructor.className, fullName = this.fullName;
    if (fullName.length)
      return className + " " + fullName;
    return className;
  };
  ReflectionObject._configure = function(Root_) {
    Root = Root_;
  };
  return object;
}
var _enum;
var hasRequired_enum;
function require_enum() {
  if (hasRequired_enum) return _enum;
  hasRequired_enum = 1;
  _enum = Enum;
  var ReflectionObject = requireObject();
  ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
  var Namespace = requireNamespace(), util2 = requireUtil$1();
  function Enum(name2, values, options, comment, comments, valuesOptions) {
    ReflectionObject.call(this, name2, options);
    if (values && typeof values !== "object")
      throw TypeError("values must be an object");
    this.valuesById = {};
    this.values = Object.create(this.valuesById);
    this.comment = comment;
    this.comments = comments || {};
    this.valuesOptions = valuesOptions;
    this.reserved = void 0;
    if (values) {
      for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
        if (typeof values[keys[i]] === "number")
          this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
    }
  }
  Enum.fromJSON = function fromJSON(name2, json) {
    var enm = new Enum(name2, json.values, json.options, json.comment, json.comments);
    enm.reserved = json.reserved;
    return enm;
  };
  Enum.prototype.toJSON = function toJSON(toJSONOptions) {
    var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
    return util2.toObject([
      "options",
      this.options,
      "valuesOptions",
      this.valuesOptions,
      "values",
      this.values,
      "reserved",
      this.reserved && this.reserved.length ? this.reserved : void 0,
      "comment",
      keepComments ? this.comment : void 0,
      "comments",
      keepComments ? this.comments : void 0
    ]);
  };
  Enum.prototype.add = function add(name2, id, comment, options) {
    if (!util2.isString(name2))
      throw TypeError("name must be a string");
    if (!util2.isInteger(id))
      throw TypeError("id must be an integer");
    if (this.values[name2] !== void 0)
      throw Error("duplicate name '" + name2 + "' in " + this);
    if (this.isReservedId(id))
      throw Error("id " + id + " is reserved in " + this);
    if (this.isReservedName(name2))
      throw Error("name '" + name2 + "' is reserved in " + this);
    if (this.valuesById[id] !== void 0) {
      if (!(this.options && this.options.allow_alias))
        throw Error("duplicate id " + id + " in " + this);
      this.values[name2] = id;
    } else
      this.valuesById[this.values[name2] = id] = name2;
    if (options) {
      if (this.valuesOptions === void 0)
        this.valuesOptions = {};
      this.valuesOptions[name2] = options || null;
    }
    this.comments[name2] = comment || null;
    return this;
  };
  Enum.prototype.remove = function remove(name2) {
    if (!util2.isString(name2))
      throw TypeError("name must be a string");
    var val = this.values[name2];
    if (val == null)
      throw Error("name '" + name2 + "' does not exist in " + this);
    delete this.valuesById[val];
    delete this.values[name2];
    delete this.comments[name2];
    if (this.valuesOptions)
      delete this.valuesOptions[name2];
    return this;
  };
  Enum.prototype.isReservedId = function isReservedId(id) {
    return Namespace.isReservedId(this.reserved, id);
  };
  Enum.prototype.isReservedName = function isReservedName(name2) {
    return Namespace.isReservedName(this.reserved, name2);
  };
  return _enum;
}
var encoder_1;
var hasRequiredEncoder;
function requireEncoder() {
  if (hasRequiredEncoder) return encoder_1;
  hasRequiredEncoder = 1;
  encoder_1 = encoder;
  var Enum = require_enum(), types2 = requireTypes(), util2 = requireUtil$1();
  function genTypePartial(gen, field2, fieldIndex, ref) {
    return field2.resolvedType.group ? gen("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", fieldIndex, ref, (field2.id << 3 | 3) >>> 0, (field2.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", fieldIndex, ref, (field2.id << 3 | 2) >>> 0);
  }
  function encoder(mtype) {
    var gen = util2.codegen(["m", "w"], mtype.name + "$encode")("if(!w)")("w=Writer.create()");
    var i, ref;
    var fields = (
      /* initializes */
      mtype.fieldsArray.slice().sort(util2.compareFieldsById)
    );
    for (var i = 0; i < fields.length; ++i) {
      var field2 = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field2), type2 = field2.resolvedType instanceof Enum ? "int32" : field2.type, wireType = types2.basic[type2];
      ref = "m" + util2.safeProp(field2.name);
      if (field2.map) {
        gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field2.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field2.id << 3 | 2) >>> 0, 8 | types2.mapKey[field2.keyType], field2.keyType);
        if (wireType === void 0) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", index, ref);
        else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type2, ref);
        gen("}")("}");
      } else if (field2.repeated) {
        gen("if(%s!=null&&%s.length){", ref, ref);
        if (field2.packed && types2.packed[type2] !== void 0) {
          gen("w.uint32(%i).fork()", (field2.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type2, ref)("w.ldelim()");
        } else {
          gen("for(var i=0;i<%s.length;++i)", ref);
          if (wireType === void 0)
            genTypePartial(gen, field2, index, ref + "[i]");
          else gen("w.uint32(%i).%s(%s[i])", (field2.id << 3 | wireType) >>> 0, type2, ref);
        }
        gen("}");
      } else {
        if (field2.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field2.name);
        if (wireType === void 0)
          genTypePartial(gen, field2, index, ref);
        else gen("w.uint32(%i).%s(%s)", (field2.id << 3 | wireType) >>> 0, type2, ref);
      }
    }
    return gen("return w");
  }
  return encoder_1;
}
var hasRequiredIndexLight;
function requireIndexLight() {
  if (hasRequiredIndexLight) return indexLight.exports;
  hasRequiredIndexLight = 1;
  var protobuf = indexLight.exports = requireIndexMinimal();
  protobuf.build = "light";
  function load(filename, root2, callback) {
    if (typeof root2 === "function") {
      callback = root2;
      root2 = new protobuf.Root();
    } else if (!root2)
      root2 = new protobuf.Root();
    return root2.load(filename, callback);
  }
  protobuf.load = load;
  function loadSync(filename, root2) {
    if (!root2)
      root2 = new protobuf.Root();
    return root2.loadSync(filename);
  }
  protobuf.loadSync = loadSync;
  protobuf.encoder = requireEncoder();
  protobuf.decoder = requireDecoder();
  protobuf.verifier = requireVerifier();
  protobuf.converter = requireConverter();
  protobuf.ReflectionObject = requireObject();
  protobuf.Namespace = requireNamespace();
  protobuf.Root = requireRoot();
  protobuf.Enum = require_enum();
  protobuf.Type = requireType();
  protobuf.Field = requireField();
  protobuf.OneOf = requireOneof();
  protobuf.MapField = requireMapfield();
  protobuf.Service = requireService();
  protobuf.Method = requireMethod();
  protobuf.Message = requireMessage();
  protobuf.wrappers = requireWrappers();
  protobuf.types = requireTypes();
  protobuf.util = requireUtil$1();
  protobuf.ReflectionObject._configure(protobuf.Root);
  protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
  protobuf.Root._configure(protobuf.Type);
  protobuf.Field._configure(protobuf.Type);
  return indexLight.exports;
}
var tokenize_1;
var hasRequiredTokenize;
function requireTokenize() {
  if (hasRequiredTokenize) return tokenize_1;
  hasRequiredTokenize = 1;
  tokenize_1 = tokenize;
  var delimRe = /[\s{}=;:[\],'"()<>]/g, stringDoubleRe = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, stringSingleRe = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
  var setCommentRe = /^ *[*/]+ */, setCommentAltRe = /^\s*\*?\/*/, setCommentSplitRe = /\n/g, whitespaceRe = /\s/, unescapeRe = /\\(.?)/g;
  var unescapeMap = {
    "0": "\0",
    "r": "\r",
    "n": "\n",
    "t": "	"
  };
  function unescape(str) {
    return str.replace(unescapeRe, function($0, $1) {
      switch ($1) {
        case "\\":
        case "":
          return $1;
        default:
          return unescapeMap[$1] || "";
      }
    });
  }
  tokenize.unescape = unescape;
  function tokenize(source, alternateCommentMode) {
    source = source.toString();
    var offset = 0, length = source.length, line = 1, lastCommentLine = 0, comments = {};
    var stack = [];
    var stringDelim = null;
    function illegal(subject) {
      return Error("illegal " + subject + " (line " + line + ")");
    }
    function readString() {
      var re = stringDelim === "'" ? stringSingleRe : stringDoubleRe;
      re.lastIndex = offset - 1;
      var match = re.exec(source);
      if (!match)
        throw illegal("string");
      offset = re.lastIndex;
      push(stringDelim);
      stringDelim = null;
      return unescape(match[1]);
    }
    function charAt(pos) {
      return source.charAt(pos);
    }
    function setComment(start, end, isLeading) {
      var comment = {
        type: source.charAt(start++),
        lineEmpty: false,
        leading: isLeading
      };
      var lookback;
      if (alternateCommentMode) {
        lookback = 2;
      } else {
        lookback = 3;
      }
      var commentOffset = start - lookback, c;
      do {
        if (--commentOffset < 0 || (c = source.charAt(commentOffset)) === "\n") {
          comment.lineEmpty = true;
          break;
        }
      } while (c === " " || c === "	");
      var lines = source.substring(start, end).split(setCommentSplitRe);
      for (var i = 0; i < lines.length; ++i)
        lines[i] = lines[i].replace(alternateCommentMode ? setCommentAltRe : setCommentRe, "").trim();
      comment.text = lines.join("\n").trim();
      comments[line] = comment;
      lastCommentLine = line;
    }
    function isDoubleSlashCommentLine(startOffset) {
      var endOffset = findEndOfLine(startOffset);
      var lineText = source.substring(startOffset, endOffset);
      var isComment = /^\s*\/\//.test(lineText);
      return isComment;
    }
    function findEndOfLine(cursor) {
      var endOffset = cursor;
      while (endOffset < length && charAt(endOffset) !== "\n") {
        endOffset++;
      }
      return endOffset;
    }
    function next() {
      if (stack.length > 0)
        return stack.shift();
      if (stringDelim)
        return readString();
      var repeat, prev, curr, start, isDoc, isLeadingComment = offset === 0;
      do {
        if (offset === length)
          return null;
        repeat = false;
        while (whitespaceRe.test(curr = charAt(offset))) {
          if (curr === "\n") {
            isLeadingComment = true;
            ++line;
          }
          if (++offset === length)
            return null;
        }
        if (charAt(offset) === "/") {
          if (++offset === length) {
            throw illegal("comment");
          }
          if (charAt(offset) === "/") {
            if (!alternateCommentMode) {
              isDoc = charAt(start = offset + 1) === "/";
              while (charAt(++offset) !== "\n") {
                if (offset === length) {
                  return null;
                }
              }
              ++offset;
              if (isDoc) {
                setComment(start, offset - 1, isLeadingComment);
                isLeadingComment = true;
              }
              ++line;
              repeat = true;
            } else {
              start = offset;
              isDoc = false;
              if (isDoubleSlashCommentLine(offset - 1)) {
                isDoc = true;
                do {
                  offset = findEndOfLine(offset);
                  if (offset === length) {
                    break;
                  }
                  offset++;
                  if (!isLeadingComment) {
                    break;
                  }
                } while (isDoubleSlashCommentLine(offset));
              } else {
                offset = Math.min(length, findEndOfLine(offset) + 1);
              }
              if (isDoc) {
                setComment(start, offset, isLeadingComment);
                isLeadingComment = true;
              }
              line++;
              repeat = true;
            }
          } else if ((curr = charAt(offset)) === "*") {
            start = offset + 1;
            isDoc = alternateCommentMode || charAt(start) === "*";
            do {
              if (curr === "\n") {
                ++line;
              }
              if (++offset === length) {
                throw illegal("comment");
              }
              prev = curr;
              curr = charAt(offset);
            } while (prev !== "*" || curr !== "/");
            ++offset;
            if (isDoc) {
              setComment(start, offset - 2, isLeadingComment);
              isLeadingComment = true;
            }
            repeat = true;
          } else {
            return "/";
          }
        }
      } while (repeat);
      var end = offset;
      delimRe.lastIndex = 0;
      var delim = delimRe.test(charAt(end++));
      if (!delim)
        while (end < length && !delimRe.test(charAt(end)))
          ++end;
      var token = source.substring(offset, offset = end);
      if (token === '"' || token === "'")
        stringDelim = token;
      return token;
    }
    function push(token) {
      stack.push(token);
    }
    function peek() {
      if (!stack.length) {
        var token = next();
        if (token === null)
          return null;
        push(token);
      }
      return stack[0];
    }
    function skip(expected, optional) {
      var actual = peek(), equals = actual === expected;
      if (equals) {
        next();
        return true;
      }
      if (!optional)
        throw illegal("token '" + actual + "', '" + expected + "' expected");
      return false;
    }
    function cmnt(trailingLine) {
      var ret = null;
      var comment;
      if (trailingLine === void 0) {
        comment = comments[line - 1];
        delete comments[line - 1];
        if (comment && (alternateCommentMode || comment.type === "*" || comment.lineEmpty)) {
          ret = comment.leading ? comment.text : null;
        }
      } else {
        if (lastCommentLine < trailingLine) {
          peek();
        }
        comment = comments[trailingLine];
        delete comments[trailingLine];
        if (comment && !comment.lineEmpty && (alternateCommentMode || comment.type === "/")) {
          ret = comment.leading ? null : comment.text;
        }
      }
      return ret;
    }
    return Object.defineProperty({
      next,
      peek,
      push,
      skip,
      cmnt
    }, "line", {
      get: function() {
        return line;
      }
    });
  }
  return tokenize_1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  parse_1 = parse;
  parse.filename = null;
  parse.defaults = { keepCase: false };
  var tokenize = requireTokenize(), Root = requireRoot(), Type = requireType(), Field = requireField(), MapField = requireMapfield(), OneOf = requireOneof(), Enum = require_enum(), Service = requireService(), Method = requireMethod(), types2 = requireTypes(), util2 = requireUtil$1();
  var base10Re = /^[1-9][0-9]*$/, base10NegRe = /^-?[1-9][0-9]*$/, base16Re = /^0[x][0-9a-fA-F]+$/, base16NegRe = /^-?0[x][0-9a-fA-F]+$/, base8Re = /^0[0-7]+$/, base8NegRe = /^-?0[0-7]+$/, numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, nameRe = /^[a-zA-Z_][a-zA-Z_0-9]*$/, typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, fqTypeRefRe = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
  function parse(source, root2, options) {
    if (!(root2 instanceof Root)) {
      options = root2;
      root2 = new Root();
    }
    if (!options)
      options = parse.defaults;
    var preferTrailingComment = options.preferTrailingComment || false;
    var tn = tokenize(source, options.alternateCommentMode || false), next = tn.next, push = tn.push, peek = tn.peek, skip = tn.skip, cmnt = tn.cmnt;
    var head = true, pkg, imports, weakImports, syntax, isProto3 = false;
    var ptr = root2;
    var applyCase = options.keepCase ? function(name2) {
      return name2;
    } : util2.camelCase;
    function illegal(token2, name2, insideTryCatch) {
      var filename = parse.filename;
      if (!insideTryCatch)
        parse.filename = null;
      return Error("illegal " + (name2 || "token") + " '" + token2 + "' (" + (filename ? filename + ", " : "") + "line " + tn.line + ")");
    }
    function readString() {
      var values = [], token2;
      do {
        if ((token2 = next()) !== '"' && token2 !== "'")
          throw illegal(token2);
        values.push(next());
        skip(token2);
        token2 = peek();
      } while (token2 === '"' || token2 === "'");
      return values.join("");
    }
    function readValue(acceptTypeRef) {
      var token2 = next();
      switch (token2) {
        case "'":
        case '"':
          push(token2);
          return readString();
        case "true":
        case "TRUE":
          return true;
        case "false":
        case "FALSE":
          return false;
      }
      try {
        return parseNumber(
          token2,
          /* insideTryCatch */
          true
        );
      } catch (e) {
        if (typeRefRe.test(token2))
          return token2;
        throw illegal(token2, "value");
      }
    }
    function readRanges(target, acceptStrings) {
      var token2, start;
      do {
        if (acceptStrings && ((token2 = peek()) === '"' || token2 === "'"))
          target.push(readString());
        else
          target.push([start = parseId(next()), skip("to", true) ? parseId(next()) : start]);
      } while (skip(",", true));
      var dummy = { options: void 0 };
      dummy.setOption = function(name2, value) {
        if (this.options === void 0) this.options = {};
        this.options[name2] = value;
      };
      ifBlock(
        dummy,
        function parseRange_block(token3) {
          if (token3 === "option") {
            parseOption(dummy, token3);
            skip(";");
          } else
            throw illegal(token3);
        },
        function parseRange_line() {
          parseInlineOptions(dummy);
        }
      );
    }
    function parseNumber(token2, insideTryCatch) {
      var sign = 1;
      if (token2.charAt(0) === "-") {
        sign = -1;
        token2 = token2.substring(1);
      }
      switch (token2) {
        case "inf":
        case "INF":
        case "Inf":
          return sign * Infinity;
        case "nan":
        case "NAN":
        case "Nan":
        case "NaN":
          return NaN;
        case "0":
          return 0;
      }
      if (base10Re.test(token2))
        return sign * parseInt(token2, 10);
      if (base16Re.test(token2))
        return sign * parseInt(token2, 16);
      if (base8Re.test(token2))
        return sign * parseInt(token2, 8);
      if (numberRe.test(token2))
        return sign * parseFloat(token2);
      throw illegal(token2, "number", insideTryCatch);
    }
    function parseId(token2, acceptNegative) {
      switch (token2) {
        case "max":
        case "MAX":
        case "Max":
          return 536870911;
        case "0":
          return 0;
      }
      if (!acceptNegative && token2.charAt(0) === "-")
        throw illegal(token2, "id");
      if (base10NegRe.test(token2))
        return parseInt(token2, 10);
      if (base16NegRe.test(token2))
        return parseInt(token2, 16);
      if (base8NegRe.test(token2))
        return parseInt(token2, 8);
      throw illegal(token2, "id");
    }
    function parsePackage() {
      if (pkg !== void 0)
        throw illegal("package");
      pkg = next();
      if (!typeRefRe.test(pkg))
        throw illegal(pkg, "name");
      ptr = ptr.define(pkg);
      skip(";");
    }
    function parseImport() {
      var token2 = peek();
      var whichImports;
      switch (token2) {
        case "weak":
          whichImports = weakImports || (weakImports = []);
          next();
          break;
        case "public":
          next();
        default:
          whichImports = imports || (imports = []);
          break;
      }
      token2 = readString();
      skip(";");
      whichImports.push(token2);
    }
    function parseSyntax() {
      skip("=");
      syntax = readString();
      isProto3 = syntax === "proto3";
      if (!isProto3 && syntax !== "proto2")
        throw illegal(syntax, "syntax");
      root2.setOption("syntax", syntax);
      skip(";");
    }
    function parseCommon(parent, token2) {
      switch (token2) {
        case "option":
          parseOption(parent, token2);
          skip(";");
          return true;
        case "message":
          parseType(parent, token2);
          return true;
        case "enum":
          parseEnum(parent, token2);
          return true;
        case "service":
          parseService(parent, token2);
          return true;
        case "extend":
          parseExtension(parent, token2);
          return true;
      }
      return false;
    }
    function ifBlock(obj, fnIf, fnElse) {
      var trailingLine = tn.line;
      if (obj) {
        if (typeof obj.comment !== "string") {
          obj.comment = cmnt();
        }
        obj.filename = parse.filename;
      }
      if (skip("{", true)) {
        var token2;
        while ((token2 = next()) !== "}")
          fnIf(token2);
        skip(";", true);
      } else {
        if (fnElse)
          fnElse();
        skip(";");
        if (obj && (typeof obj.comment !== "string" || preferTrailingComment))
          obj.comment = cmnt(trailingLine) || obj.comment;
      }
    }
    function parseType(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "type name");
      var type2 = new Type(token2);
      ifBlock(type2, function parseType_block(token3) {
        if (parseCommon(type2, token3))
          return;
        switch (token3) {
          case "map":
            parseMapField(type2);
            break;
          case "required":
          case "repeated":
            parseField(type2, token3);
            break;
          case "optional":
            if (isProto3) {
              parseField(type2, "proto3_optional");
            } else {
              parseField(type2, "optional");
            }
            break;
          case "oneof":
            parseOneOf(type2, token3);
            break;
          case "extensions":
            readRanges(type2.extensions || (type2.extensions = []));
            break;
          case "reserved":
            readRanges(type2.reserved || (type2.reserved = []), true);
            break;
          default:
            if (!isProto3 || !typeRefRe.test(token3))
              throw illegal(token3);
            push(token3);
            parseField(type2, "optional");
            break;
        }
      });
      parent.add(type2);
    }
    function parseField(parent, rule, extend) {
      var type2 = next();
      if (type2 === "group") {
        parseGroup(parent, rule);
        return;
      }
      while (type2.endsWith(".") || peek().startsWith(".")) {
        type2 += next();
      }
      if (!typeRefRe.test(type2))
        throw illegal(type2, "type");
      var name2 = next();
      if (!nameRe.test(name2))
        throw illegal(name2, "name");
      name2 = applyCase(name2);
      skip("=");
      var field2 = new Field(name2, parseId(next()), type2, rule, extend);
      ifBlock(field2, function parseField_block(token2) {
        if (token2 === "option") {
          parseOption(field2, token2);
          skip(";");
        } else
          throw illegal(token2);
      }, function parseField_line() {
        parseInlineOptions(field2);
      });
      if (rule === "proto3_optional") {
        var oneof2 = new OneOf("_" + name2);
        field2.setOption("proto3_optional", true);
        oneof2.add(field2);
        parent.add(oneof2);
      } else {
        parent.add(field2);
      }
      if (!isProto3 && field2.repeated && (types2.packed[type2] !== void 0 || types2.basic[type2] === void 0))
        field2.setOption(
          "packed",
          false,
          /* ifNotSet */
          true
        );
    }
    function parseGroup(parent, rule) {
      var name2 = next();
      if (!nameRe.test(name2))
        throw illegal(name2, "name");
      var fieldName = util2.lcFirst(name2);
      if (name2 === fieldName)
        name2 = util2.ucFirst(name2);
      skip("=");
      var id = parseId(next());
      var type2 = new Type(name2);
      type2.group = true;
      var field2 = new Field(fieldName, id, name2, rule);
      field2.filename = parse.filename;
      ifBlock(type2, function parseGroup_block(token2) {
        switch (token2) {
          case "option":
            parseOption(type2, token2);
            skip(";");
            break;
          case "required":
          case "repeated":
            parseField(type2, token2);
            break;
          case "optional":
            if (isProto3) {
              parseField(type2, "proto3_optional");
            } else {
              parseField(type2, "optional");
            }
            break;
          case "message":
            parseType(type2, token2);
            break;
          case "enum":
            parseEnum(type2, token2);
            break;
          default:
            throw illegal(token2);
        }
      });
      parent.add(type2).add(field2);
    }
    function parseMapField(parent) {
      skip("<");
      var keyType = next();
      if (types2.mapKey[keyType] === void 0)
        throw illegal(keyType, "type");
      skip(",");
      var valueType = next();
      if (!typeRefRe.test(valueType))
        throw illegal(valueType, "type");
      skip(">");
      var name2 = next();
      if (!nameRe.test(name2))
        throw illegal(name2, "name");
      skip("=");
      var field2 = new MapField(applyCase(name2), parseId(next()), keyType, valueType);
      ifBlock(field2, function parseMapField_block(token2) {
        if (token2 === "option") {
          parseOption(field2, token2);
          skip(";");
        } else
          throw illegal(token2);
      }, function parseMapField_line() {
        parseInlineOptions(field2);
      });
      parent.add(field2);
    }
    function parseOneOf(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var oneof2 = new OneOf(applyCase(token2));
      ifBlock(oneof2, function parseOneOf_block(token3) {
        if (token3 === "option") {
          parseOption(oneof2, token3);
          skip(";");
        } else {
          push(token3);
          parseField(oneof2, "optional");
        }
      });
      parent.add(oneof2);
    }
    function parseEnum(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var enm = new Enum(token2);
      ifBlock(enm, function parseEnum_block(token3) {
        switch (token3) {
          case "option":
            parseOption(enm, token3);
            skip(";");
            break;
          case "reserved":
            readRanges(enm.reserved || (enm.reserved = []), true);
            break;
          default:
            parseEnumValue(enm, token3);
        }
      });
      parent.add(enm);
    }
    function parseEnumValue(parent, token2) {
      if (!nameRe.test(token2))
        throw illegal(token2, "name");
      skip("=");
      var value = parseId(next(), true), dummy = {
        options: void 0
      };
      dummy.setOption = function(name2, value2) {
        if (this.options === void 0)
          this.options = {};
        this.options[name2] = value2;
      };
      ifBlock(dummy, function parseEnumValue_block(token3) {
        if (token3 === "option") {
          parseOption(dummy, token3);
          skip(";");
        } else
          throw illegal(token3);
      }, function parseEnumValue_line() {
        parseInlineOptions(dummy);
      });
      parent.add(token2, value, dummy.comment, dummy.options);
    }
    function parseOption(parent, token2) {
      var isCustom = skip("(", true);
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2, "name");
      var name2 = token2;
      var option = name2;
      var propName;
      if (isCustom) {
        skip(")");
        name2 = "(" + name2 + ")";
        option = name2;
        token2 = peek();
        if (fqTypeRefRe.test(token2)) {
          propName = token2.slice(1);
          name2 += token2;
          next();
        }
      }
      skip("=");
      var optionValue = parseOptionValue(parent, name2);
      setParsedOption(parent, option, optionValue, propName);
    }
    function parseOptionValue(parent, name2) {
      if (skip("{", true)) {
        var objectResult = {};
        while (!skip("}", true)) {
          if (!nameRe.test(token = next())) {
            throw illegal(token, "name");
          }
          if (token === null) {
            throw illegal(token, "end of input");
          }
          var value;
          var propName = token;
          skip(":", true);
          if (peek() === "{")
            value = parseOptionValue(parent, name2 + "." + token);
          else if (peek() === "[") {
            value = [];
            var lastValue;
            if (skip("[", true)) {
              do {
                lastValue = readValue();
                value.push(lastValue);
              } while (skip(",", true));
              skip("]");
              if (typeof lastValue !== "undefined") {
                setOption(parent, name2 + "." + token, lastValue);
              }
            }
          } else {
            value = readValue();
            setOption(parent, name2 + "." + token, value);
          }
          var prevValue = objectResult[propName];
          if (prevValue)
            value = [].concat(prevValue).concat(value);
          objectResult[propName] = value;
          skip(",", true);
          skip(";", true);
        }
        return objectResult;
      }
      var simpleValue = readValue();
      setOption(parent, name2, simpleValue);
      return simpleValue;
    }
    function setOption(parent, name2, value) {
      if (parent.setOption)
        parent.setOption(name2, value);
    }
    function setParsedOption(parent, name2, value, propName) {
      if (parent.setParsedOption)
        parent.setParsedOption(name2, value, propName);
    }
    function parseInlineOptions(parent) {
      if (skip("[", true)) {
        do {
          parseOption(parent, "option");
        } while (skip(",", true));
        skip("]");
      }
      return parent;
    }
    function parseService(parent, token2) {
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "service name");
      var service2 = new Service(token2);
      ifBlock(service2, function parseService_block(token3) {
        if (parseCommon(service2, token3))
          return;
        if (token3 === "rpc")
          parseMethod(service2, token3);
        else
          throw illegal(token3);
      });
      parent.add(service2);
    }
    function parseMethod(parent, token2) {
      var commentText = cmnt();
      var type2 = token2;
      if (!nameRe.test(token2 = next()))
        throw illegal(token2, "name");
      var name2 = token2, requestType, requestStream, responseType, responseStream;
      skip("(");
      if (skip("stream", true))
        requestStream = true;
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2);
      requestType = token2;
      skip(")");
      skip("returns");
      skip("(");
      if (skip("stream", true))
        responseStream = true;
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2);
      responseType = token2;
      skip(")");
      var method2 = new Method(name2, type2, requestType, responseType, requestStream, responseStream);
      method2.comment = commentText;
      ifBlock(method2, function parseMethod_block(token3) {
        if (token3 === "option") {
          parseOption(method2, token3);
          skip(";");
        } else
          throw illegal(token3);
      });
      parent.add(method2);
    }
    function parseExtension(parent, token2) {
      if (!typeRefRe.test(token2 = next()))
        throw illegal(token2, "reference");
      var reference = token2;
      ifBlock(null, function parseExtension_block(token3) {
        switch (token3) {
          case "required":
          case "repeated":
            parseField(parent, token3, reference);
            break;
          case "optional":
            if (isProto3) {
              parseField(parent, "proto3_optional", reference);
            } else {
              parseField(parent, "optional", reference);
            }
            break;
          default:
            if (!isProto3 || !typeRefRe.test(token3))
              throw illegal(token3);
            push(token3);
            parseField(parent, "optional", reference);
            break;
        }
      });
    }
    var token;
    while ((token = next()) !== null) {
      switch (token) {
        case "package":
          if (!head)
            throw illegal(token);
          parsePackage();
          break;
        case "import":
          if (!head)
            throw illegal(token);
          parseImport();
          break;
        case "syntax":
          if (!head)
            throw illegal(token);
          parseSyntax();
          break;
        case "option":
          parseOption(ptr, token);
          skip(";");
          break;
        default:
          if (parseCommon(ptr, token)) {
            head = false;
            continue;
          }
          throw illegal(token);
      }
    }
    parse.filename = null;
    return {
      "package": pkg,
      "imports": imports,
      weakImports,
      syntax,
      root: root2
    };
  }
  return parse_1;
}
var common_1;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common_1;
  hasRequiredCommon = 1;
  common_1 = common;
  var commonRe = /\/|\./;
  function common(name2, json) {
    if (!commonRe.test(name2)) {
      name2 = "google/protobuf/" + name2 + ".proto";
      json = { nested: { google: { nested: { protobuf: { nested: json } } } } };
    }
    common[name2] = json;
  }
  common("any", {
    /**
     * Properties of a google.protobuf.Any message.
     * @interface IAny
     * @type {Object}
     * @property {string} [typeUrl]
     * @property {Uint8Array} [bytes]
     * @memberof common
     */
    Any: {
      fields: {
        type_url: {
          type: "string",
          id: 1
        },
        value: {
          type: "bytes",
          id: 2
        }
      }
    }
  });
  var timeType;
  common("duration", {
    /**
     * Properties of a google.protobuf.Duration message.
     * @interface IDuration
     * @type {Object}
     * @property {number|Long} [seconds]
     * @property {number} [nanos]
     * @memberof common
     */
    Duration: timeType = {
      fields: {
        seconds: {
          type: "int64",
          id: 1
        },
        nanos: {
          type: "int32",
          id: 2
        }
      }
    }
  });
  common("timestamp", {
    /**
     * Properties of a google.protobuf.Timestamp message.
     * @interface ITimestamp
     * @type {Object}
     * @property {number|Long} [seconds]
     * @property {number} [nanos]
     * @memberof common
     */
    Timestamp: timeType
  });
  common("empty", {
    /**
     * Properties of a google.protobuf.Empty message.
     * @interface IEmpty
     * @memberof common
     */
    Empty: {
      fields: {}
    }
  });
  common("struct", {
    /**
     * Properties of a google.protobuf.Struct message.
     * @interface IStruct
     * @type {Object}
     * @property {Object.<string,IValue>} [fields]
     * @memberof common
     */
    Struct: {
      fields: {
        fields: {
          keyType: "string",
          type: "Value",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.Value message.
     * @interface IValue
     * @type {Object}
     * @property {string} [kind]
     * @property {0} [nullValue]
     * @property {number} [numberValue]
     * @property {string} [stringValue]
     * @property {boolean} [boolValue]
     * @property {IStruct} [structValue]
     * @property {IListValue} [listValue]
     * @memberof common
     */
    Value: {
      oneofs: {
        kind: {
          oneof: [
            "nullValue",
            "numberValue",
            "stringValue",
            "boolValue",
            "structValue",
            "listValue"
          ]
        }
      },
      fields: {
        nullValue: {
          type: "NullValue",
          id: 1
        },
        numberValue: {
          type: "double",
          id: 2
        },
        stringValue: {
          type: "string",
          id: 3
        },
        boolValue: {
          type: "bool",
          id: 4
        },
        structValue: {
          type: "Struct",
          id: 5
        },
        listValue: {
          type: "ListValue",
          id: 6
        }
      }
    },
    NullValue: {
      values: {
        NULL_VALUE: 0
      }
    },
    /**
     * Properties of a google.protobuf.ListValue message.
     * @interface IListValue
     * @type {Object}
     * @property {Array.<IValue>} [values]
     * @memberof common
     */
    ListValue: {
      fields: {
        values: {
          rule: "repeated",
          type: "Value",
          id: 1
        }
      }
    }
  });
  common("wrappers", {
    /**
     * Properties of a google.protobuf.DoubleValue message.
     * @interface IDoubleValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    DoubleValue: {
      fields: {
        value: {
          type: "double",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.FloatValue message.
     * @interface IFloatValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    FloatValue: {
      fields: {
        value: {
          type: "float",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.Int64Value message.
     * @interface IInt64Value
     * @type {Object}
     * @property {number|Long} [value]
     * @memberof common
     */
    Int64Value: {
      fields: {
        value: {
          type: "int64",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.UInt64Value message.
     * @interface IUInt64Value
     * @type {Object}
     * @property {number|Long} [value]
     * @memberof common
     */
    UInt64Value: {
      fields: {
        value: {
          type: "uint64",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.Int32Value message.
     * @interface IInt32Value
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    Int32Value: {
      fields: {
        value: {
          type: "int32",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.UInt32Value message.
     * @interface IUInt32Value
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    UInt32Value: {
      fields: {
        value: {
          type: "uint32",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.BoolValue message.
     * @interface IBoolValue
     * @type {Object}
     * @property {boolean} [value]
     * @memberof common
     */
    BoolValue: {
      fields: {
        value: {
          type: "bool",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.StringValue message.
     * @interface IStringValue
     * @type {Object}
     * @property {string} [value]
     * @memberof common
     */
    StringValue: {
      fields: {
        value: {
          type: "string",
          id: 1
        }
      }
    },
    /**
     * Properties of a google.protobuf.BytesValue message.
     * @interface IBytesValue
     * @type {Object}
     * @property {Uint8Array} [value]
     * @memberof common
     */
    BytesValue: {
      fields: {
        value: {
          type: "bytes",
          id: 1
        }
      }
    }
  });
  common("field_mask", {
    /**
     * Properties of a google.protobuf.FieldMask message.
     * @interface IDoubleValue
     * @type {Object}
     * @property {number} [value]
     * @memberof common
     */
    FieldMask: {
      fields: {
        paths: {
          rule: "repeated",
          type: "string",
          id: 1
        }
      }
    }
  });
  common.get = function get(file) {
    return common[file] || null;
  };
  return common_1;
}
var hasRequiredSrc$1;
function requireSrc$1() {
  if (hasRequiredSrc$1) return src.exports;
  hasRequiredSrc$1 = 1;
  var protobuf = src.exports = requireIndexLight();
  protobuf.build = "full";
  protobuf.tokenize = requireTokenize();
  protobuf.parse = requireParse();
  protobuf.common = requireCommon();
  protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common);
  return src.exports;
}
var protobufjs;
var hasRequiredProtobufjs;
function requireProtobufjs() {
  if (hasRequiredProtobufjs) return protobufjs;
  hasRequiredProtobufjs = 1;
  protobufjs = requireSrc$1();
  return protobufjs;
}
var descriptor = { exports: {} };
const nested$3 = {
  google: {
    nested: {
      protobuf: {
        nested: {
          FileDescriptorSet: {
            fields: {
              file: {
                rule: "repeated",
                type: "FileDescriptorProto",
                id: 1
              }
            }
          },
          FileDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              "package": {
                type: "string",
                id: 2
              },
              dependency: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              publicDependency: {
                rule: "repeated",
                type: "int32",
                id: 10,
                options: {
                  packed: false
                }
              },
              weakDependency: {
                rule: "repeated",
                type: "int32",
                id: 11,
                options: {
                  packed: false
                }
              },
              messageType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 4
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 5
              },
              service: {
                rule: "repeated",
                type: "ServiceDescriptorProto",
                id: 6
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 7
              },
              options: {
                type: "FileOptions",
                id: 8
              },
              sourceCodeInfo: {
                type: "SourceCodeInfo",
                id: 9
              },
              syntax: {
                type: "string",
                id: 12
              }
            }
          },
          DescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              field: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 2
              },
              extension: {
                rule: "repeated",
                type: "FieldDescriptorProto",
                id: 6
              },
              nestedType: {
                rule: "repeated",
                type: "DescriptorProto",
                id: 3
              },
              enumType: {
                rule: "repeated",
                type: "EnumDescriptorProto",
                id: 4
              },
              extensionRange: {
                rule: "repeated",
                type: "ExtensionRange",
                id: 5
              },
              oneofDecl: {
                rule: "repeated",
                type: "OneofDescriptorProto",
                id: 8
              },
              options: {
                type: "MessageOptions",
                id: 7
              },
              reservedRange: {
                rule: "repeated",
                type: "ReservedRange",
                id: 9
              },
              reservedName: {
                rule: "repeated",
                type: "string",
                id: 10
              }
            },
            nested: {
              ExtensionRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              },
              ReservedRange: {
                fields: {
                  start: {
                    type: "int32",
                    id: 1
                  },
                  end: {
                    type: "int32",
                    id: 2
                  }
                }
              }
            }
          },
          FieldDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 3
              },
              label: {
                type: "Label",
                id: 4
              },
              type: {
                type: "Type",
                id: 5
              },
              typeName: {
                type: "string",
                id: 6
              },
              extendee: {
                type: "string",
                id: 2
              },
              defaultValue: {
                type: "string",
                id: 7
              },
              oneofIndex: {
                type: "int32",
                id: 9
              },
              jsonName: {
                type: "string",
                id: 10
              },
              options: {
                type: "FieldOptions",
                id: 8
              }
            },
            nested: {
              Type: {
                values: {
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Label: {
                values: {
                  LABEL_OPTIONAL: 1,
                  LABEL_REQUIRED: 2,
                  LABEL_REPEATED: 3
                }
              }
            }
          },
          OneofDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              options: {
                type: "OneofOptions",
                id: 2
              }
            }
          },
          EnumDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                rule: "repeated",
                type: "EnumValueDescriptorProto",
                id: 2
              },
              options: {
                type: "EnumOptions",
                id: 3
              }
            }
          },
          EnumValueDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              },
              options: {
                type: "EnumValueOptions",
                id: 3
              }
            }
          },
          ServiceDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              method: {
                rule: "repeated",
                type: "MethodDescriptorProto",
                id: 2
              },
              options: {
                type: "ServiceOptions",
                id: 3
              }
            }
          },
          MethodDescriptorProto: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              inputType: {
                type: "string",
                id: 2
              },
              outputType: {
                type: "string",
                id: 3
              },
              options: {
                type: "MethodOptions",
                id: 4
              },
              clientStreaming: {
                type: "bool",
                id: 5
              },
              serverStreaming: {
                type: "bool",
                id: 6
              }
            }
          },
          FileOptions: {
            fields: {
              javaPackage: {
                type: "string",
                id: 1
              },
              javaOuterClassname: {
                type: "string",
                id: 8
              },
              javaMultipleFiles: {
                type: "bool",
                id: 10
              },
              javaGenerateEqualsAndHash: {
                type: "bool",
                id: 20,
                options: {
                  deprecated: true
                }
              },
              javaStringCheckUtf8: {
                type: "bool",
                id: 27
              },
              optimizeFor: {
                type: "OptimizeMode",
                id: 9,
                options: {
                  "default": "SPEED"
                }
              },
              goPackage: {
                type: "string",
                id: 11
              },
              ccGenericServices: {
                type: "bool",
                id: 16
              },
              javaGenericServices: {
                type: "bool",
                id: 17
              },
              pyGenericServices: {
                type: "bool",
                id: 18
              },
              deprecated: {
                type: "bool",
                id: 23
              },
              ccEnableArenas: {
                type: "bool",
                id: 31
              },
              objcClassPrefix: {
                type: "string",
                id: 36
              },
              csharpNamespace: {
                type: "string",
                id: 37
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ],
            reserved: [
              [
                38,
                38
              ]
            ],
            nested: {
              OptimizeMode: {
                values: {
                  SPEED: 1,
                  CODE_SIZE: 2,
                  LITE_RUNTIME: 3
                }
              }
            }
          },
          MessageOptions: {
            fields: {
              messageSetWireFormat: {
                type: "bool",
                id: 1
              },
              noStandardDescriptorAccessor: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              mapEntry: {
                type: "bool",
                id: 7
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ],
            reserved: [
              [
                8,
                8
              ]
            ]
          },
          FieldOptions: {
            fields: {
              ctype: {
                type: "CType",
                id: 1,
                options: {
                  "default": "STRING"
                }
              },
              packed: {
                type: "bool",
                id: 2
              },
              jstype: {
                type: "JSType",
                id: 6,
                options: {
                  "default": "JS_NORMAL"
                }
              },
              lazy: {
                type: "bool",
                id: 5
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              weak: {
                type: "bool",
                id: 10
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ],
            reserved: [
              [
                4,
                4
              ]
            ],
            nested: {
              CType: {
                values: {
                  STRING: 0,
                  CORD: 1,
                  STRING_PIECE: 2
                }
              },
              JSType: {
                values: {
                  JS_NORMAL: 0,
                  JS_STRING: 1,
                  JS_NUMBER: 2
                }
              }
            }
          },
          OneofOptions: {
            fields: {
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ]
          },
          EnumOptions: {
            fields: {
              allowAlias: {
                type: "bool",
                id: 2
              },
              deprecated: {
                type: "bool",
                id: 3
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ]
          },
          EnumValueOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 1
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ]
          },
          ServiceOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ]
          },
          MethodOptions: {
            fields: {
              deprecated: {
                type: "bool",
                id: 33
              },
              uninterpretedOption: {
                rule: "repeated",
                type: "UninterpretedOption",
                id: 999
              }
            },
            extensions: [
              [
                1e3,
                536870911
              ]
            ]
          },
          UninterpretedOption: {
            fields: {
              name: {
                rule: "repeated",
                type: "NamePart",
                id: 2
              },
              identifierValue: {
                type: "string",
                id: 3
              },
              positiveIntValue: {
                type: "uint64",
                id: 4
              },
              negativeIntValue: {
                type: "int64",
                id: 5
              },
              doubleValue: {
                type: "double",
                id: 6
              },
              stringValue: {
                type: "bytes",
                id: 7
              },
              aggregateValue: {
                type: "string",
                id: 8
              }
            },
            nested: {
              NamePart: {
                fields: {
                  namePart: {
                    rule: "required",
                    type: "string",
                    id: 1
                  },
                  isExtension: {
                    rule: "required",
                    type: "bool",
                    id: 2
                  }
                }
              }
            }
          },
          SourceCodeInfo: {
            fields: {
              location: {
                rule: "repeated",
                type: "Location",
                id: 1
              }
            },
            nested: {
              Location: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  span: {
                    rule: "repeated",
                    type: "int32",
                    id: 2
                  },
                  leadingComments: {
                    type: "string",
                    id: 3
                  },
                  trailingComments: {
                    type: "string",
                    id: 4
                  },
                  leadingDetachedComments: {
                    rule: "repeated",
                    type: "string",
                    id: 6
                  }
                }
              }
            }
          },
          GeneratedCodeInfo: {
            fields: {
              annotation: {
                rule: "repeated",
                type: "Annotation",
                id: 1
              }
            },
            nested: {
              Annotation: {
                fields: {
                  path: {
                    rule: "repeated",
                    type: "int32",
                    id: 1
                  },
                  sourceFile: {
                    type: "string",
                    id: 2
                  },
                  begin: {
                    type: "int32",
                    id: 3
                  },
                  end: {
                    type: "int32",
                    id: 4
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};
const require$$4 = {
  nested: nested$3
};
var hasRequiredDescriptor;
function requireDescriptor() {
  if (hasRequiredDescriptor) return descriptor.exports;
  hasRequiredDescriptor = 1;
  (function(module, exports) {
    var $protobuf = requireProtobufjs();
    module.exports = exports = $protobuf.descriptor = $protobuf.Root.fromJSON(require$$4).lookup(".google.protobuf");
    var Namespace = $protobuf.Namespace, Root = $protobuf.Root, Enum = $protobuf.Enum, Type = $protobuf.Type, Field = $protobuf.Field, MapField = $protobuf.MapField, OneOf = $protobuf.OneOf, Service = $protobuf.Service, Method = $protobuf.Method;
    Root.fromDescriptor = function fromDescriptor(descriptor2) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.FileDescriptorSet.decode(descriptor2);
      var root2 = new Root();
      if (descriptor2.file) {
        var fileDescriptor, filePackage;
        for (var j = 0, i; j < descriptor2.file.length; ++j) {
          filePackage = root2;
          if ((fileDescriptor = descriptor2.file[j])["package"] && fileDescriptor["package"].length)
            filePackage = root2.define(fileDescriptor["package"]);
          if (fileDescriptor.name && fileDescriptor.name.length)
            root2.files.push(filePackage.filename = fileDescriptor.name);
          if (fileDescriptor.messageType)
            for (i = 0; i < fileDescriptor.messageType.length; ++i)
              filePackage.add(Type.fromDescriptor(fileDescriptor.messageType[i], fileDescriptor.syntax));
          if (fileDescriptor.enumType)
            for (i = 0; i < fileDescriptor.enumType.length; ++i)
              filePackage.add(Enum.fromDescriptor(fileDescriptor.enumType[i]));
          if (fileDescriptor.extension)
            for (i = 0; i < fileDescriptor.extension.length; ++i)
              filePackage.add(Field.fromDescriptor(fileDescriptor.extension[i]));
          if (fileDescriptor.service)
            for (i = 0; i < fileDescriptor.service.length; ++i)
              filePackage.add(Service.fromDescriptor(fileDescriptor.service[i]));
          var opts = fromDescriptorOptions(fileDescriptor.options, exports.FileOptions);
          if (opts) {
            var ks = Object.keys(opts);
            for (i = 0; i < ks.length; ++i)
              filePackage.setOption(ks[i], opts[ks[i]]);
          }
        }
      }
      return root2;
    };
    Root.prototype.toDescriptor = function toDescriptor(syntax) {
      var set = exports.FileDescriptorSet.create();
      Root_toDescriptorRecursive(this, set.file, syntax);
      return set;
    };
    function Root_toDescriptorRecursive(ns, files2, syntax) {
      var file = exports.FileDescriptorProto.create({ name: ns.filename || (ns.fullName.substring(1).replace(/\./g, "_") || "root") + ".proto" });
      if (syntax)
        file.syntax = syntax;
      if (!(ns instanceof Root))
        file["package"] = ns.fullName.substring(1);
      for (var i = 0, nested2; i < ns.nestedArray.length; ++i)
        if ((nested2 = ns._nestedArray[i]) instanceof Type)
          file.messageType.push(nested2.toDescriptor(syntax));
        else if (nested2 instanceof Enum)
          file.enumType.push(nested2.toDescriptor());
        else if (nested2 instanceof Field)
          file.extension.push(nested2.toDescriptor(syntax));
        else if (nested2 instanceof Service)
          file.service.push(nested2.toDescriptor());
        else if (nested2 instanceof /* plain */
        Namespace)
          Root_toDescriptorRecursive(nested2, files2, syntax);
      file.options = toDescriptorOptions(ns.options, exports.FileOptions);
      if (file.messageType.length + file.enumType.length + file.extension.length + file.service.length)
        files2.push(file);
    }
    var unnamedMessageIndex = 0;
    Type.fromDescriptor = function fromDescriptor(descriptor2, syntax) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.DescriptorProto.decode(descriptor2);
      var type2 = new Type(descriptor2.name.length ? descriptor2.name : "Type" + unnamedMessageIndex++, fromDescriptorOptions(descriptor2.options, exports.MessageOptions)), i;
      if (descriptor2.oneofDecl)
        for (i = 0; i < descriptor2.oneofDecl.length; ++i)
          type2.add(OneOf.fromDescriptor(descriptor2.oneofDecl[i]));
      if (descriptor2.field)
        for (i = 0; i < descriptor2.field.length; ++i) {
          var field2 = Field.fromDescriptor(descriptor2.field[i], syntax);
          type2.add(field2);
          if (descriptor2.field[i].hasOwnProperty("oneofIndex"))
            type2.oneofsArray[descriptor2.field[i].oneofIndex].add(field2);
        }
      if (descriptor2.extension)
        for (i = 0; i < descriptor2.extension.length; ++i)
          type2.add(Field.fromDescriptor(descriptor2.extension[i], syntax));
      if (descriptor2.nestedType)
        for (i = 0; i < descriptor2.nestedType.length; ++i) {
          type2.add(Type.fromDescriptor(descriptor2.nestedType[i], syntax));
          if (descriptor2.nestedType[i].options && descriptor2.nestedType[i].options.mapEntry)
            type2.setOption("map_entry", true);
        }
      if (descriptor2.enumType)
        for (i = 0; i < descriptor2.enumType.length; ++i)
          type2.add(Enum.fromDescriptor(descriptor2.enumType[i]));
      if (descriptor2.extensionRange && descriptor2.extensionRange.length) {
        type2.extensions = [];
        for (i = 0; i < descriptor2.extensionRange.length; ++i)
          type2.extensions.push([descriptor2.extensionRange[i].start, descriptor2.extensionRange[i].end]);
      }
      if (descriptor2.reservedRange && descriptor2.reservedRange.length || descriptor2.reservedName && descriptor2.reservedName.length) {
        type2.reserved = [];
        if (descriptor2.reservedRange)
          for (i = 0; i < descriptor2.reservedRange.length; ++i)
            type2.reserved.push([descriptor2.reservedRange[i].start, descriptor2.reservedRange[i].end]);
        if (descriptor2.reservedName)
          for (i = 0; i < descriptor2.reservedName.length; ++i)
            type2.reserved.push(descriptor2.reservedName[i]);
      }
      return type2;
    };
    Type.prototype.toDescriptor = function toDescriptor(syntax) {
      var descriptor2 = exports.DescriptorProto.create({ name: this.name }), i;
      for (i = 0; i < this.fieldsArray.length; ++i) {
        var fieldDescriptor;
        descriptor2.field.push(fieldDescriptor = this._fieldsArray[i].toDescriptor(syntax));
        if (this._fieldsArray[i] instanceof MapField) {
          var keyType = toDescriptorType(this._fieldsArray[i].keyType, this._fieldsArray[i].resolvedKeyType), valueType = toDescriptorType(this._fieldsArray[i].type, this._fieldsArray[i].resolvedType), valueTypeName = valueType === /* type */
          11 || valueType === /* enum */
          14 ? this._fieldsArray[i].resolvedType && shortname(this.parent, this._fieldsArray[i].resolvedType) || this._fieldsArray[i].type : void 0;
          descriptor2.nestedType.push(exports.DescriptorProto.create({
            name: fieldDescriptor.typeName,
            field: [
              exports.FieldDescriptorProto.create({ name: "key", number: 1, label: 1, type: keyType }),
              // can't reference a type or enum
              exports.FieldDescriptorProto.create({ name: "value", number: 2, label: 1, type: valueType, typeName: valueTypeName })
            ],
            options: exports.MessageOptions.create({ mapEntry: true })
          }));
        }
      }
      for (i = 0; i < this.oneofsArray.length; ++i)
        descriptor2.oneofDecl.push(this._oneofsArray[i].toDescriptor());
      for (i = 0; i < this.nestedArray.length; ++i) {
        if (this._nestedArray[i] instanceof Field)
          descriptor2.field.push(this._nestedArray[i].toDescriptor(syntax));
        else if (this._nestedArray[i] instanceof Type)
          descriptor2.nestedType.push(this._nestedArray[i].toDescriptor(syntax));
        else if (this._nestedArray[i] instanceof Enum)
          descriptor2.enumType.push(this._nestedArray[i].toDescriptor());
      }
      if (this.extensions)
        for (i = 0; i < this.extensions.length; ++i)
          descriptor2.extensionRange.push(exports.DescriptorProto.ExtensionRange.create({ start: this.extensions[i][0], end: this.extensions[i][1] }));
      if (this.reserved)
        for (i = 0; i < this.reserved.length; ++i)
          if (typeof this.reserved[i] === "string")
            descriptor2.reservedName.push(this.reserved[i]);
          else
            descriptor2.reservedRange.push(exports.DescriptorProto.ReservedRange.create({ start: this.reserved[i][0], end: this.reserved[i][1] }));
      descriptor2.options = toDescriptorOptions(this.options, exports.MessageOptions);
      return descriptor2;
    };
    var numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    Field.fromDescriptor = function fromDescriptor(descriptor2, syntax) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.DescriptorProto.decode(descriptor2);
      if (typeof descriptor2.number !== "number")
        throw Error("missing field id");
      var fieldType;
      if (descriptor2.typeName && descriptor2.typeName.length)
        fieldType = descriptor2.typeName;
      else
        fieldType = fromDescriptorType(descriptor2.type);
      var fieldRule;
      switch (descriptor2.label) {
        case 1:
          fieldRule = void 0;
          break;
        case 2:
          fieldRule = "required";
          break;
        case 3:
          fieldRule = "repeated";
          break;
        default:
          throw Error("illegal label: " + descriptor2.label);
      }
      var extendee = descriptor2.extendee;
      if (descriptor2.extendee !== void 0) {
        extendee = extendee.length ? extendee : void 0;
      }
      var field2 = new Field(
        descriptor2.name.length ? descriptor2.name : "field" + descriptor2.number,
        descriptor2.number,
        fieldType,
        fieldRule,
        extendee
      );
      field2.options = fromDescriptorOptions(descriptor2.options, exports.FieldOptions);
      if (descriptor2.defaultValue && descriptor2.defaultValue.length) {
        var defaultValue = descriptor2.defaultValue;
        switch (defaultValue) {
          case "true":
          case "TRUE":
            defaultValue = true;
            break;
          case "false":
          case "FALSE":
            defaultValue = false;
            break;
          default:
            var match = numberRe.exec(defaultValue);
            if (match)
              defaultValue = parseInt(defaultValue);
            break;
        }
        field2.setOption("default", defaultValue);
      }
      if (packableDescriptorType(descriptor2.type)) {
        if (syntax === "proto3") {
          if (descriptor2.options && !descriptor2.options.packed)
            field2.setOption("packed", false);
        } else if (!(descriptor2.options && descriptor2.options.packed))
          field2.setOption("packed", false);
      }
      return field2;
    };
    Field.prototype.toDescriptor = function toDescriptor(syntax) {
      var descriptor2 = exports.FieldDescriptorProto.create({ name: this.name, number: this.id });
      if (this.map) {
        descriptor2.type = 11;
        descriptor2.typeName = $protobuf.util.ucFirst(this.name);
        descriptor2.label = 3;
      } else {
        switch (descriptor2.type = toDescriptorType(this.type, this.resolve().resolvedType)) {
          case 10:
          case 11:
          case 14:
            descriptor2.typeName = this.resolvedType ? shortname(this.parent, this.resolvedType) : this.type;
            break;
        }
        switch (this.rule) {
          case "repeated":
            descriptor2.label = 3;
            break;
          case "required":
            descriptor2.label = 2;
            break;
          default:
            descriptor2.label = 1;
            break;
        }
      }
      descriptor2.extendee = this.extensionField ? this.extensionField.parent.fullName : this.extend;
      if (this.partOf) {
        if ((descriptor2.oneofIndex = this.parent.oneofsArray.indexOf(this.partOf)) < 0)
          throw Error("missing oneof");
      }
      if (this.options) {
        descriptor2.options = toDescriptorOptions(this.options, exports.FieldOptions);
        if (this.options["default"] != null)
          descriptor2.defaultValue = String(this.options["default"]);
      }
      if (syntax === "proto3") {
        if (!this.packed)
          (descriptor2.options || (descriptor2.options = exports.FieldOptions.create())).packed = false;
      } else if (this.packed)
        (descriptor2.options || (descriptor2.options = exports.FieldOptions.create())).packed = true;
      return descriptor2;
    };
    var unnamedEnumIndex = 0;
    Enum.fromDescriptor = function fromDescriptor(descriptor2) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.EnumDescriptorProto.decode(descriptor2);
      var values = {};
      if (descriptor2.value)
        for (var i = 0; i < descriptor2.value.length; ++i) {
          var name2 = descriptor2.value[i].name, value = descriptor2.value[i].number || 0;
          values[name2 && name2.length ? name2 : "NAME" + value] = value;
        }
      return new Enum(
        descriptor2.name && descriptor2.name.length ? descriptor2.name : "Enum" + unnamedEnumIndex++,
        values,
        fromDescriptorOptions(descriptor2.options, exports.EnumOptions)
      );
    };
    Enum.prototype.toDescriptor = function toDescriptor() {
      var values = [];
      for (var i = 0, ks = Object.keys(this.values); i < ks.length; ++i)
        values.push(exports.EnumValueDescriptorProto.create({ name: ks[i], number: this.values[ks[i]] }));
      return exports.EnumDescriptorProto.create({
        name: this.name,
        value: values,
        options: toDescriptorOptions(this.options, exports.EnumOptions)
      });
    };
    var unnamedOneofIndex = 0;
    OneOf.fromDescriptor = function fromDescriptor(descriptor2) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.OneofDescriptorProto.decode(descriptor2);
      return new OneOf(
        // unnamedOneOfIndex is global, not per type, because we have no ref to a type here
        descriptor2.name && descriptor2.name.length ? descriptor2.name : "oneof" + unnamedOneofIndex++
        // fromDescriptorOptions(descriptor.options, exports.OneofOptions) - only uninterpreted_option
      );
    };
    OneOf.prototype.toDescriptor = function toDescriptor() {
      return exports.OneofDescriptorProto.create({
        name: this.name
        // options: toDescriptorOptions(this.options, exports.OneofOptions) - only uninterpreted_option
      });
    };
    var unnamedServiceIndex = 0;
    Service.fromDescriptor = function fromDescriptor(descriptor2) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.ServiceDescriptorProto.decode(descriptor2);
      var service2 = new Service(descriptor2.name && descriptor2.name.length ? descriptor2.name : "Service" + unnamedServiceIndex++, fromDescriptorOptions(descriptor2.options, exports.ServiceOptions));
      if (descriptor2.method)
        for (var i = 0; i < descriptor2.method.length; ++i)
          service2.add(Method.fromDescriptor(descriptor2.method[i]));
      return service2;
    };
    Service.prototype.toDescriptor = function toDescriptor() {
      var methods = [];
      for (var i = 0; i < this.methodsArray.length; ++i)
        methods.push(this._methodsArray[i].toDescriptor());
      return exports.ServiceDescriptorProto.create({
        name: this.name,
        method: methods,
        options: toDescriptorOptions(this.options, exports.ServiceOptions)
      });
    };
    var unnamedMethodIndex = 0;
    Method.fromDescriptor = function fromDescriptor(descriptor2) {
      if (typeof descriptor2.length === "number")
        descriptor2 = exports.MethodDescriptorProto.decode(descriptor2);
      return new Method(
        // unnamedMethodIndex is global, not per service, because we have no ref to a service here
        descriptor2.name && descriptor2.name.length ? descriptor2.name : "Method" + unnamedMethodIndex++,
        "rpc",
        descriptor2.inputType,
        descriptor2.outputType,
        Boolean(descriptor2.clientStreaming),
        Boolean(descriptor2.serverStreaming),
        fromDescriptorOptions(descriptor2.options, exports.MethodOptions)
      );
    };
    Method.prototype.toDescriptor = function toDescriptor() {
      return exports.MethodDescriptorProto.create({
        name: this.name,
        inputType: this.resolvedRequestType ? this.resolvedRequestType.fullName : this.requestType,
        outputType: this.resolvedResponseType ? this.resolvedResponseType.fullName : this.responseType,
        clientStreaming: this.requestStream,
        serverStreaming: this.responseStream,
        options: toDescriptorOptions(this.options, exports.MethodOptions)
      });
    };
    function fromDescriptorType(type2) {
      switch (type2) {
        case 1:
          return "double";
        case 2:
          return "float";
        case 3:
          return "int64";
        case 4:
          return "uint64";
        case 5:
          return "int32";
        case 6:
          return "fixed64";
        case 7:
          return "fixed32";
        case 8:
          return "bool";
        case 9:
          return "string";
        case 12:
          return "bytes";
        case 13:
          return "uint32";
        case 15:
          return "sfixed32";
        case 16:
          return "sfixed64";
        case 17:
          return "sint32";
        case 18:
          return "sint64";
      }
      throw Error("illegal type: " + type2);
    }
    function packableDescriptorType(type2) {
      switch (type2) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
          return true;
      }
      return false;
    }
    function toDescriptorType(type2, resolvedType) {
      switch (type2) {
        case "double":
          return 1;
        case "float":
          return 2;
        case "int64":
          return 3;
        case "uint64":
          return 4;
        case "int32":
          return 5;
        case "fixed64":
          return 6;
        case "fixed32":
          return 7;
        case "bool":
          return 8;
        case "string":
          return 9;
        case "bytes":
          return 12;
        case "uint32":
          return 13;
        case "sfixed32":
          return 15;
        case "sfixed64":
          return 16;
        case "sint32":
          return 17;
        case "sint64":
          return 18;
      }
      if (resolvedType instanceof Enum)
        return 14;
      if (resolvedType instanceof Type)
        return resolvedType.group ? 10 : 11;
      throw Error("illegal type: " + type2);
    }
    function fromDescriptorOptions(options, type2) {
      if (!options)
        return void 0;
      var out = [];
      for (var i = 0, field2, key, val; i < type2.fieldsArray.length; ++i)
        if ((key = (field2 = type2._fieldsArray[i]).name) !== "uninterpretedOption") {
          if (options.hasOwnProperty(key)) {
            val = options[key];
            if (field2.resolvedType instanceof Enum && typeof val === "number" && field2.resolvedType.valuesById[val] !== void 0)
              val = field2.resolvedType.valuesById[val];
            out.push(underScore(key), val);
          }
        }
      return out.length ? $protobuf.util.toObject(out) : void 0;
    }
    function toDescriptorOptions(options, type2) {
      if (!options)
        return void 0;
      var out = [];
      for (var i = 0, ks = Object.keys(options), key, val; i < ks.length; ++i) {
        val = options[key = ks[i]];
        if (key === "default")
          continue;
        var field2 = type2.fields[key];
        if (!field2 && !(field2 = type2.fields[key = $protobuf.util.camelCase(key)]))
          continue;
        out.push(key, val);
      }
      return out.length ? type2.fromObject($protobuf.util.toObject(out)) : void 0;
    }
    function shortname(from, to) {
      var fromPath = from.fullName.split("."), toPath = to.fullName.split("."), i = 0, j = 0, k = toPath.length - 1;
      if (!(from instanceof Root) && to instanceof Namespace)
        while (i < fromPath.length && j < k && fromPath[i] === toPath[j]) {
          var other = to.lookup(fromPath[i++], true);
          if (other !== null && other !== to)
            break;
          ++j;
        }
      else
        for (; i < fromPath.length && j < k && fromPath[i] === toPath[j]; ++i, ++j) ;
      return toPath.slice(j).join(".");
    }
    function underScore(str) {
      return str.substring(0, 1) + str.substring(1).replace(/([A-Z])(?=[a-z]|$)/g, function($0, $1) {
        return "_" + $1.toLowerCase();
      });
    }
  })(descriptor, descriptor.exports);
  return descriptor.exports;
}
var util$1 = {};
const nested$2 = {
  google: {
    nested: {
      protobuf: {
        nested: {
          Api: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              methods: {
                rule: "repeated",
                type: "Method",
                id: 2
              },
              options: {
                rule: "repeated",
                type: "Option",
                id: 3
              },
              version: {
                type: "string",
                id: 4
              },
              sourceContext: {
                type: "SourceContext",
                id: 5
              },
              mixins: {
                rule: "repeated",
                type: "Mixin",
                id: 6
              },
              syntax: {
                type: "Syntax",
                id: 7
              }
            }
          },
          Method: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              requestTypeUrl: {
                type: "string",
                id: 2
              },
              requestStreaming: {
                type: "bool",
                id: 3
              },
              responseTypeUrl: {
                type: "string",
                id: 4
              },
              responseStreaming: {
                type: "bool",
                id: 5
              },
              options: {
                rule: "repeated",
                type: "Option",
                id: 6
              },
              syntax: {
                type: "Syntax",
                id: 7
              }
            }
          },
          Mixin: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              root: {
                type: "string",
                id: 2
              }
            }
          },
          SourceContext: {
            fields: {
              fileName: {
                type: "string",
                id: 1
              }
            }
          },
          Option: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                type: "Any",
                id: 2
              }
            }
          },
          Syntax: {
            values: {
              SYNTAX_PROTO2: 0,
              SYNTAX_PROTO3: 1
            }
          }
        }
      }
    }
  }
};
const require$$3 = {
  nested: nested$2
};
const nested$1 = {
  google: {
    nested: {
      protobuf: {
        nested: {
          SourceContext: {
            fields: {
              fileName: {
                type: "string",
                id: 1
              }
            }
          }
        }
      }
    }
  }
};
const require$$5 = {
  nested: nested$1
};
const nested = {
  google: {
    nested: {
      protobuf: {
        nested: {
          Type: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              fields: {
                rule: "repeated",
                type: "Field",
                id: 2
              },
              oneofs: {
                rule: "repeated",
                type: "string",
                id: 3
              },
              options: {
                rule: "repeated",
                type: "Option",
                id: 4
              },
              sourceContext: {
                type: "SourceContext",
                id: 5
              },
              syntax: {
                type: "Syntax",
                id: 6
              }
            }
          },
          Field: {
            fields: {
              kind: {
                type: "Kind",
                id: 1
              },
              cardinality: {
                type: "Cardinality",
                id: 2
              },
              number: {
                type: "int32",
                id: 3
              },
              name: {
                type: "string",
                id: 4
              },
              typeUrl: {
                type: "string",
                id: 6
              },
              oneofIndex: {
                type: "int32",
                id: 7
              },
              packed: {
                type: "bool",
                id: 8
              },
              options: {
                rule: "repeated",
                type: "Option",
                id: 9
              },
              jsonName: {
                type: "string",
                id: 10
              },
              defaultValue: {
                type: "string",
                id: 11
              }
            },
            nested: {
              Kind: {
                values: {
                  TYPE_UNKNOWN: 0,
                  TYPE_DOUBLE: 1,
                  TYPE_FLOAT: 2,
                  TYPE_INT64: 3,
                  TYPE_UINT64: 4,
                  TYPE_INT32: 5,
                  TYPE_FIXED64: 6,
                  TYPE_FIXED32: 7,
                  TYPE_BOOL: 8,
                  TYPE_STRING: 9,
                  TYPE_GROUP: 10,
                  TYPE_MESSAGE: 11,
                  TYPE_BYTES: 12,
                  TYPE_UINT32: 13,
                  TYPE_ENUM: 14,
                  TYPE_SFIXED32: 15,
                  TYPE_SFIXED64: 16,
                  TYPE_SINT32: 17,
                  TYPE_SINT64: 18
                }
              },
              Cardinality: {
                values: {
                  CARDINALITY_UNKNOWN: 0,
                  CARDINALITY_OPTIONAL: 1,
                  CARDINALITY_REQUIRED: 2,
                  CARDINALITY_REPEATED: 3
                }
              }
            }
          },
          Enum: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              enumvalue: {
                rule: "repeated",
                type: "EnumValue",
                id: 2
              },
              options: {
                rule: "repeated",
                type: "Option",
                id: 3
              },
              sourceContext: {
                type: "SourceContext",
                id: 4
              },
              syntax: {
                type: "Syntax",
                id: 5
              }
            }
          },
          EnumValue: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              number: {
                type: "int32",
                id: 2
              },
              options: {
                rule: "repeated",
                type: "Option",
                id: 3
              }
            }
          },
          Option: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              value: {
                type: "Any",
                id: 2
              }
            }
          },
          Syntax: {
            values: {
              SYNTAX_PROTO2: 0,
              SYNTAX_PROTO3: 1
            }
          },
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          },
          SourceContext: {
            fields: {
              fileName: {
                type: "string",
                id: 1
              }
            }
          }
        }
      }
    }
  }
};
const require$$6 = {
  nested
};
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util$1;
  hasRequiredUtil = 1;
  /**
   * @license
   * Copyright 2018 gRPC authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   */
  Object.defineProperty(util$1, "__esModule", { value: true });
  util$1.addCommonProtos = util$1.loadProtosWithOptionsSync = util$1.loadProtosWithOptions = void 0;
  const fs2 = require$$0;
  const path2 = require$$1$3;
  const Protobuf = requireProtobufjs();
  function addIncludePathResolver(root2, includePaths) {
    const originalResolvePath = root2.resolvePath;
    root2.resolvePath = (origin, target) => {
      if (path2.isAbsolute(target)) {
        return target;
      }
      for (const directory of includePaths) {
        const fullPath = path2.join(directory, target);
        try {
          fs2.accessSync(fullPath, fs2.constants.R_OK);
          return fullPath;
        } catch (err) {
          continue;
        }
      }
      process.emitWarning(`${target} not found in any of the include paths ${includePaths}`);
      return originalResolvePath(origin, target);
    };
  }
  async function loadProtosWithOptions(filename, options) {
    const root2 = new Protobuf.Root();
    options = options || {};
    if (!!options.includeDirs) {
      if (!Array.isArray(options.includeDirs)) {
        return Promise.reject(new Error("The includeDirs option must be an array"));
      }
      addIncludePathResolver(root2, options.includeDirs);
    }
    const loadedRoot = await root2.load(filename, options);
    loadedRoot.resolveAll();
    return loadedRoot;
  }
  util$1.loadProtosWithOptions = loadProtosWithOptions;
  function loadProtosWithOptionsSync(filename, options) {
    const root2 = new Protobuf.Root();
    options = options || {};
    if (!!options.includeDirs) {
      if (!Array.isArray(options.includeDirs)) {
        throw new Error("The includeDirs option must be an array");
      }
      addIncludePathResolver(root2, options.includeDirs);
    }
    const loadedRoot = root2.loadSync(filename, options);
    loadedRoot.resolveAll();
    return loadedRoot;
  }
  util$1.loadProtosWithOptionsSync = loadProtosWithOptionsSync;
  function addCommonProtos() {
    const apiDescriptor = require$$3;
    const descriptorDescriptor = require$$4;
    const sourceContextDescriptor = require$$5;
    const typeDescriptor = require$$6;
    Protobuf.common("api", apiDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common("descriptor", descriptorDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common("source_context", sourceContextDescriptor.nested.google.nested.protobuf.nested);
    Protobuf.common("type", typeDescriptor.nested.google.nested.protobuf.nested);
  }
  util$1.addCommonProtos = addCommonProtos;
  return util$1;
}
var umd = { exports: {} };
var hasRequiredUmd;
function requireUmd() {
  if (hasRequiredUmd) return umd.exports;
  hasRequiredUmd = 1;
  (function(module, exports) {
    var Long = function(exports2) {
      Object.defineProperty(exports2, "__esModule", {
        value: true
      });
      exports2.default = void 0;
      /**
       * @license
       * Copyright 2009 The Closure Library Authors
       * Copyright 2020 Daniel Wirtz / The long.js Authors.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       *
       * SPDX-License-Identifier: Apache-2.0
       */
      var wasm = null;
      try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
      } catch (e) {
      }
      function Long2(low, high, unsigned) {
        this.low = low | 0;
        this.high = high | 0;
        this.unsigned = !!unsigned;
      }
      Long2.prototype.__isLong__;
      Object.defineProperty(Long2.prototype, "__isLong__", {
        value: true
      });
      function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
      }
      function ctz32(value) {
        var c = Math.clz32(value & -value);
        return value ? 31 - c : c;
      }
      Long2.isLong = isLong;
      var INT_CACHE = {};
      var UINT_CACHE = {};
      function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
          value >>>= 0;
          if (cache = 0 <= value && value < 256) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj) return cachedObj;
          }
          obj = fromBits(value, 0, true);
          if (cache) UINT_CACHE[value] = obj;
          return obj;
        } else {
          value |= 0;
          if (cache = -128 <= value && value < 128) {
            cachedObj = INT_CACHE[value];
            if (cachedObj) return cachedObj;
          }
          obj = fromBits(value, value < 0 ? -1 : 0, false);
          if (cache) INT_CACHE[value] = obj;
          return obj;
        }
      }
      Long2.fromInt = fromInt;
      function fromNumber(value, unsigned) {
        if (isNaN(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
          if (value < 0) return UZERO;
          if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
          if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
          if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL2 | 0, value / TWO_PWR_32_DBL2 | 0, unsigned);
      }
      Long2.fromNumber = fromNumber;
      function fromBits(lowBits, highBits, unsigned) {
        return new Long2(lowBits, highBits, unsigned);
      }
      Long2.fromBits = fromBits;
      var pow_dbl = Math.pow;
      function fromString(str, unsigned, radix) {
        if (str.length === 0) throw Error("empty string");
        if (typeof unsigned === "number") {
          radix = unsigned;
          unsigned = false;
        } else {
          unsigned = !!unsigned;
        }
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return unsigned ? UZERO : ZERO;
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        var p;
        if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
        else if (p === 0) {
          return fromString(str.substring(1), unsigned, radix).neg();
        }
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
          var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
          if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = result.mul(power).add(fromNumber(value));
          } else {
            result = result.mul(radixToPower);
            result = result.add(fromNumber(value));
          }
        }
        result.unsigned = unsigned;
        return result;
      }
      Long2.fromString = fromString;
      function fromValue(val, unsigned) {
        if (typeof val === "number") return fromNumber(val, unsigned);
        if (typeof val === "string") return fromString(val, unsigned);
        return fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
      }
      Long2.fromValue = fromValue;
      var TWO_PWR_16_DBL = 1 << 16;
      var TWO_PWR_24_DBL = 1 << 24;
      var TWO_PWR_32_DBL2 = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
      var TWO_PWR_64_DBL = TWO_PWR_32_DBL2 * TWO_PWR_32_DBL2;
      var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
      var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
      var ZERO = fromInt(0);
      Long2.ZERO = ZERO;
      var UZERO = fromInt(0, true);
      Long2.UZERO = UZERO;
      var ONE = fromInt(1);
      Long2.ONE = ONE;
      var UONE = fromInt(1, true);
      Long2.UONE = UONE;
      var NEG_ONE = fromInt(-1);
      Long2.NEG_ONE = NEG_ONE;
      var MAX_VALUE = fromBits(4294967295 | 0, 2147483647 | 0, false);
      Long2.MAX_VALUE = MAX_VALUE;
      var MAX_UNSIGNED_VALUE = fromBits(4294967295 | 0, 4294967295 | 0, true);
      Long2.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
      var MIN_VALUE = fromBits(0, 2147483648 | 0, false);
      Long2.MIN_VALUE = MIN_VALUE;
      var LongPrototype = Long2.prototype;
      LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
      };
      LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL2 + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL2 + (this.low >>> 0);
      };
      LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(MIN_VALUE)) {
            var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
            return div.toString(radix) + rem1.toInt().toString(radix);
          } else return "-" + this.neg().toString(radix);
        }
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = "";
        while (true) {
          var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
          rem = remDiv;
          if (rem.isZero()) return digits + result;
          else {
            while (digits.length < 6) digits = "0" + digits;
            result = "" + digits + result;
          }
        }
      };
      LongPrototype.getHighBits = function getHighBits() {
        return this.high;
      };
      LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
      };
      LongPrototype.getLowBits = function getLowBits() {
        return this.low;
      };
      LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
      };
      LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative())
          return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--) if ((val & 1 << bit) != 0) break;
        return this.high != 0 ? bit + 33 : bit + 1;
      };
      LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
      };
      LongPrototype.eqz = LongPrototype.isZero;
      LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
      };
      LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
      };
      LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
      };
      LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
      };
      LongPrototype.equals = function equals(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
      };
      LongPrototype.eq = LongPrototype.equals;
      LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(
          /* validates */
          other
        );
      };
      LongPrototype.neq = LongPrototype.notEquals;
      LongPrototype.ne = LongPrototype.notEquals;
      LongPrototype.lessThan = function lessThan(other) {
        return this.comp(
          /* validates */
          other
        ) < 0;
      };
      LongPrototype.lt = LongPrototype.lessThan;
      LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(
          /* validates */
          other
        ) <= 0;
      };
      LongPrototype.lte = LongPrototype.lessThanOrEqual;
      LongPrototype.le = LongPrototype.lessThanOrEqual;
      LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(
          /* validates */
          other
        ) > 0;
      };
      LongPrototype.gt = LongPrototype.greaterThan;
      LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(
          /* validates */
          other
        ) >= 0;
      };
      LongPrototype.gte = LongPrototype.greaterThanOrEqual;
      LongPrototype.ge = LongPrototype.greaterThanOrEqual;
      LongPrototype.compare = function compare(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1;
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
      };
      LongPrototype.comp = LongPrototype.compare;
      LongPrototype.negate = function negate2() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
      };
      LongPrototype.neg = LongPrototype.negate;
      LongPrototype.add = function add(addend) {
        if (!isLong(addend)) addend = fromValue(addend);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 65535;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 + b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
      };
      LongPrototype.sub = LongPrototype.subtract;
      LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return this;
        if (!isLong(multiplier)) multiplier = fromValue(multiplier);
        if (wasm) {
          var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
          if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());
          else return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg();
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
        var a48 = this.high >>> 16;
        var a32 = this.high & 65535;
        var a16 = this.low >>> 16;
        var a00 = this.low & 65535;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 65535;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 65535;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 65535;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 65535;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 65535;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 65535;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
      };
      LongPrototype.mul = LongPrototype.multiply;
      LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (divisor.isZero()) throw Error("division by zero");
        if (wasm) {
          if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
            return this;
          }
          var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
          if (this.eq(MIN_VALUE)) {
            if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE;
            else if (divisor.eq(MIN_VALUE)) return ONE;
            else {
              var halfThis = this.shr(1);
              approx = halfThis.div(divisor).shl(1);
              if (approx.eq(ZERO)) {
                return divisor.isNegative() ? ONE : NEG_ONE;
              } else {
                rem = this.sub(divisor.mul(approx));
                res = approx.add(rem.div(divisor));
                return res;
              }
            }
          } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
          if (this.isNegative()) {
            if (divisor.isNegative()) return this.neg().div(divisor.neg());
            return this.neg().div(divisor).neg();
          } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
          res = ZERO;
        } else {
          if (!divisor.unsigned) divisor = divisor.toUnsigned();
          if (divisor.gt(this)) return UZERO;
          if (divisor.gt(this.shru(1)))
            return UONE;
          res = UZERO;
        }
        rem = this;
        while (rem.gte(divisor)) {
          approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
          var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
          while (approxRem.isNegative() || approxRem.gt(rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, this.unsigned);
            approxRem = approxRes.mul(divisor);
          }
          if (approxRes.isZero()) approxRes = ONE;
          res = res.add(approxRes);
          rem = rem.sub(approxRem);
        }
        return res;
      };
      LongPrototype.div = LongPrototype.divide;
      LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (wasm) {
          var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
          return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
      };
      LongPrototype.mod = LongPrototype.modulo;
      LongPrototype.rem = LongPrototype.modulo;
      LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
      };
      LongPrototype.countLeadingZeros = function countLeadingZeros() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
      };
      LongPrototype.clz = LongPrototype.countLeadingZeros;
      LongPrototype.countTrailingZeros = function countTrailingZeros() {
        return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
      };
      LongPrototype.ctz = LongPrototype.countTrailingZeros;
      LongPrototype.and = function and(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
      };
      LongPrototype.or = function or(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
      };
      LongPrototype.xor = function xor(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
      };
      LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else return fromBits(0, this.low << numBits - 32, this.unsigned);
      };
      LongPrototype.shl = LongPrototype.shiftLeft;
      LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
      };
      LongPrototype.shr = LongPrototype.shiftRight;
      LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
        if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
        return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
      };
      LongPrototype.shru = LongPrototype.shiftRightUnsigned;
      LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
      LongPrototype.rotateLeft = function rotateLeft(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
          b = 32 - numBits;
          return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
      };
      LongPrototype.rotl = LongPrototype.rotateLeft;
      LongPrototype.rotateRight = function rotateRight(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
          b = 32 - numBits;
          return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
      };
      LongPrototype.rotr = LongPrototype.rotateRight;
      LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
      };
      LongPrototype.toUnsigned = function toUnsigned2() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
      };
      LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
      };
      LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high, lo = this.low;
        return [lo & 255, lo >>> 8 & 255, lo >>> 16 & 255, lo >>> 24, hi & 255, hi >>> 8 & 255, hi >>> 16 & 255, hi >>> 24];
      };
      LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high, lo = this.low;
        return [hi >>> 24, hi >>> 16 & 255, hi >>> 8 & 255, hi & 255, lo >>> 24, lo >>> 16 & 255, lo >>> 8 & 255, lo & 255];
      };
      Long2.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long2.fromBytesLE(bytes, unsigned) : Long2.fromBytesBE(bytes, unsigned);
      };
      Long2.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long2(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
      };
      Long2.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long2(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
      };
      var _default = Long2;
      exports2.default = _default;
      return "default" in exports2 ? exports2.default : exports2;
    }({});
    module.exports = Long;
  })(umd);
  return umd.exports;
}
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src$1;
  hasRequiredSrc = 1;
  (function(exports) {
    /**
     * @license
     * Copyright 2018 gRPC authors.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadFileDescriptorSetFromObject = exports.loadFileDescriptorSetFromBuffer = exports.fromJSON = exports.loadSync = exports.load = exports.IdempotencyLevel = exports.isAnyExtension = exports.Long = void 0;
    const camelCase = requireLodash_camelcase();
    const Protobuf = requireProtobufjs();
    const descriptor2 = requireDescriptor();
    const util_1 = requireUtil();
    const Long = requireUmd();
    exports.Long = Long;
    function isAnyExtension(obj) {
      return "@type" in obj && typeof obj["@type"] === "string";
    }
    exports.isAnyExtension = isAnyExtension;
    var IdempotencyLevel;
    (function(IdempotencyLevel2) {
      IdempotencyLevel2["IDEMPOTENCY_UNKNOWN"] = "IDEMPOTENCY_UNKNOWN";
      IdempotencyLevel2["NO_SIDE_EFFECTS"] = "NO_SIDE_EFFECTS";
      IdempotencyLevel2["IDEMPOTENT"] = "IDEMPOTENT";
    })(IdempotencyLevel = exports.IdempotencyLevel || (exports.IdempotencyLevel = {}));
    const descriptorOptions = {
      longs: String,
      enums: String,
      bytes: String,
      defaults: true,
      oneofs: true,
      json: true
    };
    function joinName(baseName, name2) {
      if (baseName === "") {
        return name2;
      } else {
        return baseName + "." + name2;
      }
    }
    function isHandledReflectionObject(obj) {
      return obj instanceof Protobuf.Service || obj instanceof Protobuf.Type || obj instanceof Protobuf.Enum;
    }
    function isNamespaceBase(obj) {
      return obj instanceof Protobuf.Namespace || obj instanceof Protobuf.Root;
    }
    function getAllHandledReflectionObjects(obj, parentName) {
      const objName = joinName(parentName, obj.name);
      if (isHandledReflectionObject(obj)) {
        return [[objName, obj]];
      } else {
        if (isNamespaceBase(obj) && typeof obj.nested !== "undefined") {
          return Object.keys(obj.nested).map((name2) => {
            return getAllHandledReflectionObjects(obj.nested[name2], objName);
          }).reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
        }
      }
      return [];
    }
    function createDeserializer(cls, options) {
      return function deserialize(argBuf) {
        return cls.toObject(cls.decode(argBuf), options);
      };
    }
    function createSerializer(cls) {
      return function serialize(arg) {
        if (Array.isArray(arg)) {
          throw new Error(`Failed to serialize message: expected object with ${cls.name} structure, got array instead`);
        }
        const message2 = cls.fromObject(arg);
        return cls.encode(message2).finish();
      };
    }
    function mapMethodOptions(options) {
      return (options || []).reduce((obj, item) => {
        for (const [key, value] of Object.entries(item)) {
          switch (key) {
            case "uninterpreted_option":
              obj.uninterpreted_option.push(item.uninterpreted_option);
              break;
            default:
              obj[key] = value;
          }
        }
        return obj;
      }, {
        deprecated: false,
        idempotency_level: IdempotencyLevel.IDEMPOTENCY_UNKNOWN,
        uninterpreted_option: []
      });
    }
    function createMethodDefinition(method2, serviceName, options, fileDescriptors) {
      const requestType = method2.resolvedRequestType;
      const responseType = method2.resolvedResponseType;
      return {
        path: "/" + serviceName + "/" + method2.name,
        requestStream: !!method2.requestStream,
        responseStream: !!method2.responseStream,
        requestSerialize: createSerializer(requestType),
        requestDeserialize: createDeserializer(requestType, options),
        responseSerialize: createSerializer(responseType),
        responseDeserialize: createDeserializer(responseType, options),
        // TODO(murgatroid99): Find a better way to handle this
        originalName: camelCase(method2.name),
        requestType: createMessageDefinition(requestType, fileDescriptors),
        responseType: createMessageDefinition(responseType, fileDescriptors),
        options: mapMethodOptions(method2.parsedOptions)
      };
    }
    function createServiceDefinition(service2, name2, options, fileDescriptors) {
      const def = {};
      for (const method2 of service2.methodsArray) {
        def[method2.name] = createMethodDefinition(method2, name2, options, fileDescriptors);
      }
      return def;
    }
    function createMessageDefinition(message2, fileDescriptors) {
      const messageDescriptor = message2.toDescriptor("proto3");
      return {
        format: "Protocol Buffer 3 DescriptorProto",
        type: messageDescriptor.$type.toObject(messageDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
      };
    }
    function createEnumDefinition(enumType, fileDescriptors) {
      const enumDescriptor = enumType.toDescriptor("proto3");
      return {
        format: "Protocol Buffer 3 EnumDescriptorProto",
        type: enumDescriptor.$type.toObject(enumDescriptor, descriptorOptions),
        fileDescriptorProtos: fileDescriptors
      };
    }
    function createDefinition(obj, name2, options, fileDescriptors) {
      if (obj instanceof Protobuf.Service) {
        return createServiceDefinition(obj, name2, options, fileDescriptors);
      } else if (obj instanceof Protobuf.Type) {
        return createMessageDefinition(obj, fileDescriptors);
      } else if (obj instanceof Protobuf.Enum) {
        return createEnumDefinition(obj, fileDescriptors);
      } else {
        throw new Error("Type mismatch in reflection object handling");
      }
    }
    function createPackageDefinition(root2, options) {
      const def = {};
      root2.resolveAll();
      const descriptorList = root2.toDescriptor("proto3").file;
      const bufferList = descriptorList.map((value) => Buffer.from(descriptor2.FileDescriptorProto.encode(value).finish()));
      for (const [name2, obj] of getAllHandledReflectionObjects(root2, "")) {
        def[name2] = createDefinition(obj, name2, options, bufferList);
      }
      return def;
    }
    function createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options) {
      options = options || {};
      const root2 = Protobuf.Root.fromDescriptor(decodedDescriptorSet);
      root2.resolveAll();
      return createPackageDefinition(root2, options);
    }
    function load(filename, options) {
      return (0, util_1.loadProtosWithOptions)(filename, options).then((loadedRoot) => {
        return createPackageDefinition(loadedRoot, options);
      });
    }
    exports.load = load;
    function loadSync(filename, options) {
      const loadedRoot = (0, util_1.loadProtosWithOptionsSync)(filename, options);
      return createPackageDefinition(loadedRoot, options);
    }
    exports.loadSync = loadSync;
    function fromJSON(json, options) {
      options = options || {};
      const loadedRoot = Protobuf.Root.fromJSON(json);
      loadedRoot.resolveAll();
      return createPackageDefinition(loadedRoot, options);
    }
    exports.fromJSON = fromJSON;
    function loadFileDescriptorSetFromBuffer(descriptorSet, options) {
      const decodedDescriptorSet = descriptor2.FileDescriptorSet.decode(descriptorSet);
      return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
    }
    exports.loadFileDescriptorSetFromBuffer = loadFileDescriptorSetFromBuffer;
    function loadFileDescriptorSetFromObject(descriptorSet, options) {
      const decodedDescriptorSet = descriptor2.FileDescriptorSet.fromObject(descriptorSet);
      return createPackageDefinitionFromDescriptorSet(decodedDescriptorSet, options);
    }
    exports.loadFileDescriptorSetFromObject = loadFileDescriptorSetFromObject;
    (0, util_1.addCommonProtos)();
  })(src$1);
  return src$1;
}
var hasRequiredChannelz;
function requireChannelz() {
  if (hasRequiredChannelz) return channelz;
  hasRequiredChannelz = 1;
  Object.defineProperty(channelz, "__esModule", { value: true });
  channelz.setup = channelz.getChannelzServiceDefinition = channelz.getChannelzHandlers = channelz.unregisterChannelzRef = channelz.registerChannelzSocket = channelz.registerChannelzServer = channelz.registerChannelzSubchannel = channelz.registerChannelzChannel = channelz.ChannelzCallTrackerStub = channelz.ChannelzCallTracker = channelz.ChannelzChildrenTrackerStub = channelz.ChannelzChildrenTracker = channelz.ChannelzTrace = channelz.ChannelzTraceStub = void 0;
  const net_12 = require$$0$3;
  const ordered_map_1 = require$$1;
  const connectivity_state_12 = connectivityState;
  const constants_12 = constants;
  const subchannel_address_12 = subchannelAddress;
  const admin_1 = admin;
  const make_client_1 = requireMakeClient();
  function channelRefToMessage(ref) {
    return {
      channel_id: ref.id,
      name: ref.name
    };
  }
  function subchannelRefToMessage(ref) {
    return {
      subchannel_id: ref.id,
      name: ref.name
    };
  }
  function serverRefToMessage(ref) {
    return {
      server_id: ref.id
    };
  }
  function socketRefToMessage(ref) {
    return {
      socket_id: ref.id,
      name: ref.name
    };
  }
  const TARGET_RETAINED_TRACES = 32;
  const DEFAULT_MAX_RESULTS = 100;
  class ChannelzTraceStub {
    constructor() {
      this.events = [];
      this.creationTimestamp = /* @__PURE__ */ new Date();
      this.eventsLogged = 0;
    }
    addTrace() {
    }
    getTraceMessage() {
      return {
        creation_timestamp: dateToProtoTimestamp(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: []
      };
    }
  }
  channelz.ChannelzTraceStub = ChannelzTraceStub;
  class ChannelzTrace {
    constructor() {
      this.events = [];
      this.eventsLogged = 0;
      this.creationTimestamp = /* @__PURE__ */ new Date();
    }
    addTrace(severity, description2, child) {
      const timestamp = /* @__PURE__ */ new Date();
      this.events.push({
        description: description2,
        severity,
        timestamp,
        childChannel: (child === null || child === void 0 ? void 0 : child.kind) === "channel" ? child : void 0,
        childSubchannel: (child === null || child === void 0 ? void 0 : child.kind) === "subchannel" ? child : void 0
      });
      if (this.events.length >= TARGET_RETAINED_TRACES * 2) {
        this.events = this.events.slice(TARGET_RETAINED_TRACES);
      }
      this.eventsLogged += 1;
    }
    getTraceMessage() {
      return {
        creation_timestamp: dateToProtoTimestamp(this.creationTimestamp),
        num_events_logged: this.eventsLogged,
        events: this.events.map((event) => {
          return {
            description: event.description,
            severity: event.severity,
            timestamp: dateToProtoTimestamp(event.timestamp),
            channel_ref: event.childChannel ? channelRefToMessage(event.childChannel) : null,
            subchannel_ref: event.childSubchannel ? subchannelRefToMessage(event.childSubchannel) : null
          };
        })
      };
    }
  }
  channelz.ChannelzTrace = ChannelzTrace;
  class ChannelzChildrenTracker {
    constructor() {
      this.channelChildren = new ordered_map_1.OrderedMap();
      this.subchannelChildren = new ordered_map_1.OrderedMap();
      this.socketChildren = new ordered_map_1.OrderedMap();
      this.trackerMap = {
        [
          "channel"
          /* EntityTypes.channel */
        ]: this.channelChildren,
        [
          "subchannel"
          /* EntityTypes.subchannel */
        ]: this.subchannelChildren,
        [
          "socket"
          /* EntityTypes.socket */
        ]: this.socketChildren
      };
    }
    refChild(child) {
      const tracker = this.trackerMap[child.kind];
      const trackedChild = tracker.find(child.id);
      if (trackedChild.equals(tracker.end())) {
        tracker.setElement(child.id, {
          ref: child,
          count: 1
        }, trackedChild);
      } else {
        trackedChild.pointer[1].count += 1;
      }
    }
    unrefChild(child) {
      const tracker = this.trackerMap[child.kind];
      const trackedChild = tracker.getElementByKey(child.id);
      if (trackedChild !== void 0) {
        trackedChild.count -= 1;
        if (trackedChild.count === 0) {
          tracker.eraseElementByKey(child.id);
        }
      }
    }
    getChildLists() {
      return {
        channels: this.channelChildren,
        subchannels: this.subchannelChildren,
        sockets: this.socketChildren
      };
    }
  }
  channelz.ChannelzChildrenTracker = ChannelzChildrenTracker;
  class ChannelzChildrenTrackerStub extends ChannelzChildrenTracker {
    refChild() {
    }
    unrefChild() {
    }
  }
  channelz.ChannelzChildrenTrackerStub = ChannelzChildrenTrackerStub;
  class ChannelzCallTracker {
    constructor() {
      this.callsStarted = 0;
      this.callsSucceeded = 0;
      this.callsFailed = 0;
      this.lastCallStartedTimestamp = null;
    }
    addCallStarted() {
      this.callsStarted += 1;
      this.lastCallStartedTimestamp = /* @__PURE__ */ new Date();
    }
    addCallSucceeded() {
      this.callsSucceeded += 1;
    }
    addCallFailed() {
      this.callsFailed += 1;
    }
  }
  channelz.ChannelzCallTracker = ChannelzCallTracker;
  class ChannelzCallTrackerStub extends ChannelzCallTracker {
    addCallStarted() {
    }
    addCallSucceeded() {
    }
    addCallFailed() {
    }
  }
  channelz.ChannelzCallTrackerStub = ChannelzCallTrackerStub;
  const entityMaps = {
    [
      "channel"
      /* EntityTypes.channel */
    ]: new ordered_map_1.OrderedMap(),
    [
      "subchannel"
      /* EntityTypes.subchannel */
    ]: new ordered_map_1.OrderedMap(),
    [
      "server"
      /* EntityTypes.server */
    ]: new ordered_map_1.OrderedMap(),
    [
      "socket"
      /* EntityTypes.socket */
    ]: new ordered_map_1.OrderedMap()
  };
  const generateRegisterFn = (kind) => {
    let nextId = 1;
    function getNextId() {
      return nextId++;
    }
    const entityMap = entityMaps[kind];
    return (name2, getInfo, channelzEnabled) => {
      const id = getNextId();
      const ref = { id, name: name2, kind };
      if (channelzEnabled) {
        entityMap.setElement(id, { ref, getInfo });
      }
      return ref;
    };
  };
  channelz.registerChannelzChannel = generateRegisterFn(
    "channel"
    /* EntityTypes.channel */
  );
  channelz.registerChannelzSubchannel = generateRegisterFn(
    "subchannel"
    /* EntityTypes.subchannel */
  );
  channelz.registerChannelzServer = generateRegisterFn(
    "server"
    /* EntityTypes.server */
  );
  channelz.registerChannelzSocket = generateRegisterFn(
    "socket"
    /* EntityTypes.socket */
  );
  function unregisterChannelzRef(ref) {
    entityMaps[ref.kind].eraseElementByKey(ref.id);
  }
  channelz.unregisterChannelzRef = unregisterChannelzRef;
  function parseIPv6Section(addressSection) {
    const numberValue = Number.parseInt(addressSection, 16);
    return [numberValue / 256 | 0, numberValue % 256];
  }
  function parseIPv6Chunk(addressChunk) {
    if (addressChunk === "") {
      return [];
    }
    const bytePairs = addressChunk.split(":").map((section) => parseIPv6Section(section));
    const result = [];
    return result.concat(...bytePairs);
  }
  function ipAddressStringToBuffer(ipAddress) {
    if ((0, net_12.isIPv4)(ipAddress)) {
      return Buffer.from(Uint8Array.from(ipAddress.split(".").map((segment) => Number.parseInt(segment))));
    } else if ((0, net_12.isIPv6)(ipAddress)) {
      let leftSection;
      let rightSection;
      const doubleColonIndex = ipAddress.indexOf("::");
      if (doubleColonIndex === -1) {
        leftSection = ipAddress;
        rightSection = "";
      } else {
        leftSection = ipAddress.substring(0, doubleColonIndex);
        rightSection = ipAddress.substring(doubleColonIndex + 2);
      }
      const leftBuffer = Buffer.from(parseIPv6Chunk(leftSection));
      const rightBuffer = Buffer.from(parseIPv6Chunk(rightSection));
      const middleBuffer = Buffer.alloc(16 - leftBuffer.length - rightBuffer.length, 0);
      return Buffer.concat([leftBuffer, middleBuffer, rightBuffer]);
    } else {
      return null;
    }
  }
  function connectivityStateToMessage(state) {
    switch (state) {
      case connectivity_state_12.ConnectivityState.CONNECTING:
        return {
          state: "CONNECTING"
        };
      case connectivity_state_12.ConnectivityState.IDLE:
        return {
          state: "IDLE"
        };
      case connectivity_state_12.ConnectivityState.READY:
        return {
          state: "READY"
        };
      case connectivity_state_12.ConnectivityState.SHUTDOWN:
        return {
          state: "SHUTDOWN"
        };
      case connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE:
        return {
          state: "TRANSIENT_FAILURE"
        };
      default:
        return {
          state: "UNKNOWN"
        };
    }
  }
  function dateToProtoTimestamp(date) {
    if (!date) {
      return null;
    }
    const millisSinceEpoch = date.getTime();
    return {
      seconds: millisSinceEpoch / 1e3 | 0,
      nanos: millisSinceEpoch % 1e3 * 1e6
    };
  }
  function getChannelMessage(channelEntry) {
    const resolvedInfo = channelEntry.getInfo();
    const channelRef = [];
    const subchannelRef = [];
    resolvedInfo.children.channels.forEach((el) => {
      channelRef.push(channelRefToMessage(el[1].ref));
    });
    resolvedInfo.children.subchannels.forEach((el) => {
      subchannelRef.push(subchannelRefToMessage(el[1].ref));
    });
    return {
      ref: channelRefToMessage(channelEntry.ref),
      data: {
        target: resolvedInfo.target,
        state: connectivityStateToMessage(resolvedInfo.state),
        calls_started: resolvedInfo.callTracker.callsStarted,
        calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
        calls_failed: resolvedInfo.callTracker.callsFailed,
        last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
        trace: resolvedInfo.trace.getTraceMessage()
      },
      channel_ref: channelRef,
      subchannel_ref: subchannelRef
    };
  }
  function GetChannel(call2, callback) {
    const channelId = parseInt(call2.request.channel_id, 10);
    const channelEntry = entityMaps[
      "channel"
      /* EntityTypes.channel */
    ].getElementByKey(channelId);
    if (channelEntry === void 0) {
      callback({
        code: constants_12.Status.NOT_FOUND,
        details: "No channel data found for id " + channelId
      });
      return;
    }
    callback(null, { channel: getChannelMessage(channelEntry) });
  }
  function GetTopChannels(call2, callback) {
    const maxResults = parseInt(call2.request.max_results, 10) || DEFAULT_MAX_RESULTS;
    const resultList = [];
    const startId = parseInt(call2.request.start_channel_id, 10);
    const channelEntries = entityMaps[
      "channel"
      /* EntityTypes.channel */
    ];
    let i;
    for (i = channelEntries.lowerBound(startId); !i.equals(channelEntries.end()) && resultList.length < maxResults; i = i.next()) {
      resultList.push(getChannelMessage(i.pointer[1]));
    }
    callback(null, {
      channel: resultList,
      end: i.equals(channelEntries.end())
    });
  }
  function getServerMessage(serverEntry) {
    const resolvedInfo = serverEntry.getInfo();
    const listenSocket = [];
    resolvedInfo.listenerChildren.sockets.forEach((el) => {
      listenSocket.push(socketRefToMessage(el[1].ref));
    });
    return {
      ref: serverRefToMessage(serverEntry.ref),
      data: {
        calls_started: resolvedInfo.callTracker.callsStarted,
        calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
        calls_failed: resolvedInfo.callTracker.callsFailed,
        last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
        trace: resolvedInfo.trace.getTraceMessage()
      },
      listen_socket: listenSocket
    };
  }
  function GetServer(call2, callback) {
    const serverId = parseInt(call2.request.server_id, 10);
    const serverEntries = entityMaps[
      "server"
      /* EntityTypes.server */
    ];
    const serverEntry = serverEntries.getElementByKey(serverId);
    if (serverEntry === void 0) {
      callback({
        code: constants_12.Status.NOT_FOUND,
        details: "No server data found for id " + serverId
      });
      return;
    }
    callback(null, { server: getServerMessage(serverEntry) });
  }
  function GetServers(call2, callback) {
    const maxResults = parseInt(call2.request.max_results, 10) || DEFAULT_MAX_RESULTS;
    const startId = parseInt(call2.request.start_server_id, 10);
    const serverEntries = entityMaps[
      "server"
      /* EntityTypes.server */
    ];
    const resultList = [];
    let i;
    for (i = serverEntries.lowerBound(startId); !i.equals(serverEntries.end()) && resultList.length < maxResults; i = i.next()) {
      resultList.push(getServerMessage(i.pointer[1]));
    }
    callback(null, {
      server: resultList,
      end: i.equals(serverEntries.end())
    });
  }
  function GetSubchannel(call2, callback) {
    const subchannelId = parseInt(call2.request.subchannel_id, 10);
    const subchannelEntry = entityMaps[
      "subchannel"
      /* EntityTypes.subchannel */
    ].getElementByKey(subchannelId);
    if (subchannelEntry === void 0) {
      callback({
        code: constants_12.Status.NOT_FOUND,
        details: "No subchannel data found for id " + subchannelId
      });
      return;
    }
    const resolvedInfo = subchannelEntry.getInfo();
    const listenSocket = [];
    resolvedInfo.children.sockets.forEach((el) => {
      listenSocket.push(socketRefToMessage(el[1].ref));
    });
    const subchannelMessage = {
      ref: subchannelRefToMessage(subchannelEntry.ref),
      data: {
        target: resolvedInfo.target,
        state: connectivityStateToMessage(resolvedInfo.state),
        calls_started: resolvedInfo.callTracker.callsStarted,
        calls_succeeded: resolvedInfo.callTracker.callsSucceeded,
        calls_failed: resolvedInfo.callTracker.callsFailed,
        last_call_started_timestamp: dateToProtoTimestamp(resolvedInfo.callTracker.lastCallStartedTimestamp),
        trace: resolvedInfo.trace.getTraceMessage()
      },
      socket_ref: listenSocket
    };
    callback(null, { subchannel: subchannelMessage });
  }
  function subchannelAddressToAddressMessage(subchannelAddress2) {
    var _a;
    if ((0, subchannel_address_12.isTcpSubchannelAddress)(subchannelAddress2)) {
      return {
        address: "tcpip_address",
        tcpip_address: {
          ip_address: (_a = ipAddressStringToBuffer(subchannelAddress2.host)) !== null && _a !== void 0 ? _a : void 0,
          port: subchannelAddress2.port
        }
      };
    } else {
      return {
        address: "uds_address",
        uds_address: {
          filename: subchannelAddress2.path
        }
      };
    }
  }
  function GetSocket(call2, callback) {
    var _a, _b, _c, _d, _e;
    const socketId = parseInt(call2.request.socket_id, 10);
    const socketEntry = entityMaps[
      "socket"
      /* EntityTypes.socket */
    ].getElementByKey(socketId);
    if (socketEntry === void 0) {
      callback({
        code: constants_12.Status.NOT_FOUND,
        details: "No socket data found for id " + socketId
      });
      return;
    }
    const resolvedInfo = socketEntry.getInfo();
    const securityMessage = resolvedInfo.security ? {
      model: "tls",
      tls: {
        cipher_suite: resolvedInfo.security.cipherSuiteStandardName ? "standard_name" : "other_name",
        standard_name: (_a = resolvedInfo.security.cipherSuiteStandardName) !== null && _a !== void 0 ? _a : void 0,
        other_name: (_b = resolvedInfo.security.cipherSuiteOtherName) !== null && _b !== void 0 ? _b : void 0,
        local_certificate: (_c = resolvedInfo.security.localCertificate) !== null && _c !== void 0 ? _c : void 0,
        remote_certificate: (_d = resolvedInfo.security.remoteCertificate) !== null && _d !== void 0 ? _d : void 0
      }
    } : null;
    const socketMessage = {
      ref: socketRefToMessage(socketEntry.ref),
      local: resolvedInfo.localAddress ? subchannelAddressToAddressMessage(resolvedInfo.localAddress) : null,
      remote: resolvedInfo.remoteAddress ? subchannelAddressToAddressMessage(resolvedInfo.remoteAddress) : null,
      remote_name: (_e = resolvedInfo.remoteName) !== null && _e !== void 0 ? _e : void 0,
      security: securityMessage,
      data: {
        keep_alives_sent: resolvedInfo.keepAlivesSent,
        streams_started: resolvedInfo.streamsStarted,
        streams_succeeded: resolvedInfo.streamsSucceeded,
        streams_failed: resolvedInfo.streamsFailed,
        last_local_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastLocalStreamCreatedTimestamp),
        last_remote_stream_created_timestamp: dateToProtoTimestamp(resolvedInfo.lastRemoteStreamCreatedTimestamp),
        messages_received: resolvedInfo.messagesReceived,
        messages_sent: resolvedInfo.messagesSent,
        last_message_received_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageReceivedTimestamp),
        last_message_sent_timestamp: dateToProtoTimestamp(resolvedInfo.lastMessageSentTimestamp),
        local_flow_control_window: resolvedInfo.localFlowControlWindow ? { value: resolvedInfo.localFlowControlWindow } : null,
        remote_flow_control_window: resolvedInfo.remoteFlowControlWindow ? { value: resolvedInfo.remoteFlowControlWindow } : null
      }
    };
    callback(null, { socket: socketMessage });
  }
  function GetServerSockets(call2, callback) {
    const serverId = parseInt(call2.request.server_id, 10);
    const serverEntry = entityMaps[
      "server"
      /* EntityTypes.server */
    ].getElementByKey(serverId);
    if (serverEntry === void 0) {
      callback({
        code: constants_12.Status.NOT_FOUND,
        details: "No server data found for id " + serverId
      });
      return;
    }
    const startId = parseInt(call2.request.start_socket_id, 10);
    const maxResults = parseInt(call2.request.max_results, 10) || DEFAULT_MAX_RESULTS;
    const resolvedInfo = serverEntry.getInfo();
    const allSockets = resolvedInfo.sessionChildren.sockets;
    const resultList = [];
    let i;
    for (i = allSockets.lowerBound(startId); !i.equals(allSockets.end()) && resultList.length < maxResults; i = i.next()) {
      resultList.push(socketRefToMessage(i.pointer[1].ref));
    }
    callback(null, {
      socket_ref: resultList,
      end: i.equals(allSockets.end())
    });
  }
  function getChannelzHandlers() {
    return {
      GetChannel,
      GetTopChannels,
      GetServer,
      GetServers,
      GetSubchannel,
      GetSocket,
      GetServerSockets
    };
  }
  channelz.getChannelzHandlers = getChannelzHandlers;
  let loadedChannelzDefinition = null;
  function getChannelzServiceDefinition() {
    if (loadedChannelzDefinition) {
      return loadedChannelzDefinition;
    }
    const loaderLoadSync = requireSrc().loadSync;
    const loadedProto = loaderLoadSync("channelz.proto", {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
      includeDirs: [`${__dirname}/../../proto`]
    });
    const channelzGrpcObject = (0, make_client_1.loadPackageDefinition)(loadedProto);
    loadedChannelzDefinition = channelzGrpcObject.grpc.channelz.v1.Channelz.service;
    return loadedChannelzDefinition;
  }
  channelz.getChannelzServiceDefinition = getChannelzServiceDefinition;
  function setup() {
    (0, admin_1.registerAdminService)(getChannelzServiceDefinition, getChannelzHandlers);
  }
  channelz.setup = setup;
  return channelz;
}
var hasRequiredSubchannel;
function requireSubchannel() {
  if (hasRequiredSubchannel) return subchannel;
  hasRequiredSubchannel = 1;
  Object.defineProperty(subchannel, "__esModule", { value: true });
  subchannel.Subchannel = void 0;
  const connectivity_state_12 = connectivityState;
  const backoff_timeout_12 = requireBackoffTimeout();
  const logging2 = logging$9;
  const constants_12 = constants;
  const uri_parser_12 = uriParser;
  const subchannel_address_12 = subchannelAddress;
  const channelz_12 = requireChannelz();
  const TRACER_NAME2 = "subchannel";
  const KEEPALIVE_MAX_TIME_MS2 = ~(1 << 31);
  class Subchannel {
    /**
     * A class representing a connection to a single backend.
     * @param channelTarget The target string for the channel as a whole
     * @param subchannelAddress The address for the backend that this subchannel
     *     will connect to
     * @param options The channel options, plus any specific subchannel options
     *     for this subchannel
     * @param credentials The channel credentials used to establish this
     *     connection
     */
    constructor(channelTarget, subchannelAddress2, options, credentials, connector) {
      var _a;
      this.channelTarget = channelTarget;
      this.subchannelAddress = subchannelAddress2;
      this.options = options;
      this.credentials = credentials;
      this.connector = connector;
      this.connectivityState = connectivity_state_12.ConnectivityState.IDLE;
      this.transport = null;
      this.continueConnecting = false;
      this.stateListeners = /* @__PURE__ */ new Set();
      this.refcount = 0;
      this.channelzEnabled = true;
      const backoffOptions = {
        initialDelay: options["grpc.initial_reconnect_backoff_ms"],
        maxDelay: options["grpc.max_reconnect_backoff_ms"]
      };
      this.backoffTimeout = new backoff_timeout_12.BackoffTimeout(() => {
        this.handleBackoffTimer();
      }, backoffOptions);
      this.backoffTimeout.unref();
      this.subchannelAddressString = (0, subchannel_address_12.subchannelAddressToString)(subchannelAddress2);
      this.keepaliveTime = (_a = options["grpc.keepalive_time_ms"]) !== null && _a !== void 0 ? _a : -1;
      if (options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
        this.channelzTrace = new channelz_12.ChannelzTraceStub();
        this.callTracker = new channelz_12.ChannelzCallTrackerStub();
        this.childrenTracker = new channelz_12.ChannelzChildrenTrackerStub();
        this.streamTracker = new channelz_12.ChannelzCallTrackerStub();
      } else {
        this.channelzTrace = new channelz_12.ChannelzTrace();
        this.callTracker = new channelz_12.ChannelzCallTracker();
        this.childrenTracker = new channelz_12.ChannelzChildrenTracker();
        this.streamTracker = new channelz_12.ChannelzCallTracker();
      }
      this.channelzRef = (0, channelz_12.registerChannelzSubchannel)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled);
      this.channelzTrace.addTrace("CT_INFO", "Subchannel created");
      this.trace("Subchannel constructed with options " + JSON.stringify(options, void 0, 2));
      credentials._ref();
    }
    getChannelzInfo() {
      return {
        state: this.connectivityState,
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists(),
        target: this.subchannelAddressString
      };
    }
    trace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    refTrace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, "subchannel_refcount", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    handleBackoffTimer() {
      if (this.continueConnecting) {
        this.transitionToState([connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_12.ConnectivityState.CONNECTING);
      } else {
        this.transitionToState([connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_12.ConnectivityState.IDLE);
      }
    }
    /**
     * Start a backoff timer with the current nextBackoff timeout
     */
    startBackoff() {
      this.backoffTimeout.runOnce();
    }
    stopBackoff() {
      this.backoffTimeout.stop();
      this.backoffTimeout.reset();
    }
    startConnectingInternal() {
      let options = this.options;
      if (options["grpc.keepalive_time_ms"]) {
        const adjustedKeepaliveTime = Math.min(this.keepaliveTime, KEEPALIVE_MAX_TIME_MS2);
        options = Object.assign(Object.assign({}, options), { "grpc.keepalive_time_ms": adjustedKeepaliveTime });
      }
      this.connector.connect(this.subchannelAddress, this.credentials, options).then((transport2) => {
        if (this.transitionToState([connectivity_state_12.ConnectivityState.CONNECTING], connectivity_state_12.ConnectivityState.READY)) {
          this.transport = transport2;
          if (this.channelzEnabled) {
            this.childrenTracker.refChild(transport2.getChannelzRef());
          }
          transport2.addDisconnectListener((tooManyPings) => {
            this.transitionToState([connectivity_state_12.ConnectivityState.READY], connectivity_state_12.ConnectivityState.IDLE);
            if (tooManyPings && this.keepaliveTime > 0) {
              this.keepaliveTime *= 2;
              logging2.log(constants_12.LogVerbosity.ERROR, `Connection to ${(0, uri_parser_12.uriToString)(this.channelTarget)} at ${this.subchannelAddressString} rejected by server because of excess pings. Increasing ping interval to ${this.keepaliveTime} ms`);
            }
          });
        } else {
          transport2.shutdown();
        }
      }, (error2) => {
        this.transitionToState([connectivity_state_12.ConnectivityState.CONNECTING], connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE, `${error2}`);
      });
    }
    /**
     * Initiate a state transition from any element of oldStates to the new
     * state. If the current connectivityState is not in oldStates, do nothing.
     * @param oldStates The set of states to transition from
     * @param newState The state to transition to
     * @returns True if the state changed, false otherwise
     */
    transitionToState(oldStates, newState, errorMessage) {
      var _a, _b;
      if (oldStates.indexOf(this.connectivityState) === -1) {
        return false;
      }
      if (errorMessage) {
        this.trace(connectivity_state_12.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_12.ConnectivityState[newState] + ' with error "' + errorMessage + '"');
      } else {
        this.trace(connectivity_state_12.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_12.ConnectivityState[newState]);
      }
      if (this.channelzEnabled) {
        this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + connectivity_state_12.ConnectivityState[newState]);
      }
      const previousState = this.connectivityState;
      this.connectivityState = newState;
      switch (newState) {
        case connectivity_state_12.ConnectivityState.READY:
          this.stopBackoff();
          break;
        case connectivity_state_12.ConnectivityState.CONNECTING:
          this.startBackoff();
          this.startConnectingInternal();
          this.continueConnecting = false;
          break;
        case connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE:
          if (this.channelzEnabled && this.transport) {
            this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          }
          (_a = this.transport) === null || _a === void 0 ? void 0 : _a.shutdown();
          this.transport = null;
          if (!this.backoffTimeout.isRunning()) {
            process.nextTick(() => {
              this.handleBackoffTimer();
            });
          }
          break;
        case connectivity_state_12.ConnectivityState.IDLE:
          if (this.channelzEnabled && this.transport) {
            this.childrenTracker.unrefChild(this.transport.getChannelzRef());
          }
          (_b = this.transport) === null || _b === void 0 ? void 0 : _b.shutdown();
          this.transport = null;
          break;
        default:
          throw new Error(`Invalid state: unknown ConnectivityState ${newState}`);
      }
      for (const listener of this.stateListeners) {
        listener(this, previousState, newState, this.keepaliveTime, errorMessage);
      }
      return true;
    }
    ref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount + 1));
      this.refcount += 1;
    }
    unref() {
      this.refTrace("refcount " + this.refcount + " -> " + (this.refcount - 1));
      this.refcount -= 1;
      if (this.refcount === 0) {
        this.channelzTrace.addTrace("CT_INFO", "Shutting down");
        (0, channelz_12.unregisterChannelzRef)(this.channelzRef);
        this.credentials._unref();
        process.nextTick(() => {
          this.transitionToState([connectivity_state_12.ConnectivityState.CONNECTING, connectivity_state_12.ConnectivityState.READY], connectivity_state_12.ConnectivityState.IDLE);
        });
      }
    }
    unrefIfOneRef() {
      if (this.refcount === 1) {
        this.unref();
        return true;
      }
      return false;
    }
    createCall(metadata2, host, method2, listener) {
      if (!this.transport) {
        throw new Error("Cannot create call, subchannel not READY");
      }
      let statsTracker;
      if (this.channelzEnabled) {
        this.callTracker.addCallStarted();
        this.streamTracker.addCallStarted();
        statsTracker = {
          onCallEnd: (status) => {
            if (status.code === constants_12.Status.OK) {
              this.callTracker.addCallSucceeded();
            } else {
              this.callTracker.addCallFailed();
            }
          }
        };
      } else {
        statsTracker = {};
      }
      return this.transport.createCall(metadata2, host, method2, listener, statsTracker);
    }
    /**
     * If the subchannel is currently IDLE, start connecting and switch to the
     * CONNECTING state. If the subchannel is current in TRANSIENT_FAILURE,
     * the next time it would transition to IDLE, start connecting again instead.
     * Otherwise, do nothing.
     */
    startConnecting() {
      process.nextTick(() => {
        if (!this.transitionToState([connectivity_state_12.ConnectivityState.IDLE], connectivity_state_12.ConnectivityState.CONNECTING)) {
          if (this.connectivityState === connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE) {
            this.continueConnecting = true;
          }
        }
      });
    }
    /**
     * Get the subchannel's current connectivity state.
     */
    getConnectivityState() {
      return this.connectivityState;
    }
    /**
     * Add a listener function to be called whenever the subchannel's
     * connectivity state changes.
     * @param listener
     */
    addConnectivityStateListener(listener) {
      this.stateListeners.add(listener);
    }
    /**
     * Remove a listener previously added with `addConnectivityStateListener`
     * @param listener A reference to a function previously passed to
     *     `addConnectivityStateListener`
     */
    removeConnectivityStateListener(listener) {
      this.stateListeners.delete(listener);
    }
    /**
     * Reset the backoff timeout, and immediately start connecting if in backoff.
     */
    resetBackoff() {
      process.nextTick(() => {
        this.backoffTimeout.reset();
        this.transitionToState([connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE], connectivity_state_12.ConnectivityState.CONNECTING);
      });
    }
    getAddress() {
      return this.subchannelAddressString;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    isHealthy() {
      return true;
    }
    addHealthStateWatcher(listener) {
    }
    removeHealthStateWatcher(listener) {
    }
    getRealSubchannel() {
      return this;
    }
    realSubchannelEquals(other) {
      return other.getRealSubchannel() === this;
    }
    throttleKeepalive(newKeepaliveTime) {
      if (newKeepaliveTime > this.keepaliveTime) {
        this.keepaliveTime = newKeepaliveTime;
      }
    }
  }
  subchannel.Subchannel = Subchannel;
  return subchannel;
}
var transport = {};
var http_proxy = {};
var resolverDns = {};
var environment = {};
var hasRequiredEnvironment;
function requireEnvironment() {
  if (hasRequiredEnvironment) return environment;
  hasRequiredEnvironment = 1;
  var _a;
  Object.defineProperty(environment, "__esModule", { value: true });
  environment.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = void 0;
  environment.GRPC_NODE_USE_ALTERNATIVE_RESOLVER = ((_a = process.env.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) !== null && _a !== void 0 ? _a : "false") === "true";
  return environment;
}
var hasRequiredResolverDns;
function requireResolverDns() {
  if (hasRequiredResolverDns) return resolverDns;
  hasRequiredResolverDns = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setup = exports.DEFAULT_PORT = void 0;
    const resolver_12 = resolver;
    const dns_1 = require$$1$4;
    const service_config_12 = requireServiceConfig();
    const constants_12 = constants;
    const metadata_12 = metadata;
    const logging2 = logging$9;
    const constants_22 = constants;
    const uri_parser_12 = uriParser;
    const net_12 = require$$0$3;
    const backoff_timeout_12 = requireBackoffTimeout();
    const environment_1 = requireEnvironment();
    const TRACER_NAME2 = "dns_resolver";
    function trace2(text) {
      logging2.trace(constants_22.LogVerbosity.DEBUG, TRACER_NAME2, text);
    }
    exports.DEFAULT_PORT = 443;
    const DEFAULT_MIN_TIME_BETWEEN_RESOLUTIONS_MS = 3e4;
    class DnsResolver {
      constructor(target, listener, channelOptions2) {
        var _a, _b, _c;
        this.target = target;
        this.listener = listener;
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        this.continueResolving = false;
        this.isNextResolutionTimerRunning = false;
        this.isServiceConfigEnabled = true;
        this.returnedIpResult = false;
        this.alternativeResolver = new dns_1.promises.Resolver();
        trace2("Resolver constructed for target " + (0, uri_parser_12.uriToString)(target));
        if (target.authority) {
          this.alternativeResolver.setServers([target.authority]);
        }
        const hostPort = (0, uri_parser_12.splitHostPort)(target.path);
        if (hostPort === null) {
          this.ipResult = null;
          this.dnsHostname = null;
          this.port = null;
        } else {
          if ((0, net_12.isIPv4)(hostPort.host) || (0, net_12.isIPv6)(hostPort.host)) {
            this.ipResult = [
              {
                addresses: [
                  {
                    host: hostPort.host,
                    port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : exports.DEFAULT_PORT
                  }
                ]
              }
            ];
            this.dnsHostname = null;
            this.port = null;
          } else {
            this.ipResult = null;
            this.dnsHostname = hostPort.host;
            this.port = (_b = hostPort.port) !== null && _b !== void 0 ? _b : exports.DEFAULT_PORT;
          }
        }
        this.percentage = Math.random() * 100;
        if (channelOptions2["grpc.service_config_disable_resolution"] === 1) {
          this.isServiceConfigEnabled = false;
        }
        this.defaultResolutionError = {
          code: constants_12.Status.UNAVAILABLE,
          details: `Name resolution failed for target ${(0, uri_parser_12.uriToString)(this.target)}`,
          metadata: new metadata_12.Metadata()
        };
        const backoffOptions = {
          initialDelay: channelOptions2["grpc.initial_reconnect_backoff_ms"],
          maxDelay: channelOptions2["grpc.max_reconnect_backoff_ms"]
        };
        this.backoff = new backoff_timeout_12.BackoffTimeout(() => {
          if (this.continueResolving) {
            this.startResolutionWithBackoff();
          }
        }, backoffOptions);
        this.backoff.unref();
        this.minTimeBetweenResolutionsMs = (_c = channelOptions2["grpc.dns_min_time_between_resolutions_ms"]) !== null && _c !== void 0 ? _c : DEFAULT_MIN_TIME_BETWEEN_RESOLUTIONS_MS;
        this.nextResolutionTimer = setTimeout(() => {
        }, 0);
        clearTimeout(this.nextResolutionTimer);
      }
      /**
       * If the target is an IP address, just provide that address as a result.
       * Otherwise, initiate A, AAAA, and TXT lookups
       */
      startResolution() {
        if (this.ipResult !== null) {
          if (!this.returnedIpResult) {
            trace2("Returning IP address for target " + (0, uri_parser_12.uriToString)(this.target));
            setImmediate(() => {
              this.listener.onSuccessfulResolution(this.ipResult, null, null, null, {});
            });
            this.returnedIpResult = true;
          }
          this.backoff.stop();
          this.backoff.reset();
          this.stopNextResolutionTimer();
          return;
        }
        if (this.dnsHostname === null) {
          trace2("Failed to parse DNS address " + (0, uri_parser_12.uriToString)(this.target));
          setImmediate(() => {
            this.listener.onError({
              code: constants_12.Status.UNAVAILABLE,
              details: `Failed to parse DNS address ${(0, uri_parser_12.uriToString)(this.target)}`,
              metadata: new metadata_12.Metadata()
            });
          });
          this.stopNextResolutionTimer();
        } else {
          if (this.pendingLookupPromise !== null) {
            return;
          }
          trace2("Looking up DNS hostname " + this.dnsHostname);
          this.latestLookupResult = null;
          const hostname = this.dnsHostname;
          this.pendingLookupPromise = this.lookup(hostname);
          this.pendingLookupPromise.then((addressList) => {
            if (this.pendingLookupPromise === null) {
              return;
            }
            this.pendingLookupPromise = null;
            this.backoff.reset();
            this.backoff.stop();
            this.latestLookupResult = addressList.map((address) => ({
              addresses: [address]
            }));
            const allAddressesString = "[" + addressList.map((addr) => addr.host + ":" + addr.port).join(",") + "]";
            trace2("Resolved addresses for target " + (0, uri_parser_12.uriToString)(this.target) + ": " + allAddressesString);
            if (this.latestLookupResult.length === 0) {
              this.listener.onError(this.defaultResolutionError);
              return;
            }
            this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
          }, (err) => {
            if (this.pendingLookupPromise === null) {
              return;
            }
            trace2("Resolution error for target " + (0, uri_parser_12.uriToString)(this.target) + ": " + err.message);
            this.pendingLookupPromise = null;
            this.stopNextResolutionTimer();
            this.listener.onError(this.defaultResolutionError);
          });
          if (this.isServiceConfigEnabled && this.pendingTxtPromise === null) {
            this.pendingTxtPromise = this.resolveTxt(hostname);
            this.pendingTxtPromise.then((txtRecord) => {
              if (this.pendingTxtPromise === null) {
                return;
              }
              this.pendingTxtPromise = null;
              try {
                this.latestServiceConfig = (0, service_config_12.extractAndSelectServiceConfig)(txtRecord, this.percentage);
              } catch (err) {
                this.latestServiceConfigError = {
                  code: constants_12.Status.UNAVAILABLE,
                  details: `Parsing service config failed with error ${err.message}`,
                  metadata: new metadata_12.Metadata()
                };
              }
              if (this.latestLookupResult !== null) {
                this.listener.onSuccessfulResolution(this.latestLookupResult, this.latestServiceConfig, this.latestServiceConfigError, null, {});
              }
            }, (err) => {
            });
          }
        }
      }
      async lookup(hostname) {
        if (environment_1.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
          trace2("Using alternative DNS resolver.");
          const records = await Promise.allSettled([
            this.alternativeResolver.resolve4(hostname),
            this.alternativeResolver.resolve6(hostname)
          ]);
          if (records.every((result) => result.status === "rejected")) {
            throw new Error(records[0].reason);
          }
          return records.reduce((acc, result) => {
            return result.status === "fulfilled" ? [...acc, ...result.value] : acc;
          }, []).map((addr) => ({
            host: addr,
            port: +this.port
          }));
        }
        const addressList = await dns_1.promises.lookup(hostname, { all: true });
        return addressList.map((addr) => ({ host: addr.address, port: +this.port }));
      }
      async resolveTxt(hostname) {
        if (environment_1.GRPC_NODE_USE_ALTERNATIVE_RESOLVER) {
          trace2("Using alternative DNS resolver.");
          return this.alternativeResolver.resolveTxt(hostname);
        }
        return dns_1.promises.resolveTxt(hostname);
      }
      startNextResolutionTimer() {
        var _a, _b;
        clearTimeout(this.nextResolutionTimer);
        this.nextResolutionTimer = setTimeout(() => {
          this.stopNextResolutionTimer();
          if (this.continueResolving) {
            this.startResolutionWithBackoff();
          }
        }, this.minTimeBetweenResolutionsMs);
        (_b = (_a = this.nextResolutionTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.isNextResolutionTimerRunning = true;
      }
      stopNextResolutionTimer() {
        clearTimeout(this.nextResolutionTimer);
        this.isNextResolutionTimerRunning = false;
      }
      startResolutionWithBackoff() {
        if (this.pendingLookupPromise === null) {
          this.continueResolving = false;
          this.backoff.runOnce();
          this.startNextResolutionTimer();
          this.startResolution();
        }
      }
      updateResolution() {
        if (this.pendingLookupPromise === null) {
          if (this.isNextResolutionTimerRunning || this.backoff.isRunning()) {
            if (this.isNextResolutionTimerRunning) {
              trace2('resolution update delayed by "min time between resolutions" rate limit');
            } else {
              trace2("resolution update delayed by backoff timer until " + this.backoff.getEndTime().toISOString());
            }
            this.continueResolving = true;
          } else {
            this.startResolutionWithBackoff();
          }
        }
      }
      /**
       * Reset the resolver to the same state it had when it was created. In-flight
       * DNS requests cannot be cancelled, but they are discarded and their results
       * will be ignored.
       */
      destroy() {
        this.continueResolving = false;
        this.backoff.reset();
        this.backoff.stop();
        this.stopNextResolutionTimer();
        this.pendingLookupPromise = null;
        this.pendingTxtPromise = null;
        this.latestLookupResult = null;
        this.latestServiceConfig = null;
        this.latestServiceConfigError = null;
        this.returnedIpResult = false;
      }
      /**
       * Get the default authority for the given target. For IP targets, that is
       * the IP address. For DNS targets, it is the hostname.
       * @param target
       */
      static getDefaultAuthority(target) {
        return target.path;
      }
    }
    function setup() {
      (0, resolver_12.registerResolver)("dns", DnsResolver);
      (0, resolver_12.registerDefaultScheme)("dns");
    }
    exports.setup = setup;
  })(resolverDns);
  return resolverDns;
}
Object.defineProperty(http_proxy, "__esModule", { value: true });
http_proxy.getProxiedConnection = http_proxy.mapProxyName = void 0;
const logging_1 = logging$9;
const constants_1$9 = constants;
const resolver_1$1 = resolver;
const http = require$$3$1;
const tls = require$$0$1;
const logging$7 = logging$9;
const subchannel_address_1$1 = subchannelAddress;
const uri_parser_1$2 = uriParser;
const url_1 = require$$7;
const resolver_dns_1 = requireResolverDns();
const TRACER_NAME$6 = "proxy";
function trace$1(text) {
  logging$7.trace(constants_1$9.LogVerbosity.DEBUG, TRACER_NAME$6, text);
}
function getProxyInfo() {
  let proxyEnv = "";
  let envVar = "";
  if (process.env.grpc_proxy) {
    envVar = "grpc_proxy";
    proxyEnv = process.env.grpc_proxy;
  } else if (process.env.https_proxy) {
    envVar = "https_proxy";
    proxyEnv = process.env.https_proxy;
  } else if (process.env.http_proxy) {
    envVar = "http_proxy";
    proxyEnv = process.env.http_proxy;
  } else {
    return {};
  }
  let proxyUrl;
  try {
    proxyUrl = new url_1.URL(proxyEnv);
  } catch (e) {
    (0, logging_1.log)(constants_1$9.LogVerbosity.ERROR, `cannot parse value of "${envVar}" env var`);
    return {};
  }
  if (proxyUrl.protocol !== "http:") {
    (0, logging_1.log)(constants_1$9.LogVerbosity.ERROR, `"${proxyUrl.protocol}" scheme not supported in proxy URI`);
    return {};
  }
  let userCred = null;
  if (proxyUrl.username) {
    if (proxyUrl.password) {
      (0, logging_1.log)(constants_1$9.LogVerbosity.INFO, "userinfo found in proxy URI");
      userCred = decodeURIComponent(`${proxyUrl.username}:${proxyUrl.password}`);
    } else {
      userCred = proxyUrl.username;
    }
  }
  const hostname = proxyUrl.hostname;
  let port = proxyUrl.port;
  if (port === "") {
    port = "80";
  }
  const result = {
    address: `${hostname}:${port}`
  };
  if (userCred) {
    result.creds = userCred;
  }
  trace$1("Proxy server " + result.address + " set by environment variable " + envVar);
  return result;
}
function getNoProxyHostList() {
  let noProxyStr = process.env.no_grpc_proxy;
  let envVar = "no_grpc_proxy";
  if (!noProxyStr) {
    noProxyStr = process.env.no_proxy;
    envVar = "no_proxy";
  }
  if (noProxyStr) {
    trace$1("No proxy server list set by environment variable " + envVar);
    return noProxyStr.split(",");
  } else {
    return [];
  }
}
function mapProxyName(target, options) {
  var _a;
  const noProxyResult = {
    target,
    extraOptions: {}
  };
  if (((_a = options["grpc.enable_http_proxy"]) !== null && _a !== void 0 ? _a : 1) === 0) {
    return noProxyResult;
  }
  if (target.scheme === "unix") {
    return noProxyResult;
  }
  const proxyInfo = getProxyInfo();
  if (!proxyInfo.address) {
    return noProxyResult;
  }
  const hostPort = (0, uri_parser_1$2.splitHostPort)(target.path);
  if (!hostPort) {
    return noProxyResult;
  }
  const serverHost = hostPort.host;
  for (const host of getNoProxyHostList()) {
    if (host === serverHost) {
      trace$1("Not using proxy for target in no_proxy list: " + (0, uri_parser_1$2.uriToString)(target));
      return noProxyResult;
    }
  }
  const extraOptions = {
    "grpc.http_connect_target": (0, uri_parser_1$2.uriToString)(target)
  };
  if (proxyInfo.creds) {
    extraOptions["grpc.http_connect_creds"] = proxyInfo.creds;
  }
  return {
    target: {
      scheme: "dns",
      path: proxyInfo.address
    },
    extraOptions
  };
}
http_proxy.mapProxyName = mapProxyName;
function getProxiedConnection(address, channelOptions2, connectionOptions) {
  var _a;
  if (!("grpc.http_connect_target" in channelOptions2)) {
    return Promise.resolve({});
  }
  const realTarget = channelOptions2["grpc.http_connect_target"];
  const parsedTarget = (0, uri_parser_1$2.parseUri)(realTarget);
  if (parsedTarget === null) {
    return Promise.resolve({});
  }
  const splitHostPost = (0, uri_parser_1$2.splitHostPort)(parsedTarget.path);
  if (splitHostPost === null) {
    return Promise.resolve({});
  }
  const hostPort = `${splitHostPost.host}:${(_a = splitHostPost.port) !== null && _a !== void 0 ? _a : resolver_dns_1.DEFAULT_PORT}`;
  const options = {
    method: "CONNECT",
    path: hostPort
  };
  const headers = {
    Host: hostPort
  };
  if ((0, subchannel_address_1$1.isTcpSubchannelAddress)(address)) {
    options.host = address.host;
    options.port = address.port;
  } else {
    options.socketPath = address.path;
  }
  if ("grpc.http_connect_creds" in channelOptions2) {
    headers["Proxy-Authorization"] = "Basic " + Buffer.from(channelOptions2["grpc.http_connect_creds"]).toString("base64");
  }
  options.headers = headers;
  const proxyAddressString = (0, subchannel_address_1$1.subchannelAddressToString)(address);
  trace$1("Using proxy " + proxyAddressString + " to connect to " + options.path);
  return new Promise((resolve, reject) => {
    const request = http.request(options);
    request.once("connect", (res, socket, head) => {
      var _a2;
      request.removeAllListeners();
      socket.removeAllListeners();
      if (res.statusCode === 200) {
        trace$1("Successfully connected to " + options.path + " through proxy " + proxyAddressString);
        if (head.length > 0) {
          socket.unshift(head);
        }
        if ("secureContext" in connectionOptions) {
          const targetPath = (0, resolver_1$1.getDefaultAuthority)(parsedTarget);
          const hostPort2 = (0, uri_parser_1$2.splitHostPort)(targetPath);
          const remoteHost = (_a2 = hostPort2 === null || hostPort2 === void 0 ? void 0 : hostPort2.host) !== null && _a2 !== void 0 ? _a2 : targetPath;
          const cts = tls.connect(Object.assign({ host: remoteHost, servername: remoteHost, socket }, connectionOptions), () => {
            trace$1("Successfully established a TLS connection to " + options.path + " through proxy " + proxyAddressString);
            resolve({ socket: cts, realTarget: parsedTarget });
          });
          cts.on("error", (error2) => {
            trace$1("Failed to establish a TLS connection to " + options.path + " through proxy " + proxyAddressString + " with error " + error2.message);
            reject();
          });
        } else {
          trace$1("Successfully established a plaintext connection to " + options.path + " through proxy " + proxyAddressString);
          resolve({
            socket,
            realTarget: parsedTarget
          });
        }
      } else {
        (0, logging_1.log)(constants_1$9.LogVerbosity.ERROR, "Failed to connect to " + options.path + " through proxy " + proxyAddressString + " with status " + res.statusCode);
        reject();
      }
    });
    request.once("error", (err) => {
      request.removeAllListeners();
      (0, logging_1.log)(constants_1$9.LogVerbosity.ERROR, "Failed to connect to proxy " + proxyAddressString + " with error " + err.message);
      reject();
    });
    request.end();
  });
}
http_proxy.getProxiedConnection = getProxiedConnection;
var subchannelCall = {};
var streamDecoder = {};
Object.defineProperty(streamDecoder, "__esModule", { value: true });
streamDecoder.StreamDecoder = void 0;
var ReadState;
(function(ReadState2) {
  ReadState2[ReadState2["NO_DATA"] = 0] = "NO_DATA";
  ReadState2[ReadState2["READING_SIZE"] = 1] = "READING_SIZE";
  ReadState2[ReadState2["READING_MESSAGE"] = 2] = "READING_MESSAGE";
})(ReadState || (ReadState = {}));
class StreamDecoder {
  constructor(maxReadMessageLength) {
    this.maxReadMessageLength = maxReadMessageLength;
    this.readState = ReadState.NO_DATA;
    this.readCompressFlag = Buffer.alloc(1);
    this.readPartialSize = Buffer.alloc(4);
    this.readSizeRemaining = 4;
    this.readMessageSize = 0;
    this.readPartialMessage = [];
    this.readMessageRemaining = 0;
  }
  write(data) {
    let readHead = 0;
    let toRead;
    const result = [];
    while (readHead < data.length) {
      switch (this.readState) {
        case ReadState.NO_DATA:
          this.readCompressFlag = data.slice(readHead, readHead + 1);
          readHead += 1;
          this.readState = ReadState.READING_SIZE;
          this.readPartialSize.fill(0);
          this.readSizeRemaining = 4;
          this.readMessageSize = 0;
          this.readMessageRemaining = 0;
          this.readPartialMessage = [];
          break;
        case ReadState.READING_SIZE:
          toRead = Math.min(data.length - readHead, this.readSizeRemaining);
          data.copy(this.readPartialSize, 4 - this.readSizeRemaining, readHead, readHead + toRead);
          this.readSizeRemaining -= toRead;
          readHead += toRead;
          if (this.readSizeRemaining === 0) {
            this.readMessageSize = this.readPartialSize.readUInt32BE(0);
            if (this.maxReadMessageLength !== -1 && this.readMessageSize > this.maxReadMessageLength) {
              throw new Error(`Received message larger than max (${this.readMessageSize} vs ${this.maxReadMessageLength})`);
            }
            this.readMessageRemaining = this.readMessageSize;
            if (this.readMessageRemaining > 0) {
              this.readState = ReadState.READING_MESSAGE;
            } else {
              const message2 = Buffer.concat([this.readCompressFlag, this.readPartialSize], 5);
              this.readState = ReadState.NO_DATA;
              result.push(message2);
            }
          }
          break;
        case ReadState.READING_MESSAGE:
          toRead = Math.min(data.length - readHead, this.readMessageRemaining);
          this.readPartialMessage.push(data.slice(readHead, readHead + toRead));
          this.readMessageRemaining -= toRead;
          readHead += toRead;
          if (this.readMessageRemaining === 0) {
            const framedMessageBuffers = [
              this.readCompressFlag,
              this.readPartialSize
            ].concat(this.readPartialMessage);
            const framedMessage = Buffer.concat(framedMessageBuffers, this.readMessageSize + 5);
            this.readState = ReadState.NO_DATA;
            result.push(framedMessage);
          }
          break;
        default:
          throw new Error("Unexpected read state");
      }
    }
    return result;
  }
}
streamDecoder.StreamDecoder = StreamDecoder;
Object.defineProperty(subchannelCall, "__esModule", { value: true });
subchannelCall.Http2SubchannelCall = void 0;
const http2$3 = require$$0$5;
const os = require$$0$2;
const constants_1$8 = constants;
const metadata_1$5 = metadata;
const stream_decoder_1$1 = streamDecoder;
const logging$6 = logging$9;
const constants_2 = constants;
const TRACER_NAME$5 = "subchannel_call";
function getSystemErrorName(errno) {
  for (const [name2, num] of Object.entries(os.constants.errno)) {
    if (num === errno) {
      return name2;
    }
  }
  return "Unknown system error " + errno;
}
function mapHttpStatusCode(code) {
  const details = `Received HTTP status code ${code}`;
  let mappedStatusCode;
  switch (code) {
    case 400:
      mappedStatusCode = constants_1$8.Status.INTERNAL;
      break;
    case 401:
      mappedStatusCode = constants_1$8.Status.UNAUTHENTICATED;
      break;
    case 403:
      mappedStatusCode = constants_1$8.Status.PERMISSION_DENIED;
      break;
    case 404:
      mappedStatusCode = constants_1$8.Status.UNIMPLEMENTED;
      break;
    case 429:
    case 502:
    case 503:
    case 504:
      mappedStatusCode = constants_1$8.Status.UNAVAILABLE;
      break;
    default:
      mappedStatusCode = constants_1$8.Status.UNKNOWN;
  }
  return {
    code: mappedStatusCode,
    details,
    metadata: new metadata_1$5.Metadata()
  };
}
class Http2SubchannelCall {
  constructor(http2Stream, callEventTracker, listener, transport2, callId) {
    var _a;
    this.http2Stream = http2Stream;
    this.callEventTracker = callEventTracker;
    this.listener = listener;
    this.transport = transport2;
    this.callId = callId;
    this.isReadFilterPending = false;
    this.isPushPending = false;
    this.canPush = false;
    this.readsClosed = false;
    this.statusOutput = false;
    this.unpushedReadMessages = [];
    this.finalStatus = null;
    this.internalError = null;
    this.serverEndedCall = false;
    const maxReceiveMessageLength = (_a = transport2.getOptions()["grpc.max_receive_message_length"]) !== null && _a !== void 0 ? _a : constants_1$8.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
    this.decoder = new stream_decoder_1$1.StreamDecoder(maxReceiveMessageLength);
    http2Stream.on("response", (headers, flags) => {
      let headersString = "";
      for (const header of Object.keys(headers)) {
        headersString += "		" + header + ": " + headers[header] + "\n";
      }
      this.trace("Received server headers:\n" + headersString);
      this.httpStatusCode = headers[":status"];
      if (flags & http2$3.constants.NGHTTP2_FLAG_END_STREAM) {
        this.handleTrailers(headers);
      } else {
        let metadata2;
        try {
          metadata2 = metadata_1$5.Metadata.fromHttp2Headers(headers);
        } catch (error2) {
          this.endCall({
            code: constants_1$8.Status.UNKNOWN,
            details: error2.message,
            metadata: new metadata_1$5.Metadata()
          });
          return;
        }
        this.listener.onReceiveMetadata(metadata2);
      }
    });
    http2Stream.on("trailers", (headers) => {
      this.handleTrailers(headers);
    });
    http2Stream.on("data", (data) => {
      if (this.statusOutput) {
        return;
      }
      this.trace("receive HTTP/2 data frame of length " + data.length);
      let messages;
      try {
        messages = this.decoder.write(data);
      } catch (e) {
        this.cancelWithStatus(constants_1$8.Status.RESOURCE_EXHAUSTED, e.message);
        return;
      }
      for (const message2 of messages) {
        this.trace("parsed message of length " + message2.length);
        this.callEventTracker.addMessageReceived();
        this.tryPush(message2);
      }
    });
    http2Stream.on("end", () => {
      this.readsClosed = true;
      this.maybeOutputStatus();
    });
    http2Stream.on("close", () => {
      this.serverEndedCall = true;
      process.nextTick(() => {
        var _a2;
        this.trace("HTTP/2 stream closed with code " + http2Stream.rstCode);
        if (((_a2 = this.finalStatus) === null || _a2 === void 0 ? void 0 : _a2.code) === constants_1$8.Status.OK) {
          return;
        }
        let code;
        let details = "";
        switch (http2Stream.rstCode) {
          case http2$3.constants.NGHTTP2_NO_ERROR:
            if (this.finalStatus !== null) {
              return;
            }
            if (this.httpStatusCode && this.httpStatusCode !== 200) {
              const mappedStatus = mapHttpStatusCode(this.httpStatusCode);
              code = mappedStatus.code;
              details = mappedStatus.details;
            } else {
              code = constants_1$8.Status.INTERNAL;
              details = `Received RST_STREAM with code ${http2Stream.rstCode} (Call ended without gRPC status)`;
            }
            break;
          case http2$3.constants.NGHTTP2_REFUSED_STREAM:
            code = constants_1$8.Status.UNAVAILABLE;
            details = "Stream refused by server";
            break;
          case http2$3.constants.NGHTTP2_CANCEL:
            code = constants_1$8.Status.CANCELLED;
            details = "Call cancelled";
            break;
          case http2$3.constants.NGHTTP2_ENHANCE_YOUR_CALM:
            code = constants_1$8.Status.RESOURCE_EXHAUSTED;
            details = "Bandwidth exhausted or memory limit exceeded";
            break;
          case http2$3.constants.NGHTTP2_INADEQUATE_SECURITY:
            code = constants_1$8.Status.PERMISSION_DENIED;
            details = "Protocol not secure enough";
            break;
          case http2$3.constants.NGHTTP2_INTERNAL_ERROR:
            code = constants_1$8.Status.INTERNAL;
            if (this.internalError === null) {
              details = `Received RST_STREAM with code ${http2Stream.rstCode} (Internal server error)`;
            } else {
              if (this.internalError.code === "ECONNRESET" || this.internalError.code === "ETIMEDOUT") {
                code = constants_1$8.Status.UNAVAILABLE;
                details = this.internalError.message;
              } else {
                details = `Received RST_STREAM with code ${http2Stream.rstCode} triggered by internal client error: ${this.internalError.message}`;
              }
            }
            break;
          default:
            code = constants_1$8.Status.INTERNAL;
            details = `Received RST_STREAM with code ${http2Stream.rstCode}`;
        }
        this.endCall({
          code,
          details,
          metadata: new metadata_1$5.Metadata(),
          rstCode: http2Stream.rstCode
        });
      });
    });
    http2Stream.on("error", (err) => {
      if (err.code !== "ERR_HTTP2_STREAM_ERROR") {
        this.trace("Node error event: message=" + err.message + " code=" + err.code + " errno=" + getSystemErrorName(err.errno) + " syscall=" + err.syscall);
        this.internalError = err;
      }
      this.callEventTracker.onStreamEnd(false);
    });
  }
  getDeadlineInfo() {
    return [`remote_addr=${this.getPeer()}`];
  }
  onDisconnect() {
    this.endCall({
      code: constants_1$8.Status.UNAVAILABLE,
      details: "Connection dropped",
      metadata: new metadata_1$5.Metadata()
    });
  }
  outputStatus() {
    if (!this.statusOutput) {
      this.statusOutput = true;
      this.trace("ended with status: code=" + this.finalStatus.code + ' details="' + this.finalStatus.details + '"');
      this.callEventTracker.onCallEnd(this.finalStatus);
      process.nextTick(() => {
        this.listener.onReceiveStatus(this.finalStatus);
      });
      this.http2Stream.resume();
    }
  }
  trace(text) {
    logging$6.trace(constants_2.LogVerbosity.DEBUG, TRACER_NAME$5, "[" + this.callId + "] " + text);
  }
  /**
   * On first call, emits a 'status' event with the given StatusObject.
   * Subsequent calls are no-ops.
   * @param status The status of the call.
   */
  endCall(status) {
    if (this.finalStatus === null || this.finalStatus.code === constants_1$8.Status.OK) {
      this.finalStatus = status;
      this.maybeOutputStatus();
    }
    this.destroyHttp2Stream();
  }
  maybeOutputStatus() {
    if (this.finalStatus !== null) {
      if (this.finalStatus.code !== constants_1$8.Status.OK || this.readsClosed && this.unpushedReadMessages.length === 0 && !this.isReadFilterPending && !this.isPushPending) {
        this.outputStatus();
      }
    }
  }
  push(message2) {
    this.trace("pushing to reader message of length " + (message2 instanceof Buffer ? message2.length : null));
    this.canPush = false;
    this.isPushPending = true;
    process.nextTick(() => {
      this.isPushPending = false;
      if (this.statusOutput) {
        return;
      }
      this.listener.onReceiveMessage(message2);
      this.maybeOutputStatus();
    });
  }
  tryPush(messageBytes) {
    if (this.canPush) {
      this.http2Stream.pause();
      this.push(messageBytes);
    } else {
      this.trace("unpushedReadMessages.push message of length " + messageBytes.length);
      this.unpushedReadMessages.push(messageBytes);
    }
  }
  handleTrailers(headers) {
    this.serverEndedCall = true;
    this.callEventTracker.onStreamEnd(true);
    let headersString = "";
    for (const header of Object.keys(headers)) {
      headersString += "		" + header + ": " + headers[header] + "\n";
    }
    this.trace("Received server trailers:\n" + headersString);
    let metadata2;
    try {
      metadata2 = metadata_1$5.Metadata.fromHttp2Headers(headers);
    } catch (e) {
      metadata2 = new metadata_1$5.Metadata();
    }
    const metadataMap = metadata2.getMap();
    let status;
    if (typeof metadataMap["grpc-status"] === "string") {
      const receivedStatus = Number(metadataMap["grpc-status"]);
      this.trace("received status code " + receivedStatus + " from server");
      metadata2.remove("grpc-status");
      let details = "";
      if (typeof metadataMap["grpc-message"] === "string") {
        try {
          details = decodeURI(metadataMap["grpc-message"]);
        } catch (e) {
          details = metadataMap["grpc-message"];
        }
        metadata2.remove("grpc-message");
        this.trace('received status details string "' + details + '" from server');
      }
      status = {
        code: receivedStatus,
        details,
        metadata: metadata2
      };
    } else if (this.httpStatusCode) {
      status = mapHttpStatusCode(this.httpStatusCode);
      status.metadata = metadata2;
    } else {
      status = {
        code: constants_1$8.Status.UNKNOWN,
        details: "No status information received",
        metadata: metadata2
      };
    }
    this.endCall(status);
  }
  destroyHttp2Stream() {
    var _a;
    if (this.http2Stream.destroyed) {
      return;
    }
    if (this.serverEndedCall) {
      this.http2Stream.end();
    } else {
      let code;
      if (((_a = this.finalStatus) === null || _a === void 0 ? void 0 : _a.code) === constants_1$8.Status.OK) {
        code = http2$3.constants.NGHTTP2_NO_ERROR;
      } else {
        code = http2$3.constants.NGHTTP2_CANCEL;
      }
      this.trace("close http2 stream with code " + code);
      this.http2Stream.close(code);
    }
  }
  cancelWithStatus(status, details) {
    this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
    this.endCall({ code: status, details, metadata: new metadata_1$5.Metadata() });
  }
  getStatus() {
    return this.finalStatus;
  }
  getPeer() {
    return this.transport.getPeerName();
  }
  getCallNumber() {
    return this.callId;
  }
  startRead() {
    if (this.finalStatus !== null && this.finalStatus.code !== constants_1$8.Status.OK) {
      this.readsClosed = true;
      this.maybeOutputStatus();
      return;
    }
    this.canPush = true;
    if (this.unpushedReadMessages.length > 0) {
      const nextMessage = this.unpushedReadMessages.shift();
      this.push(nextMessage);
      return;
    }
    this.http2Stream.resume();
  }
  sendMessageWithContext(context, message2) {
    this.trace("write() called with message of length " + message2.length);
    const cb = (error2) => {
      process.nextTick(() => {
        var _a;
        let code = constants_1$8.Status.UNAVAILABLE;
        if ((error2 === null || error2 === void 0 ? void 0 : error2.code) === "ERR_STREAM_WRITE_AFTER_END") {
          code = constants_1$8.Status.INTERNAL;
        }
        if (error2) {
          this.cancelWithStatus(code, `Write error: ${error2.message}`);
        }
        (_a = context.callback) === null || _a === void 0 ? void 0 : _a.call(context);
      });
    };
    this.trace("sending data chunk of length " + message2.length);
    this.callEventTracker.addMessageSent();
    try {
      this.http2Stream.write(message2, cb);
    } catch (error2) {
      this.endCall({
        code: constants_1$8.Status.UNAVAILABLE,
        details: `Write failed with error ${error2.message}`,
        metadata: new metadata_1$5.Metadata()
      });
    }
  }
  halfClose() {
    this.trace("end() called");
    this.trace("calling end() on HTTP/2 stream");
    this.http2Stream.end();
  }
}
subchannelCall.Http2SubchannelCall = Http2SubchannelCall;
var callNumber = {};
Object.defineProperty(callNumber, "__esModule", { value: true });
callNumber.getNextCallNumber = void 0;
let nextCallNumber = 0;
function getNextCallNumber() {
  return nextCallNumber++;
}
callNumber.getNextCallNumber = getNextCallNumber;
var hasRequiredTransport;
function requireTransport() {
  if (hasRequiredTransport) return transport;
  hasRequiredTransport = 1;
  Object.defineProperty(transport, "__esModule", { value: true });
  transport.Http2SubchannelConnector = void 0;
  const http22 = require$$0$5;
  const tls_12 = require$$0$1;
  const channelz_12 = requireChannelz();
  const constants_12 = constants;
  const http_proxy_1 = http_proxy;
  const logging2 = logging$9;
  const resolver_12 = resolver;
  const subchannel_address_12 = subchannelAddress;
  const uri_parser_12 = uriParser;
  const net = require$$0$3;
  const subchannel_call_1 = subchannelCall;
  const call_number_1 = callNumber;
  const TRACER_NAME2 = "transport";
  const FLOW_CONTROL_TRACER_NAME = "transport_flowctrl";
  const clientVersion = require$$12.version;
  const { HTTP2_HEADER_AUTHORITY, HTTP2_HEADER_CONTENT_TYPE, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH: HTTP2_HEADER_PATH2, HTTP2_HEADER_TE, HTTP2_HEADER_USER_AGENT } = http22.constants;
  const KEEPALIVE_TIMEOUT_MS2 = 2e4;
  const tooManyPingsData = Buffer.from("too_many_pings", "ascii");
  class Http2Transport {
    constructor(session, subchannelAddress2, options, remoteName) {
      this.session = session;
      this.options = options;
      this.remoteName = remoteName;
      this.keepaliveTimer = null;
      this.pendingSendKeepalivePing = false;
      this.activeCalls = /* @__PURE__ */ new Set();
      this.disconnectListeners = [];
      this.disconnectHandled = false;
      this.channelzEnabled = true;
      this.keepalivesSent = 0;
      this.messagesSent = 0;
      this.messagesReceived = 0;
      this.lastMessageSentTimestamp = null;
      this.lastMessageReceivedTimestamp = null;
      this.subchannelAddressString = (0, subchannel_address_12.subchannelAddressToString)(subchannelAddress2);
      if (options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
        this.streamTracker = new channelz_12.ChannelzCallTrackerStub();
      } else {
        this.streamTracker = new channelz_12.ChannelzCallTracker();
      }
      this.channelzRef = (0, channelz_12.registerChannelzSocket)(this.subchannelAddressString, () => this.getChannelzInfo(), this.channelzEnabled);
      this.userAgent = [
        options["grpc.primary_user_agent"],
        `grpc-node-js/${clientVersion}`,
        options["grpc.secondary_user_agent"]
      ].filter((e) => e).join(" ");
      if ("grpc.keepalive_time_ms" in options) {
        this.keepaliveTimeMs = options["grpc.keepalive_time_ms"];
      } else {
        this.keepaliveTimeMs = -1;
      }
      if ("grpc.keepalive_timeout_ms" in options) {
        this.keepaliveTimeoutMs = options["grpc.keepalive_timeout_ms"];
      } else {
        this.keepaliveTimeoutMs = KEEPALIVE_TIMEOUT_MS2;
      }
      if ("grpc.keepalive_permit_without_calls" in options) {
        this.keepaliveWithoutCalls = options["grpc.keepalive_permit_without_calls"] === 1;
      } else {
        this.keepaliveWithoutCalls = false;
      }
      session.once("close", () => {
        this.trace("session closed");
        this.handleDisconnect();
      });
      session.once("goaway", (errorCode, lastStreamID, opaqueData) => {
        let tooManyPings = false;
        if (errorCode === http22.constants.NGHTTP2_ENHANCE_YOUR_CALM && opaqueData && opaqueData.equals(tooManyPingsData)) {
          tooManyPings = true;
        }
        this.trace("connection closed by GOAWAY with code " + errorCode + " and data " + (opaqueData === null || opaqueData === void 0 ? void 0 : opaqueData.toString()));
        this.reportDisconnectToOwner(tooManyPings);
      });
      session.once("error", (error2) => {
        this.trace("connection closed with error " + error2.message);
        this.handleDisconnect();
      });
      session.socket.once("close", () => {
        this.trace("connection closed");
        this.handleDisconnect();
      });
      if (logging2.isTracerEnabled(TRACER_NAME2)) {
        session.on("remoteSettings", (settings) => {
          this.trace("new settings received" + (this.session !== session ? " on the old connection" : "") + ": " + JSON.stringify(settings));
        });
        session.on("localSettings", (settings) => {
          this.trace("local settings acknowledged by remote" + (this.session !== session ? " on the old connection" : "") + ": " + JSON.stringify(settings));
        });
      }
      if (this.keepaliveWithoutCalls) {
        this.maybeStartKeepalivePingTimer();
      }
    }
    getChannelzInfo() {
      var _a, _b, _c;
      const sessionSocket = this.session.socket;
      const remoteAddress = sessionSocket.remoteAddress ? (0, subchannel_address_12.stringToSubchannelAddress)(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
      const localAddress = sessionSocket.localAddress ? (0, subchannel_address_12.stringToSubchannelAddress)(sessionSocket.localAddress, sessionSocket.localPort) : null;
      let tlsInfo;
      if (this.session.encrypted) {
        const tlsSocket = sessionSocket;
        const cipherInfo = tlsSocket.getCipher();
        const certificate = tlsSocket.getCertificate();
        const peerCertificate = tlsSocket.getPeerCertificate();
        tlsInfo = {
          cipherSuiteStandardName: (_a = cipherInfo.standardName) !== null && _a !== void 0 ? _a : null,
          cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
          localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
          remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
        };
      } else {
        tlsInfo = null;
      }
      const socketInfo = {
        remoteAddress,
        localAddress,
        security: tlsInfo,
        remoteName: this.remoteName,
        streamsStarted: this.streamTracker.callsStarted,
        streamsSucceeded: this.streamTracker.callsSucceeded,
        streamsFailed: this.streamTracker.callsFailed,
        messagesSent: this.messagesSent,
        messagesReceived: this.messagesReceived,
        keepAlivesSent: this.keepalivesSent,
        lastLocalStreamCreatedTimestamp: this.streamTracker.lastCallStartedTimestamp,
        lastRemoteStreamCreatedTimestamp: null,
        lastMessageSentTimestamp: this.lastMessageSentTimestamp,
        lastMessageReceivedTimestamp: this.lastMessageReceivedTimestamp,
        localFlowControlWindow: (_b = this.session.state.localWindowSize) !== null && _b !== void 0 ? _b : null,
        remoteFlowControlWindow: (_c = this.session.state.remoteWindowSize) !== null && _c !== void 0 ? _c : null
      };
      return socketInfo;
    }
    trace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    keepaliveTrace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    flowControlTrace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, FLOW_CONTROL_TRACER_NAME, "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    internalsTrace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, "transport_internals", "(" + this.channelzRef.id + ") " + this.subchannelAddressString + " " + text);
    }
    /**
     * Indicate to the owner of this object that this transport should no longer
     * be used. That happens if the connection drops, or if the server sends a
     * GOAWAY.
     * @param tooManyPings If true, this was triggered by a GOAWAY with data
     * indicating that the session was closed becaues the client sent too many
     * pings.
     * @returns
     */
    reportDisconnectToOwner(tooManyPings) {
      if (this.disconnectHandled) {
        return;
      }
      this.disconnectHandled = true;
      this.disconnectListeners.forEach((listener) => listener(tooManyPings));
    }
    /**
     * Handle connection drops, but not GOAWAYs.
     */
    handleDisconnect() {
      if (this.disconnectHandled) {
        return;
      }
      this.clearKeepaliveTimeout();
      this.reportDisconnectToOwner(false);
      setImmediate(() => {
        for (const call2 of this.activeCalls) {
          call2.onDisconnect();
        }
        this.session.destroy();
      });
    }
    addDisconnectListener(listener) {
      this.disconnectListeners.push(listener);
    }
    canSendPing() {
      return !this.session.destroyed && this.keepaliveTimeMs > 0 && (this.keepaliveWithoutCalls || this.activeCalls.size > 0);
    }
    maybeSendPing() {
      var _a, _b;
      if (!this.canSendPing()) {
        this.pendingSendKeepalivePing = true;
        return;
      }
      if (this.keepaliveTimer) {
        console.error("keepaliveTimeout is not null");
        return;
      }
      if (this.channelzEnabled) {
        this.keepalivesSent += 1;
      }
      this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
      this.keepaliveTimer = setTimeout(() => {
        this.keepaliveTimer = null;
        this.keepaliveTrace("Ping timeout passed without response");
        this.handleDisconnect();
      }, this.keepaliveTimeoutMs);
      (_b = (_a = this.keepaliveTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      let pingSendError = "";
      try {
        const pingSentSuccessfully = this.session.ping((err, duration2, payload) => {
          this.clearKeepaliveTimeout();
          if (err) {
            this.keepaliveTrace("Ping failed with error " + err.message);
            this.handleDisconnect();
          } else {
            this.keepaliveTrace("Received ping response");
            this.maybeStartKeepalivePingTimer();
          }
        });
        if (!pingSentSuccessfully) {
          pingSendError = "Ping returned false";
        }
      } catch (e) {
        pingSendError = (e instanceof Error ? e.message : "") || "Unknown error";
      }
      if (pingSendError) {
        this.keepaliveTrace("Ping send failed: " + pingSendError);
        this.handleDisconnect();
      }
    }
    /**
     * Starts the keepalive ping timer if appropriate. If the timer already ran
     * out while there were no active requests, instead send a ping immediately.
     * If the ping timer is already running or a ping is currently in flight,
     * instead do nothing and wait for them to resolve.
     */
    maybeStartKeepalivePingTimer() {
      var _a, _b;
      if (!this.canSendPing()) {
        return;
      }
      if (this.pendingSendKeepalivePing) {
        this.pendingSendKeepalivePing = false;
        this.maybeSendPing();
      } else if (!this.keepaliveTimer) {
        this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
        this.keepaliveTimer = setTimeout(() => {
          this.keepaliveTimer = null;
          this.maybeSendPing();
        }, this.keepaliveTimeMs);
        (_b = (_a = this.keepaliveTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    }
    /**
     * Clears whichever keepalive timeout is currently active, if any.
     */
    clearKeepaliveTimeout() {
      if (this.keepaliveTimer) {
        clearTimeout(this.keepaliveTimer);
        this.keepaliveTimer = null;
      }
    }
    removeActiveCall(call2) {
      this.activeCalls.delete(call2);
      if (this.activeCalls.size === 0) {
        this.session.unref();
      }
    }
    addActiveCall(call2) {
      this.activeCalls.add(call2);
      if (this.activeCalls.size === 1) {
        this.session.ref();
        if (!this.keepaliveWithoutCalls) {
          this.maybeStartKeepalivePingTimer();
        }
      }
    }
    createCall(metadata2, host, method2, listener, subchannelCallStatsTracker) {
      const headers = metadata2.toHttp2Headers();
      headers[HTTP2_HEADER_AUTHORITY] = host;
      headers[HTTP2_HEADER_USER_AGENT] = this.userAgent;
      headers[HTTP2_HEADER_CONTENT_TYPE] = "application/grpc";
      headers[HTTP2_HEADER_METHOD] = "POST";
      headers[HTTP2_HEADER_PATH2] = method2;
      headers[HTTP2_HEADER_TE] = "trailers";
      let http2Stream;
      try {
        http2Stream = this.session.request(headers);
      } catch (e) {
        this.handleDisconnect();
        throw e;
      }
      this.flowControlTrace("local window size: " + this.session.state.localWindowSize + " remote window size: " + this.session.state.remoteWindowSize);
      this.internalsTrace("session.closed=" + this.session.closed + " session.destroyed=" + this.session.destroyed + " session.socket.destroyed=" + this.session.socket.destroyed);
      let eventTracker;
      let call2;
      if (this.channelzEnabled) {
        this.streamTracker.addCallStarted();
        eventTracker = {
          addMessageSent: () => {
            var _a;
            this.messagesSent += 1;
            this.lastMessageSentTimestamp = /* @__PURE__ */ new Date();
            (_a = subchannelCallStatsTracker.addMessageSent) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
          },
          addMessageReceived: () => {
            var _a;
            this.messagesReceived += 1;
            this.lastMessageReceivedTimestamp = /* @__PURE__ */ new Date();
            (_a = subchannelCallStatsTracker.addMessageReceived) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
          },
          onCallEnd: (status) => {
            var _a;
            (_a = subchannelCallStatsTracker.onCallEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, status);
            this.removeActiveCall(call2);
          },
          onStreamEnd: (success) => {
            var _a;
            if (success) {
              this.streamTracker.addCallSucceeded();
            } else {
              this.streamTracker.addCallFailed();
            }
            (_a = subchannelCallStatsTracker.onStreamEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, success);
          }
        };
      } else {
        eventTracker = {
          addMessageSent: () => {
            var _a;
            (_a = subchannelCallStatsTracker.addMessageSent) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
          },
          addMessageReceived: () => {
            var _a;
            (_a = subchannelCallStatsTracker.addMessageReceived) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker);
          },
          onCallEnd: (status) => {
            var _a;
            (_a = subchannelCallStatsTracker.onCallEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, status);
            this.removeActiveCall(call2);
          },
          onStreamEnd: (success) => {
            var _a;
            (_a = subchannelCallStatsTracker.onStreamEnd) === null || _a === void 0 ? void 0 : _a.call(subchannelCallStatsTracker, success);
          }
        };
      }
      call2 = new subchannel_call_1.Http2SubchannelCall(http2Stream, eventTracker, listener, this, (0, call_number_1.getNextCallNumber)());
      this.addActiveCall(call2);
      return call2;
    }
    getChannelzRef() {
      return this.channelzRef;
    }
    getPeerName() {
      return this.subchannelAddressString;
    }
    getOptions() {
      return this.options;
    }
    shutdown() {
      this.session.close();
      (0, channelz_12.unregisterChannelzRef)(this.channelzRef);
    }
  }
  class Http2SubchannelConnector {
    constructor(channelTarget) {
      this.channelTarget = channelTarget;
      this.session = null;
      this.isShutdown = false;
    }
    trace(text) {
      logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, (0, uri_parser_12.uriToString)(this.channelTarget) + " " + text);
    }
    createSession(address, credentials, options, proxyConnectionResult) {
      if (this.isShutdown) {
        return Promise.reject();
      }
      return new Promise((resolve, reject) => {
        var _a, _b, _c, _d;
        let remoteName;
        if (proxyConnectionResult.realTarget) {
          remoteName = (0, uri_parser_12.uriToString)(proxyConnectionResult.realTarget);
          this.trace("creating HTTP/2 session through proxy to " + (0, uri_parser_12.uriToString)(proxyConnectionResult.realTarget));
        } else {
          remoteName = null;
          this.trace("creating HTTP/2 session to " + (0, subchannel_address_12.subchannelAddressToString)(address));
        }
        const targetAuthority = (0, resolver_12.getDefaultAuthority)((_a = proxyConnectionResult.realTarget) !== null && _a !== void 0 ? _a : this.channelTarget);
        let connectionOptions = credentials._getConnectionOptions();
        if (!connectionOptions) {
          reject("Credentials not loaded");
          return;
        }
        connectionOptions.maxSendHeaderBlockLength = Number.MAX_SAFE_INTEGER;
        if ("grpc-node.max_session_memory" in options) {
          connectionOptions.maxSessionMemory = options["grpc-node.max_session_memory"];
        } else {
          connectionOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
        }
        let addressScheme = "http://";
        if ("secureContext" in connectionOptions) {
          addressScheme = "https://";
          if (options["grpc.ssl_target_name_override"]) {
            const sslTargetNameOverride = options["grpc.ssl_target_name_override"];
            const originalCheckServerIdentity = (_b = connectionOptions.checkServerIdentity) !== null && _b !== void 0 ? _b : tls_12.checkServerIdentity;
            connectionOptions.checkServerIdentity = (host, cert) => {
              return originalCheckServerIdentity(sslTargetNameOverride, cert);
            };
            connectionOptions.servername = sslTargetNameOverride;
          } else {
            const authorityHostname = (_d = (_c = (0, uri_parser_12.splitHostPort)(targetAuthority)) === null || _c === void 0 ? void 0 : _c.host) !== null && _d !== void 0 ? _d : "localhost";
            connectionOptions.servername = authorityHostname;
          }
          if (proxyConnectionResult.socket) {
            connectionOptions.createConnection = (authority, option) => {
              return proxyConnectionResult.socket;
            };
          }
        } else {
          connectionOptions.createConnection = (authority, option) => {
            if (proxyConnectionResult.socket) {
              return proxyConnectionResult.socket;
            } else {
              return net.connect(address);
            }
          };
        }
        connectionOptions = Object.assign(Object.assign(Object.assign({}, connectionOptions), address), { enableTrace: options["grpc-node.tls_enable_trace"] === 1 });
        const session = http22.connect(addressScheme + targetAuthority, connectionOptions);
        this.session = session;
        let errorMessage = "Failed to connect";
        let reportedError = false;
        session.unref();
        session.once("connect", () => {
          session.removeAllListeners();
          resolve(new Http2Transport(session, address, options, remoteName));
          this.session = null;
        });
        session.once("close", () => {
          this.session = null;
          setImmediate(() => {
            if (!reportedError) {
              reportedError = true;
              reject(`${errorMessage} (${(/* @__PURE__ */ new Date()).toISOString()})`);
            }
          });
        });
        session.once("error", (error2) => {
          errorMessage = error2.message;
          this.trace("connection failed with error " + errorMessage);
          if (!reportedError) {
            reportedError = true;
            reject(`${errorMessage} (${(/* @__PURE__ */ new Date()).toISOString()})`);
          }
        });
      });
    }
    connect(address, credentials, options) {
      var _a, _b, _c;
      if (this.isShutdown) {
        return Promise.reject();
      }
      const connectionOptions = credentials._getConnectionOptions();
      if (!connectionOptions) {
        return Promise.reject("Credentials not loaded");
      }
      if ("secureContext" in connectionOptions) {
        connectionOptions.ALPNProtocols = ["h2"];
        if (options["grpc.ssl_target_name_override"]) {
          const sslTargetNameOverride = options["grpc.ssl_target_name_override"];
          const originalCheckServerIdentity = (_a = connectionOptions.checkServerIdentity) !== null && _a !== void 0 ? _a : tls_12.checkServerIdentity;
          connectionOptions.checkServerIdentity = (host, cert) => {
            return originalCheckServerIdentity(sslTargetNameOverride, cert);
          };
          connectionOptions.servername = sslTargetNameOverride;
        } else {
          if ("grpc.http_connect_target" in options) {
            const targetPath = (0, resolver_12.getDefaultAuthority)((_b = (0, uri_parser_12.parseUri)(options["grpc.http_connect_target"])) !== null && _b !== void 0 ? _b : {
              path: "localhost"
            });
            const hostPort = (0, uri_parser_12.splitHostPort)(targetPath);
            connectionOptions.servername = (_c = hostPort === null || hostPort === void 0 ? void 0 : hostPort.host) !== null && _c !== void 0 ? _c : targetPath;
          }
        }
        if (options["grpc-node.tls_enable_trace"]) {
          connectionOptions.enableTrace = true;
        }
      }
      return (0, http_proxy_1.getProxiedConnection)(address, options, connectionOptions).then((result) => this.createSession(address, credentials, options, result));
    }
    shutdown() {
      var _a;
      this.isShutdown = true;
      (_a = this.session) === null || _a === void 0 ? void 0 : _a.close();
      this.session = null;
    }
  }
  transport.Http2SubchannelConnector = Http2SubchannelConnector;
  return transport;
}
var hasRequiredSubchannelPool;
function requireSubchannelPool() {
  if (hasRequiredSubchannelPool) return subchannelPool;
  hasRequiredSubchannelPool = 1;
  Object.defineProperty(subchannelPool, "__esModule", { value: true });
  subchannelPool.getSubchannelPool = subchannelPool.SubchannelPool = void 0;
  const channel_options_1 = channelOptions;
  const subchannel_1 = requireSubchannel();
  const subchannel_address_12 = subchannelAddress;
  const uri_parser_12 = uriParser;
  const transport_1 = requireTransport();
  const REF_CHECK_INTERVAL = 1e4;
  class SubchannelPool {
    /**
     * A pool of subchannels use for making connections. Subchannels with the
     * exact same parameters will be reused.
     */
    constructor() {
      this.pool = /* @__PURE__ */ Object.create(null);
      this.cleanupTimer = null;
    }
    /**
     * Unrefs all unused subchannels and cancels the cleanup task if all
     * subchannels have been unrefed.
     */
    unrefUnusedSubchannels() {
      let allSubchannelsUnrefed = true;
      for (const channelTarget in this.pool) {
        const subchannelObjArray = this.pool[channelTarget];
        const refedSubchannels = subchannelObjArray.filter((value) => !value.subchannel.unrefIfOneRef());
        if (refedSubchannels.length > 0) {
          allSubchannelsUnrefed = false;
        }
        this.pool[channelTarget] = refedSubchannels;
      }
      if (allSubchannelsUnrefed && this.cleanupTimer !== null) {
        clearInterval(this.cleanupTimer);
        this.cleanupTimer = null;
      }
    }
    /**
     * Ensures that the cleanup task is spawned.
     */
    ensureCleanupTask() {
      var _a, _b;
      if (this.cleanupTimer === null) {
        this.cleanupTimer = setInterval(() => {
          this.unrefUnusedSubchannels();
        }, REF_CHECK_INTERVAL);
        (_b = (_a = this.cleanupTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    }
    /**
     * Get a subchannel if one already exists with exactly matching parameters.
     * Otherwise, create and save a subchannel with those parameters.
     * @param channelTarget
     * @param subchannelTarget
     * @param channelArguments
     * @param channelCredentials
     */
    getOrCreateSubchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials2) {
      this.ensureCleanupTask();
      const channelTarget = (0, uri_parser_12.uriToString)(channelTargetUri);
      if (channelTarget in this.pool) {
        const subchannelObjArray = this.pool[channelTarget];
        for (const subchannelObj of subchannelObjArray) {
          if ((0, subchannel_address_12.subchannelAddressEqual)(subchannelTarget, subchannelObj.subchannelAddress) && (0, channel_options_1.channelOptionsEqual)(channelArguments, subchannelObj.channelArguments) && channelCredentials2._equals(subchannelObj.channelCredentials)) {
            return subchannelObj.subchannel;
          }
        }
      }
      const subchannel2 = new subchannel_1.Subchannel(channelTargetUri, subchannelTarget, channelArguments, channelCredentials2, new transport_1.Http2SubchannelConnector(channelTargetUri));
      if (!(channelTarget in this.pool)) {
        this.pool[channelTarget] = [];
      }
      this.pool[channelTarget].push({
        subchannelAddress: subchannelTarget,
        channelArguments,
        channelCredentials: channelCredentials2,
        subchannel: subchannel2
      });
      subchannel2.ref();
      return subchannel2;
    }
  }
  subchannelPool.SubchannelPool = SubchannelPool;
  const globalSubchannelPool = new SubchannelPool();
  function getSubchannelPool(global2) {
    if (global2) {
      return globalSubchannelPool;
    } else {
      return new SubchannelPool();
    }
  }
  subchannelPool.getSubchannelPool = getSubchannelPool;
  return subchannelPool;
}
var filterStack = {};
Object.defineProperty(filterStack, "__esModule", { value: true });
filterStack.FilterStackFactory = filterStack.FilterStack = void 0;
class FilterStack {
  constructor(filters) {
    this.filters = filters;
  }
  sendMetadata(metadata2) {
    let result = metadata2;
    for (let i = 0; i < this.filters.length; i++) {
      result = this.filters[i].sendMetadata(result);
    }
    return result;
  }
  receiveMetadata(metadata2) {
    let result = metadata2;
    for (let i = this.filters.length - 1; i >= 0; i--) {
      result = this.filters[i].receiveMetadata(result);
    }
    return result;
  }
  sendMessage(message2) {
    let result = message2;
    for (let i = 0; i < this.filters.length; i++) {
      result = this.filters[i].sendMessage(result);
    }
    return result;
  }
  receiveMessage(message2) {
    let result = message2;
    for (let i = this.filters.length - 1; i >= 0; i--) {
      result = this.filters[i].receiveMessage(result);
    }
    return result;
  }
  receiveTrailers(status) {
    let result = status;
    for (let i = this.filters.length - 1; i >= 0; i--) {
      result = this.filters[i].receiveTrailers(result);
    }
    return result;
  }
  push(filters) {
    this.filters.unshift(...filters);
  }
  getFilters() {
    return this.filters;
  }
}
filterStack.FilterStack = FilterStack;
class FilterStackFactory {
  constructor(factories) {
    this.factories = factories;
  }
  push(filterFactories) {
    this.factories.unshift(...filterFactories);
  }
  clone() {
    return new FilterStackFactory([...this.factories]);
  }
  createFilter() {
    return new FilterStack(this.factories.map((factory) => factory.createFilter()));
  }
}
filterStack.FilterStackFactory = FilterStackFactory;
var compressionFilter = {};
var compressionAlgorithms = {};
Object.defineProperty(compressionAlgorithms, "__esModule", { value: true });
compressionAlgorithms.CompressionAlgorithms = void 0;
var CompressionAlgorithms;
(function(CompressionAlgorithms2) {
  CompressionAlgorithms2[CompressionAlgorithms2["identity"] = 0] = "identity";
  CompressionAlgorithms2[CompressionAlgorithms2["deflate"] = 1] = "deflate";
  CompressionAlgorithms2[CompressionAlgorithms2["gzip"] = 2] = "gzip";
})(CompressionAlgorithms || (compressionAlgorithms.CompressionAlgorithms = CompressionAlgorithms = {}));
var filter = {};
var hasRequiredFilter;
function requireFilter() {
  if (hasRequiredFilter) return filter;
  hasRequiredFilter = 1;
  Object.defineProperty(filter, "__esModule", { value: true });
  filter.BaseFilter = void 0;
  class BaseFilter {
    async sendMetadata(metadata2) {
      return metadata2;
    }
    receiveMetadata(metadata2) {
      return metadata2;
    }
    async sendMessage(message2) {
      return message2;
    }
    async receiveMessage(message2) {
      return message2;
    }
    receiveTrailers(status) {
      return status;
    }
  }
  filter.BaseFilter = BaseFilter;
  return filter;
}
Object.defineProperty(compressionFilter, "__esModule", { value: true });
compressionFilter.CompressionFilterFactory = compressionFilter.CompressionFilter = void 0;
const zlib$1 = require$$0$6;
const compression_algorithms_1 = compressionAlgorithms;
const constants_1$7 = constants;
const filter_1 = requireFilter();
const logging$5 = logging$9;
const isCompressionAlgorithmKey = (key) => {
  return typeof key === "number" && typeof compression_algorithms_1.CompressionAlgorithms[key] === "string";
};
class CompressionHandler {
  /**
   * @param message Raw uncompressed message bytes
   * @param compress Indicates whether the message should be compressed
   * @return Framed message, compressed if applicable
   */
  async writeMessage(message2, compress) {
    let messageBuffer = message2;
    if (compress) {
      messageBuffer = await this.compressMessage(messageBuffer);
    }
    const output = Buffer.allocUnsafe(messageBuffer.length + 5);
    output.writeUInt8(compress ? 1 : 0, 0);
    output.writeUInt32BE(messageBuffer.length, 1);
    messageBuffer.copy(output, 5);
    return output;
  }
  /**
   * @param data Framed message, possibly compressed
   * @return Uncompressed message
   */
  async readMessage(data) {
    const compressed = data.readUInt8(0) === 1;
    let messageBuffer = data.slice(5);
    if (compressed) {
      messageBuffer = await this.decompressMessage(messageBuffer);
    }
    return messageBuffer;
  }
}
class IdentityHandler extends CompressionHandler {
  async compressMessage(message2) {
    return message2;
  }
  async writeMessage(message2, compress) {
    const output = Buffer.allocUnsafe(message2.length + 5);
    output.writeUInt8(0, 0);
    output.writeUInt32BE(message2.length, 1);
    message2.copy(output, 5);
    return output;
  }
  decompressMessage(message2) {
    return Promise.reject(new Error('Received compressed message but "grpc-encoding" header was identity'));
  }
}
class DeflateHandler extends CompressionHandler {
  constructor(maxRecvMessageLength) {
    super();
    this.maxRecvMessageLength = maxRecvMessageLength;
  }
  compressMessage(message2) {
    return new Promise((resolve, reject) => {
      zlib$1.deflate(message2, (err, output) => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      });
    });
  }
  decompressMessage(message2) {
    return new Promise((resolve, reject) => {
      let totalLength = 0;
      const messageParts = [];
      const decompresser = zlib$1.createInflate();
      decompresser.on("data", (chunk) => {
        messageParts.push(chunk);
        totalLength += chunk.byteLength;
        if (this.maxRecvMessageLength !== -1 && totalLength > this.maxRecvMessageLength) {
          decompresser.destroy();
          reject({
            code: constants_1$7.Status.RESOURCE_EXHAUSTED,
            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
          });
        }
      });
      decompresser.on("end", () => {
        resolve(Buffer.concat(messageParts));
      });
      decompresser.write(message2);
      decompresser.end();
    });
  }
}
class GzipHandler extends CompressionHandler {
  constructor(maxRecvMessageLength) {
    super();
    this.maxRecvMessageLength = maxRecvMessageLength;
  }
  compressMessage(message2) {
    return new Promise((resolve, reject) => {
      zlib$1.gzip(message2, (err, output) => {
        if (err) {
          reject(err);
        } else {
          resolve(output);
        }
      });
    });
  }
  decompressMessage(message2) {
    return new Promise((resolve, reject) => {
      let totalLength = 0;
      const messageParts = [];
      const decompresser = zlib$1.createGunzip();
      decompresser.on("data", (chunk) => {
        messageParts.push(chunk);
        totalLength += chunk.byteLength;
        if (this.maxRecvMessageLength !== -1 && totalLength > this.maxRecvMessageLength) {
          decompresser.destroy();
          reject({
            code: constants_1$7.Status.RESOURCE_EXHAUSTED,
            details: `Received message that decompresses to a size larger than ${this.maxRecvMessageLength}`
          });
        }
      });
      decompresser.on("end", () => {
        resolve(Buffer.concat(messageParts));
      });
      decompresser.write(message2);
      decompresser.end();
    });
  }
}
class UnknownHandler extends CompressionHandler {
  constructor(compressionName) {
    super();
    this.compressionName = compressionName;
  }
  compressMessage(message2) {
    return Promise.reject(new Error(`Received message compressed with unsupported compression method ${this.compressionName}`));
  }
  decompressMessage(message2) {
    return Promise.reject(new Error(`Compression method not supported: ${this.compressionName}`));
  }
}
function getCompressionHandler(compressionName, maxReceiveMessageSize) {
  switch (compressionName) {
    case "identity":
      return new IdentityHandler();
    case "deflate":
      return new DeflateHandler(maxReceiveMessageSize);
    case "gzip":
      return new GzipHandler(maxReceiveMessageSize);
    default:
      return new UnknownHandler(compressionName);
  }
}
class CompressionFilter extends filter_1.BaseFilter {
  constructor(channelOptions2, sharedFilterConfig) {
    var _a, _b, _c;
    super();
    this.sharedFilterConfig = sharedFilterConfig;
    this.sendCompression = new IdentityHandler();
    this.receiveCompression = new IdentityHandler();
    this.currentCompressionAlgorithm = "identity";
    const compressionAlgorithmKey = channelOptions2["grpc.default_compression_algorithm"];
    this.maxReceiveMessageLength = (_a = channelOptions2["grpc.max_receive_message_length"]) !== null && _a !== void 0 ? _a : constants_1$7.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
    this.maxSendMessageLength = (_b = channelOptions2["grpc.max_send_message_length"]) !== null && _b !== void 0 ? _b : constants_1$7.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
    if (compressionAlgorithmKey !== void 0) {
      if (isCompressionAlgorithmKey(compressionAlgorithmKey)) {
        const clientSelectedEncoding = compression_algorithms_1.CompressionAlgorithms[compressionAlgorithmKey];
        const serverSupportedEncodings = (_c = sharedFilterConfig.serverSupportedEncodingHeader) === null || _c === void 0 ? void 0 : _c.split(",");
        if (!serverSupportedEncodings || serverSupportedEncodings.includes(clientSelectedEncoding)) {
          this.currentCompressionAlgorithm = clientSelectedEncoding;
          this.sendCompression = getCompressionHandler(this.currentCompressionAlgorithm, -1);
        }
      } else {
        logging$5.log(constants_1$7.LogVerbosity.ERROR, `Invalid value provided for grpc.default_compression_algorithm option: ${compressionAlgorithmKey}`);
      }
    }
  }
  async sendMetadata(metadata2) {
    const headers = await metadata2;
    headers.set("grpc-accept-encoding", "identity,deflate,gzip");
    headers.set("accept-encoding", "identity");
    if (this.currentCompressionAlgorithm === "identity") {
      headers.remove("grpc-encoding");
    } else {
      headers.set("grpc-encoding", this.currentCompressionAlgorithm);
    }
    return headers;
  }
  receiveMetadata(metadata2) {
    const receiveEncoding = metadata2.get("grpc-encoding");
    if (receiveEncoding.length > 0) {
      const encoding = receiveEncoding[0];
      if (typeof encoding === "string") {
        this.receiveCompression = getCompressionHandler(encoding, this.maxReceiveMessageLength);
      }
    }
    metadata2.remove("grpc-encoding");
    const serverSupportedEncodingsHeader = metadata2.get("grpc-accept-encoding")[0];
    if (serverSupportedEncodingsHeader) {
      this.sharedFilterConfig.serverSupportedEncodingHeader = serverSupportedEncodingsHeader;
      const serverSupportedEncodings = serverSupportedEncodingsHeader.split(",");
      if (!serverSupportedEncodings.includes(this.currentCompressionAlgorithm)) {
        this.sendCompression = new IdentityHandler();
        this.currentCompressionAlgorithm = "identity";
      }
    }
    metadata2.remove("grpc-accept-encoding");
    return metadata2;
  }
  async sendMessage(message2) {
    var _a;
    const resolvedMessage = await message2;
    if (this.maxSendMessageLength !== -1 && resolvedMessage.message.length > this.maxSendMessageLength) {
      throw {
        code: constants_1$7.Status.RESOURCE_EXHAUSTED,
        details: `Attempted to send message with a size larger than ${this.maxSendMessageLength}`
      };
    }
    let compress;
    if (this.sendCompression instanceof IdentityHandler) {
      compress = false;
    } else {
      compress = (((_a = resolvedMessage.flags) !== null && _a !== void 0 ? _a : 0) & 2) === 0;
    }
    return {
      message: await this.sendCompression.writeMessage(resolvedMessage.message, compress),
      flags: resolvedMessage.flags
    };
  }
  async receiveMessage(message2) {
    return this.receiveCompression.readMessage(await message2);
  }
}
compressionFilter.CompressionFilter = CompressionFilter;
class CompressionFilterFactory {
  constructor(channel2, options) {
    this.options = options;
    this.sharedFilterConfig = {};
  }
  createFilter() {
    return new CompressionFilter(this.options, this.sharedFilterConfig);
  }
}
compressionFilter.CompressionFilterFactory = CompressionFilterFactory;
var loadBalancingCall = {};
var deadline = {};
Object.defineProperty(deadline, "__esModule", { value: true });
deadline.formatDateDifference = deadline.deadlineToString = deadline.getRelativeTimeout = deadline.getDeadlineTimeoutString = deadline.minDeadline = void 0;
function minDeadline(...deadlineList) {
  let minValue = Infinity;
  for (const deadline2 of deadlineList) {
    const deadlineMsecs = deadline2 instanceof Date ? deadline2.getTime() : deadline2;
    if (deadlineMsecs < minValue) {
      minValue = deadlineMsecs;
    }
  }
  return minValue;
}
deadline.minDeadline = minDeadline;
const units = [
  ["m", 1],
  ["S", 1e3],
  ["M", 60 * 1e3],
  ["H", 60 * 60 * 1e3]
];
function getDeadlineTimeoutString(deadline2) {
  const now = (/* @__PURE__ */ new Date()).getTime();
  if (deadline2 instanceof Date) {
    deadline2 = deadline2.getTime();
  }
  const timeoutMs = Math.max(deadline2 - now, 0);
  for (const [unit, factor] of units) {
    const amount = timeoutMs / factor;
    if (amount < 1e8) {
      return String(Math.ceil(amount)) + unit;
    }
  }
  throw new Error("Deadline is too far in the future");
}
deadline.getDeadlineTimeoutString = getDeadlineTimeoutString;
const MAX_TIMEOUT_TIME = 2147483647;
function getRelativeTimeout(deadline2) {
  const deadlineMs = deadline2 instanceof Date ? deadline2.getTime() : deadline2;
  const now = (/* @__PURE__ */ new Date()).getTime();
  const timeout = deadlineMs - now;
  if (timeout < 0) {
    return 0;
  } else if (timeout > MAX_TIMEOUT_TIME) {
    return Infinity;
  } else {
    return timeout;
  }
}
deadline.getRelativeTimeout = getRelativeTimeout;
function deadlineToString(deadline2) {
  if (deadline2 instanceof Date) {
    return deadline2.toISOString();
  } else {
    const dateDeadline = new Date(deadline2);
    if (Number.isNaN(dateDeadline.getTime())) {
      return "" + deadline2;
    } else {
      return dateDeadline.toISOString();
    }
  }
}
deadline.deadlineToString = deadlineToString;
function formatDateDifference(startDate, endDate) {
  return ((endDate.getTime() - startDate.getTime()) / 1e3).toFixed(3) + "s";
}
deadline.formatDateDifference = formatDateDifference;
var controlPlaneStatus = {};
Object.defineProperty(controlPlaneStatus, "__esModule", { value: true });
controlPlaneStatus.restrictControlPlaneStatusCode = void 0;
const constants_1$6 = constants;
const INAPPROPRIATE_CONTROL_PLANE_CODES = [
  constants_1$6.Status.OK,
  constants_1$6.Status.INVALID_ARGUMENT,
  constants_1$6.Status.NOT_FOUND,
  constants_1$6.Status.ALREADY_EXISTS,
  constants_1$6.Status.FAILED_PRECONDITION,
  constants_1$6.Status.ABORTED,
  constants_1$6.Status.OUT_OF_RANGE,
  constants_1$6.Status.DATA_LOSS
];
function restrictControlPlaneStatusCode(code, details) {
  if (INAPPROPRIATE_CONTROL_PLANE_CODES.includes(code)) {
    return {
      code: constants_1$6.Status.INTERNAL,
      details: `Invalid status from control plane: ${code} ${constants_1$6.Status[code]} ${details}`
    };
  } else {
    return { code, details };
  }
}
controlPlaneStatus.restrictControlPlaneStatusCode = restrictControlPlaneStatusCode;
Object.defineProperty(loadBalancingCall, "__esModule", { value: true });
loadBalancingCall.LoadBalancingCall = void 0;
const connectivity_state_1 = connectivityState;
const constants_1$5 = constants;
const deadline_1$2 = deadline;
const metadata_1$4 = metadata;
const picker_1 = picker;
const uri_parser_1$1 = uriParser;
const logging$4 = logging$9;
const control_plane_status_1$1 = controlPlaneStatus;
const http2$2 = require$$0$5;
const TRACER_NAME$4 = "load_balancing_call";
class LoadBalancingCall {
  constructor(channel2, callConfig, methodName, host, credentials, deadline2, callNumber2) {
    var _a, _b;
    this.channel = channel2;
    this.callConfig = callConfig;
    this.methodName = methodName;
    this.host = host;
    this.credentials = credentials;
    this.deadline = deadline2;
    this.callNumber = callNumber2;
    this.child = null;
    this.readPending = false;
    this.pendingMessage = null;
    this.pendingHalfClose = false;
    this.ended = false;
    this.metadata = null;
    this.listener = null;
    this.onCallEnded = null;
    this.childStartTime = null;
    const splitPath = this.methodName.split("/");
    let serviceName = "";
    if (splitPath.length >= 2) {
      serviceName = splitPath[1];
    }
    const hostname = (_b = (_a = (0, uri_parser_1$1.splitHostPort)(this.host)) === null || _a === void 0 ? void 0 : _a.host) !== null && _b !== void 0 ? _b : "localhost";
    this.serviceUrl = `https://${hostname}/${serviceName}`;
    this.startTime = /* @__PURE__ */ new Date();
  }
  getDeadlineInfo() {
    var _a, _b;
    const deadlineInfo = [];
    if (this.childStartTime) {
      if (this.childStartTime > this.startTime) {
        if ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.getOptions().waitForReady) {
          deadlineInfo.push("wait_for_ready");
        }
        deadlineInfo.push(`LB pick: ${(0, deadline_1$2.formatDateDifference)(this.startTime, this.childStartTime)}`);
      }
      deadlineInfo.push(...this.child.getDeadlineInfo());
      return deadlineInfo;
    } else {
      if ((_b = this.metadata) === null || _b === void 0 ? void 0 : _b.getOptions().waitForReady) {
        deadlineInfo.push("wait_for_ready");
      }
      deadlineInfo.push("Waiting for LB pick");
    }
    return deadlineInfo;
  }
  trace(text) {
    logging$4.trace(constants_1$5.LogVerbosity.DEBUG, TRACER_NAME$4, "[" + this.callNumber + "] " + text);
  }
  outputStatus(status, progress) {
    var _a, _b;
    if (!this.ended) {
      this.ended = true;
      this.trace("ended with status: code=" + status.code + ' details="' + status.details + '" start time=' + this.startTime.toISOString());
      const finalStatus = Object.assign(Object.assign({}, status), { progress });
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus(finalStatus);
      (_b = this.onCallEnded) === null || _b === void 0 ? void 0 : _b.call(this, finalStatus.code);
    }
  }
  doPick() {
    var _a, _b;
    if (this.ended) {
      return;
    }
    if (!this.metadata) {
      throw new Error("doPick called before start");
    }
    this.trace("Pick called");
    const finalMetadata = this.metadata.clone();
    const pickResult = this.channel.doPick(finalMetadata, this.callConfig.pickInformation);
    const subchannelString = pickResult.subchannel ? "(" + pickResult.subchannel.getChannelzRef().id + ") " + pickResult.subchannel.getAddress() : "" + pickResult.subchannel;
    this.trace("Pick result: " + picker_1.PickResultType[pickResult.pickResultType] + " subchannel: " + subchannelString + " status: " + ((_a = pickResult.status) === null || _a === void 0 ? void 0 : _a.code) + " " + ((_b = pickResult.status) === null || _b === void 0 ? void 0 : _b.details));
    switch (pickResult.pickResultType) {
      case picker_1.PickResultType.COMPLETE:
        this.credentials.generateMetadata({ method_name: this.methodName, service_url: this.serviceUrl }).then((credsMetadata) => {
          var _a2, _b2, _c;
          if (this.ended) {
            this.trace("Credentials metadata generation finished after call ended");
            return;
          }
          finalMetadata.merge(credsMetadata);
          if (finalMetadata.get("authorization").length > 1) {
            this.outputStatus({
              code: constants_1$5.Status.INTERNAL,
              details: '"authorization" metadata cannot have multiple values',
              metadata: new metadata_1$4.Metadata()
            }, "PROCESSED");
          }
          if (pickResult.subchannel.getConnectivityState() !== connectivity_state_1.ConnectivityState.READY) {
            this.trace("Picked subchannel " + subchannelString + " has state " + connectivity_state_1.ConnectivityState[pickResult.subchannel.getConnectivityState()] + " after getting credentials metadata. Retrying pick");
            this.doPick();
            return;
          }
          if (this.deadline !== Infinity) {
            finalMetadata.set("grpc-timeout", (0, deadline_1$2.getDeadlineTimeoutString)(this.deadline));
          }
          try {
            this.child = pickResult.subchannel.getRealSubchannel().createCall(finalMetadata, this.host, this.methodName, {
              onReceiveMetadata: (metadata2) => {
                this.trace("Received metadata");
                this.listener.onReceiveMetadata(metadata2);
              },
              onReceiveMessage: (message2) => {
                this.trace("Received message");
                this.listener.onReceiveMessage(message2);
              },
              onReceiveStatus: (status) => {
                this.trace("Received status");
                if (status.rstCode === http2$2.constants.NGHTTP2_REFUSED_STREAM) {
                  this.outputStatus(status, "REFUSED");
                } else {
                  this.outputStatus(status, "PROCESSED");
                }
              }
            });
            this.childStartTime = /* @__PURE__ */ new Date();
          } catch (error2) {
            this.trace("Failed to start call on picked subchannel " + subchannelString + " with error " + error2.message);
            this.outputStatus({
              code: constants_1$5.Status.INTERNAL,
              details: "Failed to start HTTP/2 stream with error " + error2.message,
              metadata: new metadata_1$4.Metadata()
            }, "NOT_STARTED");
            return;
          }
          (_b2 = (_a2 = this.callConfig).onCommitted) === null || _b2 === void 0 ? void 0 : _b2.call(_a2);
          (_c = pickResult.onCallStarted) === null || _c === void 0 ? void 0 : _c.call(pickResult);
          this.onCallEnded = pickResult.onCallEnded;
          this.trace("Created child call [" + this.child.getCallNumber() + "]");
          if (this.readPending) {
            this.child.startRead();
          }
          if (this.pendingMessage) {
            this.child.sendMessageWithContext(this.pendingMessage.context, this.pendingMessage.message);
          }
          if (this.pendingHalfClose) {
            this.child.halfClose();
          }
        }, (error2) => {
          const { code: code2, details: details2 } = (0, control_plane_status_1$1.restrictControlPlaneStatusCode)(typeof error2.code === "number" ? error2.code : constants_1$5.Status.UNKNOWN, `Getting metadata from plugin failed with error: ${error2.message}`);
          this.outputStatus({
            code: code2,
            details: details2,
            metadata: new metadata_1$4.Metadata()
          }, "PROCESSED");
        });
        break;
      case picker_1.PickResultType.DROP:
        const { code, details } = (0, control_plane_status_1$1.restrictControlPlaneStatusCode)(pickResult.status.code, pickResult.status.details);
        setImmediate(() => {
          this.outputStatus({ code, details, metadata: pickResult.status.metadata }, "DROP");
        });
        break;
      case picker_1.PickResultType.TRANSIENT_FAILURE:
        if (this.metadata.getOptions().waitForReady) {
          this.channel.queueCallForPick(this);
        } else {
          const { code: code2, details: details2 } = (0, control_plane_status_1$1.restrictControlPlaneStatusCode)(pickResult.status.code, pickResult.status.details);
          setImmediate(() => {
            this.outputStatus({ code: code2, details: details2, metadata: pickResult.status.metadata }, "PROCESSED");
          });
        }
        break;
      case picker_1.PickResultType.QUEUE:
        this.channel.queueCallForPick(this);
    }
  }
  cancelWithStatus(status, details) {
    var _a;
    this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
    (_a = this.child) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(status, details);
    this.outputStatus({ code: status, details, metadata: new metadata_1$4.Metadata() }, "PROCESSED");
  }
  getPeer() {
    var _a, _b;
    return (_b = (_a = this.child) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : this.channel.getTarget();
  }
  start(metadata2, listener) {
    this.trace("start called");
    this.listener = listener;
    this.metadata = metadata2;
    this.doPick();
  }
  sendMessageWithContext(context, message2) {
    this.trace("write() called with message of length " + message2.length);
    if (this.child) {
      this.child.sendMessageWithContext(context, message2);
    } else {
      this.pendingMessage = { context, message: message2 };
    }
  }
  startRead() {
    this.trace("startRead called");
    if (this.child) {
      this.child.startRead();
    } else {
      this.readPending = true;
    }
  }
  halfClose() {
    this.trace("halfClose called");
    if (this.child) {
      this.child.halfClose();
    } else {
      this.pendingHalfClose = true;
    }
  }
  setCredentials(credentials) {
    throw new Error("Method not implemented.");
  }
  getCallNumber() {
    return this.callNumber;
  }
}
loadBalancingCall.LoadBalancingCall = LoadBalancingCall;
var resolvingCall = {};
Object.defineProperty(resolvingCall, "__esModule", { value: true });
resolvingCall.ResolvingCall = void 0;
const constants_1$4 = constants;
const deadline_1$1 = deadline;
const metadata_1$3 = metadata;
const logging$3 = logging$9;
const control_plane_status_1 = controlPlaneStatus;
const TRACER_NAME$3 = "resolving_call";
class ResolvingCall {
  constructor(channel2, method2, options, filterStackFactory, credentials, callNumber2) {
    this.channel = channel2;
    this.method = method2;
    this.filterStackFactory = filterStackFactory;
    this.credentials = credentials;
    this.callNumber = callNumber2;
    this.child = null;
    this.readPending = false;
    this.pendingMessage = null;
    this.pendingHalfClose = false;
    this.ended = false;
    this.readFilterPending = false;
    this.writeFilterPending = false;
    this.pendingChildStatus = null;
    this.metadata = null;
    this.listener = null;
    this.statusWatchers = [];
    this.deadlineTimer = setTimeout(() => {
    }, 0);
    this.filterStack = null;
    this.deadlineStartTime = null;
    this.configReceivedTime = null;
    this.childStartTime = null;
    this.deadline = options.deadline;
    this.host = options.host;
    if (options.parentCall) {
      if (options.flags & constants_1$4.Propagate.CANCELLATION) {
        options.parentCall.on("cancelled", () => {
          this.cancelWithStatus(constants_1$4.Status.CANCELLED, "Cancelled by parent call");
        });
      }
      if (options.flags & constants_1$4.Propagate.DEADLINE) {
        this.trace("Propagating deadline from parent: " + options.parentCall.getDeadline());
        this.deadline = (0, deadline_1$1.minDeadline)(this.deadline, options.parentCall.getDeadline());
      }
    }
    this.trace("Created");
    this.runDeadlineTimer();
  }
  trace(text) {
    logging$3.trace(constants_1$4.LogVerbosity.DEBUG, TRACER_NAME$3, "[" + this.callNumber + "] " + text);
  }
  runDeadlineTimer() {
    clearTimeout(this.deadlineTimer);
    this.deadlineStartTime = /* @__PURE__ */ new Date();
    this.trace("Deadline: " + (0, deadline_1$1.deadlineToString)(this.deadline));
    const timeout = (0, deadline_1$1.getRelativeTimeout)(this.deadline);
    if (timeout !== Infinity) {
      this.trace("Deadline will be reached in " + timeout + "ms");
      const handleDeadline = () => {
        if (!this.deadlineStartTime) {
          this.cancelWithStatus(constants_1$4.Status.DEADLINE_EXCEEDED, "Deadline exceeded");
          return;
        }
        const deadlineInfo = [];
        const deadlineEndTime = /* @__PURE__ */ new Date();
        deadlineInfo.push(`Deadline exceeded after ${(0, deadline_1$1.formatDateDifference)(this.deadlineStartTime, deadlineEndTime)}`);
        if (this.configReceivedTime) {
          if (this.configReceivedTime > this.deadlineStartTime) {
            deadlineInfo.push(`name resolution: ${(0, deadline_1$1.formatDateDifference)(this.deadlineStartTime, this.configReceivedTime)}`);
          }
          if (this.childStartTime) {
            if (this.childStartTime > this.configReceivedTime) {
              deadlineInfo.push(`metadata filters: ${(0, deadline_1$1.formatDateDifference)(this.configReceivedTime, this.childStartTime)}`);
            }
          } else {
            deadlineInfo.push("waiting for metadata filters");
          }
        } else {
          deadlineInfo.push("waiting for name resolution");
        }
        if (this.child) {
          deadlineInfo.push(...this.child.getDeadlineInfo());
        }
        this.cancelWithStatus(constants_1$4.Status.DEADLINE_EXCEEDED, deadlineInfo.join(","));
      };
      if (timeout <= 0) {
        process.nextTick(handleDeadline);
      } else {
        this.deadlineTimer = setTimeout(handleDeadline, timeout);
      }
    }
  }
  outputStatus(status) {
    if (!this.ended) {
      this.ended = true;
      if (!this.filterStack) {
        this.filterStack = this.filterStackFactory.createFilter();
      }
      clearTimeout(this.deadlineTimer);
      const filteredStatus = this.filterStack.receiveTrailers(status);
      this.trace("ended with status: code=" + filteredStatus.code + ' details="' + filteredStatus.details + '"');
      this.statusWatchers.forEach((watcher) => watcher(filteredStatus));
      process.nextTick(() => {
        var _a;
        (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus(filteredStatus);
      });
    }
  }
  sendMessageOnChild(context, message2) {
    if (!this.child) {
      throw new Error("sendMessageonChild called with child not populated");
    }
    const child = this.child;
    this.writeFilterPending = true;
    this.filterStack.sendMessage(Promise.resolve({ message: message2, flags: context.flags })).then((filteredMessage) => {
      this.writeFilterPending = false;
      child.sendMessageWithContext(context, filteredMessage.message);
      if (this.pendingHalfClose) {
        child.halfClose();
      }
    }, (status) => {
      this.cancelWithStatus(status.code, status.details);
    });
  }
  getConfig() {
    if (this.ended) {
      return;
    }
    if (!this.metadata || !this.listener) {
      throw new Error("getConfig called before start");
    }
    const configResult = this.channel.getConfig(this.method, this.metadata);
    if (configResult.type === "NONE") {
      this.channel.queueCallForConfig(this);
      return;
    } else if (configResult.type === "ERROR") {
      if (this.metadata.getOptions().waitForReady) {
        this.channel.queueCallForConfig(this);
      } else {
        this.outputStatus(configResult.error);
      }
      return;
    }
    this.configReceivedTime = /* @__PURE__ */ new Date();
    const config = configResult.config;
    if (config.status !== constants_1$4.Status.OK) {
      const { code, details } = (0, control_plane_status_1.restrictControlPlaneStatusCode)(config.status, "Failed to route call to method " + this.method);
      this.outputStatus({
        code,
        details,
        metadata: new metadata_1$3.Metadata()
      });
      return;
    }
    if (config.methodConfig.timeout) {
      const configDeadline = /* @__PURE__ */ new Date();
      configDeadline.setSeconds(configDeadline.getSeconds() + config.methodConfig.timeout.seconds);
      configDeadline.setMilliseconds(configDeadline.getMilliseconds() + config.methodConfig.timeout.nanos / 1e6);
      this.deadline = (0, deadline_1$1.minDeadline)(this.deadline, configDeadline);
      this.runDeadlineTimer();
    }
    this.filterStackFactory.push(config.dynamicFilterFactories);
    this.filterStack = this.filterStackFactory.createFilter();
    this.filterStack.sendMetadata(Promise.resolve(this.metadata)).then((filteredMetadata) => {
      this.child = this.channel.createInnerCall(config, this.method, this.host, this.credentials, this.deadline);
      this.trace("Created child [" + this.child.getCallNumber() + "]");
      this.childStartTime = /* @__PURE__ */ new Date();
      this.child.start(filteredMetadata, {
        onReceiveMetadata: (metadata2) => {
          this.trace("Received metadata");
          this.listener.onReceiveMetadata(this.filterStack.receiveMetadata(metadata2));
        },
        onReceiveMessage: (message2) => {
          this.trace("Received message");
          this.readFilterPending = true;
          this.filterStack.receiveMessage(message2).then((filteredMesssage) => {
            this.trace("Finished filtering received message");
            this.readFilterPending = false;
            this.listener.onReceiveMessage(filteredMesssage);
            if (this.pendingChildStatus) {
              this.outputStatus(this.pendingChildStatus);
            }
          }, (status) => {
            this.cancelWithStatus(status.code, status.details);
          });
        },
        onReceiveStatus: (status) => {
          this.trace("Received status");
          if (this.readFilterPending) {
            this.pendingChildStatus = status;
          } else {
            this.outputStatus(status);
          }
        }
      });
      if (this.readPending) {
        this.child.startRead();
      }
      if (this.pendingMessage) {
        this.sendMessageOnChild(this.pendingMessage.context, this.pendingMessage.message);
      } else if (this.pendingHalfClose) {
        this.child.halfClose();
      }
    }, (status) => {
      this.outputStatus(status);
    });
  }
  reportResolverError(status) {
    var _a;
    if ((_a = this.metadata) === null || _a === void 0 ? void 0 : _a.getOptions().waitForReady) {
      this.channel.queueCallForConfig(this);
    } else {
      this.outputStatus(status);
    }
  }
  cancelWithStatus(status, details) {
    var _a;
    this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
    (_a = this.child) === null || _a === void 0 ? void 0 : _a.cancelWithStatus(status, details);
    this.outputStatus({
      code: status,
      details,
      metadata: new metadata_1$3.Metadata()
    });
  }
  getPeer() {
    var _a, _b;
    return (_b = (_a = this.child) === null || _a === void 0 ? void 0 : _a.getPeer()) !== null && _b !== void 0 ? _b : this.channel.getTarget();
  }
  start(metadata2, listener) {
    this.trace("start called");
    this.metadata = metadata2.clone();
    this.listener = listener;
    this.getConfig();
  }
  sendMessageWithContext(context, message2) {
    this.trace("write() called with message of length " + message2.length);
    if (this.child) {
      this.sendMessageOnChild(context, message2);
    } else {
      this.pendingMessage = { context, message: message2 };
    }
  }
  startRead() {
    this.trace("startRead called");
    if (this.child) {
      this.child.startRead();
    } else {
      this.readPending = true;
    }
  }
  halfClose() {
    this.trace("halfClose called");
    if (this.child && !this.writeFilterPending) {
      this.child.halfClose();
    } else {
      this.pendingHalfClose = true;
    }
  }
  setCredentials(credentials) {
    this.credentials = this.credentials.compose(credentials);
  }
  addStatusWatcher(watcher) {
    this.statusWatchers.push(watcher);
  }
  getCallNumber() {
    return this.callNumber;
  }
}
resolvingCall.ResolvingCall = ResolvingCall;
var retryingCall = {};
Object.defineProperty(retryingCall, "__esModule", { value: true });
retryingCall.RetryingCall = retryingCall.MessageBufferTracker = retryingCall.RetryThrottler = void 0;
const constants_1$3 = constants;
const deadline_1 = deadline;
const metadata_1$2 = metadata;
const logging$2 = logging$9;
const TRACER_NAME$2 = "retrying_call";
class RetryThrottler {
  constructor(maxTokens, tokenRatio, previousRetryThrottler) {
    this.maxTokens = maxTokens;
    this.tokenRatio = tokenRatio;
    if (previousRetryThrottler) {
      this.tokens = previousRetryThrottler.tokens * (maxTokens / previousRetryThrottler.maxTokens);
    } else {
      this.tokens = maxTokens;
    }
  }
  addCallSucceeded() {
    this.tokens = Math.max(this.tokens + this.tokenRatio, this.maxTokens);
  }
  addCallFailed() {
    this.tokens = Math.min(this.tokens - 1, 0);
  }
  canRetryCall() {
    return this.tokens > this.maxTokens / 2;
  }
}
retryingCall.RetryThrottler = RetryThrottler;
class MessageBufferTracker {
  constructor(totalLimit, limitPerCall) {
    this.totalLimit = totalLimit;
    this.limitPerCall = limitPerCall;
    this.totalAllocated = 0;
    this.allocatedPerCall = /* @__PURE__ */ new Map();
  }
  allocate(size, callId) {
    var _a;
    const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== void 0 ? _a : 0;
    if (this.limitPerCall - currentPerCall < size || this.totalLimit - this.totalAllocated < size) {
      return false;
    }
    this.allocatedPerCall.set(callId, currentPerCall + size);
    this.totalAllocated += size;
    return true;
  }
  free(size, callId) {
    var _a;
    if (this.totalAllocated < size) {
      throw new Error(`Invalid buffer allocation state: call ${callId} freed ${size} > total allocated ${this.totalAllocated}`);
    }
    this.totalAllocated -= size;
    const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== void 0 ? _a : 0;
    if (currentPerCall < size) {
      throw new Error(`Invalid buffer allocation state: call ${callId} freed ${size} > allocated for call ${currentPerCall}`);
    }
    this.allocatedPerCall.set(callId, currentPerCall - size);
  }
  freeAll(callId) {
    var _a;
    const currentPerCall = (_a = this.allocatedPerCall.get(callId)) !== null && _a !== void 0 ? _a : 0;
    if (this.totalAllocated < currentPerCall) {
      throw new Error(`Invalid buffer allocation state: call ${callId} allocated ${currentPerCall} > total allocated ${this.totalAllocated}`);
    }
    this.totalAllocated -= currentPerCall;
    this.allocatedPerCall.delete(callId);
  }
}
retryingCall.MessageBufferTracker = MessageBufferTracker;
const PREVIONS_RPC_ATTEMPTS_METADATA_KEY = "grpc-previous-rpc-attempts";
const DEFAULT_MAX_ATTEMPTS_LIMIT = 5;
class RetryingCall {
  constructor(channel2, callConfig, methodName, host, credentials, deadline2, callNumber2, bufferTracker, retryThrottler) {
    var _a;
    this.channel = channel2;
    this.callConfig = callConfig;
    this.methodName = methodName;
    this.host = host;
    this.credentials = credentials;
    this.deadline = deadline2;
    this.callNumber = callNumber2;
    this.bufferTracker = bufferTracker;
    this.retryThrottler = retryThrottler;
    this.listener = null;
    this.initialMetadata = null;
    this.underlyingCalls = [];
    this.writeBuffer = [];
    this.writeBufferOffset = 0;
    this.readStarted = false;
    this.transparentRetryUsed = false;
    this.attempts = 0;
    this.hedgingTimer = null;
    this.committedCallIndex = null;
    this.initialRetryBackoffSec = 0;
    this.nextRetryBackoffSec = 0;
    const maxAttemptsLimit = (_a = channel2.getOptions()["grpc-node.retry_max_attempts_limit"]) !== null && _a !== void 0 ? _a : DEFAULT_MAX_ATTEMPTS_LIMIT;
    if (callConfig.methodConfig.retryPolicy) {
      this.state = "RETRY";
      const retryPolicy = callConfig.methodConfig.retryPolicy;
      this.nextRetryBackoffSec = this.initialRetryBackoffSec = Number(retryPolicy.initialBackoff.substring(0, retryPolicy.initialBackoff.length - 1));
      this.maxAttempts = Math.min(retryPolicy.maxAttempts, maxAttemptsLimit);
    } else if (callConfig.methodConfig.hedgingPolicy) {
      this.state = "HEDGING";
      this.maxAttempts = Math.min(callConfig.methodConfig.hedgingPolicy.maxAttempts, maxAttemptsLimit);
    } else {
      this.state = "TRANSPARENT_ONLY";
      this.maxAttempts = 1;
    }
    this.startTime = /* @__PURE__ */ new Date();
  }
  getDeadlineInfo() {
    if (this.underlyingCalls.length === 0) {
      return [];
    }
    const deadlineInfo = [];
    const latestCall = this.underlyingCalls[this.underlyingCalls.length - 1];
    if (this.underlyingCalls.length > 1) {
      deadlineInfo.push(`previous attempts: ${this.underlyingCalls.length - 1}`);
    }
    if (latestCall.startTime > this.startTime) {
      deadlineInfo.push(`time to current attempt start: ${(0, deadline_1.formatDateDifference)(this.startTime, latestCall.startTime)}`);
    }
    deadlineInfo.push(...latestCall.call.getDeadlineInfo());
    return deadlineInfo;
  }
  getCallNumber() {
    return this.callNumber;
  }
  trace(text) {
    logging$2.trace(constants_1$3.LogVerbosity.DEBUG, TRACER_NAME$2, "[" + this.callNumber + "] " + text);
  }
  reportStatus(statusObject) {
    this.trace("ended with status: code=" + statusObject.code + ' details="' + statusObject.details + '" start time=' + this.startTime.toISOString());
    this.bufferTracker.freeAll(this.callNumber);
    this.writeBufferOffset = this.writeBufferOffset + this.writeBuffer.length;
    this.writeBuffer = [];
    process.nextTick(() => {
      var _a;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onReceiveStatus({
        code: statusObject.code,
        details: statusObject.details,
        metadata: statusObject.metadata
      });
    });
  }
  cancelWithStatus(status, details) {
    this.trace("cancelWithStatus code: " + status + ' details: "' + details + '"');
    this.reportStatus({ code: status, details, metadata: new metadata_1$2.Metadata() });
    for (const { call: call2 } of this.underlyingCalls) {
      call2.cancelWithStatus(status, details);
    }
  }
  getPeer() {
    if (this.committedCallIndex !== null) {
      return this.underlyingCalls[this.committedCallIndex].call.getPeer();
    } else {
      return "unknown";
    }
  }
  getBufferEntry(messageIndex) {
    var _a;
    return (_a = this.writeBuffer[messageIndex - this.writeBufferOffset]) !== null && _a !== void 0 ? _a : {
      entryType: "FREED",
      allocated: false
    };
  }
  getNextBufferIndex() {
    return this.writeBufferOffset + this.writeBuffer.length;
  }
  clearSentMessages() {
    if (this.state !== "COMMITTED") {
      return;
    }
    const earliestNeededMessageIndex = this.underlyingCalls[this.committedCallIndex].nextMessageToSend;
    for (let messageIndex = this.writeBufferOffset; messageIndex < earliestNeededMessageIndex; messageIndex++) {
      const bufferEntry = this.getBufferEntry(messageIndex);
      if (bufferEntry.allocated) {
        this.bufferTracker.free(bufferEntry.message.message.length, this.callNumber);
      }
    }
    this.writeBuffer = this.writeBuffer.slice(earliestNeededMessageIndex - this.writeBufferOffset);
    this.writeBufferOffset = earliestNeededMessageIndex;
  }
  commitCall(index) {
    if (this.state === "COMMITTED") {
      return;
    }
    if (this.underlyingCalls[index].state === "COMPLETED") {
      return;
    }
    this.trace("Committing call [" + this.underlyingCalls[index].call.getCallNumber() + "] at index " + index);
    this.state = "COMMITTED";
    this.committedCallIndex = index;
    for (let i = 0; i < this.underlyingCalls.length; i++) {
      if (i === index) {
        continue;
      }
      if (this.underlyingCalls[i].state === "COMPLETED") {
        continue;
      }
      this.underlyingCalls[i].state = "COMPLETED";
      this.underlyingCalls[i].call.cancelWithStatus(constants_1$3.Status.CANCELLED, "Discarded in favor of other hedged attempt");
    }
    this.clearSentMessages();
  }
  commitCallWithMostMessages() {
    if (this.state === "COMMITTED") {
      return;
    }
    let mostMessages = -1;
    let callWithMostMessages = -1;
    for (const [index, childCall] of this.underlyingCalls.entries()) {
      if (childCall.state === "ACTIVE" && childCall.nextMessageToSend > mostMessages) {
        mostMessages = childCall.nextMessageToSend;
        callWithMostMessages = index;
      }
    }
    if (callWithMostMessages === -1) {
      this.state = "TRANSPARENT_ONLY";
    } else {
      this.commitCall(callWithMostMessages);
    }
  }
  isStatusCodeInList(list, code) {
    return list.some((value) => {
      var _a;
      return value === code || value.toString().toLowerCase() === ((_a = constants_1$3.Status[code]) === null || _a === void 0 ? void 0 : _a.toLowerCase());
    });
  }
  getNextRetryBackoffMs() {
    var _a;
    const retryPolicy = (_a = this.callConfig) === null || _a === void 0 ? void 0 : _a.methodConfig.retryPolicy;
    if (!retryPolicy) {
      return 0;
    }
    const nextBackoffMs = Math.random() * this.nextRetryBackoffSec * 1e3;
    const maxBackoffSec = Number(retryPolicy.maxBackoff.substring(0, retryPolicy.maxBackoff.length - 1));
    this.nextRetryBackoffSec = Math.min(this.nextRetryBackoffSec * retryPolicy.backoffMultiplier, maxBackoffSec);
    return nextBackoffMs;
  }
  maybeRetryCall(pushback, callback) {
    if (this.state !== "RETRY") {
      callback(false);
      return;
    }
    if (this.attempts >= this.maxAttempts) {
      callback(false);
      return;
    }
    let retryDelayMs;
    if (pushback === null) {
      retryDelayMs = this.getNextRetryBackoffMs();
    } else if (pushback < 0) {
      this.state = "TRANSPARENT_ONLY";
      callback(false);
      return;
    } else {
      retryDelayMs = pushback;
      this.nextRetryBackoffSec = this.initialRetryBackoffSec;
    }
    setTimeout(() => {
      var _a, _b;
      if (this.state !== "RETRY") {
        callback(false);
        return;
      }
      if ((_b = (_a = this.retryThrottler) === null || _a === void 0 ? void 0 : _a.canRetryCall()) !== null && _b !== void 0 ? _b : true) {
        callback(true);
        this.attempts += 1;
        this.startNewAttempt();
      }
    }, retryDelayMs);
  }
  countActiveCalls() {
    let count = 0;
    for (const call2 of this.underlyingCalls) {
      if ((call2 === null || call2 === void 0 ? void 0 : call2.state) === "ACTIVE") {
        count += 1;
      }
    }
    return count;
  }
  handleProcessedStatus(status, callIndex, pushback) {
    var _a, _b, _c;
    switch (this.state) {
      case "COMMITTED":
      case "TRANSPARENT_ONLY":
        this.commitCall(callIndex);
        this.reportStatus(status);
        break;
      case "HEDGING":
        if (this.isStatusCodeInList((_a = this.callConfig.methodConfig.hedgingPolicy.nonFatalStatusCodes) !== null && _a !== void 0 ? _a : [], status.code)) {
          (_b = this.retryThrottler) === null || _b === void 0 ? void 0 : _b.addCallFailed();
          let delayMs;
          if (pushback === null) {
            delayMs = 0;
          } else if (pushback < 0) {
            this.state = "TRANSPARENT_ONLY";
            this.commitCall(callIndex);
            this.reportStatus(status);
            return;
          } else {
            delayMs = pushback;
          }
          setTimeout(() => {
            this.maybeStartHedgingAttempt();
            if (this.countActiveCalls() === 0) {
              this.commitCall(callIndex);
              this.reportStatus(status);
            }
          }, delayMs);
        } else {
          this.commitCall(callIndex);
          this.reportStatus(status);
        }
        break;
      case "RETRY":
        if (this.isStatusCodeInList(this.callConfig.methodConfig.retryPolicy.retryableStatusCodes, status.code)) {
          (_c = this.retryThrottler) === null || _c === void 0 ? void 0 : _c.addCallFailed();
          this.maybeRetryCall(pushback, (retried) => {
            if (!retried) {
              this.commitCall(callIndex);
              this.reportStatus(status);
            }
          });
        } else {
          this.commitCall(callIndex);
          this.reportStatus(status);
        }
        break;
    }
  }
  getPushback(metadata2) {
    const mdValue = metadata2.get("grpc-retry-pushback-ms");
    if (mdValue.length === 0) {
      return null;
    }
    try {
      return parseInt(mdValue[0]);
    } catch (e) {
      return -1;
    }
  }
  handleChildStatus(status, callIndex) {
    var _a;
    if (this.underlyingCalls[callIndex].state === "COMPLETED") {
      return;
    }
    this.trace("state=" + this.state + " handling status with progress " + status.progress + " from child [" + this.underlyingCalls[callIndex].call.getCallNumber() + "] in state " + this.underlyingCalls[callIndex].state);
    this.underlyingCalls[callIndex].state = "COMPLETED";
    if (status.code === constants_1$3.Status.OK) {
      (_a = this.retryThrottler) === null || _a === void 0 ? void 0 : _a.addCallSucceeded();
      this.commitCall(callIndex);
      this.reportStatus(status);
      return;
    }
    if (this.state === "COMMITTED") {
      this.reportStatus(status);
      return;
    }
    const pushback = this.getPushback(status.metadata);
    switch (status.progress) {
      case "NOT_STARTED":
        this.startNewAttempt();
        break;
      case "REFUSED":
        if (this.transparentRetryUsed) {
          this.handleProcessedStatus(status, callIndex, pushback);
        } else {
          this.transparentRetryUsed = true;
          this.startNewAttempt();
        }
        break;
      case "DROP":
        this.commitCall(callIndex);
        this.reportStatus(status);
        break;
      case "PROCESSED":
        this.handleProcessedStatus(status, callIndex, pushback);
        break;
    }
  }
  maybeStartHedgingAttempt() {
    if (this.state !== "HEDGING") {
      return;
    }
    if (!this.callConfig.methodConfig.hedgingPolicy) {
      return;
    }
    if (this.attempts >= this.maxAttempts) {
      return;
    }
    this.attempts += 1;
    this.startNewAttempt();
    this.maybeStartHedgingTimer();
  }
  maybeStartHedgingTimer() {
    var _a, _b, _c;
    if (this.hedgingTimer) {
      clearTimeout(this.hedgingTimer);
    }
    if (this.state !== "HEDGING") {
      return;
    }
    if (!this.callConfig.methodConfig.hedgingPolicy) {
      return;
    }
    const hedgingPolicy = this.callConfig.methodConfig.hedgingPolicy;
    if (this.attempts >= this.maxAttempts) {
      return;
    }
    const hedgingDelayString = (_a = hedgingPolicy.hedgingDelay) !== null && _a !== void 0 ? _a : "0s";
    const hedgingDelaySec = Number(hedgingDelayString.substring(0, hedgingDelayString.length - 1));
    this.hedgingTimer = setTimeout(() => {
      this.maybeStartHedgingAttempt();
    }, hedgingDelaySec * 1e3);
    (_c = (_b = this.hedgingTimer).unref) === null || _c === void 0 ? void 0 : _c.call(_b);
  }
  startNewAttempt() {
    const child = this.channel.createLoadBalancingCall(this.callConfig, this.methodName, this.host, this.credentials, this.deadline);
    this.trace("Created child call [" + child.getCallNumber() + "] for attempt " + this.attempts);
    const index = this.underlyingCalls.length;
    this.underlyingCalls.push({
      state: "ACTIVE",
      call: child,
      nextMessageToSend: 0,
      startTime: /* @__PURE__ */ new Date()
    });
    const previousAttempts = this.attempts - 1;
    const initialMetadata = this.initialMetadata.clone();
    if (previousAttempts > 0) {
      initialMetadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
    }
    let receivedMetadata = false;
    child.start(initialMetadata, {
      onReceiveMetadata: (metadata2) => {
        this.trace("Received metadata from child [" + child.getCallNumber() + "]");
        this.commitCall(index);
        receivedMetadata = true;
        if (previousAttempts > 0) {
          metadata2.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
        }
        if (this.underlyingCalls[index].state === "ACTIVE") {
          this.listener.onReceiveMetadata(metadata2);
        }
      },
      onReceiveMessage: (message2) => {
        this.trace("Received message from child [" + child.getCallNumber() + "]");
        this.commitCall(index);
        if (this.underlyingCalls[index].state === "ACTIVE") {
          this.listener.onReceiveMessage(message2);
        }
      },
      onReceiveStatus: (status) => {
        this.trace("Received status from child [" + child.getCallNumber() + "]");
        if (!receivedMetadata && previousAttempts > 0) {
          status.metadata.set(PREVIONS_RPC_ATTEMPTS_METADATA_KEY, `${previousAttempts}`);
        }
        this.handleChildStatus(status, index);
      }
    });
    this.sendNextChildMessage(index);
    if (this.readStarted) {
      child.startRead();
    }
  }
  start(metadata2, listener) {
    this.trace("start called");
    this.listener = listener;
    this.initialMetadata = metadata2;
    this.attempts += 1;
    this.startNewAttempt();
    this.maybeStartHedgingTimer();
  }
  handleChildWriteCompleted(childIndex) {
    var _a, _b;
    const childCall = this.underlyingCalls[childIndex];
    const messageIndex = childCall.nextMessageToSend;
    (_b = (_a = this.getBufferEntry(messageIndex)).callback) === null || _b === void 0 ? void 0 : _b.call(_a);
    this.clearSentMessages();
    childCall.nextMessageToSend += 1;
    this.sendNextChildMessage(childIndex);
  }
  sendNextChildMessage(childIndex) {
    const childCall = this.underlyingCalls[childIndex];
    if (childCall.state === "COMPLETED") {
      return;
    }
    if (this.getBufferEntry(childCall.nextMessageToSend)) {
      const bufferEntry = this.getBufferEntry(childCall.nextMessageToSend);
      switch (bufferEntry.entryType) {
        case "MESSAGE":
          childCall.call.sendMessageWithContext({
            callback: (error2) => {
              this.handleChildWriteCompleted(childIndex);
            }
          }, bufferEntry.message.message);
          break;
        case "HALF_CLOSE":
          childCall.nextMessageToSend += 1;
          childCall.call.halfClose();
          break;
      }
    }
  }
  sendMessageWithContext(context, message2) {
    var _a;
    this.trace("write() called with message of length " + message2.length);
    const writeObj = {
      message: message2,
      flags: context.flags
    };
    const messageIndex = this.getNextBufferIndex();
    const bufferEntry = {
      entryType: "MESSAGE",
      message: writeObj,
      allocated: this.bufferTracker.allocate(message2.length, this.callNumber)
    };
    this.writeBuffer.push(bufferEntry);
    if (bufferEntry.allocated) {
      (_a = context.callback) === null || _a === void 0 ? void 0 : _a.call(context);
      for (const [callIndex, call2] of this.underlyingCalls.entries()) {
        if (call2.state === "ACTIVE" && call2.nextMessageToSend === messageIndex) {
          call2.call.sendMessageWithContext({
            callback: (error2) => {
              this.handleChildWriteCompleted(callIndex);
            }
          }, message2);
        }
      }
    } else {
      this.commitCallWithMostMessages();
      if (this.committedCallIndex === null) {
        return;
      }
      const call2 = this.underlyingCalls[this.committedCallIndex];
      bufferEntry.callback = context.callback;
      if (call2.state === "ACTIVE" && call2.nextMessageToSend === messageIndex) {
        call2.call.sendMessageWithContext({
          callback: (error2) => {
            this.handleChildWriteCompleted(this.committedCallIndex);
          }
        }, message2);
      }
    }
  }
  startRead() {
    this.trace("startRead called");
    this.readStarted = true;
    for (const underlyingCall of this.underlyingCalls) {
      if ((underlyingCall === null || underlyingCall === void 0 ? void 0 : underlyingCall.state) === "ACTIVE") {
        underlyingCall.call.startRead();
      }
    }
  }
  halfClose() {
    this.trace("halfClose called");
    const halfCloseIndex = this.getNextBufferIndex();
    this.writeBuffer.push({
      entryType: "HALF_CLOSE",
      allocated: false
    });
    for (const call2 of this.underlyingCalls) {
      if ((call2 === null || call2 === void 0 ? void 0 : call2.state) === "ACTIVE" && call2.nextMessageToSend === halfCloseIndex) {
        call2.nextMessageToSend += 1;
        call2.call.halfClose();
      }
    }
  }
  setCredentials(newCredentials) {
    throw new Error("Method not implemented.");
  }
  getMethod() {
    return this.methodName;
  }
  getHost() {
    return this.host;
  }
}
retryingCall.RetryingCall = RetryingCall;
var subchannelInterface = {};
Object.defineProperty(subchannelInterface, "__esModule", { value: true });
subchannelInterface.BaseSubchannelWrapper = void 0;
class BaseSubchannelWrapper {
  constructor(child) {
    this.child = child;
    this.healthy = true;
    this.healthListeners = /* @__PURE__ */ new Set();
    child.addHealthStateWatcher((childHealthy) => {
      if (this.healthy) {
        this.updateHealthListeners();
      }
    });
  }
  updateHealthListeners() {
    for (const listener of this.healthListeners) {
      listener(this.isHealthy());
    }
  }
  getConnectivityState() {
    return this.child.getConnectivityState();
  }
  addConnectivityStateListener(listener) {
    this.child.addConnectivityStateListener(listener);
  }
  removeConnectivityStateListener(listener) {
    this.child.removeConnectivityStateListener(listener);
  }
  startConnecting() {
    this.child.startConnecting();
  }
  getAddress() {
    return this.child.getAddress();
  }
  throttleKeepalive(newKeepaliveTime) {
    this.child.throttleKeepalive(newKeepaliveTime);
  }
  ref() {
    this.child.ref();
  }
  unref() {
    this.child.unref();
  }
  getChannelzRef() {
    return this.child.getChannelzRef();
  }
  isHealthy() {
    return this.healthy && this.child.isHealthy();
  }
  addHealthStateWatcher(listener) {
    this.healthListeners.add(listener);
  }
  removeHealthStateWatcher(listener) {
    this.healthListeners.delete(listener);
  }
  setHealthy(healthy) {
    if (healthy !== this.healthy) {
      this.healthy = healthy;
      if (this.child.isHealthy()) {
        this.updateHealthListeners();
      }
    }
  }
  getRealSubchannel() {
    return this.child.getRealSubchannel();
  }
  realSubchannelEquals(other) {
    return this.getRealSubchannel() === other.getRealSubchannel();
  }
}
subchannelInterface.BaseSubchannelWrapper = BaseSubchannelWrapper;
var hasRequiredInternalChannel;
function requireInternalChannel() {
  if (hasRequiredInternalChannel) return internalChannel;
  hasRequiredInternalChannel = 1;
  Object.defineProperty(internalChannel, "__esModule", { value: true });
  internalChannel.InternalChannel = void 0;
  const channel_credentials_1 = channelCredentials;
  const resolving_load_balancer_1 = resolvingLoadBalancer;
  const subchannel_pool_1 = requireSubchannelPool();
  const picker_12 = picker;
  const metadata_12 = metadata;
  const constants_12 = constants;
  const filter_stack_1 = filterStack;
  const compression_filter_1 = compressionFilter;
  const resolver_12 = resolver;
  const logging_12 = logging$9;
  const http_proxy_1 = http_proxy;
  const uri_parser_12 = uriParser;
  const connectivity_state_12 = connectivityState;
  const channelz_12 = requireChannelz();
  const load_balancing_call_1 = loadBalancingCall;
  const deadline_12 = deadline;
  const resolving_call_1 = resolvingCall;
  const call_number_1 = callNumber;
  const control_plane_status_12 = controlPlaneStatus;
  const retrying_call_1 = retryingCall;
  const subchannel_interface_1 = subchannelInterface;
  const MAX_TIMEOUT_TIME2 = 2147483647;
  const MIN_IDLE_TIMEOUT_MS = 1e3;
  const DEFAULT_IDLE_TIMEOUT_MS = 30 * 60 * 1e3;
  const RETRY_THROTTLER_MAP = /* @__PURE__ */ new Map();
  const DEFAULT_RETRY_BUFFER_SIZE_BYTES = 1 << 24;
  const DEFAULT_PER_RPC_RETRY_BUFFER_SIZE_BYTES = 1 << 20;
  class ChannelSubchannelWrapper extends subchannel_interface_1.BaseSubchannelWrapper {
    constructor(childSubchannel, channel2) {
      super(childSubchannel);
      this.channel = channel2;
      this.refCount = 0;
      this.subchannelStateListener = (subchannel2, previousState, newState, keepaliveTime) => {
        channel2.throttleKeepalive(keepaliveTime);
      };
      childSubchannel.addConnectivityStateListener(this.subchannelStateListener);
    }
    ref() {
      this.child.ref();
      this.refCount += 1;
    }
    unref() {
      this.child.unref();
      this.refCount -= 1;
      if (this.refCount <= 0) {
        this.child.removeConnectivityStateListener(this.subchannelStateListener);
        this.channel.removeWrappedSubchannel(this);
      }
    }
  }
  class ShutdownPicker {
    pick(pickArgs) {
      return {
        pickResultType: picker_12.PickResultType.DROP,
        status: {
          code: constants_12.Status.UNAVAILABLE,
          details: "Channel closed before call started",
          metadata: new metadata_12.Metadata()
        },
        subchannel: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  class InternalChannel {
    constructor(target, credentials, options) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      this.credentials = credentials;
      this.options = options;
      this.connectivityState = connectivity_state_12.ConnectivityState.IDLE;
      this.currentPicker = new picker_12.UnavailablePicker();
      this.configSelectionQueue = [];
      this.pickQueue = [];
      this.connectivityStateWatchers = [];
      this.configSelector = null;
      this.currentResolutionError = null;
      this.wrappedSubchannels = /* @__PURE__ */ new Set();
      this.callCount = 0;
      this.idleTimer = null;
      this.channelzEnabled = true;
      this.callTracker = new channelz_12.ChannelzCallTracker();
      this.childrenTracker = new channelz_12.ChannelzChildrenTracker();
      this.randomChannelId = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      if (typeof target !== "string") {
        throw new TypeError("Channel target must be a string");
      }
      if (!(credentials instanceof channel_credentials_1.ChannelCredentials)) {
        throw new TypeError("Channel credentials must be a ChannelCredentials object");
      }
      if (options) {
        if (typeof options !== "object") {
          throw new TypeError("Channel options must be an object");
        }
      }
      this.originalTarget = target;
      const originalTargetUri = (0, uri_parser_12.parseUri)(target);
      if (originalTargetUri === null) {
        throw new Error(`Could not parse target name "${target}"`);
      }
      const defaultSchemeMapResult = (0, resolver_12.mapUriDefaultScheme)(originalTargetUri);
      if (defaultSchemeMapResult === null) {
        throw new Error(`Could not find a default scheme for target name "${target}"`);
      }
      this.callRefTimer = setInterval(() => {
      }, MAX_TIMEOUT_TIME2);
      (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      if (this.options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
      }
      this.channelzTrace = new channelz_12.ChannelzTrace();
      this.channelzRef = (0, channelz_12.registerChannelzChannel)(target, () => this.getChannelzInfo(), this.channelzEnabled);
      if (this.channelzEnabled) {
        this.channelzTrace.addTrace("CT_INFO", "Channel created");
      }
      if (this.options["grpc.default_authority"]) {
        this.defaultAuthority = this.options["grpc.default_authority"];
      } else {
        this.defaultAuthority = (0, resolver_12.getDefaultAuthority)(defaultSchemeMapResult);
      }
      const proxyMapResult = (0, http_proxy_1.mapProxyName)(defaultSchemeMapResult, options);
      this.target = proxyMapResult.target;
      this.options = Object.assign({}, this.options, proxyMapResult.extraOptions);
      this.subchannelPool = (0, subchannel_pool_1.getSubchannelPool)(((_c = options["grpc.use_local_subchannel_pool"]) !== null && _c !== void 0 ? _c : 0) === 0);
      this.retryBufferTracker = new retrying_call_1.MessageBufferTracker((_d = options["grpc.retry_buffer_size"]) !== null && _d !== void 0 ? _d : DEFAULT_RETRY_BUFFER_SIZE_BYTES, (_e = options["grpc.per_rpc_retry_buffer_size"]) !== null && _e !== void 0 ? _e : DEFAULT_PER_RPC_RETRY_BUFFER_SIZE_BYTES);
      this.keepaliveTime = (_f = options["grpc.keepalive_time_ms"]) !== null && _f !== void 0 ? _f : -1;
      this.idleTimeoutMs = Math.max((_g = options["grpc.client_idle_timeout_ms"]) !== null && _g !== void 0 ? _g : DEFAULT_IDLE_TIMEOUT_MS, MIN_IDLE_TIMEOUT_MS);
      const channelControlHelper = {
        createSubchannel: (subchannelAddress2, subchannelArgs, credentialsOverride) => {
          const subchannel2 = this.subchannelPool.getOrCreateSubchannel(this.target, subchannelAddress2, Object.assign({}, this.options, subchannelArgs), credentialsOverride !== null && credentialsOverride !== void 0 ? credentialsOverride : this.credentials);
          subchannel2.throttleKeepalive(this.keepaliveTime);
          if (this.channelzEnabled) {
            this.channelzTrace.addTrace("CT_INFO", "Created subchannel or used existing subchannel", subchannel2.getChannelzRef());
          }
          const wrappedSubchannel = new ChannelSubchannelWrapper(subchannel2, this);
          this.wrappedSubchannels.add(wrappedSubchannel);
          return wrappedSubchannel;
        },
        updateState: (connectivityState2, picker2) => {
          this.currentPicker = picker2;
          const queueCopy = this.pickQueue.slice();
          this.pickQueue = [];
          if (queueCopy.length > 0) {
            this.callRefTimerUnref();
          }
          for (const call2 of queueCopy) {
            call2.doPick();
          }
          this.updateState(connectivityState2);
        },
        requestReresolution: () => {
          throw new Error("Resolving load balancer should never call requestReresolution");
        },
        addChannelzChild: (child) => {
          if (this.channelzEnabled) {
            this.childrenTracker.refChild(child);
          }
        },
        removeChannelzChild: (child) => {
          if (this.channelzEnabled) {
            this.childrenTracker.unrefChild(child);
          }
        }
      };
      this.resolvingLoadBalancer = new resolving_load_balancer_1.ResolvingLoadBalancer(this.target, channelControlHelper, credentials, options, (serviceConfig2, configSelector) => {
        if (serviceConfig2.retryThrottling) {
          RETRY_THROTTLER_MAP.set(this.getTarget(), new retrying_call_1.RetryThrottler(serviceConfig2.retryThrottling.maxTokens, serviceConfig2.retryThrottling.tokenRatio, RETRY_THROTTLER_MAP.get(this.getTarget())));
        } else {
          RETRY_THROTTLER_MAP.delete(this.getTarget());
        }
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_INFO", "Address resolution succeeded");
        }
        this.configSelector = configSelector;
        this.currentResolutionError = null;
        process.nextTick(() => {
          const localQueue = this.configSelectionQueue;
          this.configSelectionQueue = [];
          if (localQueue.length > 0) {
            this.callRefTimerUnref();
          }
          for (const call2 of localQueue) {
            call2.getConfig();
          }
        });
      }, (status) => {
        if (this.channelzEnabled) {
          this.channelzTrace.addTrace("CT_WARNING", "Address resolution failed with code " + status.code + ' and details "' + status.details + '"');
        }
        if (this.configSelectionQueue.length > 0) {
          this.trace("Name resolution failed with calls queued for config selection");
        }
        if (this.configSelector === null) {
          this.currentResolutionError = Object.assign(Object.assign({}, (0, control_plane_status_12.restrictControlPlaneStatusCode)(status.code, status.details)), { metadata: status.metadata });
        }
        const localQueue = this.configSelectionQueue;
        this.configSelectionQueue = [];
        if (localQueue.length > 0) {
          this.callRefTimerUnref();
        }
        for (const call2 of localQueue) {
          call2.reportResolverError(status);
        }
      });
      this.filterStackFactory = new filter_stack_1.FilterStackFactory([
        new compression_filter_1.CompressionFilterFactory(this, this.options)
      ]);
      this.trace("Channel constructed with options " + JSON.stringify(options, void 0, 2));
      const error2 = new Error();
      if ((0, logging_12.isTracerEnabled)("channel_stacktrace")) {
        (0, logging_12.trace)(constants_12.LogVerbosity.DEBUG, "channel_stacktrace", "(" + this.channelzRef.id + ") Channel constructed \n" + ((_h = error2.stack) === null || _h === void 0 ? void 0 : _h.substring(error2.stack.indexOf("\n") + 1)));
      }
      this.lastActivityTimestamp = /* @__PURE__ */ new Date();
    }
    getChannelzInfo() {
      return {
        target: this.originalTarget,
        state: this.connectivityState,
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        children: this.childrenTracker.getChildLists()
      };
    }
    trace(text, verbosityOverride) {
      (0, logging_12.trace)(verbosityOverride !== null && verbosityOverride !== void 0 ? verbosityOverride : constants_12.LogVerbosity.DEBUG, "channel", "(" + this.channelzRef.id + ") " + (0, uri_parser_12.uriToString)(this.target) + " " + text);
    }
    callRefTimerRef() {
      var _a, _b, _c, _d;
      if (!((_b = (_a = this.callRefTimer).hasRef) === null || _b === void 0 ? void 0 : _b.call(_a))) {
        this.trace("callRefTimer.ref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
        (_d = (_c = this.callRefTimer).ref) === null || _d === void 0 ? void 0 : _d.call(_c);
      }
    }
    callRefTimerUnref() {
      var _a, _b;
      if (!this.callRefTimer.hasRef || this.callRefTimer.hasRef()) {
        this.trace("callRefTimer.unref | configSelectionQueue.length=" + this.configSelectionQueue.length + " pickQueue.length=" + this.pickQueue.length);
        (_b = (_a = this.callRefTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    }
    removeConnectivityStateWatcher(watcherObject) {
      const watcherIndex = this.connectivityStateWatchers.findIndex((value) => value === watcherObject);
      if (watcherIndex >= 0) {
        this.connectivityStateWatchers.splice(watcherIndex, 1);
      }
    }
    updateState(newState) {
      (0, logging_12.trace)(constants_12.LogVerbosity.DEBUG, "connectivity_state", "(" + this.channelzRef.id + ") " + (0, uri_parser_12.uriToString)(this.target) + " " + connectivity_state_12.ConnectivityState[this.connectivityState] + " -> " + connectivity_state_12.ConnectivityState[newState]);
      if (this.channelzEnabled) {
        this.channelzTrace.addTrace("CT_INFO", "Connectivity state change to " + connectivity_state_12.ConnectivityState[newState]);
      }
      this.connectivityState = newState;
      const watchersCopy = this.connectivityStateWatchers.slice();
      for (const watcherObject of watchersCopy) {
        if (newState !== watcherObject.currentState) {
          if (watcherObject.timer) {
            clearTimeout(watcherObject.timer);
          }
          this.removeConnectivityStateWatcher(watcherObject);
          watcherObject.callback();
        }
      }
      if (newState !== connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE) {
        this.currentResolutionError = null;
      }
    }
    throttleKeepalive(newKeepaliveTime) {
      if (newKeepaliveTime > this.keepaliveTime) {
        this.keepaliveTime = newKeepaliveTime;
        for (const wrappedSubchannel of this.wrappedSubchannels) {
          wrappedSubchannel.throttleKeepalive(newKeepaliveTime);
        }
      }
    }
    removeWrappedSubchannel(wrappedSubchannel) {
      this.wrappedSubchannels.delete(wrappedSubchannel);
    }
    doPick(metadata2, extraPickInfo) {
      return this.currentPicker.pick({
        metadata: metadata2,
        extraPickInfo
      });
    }
    queueCallForPick(call2) {
      this.pickQueue.push(call2);
      this.callRefTimerRef();
    }
    getConfig(method2, metadata2) {
      if (this.connectivityState !== connectivity_state_12.ConnectivityState.SHUTDOWN) {
        this.resolvingLoadBalancer.exitIdle();
      }
      if (this.configSelector) {
        return {
          type: "SUCCESS",
          config: this.configSelector(method2, metadata2, this.randomChannelId)
        };
      } else {
        if (this.currentResolutionError) {
          return {
            type: "ERROR",
            error: this.currentResolutionError
          };
        } else {
          return {
            type: "NONE"
          };
        }
      }
    }
    queueCallForConfig(call2) {
      this.configSelectionQueue.push(call2);
      this.callRefTimerRef();
    }
    enterIdle() {
      this.resolvingLoadBalancer.destroy();
      this.updateState(connectivity_state_12.ConnectivityState.IDLE);
      this.currentPicker = new picker_12.QueuePicker(this.resolvingLoadBalancer);
      if (this.idleTimer) {
        clearTimeout(this.idleTimer);
        this.idleTimer = null;
      }
    }
    startIdleTimeout(timeoutMs) {
      var _a, _b;
      this.idleTimer = setTimeout(() => {
        if (this.callCount > 0) {
          this.startIdleTimeout(this.idleTimeoutMs);
          return;
        }
        const now = /* @__PURE__ */ new Date();
        const timeSinceLastActivity = now.valueOf() - this.lastActivityTimestamp.valueOf();
        if (timeSinceLastActivity >= this.idleTimeoutMs) {
          this.trace("Idle timer triggered after " + this.idleTimeoutMs + "ms of inactivity");
          this.enterIdle();
        } else {
          this.startIdleTimeout(this.idleTimeoutMs - timeSinceLastActivity);
        }
      }, timeoutMs);
      (_b = (_a = this.idleTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    maybeStartIdleTimer() {
      if (this.connectivityState !== connectivity_state_12.ConnectivityState.SHUTDOWN && !this.idleTimer) {
        this.startIdleTimeout(this.idleTimeoutMs);
      }
    }
    onCallStart() {
      if (this.channelzEnabled) {
        this.callTracker.addCallStarted();
      }
      this.callCount += 1;
    }
    onCallEnd(status) {
      if (this.channelzEnabled) {
        if (status.code === constants_12.Status.OK) {
          this.callTracker.addCallSucceeded();
        } else {
          this.callTracker.addCallFailed();
        }
      }
      this.callCount -= 1;
      this.lastActivityTimestamp = /* @__PURE__ */ new Date();
      this.maybeStartIdleTimer();
    }
    createLoadBalancingCall(callConfig, method2, host, credentials, deadline2) {
      const callNumber2 = (0, call_number_1.getNextCallNumber)();
      this.trace("createLoadBalancingCall [" + callNumber2 + '] method="' + method2 + '"');
      return new load_balancing_call_1.LoadBalancingCall(this, callConfig, method2, host, credentials, deadline2, callNumber2);
    }
    createRetryingCall(callConfig, method2, host, credentials, deadline2) {
      const callNumber2 = (0, call_number_1.getNextCallNumber)();
      this.trace("createRetryingCall [" + callNumber2 + '] method="' + method2 + '"');
      return new retrying_call_1.RetryingCall(this, callConfig, method2, host, credentials, deadline2, callNumber2, this.retryBufferTracker, RETRY_THROTTLER_MAP.get(this.getTarget()));
    }
    createInnerCall(callConfig, method2, host, credentials, deadline2) {
      if (this.options["grpc.enable_retries"] === 0) {
        return this.createLoadBalancingCall(callConfig, method2, host, credentials, deadline2);
      } else {
        return this.createRetryingCall(callConfig, method2, host, credentials, deadline2);
      }
    }
    createResolvingCall(method2, deadline2, host, parentCall, propagateFlags) {
      const callNumber2 = (0, call_number_1.getNextCallNumber)();
      this.trace("createResolvingCall [" + callNumber2 + '] method="' + method2 + '", deadline=' + (0, deadline_12.deadlineToString)(deadline2));
      const finalOptions = {
        deadline: deadline2,
        flags: propagateFlags !== null && propagateFlags !== void 0 ? propagateFlags : constants_12.Propagate.DEFAULTS,
        host: host !== null && host !== void 0 ? host : this.defaultAuthority,
        parentCall
      };
      const call2 = new resolving_call_1.ResolvingCall(this, method2, finalOptions, this.filterStackFactory.clone(), this.credentials._getCallCredentials(), callNumber2);
      this.onCallStart();
      call2.addStatusWatcher((status) => {
        this.onCallEnd(status);
      });
      return call2;
    }
    close() {
      this.resolvingLoadBalancer.destroy();
      this.updateState(connectivity_state_12.ConnectivityState.SHUTDOWN);
      this.currentPicker = new ShutdownPicker();
      for (const call2 of this.configSelectionQueue) {
        call2.cancelWithStatus(constants_12.Status.UNAVAILABLE, "Channel closed before call started");
      }
      this.configSelectionQueue = [];
      for (const call2 of this.pickQueue) {
        call2.cancelWithStatus(constants_12.Status.UNAVAILABLE, "Channel closed before call started");
      }
      this.pickQueue = [];
      clearInterval(this.callRefTimer);
      if (this.idleTimer) {
        clearTimeout(this.idleTimer);
      }
      if (this.channelzEnabled) {
        (0, channelz_12.unregisterChannelzRef)(this.channelzRef);
      }
      this.subchannelPool.unrefUnusedSubchannels();
    }
    getTarget() {
      return (0, uri_parser_12.uriToString)(this.target);
    }
    getConnectivityState(tryToConnect) {
      const connectivityState2 = this.connectivityState;
      if (tryToConnect) {
        this.resolvingLoadBalancer.exitIdle();
        this.lastActivityTimestamp = /* @__PURE__ */ new Date();
        this.maybeStartIdleTimer();
      }
      return connectivityState2;
    }
    watchConnectivityState(currentState, deadline2, callback) {
      if (this.connectivityState === connectivity_state_12.ConnectivityState.SHUTDOWN) {
        throw new Error("Channel has been shut down");
      }
      let timer = null;
      if (deadline2 !== Infinity) {
        const deadlineDate = deadline2 instanceof Date ? deadline2 : new Date(deadline2);
        const now = /* @__PURE__ */ new Date();
        if (deadline2 === -Infinity || deadlineDate <= now) {
          process.nextTick(callback, new Error("Deadline passed without connectivity state change"));
          return;
        }
        timer = setTimeout(() => {
          this.removeConnectivityStateWatcher(watcherObject);
          callback(new Error("Deadline passed without connectivity state change"));
        }, deadlineDate.getTime() - now.getTime());
      }
      const watcherObject = {
        currentState,
        callback,
        timer
      };
      this.connectivityStateWatchers.push(watcherObject);
    }
    /**
     * Get the channelz reference object for this channel. The returned value is
     * garbage if channelz is disabled for this channel.
     * @returns
     */
    getChannelzRef() {
      return this.channelzRef;
    }
    createCall(method2, deadline2, host, parentCall, propagateFlags) {
      if (typeof method2 !== "string") {
        throw new TypeError("Channel#createCall: method must be a string");
      }
      if (!(typeof deadline2 === "number" || deadline2 instanceof Date)) {
        throw new TypeError("Channel#createCall: deadline must be a number or Date");
      }
      if (this.connectivityState === connectivity_state_12.ConnectivityState.SHUTDOWN) {
        throw new Error("Channel has been shut down");
      }
      return this.createResolvingCall(method2, deadline2, host, parentCall, propagateFlags);
    }
    getOptions() {
      return this.options;
    }
  }
  internalChannel.InternalChannel = InternalChannel;
  return internalChannel;
}
var hasRequiredChannel;
function requireChannel() {
  if (hasRequiredChannel) return channel;
  hasRequiredChannel = 1;
  Object.defineProperty(channel, "__esModule", { value: true });
  channel.ChannelImplementation = void 0;
  const channel_credentials_1 = channelCredentials;
  const internal_channel_1 = requireInternalChannel();
  class ChannelImplementation {
    constructor(target, credentials, options) {
      if (typeof target !== "string") {
        throw new TypeError("Channel target must be a string");
      }
      if (!(credentials instanceof channel_credentials_1.ChannelCredentials)) {
        throw new TypeError("Channel credentials must be a ChannelCredentials object");
      }
      if (options) {
        if (typeof options !== "object") {
          throw new TypeError("Channel options must be an object");
        }
      }
      this.internalChannel = new internal_channel_1.InternalChannel(target, credentials, options);
    }
    close() {
      this.internalChannel.close();
    }
    getTarget() {
      return this.internalChannel.getTarget();
    }
    getConnectivityState(tryToConnect) {
      return this.internalChannel.getConnectivityState(tryToConnect);
    }
    watchConnectivityState(currentState, deadline2, callback) {
      this.internalChannel.watchConnectivityState(currentState, deadline2, callback);
    }
    /**
     * Get the channelz reference object for this channel. The returned value is
     * garbage if channelz is disabled for this channel.
     * @returns
     */
    getChannelzRef() {
      return this.internalChannel.getChannelzRef();
    }
    createCall(method2, deadline2, host, parentCall, propagateFlags) {
      if (typeof method2 !== "string") {
        throw new TypeError("Channel#createCall: method must be a string");
      }
      if (!(typeof deadline2 === "number" || deadline2 instanceof Date)) {
        throw new TypeError("Channel#createCall: deadline must be a number or Date");
      }
      return this.internalChannel.createCall(method2, deadline2, host, parentCall, propagateFlags);
    }
  }
  channel.ChannelImplementation = ChannelImplementation;
  return channel;
}
var server = {};
var serverCall = {};
Object.defineProperty(serverCall, "__esModule", { value: true });
serverCall.ServerDuplexStreamImpl = serverCall.ServerWritableStreamImpl = serverCall.ServerReadableStreamImpl = serverCall.ServerUnaryCallImpl = serverCall.serverErrorToStatus = void 0;
const events_1 = require$$0$4;
const stream_1 = require$$1$2;
const constants_1$2 = constants;
const metadata_1$1 = metadata;
function serverErrorToStatus(error2, overrideTrailers) {
  var _a;
  const status = {
    code: constants_1$2.Status.UNKNOWN,
    details: "message" in error2 ? error2.message : "Unknown Error",
    metadata: (_a = overrideTrailers !== null && overrideTrailers !== void 0 ? overrideTrailers : error2.metadata) !== null && _a !== void 0 ? _a : null
  };
  if ("code" in error2 && typeof error2.code === "number" && Number.isInteger(error2.code)) {
    status.code = error2.code;
    if ("details" in error2 && typeof error2.details === "string") {
      status.details = error2.details;
    }
  }
  return status;
}
serverCall.serverErrorToStatus = serverErrorToStatus;
class ServerUnaryCallImpl extends events_1.EventEmitter {
  constructor(path2, call2, metadata2, request) {
    super();
    this.path = path2;
    this.call = call2;
    this.metadata = metadata2;
    this.request = request;
    this.cancelled = false;
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(responseMetadata) {
    this.call.sendMetadata(responseMetadata);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
}
serverCall.ServerUnaryCallImpl = ServerUnaryCallImpl;
class ServerReadableStreamImpl extends stream_1.Readable {
  constructor(path2, call2, metadata2) {
    super({ objectMode: true });
    this.path = path2;
    this.call = call2;
    this.metadata = metadata2;
    this.cancelled = false;
  }
  _read(size) {
    this.call.startRead();
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(responseMetadata) {
    this.call.sendMetadata(responseMetadata);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
}
serverCall.ServerReadableStreamImpl = ServerReadableStreamImpl;
class ServerWritableStreamImpl extends stream_1.Writable {
  constructor(path2, call2, metadata2, request) {
    super({ objectMode: true });
    this.path = path2;
    this.call = call2;
    this.metadata = metadata2;
    this.request = request;
    this.pendingStatus = {
      code: constants_1$2.Status.OK,
      details: "OK"
    };
    this.cancelled = false;
    this.trailingMetadata = new metadata_1$1.Metadata();
    this.on("error", (err) => {
      this.pendingStatus = serverErrorToStatus(err);
      this.end();
    });
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(responseMetadata) {
    this.call.sendMetadata(responseMetadata);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
  _write(chunk, encoding, callback) {
    this.call.sendMessage(chunk, callback);
  }
  _final(callback) {
    var _a;
    callback(null);
    this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (_a = this.pendingStatus.metadata) !== null && _a !== void 0 ? _a : this.trailingMetadata }));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  end(metadata2) {
    if (metadata2) {
      this.trailingMetadata = metadata2;
    }
    return super.end();
  }
}
serverCall.ServerWritableStreamImpl = ServerWritableStreamImpl;
class ServerDuplexStreamImpl extends stream_1.Duplex {
  constructor(path2, call2, metadata2) {
    super({ objectMode: true });
    this.path = path2;
    this.call = call2;
    this.metadata = metadata2;
    this.pendingStatus = {
      code: constants_1$2.Status.OK,
      details: "OK"
    };
    this.cancelled = false;
    this.trailingMetadata = new metadata_1$1.Metadata();
    this.on("error", (err) => {
      this.pendingStatus = serverErrorToStatus(err);
      this.end();
    });
  }
  getPeer() {
    return this.call.getPeer();
  }
  sendMetadata(responseMetadata) {
    this.call.sendMetadata(responseMetadata);
  }
  getDeadline() {
    return this.call.getDeadline();
  }
  getPath() {
    return this.path;
  }
  getHost() {
    return this.call.getHost();
  }
  _read(size) {
    this.call.startRead();
  }
  _write(chunk, encoding, callback) {
    this.call.sendMessage(chunk, callback);
  }
  _final(callback) {
    var _a;
    callback(null);
    this.call.sendStatus(Object.assign(Object.assign({}, this.pendingStatus), { metadata: (_a = this.pendingStatus.metadata) !== null && _a !== void 0 ? _a : this.trailingMetadata }));
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  end(metadata2) {
    if (metadata2) {
      this.trailingMetadata = metadata2;
    }
    return super.end();
  }
}
serverCall.ServerDuplexStreamImpl = ServerDuplexStreamImpl;
var serverCredentials = {};
Object.defineProperty(serverCredentials, "__esModule", { value: true });
serverCredentials.createServerCredentialsWithInterceptors = serverCredentials.createCertificateProviderServerCredentials = serverCredentials.ServerCredentials = void 0;
const tls_helpers_1 = tlsHelpers;
class ServerCredentials {
  constructor() {
    this.watchers = /* @__PURE__ */ new Set();
    this.latestContextOptions = null;
  }
  _addWatcher(watcher) {
    this.watchers.add(watcher);
  }
  _removeWatcher(watcher) {
    this.watchers.delete(watcher);
  }
  getWatcherCount() {
    return this.watchers.size;
  }
  updateSecureContextOptions(options) {
    this.latestContextOptions = options;
    for (const watcher of this.watchers) {
      watcher(this.latestContextOptions);
    }
  }
  _getSettings() {
    return this.latestContextOptions;
  }
  _getInterceptors() {
    return [];
  }
  static createInsecure() {
    return new InsecureServerCredentials();
  }
  static createSsl(rootCerts, keyCertPairs, checkClientCertificate = false) {
    var _a;
    if (rootCerts !== null && !Buffer.isBuffer(rootCerts)) {
      throw new TypeError("rootCerts must be null or a Buffer");
    }
    if (!Array.isArray(keyCertPairs)) {
      throw new TypeError("keyCertPairs must be an array");
    }
    if (typeof checkClientCertificate !== "boolean") {
      throw new TypeError("checkClientCertificate must be a boolean");
    }
    const cert = [];
    const key = [];
    for (let i = 0; i < keyCertPairs.length; i++) {
      const pair = keyCertPairs[i];
      if (pair === null || typeof pair !== "object") {
        throw new TypeError(`keyCertPair[${i}] must be an object`);
      }
      if (!Buffer.isBuffer(pair.private_key)) {
        throw new TypeError(`keyCertPair[${i}].private_key must be a Buffer`);
      }
      if (!Buffer.isBuffer(pair.cert_chain)) {
        throw new TypeError(`keyCertPair[${i}].cert_chain must be a Buffer`);
      }
      cert.push(pair.cert_chain);
      key.push(pair.private_key);
    }
    return new SecureServerCredentials({
      ca: (_a = rootCerts !== null && rootCerts !== void 0 ? rootCerts : (0, tls_helpers_1.getDefaultRootsData)()) !== null && _a !== void 0 ? _a : void 0,
      cert,
      key,
      requestCert: checkClientCertificate,
      ciphers: tls_helpers_1.CIPHER_SUITES
    });
  }
}
serverCredentials.ServerCredentials = ServerCredentials;
class InsecureServerCredentials extends ServerCredentials {
  _isSecure() {
    return false;
  }
  _getSettings() {
    return null;
  }
  _equals(other) {
    return other instanceof InsecureServerCredentials;
  }
}
class SecureServerCredentials extends ServerCredentials {
  constructor(options) {
    super();
    this.options = options;
  }
  _isSecure() {
    return true;
  }
  _getSettings() {
    return this.options;
  }
  /**
   * Checks equality by checking the options that are actually set by
   * createSsl.
   * @param other
   * @returns
   */
  _equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof SecureServerCredentials)) {
      return false;
    }
    if (Buffer.isBuffer(this.options.ca) && Buffer.isBuffer(other.options.ca)) {
      if (!this.options.ca.equals(other.options.ca)) {
        return false;
      }
    } else {
      if (this.options.ca !== other.options.ca) {
        return false;
      }
    }
    if (Array.isArray(this.options.cert) && Array.isArray(other.options.cert)) {
      if (this.options.cert.length !== other.options.cert.length) {
        return false;
      }
      for (let i = 0; i < this.options.cert.length; i++) {
        const thisCert = this.options.cert[i];
        const otherCert = other.options.cert[i];
        if (Buffer.isBuffer(thisCert) && Buffer.isBuffer(otherCert)) {
          if (!thisCert.equals(otherCert)) {
            return false;
          }
        } else {
          if (thisCert !== otherCert) {
            return false;
          }
        }
      }
    } else {
      if (this.options.cert !== other.options.cert) {
        return false;
      }
    }
    if (Array.isArray(this.options.key) && Array.isArray(other.options.key)) {
      if (this.options.key.length !== other.options.key.length) {
        return false;
      }
      for (let i = 0; i < this.options.key.length; i++) {
        const thisKey = this.options.key[i];
        const otherKey = other.options.key[i];
        if (Buffer.isBuffer(thisKey) && Buffer.isBuffer(otherKey)) {
          if (!thisKey.equals(otherKey)) {
            return false;
          }
        } else {
          if (thisKey !== otherKey) {
            return false;
          }
        }
      }
    } else {
      if (this.options.key !== other.options.key) {
        return false;
      }
    }
    if (this.options.requestCert !== other.options.requestCert) {
      return false;
    }
    return true;
  }
}
class CertificateProviderServerCredentials extends ServerCredentials {
  constructor(identityCertificateProvider, caCertificateProvider, requireClientCertificate) {
    super();
    this.identityCertificateProvider = identityCertificateProvider;
    this.caCertificateProvider = caCertificateProvider;
    this.requireClientCertificate = requireClientCertificate;
    this.latestCaUpdate = null;
    this.latestIdentityUpdate = null;
    this.caCertificateUpdateListener = this.handleCaCertificateUpdate.bind(this);
    this.identityCertificateUpdateListener = this.handleIdentityCertitificateUpdate.bind(this);
  }
  _addWatcher(watcher) {
    var _a;
    if (this.getWatcherCount() === 0) {
      (_a = this.caCertificateProvider) === null || _a === void 0 ? void 0 : _a.addCaCertificateListener(this.caCertificateUpdateListener);
      this.identityCertificateProvider.addIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
    super._addWatcher(watcher);
  }
  _removeWatcher(watcher) {
    var _a;
    super._removeWatcher(watcher);
    if (this.getWatcherCount() === 0) {
      (_a = this.caCertificateProvider) === null || _a === void 0 ? void 0 : _a.removeCaCertificateListener(this.caCertificateUpdateListener);
      this.identityCertificateProvider.removeIdentityCertificateListener(this.identityCertificateUpdateListener);
    }
  }
  _isSecure() {
    return true;
  }
  _equals(other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof CertificateProviderServerCredentials)) {
      return false;
    }
    return this.caCertificateProvider === other.caCertificateProvider && this.identityCertificateProvider === other.identityCertificateProvider && this.requireClientCertificate === other.requireClientCertificate;
  }
  calculateSecureContextOptions() {
    var _a;
    if (this.latestIdentityUpdate === null) {
      return null;
    }
    if (this.caCertificateProvider !== null && this.latestCaUpdate === null) {
      return null;
    }
    return {
      ca: (_a = this.latestCaUpdate) === null || _a === void 0 ? void 0 : _a.caCertificate,
      cert: this.latestIdentityUpdate.certificate,
      key: this.latestIdentityUpdate.privateKey,
      requestCert: this.latestIdentityUpdate !== null,
      rejectUnauthorized: this.requireClientCertificate
    };
  }
  finalizeUpdate() {
    this.updateSecureContextOptions(this.calculateSecureContextOptions());
  }
  handleCaCertificateUpdate(update) {
    this.latestCaUpdate = update;
    this.finalizeUpdate();
  }
  handleIdentityCertitificateUpdate(update) {
    this.latestIdentityUpdate = update;
    this.finalizeUpdate();
  }
}
function createCertificateProviderServerCredentials(caCertificateProvider, identityCertificateProvider, requireClientCertificate) {
  return new CertificateProviderServerCredentials(caCertificateProvider, identityCertificateProvider, requireClientCertificate);
}
serverCredentials.createCertificateProviderServerCredentials = createCertificateProviderServerCredentials;
class InterceptorServerCredentials extends ServerCredentials {
  constructor(childCredentials, interceptors) {
    super();
    this.childCredentials = childCredentials;
    this.interceptors = interceptors;
  }
  _isSecure() {
    return this.childCredentials._isSecure();
  }
  _equals(other) {
    if (!(other instanceof InterceptorServerCredentials)) {
      return false;
    }
    if (!this.childCredentials._equals(other.childCredentials)) {
      return false;
    }
    if (this.interceptors.length !== other.interceptors.length) {
      return false;
    }
    for (let i = 0; i < this.interceptors.length; i++) {
      if (this.interceptors[i] !== other.interceptors[i]) {
        return false;
      }
    }
    return true;
  }
  _getInterceptors() {
    return this.interceptors;
  }
  _addWatcher(watcher) {
    this.childCredentials._addWatcher(watcher);
  }
  _removeWatcher(watcher) {
    this.childCredentials._removeWatcher(watcher);
  }
}
function createServerCredentialsWithInterceptors(credentials, interceptors) {
  return new InterceptorServerCredentials(credentials, interceptors);
}
serverCredentials.createServerCredentialsWithInterceptors = createServerCredentialsWithInterceptors;
var serverInterceptors = {};
Object.defineProperty(serverInterceptors, "__esModule", { value: true });
serverInterceptors.getServerInterceptingCall = serverInterceptors.BaseServerInterceptingCall = serverInterceptors.ServerInterceptingCall = serverInterceptors.ResponderBuilder = serverInterceptors.isInterceptingServerListener = serverInterceptors.ServerListenerBuilder = void 0;
const metadata_1 = metadata;
const constants_1$1 = constants;
const http2$1 = require$$0$5;
const error_1 = error;
const zlib = require$$0$6;
const stream_decoder_1 = streamDecoder;
const logging$1 = logging$9;
const TRACER_NAME$1 = "server_call";
function trace(text) {
  logging$1.trace(constants_1$1.LogVerbosity.DEBUG, TRACER_NAME$1, text);
}
class ServerListenerBuilder {
  constructor() {
    this.metadata = void 0;
    this.message = void 0;
    this.halfClose = void 0;
    this.cancel = void 0;
  }
  withOnReceiveMetadata(onReceiveMetadata) {
    this.metadata = onReceiveMetadata;
    return this;
  }
  withOnReceiveMessage(onReceiveMessage) {
    this.message = onReceiveMessage;
    return this;
  }
  withOnReceiveHalfClose(onReceiveHalfClose) {
    this.halfClose = onReceiveHalfClose;
    return this;
  }
  withOnCancel(onCancel) {
    this.cancel = onCancel;
    return this;
  }
  build() {
    return {
      onReceiveMetadata: this.metadata,
      onReceiveMessage: this.message,
      onReceiveHalfClose: this.halfClose,
      onCancel: this.cancel
    };
  }
}
serverInterceptors.ServerListenerBuilder = ServerListenerBuilder;
function isInterceptingServerListener(listener) {
  return listener.onReceiveMetadata !== void 0 && listener.onReceiveMetadata.length === 1;
}
serverInterceptors.isInterceptingServerListener = isInterceptingServerListener;
class InterceptingServerListenerImpl {
  constructor(listener, nextListener) {
    this.listener = listener;
    this.nextListener = nextListener;
    this.cancelled = false;
    this.processingMetadata = false;
    this.hasPendingMessage = false;
    this.pendingMessage = null;
    this.processingMessage = false;
    this.hasPendingHalfClose = false;
  }
  processPendingMessage() {
    if (this.hasPendingMessage) {
      this.nextListener.onReceiveMessage(this.pendingMessage);
      this.pendingMessage = null;
      this.hasPendingMessage = false;
    }
  }
  processPendingHalfClose() {
    if (this.hasPendingHalfClose) {
      this.nextListener.onReceiveHalfClose();
      this.hasPendingHalfClose = false;
    }
  }
  onReceiveMetadata(metadata2) {
    if (this.cancelled) {
      return;
    }
    this.processingMetadata = true;
    this.listener.onReceiveMetadata(metadata2, (interceptedMetadata) => {
      this.processingMetadata = false;
      if (this.cancelled) {
        return;
      }
      this.nextListener.onReceiveMetadata(interceptedMetadata);
      this.processPendingMessage();
      this.processPendingHalfClose();
    });
  }
  onReceiveMessage(message2) {
    if (this.cancelled) {
      return;
    }
    this.processingMessage = true;
    this.listener.onReceiveMessage(message2, (msg) => {
      this.processingMessage = false;
      if (this.cancelled) {
        return;
      }
      if (this.processingMetadata) {
        this.pendingMessage = msg;
        this.hasPendingMessage = true;
      } else {
        this.nextListener.onReceiveMessage(msg);
        this.processPendingHalfClose();
      }
    });
  }
  onReceiveHalfClose() {
    if (this.cancelled) {
      return;
    }
    this.listener.onReceiveHalfClose(() => {
      if (this.cancelled) {
        return;
      }
      if (this.processingMetadata || this.processingMessage) {
        this.hasPendingHalfClose = true;
      } else {
        this.nextListener.onReceiveHalfClose();
      }
    });
  }
  onCancel() {
    this.cancelled = true;
    this.listener.onCancel();
    this.nextListener.onCancel();
  }
}
class ResponderBuilder {
  constructor() {
    this.start = void 0;
    this.metadata = void 0;
    this.message = void 0;
    this.status = void 0;
  }
  withStart(start) {
    this.start = start;
    return this;
  }
  withSendMetadata(sendMetadata) {
    this.metadata = sendMetadata;
    return this;
  }
  withSendMessage(sendMessage) {
    this.message = sendMessage;
    return this;
  }
  withSendStatus(sendStatus) {
    this.status = sendStatus;
    return this;
  }
  build() {
    return {
      start: this.start,
      sendMetadata: this.metadata,
      sendMessage: this.message,
      sendStatus: this.status
    };
  }
}
serverInterceptors.ResponderBuilder = ResponderBuilder;
const defaultServerListener = {
  onReceiveMetadata: (metadata2, next) => {
    next(metadata2);
  },
  onReceiveMessage: (message2, next) => {
    next(message2);
  },
  onReceiveHalfClose: (next) => {
    next();
  },
  onCancel: () => {
  }
};
const defaultResponder = {
  start: (next) => {
    next();
  },
  sendMetadata: (metadata2, next) => {
    next(metadata2);
  },
  sendMessage: (message2, next) => {
    next(message2);
  },
  sendStatus: (status, next) => {
    next(status);
  }
};
class ServerInterceptingCall {
  constructor(nextCall, responder) {
    var _a, _b, _c, _d;
    this.nextCall = nextCall;
    this.processingMetadata = false;
    this.processingMessage = false;
    this.pendingMessage = null;
    this.pendingMessageCallback = null;
    this.pendingStatus = null;
    this.responder = {
      start: (_a = responder === null || responder === void 0 ? void 0 : responder.start) !== null && _a !== void 0 ? _a : defaultResponder.start,
      sendMetadata: (_b = responder === null || responder === void 0 ? void 0 : responder.sendMetadata) !== null && _b !== void 0 ? _b : defaultResponder.sendMetadata,
      sendMessage: (_c = responder === null || responder === void 0 ? void 0 : responder.sendMessage) !== null && _c !== void 0 ? _c : defaultResponder.sendMessage,
      sendStatus: (_d = responder === null || responder === void 0 ? void 0 : responder.sendStatus) !== null && _d !== void 0 ? _d : defaultResponder.sendStatus
    };
  }
  processPendingMessage() {
    if (this.pendingMessageCallback) {
      this.nextCall.sendMessage(this.pendingMessage, this.pendingMessageCallback);
      this.pendingMessage = null;
      this.pendingMessageCallback = null;
    }
  }
  processPendingStatus() {
    if (this.pendingStatus) {
      this.nextCall.sendStatus(this.pendingStatus);
      this.pendingStatus = null;
    }
  }
  start(listener) {
    this.responder.start((interceptedListener) => {
      var _a, _b, _c, _d;
      const fullInterceptedListener = {
        onReceiveMetadata: (_a = interceptedListener === null || interceptedListener === void 0 ? void 0 : interceptedListener.onReceiveMetadata) !== null && _a !== void 0 ? _a : defaultServerListener.onReceiveMetadata,
        onReceiveMessage: (_b = interceptedListener === null || interceptedListener === void 0 ? void 0 : interceptedListener.onReceiveMessage) !== null && _b !== void 0 ? _b : defaultServerListener.onReceiveMessage,
        onReceiveHalfClose: (_c = interceptedListener === null || interceptedListener === void 0 ? void 0 : interceptedListener.onReceiveHalfClose) !== null && _c !== void 0 ? _c : defaultServerListener.onReceiveHalfClose,
        onCancel: (_d = interceptedListener === null || interceptedListener === void 0 ? void 0 : interceptedListener.onCancel) !== null && _d !== void 0 ? _d : defaultServerListener.onCancel
      };
      const finalInterceptingListener = new InterceptingServerListenerImpl(fullInterceptedListener, listener);
      this.nextCall.start(finalInterceptingListener);
    });
  }
  sendMetadata(metadata2) {
    this.processingMetadata = true;
    this.responder.sendMetadata(metadata2, (interceptedMetadata) => {
      this.processingMetadata = false;
      this.nextCall.sendMetadata(interceptedMetadata);
      this.processPendingMessage();
      this.processPendingStatus();
    });
  }
  sendMessage(message2, callback) {
    this.processingMessage = true;
    this.responder.sendMessage(message2, (interceptedMessage) => {
      this.processingMessage = false;
      if (this.processingMetadata) {
        this.pendingMessage = interceptedMessage;
        this.pendingMessageCallback = callback;
      } else {
        this.nextCall.sendMessage(interceptedMessage, callback);
      }
    });
  }
  sendStatus(status) {
    this.responder.sendStatus(status, (interceptedStatus) => {
      if (this.processingMetadata || this.processingMessage) {
        this.pendingStatus = interceptedStatus;
      } else {
        this.nextCall.sendStatus(interceptedStatus);
      }
    });
  }
  startRead() {
    this.nextCall.startRead();
  }
  getPeer() {
    return this.nextCall.getPeer();
  }
  getDeadline() {
    return this.nextCall.getDeadline();
  }
  getHost() {
    return this.nextCall.getHost();
  }
}
serverInterceptors.ServerInterceptingCall = ServerInterceptingCall;
const GRPC_ACCEPT_ENCODING_HEADER = "grpc-accept-encoding";
const GRPC_ENCODING_HEADER = "grpc-encoding";
const GRPC_MESSAGE_HEADER = "grpc-message";
const GRPC_STATUS_HEADER = "grpc-status";
const GRPC_TIMEOUT_HEADER = "grpc-timeout";
const DEADLINE_REGEX = /(\d{1,8})\s*([HMSmun])/;
const deadlineUnitsToMs = {
  H: 36e5,
  M: 6e4,
  S: 1e3,
  m: 1,
  u: 1e-3,
  n: 1e-6
};
const defaultCompressionHeaders = {
  // TODO(cjihrig): Remove these encoding headers from the default response
  // once compression is integrated.
  [GRPC_ACCEPT_ENCODING_HEADER]: "identity,deflate,gzip",
  [GRPC_ENCODING_HEADER]: "identity"
};
const defaultResponseHeaders = {
  [http2$1.constants.HTTP2_HEADER_STATUS]: http2$1.constants.HTTP_STATUS_OK,
  [http2$1.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto"
};
const defaultResponseOptions = {
  waitForTrailers: true
};
class BaseServerInterceptingCall {
  constructor(stream, headers, callEventTracker, handler, options) {
    var _a;
    this.stream = stream;
    this.callEventTracker = callEventTracker;
    this.handler = handler;
    this.listener = null;
    this.deadlineTimer = null;
    this.deadline = Infinity;
    this.maxSendMessageSize = constants_1$1.DEFAULT_MAX_SEND_MESSAGE_LENGTH;
    this.maxReceiveMessageSize = constants_1$1.DEFAULT_MAX_RECEIVE_MESSAGE_LENGTH;
    this.cancelled = false;
    this.metadataSent = false;
    this.wantTrailers = false;
    this.cancelNotified = false;
    this.incomingEncoding = "identity";
    this.readQueue = [];
    this.isReadPending = false;
    this.receivedHalfClose = false;
    this.streamEnded = false;
    this.stream.once("error", (err) => {
    });
    this.stream.once("close", () => {
      var _a2;
      trace("Request to method " + ((_a2 = this.handler) === null || _a2 === void 0 ? void 0 : _a2.path) + " stream closed with rstCode " + this.stream.rstCode);
      if (this.callEventTracker && !this.streamEnded) {
        this.streamEnded = true;
        this.callEventTracker.onStreamEnd(false);
        this.callEventTracker.onCallEnd({
          code: constants_1$1.Status.CANCELLED,
          details: "Stream closed before sending status",
          metadata: null
        });
      }
      this.notifyOnCancel();
    });
    this.stream.on("data", (data) => {
      this.handleDataFrame(data);
    });
    this.stream.pause();
    this.stream.on("end", () => {
      this.handleEndEvent();
    });
    if ("grpc.max_send_message_length" in options) {
      this.maxSendMessageSize = options["grpc.max_send_message_length"];
    }
    if ("grpc.max_receive_message_length" in options) {
      this.maxReceiveMessageSize = options["grpc.max_receive_message_length"];
    }
    this.host = (_a = headers[":authority"]) !== null && _a !== void 0 ? _a : headers.host;
    this.decoder = new stream_decoder_1.StreamDecoder(this.maxReceiveMessageSize);
    const metadata2 = metadata_1.Metadata.fromHttp2Headers(headers);
    if (logging$1.isTracerEnabled(TRACER_NAME$1)) {
      trace("Request to " + this.handler.path + " received headers " + JSON.stringify(metadata2.toJSON()));
    }
    const timeoutHeader = metadata2.get(GRPC_TIMEOUT_HEADER);
    if (timeoutHeader.length > 0) {
      this.handleTimeoutHeader(timeoutHeader[0]);
    }
    const encodingHeader = metadata2.get(GRPC_ENCODING_HEADER);
    if (encodingHeader.length > 0) {
      this.incomingEncoding = encodingHeader[0];
    }
    metadata2.remove(GRPC_TIMEOUT_HEADER);
    metadata2.remove(GRPC_ENCODING_HEADER);
    metadata2.remove(GRPC_ACCEPT_ENCODING_HEADER);
    metadata2.remove(http2$1.constants.HTTP2_HEADER_ACCEPT_ENCODING);
    metadata2.remove(http2$1.constants.HTTP2_HEADER_TE);
    metadata2.remove(http2$1.constants.HTTP2_HEADER_CONTENT_TYPE);
    this.metadata = metadata2;
  }
  handleTimeoutHeader(timeoutHeader) {
    const match = timeoutHeader.toString().match(DEADLINE_REGEX);
    if (match === null) {
      const status = {
        code: constants_1$1.Status.INTERNAL,
        details: `Invalid ${GRPC_TIMEOUT_HEADER} value "${timeoutHeader}"`,
        metadata: null
      };
      process.nextTick(() => {
        this.sendStatus(status);
      });
      return;
    }
    const timeout = +match[1] * deadlineUnitsToMs[match[2]] | 0;
    const now = /* @__PURE__ */ new Date();
    this.deadline = now.setMilliseconds(now.getMilliseconds() + timeout);
    this.deadlineTimer = setTimeout(() => {
      const status = {
        code: constants_1$1.Status.DEADLINE_EXCEEDED,
        details: "Deadline exceeded",
        metadata: null
      };
      this.sendStatus(status);
    }, timeout);
  }
  checkCancelled() {
    if (!this.cancelled && (this.stream.destroyed || this.stream.closed)) {
      this.notifyOnCancel();
      this.cancelled = true;
    }
    return this.cancelled;
  }
  notifyOnCancel() {
    if (this.cancelNotified) {
      return;
    }
    this.cancelNotified = true;
    this.cancelled = true;
    process.nextTick(() => {
      var _a;
      (_a = this.listener) === null || _a === void 0 ? void 0 : _a.onCancel();
    });
    if (this.deadlineTimer) {
      clearTimeout(this.deadlineTimer);
    }
    this.stream.resume();
  }
  /**
   * A server handler can start sending messages without explicitly sending
   * metadata. In that case, we need to send headers before sending any
   * messages. This function does that if necessary.
   */
  maybeSendMetadata() {
    if (!this.metadataSent) {
      this.sendMetadata(new metadata_1.Metadata());
    }
  }
  /**
   * Serialize a message to a length-delimited byte string.
   * @param value
   * @returns
   */
  serializeMessage(value) {
    const messageBuffer = this.handler.serialize(value);
    const byteLength = messageBuffer.byteLength;
    const output = Buffer.allocUnsafe(byteLength + 5);
    output.writeUInt8(0, 0);
    output.writeUInt32BE(byteLength, 1);
    messageBuffer.copy(output, 5);
    return output;
  }
  decompressMessage(message2, encoding) {
    const messageContents = message2.subarray(5);
    if (encoding === "identity") {
      return messageContents;
    } else if (encoding === "deflate" || encoding === "gzip") {
      let decompresser;
      if (encoding === "deflate") {
        decompresser = zlib.createInflate();
      } else {
        decompresser = zlib.createGunzip();
      }
      return new Promise((resolve, reject) => {
        let totalLength = 0;
        const messageParts = [];
        decompresser.on("data", (chunk) => {
          messageParts.push(chunk);
          totalLength += chunk.byteLength;
          if (this.maxReceiveMessageSize !== -1 && totalLength > this.maxReceiveMessageSize) {
            decompresser.destroy();
            reject({
              code: constants_1$1.Status.RESOURCE_EXHAUSTED,
              details: `Received message that decompresses to a size larger than ${this.maxReceiveMessageSize}`
            });
          }
        });
        decompresser.on("end", () => {
          resolve(Buffer.concat(messageParts));
        });
        decompresser.write(messageContents);
        decompresser.end();
      });
    } else {
      return Promise.reject({
        code: constants_1$1.Status.UNIMPLEMENTED,
        details: `Received message compressed with unsupported encoding "${encoding}"`
      });
    }
  }
  async decompressAndMaybePush(queueEntry) {
    if (queueEntry.type !== "COMPRESSED") {
      throw new Error(`Invalid queue entry type: ${queueEntry.type}`);
    }
    const compressed = queueEntry.compressedMessage.readUInt8(0) === 1;
    const compressedMessageEncoding = compressed ? this.incomingEncoding : "identity";
    let decompressedMessage;
    try {
      decompressedMessage = await this.decompressMessage(queueEntry.compressedMessage, compressedMessageEncoding);
    } catch (err) {
      this.sendStatus(err);
      return;
    }
    try {
      queueEntry.parsedMessage = this.handler.deserialize(decompressedMessage);
    } catch (err) {
      this.sendStatus({
        code: constants_1$1.Status.INTERNAL,
        details: `Error deserializing request: ${err.message}`
      });
      return;
    }
    queueEntry.type = "READABLE";
    this.maybePushNextMessage();
  }
  maybePushNextMessage() {
    if (this.listener && this.isReadPending && this.readQueue.length > 0 && this.readQueue[0].type !== "COMPRESSED") {
      this.isReadPending = false;
      const nextQueueEntry = this.readQueue.shift();
      if (nextQueueEntry.type === "READABLE") {
        this.listener.onReceiveMessage(nextQueueEntry.parsedMessage);
      } else {
        this.listener.onReceiveHalfClose();
      }
    }
  }
  handleDataFrame(data) {
    var _a;
    if (this.checkCancelled()) {
      return;
    }
    trace("Request to " + this.handler.path + " received data frame of size " + data.length);
    let rawMessages;
    try {
      rawMessages = this.decoder.write(data);
    } catch (e) {
      this.sendStatus({ code: constants_1$1.Status.RESOURCE_EXHAUSTED, details: e.message });
      return;
    }
    for (const messageBytes of rawMessages) {
      this.stream.pause();
      const queueEntry = {
        type: "COMPRESSED",
        compressedMessage: messageBytes,
        parsedMessage: null
      };
      this.readQueue.push(queueEntry);
      this.decompressAndMaybePush(queueEntry);
      (_a = this.callEventTracker) === null || _a === void 0 ? void 0 : _a.addMessageReceived();
    }
  }
  handleEndEvent() {
    this.readQueue.push({
      type: "HALF_CLOSE",
      compressedMessage: null,
      parsedMessage: null
    });
    this.receivedHalfClose = true;
    this.maybePushNextMessage();
  }
  start(listener) {
    trace("Request to " + this.handler.path + " start called");
    if (this.checkCancelled()) {
      return;
    }
    this.listener = listener;
    listener.onReceiveMetadata(this.metadata);
  }
  sendMetadata(metadata2) {
    if (this.checkCancelled()) {
      return;
    }
    if (this.metadataSent) {
      return;
    }
    this.metadataSent = true;
    const custom = metadata2 ? metadata2.toHttp2Headers() : null;
    const headers = Object.assign(Object.assign(Object.assign({}, defaultResponseHeaders), defaultCompressionHeaders), custom);
    this.stream.respond(headers, defaultResponseOptions);
  }
  sendMessage(message2, callback) {
    if (this.checkCancelled()) {
      return;
    }
    let response;
    try {
      response = this.serializeMessage(message2);
    } catch (e) {
      this.sendStatus({
        code: constants_1$1.Status.INTERNAL,
        details: `Error serializing response: ${(0, error_1.getErrorMessage)(e)}`,
        metadata: null
      });
      return;
    }
    if (this.maxSendMessageSize !== -1 && response.length - 5 > this.maxSendMessageSize) {
      this.sendStatus({
        code: constants_1$1.Status.RESOURCE_EXHAUSTED,
        details: `Sent message larger than max (${response.length} vs. ${this.maxSendMessageSize})`,
        metadata: null
      });
      return;
    }
    this.maybeSendMetadata();
    trace("Request to " + this.handler.path + " sent data frame of size " + response.length);
    this.stream.write(response, (error2) => {
      var _a;
      if (error2) {
        this.sendStatus({
          code: constants_1$1.Status.INTERNAL,
          details: `Error writing message: ${(0, error_1.getErrorMessage)(error2)}`,
          metadata: null
        });
        return;
      }
      (_a = this.callEventTracker) === null || _a === void 0 ? void 0 : _a.addMessageSent();
      callback();
    });
  }
  sendStatus(status) {
    var _a, _b;
    if (this.checkCancelled()) {
      return;
    }
    trace("Request to method " + ((_a = this.handler) === null || _a === void 0 ? void 0 : _a.path) + " ended with status code: " + constants_1$1.Status[status.code] + " details: " + status.details);
    if (this.metadataSent) {
      if (!this.wantTrailers) {
        this.wantTrailers = true;
        this.stream.once("wantTrailers", () => {
          var _a2;
          if (this.callEventTracker && !this.streamEnded) {
            this.streamEnded = true;
            this.callEventTracker.onStreamEnd(true);
            this.callEventTracker.onCallEnd(status);
          }
          const trailersToSend = Object.assign({ [GRPC_STATUS_HEADER]: status.code, [GRPC_MESSAGE_HEADER]: encodeURI(status.details) }, (_a2 = status.metadata) === null || _a2 === void 0 ? void 0 : _a2.toHttp2Headers());
          this.stream.sendTrailers(trailersToSend);
          this.notifyOnCancel();
        });
        this.stream.end();
      } else {
        this.notifyOnCancel();
      }
    } else {
      if (this.callEventTracker && !this.streamEnded) {
        this.streamEnded = true;
        this.callEventTracker.onStreamEnd(true);
        this.callEventTracker.onCallEnd(status);
      }
      const trailersToSend = Object.assign(Object.assign({ [GRPC_STATUS_HEADER]: status.code, [GRPC_MESSAGE_HEADER]: encodeURI(status.details) }, defaultResponseHeaders), (_b = status.metadata) === null || _b === void 0 ? void 0 : _b.toHttp2Headers());
      this.stream.respond(trailersToSend, { endStream: true });
      this.notifyOnCancel();
    }
  }
  startRead() {
    trace("Request to " + this.handler.path + " startRead called");
    if (this.checkCancelled()) {
      return;
    }
    this.isReadPending = true;
    if (this.readQueue.length === 0) {
      if (!this.receivedHalfClose) {
        this.stream.resume();
      }
    } else {
      this.maybePushNextMessage();
    }
  }
  getPeer() {
    var _a;
    const socket = (_a = this.stream.session) === null || _a === void 0 ? void 0 : _a.socket;
    if (socket === null || socket === void 0 ? void 0 : socket.remoteAddress) {
      if (socket.remotePort) {
        return `${socket.remoteAddress}:${socket.remotePort}`;
      } else {
        return socket.remoteAddress;
      }
    } else {
      return "unknown";
    }
  }
  getDeadline() {
    return this.deadline;
  }
  getHost() {
    return this.host;
  }
}
serverInterceptors.BaseServerInterceptingCall = BaseServerInterceptingCall;
function getServerInterceptingCall(interceptors, stream, headers, callEventTracker, handler, options) {
  const methodDefinition = {
    path: handler.path,
    requestStream: handler.type === "clientStream" || handler.type === "bidi",
    responseStream: handler.type === "serverStream" || handler.type === "bidi",
    requestDeserialize: handler.deserialize,
    responseSerialize: handler.serialize
  };
  const baseCall = new BaseServerInterceptingCall(stream, headers, callEventTracker, handler, options);
  return interceptors.reduce((call2, interceptor) => {
    return interceptor(methodDefinition, call2);
  }, baseCall);
}
serverInterceptors.getServerInterceptingCall = getServerInterceptingCall;
var __runInitializers = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};
var __esDecorate = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor2 = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor2.get, set: descriptor2.set } : descriptor2[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor2.get = _;
      if (_ = accept(result.set)) descriptor2.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor2[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor2);
  done = true;
};
Object.defineProperty(server, "__esModule", { value: true });
server.Server = void 0;
const http2 = require$$0$5;
const util = require$$1$5;
const constants_1 = constants;
const server_call_1 = serverCall;
const server_credentials_1 = serverCredentials;
const resolver_1 = resolver;
const logging = logging$9;
const subchannel_address_1 = subchannelAddress;
const uri_parser_1 = uriParser;
const channelz_1 = requireChannelz();
const server_interceptors_1 = serverInterceptors;
const UNLIMITED_CONNECTION_AGE_MS = ~(1 << 31);
const KEEPALIVE_MAX_TIME_MS = ~(1 << 31);
const KEEPALIVE_TIMEOUT_MS = 2e4;
const MAX_CONNECTION_IDLE_MS = ~(1 << 31);
const { HTTP2_HEADER_PATH } = http2.constants;
const TRACER_NAME = "server";
const kMaxAge = Buffer.from("max_age");
function noop() {
}
function deprecate(message2) {
  return function(target, context) {
    return util.deprecate(target, message2);
  };
}
function getUnimplementedStatusResponse(methodName) {
  return {
    code: constants_1.Status.UNIMPLEMENTED,
    details: `The server does not implement the method ${methodName}`
  };
}
function getDefaultHandler(handlerType, methodName) {
  const unimplementedStatusResponse = getUnimplementedStatusResponse(methodName);
  switch (handlerType) {
    case "unary":
      return (call2, callback) => {
        callback(unimplementedStatusResponse, null);
      };
    case "clientStream":
      return (call2, callback) => {
        callback(unimplementedStatusResponse, null);
      };
    case "serverStream":
      return (call2) => {
        call2.emit("error", unimplementedStatusResponse);
      };
    case "bidi":
      return (call2) => {
        call2.emit("error", unimplementedStatusResponse);
      };
    default:
      throw new Error(`Invalid handlerType ${handlerType}`);
  }
}
let Server = (() => {
  var _a;
  let _instanceExtraInitializers = [];
  let _start_decorators;
  return _a = class Server {
    constructor(options) {
      var _b, _c, _d, _e, _f, _g;
      this.boundPorts = (__runInitializers(this, _instanceExtraInitializers), /* @__PURE__ */ new Map());
      this.http2Servers = /* @__PURE__ */ new Map();
      this.sessionIdleTimeouts = /* @__PURE__ */ new Map();
      this.handlers = /* @__PURE__ */ new Map();
      this.sessions = /* @__PURE__ */ new Map();
      this.started = false;
      this.shutdown = false;
      this.serverAddressString = "null";
      this.channelzEnabled = true;
      this.options = options !== null && options !== void 0 ? options : {};
      if (this.options["grpc.enable_channelz"] === 0) {
        this.channelzEnabled = false;
        this.channelzTrace = new channelz_1.ChannelzTraceStub();
        this.callTracker = new channelz_1.ChannelzCallTrackerStub();
        this.listenerChildrenTracker = new channelz_1.ChannelzChildrenTrackerStub();
        this.sessionChildrenTracker = new channelz_1.ChannelzChildrenTrackerStub();
      } else {
        this.channelzTrace = new channelz_1.ChannelzTrace();
        this.callTracker = new channelz_1.ChannelzCallTracker();
        this.listenerChildrenTracker = new channelz_1.ChannelzChildrenTracker();
        this.sessionChildrenTracker = new channelz_1.ChannelzChildrenTracker();
      }
      this.channelzRef = (0, channelz_1.registerChannelzServer)("server", () => this.getChannelzInfo(), this.channelzEnabled);
      this.channelzTrace.addTrace("CT_INFO", "Server created");
      this.maxConnectionAgeMs = (_b = this.options["grpc.max_connection_age_ms"]) !== null && _b !== void 0 ? _b : UNLIMITED_CONNECTION_AGE_MS;
      this.maxConnectionAgeGraceMs = (_c = this.options["grpc.max_connection_age_grace_ms"]) !== null && _c !== void 0 ? _c : UNLIMITED_CONNECTION_AGE_MS;
      this.keepaliveTimeMs = (_d = this.options["grpc.keepalive_time_ms"]) !== null && _d !== void 0 ? _d : KEEPALIVE_MAX_TIME_MS;
      this.keepaliveTimeoutMs = (_e = this.options["grpc.keepalive_timeout_ms"]) !== null && _e !== void 0 ? _e : KEEPALIVE_TIMEOUT_MS;
      this.sessionIdleTimeout = (_f = this.options["grpc.max_connection_idle_ms"]) !== null && _f !== void 0 ? _f : MAX_CONNECTION_IDLE_MS;
      this.commonServerOptions = {
        maxSendHeaderBlockLength: Number.MAX_SAFE_INTEGER
      };
      if ("grpc-node.max_session_memory" in this.options) {
        this.commonServerOptions.maxSessionMemory = this.options["grpc-node.max_session_memory"];
      } else {
        this.commonServerOptions.maxSessionMemory = Number.MAX_SAFE_INTEGER;
      }
      if ("grpc.max_concurrent_streams" in this.options) {
        this.commonServerOptions.settings = {
          maxConcurrentStreams: this.options["grpc.max_concurrent_streams"]
        };
      }
      this.interceptors = (_g = this.options.interceptors) !== null && _g !== void 0 ? _g : [];
      this.trace("Server constructed");
    }
    getChannelzInfo() {
      return {
        trace: this.channelzTrace,
        callTracker: this.callTracker,
        listenerChildren: this.listenerChildrenTracker.getChildLists(),
        sessionChildren: this.sessionChildrenTracker.getChildLists()
      };
    }
    getChannelzSessionInfo(session) {
      var _b, _c, _d;
      const sessionInfo = this.sessions.get(session);
      const sessionSocket = session.socket;
      const remoteAddress = sessionSocket.remoteAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.remoteAddress, sessionSocket.remotePort) : null;
      const localAddress = sessionSocket.localAddress ? (0, subchannel_address_1.stringToSubchannelAddress)(sessionSocket.localAddress, sessionSocket.localPort) : null;
      let tlsInfo;
      if (session.encrypted) {
        const tlsSocket = sessionSocket;
        const cipherInfo = tlsSocket.getCipher();
        const certificate = tlsSocket.getCertificate();
        const peerCertificate = tlsSocket.getPeerCertificate();
        tlsInfo = {
          cipherSuiteStandardName: (_b = cipherInfo.standardName) !== null && _b !== void 0 ? _b : null,
          cipherSuiteOtherName: cipherInfo.standardName ? null : cipherInfo.name,
          localCertificate: certificate && "raw" in certificate ? certificate.raw : null,
          remoteCertificate: peerCertificate && "raw" in peerCertificate ? peerCertificate.raw : null
        };
      } else {
        tlsInfo = null;
      }
      const socketInfo = {
        remoteAddress,
        localAddress,
        security: tlsInfo,
        remoteName: null,
        streamsStarted: sessionInfo.streamTracker.callsStarted,
        streamsSucceeded: sessionInfo.streamTracker.callsSucceeded,
        streamsFailed: sessionInfo.streamTracker.callsFailed,
        messagesSent: sessionInfo.messagesSent,
        messagesReceived: sessionInfo.messagesReceived,
        keepAlivesSent: sessionInfo.keepAlivesSent,
        lastLocalStreamCreatedTimestamp: null,
        lastRemoteStreamCreatedTimestamp: sessionInfo.streamTracker.lastCallStartedTimestamp,
        lastMessageSentTimestamp: sessionInfo.lastMessageSentTimestamp,
        lastMessageReceivedTimestamp: sessionInfo.lastMessageReceivedTimestamp,
        localFlowControlWindow: (_c = session.state.localWindowSize) !== null && _c !== void 0 ? _c : null,
        remoteFlowControlWindow: (_d = session.state.remoteWindowSize) !== null && _d !== void 0 ? _d : null
      };
      return socketInfo;
    }
    trace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, TRACER_NAME, "(" + this.channelzRef.id + ") " + text);
    }
    keepaliveTrace(text) {
      logging.trace(constants_1.LogVerbosity.DEBUG, "keepalive", "(" + this.channelzRef.id + ") " + text);
    }
    addProtoService() {
      throw new Error("Not implemented. Use addService() instead");
    }
    addService(service2, implementation) {
      if (service2 === null || typeof service2 !== "object" || implementation === null || typeof implementation !== "object") {
        throw new Error("addService() requires two objects as arguments");
      }
      const serviceKeys = Object.keys(service2);
      if (serviceKeys.length === 0) {
        throw new Error("Cannot add an empty service to a server");
      }
      serviceKeys.forEach((name2) => {
        const attrs = service2[name2];
        let methodType;
        if (attrs.requestStream) {
          if (attrs.responseStream) {
            methodType = "bidi";
          } else {
            methodType = "clientStream";
          }
        } else {
          if (attrs.responseStream) {
            methodType = "serverStream";
          } else {
            methodType = "unary";
          }
        }
        let implFn = implementation[name2];
        let impl;
        if (implFn === void 0 && typeof attrs.originalName === "string") {
          implFn = implementation[attrs.originalName];
        }
        if (implFn !== void 0) {
          impl = implFn.bind(implementation);
        } else {
          impl = getDefaultHandler(methodType, name2);
        }
        const success = this.register(attrs.path, impl, attrs.responseSerialize, attrs.requestDeserialize, methodType);
        if (success === false) {
          throw new Error(`Method handler for ${attrs.path} already provided.`);
        }
      });
    }
    removeService(service2) {
      if (service2 === null || typeof service2 !== "object") {
        throw new Error("removeService() requires object as argument");
      }
      const serviceKeys = Object.keys(service2);
      serviceKeys.forEach((name2) => {
        const attrs = service2[name2];
        this.unregister(attrs.path);
      });
    }
    bind(port, creds) {
      throw new Error("Not implemented. Use bindAsync() instead");
    }
    registerListenerToChannelz(boundAddress) {
      return (0, channelz_1.registerChannelzSocket)((0, subchannel_address_1.subchannelAddressToString)(boundAddress), () => {
        return {
          localAddress: boundAddress,
          remoteAddress: null,
          security: null,
          remoteName: null,
          streamsStarted: 0,
          streamsSucceeded: 0,
          streamsFailed: 0,
          messagesSent: 0,
          messagesReceived: 0,
          keepAlivesSent: 0,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: null,
          lastMessageReceivedTimestamp: null,
          localFlowControlWindow: null,
          remoteFlowControlWindow: null
        };
      }, this.channelzEnabled);
    }
    createHttp2Server(credentials) {
      let http2Server;
      if (credentials._isSecure()) {
        const credentialsSettings = credentials._getSettings();
        const secureServerOptions = Object.assign(Object.assign(Object.assign({}, this.commonServerOptions), credentialsSettings), { enableTrace: this.options["grpc-node.tls_enable_trace"] === 1 });
        let areCredentialsValid = credentialsSettings !== null;
        http2Server = http2.createSecureServer(secureServerOptions);
        http2Server.on("connection", (socket) => {
          if (!areCredentialsValid) {
            socket.destroy();
          }
        });
        http2Server.on("secureConnection", (socket) => {
          socket.on("error", (e) => {
            this.trace("An incoming TLS connection closed with error: " + e.message);
          });
        });
        const credsWatcher = (options) => {
          if (options) {
            http2Server.setSecureContext(options);
          }
          areCredentialsValid = options !== null;
        };
        credentials._addWatcher(credsWatcher);
        http2Server.on("close", () => {
          credentials._removeWatcher(credsWatcher);
        });
      } else {
        http2Server = http2.createServer(this.commonServerOptions);
      }
      http2Server.setTimeout(0, noop);
      this._setupHandlers(http2Server, credentials._getInterceptors());
      return http2Server;
    }
    bindOneAddress(address, boundPortObject) {
      this.trace("Attempting to bind " + (0, subchannel_address_1.subchannelAddressToString)(address));
      const http2Server = this.createHttp2Server(boundPortObject.credentials);
      return new Promise((resolve, reject) => {
        const onError = (err) => {
          this.trace("Failed to bind " + (0, subchannel_address_1.subchannelAddressToString)(address) + " with error " + err.message);
          resolve({
            port: "port" in address ? address.port : 1,
            error: err.message
          });
        };
        http2Server.once("error", onError);
        http2Server.listen(address, () => {
          const boundAddress = http2Server.address();
          let boundSubchannelAddress;
          if (typeof boundAddress === "string") {
            boundSubchannelAddress = {
              path: boundAddress
            };
          } else {
            boundSubchannelAddress = {
              host: boundAddress.address,
              port: boundAddress.port
            };
          }
          const channelzRef = this.registerListenerToChannelz(boundSubchannelAddress);
          this.listenerChildrenTracker.refChild(channelzRef);
          this.http2Servers.set(http2Server, {
            channelzRef,
            sessions: /* @__PURE__ */ new Set()
          });
          boundPortObject.listeningServers.add(http2Server);
          this.trace("Successfully bound " + (0, subchannel_address_1.subchannelAddressToString)(boundSubchannelAddress));
          resolve({
            port: "port" in boundSubchannelAddress ? boundSubchannelAddress.port : 1
          });
          http2Server.removeListener("error", onError);
        });
      });
    }
    async bindManyPorts(addressList, boundPortObject) {
      if (addressList.length === 0) {
        return {
          count: 0,
          port: 0,
          errors: []
        };
      }
      if ((0, subchannel_address_1.isTcpSubchannelAddress)(addressList[0]) && addressList[0].port === 0) {
        const firstAddressResult = await this.bindOneAddress(addressList[0], boundPortObject);
        if (firstAddressResult.error) {
          const restAddressResult = await this.bindManyPorts(addressList.slice(1), boundPortObject);
          return Object.assign(Object.assign({}, restAddressResult), { errors: [firstAddressResult.error, ...restAddressResult.errors] });
        } else {
          const restAddresses = addressList.slice(1).map((address) => (0, subchannel_address_1.isTcpSubchannelAddress)(address) ? { host: address.host, port: firstAddressResult.port } : address);
          const restAddressResult = await Promise.all(restAddresses.map((address) => this.bindOneAddress(address, boundPortObject)));
          const allResults = [firstAddressResult, ...restAddressResult];
          return {
            count: allResults.filter((result) => result.error === void 0).length,
            port: firstAddressResult.port,
            errors: allResults.filter((result) => result.error).map((result) => result.error)
          };
        }
      } else {
        const allResults = await Promise.all(addressList.map((address) => this.bindOneAddress(address, boundPortObject)));
        return {
          count: allResults.filter((result) => result.error === void 0).length,
          port: allResults[0].port,
          errors: allResults.filter((result) => result.error).map((result) => result.error)
        };
      }
    }
    async bindAddressList(addressList, boundPortObject) {
      const bindResult = await this.bindManyPorts(addressList, boundPortObject);
      if (bindResult.count > 0) {
        if (bindResult.count < addressList.length) {
          logging.log(constants_1.LogVerbosity.INFO, `WARNING Only ${bindResult.count} addresses added out of total ${addressList.length} resolved`);
        }
        return bindResult.port;
      } else {
        const errorString = `No address added out of total ${addressList.length} resolved`;
        logging.log(constants_1.LogVerbosity.ERROR, errorString);
        throw new Error(`${errorString} errors: [${bindResult.errors.join(",")}]`);
      }
    }
    resolvePort(port) {
      return new Promise((resolve, reject) => {
        const resolverListener = {
          onSuccessfulResolution: (endpointList, serviceConfig2, serviceConfigError) => {
            resolverListener.onSuccessfulResolution = () => {
            };
            const addressList = [].concat(...endpointList.map((endpoint) => endpoint.addresses));
            if (addressList.length === 0) {
              reject(new Error(`No addresses resolved for port ${port}`));
              return;
            }
            resolve(addressList);
          },
          onError: (error2) => {
            reject(new Error(error2.details));
          }
        };
        const resolver2 = (0, resolver_1.createResolver)(port, resolverListener, this.options);
        resolver2.updateResolution();
      });
    }
    async bindPort(port, boundPortObject) {
      const addressList = await this.resolvePort(port);
      if (boundPortObject.cancelled) {
        this.completeUnbind(boundPortObject);
        throw new Error("bindAsync operation cancelled by unbind call");
      }
      const portNumber = await this.bindAddressList(addressList, boundPortObject);
      if (boundPortObject.cancelled) {
        this.completeUnbind(boundPortObject);
        throw new Error("bindAsync operation cancelled by unbind call");
      }
      return portNumber;
    }
    normalizePort(port) {
      const initialPortUri = (0, uri_parser_1.parseUri)(port);
      if (initialPortUri === null) {
        throw new Error(`Could not parse port "${port}"`);
      }
      const portUri = (0, resolver_1.mapUriDefaultScheme)(initialPortUri);
      if (portUri === null) {
        throw new Error(`Could not get a default scheme for port "${port}"`);
      }
      return portUri;
    }
    bindAsync(port, creds, callback) {
      if (this.shutdown) {
        throw new Error("bindAsync called after shutdown");
      }
      if (typeof port !== "string") {
        throw new TypeError("port must be a string");
      }
      if (creds === null || !(creds instanceof server_credentials_1.ServerCredentials)) {
        throw new TypeError("creds must be a ServerCredentials object");
      }
      if (typeof callback !== "function") {
        throw new TypeError("callback must be a function");
      }
      this.trace("bindAsync port=" + port);
      const portUri = this.normalizePort(port);
      const deferredCallback = (error2, port2) => {
        process.nextTick(() => callback(error2, port2));
      };
      let boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
      if (boundPortObject) {
        if (!creds._equals(boundPortObject.credentials)) {
          deferredCallback(new Error(`${port} already bound with incompatible credentials`), 0);
          return;
        }
        boundPortObject.cancelled = false;
        if (boundPortObject.completionPromise) {
          boundPortObject.completionPromise.then((portNum) => callback(null, portNum), (error2) => callback(error2, 0));
        } else {
          deferredCallback(null, boundPortObject.portNumber);
        }
        return;
      }
      boundPortObject = {
        mapKey: (0, uri_parser_1.uriToString)(portUri),
        originalUri: portUri,
        completionPromise: null,
        cancelled: false,
        portNumber: 0,
        credentials: creds,
        listeningServers: /* @__PURE__ */ new Set()
      };
      const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
      const completionPromise = this.bindPort(portUri, boundPortObject);
      boundPortObject.completionPromise = completionPromise;
      if ((splitPort === null || splitPort === void 0 ? void 0 : splitPort.port) === 0) {
        completionPromise.then((portNum) => {
          const finalUri = {
            scheme: portUri.scheme,
            authority: portUri.authority,
            path: (0, uri_parser_1.combineHostPort)({ host: splitPort.host, port: portNum })
          };
          boundPortObject.mapKey = (0, uri_parser_1.uriToString)(finalUri);
          boundPortObject.completionPromise = null;
          boundPortObject.portNumber = portNum;
          this.boundPorts.set(boundPortObject.mapKey, boundPortObject);
          callback(null, portNum);
        }, (error2) => {
          callback(error2, 0);
        });
      } else {
        this.boundPorts.set(boundPortObject.mapKey, boundPortObject);
        completionPromise.then((portNum) => {
          boundPortObject.completionPromise = null;
          boundPortObject.portNumber = portNum;
          callback(null, portNum);
        }, (error2) => {
          callback(error2, 0);
        });
      }
    }
    registerInjectorToChannelz() {
      return (0, channelz_1.registerChannelzSocket)("injector", () => {
        return {
          localAddress: null,
          remoteAddress: null,
          security: null,
          remoteName: null,
          streamsStarted: 0,
          streamsSucceeded: 0,
          streamsFailed: 0,
          messagesSent: 0,
          messagesReceived: 0,
          keepAlivesSent: 0,
          lastLocalStreamCreatedTimestamp: null,
          lastRemoteStreamCreatedTimestamp: null,
          lastMessageSentTimestamp: null,
          lastMessageReceivedTimestamp: null,
          localFlowControlWindow: null,
          remoteFlowControlWindow: null
        };
      }, this.channelzEnabled);
    }
    createConnectionInjector(credentials) {
      if (credentials === null || !(credentials instanceof server_credentials_1.ServerCredentials)) {
        throw new TypeError("creds must be a ServerCredentials object");
      }
      const server2 = this.createHttp2Server(credentials);
      const channelzRef = this.registerInjectorToChannelz();
      if (this.channelzEnabled) {
        this.listenerChildrenTracker.refChild(channelzRef);
      }
      const sessionsSet = /* @__PURE__ */ new Set();
      this.http2Servers.set(server2, {
        channelzRef,
        sessions: sessionsSet
      });
      return {
        injectConnection: (connection) => {
          server2.emit("connection", connection);
        },
        drain: (graceTimeMs) => {
          var _b, _c;
          for (const session of sessionsSet) {
            this.closeSession(session);
          }
          (_c = (_b = setTimeout(() => {
            for (const session of sessionsSet) {
              session.destroy(http2.constants.NGHTTP2_CANCEL);
            }
          }, graceTimeMs)).unref) === null || _c === void 0 ? void 0 : _c.call(_b);
        },
        destroy: () => {
          this.closeServer(server2);
          for (const session of sessionsSet) {
            this.closeSession(session);
          }
        }
      };
    }
    closeServer(server2, callback) {
      this.trace("Closing server with address " + JSON.stringify(server2.address()));
      const serverInfo = this.http2Servers.get(server2);
      server2.close(() => {
        if (serverInfo) {
          this.listenerChildrenTracker.unrefChild(serverInfo.channelzRef);
          (0, channelz_1.unregisterChannelzRef)(serverInfo.channelzRef);
        }
        this.http2Servers.delete(server2);
        callback === null || callback === void 0 ? void 0 : callback();
      });
    }
    closeSession(session, callback) {
      var _b;
      this.trace("Closing session initiated by " + ((_b = session.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress));
      const sessionInfo = this.sessions.get(session);
      const closeCallback = () => {
        if (sessionInfo) {
          this.sessionChildrenTracker.unrefChild(sessionInfo.ref);
          (0, channelz_1.unregisterChannelzRef)(sessionInfo.ref);
        }
        callback === null || callback === void 0 ? void 0 : callback();
      };
      if (session.closed) {
        queueMicrotask(closeCallback);
      } else {
        session.close(closeCallback);
      }
    }
    completeUnbind(boundPortObject) {
      for (const server2 of boundPortObject.listeningServers) {
        const serverInfo = this.http2Servers.get(server2);
        this.closeServer(server2, () => {
          boundPortObject.listeningServers.delete(server2);
        });
        if (serverInfo) {
          for (const session of serverInfo.sessions) {
            this.closeSession(session);
          }
        }
      }
      this.boundPorts.delete(boundPortObject.mapKey);
    }
    /**
     * Unbind a previously bound port, or cancel an in-progress bindAsync
     * operation. If port 0 was bound, only the actual bound port can be
     * unbound. For example, if bindAsync was called with "localhost:0" and the
     * bound port result was 54321, it can be unbound as "localhost:54321".
     * @param port
     */
    unbind(port) {
      this.trace("unbind port=" + port);
      const portUri = this.normalizePort(port);
      const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
      if ((splitPort === null || splitPort === void 0 ? void 0 : splitPort.port) === 0) {
        throw new Error("Cannot unbind port 0");
      }
      const boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
      if (boundPortObject) {
        this.trace("unbinding " + boundPortObject.mapKey + " originally bound as " + (0, uri_parser_1.uriToString)(boundPortObject.originalUri));
        if (boundPortObject.completionPromise) {
          boundPortObject.cancelled = true;
        } else {
          this.completeUnbind(boundPortObject);
        }
      }
    }
    /**
     * Gracefully close all connections associated with a previously bound port.
     * After the grace time, forcefully close all remaining open connections.
     *
     * If port 0 was bound, only the actual bound port can be
     * drained. For example, if bindAsync was called with "localhost:0" and the
     * bound port result was 54321, it can be drained as "localhost:54321".
     * @param port
     * @param graceTimeMs
     * @returns
     */
    drain(port, graceTimeMs) {
      var _b, _c;
      this.trace("drain port=" + port + " graceTimeMs=" + graceTimeMs);
      const portUri = this.normalizePort(port);
      const splitPort = (0, uri_parser_1.splitHostPort)(portUri.path);
      if ((splitPort === null || splitPort === void 0 ? void 0 : splitPort.port) === 0) {
        throw new Error("Cannot drain port 0");
      }
      const boundPortObject = this.boundPorts.get((0, uri_parser_1.uriToString)(portUri));
      if (!boundPortObject) {
        return;
      }
      const allSessions = /* @__PURE__ */ new Set();
      for (const http2Server of boundPortObject.listeningServers) {
        const serverEntry = this.http2Servers.get(http2Server);
        if (serverEntry) {
          for (const session of serverEntry.sessions) {
            allSessions.add(session);
            this.closeSession(session, () => {
              allSessions.delete(session);
            });
          }
        }
      }
      (_c = (_b = setTimeout(() => {
        for (const session of allSessions) {
          session.destroy(http2.constants.NGHTTP2_CANCEL);
        }
      }, graceTimeMs)).unref) === null || _c === void 0 ? void 0 : _c.call(_b);
    }
    forceShutdown() {
      for (const boundPortObject of this.boundPorts.values()) {
        boundPortObject.cancelled = true;
      }
      this.boundPorts.clear();
      for (const server2 of this.http2Servers.keys()) {
        this.closeServer(server2);
      }
      this.sessions.forEach((channelzInfo, session) => {
        this.closeSession(session);
        session.destroy(http2.constants.NGHTTP2_CANCEL);
      });
      this.sessions.clear();
      (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
      this.shutdown = true;
    }
    register(name2, handler, serialize, deserialize, type2) {
      if (this.handlers.has(name2)) {
        return false;
      }
      this.handlers.set(name2, {
        func: handler,
        serialize,
        deserialize,
        type: type2,
        path: name2
      });
      return true;
    }
    unregister(name2) {
      return this.handlers.delete(name2);
    }
    /**
     * @deprecated No longer needed as of version 1.10.x
     */
    start() {
      if (this.http2Servers.size === 0 || [...this.http2Servers.keys()].every((server2) => !server2.listening)) {
        throw new Error("server must be bound in order to start");
      }
      if (this.started === true) {
        throw new Error("server is already started");
      }
      this.started = true;
    }
    tryShutdown(callback) {
      var _b;
      const wrappedCallback = (error2) => {
        (0, channelz_1.unregisterChannelzRef)(this.channelzRef);
        callback(error2);
      };
      let pendingChecks = 0;
      function maybeCallback() {
        pendingChecks--;
        if (pendingChecks === 0) {
          wrappedCallback();
        }
      }
      this.shutdown = true;
      for (const [serverKey, server2] of this.http2Servers.entries()) {
        pendingChecks++;
        const serverString = server2.channelzRef.name;
        this.trace("Waiting for server " + serverString + " to close");
        this.closeServer(serverKey, () => {
          this.trace("Server " + serverString + " finished closing");
          maybeCallback();
        });
        for (const session of server2.sessions.keys()) {
          pendingChecks++;
          const sessionString = (_b = session.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress;
          this.trace("Waiting for session " + sessionString + " to close");
          this.closeSession(session, () => {
            this.trace("Session " + sessionString + " finished closing");
            maybeCallback();
          });
        }
      }
      if (pendingChecks === 0) {
        wrappedCallback();
      }
    }
    addHttp2Port() {
      throw new Error("Not yet implemented");
    }
    /**
     * Get the channelz reference object for this server. The returned value is
     * garbage if channelz is disabled for this server.
     * @returns
     */
    getChannelzRef() {
      return this.channelzRef;
    }
    _verifyContentType(stream, headers) {
      const contentType = headers[http2.constants.HTTP2_HEADER_CONTENT_TYPE];
      if (typeof contentType !== "string" || !contentType.startsWith("application/grpc")) {
        stream.respond({
          [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_UNSUPPORTED_MEDIA_TYPE
        }, { endStream: true });
        return false;
      }
      return true;
    }
    _retrieveHandler(path2) {
      this.trace("Received call to method " + path2 + " at address " + this.serverAddressString);
      const handler = this.handlers.get(path2);
      if (handler === void 0) {
        this.trace("No handler registered for method " + path2 + ". Sending UNIMPLEMENTED status.");
        return null;
      }
      return handler;
    }
    _respondWithError(err, stream, channelzSessionInfo = null) {
      var _b, _c;
      const trailersToSend = Object.assign({ "grpc-status": (_b = err.code) !== null && _b !== void 0 ? _b : constants_1.Status.INTERNAL, "grpc-message": err.details, [http2.constants.HTTP2_HEADER_STATUS]: http2.constants.HTTP_STATUS_OK, [http2.constants.HTTP2_HEADER_CONTENT_TYPE]: "application/grpc+proto" }, (_c = err.metadata) === null || _c === void 0 ? void 0 : _c.toHttp2Headers());
      stream.respond(trailersToSend, { endStream: true });
      this.callTracker.addCallFailed();
      channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
    }
    _channelzHandler(extraInterceptors, stream, headers) {
      this.onStreamOpened(stream);
      const channelzSessionInfo = this.sessions.get(stream.session);
      this.callTracker.addCallStarted();
      channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallStarted();
      if (!this._verifyContentType(stream, headers)) {
        this.callTracker.addCallFailed();
        channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
        return;
      }
      const path2 = headers[HTTP2_HEADER_PATH];
      const handler = this._retrieveHandler(path2);
      if (!handler) {
        this._respondWithError(getUnimplementedStatusResponse(path2), stream, channelzSessionInfo);
        return;
      }
      const callEventTracker = {
        addMessageSent: () => {
          if (channelzSessionInfo) {
            channelzSessionInfo.messagesSent += 1;
            channelzSessionInfo.lastMessageSentTimestamp = /* @__PURE__ */ new Date();
          }
        },
        addMessageReceived: () => {
          if (channelzSessionInfo) {
            channelzSessionInfo.messagesReceived += 1;
            channelzSessionInfo.lastMessageReceivedTimestamp = /* @__PURE__ */ new Date();
          }
        },
        onCallEnd: (status) => {
          if (status.code === constants_1.Status.OK) {
            this.callTracker.addCallSucceeded();
          } else {
            this.callTracker.addCallFailed();
          }
        },
        onStreamEnd: (success) => {
          if (channelzSessionInfo) {
            if (success) {
              channelzSessionInfo.streamTracker.addCallSucceeded();
            } else {
              channelzSessionInfo.streamTracker.addCallFailed();
            }
          }
        }
      };
      const call2 = (0, server_interceptors_1.getServerInterceptingCall)([...extraInterceptors, ...this.interceptors], stream, headers, callEventTracker, handler, this.options);
      if (!this._runHandlerForCall(call2, handler)) {
        this.callTracker.addCallFailed();
        channelzSessionInfo === null || channelzSessionInfo === void 0 ? void 0 : channelzSessionInfo.streamTracker.addCallFailed();
        call2.sendStatus({
          code: constants_1.Status.INTERNAL,
          details: `Unknown handler type: ${handler.type}`
        });
      }
    }
    _streamHandler(extraInterceptors, stream, headers) {
      this.onStreamOpened(stream);
      if (this._verifyContentType(stream, headers) !== true) {
        return;
      }
      const path2 = headers[HTTP2_HEADER_PATH];
      const handler = this._retrieveHandler(path2);
      if (!handler) {
        this._respondWithError(getUnimplementedStatusResponse(path2), stream, null);
        return;
      }
      const call2 = (0, server_interceptors_1.getServerInterceptingCall)([...extraInterceptors, ...this.interceptors], stream, headers, null, handler, this.options);
      if (!this._runHandlerForCall(call2, handler)) {
        call2.sendStatus({
          code: constants_1.Status.INTERNAL,
          details: `Unknown handler type: ${handler.type}`
        });
      }
    }
    _runHandlerForCall(call2, handler) {
      const { type: type2 } = handler;
      if (type2 === "unary") {
        handleUnary(call2, handler);
      } else if (type2 === "clientStream") {
        handleClientStreaming(call2, handler);
      } else if (type2 === "serverStream") {
        handleServerStreaming(call2, handler);
      } else if (type2 === "bidi") {
        handleBidiStreaming(call2, handler);
      } else {
        return false;
      }
      return true;
    }
    _setupHandlers(http2Server, extraInterceptors) {
      if (http2Server === null) {
        return;
      }
      const serverAddress = http2Server.address();
      let serverAddressString = "null";
      if (serverAddress) {
        if (typeof serverAddress === "string") {
          serverAddressString = serverAddress;
        } else {
          serverAddressString = serverAddress.address + ":" + serverAddress.port;
        }
      }
      this.serverAddressString = serverAddressString;
      const handler = this.channelzEnabled ? this._channelzHandler : this._streamHandler;
      const sessionHandler = this.channelzEnabled ? this._channelzSessionHandler(http2Server) : this._sessionHandler(http2Server);
      http2Server.on("stream", handler.bind(this, extraInterceptors));
      http2Server.on("session", sessionHandler);
    }
    _sessionHandler(http2Server) {
      return (session) => {
        var _b, _c;
        (_b = this.http2Servers.get(http2Server)) === null || _b === void 0 ? void 0 : _b.sessions.add(session);
        let connectionAgeTimer = null;
        let connectionAgeGraceTimer = null;
        let keepaliveTimer = null;
        let sessionClosedByServer = false;
        const idleTimeoutObj = this.enableIdleTimeout(session);
        if (this.maxConnectionAgeMs !== UNLIMITED_CONNECTION_AGE_MS) {
          const jitterMagnitude = this.maxConnectionAgeMs / 10;
          const jitter = Math.random() * jitterMagnitude * 2 - jitterMagnitude;
          connectionAgeTimer = setTimeout(() => {
            var _b2, _c2;
            sessionClosedByServer = true;
            this.trace("Connection dropped by max connection age: " + ((_b2 = session.socket) === null || _b2 === void 0 ? void 0 : _b2.remoteAddress));
            try {
              session.goaway(http2.constants.NGHTTP2_NO_ERROR, ~(1 << 31), kMaxAge);
            } catch (e) {
              session.destroy();
              return;
            }
            session.close();
            if (this.maxConnectionAgeGraceMs !== UNLIMITED_CONNECTION_AGE_MS) {
              connectionAgeGraceTimer = setTimeout(() => {
                session.destroy();
              }, this.maxConnectionAgeGraceMs);
              (_c2 = connectionAgeGraceTimer.unref) === null || _c2 === void 0 ? void 0 : _c2.call(connectionAgeGraceTimer);
            }
          }, this.maxConnectionAgeMs + jitter);
          (_c = connectionAgeTimer.unref) === null || _c === void 0 ? void 0 : _c.call(connectionAgeTimer);
        }
        const clearKeepaliveTimeout = () => {
          if (keepaliveTimer) {
            clearTimeout(keepaliveTimer);
            keepaliveTimer = null;
          }
        };
        const canSendPing = () => {
          return !session.destroyed && this.keepaliveTimeMs < KEEPALIVE_MAX_TIME_MS && this.keepaliveTimeMs > 0;
        };
        let sendPing;
        const maybeStartKeepalivePingTimer = () => {
          var _b2;
          if (!canSendPing()) {
            return;
          }
          this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
          keepaliveTimer = setTimeout(() => {
            clearKeepaliveTimeout();
            sendPing();
          }, this.keepaliveTimeMs);
          (_b2 = keepaliveTimer.unref) === null || _b2 === void 0 ? void 0 : _b2.call(keepaliveTimer);
        };
        sendPing = () => {
          var _b2;
          if (!canSendPing()) {
            return;
          }
          this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
          let pingSendError = "";
          try {
            const pingSentSuccessfully = session.ping((err, duration2, payload) => {
              clearKeepaliveTimeout();
              if (err) {
                this.keepaliveTrace("Ping failed with error: " + err.message);
                sessionClosedByServer = true;
                session.close();
              } else {
                this.keepaliveTrace("Received ping response");
                maybeStartKeepalivePingTimer();
              }
            });
            if (!pingSentSuccessfully) {
              pingSendError = "Ping returned false";
            }
          } catch (e) {
            pingSendError = (e instanceof Error ? e.message : "") || "Unknown error";
          }
          if (pingSendError) {
            this.keepaliveTrace("Ping send failed: " + pingSendError);
            this.trace("Connection dropped due to ping send error: " + pingSendError);
            sessionClosedByServer = true;
            session.close();
            return;
          }
          keepaliveTimer = setTimeout(() => {
            clearKeepaliveTimeout();
            this.keepaliveTrace("Ping timeout passed without response");
            this.trace("Connection dropped by keepalive timeout");
            sessionClosedByServer = true;
            session.close();
          }, this.keepaliveTimeoutMs);
          (_b2 = keepaliveTimer.unref) === null || _b2 === void 0 ? void 0 : _b2.call(keepaliveTimer);
        };
        maybeStartKeepalivePingTimer();
        session.on("close", () => {
          var _b2, _c2;
          if (!sessionClosedByServer) {
            this.trace(`Connection dropped by client ${(_b2 = session.socket) === null || _b2 === void 0 ? void 0 : _b2.remoteAddress}`);
          }
          if (connectionAgeTimer) {
            clearTimeout(connectionAgeTimer);
          }
          if (connectionAgeGraceTimer) {
            clearTimeout(connectionAgeGraceTimer);
          }
          clearKeepaliveTimeout();
          if (idleTimeoutObj !== null) {
            clearTimeout(idleTimeoutObj.timeout);
            this.sessionIdleTimeouts.delete(session);
          }
          (_c2 = this.http2Servers.get(http2Server)) === null || _c2 === void 0 ? void 0 : _c2.sessions.delete(session);
        });
      };
    }
    _channelzSessionHandler(http2Server) {
      return (session) => {
        var _b, _c, _d, _e;
        const channelzRef = (0, channelz_1.registerChannelzSocket)((_c = (_b = session.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress) !== null && _c !== void 0 ? _c : "unknown", this.getChannelzSessionInfo.bind(this, session), this.channelzEnabled);
        const channelzSessionInfo = {
          ref: channelzRef,
          streamTracker: new channelz_1.ChannelzCallTracker(),
          messagesSent: 0,
          messagesReceived: 0,
          keepAlivesSent: 0,
          lastMessageSentTimestamp: null,
          lastMessageReceivedTimestamp: null
        };
        (_d = this.http2Servers.get(http2Server)) === null || _d === void 0 ? void 0 : _d.sessions.add(session);
        this.sessions.set(session, channelzSessionInfo);
        const clientAddress = `${session.socket.remoteAddress}:${session.socket.remotePort}`;
        this.channelzTrace.addTrace("CT_INFO", "Connection established by client " + clientAddress);
        this.trace("Connection established by client " + clientAddress);
        this.sessionChildrenTracker.refChild(channelzRef);
        let connectionAgeTimer = null;
        let connectionAgeGraceTimer = null;
        let keepaliveTimeout = null;
        let sessionClosedByServer = false;
        const idleTimeoutObj = this.enableIdleTimeout(session);
        if (this.maxConnectionAgeMs !== UNLIMITED_CONNECTION_AGE_MS) {
          const jitterMagnitude = this.maxConnectionAgeMs / 10;
          const jitter = Math.random() * jitterMagnitude * 2 - jitterMagnitude;
          connectionAgeTimer = setTimeout(() => {
            var _b2;
            sessionClosedByServer = true;
            this.channelzTrace.addTrace("CT_INFO", "Connection dropped by max connection age from " + clientAddress);
            try {
              session.goaway(http2.constants.NGHTTP2_NO_ERROR, ~(1 << 31), kMaxAge);
            } catch (e) {
              session.destroy();
              return;
            }
            session.close();
            if (this.maxConnectionAgeGraceMs !== UNLIMITED_CONNECTION_AGE_MS) {
              connectionAgeGraceTimer = setTimeout(() => {
                session.destroy();
              }, this.maxConnectionAgeGraceMs);
              (_b2 = connectionAgeGraceTimer.unref) === null || _b2 === void 0 ? void 0 : _b2.call(connectionAgeGraceTimer);
            }
          }, this.maxConnectionAgeMs + jitter);
          (_e = connectionAgeTimer.unref) === null || _e === void 0 ? void 0 : _e.call(connectionAgeTimer);
        }
        const clearKeepaliveTimeout = () => {
          if (keepaliveTimeout) {
            clearTimeout(keepaliveTimeout);
            keepaliveTimeout = null;
          }
        };
        const canSendPing = () => {
          return !session.destroyed && this.keepaliveTimeMs < KEEPALIVE_MAX_TIME_MS && this.keepaliveTimeMs > 0;
        };
        let sendPing;
        const maybeStartKeepalivePingTimer = () => {
          var _b2;
          if (!canSendPing()) {
            return;
          }
          this.keepaliveTrace("Starting keepalive timer for " + this.keepaliveTimeMs + "ms");
          keepaliveTimeout = setTimeout(() => {
            clearKeepaliveTimeout();
            sendPing();
          }, this.keepaliveTimeMs);
          (_b2 = keepaliveTimeout.unref) === null || _b2 === void 0 ? void 0 : _b2.call(keepaliveTimeout);
        };
        sendPing = () => {
          var _b2;
          if (!canSendPing()) {
            return;
          }
          this.keepaliveTrace("Sending ping with timeout " + this.keepaliveTimeoutMs + "ms");
          let pingSendError = "";
          try {
            const pingSentSuccessfully = session.ping((err, duration2, payload) => {
              clearKeepaliveTimeout();
              if (err) {
                this.keepaliveTrace("Ping failed with error: " + err.message);
                this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to error of a ping frame " + err.message + " return in " + duration2);
                sessionClosedByServer = true;
                session.close();
              } else {
                this.keepaliveTrace("Received ping response");
                maybeStartKeepalivePingTimer();
              }
            });
            if (!pingSentSuccessfully) {
              pingSendError = "Ping returned false";
            }
          } catch (e) {
            pingSendError = (e instanceof Error ? e.message : "") || "Unknown error";
          }
          if (pingSendError) {
            this.keepaliveTrace("Ping send failed: " + pingSendError);
            this.channelzTrace.addTrace("CT_INFO", "Connection dropped due to ping send error: " + pingSendError);
            sessionClosedByServer = true;
            session.close();
            return;
          }
          channelzSessionInfo.keepAlivesSent += 1;
          keepaliveTimeout = setTimeout(() => {
            clearKeepaliveTimeout();
            this.keepaliveTrace("Ping timeout passed without response");
            this.channelzTrace.addTrace("CT_INFO", "Connection dropped by keepalive timeout from " + clientAddress);
            sessionClosedByServer = true;
            session.close();
          }, this.keepaliveTimeoutMs);
          (_b2 = keepaliveTimeout.unref) === null || _b2 === void 0 ? void 0 : _b2.call(keepaliveTimeout);
        };
        maybeStartKeepalivePingTimer();
        session.on("close", () => {
          var _b2;
          if (!sessionClosedByServer) {
            this.channelzTrace.addTrace("CT_INFO", "Connection dropped by client " + clientAddress);
          }
          this.sessionChildrenTracker.unrefChild(channelzRef);
          (0, channelz_1.unregisterChannelzRef)(channelzRef);
          if (connectionAgeTimer) {
            clearTimeout(connectionAgeTimer);
          }
          if (connectionAgeGraceTimer) {
            clearTimeout(connectionAgeGraceTimer);
          }
          clearKeepaliveTimeout();
          if (idleTimeoutObj !== null) {
            clearTimeout(idleTimeoutObj.timeout);
            this.sessionIdleTimeouts.delete(session);
          }
          (_b2 = this.http2Servers.get(http2Server)) === null || _b2 === void 0 ? void 0 : _b2.sessions.delete(session);
          this.sessions.delete(session);
        });
      };
    }
    enableIdleTimeout(session) {
      var _b, _c;
      if (this.sessionIdleTimeout >= MAX_CONNECTION_IDLE_MS) {
        return null;
      }
      const idleTimeoutObj = {
        activeStreams: 0,
        lastIdle: Date.now(),
        onClose: this.onStreamClose.bind(this, session),
        timeout: setTimeout(this.onIdleTimeout, this.sessionIdleTimeout, this, session)
      };
      (_c = (_b = idleTimeoutObj.timeout).unref) === null || _c === void 0 ? void 0 : _c.call(_b);
      this.sessionIdleTimeouts.set(session, idleTimeoutObj);
      const { socket } = session;
      this.trace("Enable idle timeout for " + socket.remoteAddress + ":" + socket.remotePort);
      return idleTimeoutObj;
    }
    onIdleTimeout(ctx, session) {
      const { socket } = session;
      const sessionInfo = ctx.sessionIdleTimeouts.get(session);
      if (sessionInfo !== void 0 && sessionInfo.activeStreams === 0) {
        if (Date.now() - sessionInfo.lastIdle >= ctx.sessionIdleTimeout) {
          ctx.trace("Session idle timeout triggered for " + (socket === null || socket === void 0 ? void 0 : socket.remoteAddress) + ":" + (socket === null || socket === void 0 ? void 0 : socket.remotePort) + " last idle at " + sessionInfo.lastIdle);
          ctx.closeSession(session);
        } else {
          sessionInfo.timeout.refresh();
        }
      }
    }
    onStreamOpened(stream) {
      const session = stream.session;
      const idleTimeoutObj = this.sessionIdleTimeouts.get(session);
      if (idleTimeoutObj) {
        idleTimeoutObj.activeStreams += 1;
        stream.once("close", idleTimeoutObj.onClose);
      }
    }
    onStreamClose(session) {
      var _b, _c;
      const idleTimeoutObj = this.sessionIdleTimeouts.get(session);
      if (idleTimeoutObj) {
        idleTimeoutObj.activeStreams -= 1;
        if (idleTimeoutObj.activeStreams === 0) {
          idleTimeoutObj.lastIdle = Date.now();
          idleTimeoutObj.timeout.refresh();
          this.trace("Session onStreamClose" + ((_b = session.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress) + ":" + ((_c = session.socket) === null || _c === void 0 ? void 0 : _c.remotePort) + " at " + idleTimeoutObj.lastIdle);
        }
      }
    }
  }, (() => {
    const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    _start_decorators = [deprecate("Calling start() is no longer necessary. It can be safely omitted.")];
    __esDecorate(_a, null, _start_decorators, { kind: "method", name: "start", static: false, private: false, access: { has: (obj) => "start" in obj, get: (obj) => obj.start }, metadata: _metadata }, null, _instanceExtraInitializers);
    if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
  })(), _a;
})();
server.Server = Server;
async function handleUnary(call2, handler) {
  let stream;
  function respond(err, value, trailer, flags) {
    if (err) {
      call2.sendStatus((0, server_call_1.serverErrorToStatus)(err, trailer));
      return;
    }
    call2.sendMessage(value, () => {
      call2.sendStatus({
        code: constants_1.Status.OK,
        details: "OK",
        metadata: trailer !== null && trailer !== void 0 ? trailer : null
      });
    });
  }
  let requestMetadata;
  let requestMessage = null;
  call2.start({
    onReceiveMetadata(metadata2) {
      requestMetadata = metadata2;
      call2.startRead();
    },
    onReceiveMessage(message2) {
      if (requestMessage) {
        call2.sendStatus({
          code: constants_1.Status.UNIMPLEMENTED,
          details: `Received a second request message for server streaming method ${handler.path}`,
          metadata: null
        });
        return;
      }
      requestMessage = message2;
      call2.startRead();
    },
    onReceiveHalfClose() {
      if (!requestMessage) {
        call2.sendStatus({
          code: constants_1.Status.UNIMPLEMENTED,
          details: `Received no request message for server streaming method ${handler.path}`,
          metadata: null
        });
        return;
      }
      stream = new server_call_1.ServerWritableStreamImpl(handler.path, call2, requestMetadata, requestMessage);
      try {
        handler.func(stream, respond);
      } catch (err) {
        call2.sendStatus({
          code: constants_1.Status.UNKNOWN,
          details: `Server method handler threw error ${err.message}`,
          metadata: null
        });
      }
    },
    onCancel() {
      if (stream) {
        stream.cancelled = true;
        stream.emit("cancelled", "cancelled");
      }
    }
  });
}
function handleClientStreaming(call2, handler) {
  let stream;
  function respond(err, value, trailer, flags) {
    if (err) {
      call2.sendStatus((0, server_call_1.serverErrorToStatus)(err, trailer));
      return;
    }
    call2.sendMessage(value, () => {
      call2.sendStatus({
        code: constants_1.Status.OK,
        details: "OK",
        metadata: trailer !== null && trailer !== void 0 ? trailer : null
      });
    });
  }
  call2.start({
    onReceiveMetadata(metadata2) {
      stream = new server_call_1.ServerDuplexStreamImpl(handler.path, call2, metadata2);
      try {
        handler.func(stream, respond);
      } catch (err) {
        call2.sendStatus({
          code: constants_1.Status.UNKNOWN,
          details: `Server method handler threw error ${err.message}`,
          metadata: null
        });
      }
    },
    onReceiveMessage(message2) {
      stream.push(message2);
    },
    onReceiveHalfClose() {
      stream.push(null);
    },
    onCancel() {
      if (stream) {
        stream.cancelled = true;
        stream.emit("cancelled", "cancelled");
        stream.destroy();
      }
    }
  });
}
function handleServerStreaming(call2, handler) {
  let stream;
  let requestMetadata;
  let requestMessage = null;
  call2.start({
    onReceiveMetadata(metadata2) {
      requestMetadata = metadata2;
      call2.startRead();
    },
    onReceiveMessage(message2) {
      if (requestMessage) {
        call2.sendStatus({
          code: constants_1.Status.UNIMPLEMENTED,
          details: `Received a second request message for server streaming method ${handler.path}`,
          metadata: null
        });
        return;
      }
      requestMessage = message2;
      call2.startRead();
    },
    onReceiveHalfClose() {
      if (!requestMessage) {
        call2.sendStatus({
          code: constants_1.Status.UNIMPLEMENTED,
          details: `Received no request message for server streaming method ${handler.path}`,
          metadata: null
        });
        return;
      }
      stream = new server_call_1.ServerWritableStreamImpl(handler.path, call2, requestMetadata, requestMessage);
      try {
        handler.func(stream);
      } catch (err) {
        call2.sendStatus({
          code: constants_1.Status.UNKNOWN,
          details: `Server method handler threw error ${err.message}`,
          metadata: null
        });
      }
    },
    onCancel() {
      if (stream) {
        stream.cancelled = true;
        stream.emit("cancelled", "cancelled");
        stream.destroy();
      }
    }
  });
}
function handleBidiStreaming(call2, handler) {
  let stream;
  call2.start({
    onReceiveMetadata(metadata2) {
      stream = new server_call_1.ServerDuplexStreamImpl(handler.path, call2, metadata2);
      try {
        handler.func(stream);
      } catch (err) {
        call2.sendStatus({
          code: constants_1.Status.UNKNOWN,
          details: `Server method handler threw error ${err.message}`,
          metadata: null
        });
      }
    },
    onReceiveMessage(message2) {
      stream.push(message2);
    },
    onReceiveHalfClose() {
      stream.push(null);
    },
    onCancel() {
      if (stream) {
        stream.cancelled = true;
        stream.emit("cancelled", "cancelled");
        stream.destroy();
      }
    }
  });
}
var statusBuilder = {};
Object.defineProperty(statusBuilder, "__esModule", { value: true });
statusBuilder.StatusBuilder = void 0;
class StatusBuilder {
  constructor() {
    this.code = null;
    this.details = null;
    this.metadata = null;
  }
  /**
   * Adds a status code to the builder.
   */
  withCode(code) {
    this.code = code;
    return this;
  }
  /**
   * Adds details to the builder.
   */
  withDetails(details) {
    this.details = details;
    return this;
  }
  /**
   * Adds metadata to the builder.
   */
  withMetadata(metadata2) {
    this.metadata = metadata2;
    return this;
  }
  /**
   * Builds the status object.
   */
  build() {
    const status = {};
    if (this.code !== null) {
      status.code = this.code;
    }
    if (this.details !== null) {
      status.details = this.details;
    }
    if (this.metadata !== null) {
      status.metadata = this.metadata;
    }
    return status;
  }
}
statusBuilder.StatusBuilder = StatusBuilder;
var experimental = {};
var duration = {};
var hasRequiredDuration;
function requireDuration() {
  if (hasRequiredDuration) return duration;
  hasRequiredDuration = 1;
  Object.defineProperty(duration, "__esModule", { value: true });
  duration.parseDuration = duration.isDuration = duration.durationToMs = duration.msToDuration = void 0;
  function msToDuration(millis) {
    return {
      seconds: millis / 1e3 | 0,
      nanos: millis % 1e3 * 1e6 | 0
    };
  }
  duration.msToDuration = msToDuration;
  function durationToMs(duration2) {
    return duration2.seconds * 1e3 + duration2.nanos / 1e6 | 0;
  }
  duration.durationToMs = durationToMs;
  function isDuration(value) {
    return typeof value.seconds === "number" && typeof value.nanos === "number";
  }
  duration.isDuration = isDuration;
  const durationRegex = /^(\d+)(?:\.(\d+))?s$/;
  function parseDuration(value) {
    const match = value.match(durationRegex);
    if (!match) {
      return null;
    }
    return {
      seconds: Number.parseInt(match[1], 10),
      nanos: match[2] ? Number.parseInt(match[2].padEnd(9, "0"), 10) : 0
    };
  }
  duration.parseDuration = parseDuration;
  return duration;
}
var loadBalancerPickFirst = {};
var hasRequiredLoadBalancerPickFirst;
function requireLoadBalancerPickFirst() {
  if (hasRequiredLoadBalancerPickFirst) return loadBalancerPickFirst;
  hasRequiredLoadBalancerPickFirst = 1;
  Object.defineProperty(loadBalancerPickFirst, "__esModule", { value: true });
  loadBalancerPickFirst.setup = loadBalancerPickFirst.LeafLoadBalancer = loadBalancerPickFirst.PickFirstLoadBalancer = loadBalancerPickFirst.shuffled = loadBalancerPickFirst.PickFirstLoadBalancingConfig = void 0;
  const load_balancer_12 = requireLoadBalancer();
  const connectivity_state_12 = connectivityState;
  const picker_12 = picker;
  const subchannel_address_12 = subchannelAddress;
  const logging2 = logging$9;
  const constants_12 = constants;
  const subchannel_address_2 = subchannelAddress;
  const net_12 = require$$0$3;
  const TRACER_NAME2 = "pick_first";
  function trace2(text) {
    logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, text);
  }
  const TYPE_NAME = "pick_first";
  const CONNECTION_DELAY_INTERVAL_MS = 250;
  class PickFirstLoadBalancingConfig {
    constructor(shuffleAddressList) {
      this.shuffleAddressList = shuffleAddressList;
    }
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    toJsonObject() {
      return {
        [TYPE_NAME]: {
          shuffleAddressList: this.shuffleAddressList
        }
      };
    }
    getShuffleAddressList() {
      return this.shuffleAddressList;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static createFromJson(obj) {
      if ("shuffleAddressList" in obj && !(typeof obj.shuffleAddressList === "boolean")) {
        throw new Error("pick_first config field shuffleAddressList must be a boolean if provided");
      }
      return new PickFirstLoadBalancingConfig(obj.shuffleAddressList === true);
    }
  }
  loadBalancerPickFirst.PickFirstLoadBalancingConfig = PickFirstLoadBalancingConfig;
  class PickFirstPicker {
    constructor(subchannel2) {
      this.subchannel = subchannel2;
    }
    pick(pickArgs) {
      return {
        pickResultType: picker_12.PickResultType.COMPLETE,
        subchannel: this.subchannel,
        status: null,
        onCallStarted: null,
        onCallEnded: null
      };
    }
  }
  function shuffled(list) {
    const result = list.slice();
    for (let i = result.length - 1; i > 1; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = result[i];
      result[i] = result[j];
      result[j] = temp;
    }
    return result;
  }
  loadBalancerPickFirst.shuffled = shuffled;
  function interleaveAddressFamilies(addressList) {
    const result = [];
    const ipv6Addresses = [];
    const ipv4Addresses = [];
    const ipv6First = (0, subchannel_address_2.isTcpSubchannelAddress)(addressList[0]) && (0, net_12.isIPv6)(addressList[0].host);
    for (const address of addressList) {
      if ((0, subchannel_address_2.isTcpSubchannelAddress)(address) && (0, net_12.isIPv6)(address.host)) {
        ipv6Addresses.push(address);
      } else {
        ipv4Addresses.push(address);
      }
    }
    const firstList = ipv6First ? ipv6Addresses : ipv4Addresses;
    const secondList = ipv6First ? ipv4Addresses : ipv6Addresses;
    for (let i = 0; i < Math.max(firstList.length, secondList.length); i++) {
      if (i < firstList.length) {
        result.push(firstList[i]);
      }
      if (i < secondList.length) {
        result.push(secondList[i]);
      }
    }
    return result;
  }
  const REPORT_HEALTH_STATUS_OPTION_NAME = "grpc-node.internal.pick-first.report_health_status";
  class PickFirstLoadBalancer {
    /**
     * Load balancer that attempts to connect to each backend in the address list
     * in order, and picks the first one that connects, using it for every
     * request.
     * @param channelControlHelper `ChannelControlHelper` instance provided by
     *     this load balancer's owner.
     */
    constructor(channelControlHelper, credentials, options) {
      this.channelControlHelper = channelControlHelper;
      this.children = [];
      this.currentState = connectivity_state_12.ConnectivityState.IDLE;
      this.currentSubchannelIndex = 0;
      this.currentPick = null;
      this.subchannelStateListener = (subchannel2, previousState, newState, keepaliveTime, errorMessage) => {
        this.onSubchannelStateUpdate(subchannel2, previousState, newState, errorMessage);
      };
      this.pickedSubchannelHealthListener = () => this.calculateAndReportNewState();
      this.stickyTransientFailureMode = false;
      this.lastError = null;
      this.latestAddressList = null;
      this.connectionDelayTimeout = setTimeout(() => {
      }, 0);
      clearTimeout(this.connectionDelayTimeout);
      this.reportHealthStatus = options[REPORT_HEALTH_STATUS_OPTION_NAME];
    }
    allChildrenHaveReportedTF() {
      return this.children.every((child) => child.hasReportedTransientFailure);
    }
    resetChildrenReportedTF() {
      this.children.every((child) => child.hasReportedTransientFailure = false);
    }
    calculateAndReportNewState() {
      if (this.currentPick) {
        if (this.reportHealthStatus && !this.currentPick.isHealthy()) {
          this.updateState(connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE, new picker_12.UnavailablePicker({
            details: `Picked subchannel ${this.currentPick.getAddress()} is unhealthy`
          }));
        } else {
          this.updateState(connectivity_state_12.ConnectivityState.READY, new PickFirstPicker(this.currentPick));
        }
      } else if (this.children.length === 0) {
        this.updateState(connectivity_state_12.ConnectivityState.IDLE, new picker_12.QueuePicker(this));
      } else {
        if (this.stickyTransientFailureMode) {
          this.updateState(connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE, new picker_12.UnavailablePicker({
            details: `No connection established. Last error: ${this.lastError}`
          }));
        } else {
          this.updateState(connectivity_state_12.ConnectivityState.CONNECTING, new picker_12.QueuePicker(this));
        }
      }
    }
    requestReresolution() {
      this.channelControlHelper.requestReresolution();
    }
    maybeEnterStickyTransientFailureMode() {
      if (!this.allChildrenHaveReportedTF()) {
        return;
      }
      this.requestReresolution();
      this.resetChildrenReportedTF();
      if (this.stickyTransientFailureMode) {
        this.calculateAndReportNewState();
        return;
      }
      this.stickyTransientFailureMode = true;
      for (const { subchannel: subchannel2 } of this.children) {
        subchannel2.startConnecting();
      }
      this.calculateAndReportNewState();
    }
    removeCurrentPick() {
      if (this.currentPick !== null) {
        this.currentPick.removeConnectivityStateListener(this.subchannelStateListener);
        this.channelControlHelper.removeChannelzChild(this.currentPick.getChannelzRef());
        this.currentPick.removeHealthStateWatcher(this.pickedSubchannelHealthListener);
        this.currentPick.unref();
        this.currentPick = null;
      }
    }
    onSubchannelStateUpdate(subchannel2, previousState, newState, errorMessage) {
      var _a;
      if ((_a = this.currentPick) === null || _a === void 0 ? void 0 : _a.realSubchannelEquals(subchannel2)) {
        if (newState !== connectivity_state_12.ConnectivityState.READY) {
          this.removeCurrentPick();
          this.calculateAndReportNewState();
        }
        return;
      }
      for (const [index, child] of this.children.entries()) {
        if (subchannel2.realSubchannelEquals(child.subchannel)) {
          if (newState === connectivity_state_12.ConnectivityState.READY) {
            this.pickSubchannel(child.subchannel);
          }
          if (newState === connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE) {
            child.hasReportedTransientFailure = true;
            if (errorMessage) {
              this.lastError = errorMessage;
            }
            this.maybeEnterStickyTransientFailureMode();
            if (index === this.currentSubchannelIndex) {
              this.startNextSubchannelConnecting(index + 1);
            }
          }
          child.subchannel.startConnecting();
          return;
        }
      }
    }
    startNextSubchannelConnecting(startIndex) {
      clearTimeout(this.connectionDelayTimeout);
      for (const [index, child] of this.children.entries()) {
        if (index >= startIndex) {
          const subchannelState = child.subchannel.getConnectivityState();
          if (subchannelState === connectivity_state_12.ConnectivityState.IDLE || subchannelState === connectivity_state_12.ConnectivityState.CONNECTING) {
            this.startConnecting(index);
            return;
          }
        }
      }
      this.maybeEnterStickyTransientFailureMode();
    }
    /**
     * Have a single subchannel in the `subchannels` list start connecting.
     * @param subchannelIndex The index into the `subchannels` list.
     */
    startConnecting(subchannelIndex) {
      var _a, _b;
      clearTimeout(this.connectionDelayTimeout);
      this.currentSubchannelIndex = subchannelIndex;
      if (this.children[subchannelIndex].subchannel.getConnectivityState() === connectivity_state_12.ConnectivityState.IDLE) {
        trace2("Start connecting to subchannel with address " + this.children[subchannelIndex].subchannel.getAddress());
        process.nextTick(() => {
          var _a2;
          (_a2 = this.children[subchannelIndex]) === null || _a2 === void 0 ? void 0 : _a2.subchannel.startConnecting();
        });
      }
      this.connectionDelayTimeout = setTimeout(() => {
        this.startNextSubchannelConnecting(subchannelIndex + 1);
      }, CONNECTION_DELAY_INTERVAL_MS);
      (_b = (_a = this.connectionDelayTimeout).unref) === null || _b === void 0 ? void 0 : _b.call(_a);
    }
    /**
     * Declare that the specified subchannel should be used to make requests.
     * This functions the same independent of whether subchannel is a member of
     * this.children and whether it is equal to this.currentPick.
     * Prerequisite: subchannel.getConnectivityState() === READY.
     * @param subchannel
     */
    pickSubchannel(subchannel2) {
      trace2("Pick subchannel with address " + subchannel2.getAddress());
      this.stickyTransientFailureMode = false;
      subchannel2.ref();
      this.channelControlHelper.addChannelzChild(subchannel2.getChannelzRef());
      this.removeCurrentPick();
      this.resetSubchannelList();
      subchannel2.addConnectivityStateListener(this.subchannelStateListener);
      subchannel2.addHealthStateWatcher(this.pickedSubchannelHealthListener);
      this.currentPick = subchannel2;
      clearTimeout(this.connectionDelayTimeout);
      this.calculateAndReportNewState();
    }
    updateState(newState, picker2) {
      trace2(connectivity_state_12.ConnectivityState[this.currentState] + " -> " + connectivity_state_12.ConnectivityState[newState]);
      this.currentState = newState;
      this.channelControlHelper.updateState(newState, picker2);
    }
    resetSubchannelList() {
      for (const child of this.children) {
        child.subchannel.removeConnectivityStateListener(this.subchannelStateListener);
        child.subchannel.unref();
        this.channelControlHelper.removeChannelzChild(child.subchannel.getChannelzRef());
      }
      this.currentSubchannelIndex = 0;
      this.children = [];
    }
    connectToAddressList(addressList) {
      trace2("connectToAddressList([" + addressList.map((address) => (0, subchannel_address_12.subchannelAddressToString)(address)) + "])");
      const newChildrenList = addressList.map((address) => ({
        subchannel: this.channelControlHelper.createSubchannel(address, {}, null),
        hasReportedTransientFailure: false
      }));
      for (const { subchannel: subchannel2 } of newChildrenList) {
        if (subchannel2.getConnectivityState() === connectivity_state_12.ConnectivityState.READY) {
          this.pickSubchannel(subchannel2);
          return;
        }
      }
      for (const { subchannel: subchannel2 } of newChildrenList) {
        subchannel2.ref();
        this.channelControlHelper.addChannelzChild(subchannel2.getChannelzRef());
      }
      this.resetSubchannelList();
      this.children = newChildrenList;
      for (const { subchannel: subchannel2 } of this.children) {
        subchannel2.addConnectivityStateListener(this.subchannelStateListener);
      }
      for (const child of this.children) {
        if (child.subchannel.getConnectivityState() === connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE) {
          child.hasReportedTransientFailure = true;
        }
      }
      this.startNextSubchannelConnecting(0);
      this.calculateAndReportNewState();
    }
    updateAddressList(endpointList, lbConfig) {
      if (!(lbConfig instanceof PickFirstLoadBalancingConfig)) {
        return;
      }
      if (lbConfig.getShuffleAddressList()) {
        endpointList = shuffled(endpointList);
      }
      const rawAddressList = [].concat(...endpointList.map((endpoint) => endpoint.addresses));
      trace2("updateAddressList([" + rawAddressList.map((address) => (0, subchannel_address_12.subchannelAddressToString)(address)) + "])");
      if (rawAddressList.length === 0) {
        throw new Error("No addresses in endpoint list passed to pick_first");
      }
      const addressList = interleaveAddressFamilies(rawAddressList);
      this.latestAddressList = addressList;
      this.connectToAddressList(addressList);
    }
    exitIdle() {
      if (this.currentState === connectivity_state_12.ConnectivityState.IDLE && this.latestAddressList) {
        this.connectToAddressList(this.latestAddressList);
      }
    }
    resetBackoff() {
    }
    destroy() {
      this.resetSubchannelList();
      this.removeCurrentPick();
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  loadBalancerPickFirst.PickFirstLoadBalancer = PickFirstLoadBalancer;
  const LEAF_CONFIG = new PickFirstLoadBalancingConfig(false);
  class LeafLoadBalancer {
    constructor(endpoint, channelControlHelper, credentials, options) {
      this.endpoint = endpoint;
      this.latestState = connectivity_state_12.ConnectivityState.IDLE;
      const childChannelControlHelper = (0, load_balancer_12.createChildChannelControlHelper)(channelControlHelper, {
        updateState: (connectivityState2, picker2) => {
          this.latestState = connectivityState2;
          this.latestPicker = picker2;
          channelControlHelper.updateState(connectivityState2, picker2);
        }
      });
      this.pickFirstBalancer = new PickFirstLoadBalancer(childChannelControlHelper, credentials, Object.assign(Object.assign({}, options), { [REPORT_HEALTH_STATUS_OPTION_NAME]: true }));
      this.latestPicker = new picker_12.QueuePicker(this.pickFirstBalancer);
    }
    startConnecting() {
      this.pickFirstBalancer.updateAddressList([this.endpoint], LEAF_CONFIG);
    }
    /**
     * Update the endpoint associated with this LeafLoadBalancer to a new
     * endpoint. Does not trigger connection establishment if a connection
     * attempt is not already in progress.
     * @param newEndpoint
     */
    updateEndpoint(newEndpoint) {
      this.endpoint = newEndpoint;
      if (this.latestState !== connectivity_state_12.ConnectivityState.IDLE) {
        this.startConnecting();
      }
    }
    getConnectivityState() {
      return this.latestState;
    }
    getPicker() {
      return this.latestPicker;
    }
    getEndpoint() {
      return this.endpoint;
    }
    exitIdle() {
      this.pickFirstBalancer.exitIdle();
    }
    destroy() {
      this.pickFirstBalancer.destroy();
    }
  }
  loadBalancerPickFirst.LeafLoadBalancer = LeafLoadBalancer;
  function setup() {
    (0, load_balancer_12.registerLoadBalancerType)(TYPE_NAME, PickFirstLoadBalancer, PickFirstLoadBalancingConfig);
    (0, load_balancer_12.registerDefaultLoadBalancerType)(TYPE_NAME);
  }
  loadBalancerPickFirst.setup = setup;
  return loadBalancerPickFirst;
}
var certificateProvider = {};
var hasRequiredCertificateProvider;
function requireCertificateProvider() {
  if (hasRequiredCertificateProvider) return certificateProvider;
  hasRequiredCertificateProvider = 1;
  Object.defineProperty(certificateProvider, "__esModule", { value: true });
  certificateProvider.FileWatcherCertificateProvider = void 0;
  const fs2 = require$$0;
  const logging2 = logging$9;
  const constants_12 = constants;
  const util_1 = require$$1$5;
  const TRACER_NAME2 = "certificate_provider";
  function trace2(text) {
    logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, text);
  }
  const readFilePromise = (0, util_1.promisify)(fs2.readFile);
  class FileWatcherCertificateProvider {
    constructor(config) {
      this.config = config;
      this.refreshTimer = null;
      this.fileResultPromise = null;
      this.latestCaUpdate = null;
      this.caListeners = /* @__PURE__ */ new Set();
      this.latestIdentityUpdate = null;
      this.identityListeners = /* @__PURE__ */ new Set();
      this.lastUpdateTime = null;
      if (config.certificateFile === void 0 !== (config.privateKeyFile === void 0)) {
        throw new Error("certificateFile and privateKeyFile must be set or unset together");
      }
      if (config.certificateFile === void 0 && config.caCertificateFile === void 0) {
        throw new Error("At least one of certificateFile and caCertificateFile must be set");
      }
      trace2("File watcher constructed with config " + JSON.stringify(config));
    }
    updateCertificates() {
      if (this.fileResultPromise) {
        return;
      }
      this.fileResultPromise = Promise.allSettled([
        this.config.certificateFile ? readFilePromise(this.config.certificateFile) : Promise.reject(),
        this.config.privateKeyFile ? readFilePromise(this.config.privateKeyFile) : Promise.reject(),
        this.config.caCertificateFile ? readFilePromise(this.config.caCertificateFile) : Promise.reject()
      ]);
      this.fileResultPromise.then(([certificateResult, privateKeyResult, caCertificateResult]) => {
        if (!this.refreshTimer) {
          return;
        }
        trace2("File watcher read certificates certificate" + (certificateResult ? "!=" : "==") + "null, privateKey" + (privateKeyResult ? "!=" : "==") + "null, CA certificate" + (caCertificateResult ? "!=" : "==") + "null");
        this.lastUpdateTime = /* @__PURE__ */ new Date();
        this.fileResultPromise = null;
        if (certificateResult.status === "fulfilled" && privateKeyResult.status === "fulfilled") {
          this.latestIdentityUpdate = {
            certificate: certificateResult.value,
            privateKey: privateKeyResult.value
          };
        } else {
          this.latestIdentityUpdate = null;
        }
        if (caCertificateResult.status === "fulfilled") {
          this.latestCaUpdate = {
            caCertificate: caCertificateResult.value
          };
        }
        for (const listener of this.identityListeners) {
          listener(this.latestIdentityUpdate);
        }
        for (const listener of this.caListeners) {
          listener(this.latestCaUpdate);
        }
      });
      trace2("File watcher initiated certificate update");
    }
    maybeStartWatchingFiles() {
      if (!this.refreshTimer) {
        const timeSinceLastUpdate = this.lastUpdateTime ? (/* @__PURE__ */ new Date()).getTime() - this.lastUpdateTime.getTime() : Infinity;
        if (timeSinceLastUpdate > this.config.refreshIntervalMs) {
          this.updateCertificates();
        }
        if (timeSinceLastUpdate > this.config.refreshIntervalMs * 2) {
          this.latestCaUpdate = null;
          this.latestIdentityUpdate = null;
        }
        this.refreshTimer = setInterval(() => this.updateCertificates(), this.config.refreshIntervalMs);
        trace2("File watcher started watching");
      }
    }
    maybeStopWatchingFiles() {
      if (this.caListeners.size === 0 && this.identityListeners.size === 0) {
        this.fileResultPromise = null;
        if (this.refreshTimer) {
          clearInterval(this.refreshTimer);
          this.refreshTimer = null;
        }
      }
    }
    addCaCertificateListener(listener) {
      this.caListeners.add(listener);
      this.maybeStartWatchingFiles();
      process.nextTick(listener, this.latestCaUpdate);
    }
    removeCaCertificateListener(listener) {
      this.caListeners.delete(listener);
      this.maybeStopWatchingFiles();
    }
    addIdentityCertificateListener(listener) {
      this.identityListeners.add(listener);
      this.maybeStartWatchingFiles();
      process.nextTick(listener, this.latestIdentityUpdate);
    }
    removeIdentityCertificateListener(listener) {
      this.identityListeners.delete(listener);
      this.maybeStopWatchingFiles();
    }
  }
  certificateProvider.FileWatcherCertificateProvider = FileWatcherCertificateProvider;
  return certificateProvider;
}
var hasRequiredExperimental;
function requireExperimental() {
  if (hasRequiredExperimental) return experimental;
  hasRequiredExperimental = 1;
  (function(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCertificateProviderChannelCredentials = exports.FileWatcherCertificateProvider = exports.createCertificateProviderServerCredentials = exports.createServerCredentialsWithInterceptors = exports.BaseSubchannelWrapper = exports.registerAdminService = exports.FilterStackFactory = exports.BaseFilter = exports.PickResultType = exports.QueuePicker = exports.UnavailablePicker = exports.ChildLoadBalancerHandler = exports.EndpointMap = exports.endpointHasAddress = exports.endpointToString = exports.subchannelAddressToString = exports.LeafLoadBalancer = exports.isLoadBalancerNameRegistered = exports.parseLoadBalancingConfig = exports.selectLbConfigFromList = exports.registerLoadBalancerType = exports.createChildChannelControlHelper = exports.BackoffTimeout = exports.parseDuration = exports.durationToMs = exports.splitHostPort = exports.uriToString = exports.createResolver = exports.registerResolver = exports.log = exports.trace = void 0;
    var logging_12 = logging$9;
    Object.defineProperty(exports, "trace", { enumerable: true, get: function() {
      return logging_12.trace;
    } });
    Object.defineProperty(exports, "log", { enumerable: true, get: function() {
      return logging_12.log;
    } });
    var resolver_12 = resolver;
    Object.defineProperty(exports, "registerResolver", { enumerable: true, get: function() {
      return resolver_12.registerResolver;
    } });
    Object.defineProperty(exports, "createResolver", { enumerable: true, get: function() {
      return resolver_12.createResolver;
    } });
    var uri_parser_12 = uriParser;
    Object.defineProperty(exports, "uriToString", { enumerable: true, get: function() {
      return uri_parser_12.uriToString;
    } });
    Object.defineProperty(exports, "splitHostPort", { enumerable: true, get: function() {
      return uri_parser_12.splitHostPort;
    } });
    var duration_1 = requireDuration();
    Object.defineProperty(exports, "durationToMs", { enumerable: true, get: function() {
      return duration_1.durationToMs;
    } });
    Object.defineProperty(exports, "parseDuration", { enumerable: true, get: function() {
      return duration_1.parseDuration;
    } });
    var backoff_timeout_12 = requireBackoffTimeout();
    Object.defineProperty(exports, "BackoffTimeout", { enumerable: true, get: function() {
      return backoff_timeout_12.BackoffTimeout;
    } });
    var load_balancer_12 = requireLoadBalancer();
    Object.defineProperty(exports, "createChildChannelControlHelper", { enumerable: true, get: function() {
      return load_balancer_12.createChildChannelControlHelper;
    } });
    Object.defineProperty(exports, "registerLoadBalancerType", { enumerable: true, get: function() {
      return load_balancer_12.registerLoadBalancerType;
    } });
    Object.defineProperty(exports, "selectLbConfigFromList", { enumerable: true, get: function() {
      return load_balancer_12.selectLbConfigFromList;
    } });
    Object.defineProperty(exports, "parseLoadBalancingConfig", { enumerable: true, get: function() {
      return load_balancer_12.parseLoadBalancingConfig;
    } });
    Object.defineProperty(exports, "isLoadBalancerNameRegistered", { enumerable: true, get: function() {
      return load_balancer_12.isLoadBalancerNameRegistered;
    } });
    var load_balancer_pick_first_1 = requireLoadBalancerPickFirst();
    Object.defineProperty(exports, "LeafLoadBalancer", { enumerable: true, get: function() {
      return load_balancer_pick_first_1.LeafLoadBalancer;
    } });
    var subchannel_address_12 = subchannelAddress;
    Object.defineProperty(exports, "subchannelAddressToString", { enumerable: true, get: function() {
      return subchannel_address_12.subchannelAddressToString;
    } });
    Object.defineProperty(exports, "endpointToString", { enumerable: true, get: function() {
      return subchannel_address_12.endpointToString;
    } });
    Object.defineProperty(exports, "endpointHasAddress", { enumerable: true, get: function() {
      return subchannel_address_12.endpointHasAddress;
    } });
    Object.defineProperty(exports, "EndpointMap", { enumerable: true, get: function() {
      return subchannel_address_12.EndpointMap;
    } });
    var load_balancer_child_handler_12 = requireLoadBalancerChildHandler();
    Object.defineProperty(exports, "ChildLoadBalancerHandler", { enumerable: true, get: function() {
      return load_balancer_child_handler_12.ChildLoadBalancerHandler;
    } });
    var picker_12 = picker;
    Object.defineProperty(exports, "UnavailablePicker", { enumerable: true, get: function() {
      return picker_12.UnavailablePicker;
    } });
    Object.defineProperty(exports, "QueuePicker", { enumerable: true, get: function() {
      return picker_12.QueuePicker;
    } });
    Object.defineProperty(exports, "PickResultType", { enumerable: true, get: function() {
      return picker_12.PickResultType;
    } });
    var filter_12 = requireFilter();
    Object.defineProperty(exports, "BaseFilter", { enumerable: true, get: function() {
      return filter_12.BaseFilter;
    } });
    var filter_stack_1 = filterStack;
    Object.defineProperty(exports, "FilterStackFactory", { enumerable: true, get: function() {
      return filter_stack_1.FilterStackFactory;
    } });
    var admin_1 = admin;
    Object.defineProperty(exports, "registerAdminService", { enumerable: true, get: function() {
      return admin_1.registerAdminService;
    } });
    var subchannel_interface_1 = subchannelInterface;
    Object.defineProperty(exports, "BaseSubchannelWrapper", { enumerable: true, get: function() {
      return subchannel_interface_1.BaseSubchannelWrapper;
    } });
    var server_credentials_12 = serverCredentials;
    Object.defineProperty(exports, "createServerCredentialsWithInterceptors", { enumerable: true, get: function() {
      return server_credentials_12.createServerCredentialsWithInterceptors;
    } });
    Object.defineProperty(exports, "createCertificateProviderServerCredentials", { enumerable: true, get: function() {
      return server_credentials_12.createCertificateProviderServerCredentials;
    } });
    var certificate_provider_1 = requireCertificateProvider();
    Object.defineProperty(exports, "FileWatcherCertificateProvider", { enumerable: true, get: function() {
      return certificate_provider_1.FileWatcherCertificateProvider;
    } });
    var channel_credentials_1 = channelCredentials;
    Object.defineProperty(exports, "createCertificateProviderChannelCredentials", { enumerable: true, get: function() {
      return channel_credentials_1.createCertificateProviderChannelCredentials;
    } });
  })(experimental);
  return experimental;
}
var resolverUds = {};
var hasRequiredResolverUds;
function requireResolverUds() {
  if (hasRequiredResolverUds) return resolverUds;
  hasRequiredResolverUds = 1;
  Object.defineProperty(resolverUds, "__esModule", { value: true });
  resolverUds.setup = void 0;
  const resolver_12 = resolver;
  class UdsResolver {
    constructor(target, listener, channelOptions2) {
      this.listener = listener;
      this.hasReturnedResult = false;
      this.endpoints = [];
      let path2;
      if (target.authority === "") {
        path2 = "/" + target.path;
      } else {
        path2 = target.path;
      }
      this.endpoints = [{ addresses: [{ path: path2 }] }];
    }
    updateResolution() {
      if (!this.hasReturnedResult) {
        this.hasReturnedResult = true;
        process.nextTick(this.listener.onSuccessfulResolution, this.endpoints, null, null, null, {});
      }
    }
    destroy() {
      this.hasReturnedResult = false;
    }
    static getDefaultAuthority(target) {
      return "localhost";
    }
  }
  function setup() {
    (0, resolver_12.registerResolver)("unix", UdsResolver);
  }
  resolverUds.setup = setup;
  return resolverUds;
}
var resolverIp = {};
var hasRequiredResolverIp;
function requireResolverIp() {
  if (hasRequiredResolverIp) return resolverIp;
  hasRequiredResolverIp = 1;
  Object.defineProperty(resolverIp, "__esModule", { value: true });
  resolverIp.setup = void 0;
  const net_12 = require$$0$3;
  const constants_12 = constants;
  const metadata_12 = metadata;
  const resolver_12 = resolver;
  const uri_parser_12 = uriParser;
  const logging2 = logging$9;
  const TRACER_NAME2 = "ip_resolver";
  function trace2(text) {
    logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, text);
  }
  const IPV4_SCHEME = "ipv4";
  const IPV6_SCHEME = "ipv6";
  const DEFAULT_PORT2 = 443;
  class IpResolver {
    constructor(target, listener, channelOptions2) {
      var _a;
      this.listener = listener;
      this.endpoints = [];
      this.error = null;
      this.hasReturnedResult = false;
      trace2("Resolver constructed for target " + (0, uri_parser_12.uriToString)(target));
      const addresses = [];
      if (!(target.scheme === IPV4_SCHEME || target.scheme === IPV6_SCHEME)) {
        this.error = {
          code: constants_12.Status.UNAVAILABLE,
          details: `Unrecognized scheme ${target.scheme} in IP resolver`,
          metadata: new metadata_12.Metadata()
        };
        return;
      }
      const pathList = target.path.split(",");
      for (const path2 of pathList) {
        const hostPort = (0, uri_parser_12.splitHostPort)(path2);
        if (hostPort === null) {
          this.error = {
            code: constants_12.Status.UNAVAILABLE,
            details: `Failed to parse ${target.scheme} address ${path2}`,
            metadata: new metadata_12.Metadata()
          };
          return;
        }
        if (target.scheme === IPV4_SCHEME && !(0, net_12.isIPv4)(hostPort.host) || target.scheme === IPV6_SCHEME && !(0, net_12.isIPv6)(hostPort.host)) {
          this.error = {
            code: constants_12.Status.UNAVAILABLE,
            details: `Failed to parse ${target.scheme} address ${path2}`,
            metadata: new metadata_12.Metadata()
          };
          return;
        }
        addresses.push({
          host: hostPort.host,
          port: (_a = hostPort.port) !== null && _a !== void 0 ? _a : DEFAULT_PORT2
        });
      }
      this.endpoints = addresses.map((address) => ({ addresses: [address] }));
      trace2("Parsed " + target.scheme + " address list " + addresses);
    }
    updateResolution() {
      if (!this.hasReturnedResult) {
        this.hasReturnedResult = true;
        process.nextTick(() => {
          if (this.error) {
            this.listener.onError(this.error);
          } else {
            this.listener.onSuccessfulResolution(this.endpoints, null, null, null, {});
          }
        });
      }
    }
    destroy() {
      this.hasReturnedResult = false;
    }
    static getDefaultAuthority(target) {
      return target.path.split(",")[0];
    }
  }
  function setup() {
    (0, resolver_12.registerResolver)(IPV4_SCHEME, IpResolver);
    (0, resolver_12.registerResolver)(IPV6_SCHEME, IpResolver);
  }
  resolverIp.setup = setup;
  return resolverIp;
}
var loadBalancerRoundRobin = {};
var hasRequiredLoadBalancerRoundRobin;
function requireLoadBalancerRoundRobin() {
  if (hasRequiredLoadBalancerRoundRobin) return loadBalancerRoundRobin;
  hasRequiredLoadBalancerRoundRobin = 1;
  Object.defineProperty(loadBalancerRoundRobin, "__esModule", { value: true });
  loadBalancerRoundRobin.setup = loadBalancerRoundRobin.RoundRobinLoadBalancer = void 0;
  const load_balancer_12 = requireLoadBalancer();
  const connectivity_state_12 = connectivityState;
  const picker_12 = picker;
  const logging2 = logging$9;
  const constants_12 = constants;
  const subchannel_address_12 = subchannelAddress;
  const load_balancer_pick_first_1 = requireLoadBalancerPickFirst();
  const TRACER_NAME2 = "round_robin";
  function trace2(text) {
    logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, text);
  }
  const TYPE_NAME = "round_robin";
  class RoundRobinLoadBalancingConfig {
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    constructor() {
    }
    toJsonObject() {
      return {
        [TYPE_NAME]: {}
      };
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static createFromJson(obj) {
      return new RoundRobinLoadBalancingConfig();
    }
  }
  class RoundRobinPicker {
    constructor(children, nextIndex = 0) {
      this.children = children;
      this.nextIndex = nextIndex;
    }
    pick(pickArgs) {
      const childPicker = this.children[this.nextIndex].picker;
      this.nextIndex = (this.nextIndex + 1) % this.children.length;
      return childPicker.pick(pickArgs);
    }
    /**
     * Check what the next subchannel returned would be. Used by the load
     * balancer implementation to preserve this part of the picker state if
     * possible when a subchannel connects or disconnects.
     */
    peekNextEndpoint() {
      return this.children[this.nextIndex].endpoint;
    }
  }
  class RoundRobinLoadBalancer {
    constructor(channelControlHelper, credentials, options) {
      this.channelControlHelper = channelControlHelper;
      this.credentials = credentials;
      this.options = options;
      this.children = [];
      this.currentState = connectivity_state_12.ConnectivityState.IDLE;
      this.currentReadyPicker = null;
      this.updatesPaused = false;
      this.lastError = null;
      this.childChannelControlHelper = (0, load_balancer_12.createChildChannelControlHelper)(channelControlHelper, {
        updateState: (connectivityState2, picker2) => {
          if (this.currentState === connectivity_state_12.ConnectivityState.READY && connectivityState2 !== connectivity_state_12.ConnectivityState.READY) {
            this.channelControlHelper.requestReresolution();
          }
          this.calculateAndUpdateState();
        }
      });
    }
    countChildrenWithState(state) {
      return this.children.filter((child) => child.getConnectivityState() === state).length;
    }
    calculateAndUpdateState() {
      if (this.updatesPaused) {
        return;
      }
      if (this.countChildrenWithState(connectivity_state_12.ConnectivityState.READY) > 0) {
        const readyChildren = this.children.filter((child) => child.getConnectivityState() === connectivity_state_12.ConnectivityState.READY);
        let index = 0;
        if (this.currentReadyPicker !== null) {
          const nextPickedEndpoint = this.currentReadyPicker.peekNextEndpoint();
          index = readyChildren.findIndex((child) => (0, subchannel_address_12.endpointEqual)(child.getEndpoint(), nextPickedEndpoint));
          if (index < 0) {
            index = 0;
          }
        }
        this.updateState(connectivity_state_12.ConnectivityState.READY, new RoundRobinPicker(readyChildren.map((child) => ({
          endpoint: child.getEndpoint(),
          picker: child.getPicker()
        })), index));
      } else if (this.countChildrenWithState(connectivity_state_12.ConnectivityState.CONNECTING) > 0) {
        this.updateState(connectivity_state_12.ConnectivityState.CONNECTING, new picker_12.QueuePicker(this));
      } else if (this.countChildrenWithState(connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE) > 0) {
        this.updateState(connectivity_state_12.ConnectivityState.TRANSIENT_FAILURE, new picker_12.UnavailablePicker({
          details: `No connection established. Last error: ${this.lastError}`
        }));
      } else {
        this.updateState(connectivity_state_12.ConnectivityState.IDLE, new picker_12.QueuePicker(this));
      }
      for (const child of this.children) {
        if (child.getConnectivityState() === connectivity_state_12.ConnectivityState.IDLE) {
          child.exitIdle();
        }
      }
    }
    updateState(newState, picker2) {
      trace2(connectivity_state_12.ConnectivityState[this.currentState] + " -> " + connectivity_state_12.ConnectivityState[newState]);
      if (newState === connectivity_state_12.ConnectivityState.READY) {
        this.currentReadyPicker = picker2;
      } else {
        this.currentReadyPicker = null;
      }
      this.currentState = newState;
      this.channelControlHelper.updateState(newState, picker2);
    }
    resetSubchannelList() {
      for (const child of this.children) {
        child.destroy();
      }
    }
    updateAddressList(endpointList, lbConfig) {
      this.resetSubchannelList();
      trace2("Connect to endpoint list " + endpointList.map(subchannel_address_12.endpointToString));
      this.updatesPaused = true;
      this.children = endpointList.map((endpoint) => new load_balancer_pick_first_1.LeafLoadBalancer(endpoint, this.childChannelControlHelper, this.credentials, this.options));
      for (const child of this.children) {
        child.startConnecting();
      }
      this.updatesPaused = false;
      this.calculateAndUpdateState();
    }
    exitIdle() {
    }
    resetBackoff() {
    }
    destroy() {
      this.resetSubchannelList();
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  loadBalancerRoundRobin.RoundRobinLoadBalancer = RoundRobinLoadBalancer;
  function setup() {
    (0, load_balancer_12.registerLoadBalancerType)(TYPE_NAME, RoundRobinLoadBalancer, RoundRobinLoadBalancingConfig);
  }
  loadBalancerRoundRobin.setup = setup;
  return loadBalancerRoundRobin;
}
var loadBalancerOutlierDetection = {};
var hasRequiredLoadBalancerOutlierDetection;
function requireLoadBalancerOutlierDetection() {
  if (hasRequiredLoadBalancerOutlierDetection) return loadBalancerOutlierDetection;
  hasRequiredLoadBalancerOutlierDetection = 1;
  var _a;
  Object.defineProperty(loadBalancerOutlierDetection, "__esModule", { value: true });
  loadBalancerOutlierDetection.setup = loadBalancerOutlierDetection.OutlierDetectionLoadBalancer = loadBalancerOutlierDetection.OutlierDetectionLoadBalancingConfig = void 0;
  const connectivity_state_12 = connectivityState;
  const constants_12 = constants;
  const duration_1 = requireDuration();
  const experimental_1 = requireExperimental();
  const load_balancer_12 = requireLoadBalancer();
  const load_balancer_child_handler_12 = requireLoadBalancerChildHandler();
  const picker_12 = picker;
  const subchannel_address_12 = subchannelAddress;
  const subchannel_interface_1 = subchannelInterface;
  const logging2 = logging$9;
  const TRACER_NAME2 = "outlier_detection";
  function trace2(text) {
    logging2.trace(constants_12.LogVerbosity.DEBUG, TRACER_NAME2, text);
  }
  const TYPE_NAME = "outlier_detection";
  const OUTLIER_DETECTION_ENABLED = ((_a = process.env.GRPC_EXPERIMENTAL_ENABLE_OUTLIER_DETECTION) !== null && _a !== void 0 ? _a : "true") === "true";
  const defaultSuccessRateEjectionConfig = {
    stdev_factor: 1900,
    enforcement_percentage: 100,
    minimum_hosts: 5,
    request_volume: 100
  };
  const defaultFailurePercentageEjectionConfig = {
    threshold: 85,
    enforcement_percentage: 100,
    minimum_hosts: 5,
    request_volume: 50
  };
  function validateFieldType(obj, fieldName, expectedType, objectName) {
    if (fieldName in obj && obj[fieldName] !== void 0 && typeof obj[fieldName] !== expectedType) {
      const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
      throw new Error(`outlier detection config ${fullFieldName} parse error: expected ${expectedType}, got ${typeof obj[fieldName]}`);
    }
  }
  function validatePositiveDuration(obj, fieldName, objectName) {
    const fullFieldName = fieldName;
    if (fieldName in obj && obj[fieldName] !== void 0) {
      if (!(0, duration_1.isDuration)(obj[fieldName])) {
        throw new Error(`outlier detection config ${fullFieldName} parse error: expected Duration, got ${typeof obj[fieldName]}`);
      }
      if (!(obj[fieldName].seconds >= 0 && obj[fieldName].seconds <= 315576e6 && obj[fieldName].nanos >= 0 && obj[fieldName].nanos <= 999999999)) {
        throw new Error(`outlier detection config ${fullFieldName} parse error: values out of range for non-negative Duaration`);
      }
    }
  }
  function validatePercentage(obj, fieldName, objectName) {
    const fullFieldName = objectName ? `${objectName}.${fieldName}` : fieldName;
    validateFieldType(obj, fieldName, "number", objectName);
    if (fieldName in obj && obj[fieldName] !== void 0 && !(obj[fieldName] >= 0 && obj[fieldName] <= 100)) {
      throw new Error(`outlier detection config ${fullFieldName} parse error: value out of range for percentage (0-100)`);
    }
  }
  class OutlierDetectionLoadBalancingConfig {
    constructor(intervalMs, baseEjectionTimeMs, maxEjectionTimeMs, maxEjectionPercent, successRateEjection, failurePercentageEjection, childPolicy) {
      this.childPolicy = childPolicy;
      if (childPolicy.getLoadBalancerName() === "pick_first") {
        throw new Error("outlier_detection LB policy cannot have a pick_first child policy");
      }
      this.intervalMs = intervalMs !== null && intervalMs !== void 0 ? intervalMs : 1e4;
      this.baseEjectionTimeMs = baseEjectionTimeMs !== null && baseEjectionTimeMs !== void 0 ? baseEjectionTimeMs : 3e4;
      this.maxEjectionTimeMs = maxEjectionTimeMs !== null && maxEjectionTimeMs !== void 0 ? maxEjectionTimeMs : 3e5;
      this.maxEjectionPercent = maxEjectionPercent !== null && maxEjectionPercent !== void 0 ? maxEjectionPercent : 10;
      this.successRateEjection = successRateEjection ? Object.assign(Object.assign({}, defaultSuccessRateEjectionConfig), successRateEjection) : null;
      this.failurePercentageEjection = failurePercentageEjection ? Object.assign(Object.assign({}, defaultFailurePercentageEjectionConfig), failurePercentageEjection) : null;
    }
    getLoadBalancerName() {
      return TYPE_NAME;
    }
    toJsonObject() {
      var _a2, _b;
      return {
        outlier_detection: {
          interval: (0, duration_1.msToDuration)(this.intervalMs),
          base_ejection_time: (0, duration_1.msToDuration)(this.baseEjectionTimeMs),
          max_ejection_time: (0, duration_1.msToDuration)(this.maxEjectionTimeMs),
          max_ejection_percent: this.maxEjectionPercent,
          success_rate_ejection: (_a2 = this.successRateEjection) !== null && _a2 !== void 0 ? _a2 : void 0,
          failure_percentage_ejection: (_b = this.failurePercentageEjection) !== null && _b !== void 0 ? _b : void 0,
          child_policy: [this.childPolicy.toJsonObject()]
        }
      };
    }
    getIntervalMs() {
      return this.intervalMs;
    }
    getBaseEjectionTimeMs() {
      return this.baseEjectionTimeMs;
    }
    getMaxEjectionTimeMs() {
      return this.maxEjectionTimeMs;
    }
    getMaxEjectionPercent() {
      return this.maxEjectionPercent;
    }
    getSuccessRateEjectionConfig() {
      return this.successRateEjection;
    }
    getFailurePercentageEjectionConfig() {
      return this.failurePercentageEjection;
    }
    getChildPolicy() {
      return this.childPolicy;
    }
    static createFromJson(obj) {
      var _a2;
      validatePositiveDuration(obj, "interval");
      validatePositiveDuration(obj, "base_ejection_time");
      validatePositiveDuration(obj, "max_ejection_time");
      validatePercentage(obj, "max_ejection_percent");
      if ("success_rate_ejection" in obj && obj.success_rate_ejection !== void 0) {
        if (typeof obj.success_rate_ejection !== "object") {
          throw new Error("outlier detection config success_rate_ejection must be an object");
        }
        validateFieldType(obj.success_rate_ejection, "stdev_factor", "number", "success_rate_ejection");
        validatePercentage(obj.success_rate_ejection, "enforcement_percentage", "success_rate_ejection");
        validateFieldType(obj.success_rate_ejection, "minimum_hosts", "number", "success_rate_ejection");
        validateFieldType(obj.success_rate_ejection, "request_volume", "number", "success_rate_ejection");
      }
      if ("failure_percentage_ejection" in obj && obj.failure_percentage_ejection !== void 0) {
        if (typeof obj.failure_percentage_ejection !== "object") {
          throw new Error("outlier detection config failure_percentage_ejection must be an object");
        }
        validatePercentage(obj.failure_percentage_ejection, "threshold", "failure_percentage_ejection");
        validatePercentage(obj.failure_percentage_ejection, "enforcement_percentage", "failure_percentage_ejection");
        validateFieldType(obj.failure_percentage_ejection, "minimum_hosts", "number", "failure_percentage_ejection");
        validateFieldType(obj.failure_percentage_ejection, "request_volume", "number", "failure_percentage_ejection");
      }
      if (!("child_policy" in obj) || !Array.isArray(obj.child_policy)) {
        throw new Error("outlier detection config child_policy must be an array");
      }
      const childPolicy = (0, load_balancer_12.selectLbConfigFromList)(obj.child_policy);
      if (!childPolicy) {
        throw new Error("outlier detection config child_policy: no valid recognized policy found");
      }
      return new OutlierDetectionLoadBalancingConfig(obj.interval ? (0, duration_1.durationToMs)(obj.interval) : null, obj.base_ejection_time ? (0, duration_1.durationToMs)(obj.base_ejection_time) : null, obj.max_ejection_time ? (0, duration_1.durationToMs)(obj.max_ejection_time) : null, (_a2 = obj.max_ejection_percent) !== null && _a2 !== void 0 ? _a2 : null, obj.success_rate_ejection, obj.failure_percentage_ejection, childPolicy);
    }
  }
  loadBalancerOutlierDetection.OutlierDetectionLoadBalancingConfig = OutlierDetectionLoadBalancingConfig;
  class OutlierDetectionSubchannelWrapper extends subchannel_interface_1.BaseSubchannelWrapper {
    constructor(childSubchannel, mapEntry) {
      super(childSubchannel);
      this.mapEntry = mapEntry;
      this.refCount = 0;
    }
    ref() {
      this.child.ref();
      this.refCount += 1;
    }
    unref() {
      this.child.unref();
      this.refCount -= 1;
      if (this.refCount <= 0) {
        if (this.mapEntry) {
          const index = this.mapEntry.subchannelWrappers.indexOf(this);
          if (index >= 0) {
            this.mapEntry.subchannelWrappers.splice(index, 1);
          }
        }
      }
    }
    eject() {
      this.setHealthy(false);
    }
    uneject() {
      this.setHealthy(true);
    }
    getMapEntry() {
      return this.mapEntry;
    }
    getWrappedSubchannel() {
      return this.child;
    }
  }
  function createEmptyBucket() {
    return {
      success: 0,
      failure: 0
    };
  }
  class CallCounter {
    constructor() {
      this.activeBucket = createEmptyBucket();
      this.inactiveBucket = createEmptyBucket();
    }
    addSuccess() {
      this.activeBucket.success += 1;
    }
    addFailure() {
      this.activeBucket.failure += 1;
    }
    switchBuckets() {
      this.inactiveBucket = this.activeBucket;
      this.activeBucket = createEmptyBucket();
    }
    getLastSuccesses() {
      return this.inactiveBucket.success;
    }
    getLastFailures() {
      return this.inactiveBucket.failure;
    }
  }
  class OutlierDetectionPicker {
    constructor(wrappedPicker, countCalls) {
      this.wrappedPicker = wrappedPicker;
      this.countCalls = countCalls;
    }
    pick(pickArgs) {
      const wrappedPick = this.wrappedPicker.pick(pickArgs);
      if (wrappedPick.pickResultType === picker_12.PickResultType.COMPLETE) {
        const subchannelWrapper = wrappedPick.subchannel;
        const mapEntry = subchannelWrapper.getMapEntry();
        if (mapEntry) {
          let onCallEnded = wrappedPick.onCallEnded;
          if (this.countCalls) {
            onCallEnded = (statusCode) => {
              var _a2;
              if (statusCode === constants_12.Status.OK) {
                mapEntry.counter.addSuccess();
              } else {
                mapEntry.counter.addFailure();
              }
              (_a2 = wrappedPick.onCallEnded) === null || _a2 === void 0 ? void 0 : _a2.call(wrappedPick, statusCode);
            };
          }
          return Object.assign(Object.assign({}, wrappedPick), { subchannel: subchannelWrapper.getWrappedSubchannel(), onCallEnded });
        } else {
          return Object.assign(Object.assign({}, wrappedPick), { subchannel: subchannelWrapper.getWrappedSubchannel() });
        }
      } else {
        return wrappedPick;
      }
    }
  }
  class OutlierDetectionLoadBalancer {
    constructor(channelControlHelper, credentials, options) {
      this.entryMap = new subchannel_address_12.EndpointMap();
      this.latestConfig = null;
      this.timerStartTime = null;
      this.childBalancer = new load_balancer_child_handler_12.ChildLoadBalancerHandler((0, experimental_1.createChildChannelControlHelper)(channelControlHelper, {
        createSubchannel: (subchannelAddress2, subchannelArgs, credentialsOverride) => {
          const originalSubchannel = channelControlHelper.createSubchannel(subchannelAddress2, subchannelArgs, credentialsOverride);
          const mapEntry = this.entryMap.getForSubchannelAddress(subchannelAddress2);
          const subchannelWrapper = new OutlierDetectionSubchannelWrapper(originalSubchannel, mapEntry);
          if ((mapEntry === null || mapEntry === void 0 ? void 0 : mapEntry.currentEjectionTimestamp) !== null) {
            subchannelWrapper.eject();
          }
          mapEntry === null || mapEntry === void 0 ? void 0 : mapEntry.subchannelWrappers.push(subchannelWrapper);
          return subchannelWrapper;
        },
        updateState: (connectivityState2, picker2) => {
          if (connectivityState2 === connectivity_state_12.ConnectivityState.READY) {
            channelControlHelper.updateState(connectivityState2, new OutlierDetectionPicker(picker2, this.isCountingEnabled()));
          } else {
            channelControlHelper.updateState(connectivityState2, picker2);
          }
        }
      }), credentials, options);
      this.ejectionTimer = setInterval(() => {
      }, 0);
      clearInterval(this.ejectionTimer);
    }
    isCountingEnabled() {
      return this.latestConfig !== null && (this.latestConfig.getSuccessRateEjectionConfig() !== null || this.latestConfig.getFailurePercentageEjectionConfig() !== null);
    }
    getCurrentEjectionPercent() {
      let ejectionCount = 0;
      for (const mapEntry of this.entryMap.values()) {
        if (mapEntry.currentEjectionTimestamp !== null) {
          ejectionCount += 1;
        }
      }
      return ejectionCount * 100 / this.entryMap.size;
    }
    runSuccessRateCheck(ejectionTimestamp) {
      if (!this.latestConfig) {
        return;
      }
      const successRateConfig = this.latestConfig.getSuccessRateEjectionConfig();
      if (!successRateConfig) {
        return;
      }
      trace2("Running success rate check");
      const targetRequestVolume = successRateConfig.request_volume;
      let addresesWithTargetVolume = 0;
      const successRates = [];
      for (const [endpoint, mapEntry] of this.entryMap.entries()) {
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        trace2("Stats for " + (0, subchannel_address_12.endpointToString)(endpoint) + ": successes=" + successes + " failures=" + failures + " targetRequestVolume=" + targetRequestVolume);
        if (successes + failures >= targetRequestVolume) {
          addresesWithTargetVolume += 1;
          successRates.push(successes / (successes + failures));
        }
      }
      trace2("Found " + addresesWithTargetVolume + " success rate candidates; currentEjectionPercent=" + this.getCurrentEjectionPercent() + " successRates=[" + successRates + "]");
      if (addresesWithTargetVolume < successRateConfig.minimum_hosts) {
        return;
      }
      const successRateMean = successRates.reduce((a, b) => a + b) / successRates.length;
      let successRateDeviationSum = 0;
      for (const rate of successRates) {
        const deviation = rate - successRateMean;
        successRateDeviationSum += deviation * deviation;
      }
      const successRateVariance = successRateDeviationSum / successRates.length;
      const successRateStdev = Math.sqrt(successRateVariance);
      const ejectionThreshold = successRateMean - successRateStdev * (successRateConfig.stdev_factor / 1e3);
      trace2("stdev=" + successRateStdev + " ejectionThreshold=" + ejectionThreshold);
      for (const [address, mapEntry] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
          break;
        }
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        if (successes + failures < targetRequestVolume) {
          continue;
        }
        const successRate = successes / (successes + failures);
        trace2("Checking candidate " + address + " successRate=" + successRate);
        if (successRate < ejectionThreshold) {
          const randomNumber = Math.random() * 100;
          trace2("Candidate " + address + " randomNumber=" + randomNumber + " enforcement_percentage=" + successRateConfig.enforcement_percentage);
          if (randomNumber < successRateConfig.enforcement_percentage) {
            trace2("Ejecting candidate " + address);
            this.eject(mapEntry, ejectionTimestamp);
          }
        }
      }
    }
    runFailurePercentageCheck(ejectionTimestamp) {
      if (!this.latestConfig) {
        return;
      }
      const failurePercentageConfig = this.latestConfig.getFailurePercentageEjectionConfig();
      if (!failurePercentageConfig) {
        return;
      }
      trace2("Running failure percentage check. threshold=" + failurePercentageConfig.threshold + " request volume threshold=" + failurePercentageConfig.request_volume);
      let addressesWithTargetVolume = 0;
      for (const mapEntry of this.entryMap.values()) {
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        if (successes + failures >= failurePercentageConfig.request_volume) {
          addressesWithTargetVolume += 1;
        }
      }
      if (addressesWithTargetVolume < failurePercentageConfig.minimum_hosts) {
        return;
      }
      for (const [address, mapEntry] of this.entryMap.entries()) {
        if (this.getCurrentEjectionPercent() >= this.latestConfig.getMaxEjectionPercent()) {
          break;
        }
        const successes = mapEntry.counter.getLastSuccesses();
        const failures = mapEntry.counter.getLastFailures();
        trace2("Candidate successes=" + successes + " failures=" + failures);
        if (successes + failures < failurePercentageConfig.request_volume) {
          continue;
        }
        const failurePercentage = failures * 100 / (failures + successes);
        if (failurePercentage > failurePercentageConfig.threshold) {
          const randomNumber = Math.random() * 100;
          trace2("Candidate " + address + " randomNumber=" + randomNumber + " enforcement_percentage=" + failurePercentageConfig.enforcement_percentage);
          if (randomNumber < failurePercentageConfig.enforcement_percentage) {
            trace2("Ejecting candidate " + address);
            this.eject(mapEntry, ejectionTimestamp);
          }
        }
      }
    }
    eject(mapEntry, ejectionTimestamp) {
      mapEntry.currentEjectionTimestamp = /* @__PURE__ */ new Date();
      mapEntry.ejectionTimeMultiplier += 1;
      for (const subchannelWrapper of mapEntry.subchannelWrappers) {
        subchannelWrapper.eject();
      }
    }
    uneject(mapEntry) {
      mapEntry.currentEjectionTimestamp = null;
      for (const subchannelWrapper of mapEntry.subchannelWrappers) {
        subchannelWrapper.uneject();
      }
    }
    switchAllBuckets() {
      for (const mapEntry of this.entryMap.values()) {
        mapEntry.counter.switchBuckets();
      }
    }
    startTimer(delayMs) {
      var _a2, _b;
      this.ejectionTimer = setTimeout(() => this.runChecks(), delayMs);
      (_b = (_a2 = this.ejectionTimer).unref) === null || _b === void 0 ? void 0 : _b.call(_a2);
    }
    runChecks() {
      const ejectionTimestamp = /* @__PURE__ */ new Date();
      trace2("Ejection timer running");
      this.switchAllBuckets();
      if (!this.latestConfig) {
        return;
      }
      this.timerStartTime = ejectionTimestamp;
      this.startTimer(this.latestConfig.getIntervalMs());
      this.runSuccessRateCheck(ejectionTimestamp);
      this.runFailurePercentageCheck(ejectionTimestamp);
      for (const [address, mapEntry] of this.entryMap.entries()) {
        if (mapEntry.currentEjectionTimestamp === null) {
          if (mapEntry.ejectionTimeMultiplier > 0) {
            mapEntry.ejectionTimeMultiplier -= 1;
          }
        } else {
          const baseEjectionTimeMs = this.latestConfig.getBaseEjectionTimeMs();
          const maxEjectionTimeMs = this.latestConfig.getMaxEjectionTimeMs();
          const returnTime = new Date(mapEntry.currentEjectionTimestamp.getTime());
          returnTime.setMilliseconds(returnTime.getMilliseconds() + Math.min(baseEjectionTimeMs * mapEntry.ejectionTimeMultiplier, Math.max(baseEjectionTimeMs, maxEjectionTimeMs)));
          if (returnTime < /* @__PURE__ */ new Date()) {
            trace2("Unejecting " + address);
            this.uneject(mapEntry);
          }
        }
      }
    }
    updateAddressList(endpointList, lbConfig, attributes) {
      if (!(lbConfig instanceof OutlierDetectionLoadBalancingConfig)) {
        return;
      }
      for (const endpoint of endpointList) {
        if (!this.entryMap.has(endpoint)) {
          trace2("Adding map entry for " + (0, subchannel_address_12.endpointToString)(endpoint));
          this.entryMap.set(endpoint, {
            counter: new CallCounter(),
            currentEjectionTimestamp: null,
            ejectionTimeMultiplier: 0,
            subchannelWrappers: []
          });
        }
      }
      this.entryMap.deleteMissing(endpointList);
      const childPolicy = lbConfig.getChildPolicy();
      this.childBalancer.updateAddressList(endpointList, childPolicy, attributes);
      if (lbConfig.getSuccessRateEjectionConfig() || lbConfig.getFailurePercentageEjectionConfig()) {
        if (this.timerStartTime) {
          trace2("Previous timer existed. Replacing timer");
          clearTimeout(this.ejectionTimer);
          const remainingDelay = lbConfig.getIntervalMs() - ((/* @__PURE__ */ new Date()).getTime() - this.timerStartTime.getTime());
          this.startTimer(remainingDelay);
        } else {
          trace2("Starting new timer");
          this.timerStartTime = /* @__PURE__ */ new Date();
          this.startTimer(lbConfig.getIntervalMs());
          this.switchAllBuckets();
        }
      } else {
        trace2("Counting disabled. Cancelling timer.");
        this.timerStartTime = null;
        clearTimeout(this.ejectionTimer);
        for (const mapEntry of this.entryMap.values()) {
          this.uneject(mapEntry);
          mapEntry.ejectionTimeMultiplier = 0;
        }
      }
      this.latestConfig = lbConfig;
    }
    exitIdle() {
      this.childBalancer.exitIdle();
    }
    resetBackoff() {
      this.childBalancer.resetBackoff();
    }
    destroy() {
      clearTimeout(this.ejectionTimer);
      this.childBalancer.destroy();
    }
    getTypeName() {
      return TYPE_NAME;
    }
  }
  loadBalancerOutlierDetection.OutlierDetectionLoadBalancer = OutlierDetectionLoadBalancer;
  function setup() {
    if (OUTLIER_DETECTION_ENABLED) {
      (0, experimental_1.registerLoadBalancerType)(TYPE_NAME, OutlierDetectionLoadBalancer, OutlierDetectionLoadBalancingConfig);
    }
  }
  loadBalancerOutlierDetection.setup = setup;
  return loadBalancerOutlierDetection;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.experimental = exports.ServerInterceptingCall = exports.ResponderBuilder = exports.ServerListenerBuilder = exports.addAdminServicesToServer = exports.getChannelzHandlers = exports.getChannelzServiceDefinition = exports.InterceptorConfigurationError = exports.InterceptingCall = exports.RequesterBuilder = exports.ListenerBuilder = exports.StatusBuilder = exports.getClientChannel = exports.ServerCredentials = exports.Server = exports.setLogVerbosity = exports.setLogger = exports.load = exports.loadObject = exports.CallCredentials = exports.ChannelCredentials = exports.waitForClientReady = exports.closeClient = exports.Channel = exports.makeGenericClientConstructor = exports.makeClientConstructor = exports.loadPackageDefinition = exports.Client = exports.compressionAlgorithms = exports.propagate = exports.connectivityState = exports.status = exports.logVerbosity = exports.Metadata = exports.credentials = void 0;
  const call_credentials_12 = callCredentials;
  Object.defineProperty(exports, "CallCredentials", { enumerable: true, get: function() {
    return call_credentials_12.CallCredentials;
  } });
  const channel_1 = requireChannel();
  Object.defineProperty(exports, "Channel", { enumerable: true, get: function() {
    return channel_1.ChannelImplementation;
  } });
  const compression_algorithms_12 = compressionAlgorithms;
  Object.defineProperty(exports, "compressionAlgorithms", { enumerable: true, get: function() {
    return compression_algorithms_12.CompressionAlgorithms;
  } });
  const connectivity_state_12 = connectivityState;
  Object.defineProperty(exports, "connectivityState", { enumerable: true, get: function() {
    return connectivity_state_12.ConnectivityState;
  } });
  const channel_credentials_1 = channelCredentials;
  Object.defineProperty(exports, "ChannelCredentials", { enumerable: true, get: function() {
    return channel_credentials_1.ChannelCredentials;
  } });
  const client_1 = requireClient();
  Object.defineProperty(exports, "Client", { enumerable: true, get: function() {
    return client_1.Client;
  } });
  const constants_12 = constants;
  Object.defineProperty(exports, "logVerbosity", { enumerable: true, get: function() {
    return constants_12.LogVerbosity;
  } });
  Object.defineProperty(exports, "status", { enumerable: true, get: function() {
    return constants_12.Status;
  } });
  Object.defineProperty(exports, "propagate", { enumerable: true, get: function() {
    return constants_12.Propagate;
  } });
  const logging2 = logging$9;
  const make_client_1 = requireMakeClient();
  Object.defineProperty(exports, "loadPackageDefinition", { enumerable: true, get: function() {
    return make_client_1.loadPackageDefinition;
  } });
  Object.defineProperty(exports, "makeClientConstructor", { enumerable: true, get: function() {
    return make_client_1.makeClientConstructor;
  } });
  Object.defineProperty(exports, "makeGenericClientConstructor", { enumerable: true, get: function() {
    return make_client_1.makeClientConstructor;
  } });
  const metadata_12 = metadata;
  Object.defineProperty(exports, "Metadata", { enumerable: true, get: function() {
    return metadata_12.Metadata;
  } });
  const server_1 = server;
  Object.defineProperty(exports, "Server", { enumerable: true, get: function() {
    return server_1.Server;
  } });
  const server_credentials_12 = serverCredentials;
  Object.defineProperty(exports, "ServerCredentials", { enumerable: true, get: function() {
    return server_credentials_12.ServerCredentials;
  } });
  const status_builder_1 = statusBuilder;
  Object.defineProperty(exports, "StatusBuilder", { enumerable: true, get: function() {
    return status_builder_1.StatusBuilder;
  } });
  exports.credentials = {
    /**
     * Combine a ChannelCredentials with any number of CallCredentials into a
     * single ChannelCredentials object.
     * @param channelCredentials The ChannelCredentials object.
     * @param callCredentials Any number of CallCredentials objects.
     * @return The resulting ChannelCredentials object.
     */
    combineChannelCredentials: (channelCredentials2, ...callCredentials2) => {
      return callCredentials2.reduce((acc, other) => acc.compose(other), channelCredentials2);
    },
    /**
     * Combine any number of CallCredentials into a single CallCredentials
     * object.
     * @param first The first CallCredentials object.
     * @param additional Any number of additional CallCredentials objects.
     * @return The resulting CallCredentials object.
     */
    combineCallCredentials: (first, ...additional) => {
      return additional.reduce((acc, other) => acc.compose(other), first);
    },
    // from channel-credentials.ts
    createInsecure: channel_credentials_1.ChannelCredentials.createInsecure,
    createSsl: channel_credentials_1.ChannelCredentials.createSsl,
    createFromSecureContext: channel_credentials_1.ChannelCredentials.createFromSecureContext,
    // from call-credentials.ts
    createFromMetadataGenerator: call_credentials_12.CallCredentials.createFromMetadataGenerator,
    createFromGoogleCredential: call_credentials_12.CallCredentials.createFromGoogleCredential,
    createEmpty: call_credentials_12.CallCredentials.createEmpty
  };
  const closeClient = (client2) => client2.close();
  exports.closeClient = closeClient;
  const waitForClientReady = (client2, deadline2, callback) => client2.waitForReady(deadline2, callback);
  exports.waitForClientReady = waitForClientReady;
  const loadObject = (value, options) => {
    throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  exports.loadObject = loadObject;
  const load = (filename, format, options) => {
    throw new Error("Not available in this library. Use @grpc/proto-loader and loadPackageDefinition instead");
  };
  exports.load = load;
  const setLogger = (logger) => {
    logging2.setLogger(logger);
  };
  exports.setLogger = setLogger;
  const setLogVerbosity = (verbosity) => {
    logging2.setLoggerVerbosity(verbosity);
  };
  exports.setLogVerbosity = setLogVerbosity;
  const getClientChannel = (client2) => {
    return client_1.Client.prototype.getChannel.call(client2);
  };
  exports.getClientChannel = getClientChannel;
  var client_interceptors_1 = clientInterceptors;
  Object.defineProperty(exports, "ListenerBuilder", { enumerable: true, get: function() {
    return client_interceptors_1.ListenerBuilder;
  } });
  Object.defineProperty(exports, "RequesterBuilder", { enumerable: true, get: function() {
    return client_interceptors_1.RequesterBuilder;
  } });
  Object.defineProperty(exports, "InterceptingCall", { enumerable: true, get: function() {
    return client_interceptors_1.InterceptingCall;
  } });
  Object.defineProperty(exports, "InterceptorConfigurationError", { enumerable: true, get: function() {
    return client_interceptors_1.InterceptorConfigurationError;
  } });
  var channelz_12 = requireChannelz();
  Object.defineProperty(exports, "getChannelzServiceDefinition", { enumerable: true, get: function() {
    return channelz_12.getChannelzServiceDefinition;
  } });
  Object.defineProperty(exports, "getChannelzHandlers", { enumerable: true, get: function() {
    return channelz_12.getChannelzHandlers;
  } });
  var admin_1 = admin;
  Object.defineProperty(exports, "addAdminServicesToServer", { enumerable: true, get: function() {
    return admin_1.addAdminServicesToServer;
  } });
  var server_interceptors_12 = serverInterceptors;
  Object.defineProperty(exports, "ServerListenerBuilder", { enumerable: true, get: function() {
    return server_interceptors_12.ServerListenerBuilder;
  } });
  Object.defineProperty(exports, "ResponderBuilder", { enumerable: true, get: function() {
    return server_interceptors_12.ResponderBuilder;
  } });
  Object.defineProperty(exports, "ServerInterceptingCall", { enumerable: true, get: function() {
    return server_interceptors_12.ServerInterceptingCall;
  } });
  const experimental2 = requireExperimental();
  exports.experimental = experimental2;
  const resolver_dns = requireResolverDns();
  const resolver_uds = requireResolverUds();
  const resolver_ip = requireResolverIp();
  const load_balancer_pick_first = requireLoadBalancerPickFirst();
  const load_balancer_round_robin = requireLoadBalancerRoundRobin();
  const load_balancer_outlier_detection = requireLoadBalancerOutlierDetection();
  const channelz2 = requireChannelz();
  (() => {
    resolver_dns.setup();
    resolver_uds.setup();
    resolver_ip.setup();
    load_balancer_pick_first.setup();
    load_balancer_round_robin.setup();
    load_balancer_outlier_detection.setup();
    channelz2.setup();
  })();
})(src$2);
function varint64read() {
  let lowBits = 0;
  let highBits = 0;
  for (let shift = 0; shift < 28; shift += 7) {
    let b = this.buf[this.pos++];
    lowBits |= (b & 127) << shift;
    if ((b & 128) == 0) {
      this.assertBounds();
      return [lowBits, highBits];
    }
  }
  let middleByte = this.buf[this.pos++];
  lowBits |= (middleByte & 15) << 28;
  highBits = (middleByte & 112) >> 4;
  if ((middleByte & 128) == 0) {
    this.assertBounds();
    return [lowBits, highBits];
  }
  for (let shift = 3; shift <= 31; shift += 7) {
    let b = this.buf[this.pos++];
    highBits |= (b & 127) << shift;
    if ((b & 128) == 0) {
      this.assertBounds();
      return [lowBits, highBits];
    }
  }
  throw new Error("invalid varint");
}
function varint64write(lo, hi, bytes) {
  for (let i = 0; i < 28; i = i + 7) {
    const shift = lo >>> i;
    const hasNext = !(shift >>> 7 == 0 && hi == 0);
    const byte = (hasNext ? shift | 128 : shift) & 255;
    bytes.push(byte);
    if (!hasNext) {
      return;
    }
  }
  const splitBits = lo >>> 28 & 15 | (hi & 7) << 4;
  const hasMoreBits = !(hi >> 3 == 0);
  bytes.push((hasMoreBits ? splitBits | 128 : splitBits) & 255);
  if (!hasMoreBits) {
    return;
  }
  for (let i = 3; i < 31; i = i + 7) {
    const shift = hi >>> i;
    const hasNext = !(shift >>> 7 == 0);
    const byte = (hasNext ? shift | 128 : shift) & 255;
    bytes.push(byte);
    if (!hasNext) {
      return;
    }
  }
  bytes.push(hi >>> 31 & 1);
}
const TWO_PWR_32_DBL = 4294967296;
function int64FromString(dec) {
  const minus = dec[0] === "-";
  if (minus) {
    dec = dec.slice(1);
  }
  const base = 1e6;
  let lowBits = 0;
  let highBits = 0;
  function add1e6digit(begin, end) {
    const digit1e6 = Number(dec.slice(begin, end));
    highBits *= base;
    lowBits = lowBits * base + digit1e6;
    if (lowBits >= TWO_PWR_32_DBL) {
      highBits = highBits + (lowBits / TWO_PWR_32_DBL | 0);
      lowBits = lowBits % TWO_PWR_32_DBL;
    }
  }
  add1e6digit(-24, -18);
  add1e6digit(-18, -12);
  add1e6digit(-12, -6);
  add1e6digit(-6);
  return minus ? negate(lowBits, highBits) : newBits(lowBits, highBits);
}
function int64ToString(lo, hi) {
  let bits = newBits(lo, hi);
  const negative = bits.hi & 2147483648;
  if (negative) {
    bits = negate(bits.lo, bits.hi);
  }
  const result = uInt64ToString(bits.lo, bits.hi);
  return negative ? "-" + result : result;
}
function uInt64ToString(lo, hi) {
  ({ lo, hi } = toUnsigned(lo, hi));
  if (hi <= 2097151) {
    return String(TWO_PWR_32_DBL * hi + lo);
  }
  const low = lo & 16777215;
  const mid = (lo >>> 24 | hi << 8) & 16777215;
  const high = hi >> 16 & 65535;
  let digitA = low + mid * 6777216 + high * 6710656;
  let digitB = mid + high * 8147497;
  let digitC = high * 2;
  const base = 1e7;
  if (digitA >= base) {
    digitB += Math.floor(digitA / base);
    digitA %= base;
  }
  if (digitB >= base) {
    digitC += Math.floor(digitB / base);
    digitB %= base;
  }
  return digitC.toString() + decimalFrom1e7WithLeadingZeros(digitB) + decimalFrom1e7WithLeadingZeros(digitA);
}
function toUnsigned(lo, hi) {
  return { lo: lo >>> 0, hi: hi >>> 0 };
}
function newBits(lo, hi) {
  return { lo: lo | 0, hi: hi | 0 };
}
function negate(lowBits, highBits) {
  highBits = ~highBits;
  if (lowBits) {
    lowBits = ~lowBits + 1;
  } else {
    highBits += 1;
  }
  return newBits(lowBits, highBits);
}
const decimalFrom1e7WithLeadingZeros = (digit1e7) => {
  const partial = String(digit1e7);
  return "0000000".slice(partial.length) + partial;
};
function varint32write(value, bytes) {
  if (value >= 0) {
    while (value > 127) {
      bytes.push(value & 127 | 128);
      value = value >>> 7;
    }
    bytes.push(value);
  } else {
    for (let i = 0; i < 9; i++) {
      bytes.push(value & 127 | 128);
      value = value >> 7;
    }
    bytes.push(1);
  }
}
function varint32read() {
  let b = this.buf[this.pos++];
  let result = b & 127;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 127) << 7;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 127) << 14;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 127) << 21;
  if ((b & 128) == 0) {
    this.assertBounds();
    return result;
  }
  b = this.buf[this.pos++];
  result |= (b & 15) << 28;
  for (let readBytes = 5; (b & 128) !== 0 && readBytes < 10; readBytes++)
    b = this.buf[this.pos++];
  if ((b & 128) != 0)
    throw new Error("invalid varint");
  this.assertBounds();
  return result >>> 0;
}
const protoInt64 = /* @__PURE__ */ makeInt64Support();
function makeInt64Support() {
  const dv = new DataView(new ArrayBuffer(8));
  const ok = typeof BigInt === "function" && typeof dv.getBigInt64 === "function" && typeof dv.getBigUint64 === "function" && typeof dv.setBigInt64 === "function" && typeof dv.setBigUint64 === "function" && (typeof process != "object" || typeof process.env != "object" || process.env.BUF_BIGINT_DISABLE !== "1");
  if (ok) {
    const MIN = BigInt("-9223372036854775808"), MAX = BigInt("9223372036854775807"), UMIN = BigInt("0"), UMAX = BigInt("18446744073709551615");
    return {
      zero: BigInt(0),
      supported: true,
      parse(value) {
        const bi = typeof value == "bigint" ? value : BigInt(value);
        if (bi > MAX || bi < MIN) {
          throw new Error(`invalid int64: ${value}`);
        }
        return bi;
      },
      uParse(value) {
        const bi = typeof value == "bigint" ? value : BigInt(value);
        if (bi > UMAX || bi < UMIN) {
          throw new Error(`invalid uint64: ${value}`);
        }
        return bi;
      },
      enc(value) {
        dv.setBigInt64(0, this.parse(value), true);
        return {
          lo: dv.getInt32(0, true),
          hi: dv.getInt32(4, true)
        };
      },
      uEnc(value) {
        dv.setBigInt64(0, this.uParse(value), true);
        return {
          lo: dv.getInt32(0, true),
          hi: dv.getInt32(4, true)
        };
      },
      dec(lo, hi) {
        dv.setInt32(0, lo, true);
        dv.setInt32(4, hi, true);
        return dv.getBigInt64(0, true);
      },
      uDec(lo, hi) {
        dv.setInt32(0, lo, true);
        dv.setInt32(4, hi, true);
        return dv.getBigUint64(0, true);
      }
    };
  }
  return {
    zero: "0",
    supported: false,
    parse(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertInt64String(value);
      return value;
    },
    uParse(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertUInt64String(value);
      return value;
    },
    enc(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertInt64String(value);
      return int64FromString(value);
    },
    uEnc(value) {
      if (typeof value != "string") {
        value = value.toString();
      }
      assertUInt64String(value);
      return int64FromString(value);
    },
    dec(lo, hi) {
      return int64ToString(lo, hi);
    },
    uDec(lo, hi) {
      return uInt64ToString(lo, hi);
    }
  };
}
function assertInt64String(value) {
  if (!/^-?[0-9]+$/.test(value)) {
    throw new Error("invalid int64: " + value);
  }
}
function assertUInt64String(value) {
  if (!/^[0-9]+$/.test(value)) {
    throw new Error("invalid uint64: " + value);
  }
}
const symbol = Symbol.for("@bufbuild/protobuf/text-encoding");
function getTextEncoding() {
  if (globalThis[symbol] == void 0) {
    const te = new globalThis.TextEncoder();
    const td = new globalThis.TextDecoder();
    globalThis[symbol] = {
      encodeUtf8(text) {
        return te.encode(text);
      },
      decodeUtf8(bytes) {
        return td.decode(bytes);
      },
      checkUtf8(text) {
        try {
          encodeURIComponent(text);
          return true;
        } catch (e) {
          return false;
        }
      }
    };
  }
  return globalThis[symbol];
}
var WireType;
(function(WireType2) {
  WireType2[WireType2["Varint"] = 0] = "Varint";
  WireType2[WireType2["Bit64"] = 1] = "Bit64";
  WireType2[WireType2["LengthDelimited"] = 2] = "LengthDelimited";
  WireType2[WireType2["StartGroup"] = 3] = "StartGroup";
  WireType2[WireType2["EndGroup"] = 4] = "EndGroup";
  WireType2[WireType2["Bit32"] = 5] = "Bit32";
})(WireType || (WireType = {}));
const FLOAT32_MAX = 34028234663852886e22;
const FLOAT32_MIN = -34028234663852886e22;
const UINT32_MAX = 4294967295;
const INT32_MAX = 2147483647;
const INT32_MIN = -2147483648;
class BinaryWriter {
  constructor(encodeUtf8 = getTextEncoding().encodeUtf8) {
    this.encodeUtf8 = encodeUtf8;
    this.stack = [];
    this.chunks = [];
    this.buf = [];
  }
  /**
   * Return all bytes written and reset this writer.
   */
  finish() {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    let len = 0;
    for (let i = 0; i < this.chunks.length; i++)
      len += this.chunks[i].length;
    let bytes = new Uint8Array(len);
    let offset = 0;
    for (let i = 0; i < this.chunks.length; i++) {
      bytes.set(this.chunks[i], offset);
      offset += this.chunks[i].length;
    }
    this.chunks = [];
    return bytes;
  }
  /**
   * Start a new fork for length-delimited data like a message
   * or a packed repeated field.
   *
   * Must be joined later with `join()`.
   */
  fork() {
    this.stack.push({ chunks: this.chunks, buf: this.buf });
    this.chunks = [];
    this.buf = [];
    return this;
  }
  /**
   * Join the last fork. Write its length and bytes, then
   * return to the previous state.
   */
  join() {
    let chunk = this.finish();
    let prev = this.stack.pop();
    if (!prev)
      throw new Error("invalid state, fork stack empty");
    this.chunks = prev.chunks;
    this.buf = prev.buf;
    this.uint32(chunk.byteLength);
    return this.raw(chunk);
  }
  /**
   * Writes a tag (field number and wire type).
   *
   * Equivalent to `uint32( (fieldNo << 3 | type) >>> 0 )`.
   *
   * Generated code should compute the tag ahead of time and call `uint32()`.
   */
  tag(fieldNo, type2) {
    return this.uint32((fieldNo << 3 | type2) >>> 0);
  }
  /**
   * Write a chunk of raw bytes.
   */
  raw(chunk) {
    if (this.buf.length) {
      this.chunks.push(new Uint8Array(this.buf));
      this.buf = [];
    }
    this.chunks.push(chunk);
    return this;
  }
  /**
   * Write a `uint32` value, an unsigned 32 bit varint.
   */
  uint32(value) {
    assertUInt32(value);
    while (value > 127) {
      this.buf.push(value & 127 | 128);
      value = value >>> 7;
    }
    this.buf.push(value);
    return this;
  }
  /**
   * Write a `int32` value, a signed 32 bit varint.
   */
  int32(value) {
    assertInt32(value);
    varint32write(value, this.buf);
    return this;
  }
  /**
   * Write a `bool` value, a variant.
   */
  bool(value) {
    this.buf.push(value ? 1 : 0);
    return this;
  }
  /**
   * Write a `bytes` value, length-delimited arbitrary data.
   */
  bytes(value) {
    this.uint32(value.byteLength);
    return this.raw(value);
  }
  /**
   * Write a `string` value, length-delimited data converted to UTF-8 text.
   */
  string(value) {
    let chunk = this.encodeUtf8(value);
    this.uint32(chunk.byteLength);
    return this.raw(chunk);
  }
  /**
   * Write a `float` value, 32-bit floating point number.
   */
  float(value) {
    assertFloat32(value);
    let chunk = new Uint8Array(4);
    new DataView(chunk.buffer).setFloat32(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `double` value, a 64-bit floating point number.
   */
  double(value) {
    let chunk = new Uint8Array(8);
    new DataView(chunk.buffer).setFloat64(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `fixed32` value, an unsigned, fixed-length 32-bit integer.
   */
  fixed32(value) {
    assertUInt32(value);
    let chunk = new Uint8Array(4);
    new DataView(chunk.buffer).setUint32(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `sfixed32` value, a signed, fixed-length 32-bit integer.
   */
  sfixed32(value) {
    assertInt32(value);
    let chunk = new Uint8Array(4);
    new DataView(chunk.buffer).setInt32(0, value, true);
    return this.raw(chunk);
  }
  /**
   * Write a `sint32` value, a signed, zigzag-encoded 32-bit varint.
   */
  sint32(value) {
    assertInt32(value);
    value = (value << 1 ^ value >> 31) >>> 0;
    varint32write(value, this.buf);
    return this;
  }
  /**
   * Write a `fixed64` value, a signed, fixed-length 64-bit integer.
   */
  sfixed64(value) {
    let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.enc(value);
    view.setInt32(0, tc.lo, true);
    view.setInt32(4, tc.hi, true);
    return this.raw(chunk);
  }
  /**
   * Write a `fixed64` value, an unsigned, fixed-length 64 bit integer.
   */
  fixed64(value) {
    let chunk = new Uint8Array(8), view = new DataView(chunk.buffer), tc = protoInt64.uEnc(value);
    view.setInt32(0, tc.lo, true);
    view.setInt32(4, tc.hi, true);
    return this.raw(chunk);
  }
  /**
   * Write a `int64` value, a signed 64-bit varint.
   */
  int64(value) {
    let tc = protoInt64.enc(value);
    varint64write(tc.lo, tc.hi, this.buf);
    return this;
  }
  /**
   * Write a `sint64` value, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64(value) {
    let tc = protoInt64.enc(value), sign = tc.hi >> 31, lo = tc.lo << 1 ^ sign, hi = (tc.hi << 1 | tc.lo >>> 31) ^ sign;
    varint64write(lo, hi, this.buf);
    return this;
  }
  /**
   * Write a `uint64` value, an unsigned 64-bit varint.
   */
  uint64(value) {
    let tc = protoInt64.uEnc(value);
    varint64write(tc.lo, tc.hi, this.buf);
    return this;
  }
}
class BinaryReader {
  constructor(buf, decodeUtf8 = getTextEncoding().decodeUtf8) {
    this.decodeUtf8 = decodeUtf8;
    this.varint64 = varint64read;
    this.uint32 = varint32read;
    this.buf = buf;
    this.len = buf.length;
    this.pos = 0;
    this.view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  /**
   * Reads a tag - field number and wire type.
   */
  tag() {
    let tag = this.uint32(), fieldNo = tag >>> 3, wireType = tag & 7;
    if (fieldNo <= 0 || wireType < 0 || wireType > 5)
      throw new Error("illegal tag: field no " + fieldNo + " wire type " + wireType);
    return [fieldNo, wireType];
  }
  /**
   * Skip one element and return the skipped data.
   *
   * When skipping StartGroup, provide the tags field number to check for
   * matching field number in the EndGroup tag.
   */
  skip(wireType, fieldNo) {
    let start = this.pos;
    switch (wireType) {
      case WireType.Varint:
        while (this.buf[this.pos++] & 128) {
        }
        break;
      case WireType.Bit64:
        this.pos += 4;
      case WireType.Bit32:
        this.pos += 4;
        break;
      case WireType.LengthDelimited:
        let len = this.uint32();
        this.pos += len;
        break;
      case WireType.StartGroup:
        for (; ; ) {
          const [fn, wt] = this.tag();
          if (wt === WireType.EndGroup) {
            if (fieldNo !== void 0 && fn !== fieldNo) {
              throw new Error("invalid end group tag");
            }
            break;
          }
          this.skip(wt, fn);
        }
        break;
      default:
        throw new Error("cant skip wire type " + wireType);
    }
    this.assertBounds();
    return this.buf.subarray(start, this.pos);
  }
  /**
   * Throws error if position in byte array is out of range.
   */
  assertBounds() {
    if (this.pos > this.len)
      throw new RangeError("premature EOF");
  }
  /**
   * Read a `int32` field, a signed 32 bit varint.
   */
  int32() {
    return this.uint32() | 0;
  }
  /**
   * Read a `sint32` field, a signed, zigzag-encoded 32-bit varint.
   */
  sint32() {
    let zze = this.uint32();
    return zze >>> 1 ^ -(zze & 1);
  }
  /**
   * Read a `int64` field, a signed 64-bit varint.
   */
  int64() {
    return protoInt64.dec(...this.varint64());
  }
  /**
   * Read a `uint64` field, an unsigned 64-bit varint.
   */
  uint64() {
    return protoInt64.uDec(...this.varint64());
  }
  /**
   * Read a `sint64` field, a signed, zig-zag-encoded 64-bit varint.
   */
  sint64() {
    let [lo, hi] = this.varint64();
    let s = -(lo & 1);
    lo = (lo >>> 1 | (hi & 1) << 31) ^ s;
    hi = hi >>> 1 ^ s;
    return protoInt64.dec(lo, hi);
  }
  /**
   * Read a `bool` field, a variant.
   */
  bool() {
    let [lo, hi] = this.varint64();
    return lo !== 0 || hi !== 0;
  }
  /**
   * Read a `fixed32` field, an unsigned, fixed-length 32-bit integer.
   */
  fixed32() {
    return this.view.getUint32((this.pos += 4) - 4, true);
  }
  /**
   * Read a `sfixed32` field, a signed, fixed-length 32-bit integer.
   */
  sfixed32() {
    return this.view.getInt32((this.pos += 4) - 4, true);
  }
  /**
   * Read a `fixed64` field, an unsigned, fixed-length 64 bit integer.
   */
  fixed64() {
    return protoInt64.uDec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `fixed64` field, a signed, fixed-length 64-bit integer.
   */
  sfixed64() {
    return protoInt64.dec(this.sfixed32(), this.sfixed32());
  }
  /**
   * Read a `float` field, 32-bit floating point number.
   */
  float() {
    return this.view.getFloat32((this.pos += 4) - 4, true);
  }
  /**
   * Read a `double` field, a 64-bit floating point number.
   */
  double() {
    return this.view.getFloat64((this.pos += 8) - 8, true);
  }
  /**
   * Read a `bytes` field, length-delimited arbitrary data.
   */
  bytes() {
    let len = this.uint32(), start = this.pos;
    this.pos += len;
    this.assertBounds();
    return this.buf.subarray(start, start + len);
  }
  /**
   * Read a `string` field, length-delimited data converted to UTF-8 text.
   */
  string() {
    return this.decodeUtf8(this.bytes());
  }
}
function assertInt32(arg) {
  if (typeof arg == "string") {
    arg = Number(arg);
  } else if (typeof arg != "number") {
    throw new Error("invalid int32: " + typeof arg);
  }
  if (!Number.isInteger(arg) || arg > INT32_MAX || arg < INT32_MIN)
    throw new Error("invalid int32: " + arg);
}
function assertUInt32(arg) {
  if (typeof arg == "string") {
    arg = Number(arg);
  } else if (typeof arg != "number") {
    throw new Error("invalid uint32: " + typeof arg);
  }
  if (!Number.isInteger(arg) || arg > UINT32_MAX || arg < 0)
    throw new Error("invalid uint32: " + arg);
}
function assertFloat32(arg) {
  if (typeof arg == "string") {
    const o = arg;
    arg = Number(arg);
    if (isNaN(arg) && o !== "NaN") {
      throw new Error("invalid float32: " + o);
    }
  } else if (typeof arg != "number") {
    throw new Error("invalid float32: " + typeof arg);
  }
  if (Number.isFinite(arg) && (arg > FLOAT32_MAX || arg < FLOAT32_MIN))
    throw new Error("invalid float32: " + arg);
}
function createBaseEmpty() {
  return {};
}
const Empty = {
  encode(_, writer2 = new BinaryWriter()) {
    return writer2;
  },
  decode(input, length) {
    const reader2 = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader2.len : reader2.pos + length;
    const message2 = createBaseEmpty();
    while (reader2.pos < end) {
      const tag = reader2.uint32();
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader2.skip(tag & 7);
    }
    return message2;
  },
  fromJSON(_) {
    return {};
  },
  toJSON(_) {
    const obj = {};
    return obj;
  },
  create(base) {
    return Empty.fromPartial(base ?? {});
  },
  fromPartial(_) {
    const message2 = createBaseEmpty();
    return message2;
  }
};
function createBaseUser() {
  return { Id: "", Username: "", Password: "" };
}
const User = {
  encode(message2, writer2 = new BinaryWriter()) {
    if (message2.Id !== "") {
      writer2.uint32(10).string(message2.Id);
    }
    if (message2.Username !== "") {
      writer2.uint32(18).string(message2.Username);
    }
    if (message2.Password !== "") {
      writer2.uint32(26).string(message2.Password);
    }
    return writer2;
  },
  decode(input, length) {
    const reader2 = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader2.len : reader2.pos + length;
    const message2 = createBaseUser();
    while (reader2.pos < end) {
      const tag = reader2.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message2.Id = reader2.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message2.Username = reader2.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }
          message2.Password = reader2.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader2.skip(tag & 7);
    }
    return message2;
  },
  fromJSON(object2) {
    return {
      Id: isSet(object2.Id) ? globalThis.String(object2.Id) : "",
      Username: isSet(object2.Username) ? globalThis.String(object2.Username) : "",
      Password: isSet(object2.Password) ? globalThis.String(object2.Password) : ""
    };
  },
  toJSON(message2) {
    const obj = {};
    if (message2.Id !== "") {
      obj.Id = message2.Id;
    }
    if (message2.Username !== "") {
      obj.Username = message2.Username;
    }
    if (message2.Password !== "") {
      obj.Password = message2.Password;
    }
    return obj;
  },
  create(base) {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object2) {
    const message2 = createBaseUser();
    message2.Id = object2.Id ?? "";
    message2.Username = object2.Username ?? "";
    message2.Password = object2.Password ?? "";
    return message2;
  }
};
function createBaseLoginRequest() {
  return { Username: "", Password: "" };
}
const LoginRequest = {
  encode(message2, writer2 = new BinaryWriter()) {
    if (message2.Username !== "") {
      writer2.uint32(10).string(message2.Username);
    }
    if (message2.Password !== "") {
      writer2.uint32(18).string(message2.Password);
    }
    return writer2;
  },
  decode(input, length) {
    const reader2 = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader2.len : reader2.pos + length;
    const message2 = createBaseLoginRequest();
    while (reader2.pos < end) {
      const tag = reader2.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message2.Username = reader2.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }
          message2.Password = reader2.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader2.skip(tag & 7);
    }
    return message2;
  },
  fromJSON(object2) {
    return {
      Username: isSet(object2.Username) ? globalThis.String(object2.Username) : "",
      Password: isSet(object2.Password) ? globalThis.String(object2.Password) : ""
    };
  },
  toJSON(message2) {
    const obj = {};
    if (message2.Username !== "") {
      obj.Username = message2.Username;
    }
    if (message2.Password !== "") {
      obj.Password = message2.Password;
    }
    return obj;
  },
  create(base) {
    return LoginRequest.fromPartial(base ?? {});
  },
  fromPartial(object2) {
    const message2 = createBaseLoginRequest();
    message2.Username = object2.Username ?? "";
    message2.Password = object2.Password ?? "";
    return message2;
  }
};
function createBaseLoginResponse() {
  return { UserData: void 0 };
}
const LoginResponse = {
  encode(message2, writer2 = new BinaryWriter()) {
    if (message2.UserData !== void 0) {
      User.encode(message2.UserData, writer2.uint32(10).fork()).join();
    }
    return writer2;
  },
  decode(input, length) {
    const reader2 = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === void 0 ? reader2.len : reader2.pos + length;
    const message2 = createBaseLoginResponse();
    while (reader2.pos < end) {
      const tag = reader2.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }
          message2.UserData = User.decode(reader2, reader2.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader2.skip(tag & 7);
    }
    return message2;
  },
  fromJSON(object2) {
    return { UserData: isSet(object2.UserData) ? User.fromJSON(object2.UserData) : void 0 };
  },
  toJSON(message2) {
    const obj = {};
    if (message2.UserData !== void 0) {
      obj.UserData = User.toJSON(message2.UserData);
    }
    return obj;
  },
  create(base) {
    return LoginResponse.fromPartial(base ?? {});
  },
  fromPartial(object2) {
    const message2 = createBaseLoginResponse();
    message2.UserData = object2.UserData !== void 0 && object2.UserData !== null ? User.fromPartial(object2.UserData) : void 0;
    return message2;
  }
};
const AccountsService = {
  login: {
    path: "/account.Accounts/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value) => LoginRequest.decode(value),
    responseSerialize: (value) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value) => LoginResponse.decode(value)
  },
  logout: {
    path: "/account.Accounts/Logout",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value) => Empty.decode(value),
    responseSerialize: (value) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value) => Empty.decode(value)
  }
};
const AccountsClient = src$2.makeGenericClientConstructor(AccountsService, "account.Accounts");
function isSet(value) {
  return value !== null && value !== void 0;
}
createRequire(import.meta.url);
const __dirname$1 = path$1.dirname(fileURLToPath(import.meta.url));
process.env.APP_ROOT = path$1.join(__dirname$1, "..");
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
const MAIN_DIST = path$1.join(process.env.APP_ROOT, "dist-electron");
const RENDERER_DIST = path$1.join(process.env.APP_ROOT, "dist");
process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path$1.join(process.env.APP_ROOT, "public") : RENDERER_DIST;
let win;
function createWindow() {
  win = new BrowserWindow({
    icon: path$1.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    width: 1080,
    height: 800,
    webPreferences: {
      preload: path$1.join(__dirname$1, "preload.mjs")
    }
  });
  win.webContents.on("did-finish-load", () => {
    win == null ? void 0 : win.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path$1.join(RENDERER_DIST, "index.html"));
  }
}
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
app.whenReady().then(() => {
  createWindow();
  console.log("Url Import", import.meta.url);
  const client2 = new AccountsClient(
    "localhost:5000",
    src$2.credentials.createInsecure()
  );
  client2.login(
    LoginRequest.fromJSON({ Username: "Security", Password: "passw0rd" }),
    (err, resp) => {
      if (err) {
        console.error("Error: ", err);
        return;
      }
      const lresponse = LoginResponse.toJSON(resp);
      console.log("Login Response: ", lresponse);
    }
  );
});
export {
  MAIN_DIST,
  RENDERER_DIST,
  VITE_DEV_SERVER_URL
};
