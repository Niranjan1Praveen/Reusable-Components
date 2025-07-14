
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model CustomModel
 * 
 */
export type CustomModel = $Result.DefaultSelection<Prisma.$CustomModelPayload>
/**
 * Model AnalysisResult
 * 
 */
export type AnalysisResult = $Result.DefaultSelection<Prisma.$AnalysisResultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customModel`: Exposes CRUD operations for the **CustomModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomModels
    * const customModels = await prisma.customModel.findMany()
    * ```
    */
  get customModel(): Prisma.CustomModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.analysisResult`: Exposes CRUD operations for the **AnalysisResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnalysisResults
    * const analysisResults = await prisma.analysisResult.findMany()
    * ```
    */
  get analysisResult(): Prisma.AnalysisResultDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.1
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    CustomModel: 'CustomModel',
    AnalysisResult: 'AnalysisResult'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "customModel" | "analysisResult"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      CustomModel: {
        payload: Prisma.$CustomModelPayload<ExtArgs>
        fields: Prisma.CustomModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>
          }
          findFirst: {
            args: Prisma.CustomModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>
          }
          findMany: {
            args: Prisma.CustomModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>[]
          }
          create: {
            args: Prisma.CustomModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>
          }
          createMany: {
            args: Prisma.CustomModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>[]
          }
          delete: {
            args: Prisma.CustomModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>
          }
          update: {
            args: Prisma.CustomModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>
          }
          deleteMany: {
            args: Prisma.CustomModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>[]
          }
          upsert: {
            args: Prisma.CustomModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomModelPayload>
          }
          aggregate: {
            args: Prisma.CustomModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomModel>
          }
          groupBy: {
            args: Prisma.CustomModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomModelCountArgs<ExtArgs>
            result: $Utils.Optional<CustomModelCountAggregateOutputType> | number
          }
        }
      }
      AnalysisResult: {
        payload: Prisma.$AnalysisResultPayload<ExtArgs>
        fields: Prisma.AnalysisResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          findFirst: {
            args: Prisma.AnalysisResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          findMany: {
            args: Prisma.AnalysisResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[]
          }
          create: {
            args: Prisma.AnalysisResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          createMany: {
            args: Prisma.AnalysisResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[]
          }
          delete: {
            args: Prisma.AnalysisResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          update: {
            args: Prisma.AnalysisResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnalysisResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>[]
          }
          upsert: {
            args: Prisma.AnalysisResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisResultPayload>
          }
          aggregate: {
            args: Prisma.AnalysisResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysisResult>
          }
          groupBy: {
            args: Prisma.AnalysisResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisResultCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisResultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    customModel?: CustomModelOmit
    analysisResult?: AnalysisResultOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserModel: number
    AnalysisResult: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserModel?: boolean | UserCountOutputTypeCountUserModelArgs
    AnalysisResult?: boolean | UserCountOutputTypeCountAnalysisResultArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomModelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalysisResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    profileImage: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    profileImage: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    profileImage?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
    UserModel?: boolean | User$UserModelArgs<ExtArgs>
    AnalysisResult?: boolean | User$AnalysisResultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    profileImage?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "profileImage" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserModel?: boolean | User$UserModelArgs<ExtArgs>
    AnalysisResult?: boolean | User$AnalysisResultArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserModel: Prisma.$CustomModelPayload<ExtArgs>[]
      AnalysisResult: Prisma.$AnalysisResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      profileImage: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserModel<T extends User$UserModelArgs<ExtArgs> = {}>(args?: Subset<T, User$UserModelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AnalysisResult<T extends User$AnalysisResultArgs<ExtArgs> = {}>(args?: Subset<T, User$AnalysisResultArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserModel
   */
  export type User$UserModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    where?: CustomModelWhereInput
    orderBy?: CustomModelOrderByWithRelationInput | CustomModelOrderByWithRelationInput[]
    cursor?: CustomModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomModelScalarFieldEnum | CustomModelScalarFieldEnum[]
  }

  /**
   * User.AnalysisResult
   */
  export type User$AnalysisResultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    where?: AnalysisResultWhereInput
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    cursor?: AnalysisResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model CustomModel
   */

  export type AggregateCustomModel = {
    _count: CustomModelCountAggregateOutputType | null
    _avg: CustomModelAvgAggregateOutputType | null
    _sum: CustomModelSumAggregateOutputType | null
    _min: CustomModelMinAggregateOutputType | null
    _max: CustomModelMaxAggregateOutputType | null
  }

  export type CustomModelAvgAggregateOutputType = {
    fileSize: number | null
  }

  export type CustomModelSumAggregateOutputType = {
    fileSize: number | null
  }

  export type CustomModelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    filePath: string | null
    fileData: Uint8Array | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomModelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    fileName: string | null
    fileType: string | null
    fileSize: number | null
    filePath: string | null
    fileData: Uint8Array | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomModelCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    fileName: number
    fileType: number
    fileSize: number
    filePath: number
    fileData: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomModelAvgAggregateInputType = {
    fileSize?: true
  }

  export type CustomModelSumAggregateInputType = {
    fileSize?: true
  }

  export type CustomModelMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    filePath?: true
    fileData?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomModelMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    filePath?: true
    fileData?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomModelCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    fileName?: true
    fileType?: true
    fileSize?: true
    filePath?: true
    fileData?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomModel to aggregate.
     */
    where?: CustomModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomModels to fetch.
     */
    orderBy?: CustomModelOrderByWithRelationInput | CustomModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomModels
    **/
    _count?: true | CustomModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomModelMaxAggregateInputType
  }

  export type GetCustomModelAggregateType<T extends CustomModelAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomModel[P]>
      : GetScalarType<T[P], AggregateCustomModel[P]>
  }




  export type CustomModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomModelWhereInput
    orderBy?: CustomModelOrderByWithAggregationInput | CustomModelOrderByWithAggregationInput[]
    by: CustomModelScalarFieldEnum[] | CustomModelScalarFieldEnum
    having?: CustomModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomModelCountAggregateInputType | true
    _avg?: CustomModelAvgAggregateInputType
    _sum?: CustomModelSumAggregateInputType
    _min?: CustomModelMinAggregateInputType
    _max?: CustomModelMaxAggregateInputType
  }

  export type CustomModelGroupByOutputType = {
    id: string
    userId: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData: Uint8Array | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomModelCountAggregateOutputType | null
    _avg: CustomModelAvgAggregateOutputType | null
    _sum: CustomModelSumAggregateOutputType | null
    _min: CustomModelMinAggregateOutputType | null
    _max: CustomModelMaxAggregateOutputType | null
  }

  type GetCustomModelGroupByPayload<T extends CustomModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomModelGroupByOutputType[P]>
            : GetScalarType<T[P], CustomModelGroupByOutputType[P]>
        }
      >
    >


  export type CustomModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    filePath?: boolean
    fileData?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customModel"]>

  export type CustomModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    filePath?: boolean
    fileData?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customModel"]>

  export type CustomModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    filePath?: boolean
    fileData?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customModel"]>

  export type CustomModelSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    fileName?: boolean
    fileType?: boolean
    fileSize?: boolean
    filePath?: boolean
    fileData?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "fileName" | "fileType" | "fileSize" | "filePath" | "fileData" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["customModel"]>
  export type CustomModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CustomModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CustomModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomModel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      fileName: string
      fileType: string
      fileSize: number
      filePath: string
      fileData: Uint8Array | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customModel"]>
    composites: {}
  }

  type CustomModelGetPayload<S extends boolean | null | undefined | CustomModelDefaultArgs> = $Result.GetResult<Prisma.$CustomModelPayload, S>

  type CustomModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomModelCountAggregateInputType | true
    }

  export interface CustomModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomModel'], meta: { name: 'CustomModel' } }
    /**
     * Find zero or one CustomModel that matches the filter.
     * @param {CustomModelFindUniqueArgs} args - Arguments to find a CustomModel
     * @example
     * // Get one CustomModel
     * const customModel = await prisma.customModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomModelFindUniqueArgs>(args: SelectSubset<T, CustomModelFindUniqueArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomModel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomModelFindUniqueOrThrowArgs} args - Arguments to find a CustomModel
     * @example
     * // Get one CustomModel
     * const customModel = await prisma.customModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomModelFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelFindFirstArgs} args - Arguments to find a CustomModel
     * @example
     * // Get one CustomModel
     * const customModel = await prisma.customModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomModelFindFirstArgs>(args?: SelectSubset<T, CustomModelFindFirstArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelFindFirstOrThrowArgs} args - Arguments to find a CustomModel
     * @example
     * // Get one CustomModel
     * const customModel = await prisma.customModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomModelFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomModels
     * const customModels = await prisma.customModel.findMany()
     * 
     * // Get first 10 CustomModels
     * const customModels = await prisma.customModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customModelWithIdOnly = await prisma.customModel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomModelFindManyArgs>(args?: SelectSubset<T, CustomModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomModel.
     * @param {CustomModelCreateArgs} args - Arguments to create a CustomModel.
     * @example
     * // Create one CustomModel
     * const CustomModel = await prisma.customModel.create({
     *   data: {
     *     // ... data to create a CustomModel
     *   }
     * })
     * 
     */
    create<T extends CustomModelCreateArgs>(args: SelectSubset<T, CustomModelCreateArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomModels.
     * @param {CustomModelCreateManyArgs} args - Arguments to create many CustomModels.
     * @example
     * // Create many CustomModels
     * const customModel = await prisma.customModel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomModelCreateManyArgs>(args?: SelectSubset<T, CustomModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomModels and returns the data saved in the database.
     * @param {CustomModelCreateManyAndReturnArgs} args - Arguments to create many CustomModels.
     * @example
     * // Create many CustomModels
     * const customModel = await prisma.customModel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomModels and only return the `id`
     * const customModelWithIdOnly = await prisma.customModel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomModelCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomModel.
     * @param {CustomModelDeleteArgs} args - Arguments to delete one CustomModel.
     * @example
     * // Delete one CustomModel
     * const CustomModel = await prisma.customModel.delete({
     *   where: {
     *     // ... filter to delete one CustomModel
     *   }
     * })
     * 
     */
    delete<T extends CustomModelDeleteArgs>(args: SelectSubset<T, CustomModelDeleteArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomModel.
     * @param {CustomModelUpdateArgs} args - Arguments to update one CustomModel.
     * @example
     * // Update one CustomModel
     * const customModel = await prisma.customModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomModelUpdateArgs>(args: SelectSubset<T, CustomModelUpdateArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomModels.
     * @param {CustomModelDeleteManyArgs} args - Arguments to filter CustomModels to delete.
     * @example
     * // Delete a few CustomModels
     * const { count } = await prisma.customModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomModelDeleteManyArgs>(args?: SelectSubset<T, CustomModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomModels
     * const customModel = await prisma.customModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomModelUpdateManyArgs>(args: SelectSubset<T, CustomModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomModels and returns the data updated in the database.
     * @param {CustomModelUpdateManyAndReturnArgs} args - Arguments to update many CustomModels.
     * @example
     * // Update many CustomModels
     * const customModel = await prisma.customModel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomModels and only return the `id`
     * const customModelWithIdOnly = await prisma.customModel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomModelUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomModel.
     * @param {CustomModelUpsertArgs} args - Arguments to update or create a CustomModel.
     * @example
     * // Update or create a CustomModel
     * const customModel = await prisma.customModel.upsert({
     *   create: {
     *     // ... data to create a CustomModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomModel we want to update
     *   }
     * })
     */
    upsert<T extends CustomModelUpsertArgs>(args: SelectSubset<T, CustomModelUpsertArgs<ExtArgs>>): Prisma__CustomModelClient<$Result.GetResult<Prisma.$CustomModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelCountArgs} args - Arguments to filter CustomModels to count.
     * @example
     * // Count the number of CustomModels
     * const count = await prisma.customModel.count({
     *   where: {
     *     // ... the filter for the CustomModels we want to count
     *   }
     * })
    **/
    count<T extends CustomModelCountArgs>(
      args?: Subset<T, CustomModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomModelAggregateArgs>(args: Subset<T, CustomModelAggregateArgs>): Prisma.PrismaPromise<GetCustomModelAggregateType<T>>

    /**
     * Group by CustomModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomModelGroupByArgs['orderBy'] }
        : { orderBy?: CustomModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomModel model
   */
  readonly fields: CustomModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomModel model
   */
  interface CustomModelFieldRefs {
    readonly id: FieldRef<"CustomModel", 'String'>
    readonly userId: FieldRef<"CustomModel", 'String'>
    readonly name: FieldRef<"CustomModel", 'String'>
    readonly fileName: FieldRef<"CustomModel", 'String'>
    readonly fileType: FieldRef<"CustomModel", 'String'>
    readonly fileSize: FieldRef<"CustomModel", 'Int'>
    readonly filePath: FieldRef<"CustomModel", 'String'>
    readonly fileData: FieldRef<"CustomModel", 'Bytes'>
    readonly description: FieldRef<"CustomModel", 'String'>
    readonly createdAt: FieldRef<"CustomModel", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomModel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomModel findUnique
   */
  export type CustomModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * Filter, which CustomModel to fetch.
     */
    where: CustomModelWhereUniqueInput
  }

  /**
   * CustomModel findUniqueOrThrow
   */
  export type CustomModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * Filter, which CustomModel to fetch.
     */
    where: CustomModelWhereUniqueInput
  }

  /**
   * CustomModel findFirst
   */
  export type CustomModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * Filter, which CustomModel to fetch.
     */
    where?: CustomModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomModels to fetch.
     */
    orderBy?: CustomModelOrderByWithRelationInput | CustomModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomModels.
     */
    cursor?: CustomModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomModels.
     */
    distinct?: CustomModelScalarFieldEnum | CustomModelScalarFieldEnum[]
  }

  /**
   * CustomModel findFirstOrThrow
   */
  export type CustomModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * Filter, which CustomModel to fetch.
     */
    where?: CustomModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomModels to fetch.
     */
    orderBy?: CustomModelOrderByWithRelationInput | CustomModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomModels.
     */
    cursor?: CustomModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomModels.
     */
    distinct?: CustomModelScalarFieldEnum | CustomModelScalarFieldEnum[]
  }

  /**
   * CustomModel findMany
   */
  export type CustomModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * Filter, which CustomModels to fetch.
     */
    where?: CustomModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomModels to fetch.
     */
    orderBy?: CustomModelOrderByWithRelationInput | CustomModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomModels.
     */
    cursor?: CustomModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomModels.
     */
    skip?: number
    distinct?: CustomModelScalarFieldEnum | CustomModelScalarFieldEnum[]
  }

  /**
   * CustomModel create
   */
  export type CustomModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomModel.
     */
    data: XOR<CustomModelCreateInput, CustomModelUncheckedCreateInput>
  }

  /**
   * CustomModel createMany
   */
  export type CustomModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomModels.
     */
    data: CustomModelCreateManyInput | CustomModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomModel createManyAndReturn
   */
  export type CustomModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * The data used to create many CustomModels.
     */
    data: CustomModelCreateManyInput | CustomModelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomModel update
   */
  export type CustomModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomModel.
     */
    data: XOR<CustomModelUpdateInput, CustomModelUncheckedUpdateInput>
    /**
     * Choose, which CustomModel to update.
     */
    where: CustomModelWhereUniqueInput
  }

  /**
   * CustomModel updateMany
   */
  export type CustomModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomModels.
     */
    data: XOR<CustomModelUpdateManyMutationInput, CustomModelUncheckedUpdateManyInput>
    /**
     * Filter which CustomModels to update
     */
    where?: CustomModelWhereInput
    /**
     * Limit how many CustomModels to update.
     */
    limit?: number
  }

  /**
   * CustomModel updateManyAndReturn
   */
  export type CustomModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * The data used to update CustomModels.
     */
    data: XOR<CustomModelUpdateManyMutationInput, CustomModelUncheckedUpdateManyInput>
    /**
     * Filter which CustomModels to update
     */
    where?: CustomModelWhereInput
    /**
     * Limit how many CustomModels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomModel upsert
   */
  export type CustomModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomModel to update in case it exists.
     */
    where: CustomModelWhereUniqueInput
    /**
     * In case the CustomModel found by the `where` argument doesn't exist, create a new CustomModel with this data.
     */
    create: XOR<CustomModelCreateInput, CustomModelUncheckedCreateInput>
    /**
     * In case the CustomModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomModelUpdateInput, CustomModelUncheckedUpdateInput>
  }

  /**
   * CustomModel delete
   */
  export type CustomModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
    /**
     * Filter which CustomModel to delete.
     */
    where: CustomModelWhereUniqueInput
  }

  /**
   * CustomModel deleteMany
   */
  export type CustomModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomModels to delete
     */
    where?: CustomModelWhereInput
    /**
     * Limit how many CustomModels to delete.
     */
    limit?: number
  }

  /**
   * CustomModel without action
   */
  export type CustomModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomModel
     */
    select?: CustomModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomModel
     */
    omit?: CustomModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomModelInclude<ExtArgs> | null
  }


  /**
   * Model AnalysisResult
   */

  export type AggregateAnalysisResult = {
    _count: AnalysisResultCountAggregateOutputType | null
    _avg: AnalysisResultAvgAggregateOutputType | null
    _sum: AnalysisResultSumAggregateOutputType | null
    _min: AnalysisResultMinAggregateOutputType | null
    _max: AnalysisResultMaxAggregateOutputType | null
  }

  export type AnalysisResultAvgAggregateOutputType = {
    originalConfidence: number | null
    adversarialConfidence: number | null
  }

  export type AnalysisResultSumAggregateOutputType = {
    originalConfidence: number | null
    adversarialConfidence: number | null
  }

  export type AnalysisResultMinAggregateOutputType = {
    id: string | null
    modelUsed: string | null
    attackUsed: string | null
    originalPrediction: string | null
    originalConfidence: number | null
    adversarialPrediction: string | null
    adversarialConfidence: number | null
    originalImage: string | null
    adversarialImage: string | null
    heatmapImage: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AnalysisResultMaxAggregateOutputType = {
    id: string | null
    modelUsed: string | null
    attackUsed: string | null
    originalPrediction: string | null
    originalConfidence: number | null
    adversarialPrediction: string | null
    adversarialConfidence: number | null
    originalImage: string | null
    adversarialImage: string | null
    heatmapImage: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type AnalysisResultCountAggregateOutputType = {
    id: number
    modelUsed: number
    attackUsed: number
    originalPrediction: number
    originalConfidence: number
    adversarialPrediction: number
    adversarialConfidence: number
    originalImage: number
    adversarialImage: number
    heatmapImage: number
    createdAt: number
    userId: number
    _all: number
  }


  export type AnalysisResultAvgAggregateInputType = {
    originalConfidence?: true
    adversarialConfidence?: true
  }

  export type AnalysisResultSumAggregateInputType = {
    originalConfidence?: true
    adversarialConfidence?: true
  }

  export type AnalysisResultMinAggregateInputType = {
    id?: true
    modelUsed?: true
    attackUsed?: true
    originalPrediction?: true
    originalConfidence?: true
    adversarialPrediction?: true
    adversarialConfidence?: true
    originalImage?: true
    adversarialImage?: true
    heatmapImage?: true
    createdAt?: true
    userId?: true
  }

  export type AnalysisResultMaxAggregateInputType = {
    id?: true
    modelUsed?: true
    attackUsed?: true
    originalPrediction?: true
    originalConfidence?: true
    adversarialPrediction?: true
    adversarialConfidence?: true
    originalImage?: true
    adversarialImage?: true
    heatmapImage?: true
    createdAt?: true
    userId?: true
  }

  export type AnalysisResultCountAggregateInputType = {
    id?: true
    modelUsed?: true
    attackUsed?: true
    originalPrediction?: true
    originalConfidence?: true
    adversarialPrediction?: true
    adversarialConfidence?: true
    originalImage?: true
    adversarialImage?: true
    heatmapImage?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type AnalysisResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisResult to aggregate.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnalysisResults
    **/
    _count?: true | AnalysisResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisResultMaxAggregateInputType
  }

  export type GetAnalysisResultAggregateType<T extends AnalysisResultAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysisResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysisResult[P]>
      : GetScalarType<T[P], AggregateAnalysisResult[P]>
  }




  export type AnalysisResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisResultWhereInput
    orderBy?: AnalysisResultOrderByWithAggregationInput | AnalysisResultOrderByWithAggregationInput[]
    by: AnalysisResultScalarFieldEnum[] | AnalysisResultScalarFieldEnum
    having?: AnalysisResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisResultCountAggregateInputType | true
    _avg?: AnalysisResultAvgAggregateInputType
    _sum?: AnalysisResultSumAggregateInputType
    _min?: AnalysisResultMinAggregateInputType
    _max?: AnalysisResultMaxAggregateInputType
  }

  export type AnalysisResultGroupByOutputType = {
    id: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage: string | null
    createdAt: Date
    userId: string
    _count: AnalysisResultCountAggregateOutputType | null
    _avg: AnalysisResultAvgAggregateOutputType | null
    _sum: AnalysisResultSumAggregateOutputType | null
    _min: AnalysisResultMinAggregateOutputType | null
    _max: AnalysisResultMaxAggregateOutputType | null
  }

  type GetAnalysisResultGroupByPayload<T extends AnalysisResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisResultGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisResultGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelUsed?: boolean
    attackUsed?: boolean
    originalPrediction?: boolean
    originalConfidence?: boolean
    adversarialPrediction?: boolean
    adversarialConfidence?: boolean
    originalImage?: boolean
    adversarialImage?: boolean
    heatmapImage?: boolean
    createdAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisResult"]>

  export type AnalysisResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelUsed?: boolean
    attackUsed?: boolean
    originalPrediction?: boolean
    originalConfidence?: boolean
    adversarialPrediction?: boolean
    adversarialConfidence?: boolean
    originalImage?: boolean
    adversarialImage?: boolean
    heatmapImage?: boolean
    createdAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisResult"]>

  export type AnalysisResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelUsed?: boolean
    attackUsed?: boolean
    originalPrediction?: boolean
    originalConfidence?: boolean
    adversarialPrediction?: boolean
    adversarialConfidence?: boolean
    originalImage?: boolean
    adversarialImage?: boolean
    heatmapImage?: boolean
    createdAt?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysisResult"]>

  export type AnalysisResultSelectScalar = {
    id?: boolean
    modelUsed?: boolean
    attackUsed?: boolean
    originalPrediction?: boolean
    originalConfidence?: boolean
    adversarialPrediction?: boolean
    adversarialConfidence?: boolean
    originalImage?: boolean
    adversarialImage?: boolean
    heatmapImage?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type AnalysisResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelUsed" | "attackUsed" | "originalPrediction" | "originalConfidence" | "adversarialPrediction" | "adversarialConfidence" | "originalImage" | "adversarialImage" | "heatmapImage" | "createdAt" | "userId", ExtArgs["result"]["analysisResult"]>
  export type AnalysisResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalysisResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnalysisResult"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelUsed: string
      attackUsed: string
      originalPrediction: string
      originalConfidence: number
      adversarialPrediction: string
      adversarialConfidence: number
      originalImage: string
      adversarialImage: string
      heatmapImage: string | null
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["analysisResult"]>
    composites: {}
  }

  type AnalysisResultGetPayload<S extends boolean | null | undefined | AnalysisResultDefaultArgs> = $Result.GetResult<Prisma.$AnalysisResultPayload, S>

  type AnalysisResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnalysisResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnalysisResultCountAggregateInputType | true
    }

  export interface AnalysisResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnalysisResult'], meta: { name: 'AnalysisResult' } }
    /**
     * Find zero or one AnalysisResult that matches the filter.
     * @param {AnalysisResultFindUniqueArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisResultFindUniqueArgs>(args: SelectSubset<T, AnalysisResultFindUniqueArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnalysisResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnalysisResultFindUniqueOrThrowArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisResultFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultFindFirstArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisResultFindFirstArgs>(args?: SelectSubset<T, AnalysisResultFindFirstArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnalysisResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultFindFirstOrThrowArgs} args - Arguments to find a AnalysisResult
     * @example
     * // Get one AnalysisResult
     * const analysisResult = await prisma.analysisResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisResultFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnalysisResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnalysisResults
     * const analysisResults = await prisma.analysisResult.findMany()
     * 
     * // Get first 10 AnalysisResults
     * const analysisResults = await prisma.analysisResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisResultWithIdOnly = await prisma.analysisResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisResultFindManyArgs>(args?: SelectSubset<T, AnalysisResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnalysisResult.
     * @param {AnalysisResultCreateArgs} args - Arguments to create a AnalysisResult.
     * @example
     * // Create one AnalysisResult
     * const AnalysisResult = await prisma.analysisResult.create({
     *   data: {
     *     // ... data to create a AnalysisResult
     *   }
     * })
     * 
     */
    create<T extends AnalysisResultCreateArgs>(args: SelectSubset<T, AnalysisResultCreateArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnalysisResults.
     * @param {AnalysisResultCreateManyArgs} args - Arguments to create many AnalysisResults.
     * @example
     * // Create many AnalysisResults
     * const analysisResult = await prisma.analysisResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisResultCreateManyArgs>(args?: SelectSubset<T, AnalysisResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnalysisResults and returns the data saved in the database.
     * @param {AnalysisResultCreateManyAndReturnArgs} args - Arguments to create many AnalysisResults.
     * @example
     * // Create many AnalysisResults
     * const analysisResult = await prisma.analysisResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnalysisResults and only return the `id`
     * const analysisResultWithIdOnly = await prisma.analysisResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisResultCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnalysisResult.
     * @param {AnalysisResultDeleteArgs} args - Arguments to delete one AnalysisResult.
     * @example
     * // Delete one AnalysisResult
     * const AnalysisResult = await prisma.analysisResult.delete({
     *   where: {
     *     // ... filter to delete one AnalysisResult
     *   }
     * })
     * 
     */
    delete<T extends AnalysisResultDeleteArgs>(args: SelectSubset<T, AnalysisResultDeleteArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnalysisResult.
     * @param {AnalysisResultUpdateArgs} args - Arguments to update one AnalysisResult.
     * @example
     * // Update one AnalysisResult
     * const analysisResult = await prisma.analysisResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisResultUpdateArgs>(args: SelectSubset<T, AnalysisResultUpdateArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnalysisResults.
     * @param {AnalysisResultDeleteManyArgs} args - Arguments to filter AnalysisResults to delete.
     * @example
     * // Delete a few AnalysisResults
     * const { count } = await prisma.analysisResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisResultDeleteManyArgs>(args?: SelectSubset<T, AnalysisResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnalysisResults
     * const analysisResult = await prisma.analysisResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisResultUpdateManyArgs>(args: SelectSubset<T, AnalysisResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnalysisResults and returns the data updated in the database.
     * @param {AnalysisResultUpdateManyAndReturnArgs} args - Arguments to update many AnalysisResults.
     * @example
     * // Update many AnalysisResults
     * const analysisResult = await prisma.analysisResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnalysisResults and only return the `id`
     * const analysisResultWithIdOnly = await prisma.analysisResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnalysisResultUpdateManyAndReturnArgs>(args: SelectSubset<T, AnalysisResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnalysisResult.
     * @param {AnalysisResultUpsertArgs} args - Arguments to update or create a AnalysisResult.
     * @example
     * // Update or create a AnalysisResult
     * const analysisResult = await prisma.analysisResult.upsert({
     *   create: {
     *     // ... data to create a AnalysisResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnalysisResult we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisResultUpsertArgs>(args: SelectSubset<T, AnalysisResultUpsertArgs<ExtArgs>>): Prisma__AnalysisResultClient<$Result.GetResult<Prisma.$AnalysisResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnalysisResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultCountArgs} args - Arguments to filter AnalysisResults to count.
     * @example
     * // Count the number of AnalysisResults
     * const count = await prisma.analysisResult.count({
     *   where: {
     *     // ... the filter for the AnalysisResults we want to count
     *   }
     * })
    **/
    count<T extends AnalysisResultCountArgs>(
      args?: Subset<T, AnalysisResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnalysisResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnalysisResultAggregateArgs>(args: Subset<T, AnalysisResultAggregateArgs>): Prisma.PrismaPromise<GetAnalysisResultAggregateType<T>>

    /**
     * Group by AnalysisResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnalysisResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisResultGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnalysisResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnalysisResult model
   */
  readonly fields: AnalysisResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnalysisResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnalysisResult model
   */
  interface AnalysisResultFieldRefs {
    readonly id: FieldRef<"AnalysisResult", 'String'>
    readonly modelUsed: FieldRef<"AnalysisResult", 'String'>
    readonly attackUsed: FieldRef<"AnalysisResult", 'String'>
    readonly originalPrediction: FieldRef<"AnalysisResult", 'String'>
    readonly originalConfidence: FieldRef<"AnalysisResult", 'Float'>
    readonly adversarialPrediction: FieldRef<"AnalysisResult", 'String'>
    readonly adversarialConfidence: FieldRef<"AnalysisResult", 'Float'>
    readonly originalImage: FieldRef<"AnalysisResult", 'String'>
    readonly adversarialImage: FieldRef<"AnalysisResult", 'String'>
    readonly heatmapImage: FieldRef<"AnalysisResult", 'String'>
    readonly createdAt: FieldRef<"AnalysisResult", 'DateTime'>
    readonly userId: FieldRef<"AnalysisResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnalysisResult findUnique
   */
  export type AnalysisResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult findUniqueOrThrow
   */
  export type AnalysisResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult findFirst
   */
  export type AnalysisResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisResults.
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisResults.
     */
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * AnalysisResult findFirstOrThrow
   */
  export type AnalysisResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResult to fetch.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnalysisResults.
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnalysisResults.
     */
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * AnalysisResult findMany
   */
  export type AnalysisResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter, which AnalysisResults to fetch.
     */
    where?: AnalysisResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnalysisResults to fetch.
     */
    orderBy?: AnalysisResultOrderByWithRelationInput | AnalysisResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnalysisResults.
     */
    cursor?: AnalysisResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnalysisResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnalysisResults.
     */
    skip?: number
    distinct?: AnalysisResultScalarFieldEnum | AnalysisResultScalarFieldEnum[]
  }

  /**
   * AnalysisResult create
   */
  export type AnalysisResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * The data needed to create a AnalysisResult.
     */
    data: XOR<AnalysisResultCreateInput, AnalysisResultUncheckedCreateInput>
  }

  /**
   * AnalysisResult createMany
   */
  export type AnalysisResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnalysisResults.
     */
    data: AnalysisResultCreateManyInput | AnalysisResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnalysisResult createManyAndReturn
   */
  export type AnalysisResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * The data used to create many AnalysisResults.
     */
    data: AnalysisResultCreateManyInput | AnalysisResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisResult update
   */
  export type AnalysisResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * The data needed to update a AnalysisResult.
     */
    data: XOR<AnalysisResultUpdateInput, AnalysisResultUncheckedUpdateInput>
    /**
     * Choose, which AnalysisResult to update.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult updateMany
   */
  export type AnalysisResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnalysisResults.
     */
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisResults to update
     */
    where?: AnalysisResultWhereInput
    /**
     * Limit how many AnalysisResults to update.
     */
    limit?: number
  }

  /**
   * AnalysisResult updateManyAndReturn
   */
  export type AnalysisResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * The data used to update AnalysisResults.
     */
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyInput>
    /**
     * Filter which AnalysisResults to update
     */
    where?: AnalysisResultWhereInput
    /**
     * Limit how many AnalysisResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnalysisResult upsert
   */
  export type AnalysisResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * The filter to search for the AnalysisResult to update in case it exists.
     */
    where: AnalysisResultWhereUniqueInput
    /**
     * In case the AnalysisResult found by the `where` argument doesn't exist, create a new AnalysisResult with this data.
     */
    create: XOR<AnalysisResultCreateInput, AnalysisResultUncheckedCreateInput>
    /**
     * In case the AnalysisResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisResultUpdateInput, AnalysisResultUncheckedUpdateInput>
  }

  /**
   * AnalysisResult delete
   */
  export type AnalysisResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
    /**
     * Filter which AnalysisResult to delete.
     */
    where: AnalysisResultWhereUniqueInput
  }

  /**
   * AnalysisResult deleteMany
   */
  export type AnalysisResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnalysisResults to delete
     */
    where?: AnalysisResultWhereInput
    /**
     * Limit how many AnalysisResults to delete.
     */
    limit?: number
  }

  /**
   * AnalysisResult without action
   */
  export type AnalysisResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnalysisResult
     */
    select?: AnalysisResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnalysisResult
     */
    omit?: AnalysisResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisResultInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    profileImage: 'profileImage',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomModelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    fileName: 'fileName',
    fileType: 'fileType',
    fileSize: 'fileSize',
    filePath: 'filePath',
    fileData: 'fileData',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomModelScalarFieldEnum = (typeof CustomModelScalarFieldEnum)[keyof typeof CustomModelScalarFieldEnum]


  export const AnalysisResultScalarFieldEnum: {
    id: 'id',
    modelUsed: 'modelUsed',
    attackUsed: 'attackUsed',
    originalPrediction: 'originalPrediction',
    originalConfidence: 'originalConfidence',
    adversarialPrediction: 'adversarialPrediction',
    adversarialConfidence: 'adversarialConfidence',
    originalImage: 'originalImage',
    adversarialImage: 'adversarialImage',
    heatmapImage: 'heatmapImage',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type AnalysisResultScalarFieldEnum = (typeof AnalysisResultScalarFieldEnum)[keyof typeof AnalysisResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UserModel?: CustomModelListRelationFilter
    AnalysisResult?: AnalysisResultListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    UserModel?: CustomModelOrderByRelationAggregateInput
    AnalysisResult?: AnalysisResultOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    profileImage?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UserModel?: CustomModelListRelationFilter
    AnalysisResult?: AnalysisResultListRelationFilter
  }, "id" | "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CustomModelWhereInput = {
    AND?: CustomModelWhereInput | CustomModelWhereInput[]
    OR?: CustomModelWhereInput[]
    NOT?: CustomModelWhereInput | CustomModelWhereInput[]
    id?: StringFilter<"CustomModel"> | string
    userId?: StringFilter<"CustomModel"> | string
    name?: StringFilter<"CustomModel"> | string
    fileName?: StringFilter<"CustomModel"> | string
    fileType?: StringFilter<"CustomModel"> | string
    fileSize?: IntFilter<"CustomModel"> | number
    filePath?: StringFilter<"CustomModel"> | string
    fileData?: BytesNullableFilter<"CustomModel"> | Uint8Array | null
    description?: StringNullableFilter<"CustomModel"> | string | null
    createdAt?: DateTimeFilter<"CustomModel"> | Date | string
    updatedAt?: DateTimeFilter<"CustomModel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CustomModelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    fileData?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CustomModelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    filePath?: string
    AND?: CustomModelWhereInput | CustomModelWhereInput[]
    OR?: CustomModelWhereInput[]
    NOT?: CustomModelWhereInput | CustomModelWhereInput[]
    userId?: StringFilter<"CustomModel"> | string
    name?: StringFilter<"CustomModel"> | string
    fileName?: StringFilter<"CustomModel"> | string
    fileType?: StringFilter<"CustomModel"> | string
    fileSize?: IntFilter<"CustomModel"> | number
    fileData?: BytesNullableFilter<"CustomModel"> | Uint8Array | null
    description?: StringNullableFilter<"CustomModel"> | string | null
    createdAt?: DateTimeFilter<"CustomModel"> | Date | string
    updatedAt?: DateTimeFilter<"CustomModel"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "filePath">

  export type CustomModelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    fileData?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomModelCountOrderByAggregateInput
    _avg?: CustomModelAvgOrderByAggregateInput
    _max?: CustomModelMaxOrderByAggregateInput
    _min?: CustomModelMinOrderByAggregateInput
    _sum?: CustomModelSumOrderByAggregateInput
  }

  export type CustomModelScalarWhereWithAggregatesInput = {
    AND?: CustomModelScalarWhereWithAggregatesInput | CustomModelScalarWhereWithAggregatesInput[]
    OR?: CustomModelScalarWhereWithAggregatesInput[]
    NOT?: CustomModelScalarWhereWithAggregatesInput | CustomModelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomModel"> | string
    userId?: StringWithAggregatesFilter<"CustomModel"> | string
    name?: StringWithAggregatesFilter<"CustomModel"> | string
    fileName?: StringWithAggregatesFilter<"CustomModel"> | string
    fileType?: StringWithAggregatesFilter<"CustomModel"> | string
    fileSize?: IntWithAggregatesFilter<"CustomModel"> | number
    filePath?: StringWithAggregatesFilter<"CustomModel"> | string
    fileData?: BytesNullableWithAggregatesFilter<"CustomModel"> | Uint8Array | null
    description?: StringNullableWithAggregatesFilter<"CustomModel"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomModel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CustomModel"> | Date | string
  }

  export type AnalysisResultWhereInput = {
    AND?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    OR?: AnalysisResultWhereInput[]
    NOT?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    id?: StringFilter<"AnalysisResult"> | string
    modelUsed?: StringFilter<"AnalysisResult"> | string
    attackUsed?: StringFilter<"AnalysisResult"> | string
    originalPrediction?: StringFilter<"AnalysisResult"> | string
    originalConfidence?: FloatFilter<"AnalysisResult"> | number
    adversarialPrediction?: StringFilter<"AnalysisResult"> | string
    adversarialConfidence?: FloatFilter<"AnalysisResult"> | number
    originalImage?: StringFilter<"AnalysisResult"> | string
    adversarialImage?: StringFilter<"AnalysisResult"> | string
    heatmapImage?: StringNullableFilter<"AnalysisResult"> | string | null
    createdAt?: DateTimeFilter<"AnalysisResult"> | Date | string
    userId?: StringFilter<"AnalysisResult"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnalysisResultOrderByWithRelationInput = {
    id?: SortOrder
    modelUsed?: SortOrder
    attackUsed?: SortOrder
    originalPrediction?: SortOrder
    originalConfidence?: SortOrder
    adversarialPrediction?: SortOrder
    adversarialConfidence?: SortOrder
    originalImage?: SortOrder
    adversarialImage?: SortOrder
    heatmapImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type AnalysisResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    OR?: AnalysisResultWhereInput[]
    NOT?: AnalysisResultWhereInput | AnalysisResultWhereInput[]
    modelUsed?: StringFilter<"AnalysisResult"> | string
    attackUsed?: StringFilter<"AnalysisResult"> | string
    originalPrediction?: StringFilter<"AnalysisResult"> | string
    originalConfidence?: FloatFilter<"AnalysisResult"> | number
    adversarialPrediction?: StringFilter<"AnalysisResult"> | string
    adversarialConfidence?: FloatFilter<"AnalysisResult"> | number
    originalImage?: StringFilter<"AnalysisResult"> | string
    adversarialImage?: StringFilter<"AnalysisResult"> | string
    heatmapImage?: StringNullableFilter<"AnalysisResult"> | string | null
    createdAt?: DateTimeFilter<"AnalysisResult"> | Date | string
    userId?: StringFilter<"AnalysisResult"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AnalysisResultOrderByWithAggregationInput = {
    id?: SortOrder
    modelUsed?: SortOrder
    attackUsed?: SortOrder
    originalPrediction?: SortOrder
    originalConfidence?: SortOrder
    adversarialPrediction?: SortOrder
    adversarialConfidence?: SortOrder
    originalImage?: SortOrder
    adversarialImage?: SortOrder
    heatmapImage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: AnalysisResultCountOrderByAggregateInput
    _avg?: AnalysisResultAvgOrderByAggregateInput
    _max?: AnalysisResultMaxOrderByAggregateInput
    _min?: AnalysisResultMinOrderByAggregateInput
    _sum?: AnalysisResultSumOrderByAggregateInput
  }

  export type AnalysisResultScalarWhereWithAggregatesInput = {
    AND?: AnalysisResultScalarWhereWithAggregatesInput | AnalysisResultScalarWhereWithAggregatesInput[]
    OR?: AnalysisResultScalarWhereWithAggregatesInput[]
    NOT?: AnalysisResultScalarWhereWithAggregatesInput | AnalysisResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnalysisResult"> | string
    modelUsed?: StringWithAggregatesFilter<"AnalysisResult"> | string
    attackUsed?: StringWithAggregatesFilter<"AnalysisResult"> | string
    originalPrediction?: StringWithAggregatesFilter<"AnalysisResult"> | string
    originalConfidence?: FloatWithAggregatesFilter<"AnalysisResult"> | number
    adversarialPrediction?: StringWithAggregatesFilter<"AnalysisResult"> | string
    adversarialConfidence?: FloatWithAggregatesFilter<"AnalysisResult"> | number
    originalImage?: StringWithAggregatesFilter<"AnalysisResult"> | string
    adversarialImage?: StringWithAggregatesFilter<"AnalysisResult"> | string
    heatmapImage?: StringNullableWithAggregatesFilter<"AnalysisResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnalysisResult"> | Date | string
    userId?: StringWithAggregatesFilter<"AnalysisResult"> | string
  }

  export type UserCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    UserModel?: CustomModelCreateNestedManyWithoutUserInput
    AnalysisResult?: AnalysisResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    UserModel?: CustomModelUncheckedCreateNestedManyWithoutUserInput
    AnalysisResult?: AnalysisResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserModel?: CustomModelUpdateManyWithoutUserNestedInput
    AnalysisResult?: AnalysisResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserModel?: CustomModelUncheckedUpdateManyWithoutUserNestedInput
    AnalysisResult?: AnalysisResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomModelCreateInput = {
    id?: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData?: Uint8Array | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserModelInput
  }

  export type CustomModelUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData?: Uint8Array | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomModelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserModelNestedInput
  }

  export type CustomModelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomModelCreateManyInput = {
    id?: string
    userId: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData?: Uint8Array | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomModelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomModelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisResultCreateInput = {
    id?: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage?: string | null
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutAnalysisResultInput
  }

  export type AnalysisResultUncheckedCreateInput = {
    id?: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type AnalysisResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutAnalysisResultNestedInput
  }

  export type AnalysisResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AnalysisResultCreateManyInput = {
    id?: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage?: string | null
    createdAt?: Date | string
    userId: string
  }

  export type AnalysisResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomModelListRelationFilter = {
    every?: CustomModelWhereInput
    some?: CustomModelWhereInput
    none?: CustomModelWhereInput
  }

  export type AnalysisResultListRelationFilter = {
    every?: AnalysisResultWhereInput
    some?: AnalysisResultWhereInput
    none?: AnalysisResultWhereInput
  }

  export type CustomModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnalysisResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    profileImage?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomModelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    fileData?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomModelAvgOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type CustomModelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    fileData?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomModelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    fileName?: SortOrder
    fileType?: SortOrder
    fileSize?: SortOrder
    filePath?: SortOrder
    fileData?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomModelSumOrderByAggregateInput = {
    fileSize?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AnalysisResultCountOrderByAggregateInput = {
    id?: SortOrder
    modelUsed?: SortOrder
    attackUsed?: SortOrder
    originalPrediction?: SortOrder
    originalConfidence?: SortOrder
    adversarialPrediction?: SortOrder
    adversarialConfidence?: SortOrder
    originalImage?: SortOrder
    adversarialImage?: SortOrder
    heatmapImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultAvgOrderByAggregateInput = {
    originalConfidence?: SortOrder
    adversarialConfidence?: SortOrder
  }

  export type AnalysisResultMaxOrderByAggregateInput = {
    id?: SortOrder
    modelUsed?: SortOrder
    attackUsed?: SortOrder
    originalPrediction?: SortOrder
    originalConfidence?: SortOrder
    adversarialPrediction?: SortOrder
    adversarialConfidence?: SortOrder
    originalImage?: SortOrder
    adversarialImage?: SortOrder
    heatmapImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultMinOrderByAggregateInput = {
    id?: SortOrder
    modelUsed?: SortOrder
    attackUsed?: SortOrder
    originalPrediction?: SortOrder
    originalConfidence?: SortOrder
    adversarialPrediction?: SortOrder
    adversarialConfidence?: SortOrder
    originalImage?: SortOrder
    adversarialImage?: SortOrder
    heatmapImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type AnalysisResultSumOrderByAggregateInput = {
    originalConfidence?: SortOrder
    adversarialConfidence?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CustomModelCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomModelCreateWithoutUserInput, CustomModelUncheckedCreateWithoutUserInput> | CustomModelCreateWithoutUserInput[] | CustomModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomModelCreateOrConnectWithoutUserInput | CustomModelCreateOrConnectWithoutUserInput[]
    createMany?: CustomModelCreateManyUserInputEnvelope
    connect?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
  }

  export type AnalysisResultCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
  }

  export type CustomModelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CustomModelCreateWithoutUserInput, CustomModelUncheckedCreateWithoutUserInput> | CustomModelCreateWithoutUserInput[] | CustomModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomModelCreateOrConnectWithoutUserInput | CustomModelCreateOrConnectWithoutUserInput[]
    createMany?: CustomModelCreateManyUserInputEnvelope
    connect?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
  }

  export type AnalysisResultUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomModelUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomModelCreateWithoutUserInput, CustomModelUncheckedCreateWithoutUserInput> | CustomModelCreateWithoutUserInput[] | CustomModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomModelCreateOrConnectWithoutUserInput | CustomModelCreateOrConnectWithoutUserInput[]
    upsert?: CustomModelUpsertWithWhereUniqueWithoutUserInput | CustomModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomModelCreateManyUserInputEnvelope
    set?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    disconnect?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    delete?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    connect?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    update?: CustomModelUpdateWithWhereUniqueWithoutUserInput | CustomModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomModelUpdateManyWithWhereWithoutUserInput | CustomModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomModelScalarWhereInput | CustomModelScalarWhereInput[]
  }

  export type AnalysisResultUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisResultUpsertWithWhereUniqueWithoutUserInput | AnalysisResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    set?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    disconnect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    delete?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    update?: AnalysisResultUpdateWithWhereUniqueWithoutUserInput | AnalysisResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisResultUpdateManyWithWhereWithoutUserInput | AnalysisResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
  }

  export type CustomModelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CustomModelCreateWithoutUserInput, CustomModelUncheckedCreateWithoutUserInput> | CustomModelCreateWithoutUserInput[] | CustomModelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CustomModelCreateOrConnectWithoutUserInput | CustomModelCreateOrConnectWithoutUserInput[]
    upsert?: CustomModelUpsertWithWhereUniqueWithoutUserInput | CustomModelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CustomModelCreateManyUserInputEnvelope
    set?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    disconnect?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    delete?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    connect?: CustomModelWhereUniqueInput | CustomModelWhereUniqueInput[]
    update?: CustomModelUpdateWithWhereUniqueWithoutUserInput | CustomModelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CustomModelUpdateManyWithWhereWithoutUserInput | CustomModelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CustomModelScalarWhereInput | CustomModelScalarWhereInput[]
  }

  export type AnalysisResultUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput> | AnalysisResultCreateWithoutUserInput[] | AnalysisResultUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisResultCreateOrConnectWithoutUserInput | AnalysisResultCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisResultUpsertWithWhereUniqueWithoutUserInput | AnalysisResultUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisResultCreateManyUserInputEnvelope
    set?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    disconnect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    delete?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    connect?: AnalysisResultWhereUniqueInput | AnalysisResultWhereUniqueInput[]
    update?: AnalysisResultUpdateWithWhereUniqueWithoutUserInput | AnalysisResultUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisResultUpdateManyWithWhereWithoutUserInput | AnalysisResultUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserModelInput = {
    create?: XOR<UserCreateWithoutUserModelInput, UserUncheckedCreateWithoutUserModelInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserModelInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutUserModelNestedInput = {
    create?: XOR<UserCreateWithoutUserModelInput, UserUncheckedCreateWithoutUserModelInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserModelInput
    upsert?: UserUpsertWithoutUserModelInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserModelInput, UserUpdateWithoutUserModelInput>, UserUncheckedUpdateWithoutUserModelInput>
  }

  export type UserCreateNestedOneWithoutAnalysisResultInput = {
    create?: XOR<UserCreateWithoutAnalysisResultInput, UserUncheckedCreateWithoutAnalysisResultInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysisResultInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAnalysisResultNestedInput = {
    create?: XOR<UserCreateWithoutAnalysisResultInput, UserUncheckedCreateWithoutAnalysisResultInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysisResultInput
    upsert?: UserUpsertWithoutAnalysisResultInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysisResultInput, UserUpdateWithoutAnalysisResultInput>, UserUncheckedUpdateWithoutAnalysisResultInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CustomModelCreateWithoutUserInput = {
    id?: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData?: Uint8Array | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomModelUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData?: Uint8Array | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomModelCreateOrConnectWithoutUserInput = {
    where: CustomModelWhereUniqueInput
    create: XOR<CustomModelCreateWithoutUserInput, CustomModelUncheckedCreateWithoutUserInput>
  }

  export type CustomModelCreateManyUserInputEnvelope = {
    data: CustomModelCreateManyUserInput | CustomModelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisResultCreateWithoutUserInput = {
    id?: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage?: string | null
    createdAt?: Date | string
  }

  export type AnalysisResultUncheckedCreateWithoutUserInput = {
    id?: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage?: string | null
    createdAt?: Date | string
  }

  export type AnalysisResultCreateOrConnectWithoutUserInput = {
    where: AnalysisResultWhereUniqueInput
    create: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput>
  }

  export type AnalysisResultCreateManyUserInputEnvelope = {
    data: AnalysisResultCreateManyUserInput | AnalysisResultCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomModelUpsertWithWhereUniqueWithoutUserInput = {
    where: CustomModelWhereUniqueInput
    update: XOR<CustomModelUpdateWithoutUserInput, CustomModelUncheckedUpdateWithoutUserInput>
    create: XOR<CustomModelCreateWithoutUserInput, CustomModelUncheckedCreateWithoutUserInput>
  }

  export type CustomModelUpdateWithWhereUniqueWithoutUserInput = {
    where: CustomModelWhereUniqueInput
    data: XOR<CustomModelUpdateWithoutUserInput, CustomModelUncheckedUpdateWithoutUserInput>
  }

  export type CustomModelUpdateManyWithWhereWithoutUserInput = {
    where: CustomModelScalarWhereInput
    data: XOR<CustomModelUpdateManyMutationInput, CustomModelUncheckedUpdateManyWithoutUserInput>
  }

  export type CustomModelScalarWhereInput = {
    AND?: CustomModelScalarWhereInput | CustomModelScalarWhereInput[]
    OR?: CustomModelScalarWhereInput[]
    NOT?: CustomModelScalarWhereInput | CustomModelScalarWhereInput[]
    id?: StringFilter<"CustomModel"> | string
    userId?: StringFilter<"CustomModel"> | string
    name?: StringFilter<"CustomModel"> | string
    fileName?: StringFilter<"CustomModel"> | string
    fileType?: StringFilter<"CustomModel"> | string
    fileSize?: IntFilter<"CustomModel"> | number
    filePath?: StringFilter<"CustomModel"> | string
    fileData?: BytesNullableFilter<"CustomModel"> | Uint8Array | null
    description?: StringNullableFilter<"CustomModel"> | string | null
    createdAt?: DateTimeFilter<"CustomModel"> | Date | string
    updatedAt?: DateTimeFilter<"CustomModel"> | Date | string
  }

  export type AnalysisResultUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisResultWhereUniqueInput
    update: XOR<AnalysisResultUpdateWithoutUserInput, AnalysisResultUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisResultCreateWithoutUserInput, AnalysisResultUncheckedCreateWithoutUserInput>
  }

  export type AnalysisResultUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisResultWhereUniqueInput
    data: XOR<AnalysisResultUpdateWithoutUserInput, AnalysisResultUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisResultUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisResultScalarWhereInput
    data: XOR<AnalysisResultUpdateManyMutationInput, AnalysisResultUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisResultScalarWhereInput = {
    AND?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
    OR?: AnalysisResultScalarWhereInput[]
    NOT?: AnalysisResultScalarWhereInput | AnalysisResultScalarWhereInput[]
    id?: StringFilter<"AnalysisResult"> | string
    modelUsed?: StringFilter<"AnalysisResult"> | string
    attackUsed?: StringFilter<"AnalysisResult"> | string
    originalPrediction?: StringFilter<"AnalysisResult"> | string
    originalConfidence?: FloatFilter<"AnalysisResult"> | number
    adversarialPrediction?: StringFilter<"AnalysisResult"> | string
    adversarialConfidence?: FloatFilter<"AnalysisResult"> | number
    originalImage?: StringFilter<"AnalysisResult"> | string
    adversarialImage?: StringFilter<"AnalysisResult"> | string
    heatmapImage?: StringNullableFilter<"AnalysisResult"> | string | null
    createdAt?: DateTimeFilter<"AnalysisResult"> | Date | string
    userId?: StringFilter<"AnalysisResult"> | string
  }

  export type UserCreateWithoutUserModelInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    AnalysisResult?: AnalysisResultCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserModelInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    AnalysisResult?: AnalysisResultUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserModelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserModelInput, UserUncheckedCreateWithoutUserModelInput>
  }

  export type UserUpsertWithoutUserModelInput = {
    update: XOR<UserUpdateWithoutUserModelInput, UserUncheckedUpdateWithoutUserModelInput>
    create: XOR<UserCreateWithoutUserModelInput, UserUncheckedCreateWithoutUserModelInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserModelInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserModelInput, UserUncheckedUpdateWithoutUserModelInput>
  }

  export type UserUpdateWithoutUserModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AnalysisResult?: AnalysisResultUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    AnalysisResult?: AnalysisResultUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAnalysisResultInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    UserModel?: CustomModelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysisResultInput = {
    id: string
    email: string
    firstName: string
    lastName: string
    profileImage: string
    createdAt?: Date | string
    UserModel?: CustomModelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysisResultInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysisResultInput, UserUncheckedCreateWithoutAnalysisResultInput>
  }

  export type UserUpsertWithoutAnalysisResultInput = {
    update: XOR<UserUpdateWithoutAnalysisResultInput, UserUncheckedUpdateWithoutAnalysisResultInput>
    create: XOR<UserCreateWithoutAnalysisResultInput, UserUncheckedCreateWithoutAnalysisResultInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysisResultInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysisResultInput, UserUncheckedUpdateWithoutAnalysisResultInput>
  }

  export type UserUpdateWithoutAnalysisResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserModel?: CustomModelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysisResultInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    profileImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserModel?: CustomModelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CustomModelCreateManyUserInput = {
    id?: string
    name: string
    fileName: string
    fileType: string
    fileSize: number
    filePath: string
    fileData?: Uint8Array | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnalysisResultCreateManyUserInput = {
    id?: string
    modelUsed: string
    attackUsed: string
    originalPrediction: string
    originalConfidence: number
    adversarialPrediction: string
    adversarialConfidence: number
    originalImage: string
    adversarialImage: string
    heatmapImage?: string | null
    createdAt?: Date | string
  }

  export type CustomModelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomModelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomModelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    fileSize?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    fileData?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisResultUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisResultUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisResultUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelUsed?: StringFieldUpdateOperationsInput | string
    attackUsed?: StringFieldUpdateOperationsInput | string
    originalPrediction?: StringFieldUpdateOperationsInput | string
    originalConfidence?: FloatFieldUpdateOperationsInput | number
    adversarialPrediction?: StringFieldUpdateOperationsInput | string
    adversarialConfidence?: FloatFieldUpdateOperationsInput | number
    originalImage?: StringFieldUpdateOperationsInput | string
    adversarialImage?: StringFieldUpdateOperationsInput | string
    heatmapImage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}