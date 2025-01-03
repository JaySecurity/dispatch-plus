// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.5.0
//   protoc               v5.28.3
// source: account.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Empty } from "./base";

export const protobufPackage = "account";

export interface User {
  Id: string;
  Username: string;
  Password: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
  Skills: string[];
}

export interface LoginRequest {
  Username: string;
  Password: string;
}

export interface LoginResponse {
  UserData: User | undefined;
}

function createBaseUser(): User {
  return { Id: "", Username: "", Password: "", FirstName: "", LastName: "", Phone: "", Email: "", Skills: [] };
}

export const User: MessageFns<User> = {
  encode(message: User, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Id !== "") {
      writer.uint32(10).string(message.Id);
    }
    if (message.Username !== "") {
      writer.uint32(18).string(message.Username);
    }
    if (message.Password !== "") {
      writer.uint32(26).string(message.Password);
    }
    if (message.FirstName !== "") {
      writer.uint32(34).string(message.FirstName);
    }
    if (message.LastName !== "") {
      writer.uint32(42).string(message.LastName);
    }
    if (message.Phone !== "") {
      writer.uint32(50).string(message.Phone);
    }
    if (message.Email !== "") {
      writer.uint32(58).string(message.Email);
    }
    for (const v of message.Skills) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): User {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.Id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Username = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.Password = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.FirstName = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.LastName = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.Phone = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.Email = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.Skills.push(reader.string());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      Id: isSet(object.Id) ? globalThis.String(object.Id) : "",
      Username: isSet(object.Username) ? globalThis.String(object.Username) : "",
      Password: isSet(object.Password) ? globalThis.String(object.Password) : "",
      FirstName: isSet(object.FirstName) ? globalThis.String(object.FirstName) : "",
      LastName: isSet(object.LastName) ? globalThis.String(object.LastName) : "",
      Phone: isSet(object.Phone) ? globalThis.String(object.Phone) : "",
      Email: isSet(object.Email) ? globalThis.String(object.Email) : "",
      Skills: globalThis.Array.isArray(object?.Skills) ? object.Skills.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.Id !== "") {
      obj.Id = message.Id;
    }
    if (message.Username !== "") {
      obj.Username = message.Username;
    }
    if (message.Password !== "") {
      obj.Password = message.Password;
    }
    if (message.FirstName !== "") {
      obj.FirstName = message.FirstName;
    }
    if (message.LastName !== "") {
      obj.LastName = message.LastName;
    }
    if (message.Phone !== "") {
      obj.Phone = message.Phone;
    }
    if (message.Email !== "") {
      obj.Email = message.Email;
    }
    if (message.Skills?.length) {
      obj.Skills = message.Skills;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.Id = object.Id ?? "";
    message.Username = object.Username ?? "";
    message.Password = object.Password ?? "";
    message.FirstName = object.FirstName ?? "";
    message.LastName = object.LastName ?? "";
    message.Phone = object.Phone ?? "";
    message.Email = object.Email ?? "";
    message.Skills = object.Skills?.map((e) => e) || [];
    return message;
  },
};

function createBaseLoginRequest(): LoginRequest {
  return { Username: "", Password: "" };
}

export const LoginRequest: MessageFns<LoginRequest> = {
  encode(message: LoginRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.Username !== "") {
      writer.uint32(10).string(message.Username);
    }
    if (message.Password !== "") {
      writer.uint32(18).string(message.Password);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.Username = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.Password = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginRequest {
    return {
      Username: isSet(object.Username) ? globalThis.String(object.Username) : "",
      Password: isSet(object.Password) ? globalThis.String(object.Password) : "",
    };
  },

  toJSON(message: LoginRequest): unknown {
    const obj: any = {};
    if (message.Username !== "") {
      obj.Username = message.Username;
    }
    if (message.Password !== "") {
      obj.Password = message.Password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginRequest>, I>>(base?: I): LoginRequest {
    return LoginRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginRequest>, I>>(object: I): LoginRequest {
    const message = createBaseLoginRequest();
    message.Username = object.Username ?? "";
    message.Password = object.Password ?? "";
    return message;
  },
};

function createBaseLoginResponse(): LoginResponse {
  return { UserData: undefined };
}

export const LoginResponse: MessageFns<LoginResponse> = {
  encode(message: LoginResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.UserData !== undefined) {
      User.encode(message.UserData, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LoginResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoginResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.UserData = User.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LoginResponse {
    return { UserData: isSet(object.UserData) ? User.fromJSON(object.UserData) : undefined };
  },

  toJSON(message: LoginResponse): unknown {
    const obj: any = {};
    if (message.UserData !== undefined) {
      obj.UserData = User.toJSON(message.UserData);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<LoginResponse>, I>>(base?: I): LoginResponse {
    return LoginResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<LoginResponse>, I>>(object: I): LoginResponse {
    const message = createBaseLoginResponse();
    message.UserData = (object.UserData !== undefined && object.UserData !== null)
      ? User.fromPartial(object.UserData)
      : undefined;
    return message;
  },
};

export type AccountsService = typeof AccountsService;
export const AccountsService = {
  login: {
    path: "/account.Accounts/Login",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: LoginRequest) => Buffer.from(LoginRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => LoginRequest.decode(value),
    responseSerialize: (value: LoginResponse) => Buffer.from(LoginResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => LoginResponse.decode(value),
  },
  logout: {
    path: "/account.Accounts/Logout",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Empty.decode(value),
    responseSerialize: (value: Empty) => Buffer.from(Empty.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Empty.decode(value),
  },
} as const;

export interface AccountsServer extends UntypedServiceImplementation {
  login: handleUnaryCall<LoginRequest, LoginResponse>;
  logout: handleUnaryCall<Empty, Empty>;
}

export interface AccountsClient extends Client {
  login(
    request: LoginRequest,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  login(
    request: LoginRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: LoginResponse) => void,
  ): ClientUnaryCall;
  logout(request: Empty, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
  logout(
    request: Empty,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
  logout(
    request: Empty,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Empty) => void,
  ): ClientUnaryCall;
}

export const AccountsClient = makeGenericClientConstructor(AccountsService, "account.Accounts") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AccountsClient;
  service: typeof AccountsService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
