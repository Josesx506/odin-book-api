
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
 * Model SocialSession
 * 
 */
export type SocialSession = $Result.DefaultSelection<Prisma.$SocialSessionPayload>
/**
 * Model SocialUser
 * 
 */
export type SocialUser = $Result.DefaultSelection<Prisma.$SocialUserPayload>
/**
 * Model SocialFriendship
 * 
 */
export type SocialFriendship = $Result.DefaultSelection<Prisma.$SocialFriendshipPayload>
/**
 * Model SocialPost
 * 
 */
export type SocialPost = $Result.DefaultSelection<Prisma.$SocialPostPayload>
/**
 * Model SocialComment
 * 
 */
export type SocialComment = $Result.DefaultSelection<Prisma.$SocialCommentPayload>
/**
 * Model PostLike
 * 
 */
export type PostLike = $Result.DefaultSelection<Prisma.$PostLikePayload>
/**
 * Model CommentLike
 * 
 */
export type CommentLike = $Result.DefaultSelection<Prisma.$CommentLikePayload>
/**
 * Model PostView
 * 
 */
export type PostView = $Result.DefaultSelection<Prisma.$PostViewPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SocialSessions
 * const socialSessions = await prisma.socialSession.findMany()
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
   * // Fetch zero or more SocialSessions
   * const socialSessions = await prisma.socialSession.findMany()
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
   * `prisma.socialSession`: Exposes CRUD operations for the **SocialSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialSessions
    * const socialSessions = await prisma.socialSession.findMany()
    * ```
    */
  get socialSession(): Prisma.SocialSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialUser`: Exposes CRUD operations for the **SocialUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialUsers
    * const socialUsers = await prisma.socialUser.findMany()
    * ```
    */
  get socialUser(): Prisma.SocialUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialFriendship`: Exposes CRUD operations for the **SocialFriendship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialFriendships
    * const socialFriendships = await prisma.socialFriendship.findMany()
    * ```
    */
  get socialFriendship(): Prisma.SocialFriendshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialPost`: Exposes CRUD operations for the **SocialPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialPosts
    * const socialPosts = await prisma.socialPost.findMany()
    * ```
    */
  get socialPost(): Prisma.SocialPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialComment`: Exposes CRUD operations for the **SocialComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialComments
    * const socialComments = await prisma.socialComment.findMany()
    * ```
    */
  get socialComment(): Prisma.SocialCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLike`: Exposes CRUD operations for the **PostLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLike.findMany()
    * ```
    */
  get postLike(): Prisma.PostLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commentLike`: Exposes CRUD operations for the **CommentLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommentLikes
    * const commentLikes = await prisma.commentLike.findMany()
    * ```
    */
  get commentLike(): Prisma.CommentLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postView`: Exposes CRUD operations for the **PostView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostViews
    * const postViews = await prisma.postView.findMany()
    * ```
    */
  get postView(): Prisma.PostViewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    SocialSession: 'SocialSession',
    SocialUser: 'SocialUser',
    SocialFriendship: 'SocialFriendship',
    SocialPost: 'SocialPost',
    SocialComment: 'SocialComment',
    PostLike: 'PostLike',
    CommentLike: 'CommentLike',
    PostView: 'PostView'
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
      modelProps: "socialSession" | "socialUser" | "socialFriendship" | "socialPost" | "socialComment" | "postLike" | "commentLike" | "postView"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SocialSession: {
        payload: Prisma.$SocialSessionPayload<ExtArgs>
        fields: Prisma.SocialSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>
          }
          findFirst: {
            args: Prisma.SocialSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>
          }
          findMany: {
            args: Prisma.SocialSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>[]
          }
          create: {
            args: Prisma.SocialSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>
          }
          createMany: {
            args: Prisma.SocialSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>[]
          }
          delete: {
            args: Prisma.SocialSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>
          }
          update: {
            args: Prisma.SocialSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>
          }
          deleteMany: {
            args: Prisma.SocialSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>[]
          }
          upsert: {
            args: Prisma.SocialSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialSessionPayload>
          }
          aggregate: {
            args: Prisma.SocialSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialSession>
          }
          groupBy: {
            args: Prisma.SocialSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialSessionCountArgs<ExtArgs>
            result: $Utils.Optional<SocialSessionCountAggregateOutputType> | number
          }
        }
      }
      SocialUser: {
        payload: Prisma.$SocialUserPayload<ExtArgs>
        fields: Prisma.SocialUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          findFirst: {
            args: Prisma.SocialUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          findMany: {
            args: Prisma.SocialUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>[]
          }
          create: {
            args: Prisma.SocialUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          createMany: {
            args: Prisma.SocialUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>[]
          }
          delete: {
            args: Prisma.SocialUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          update: {
            args: Prisma.SocialUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          deleteMany: {
            args: Prisma.SocialUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>[]
          }
          upsert: {
            args: Prisma.SocialUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialUserPayload>
          }
          aggregate: {
            args: Prisma.SocialUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialUser>
          }
          groupBy: {
            args: Prisma.SocialUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialUserCountArgs<ExtArgs>
            result: $Utils.Optional<SocialUserCountAggregateOutputType> | number
          }
        }
      }
      SocialFriendship: {
        payload: Prisma.$SocialFriendshipPayload<ExtArgs>
        fields: Prisma.SocialFriendshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialFriendshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialFriendshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>
          }
          findFirst: {
            args: Prisma.SocialFriendshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialFriendshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>
          }
          findMany: {
            args: Prisma.SocialFriendshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>[]
          }
          create: {
            args: Prisma.SocialFriendshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>
          }
          createMany: {
            args: Prisma.SocialFriendshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialFriendshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>[]
          }
          delete: {
            args: Prisma.SocialFriendshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>
          }
          update: {
            args: Prisma.SocialFriendshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>
          }
          deleteMany: {
            args: Prisma.SocialFriendshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialFriendshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialFriendshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>[]
          }
          upsert: {
            args: Prisma.SocialFriendshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialFriendshipPayload>
          }
          aggregate: {
            args: Prisma.SocialFriendshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialFriendship>
          }
          groupBy: {
            args: Prisma.SocialFriendshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialFriendshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialFriendshipCountArgs<ExtArgs>
            result: $Utils.Optional<SocialFriendshipCountAggregateOutputType> | number
          }
        }
      }
      SocialPost: {
        payload: Prisma.$SocialPostPayload<ExtArgs>
        fields: Prisma.SocialPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findFirst: {
            args: Prisma.SocialPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findMany: {
            args: Prisma.SocialPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          create: {
            args: Prisma.SocialPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          createMany: {
            args: Prisma.SocialPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          delete: {
            args: Prisma.SocialPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          update: {
            args: Prisma.SocialPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          deleteMany: {
            args: Prisma.SocialPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          upsert: {
            args: Prisma.SocialPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          aggregate: {
            args: Prisma.SocialPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialPost>
          }
          groupBy: {
            args: Prisma.SocialPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialPostCountArgs<ExtArgs>
            result: $Utils.Optional<SocialPostCountAggregateOutputType> | number
          }
        }
      }
      SocialComment: {
        payload: Prisma.$SocialCommentPayload<ExtArgs>
        fields: Prisma.SocialCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>
          }
          findFirst: {
            args: Prisma.SocialCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>
          }
          findMany: {
            args: Prisma.SocialCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>[]
          }
          create: {
            args: Prisma.SocialCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>
          }
          createMany: {
            args: Prisma.SocialCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialCommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>[]
          }
          delete: {
            args: Prisma.SocialCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>
          }
          update: {
            args: Prisma.SocialCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>
          }
          deleteMany: {
            args: Prisma.SocialCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialCommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>[]
          }
          upsert: {
            args: Prisma.SocialCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialCommentPayload>
          }
          aggregate: {
            args: Prisma.SocialCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialComment>
          }
          groupBy: {
            args: Prisma.SocialCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialCommentCountArgs<ExtArgs>
            result: $Utils.Optional<SocialCommentCountAggregateOutputType> | number
          }
        }
      }
      PostLike: {
        payload: Prisma.$PostLikePayload<ExtArgs>
        fields: Prisma.PostLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findFirst: {
            args: Prisma.PostLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findMany: {
            args: Prisma.PostLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          create: {
            args: Prisma.PostLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          createMany: {
            args: Prisma.PostLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          delete: {
            args: Prisma.PostLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          update: {
            args: Prisma.PostLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          deleteMany: {
            args: Prisma.PostLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          upsert: {
            args: Prisma.PostLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          aggregate: {
            args: Prisma.PostLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLike>
          }
          groupBy: {
            args: Prisma.PostLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikeCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikeCountAggregateOutputType> | number
          }
        }
      }
      CommentLike: {
        payload: Prisma.$CommentLikePayload<ExtArgs>
        fields: Prisma.CommentLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          findFirst: {
            args: Prisma.CommentLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          findMany: {
            args: Prisma.CommentLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>[]
          }
          create: {
            args: Prisma.CommentLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          createMany: {
            args: Prisma.CommentLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>[]
          }
          delete: {
            args: Prisma.CommentLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          update: {
            args: Prisma.CommentLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          deleteMany: {
            args: Prisma.CommentLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>[]
          }
          upsert: {
            args: Prisma.CommentLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentLikePayload>
          }
          aggregate: {
            args: Prisma.CommentLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommentLike>
          }
          groupBy: {
            args: Prisma.CommentLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentLikeCountArgs<ExtArgs>
            result: $Utils.Optional<CommentLikeCountAggregateOutputType> | number
          }
        }
      }
      PostView: {
        payload: Prisma.$PostViewPayload<ExtArgs>
        fields: Prisma.PostViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          findFirst: {
            args: Prisma.PostViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          findMany: {
            args: Prisma.PostViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>[]
          }
          create: {
            args: Prisma.PostViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          createMany: {
            args: Prisma.PostViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>[]
          }
          delete: {
            args: Prisma.PostViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          update: {
            args: Prisma.PostViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          deleteMany: {
            args: Prisma.PostViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>[]
          }
          upsert: {
            args: Prisma.PostViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostViewPayload>
          }
          aggregate: {
            args: Prisma.PostViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostView>
          }
          groupBy: {
            args: Prisma.PostViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostViewCountArgs<ExtArgs>
            result: $Utils.Optional<PostViewCountAggregateOutputType> | number
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
    socialSession?: SocialSessionOmit
    socialUser?: SocialUserOmit
    socialFriendship?: SocialFriendshipOmit
    socialPost?: SocialPostOmit
    socialComment?: SocialCommentOmit
    postLike?: PostLikeOmit
    commentLike?: CommentLikeOmit
    postView?: PostViewOmit
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
   * Count Type SocialUserCountOutputType
   */

  export type SocialUserCountOutputType = {
    friends: number
    friendOf: number
    posts: number
    comments: number
    likedposts: number
    likedcomments: number
    viewedposts: number
  }

  export type SocialUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | SocialUserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | SocialUserCountOutputTypeCountFriendOfArgs
    posts?: boolean | SocialUserCountOutputTypeCountPostsArgs
    comments?: boolean | SocialUserCountOutputTypeCountCommentsArgs
    likedposts?: boolean | SocialUserCountOutputTypeCountLikedpostsArgs
    likedcomments?: boolean | SocialUserCountOutputTypeCountLikedcommentsArgs
    viewedposts?: boolean | SocialUserCountOutputTypeCountViewedpostsArgs
  }

  // Custom InputTypes
  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUserCountOutputType
     */
    select?: SocialUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialFriendshipWhereInput
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialFriendshipWhereInput
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPostWhereInput
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialCommentWhereInput
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountLikedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountLikedcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentLikeWhereInput
  }

  /**
   * SocialUserCountOutputType without action
   */
  export type SocialUserCountOutputTypeCountViewedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewWhereInput
  }


  /**
   * Count Type SocialPostCountOutputType
   */

  export type SocialPostCountOutputType = {
    likes: number
    views: number
    comments: number
  }

  export type SocialPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | SocialPostCountOutputTypeCountLikesArgs
    views?: boolean | SocialPostCountOutputTypeCountViewsArgs
    comments?: boolean | SocialPostCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * SocialPostCountOutputType without action
   */
  export type SocialPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPostCountOutputType
     */
    select?: SocialPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialPostCountOutputType without action
   */
  export type SocialPostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }

  /**
   * SocialPostCountOutputType without action
   */
  export type SocialPostCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewWhereInput
  }

  /**
   * SocialPostCountOutputType without action
   */
  export type SocialPostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialCommentWhereInput
  }


  /**
   * Count Type SocialCommentCountOutputType
   */

  export type SocialCommentCountOutputType = {
    likes: number
  }

  export type SocialCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | SocialCommentCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * SocialCommentCountOutputType without action
   */
  export type SocialCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialCommentCountOutputType
     */
    select?: SocialCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SocialCommentCountOutputType without action
   */
  export type SocialCommentCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SocialSession
   */

  export type AggregateSocialSession = {
    _count: SocialSessionCountAggregateOutputType | null
    _min: SocialSessionMinAggregateOutputType | null
    _max: SocialSessionMaxAggregateOutputType | null
  }

  export type SocialSessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SocialSessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SocialSessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SocialSessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SocialSessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SocialSessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SocialSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialSession to aggregate.
     */
    where?: SocialSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialSessions to fetch.
     */
    orderBy?: SocialSessionOrderByWithRelationInput | SocialSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialSessions
    **/
    _count?: true | SocialSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialSessionMaxAggregateInputType
  }

  export type GetSocialSessionAggregateType<T extends SocialSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialSession[P]>
      : GetScalarType<T[P], AggregateSocialSession[P]>
  }




  export type SocialSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialSessionWhereInput
    orderBy?: SocialSessionOrderByWithAggregationInput | SocialSessionOrderByWithAggregationInput[]
    by: SocialSessionScalarFieldEnum[] | SocialSessionScalarFieldEnum
    having?: SocialSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialSessionCountAggregateInputType | true
    _min?: SocialSessionMinAggregateInputType
    _max?: SocialSessionMaxAggregateInputType
  }

  export type SocialSessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SocialSessionCountAggregateOutputType | null
    _min: SocialSessionMinAggregateOutputType | null
    _max: SocialSessionMaxAggregateOutputType | null
  }

  type GetSocialSessionGroupByPayload<T extends SocialSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialSessionGroupByOutputType[P]>
            : GetScalarType<T[P], SocialSessionGroupByOutputType[P]>
        }
      >
    >


  export type SocialSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["socialSession"]>

  export type SocialSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["socialSession"]>

  export type SocialSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["socialSession"]>

  export type SocialSessionSelectScalar = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SocialSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sid" | "data" | "expiresAt", ExtArgs["result"]["socialSession"]>

  export type $SocialSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialSession"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sid: string
      data: string
      expiresAt: Date
    }, ExtArgs["result"]["socialSession"]>
    composites: {}
  }

  type SocialSessionGetPayload<S extends boolean | null | undefined | SocialSessionDefaultArgs> = $Result.GetResult<Prisma.$SocialSessionPayload, S>

  type SocialSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialSessionCountAggregateInputType | true
    }

  export interface SocialSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialSession'], meta: { name: 'SocialSession' } }
    /**
     * Find zero or one SocialSession that matches the filter.
     * @param {SocialSessionFindUniqueArgs} args - Arguments to find a SocialSession
     * @example
     * // Get one SocialSession
     * const socialSession = await prisma.socialSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialSessionFindUniqueArgs>(args: SelectSubset<T, SocialSessionFindUniqueArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialSessionFindUniqueOrThrowArgs} args - Arguments to find a SocialSession
     * @example
     * // Get one SocialSession
     * const socialSession = await prisma.socialSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionFindFirstArgs} args - Arguments to find a SocialSession
     * @example
     * // Get one SocialSession
     * const socialSession = await prisma.socialSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialSessionFindFirstArgs>(args?: SelectSubset<T, SocialSessionFindFirstArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionFindFirstOrThrowArgs} args - Arguments to find a SocialSession
     * @example
     * // Get one SocialSession
     * const socialSession = await prisma.socialSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialSessions
     * const socialSessions = await prisma.socialSession.findMany()
     * 
     * // Get first 10 SocialSessions
     * const socialSessions = await prisma.socialSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialSessionWithIdOnly = await prisma.socialSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialSessionFindManyArgs>(args?: SelectSubset<T, SocialSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialSession.
     * @param {SocialSessionCreateArgs} args - Arguments to create a SocialSession.
     * @example
     * // Create one SocialSession
     * const SocialSession = await prisma.socialSession.create({
     *   data: {
     *     // ... data to create a SocialSession
     *   }
     * })
     * 
     */
    create<T extends SocialSessionCreateArgs>(args: SelectSubset<T, SocialSessionCreateArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialSessions.
     * @param {SocialSessionCreateManyArgs} args - Arguments to create many SocialSessions.
     * @example
     * // Create many SocialSessions
     * const socialSession = await prisma.socialSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialSessionCreateManyArgs>(args?: SelectSubset<T, SocialSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialSessions and returns the data saved in the database.
     * @param {SocialSessionCreateManyAndReturnArgs} args - Arguments to create many SocialSessions.
     * @example
     * // Create many SocialSessions
     * const socialSession = await prisma.socialSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialSessions and only return the `id`
     * const socialSessionWithIdOnly = await prisma.socialSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialSession.
     * @param {SocialSessionDeleteArgs} args - Arguments to delete one SocialSession.
     * @example
     * // Delete one SocialSession
     * const SocialSession = await prisma.socialSession.delete({
     *   where: {
     *     // ... filter to delete one SocialSession
     *   }
     * })
     * 
     */
    delete<T extends SocialSessionDeleteArgs>(args: SelectSubset<T, SocialSessionDeleteArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialSession.
     * @param {SocialSessionUpdateArgs} args - Arguments to update one SocialSession.
     * @example
     * // Update one SocialSession
     * const socialSession = await prisma.socialSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialSessionUpdateArgs>(args: SelectSubset<T, SocialSessionUpdateArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialSessions.
     * @param {SocialSessionDeleteManyArgs} args - Arguments to filter SocialSessions to delete.
     * @example
     * // Delete a few SocialSessions
     * const { count } = await prisma.socialSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialSessionDeleteManyArgs>(args?: SelectSubset<T, SocialSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialSessions
     * const socialSession = await prisma.socialSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialSessionUpdateManyArgs>(args: SelectSubset<T, SocialSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialSessions and returns the data updated in the database.
     * @param {SocialSessionUpdateManyAndReturnArgs} args - Arguments to update many SocialSessions.
     * @example
     * // Update many SocialSessions
     * const socialSession = await prisma.socialSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialSessions and only return the `id`
     * const socialSessionWithIdOnly = await prisma.socialSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialSession.
     * @param {SocialSessionUpsertArgs} args - Arguments to update or create a SocialSession.
     * @example
     * // Update or create a SocialSession
     * const socialSession = await prisma.socialSession.upsert({
     *   create: {
     *     // ... data to create a SocialSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialSession we want to update
     *   }
     * })
     */
    upsert<T extends SocialSessionUpsertArgs>(args: SelectSubset<T, SocialSessionUpsertArgs<ExtArgs>>): Prisma__SocialSessionClient<$Result.GetResult<Prisma.$SocialSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionCountArgs} args - Arguments to filter SocialSessions to count.
     * @example
     * // Count the number of SocialSessions
     * const count = await prisma.socialSession.count({
     *   where: {
     *     // ... the filter for the SocialSessions we want to count
     *   }
     * })
    **/
    count<T extends SocialSessionCountArgs>(
      args?: Subset<T, SocialSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialSessionAggregateArgs>(args: Subset<T, SocialSessionAggregateArgs>): Prisma.PrismaPromise<GetSocialSessionAggregateType<T>>

    /**
     * Group by SocialSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialSessionGroupByArgs} args - Group by arguments.
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
      T extends SocialSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialSessionGroupByArgs['orderBy'] }
        : { orderBy?: SocialSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialSession model
   */
  readonly fields: SocialSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SocialSession model
   */
  interface SocialSessionFieldRefs {
    readonly id: FieldRef<"SocialSession", 'String'>
    readonly sid: FieldRef<"SocialSession", 'String'>
    readonly data: FieldRef<"SocialSession", 'String'>
    readonly expiresAt: FieldRef<"SocialSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialSession findUnique
   */
  export type SocialSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * Filter, which SocialSession to fetch.
     */
    where: SocialSessionWhereUniqueInput
  }

  /**
   * SocialSession findUniqueOrThrow
   */
  export type SocialSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * Filter, which SocialSession to fetch.
     */
    where: SocialSessionWhereUniqueInput
  }

  /**
   * SocialSession findFirst
   */
  export type SocialSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * Filter, which SocialSession to fetch.
     */
    where?: SocialSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialSessions to fetch.
     */
    orderBy?: SocialSessionOrderByWithRelationInput | SocialSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialSessions.
     */
    cursor?: SocialSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialSessions.
     */
    distinct?: SocialSessionScalarFieldEnum | SocialSessionScalarFieldEnum[]
  }

  /**
   * SocialSession findFirstOrThrow
   */
  export type SocialSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * Filter, which SocialSession to fetch.
     */
    where?: SocialSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialSessions to fetch.
     */
    orderBy?: SocialSessionOrderByWithRelationInput | SocialSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialSessions.
     */
    cursor?: SocialSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialSessions.
     */
    distinct?: SocialSessionScalarFieldEnum | SocialSessionScalarFieldEnum[]
  }

  /**
   * SocialSession findMany
   */
  export type SocialSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * Filter, which SocialSessions to fetch.
     */
    where?: SocialSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialSessions to fetch.
     */
    orderBy?: SocialSessionOrderByWithRelationInput | SocialSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialSessions.
     */
    cursor?: SocialSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialSessions.
     */
    skip?: number
    distinct?: SocialSessionScalarFieldEnum | SocialSessionScalarFieldEnum[]
  }

  /**
   * SocialSession create
   */
  export type SocialSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * The data needed to create a SocialSession.
     */
    data: XOR<SocialSessionCreateInput, SocialSessionUncheckedCreateInput>
  }

  /**
   * SocialSession createMany
   */
  export type SocialSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialSessions.
     */
    data: SocialSessionCreateManyInput | SocialSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialSession createManyAndReturn
   */
  export type SocialSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * The data used to create many SocialSessions.
     */
    data: SocialSessionCreateManyInput | SocialSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialSession update
   */
  export type SocialSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * The data needed to update a SocialSession.
     */
    data: XOR<SocialSessionUpdateInput, SocialSessionUncheckedUpdateInput>
    /**
     * Choose, which SocialSession to update.
     */
    where: SocialSessionWhereUniqueInput
  }

  /**
   * SocialSession updateMany
   */
  export type SocialSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialSessions.
     */
    data: XOR<SocialSessionUpdateManyMutationInput, SocialSessionUncheckedUpdateManyInput>
    /**
     * Filter which SocialSessions to update
     */
    where?: SocialSessionWhereInput
    /**
     * Limit how many SocialSessions to update.
     */
    limit?: number
  }

  /**
   * SocialSession updateManyAndReturn
   */
  export type SocialSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * The data used to update SocialSessions.
     */
    data: XOR<SocialSessionUpdateManyMutationInput, SocialSessionUncheckedUpdateManyInput>
    /**
     * Filter which SocialSessions to update
     */
    where?: SocialSessionWhereInput
    /**
     * Limit how many SocialSessions to update.
     */
    limit?: number
  }

  /**
   * SocialSession upsert
   */
  export type SocialSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * The filter to search for the SocialSession to update in case it exists.
     */
    where: SocialSessionWhereUniqueInput
    /**
     * In case the SocialSession found by the `where` argument doesn't exist, create a new SocialSession with this data.
     */
    create: XOR<SocialSessionCreateInput, SocialSessionUncheckedCreateInput>
    /**
     * In case the SocialSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialSessionUpdateInput, SocialSessionUncheckedUpdateInput>
  }

  /**
   * SocialSession delete
   */
  export type SocialSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
    /**
     * Filter which SocialSession to delete.
     */
    where: SocialSessionWhereUniqueInput
  }

  /**
   * SocialSession deleteMany
   */
  export type SocialSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialSessions to delete
     */
    where?: SocialSessionWhereInput
    /**
     * Limit how many SocialSessions to delete.
     */
    limit?: number
  }

  /**
   * SocialSession without action
   */
  export type SocialSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialSession
     */
    select?: SocialSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialSession
     */
    omit?: SocialSessionOmit<ExtArgs> | null
  }


  /**
   * Model SocialUser
   */

  export type AggregateSocialUser = {
    _count: SocialUserCountAggregateOutputType | null
    _avg: SocialUserAvgAggregateOutputType | null
    _sum: SocialUserSumAggregateOutputType | null
    _min: SocialUserMinAggregateOutputType | null
    _max: SocialUserMaxAggregateOutputType | null
  }

  export type SocialUserAvgAggregateOutputType = {
    id: number | null
  }

  export type SocialUserSumAggregateOutputType = {
    id: number | null
  }

  export type SocialUserMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    password: string | null
    bio: string | null
    gravatar: string | null
    token: string | null
    githubotp: string | null
    createdAt: Date | null
  }

  export type SocialUserMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    username: string | null
    email: string | null
    password: string | null
    bio: string | null
    gravatar: string | null
    token: string | null
    githubotp: string | null
    createdAt: Date | null
  }

  export type SocialUserCountAggregateOutputType = {
    id: number
    fullname: number
    username: number
    email: number
    password: number
    bio: number
    gravatar: number
    token: number
    githubotp: number
    createdAt: number
    _all: number
  }


  export type SocialUserAvgAggregateInputType = {
    id?: true
  }

  export type SocialUserSumAggregateInputType = {
    id?: true
  }

  export type SocialUserMinAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    gravatar?: true
    token?: true
    githubotp?: true
    createdAt?: true
  }

  export type SocialUserMaxAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    gravatar?: true
    token?: true
    githubotp?: true
    createdAt?: true
  }

  export type SocialUserCountAggregateInputType = {
    id?: true
    fullname?: true
    username?: true
    email?: true
    password?: true
    bio?: true
    gravatar?: true
    token?: true
    githubotp?: true
    createdAt?: true
    _all?: true
  }

  export type SocialUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialUser to aggregate.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialUsers
    **/
    _count?: true | SocialUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialUserMaxAggregateInputType
  }

  export type GetSocialUserAggregateType<T extends SocialUserAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialUser[P]>
      : GetScalarType<T[P], AggregateSocialUser[P]>
  }




  export type SocialUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialUserWhereInput
    orderBy?: SocialUserOrderByWithAggregationInput | SocialUserOrderByWithAggregationInput[]
    by: SocialUserScalarFieldEnum[] | SocialUserScalarFieldEnum
    having?: SocialUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialUserCountAggregateInputType | true
    _avg?: SocialUserAvgAggregateInputType
    _sum?: SocialUserSumAggregateInputType
    _min?: SocialUserMinAggregateInputType
    _max?: SocialUserMaxAggregateInputType
  }

  export type SocialUserGroupByOutputType = {
    id: number
    fullname: string
    username: string
    email: string
    password: string | null
    bio: string | null
    gravatar: string | null
    token: string | null
    githubotp: string | null
    createdAt: Date
    _count: SocialUserCountAggregateOutputType | null
    _avg: SocialUserAvgAggregateOutputType | null
    _sum: SocialUserSumAggregateOutputType | null
    _min: SocialUserMinAggregateOutputType | null
    _max: SocialUserMaxAggregateOutputType | null
  }

  type GetSocialUserGroupByPayload<T extends SocialUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialUserGroupByOutputType[P]>
            : GetScalarType<T[P], SocialUserGroupByOutputType[P]>
        }
      >
    >


  export type SocialUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    gravatar?: boolean
    token?: boolean
    githubotp?: boolean
    createdAt?: boolean
    friends?: boolean | SocialUser$friendsArgs<ExtArgs>
    friendOf?: boolean | SocialUser$friendOfArgs<ExtArgs>
    posts?: boolean | SocialUser$postsArgs<ExtArgs>
    comments?: boolean | SocialUser$commentsArgs<ExtArgs>
    likedposts?: boolean | SocialUser$likedpostsArgs<ExtArgs>
    likedcomments?: boolean | SocialUser$likedcommentsArgs<ExtArgs>
    viewedposts?: boolean | SocialUser$viewedpostsArgs<ExtArgs>
    _count?: boolean | SocialUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialUser"]>

  export type SocialUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    gravatar?: boolean
    token?: boolean
    githubotp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialUser"]>

  export type SocialUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    gravatar?: boolean
    token?: boolean
    githubotp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["socialUser"]>

  export type SocialUserSelectScalar = {
    id?: boolean
    fullname?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    bio?: boolean
    gravatar?: boolean
    token?: boolean
    githubotp?: boolean
    createdAt?: boolean
  }

  export type SocialUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "username" | "email" | "password" | "bio" | "gravatar" | "token" | "githubotp" | "createdAt", ExtArgs["result"]["socialUser"]>
  export type SocialUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    friends?: boolean | SocialUser$friendsArgs<ExtArgs>
    friendOf?: boolean | SocialUser$friendOfArgs<ExtArgs>
    posts?: boolean | SocialUser$postsArgs<ExtArgs>
    comments?: boolean | SocialUser$commentsArgs<ExtArgs>
    likedposts?: boolean | SocialUser$likedpostsArgs<ExtArgs>
    likedcomments?: boolean | SocialUser$likedcommentsArgs<ExtArgs>
    viewedposts?: boolean | SocialUser$viewedpostsArgs<ExtArgs>
    _count?: boolean | SocialUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SocialUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SocialUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialUser"
    objects: {
      friends: Prisma.$SocialFriendshipPayload<ExtArgs>[]
      friendOf: Prisma.$SocialFriendshipPayload<ExtArgs>[]
      posts: Prisma.$SocialPostPayload<ExtArgs>[]
      comments: Prisma.$SocialCommentPayload<ExtArgs>[]
      likedposts: Prisma.$PostLikePayload<ExtArgs>[]
      likedcomments: Prisma.$CommentLikePayload<ExtArgs>[]
      viewedposts: Prisma.$PostViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string
      username: string
      email: string
      password: string | null
      bio: string | null
      gravatar: string | null
      token: string | null
      githubotp: string | null
      createdAt: Date
    }, ExtArgs["result"]["socialUser"]>
    composites: {}
  }

  type SocialUserGetPayload<S extends boolean | null | undefined | SocialUserDefaultArgs> = $Result.GetResult<Prisma.$SocialUserPayload, S>

  type SocialUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialUserCountAggregateInputType | true
    }

  export interface SocialUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialUser'], meta: { name: 'SocialUser' } }
    /**
     * Find zero or one SocialUser that matches the filter.
     * @param {SocialUserFindUniqueArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialUserFindUniqueArgs>(args: SelectSubset<T, SocialUserFindUniqueArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialUserFindUniqueOrThrowArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialUserFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserFindFirstArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialUserFindFirstArgs>(args?: SelectSubset<T, SocialUserFindFirstArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserFindFirstOrThrowArgs} args - Arguments to find a SocialUser
     * @example
     * // Get one SocialUser
     * const socialUser = await prisma.socialUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialUserFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialUsers
     * const socialUsers = await prisma.socialUser.findMany()
     * 
     * // Get first 10 SocialUsers
     * const socialUsers = await prisma.socialUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialUserWithIdOnly = await prisma.socialUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialUserFindManyArgs>(args?: SelectSubset<T, SocialUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialUser.
     * @param {SocialUserCreateArgs} args - Arguments to create a SocialUser.
     * @example
     * // Create one SocialUser
     * const SocialUser = await prisma.socialUser.create({
     *   data: {
     *     // ... data to create a SocialUser
     *   }
     * })
     * 
     */
    create<T extends SocialUserCreateArgs>(args: SelectSubset<T, SocialUserCreateArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialUsers.
     * @param {SocialUserCreateManyArgs} args - Arguments to create many SocialUsers.
     * @example
     * // Create many SocialUsers
     * const socialUser = await prisma.socialUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialUserCreateManyArgs>(args?: SelectSubset<T, SocialUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialUsers and returns the data saved in the database.
     * @param {SocialUserCreateManyAndReturnArgs} args - Arguments to create many SocialUsers.
     * @example
     * // Create many SocialUsers
     * const socialUser = await prisma.socialUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialUsers and only return the `id`
     * const socialUserWithIdOnly = await prisma.socialUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialUserCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialUser.
     * @param {SocialUserDeleteArgs} args - Arguments to delete one SocialUser.
     * @example
     * // Delete one SocialUser
     * const SocialUser = await prisma.socialUser.delete({
     *   where: {
     *     // ... filter to delete one SocialUser
     *   }
     * })
     * 
     */
    delete<T extends SocialUserDeleteArgs>(args: SelectSubset<T, SocialUserDeleteArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialUser.
     * @param {SocialUserUpdateArgs} args - Arguments to update one SocialUser.
     * @example
     * // Update one SocialUser
     * const socialUser = await prisma.socialUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialUserUpdateArgs>(args: SelectSubset<T, SocialUserUpdateArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialUsers.
     * @param {SocialUserDeleteManyArgs} args - Arguments to filter SocialUsers to delete.
     * @example
     * // Delete a few SocialUsers
     * const { count } = await prisma.socialUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialUserDeleteManyArgs>(args?: SelectSubset<T, SocialUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialUsers
     * const socialUser = await prisma.socialUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialUserUpdateManyArgs>(args: SelectSubset<T, SocialUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialUsers and returns the data updated in the database.
     * @param {SocialUserUpdateManyAndReturnArgs} args - Arguments to update many SocialUsers.
     * @example
     * // Update many SocialUsers
     * const socialUser = await prisma.socialUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialUsers and only return the `id`
     * const socialUserWithIdOnly = await prisma.socialUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialUserUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialUser.
     * @param {SocialUserUpsertArgs} args - Arguments to update or create a SocialUser.
     * @example
     * // Update or create a SocialUser
     * const socialUser = await prisma.socialUser.upsert({
     *   create: {
     *     // ... data to create a SocialUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialUser we want to update
     *   }
     * })
     */
    upsert<T extends SocialUserUpsertArgs>(args: SelectSubset<T, SocialUserUpsertArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserCountArgs} args - Arguments to filter SocialUsers to count.
     * @example
     * // Count the number of SocialUsers
     * const count = await prisma.socialUser.count({
     *   where: {
     *     // ... the filter for the SocialUsers we want to count
     *   }
     * })
    **/
    count<T extends SocialUserCountArgs>(
      args?: Subset<T, SocialUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialUserAggregateArgs>(args: Subset<T, SocialUserAggregateArgs>): Prisma.PrismaPromise<GetSocialUserAggregateType<T>>

    /**
     * Group by SocialUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUserGroupByArgs} args - Group by arguments.
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
      T extends SocialUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialUserGroupByArgs['orderBy'] }
        : { orderBy?: SocialUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialUser model
   */
  readonly fields: SocialUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    friends<T extends SocialUser$friendsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends SocialUser$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends SocialUser$postsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends SocialUser$commentsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedposts<T extends SocialUser$likedpostsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$likedpostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likedcomments<T extends SocialUser$likedcommentsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$likedcommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewedposts<T extends SocialUser$viewedpostsArgs<ExtArgs> = {}>(args?: Subset<T, SocialUser$viewedpostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialUser model
   */
  interface SocialUserFieldRefs {
    readonly id: FieldRef<"SocialUser", 'Int'>
    readonly fullname: FieldRef<"SocialUser", 'String'>
    readonly username: FieldRef<"SocialUser", 'String'>
    readonly email: FieldRef<"SocialUser", 'String'>
    readonly password: FieldRef<"SocialUser", 'String'>
    readonly bio: FieldRef<"SocialUser", 'String'>
    readonly gravatar: FieldRef<"SocialUser", 'String'>
    readonly token: FieldRef<"SocialUser", 'String'>
    readonly githubotp: FieldRef<"SocialUser", 'String'>
    readonly createdAt: FieldRef<"SocialUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialUser findUnique
   */
  export type SocialUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser findUniqueOrThrow
   */
  export type SocialUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser findFirst
   */
  export type SocialUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialUsers.
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialUsers.
     */
    distinct?: SocialUserScalarFieldEnum | SocialUserScalarFieldEnum[]
  }

  /**
   * SocialUser findFirstOrThrow
   */
  export type SocialUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUser to fetch.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialUsers.
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialUsers.
     */
    distinct?: SocialUserScalarFieldEnum | SocialUserScalarFieldEnum[]
  }

  /**
   * SocialUser findMany
   */
  export type SocialUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter, which SocialUsers to fetch.
     */
    where?: SocialUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialUsers to fetch.
     */
    orderBy?: SocialUserOrderByWithRelationInput | SocialUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialUsers.
     */
    cursor?: SocialUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialUsers.
     */
    skip?: number
    distinct?: SocialUserScalarFieldEnum | SocialUserScalarFieldEnum[]
  }

  /**
   * SocialUser create
   */
  export type SocialUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialUser.
     */
    data: XOR<SocialUserCreateInput, SocialUserUncheckedCreateInput>
  }

  /**
   * SocialUser createMany
   */
  export type SocialUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialUsers.
     */
    data: SocialUserCreateManyInput | SocialUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialUser createManyAndReturn
   */
  export type SocialUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * The data used to create many SocialUsers.
     */
    data: SocialUserCreateManyInput | SocialUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialUser update
   */
  export type SocialUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialUser.
     */
    data: XOR<SocialUserUpdateInput, SocialUserUncheckedUpdateInput>
    /**
     * Choose, which SocialUser to update.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser updateMany
   */
  export type SocialUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialUsers.
     */
    data: XOR<SocialUserUpdateManyMutationInput, SocialUserUncheckedUpdateManyInput>
    /**
     * Filter which SocialUsers to update
     */
    where?: SocialUserWhereInput
    /**
     * Limit how many SocialUsers to update.
     */
    limit?: number
  }

  /**
   * SocialUser updateManyAndReturn
   */
  export type SocialUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * The data used to update SocialUsers.
     */
    data: XOR<SocialUserUpdateManyMutationInput, SocialUserUncheckedUpdateManyInput>
    /**
     * Filter which SocialUsers to update
     */
    where?: SocialUserWhereInput
    /**
     * Limit how many SocialUsers to update.
     */
    limit?: number
  }

  /**
   * SocialUser upsert
   */
  export type SocialUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialUser to update in case it exists.
     */
    where: SocialUserWhereUniqueInput
    /**
     * In case the SocialUser found by the `where` argument doesn't exist, create a new SocialUser with this data.
     */
    create: XOR<SocialUserCreateInput, SocialUserUncheckedCreateInput>
    /**
     * In case the SocialUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialUserUpdateInput, SocialUserUncheckedUpdateInput>
  }

  /**
   * SocialUser delete
   */
  export type SocialUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
    /**
     * Filter which SocialUser to delete.
     */
    where: SocialUserWhereUniqueInput
  }

  /**
   * SocialUser deleteMany
   */
  export type SocialUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialUsers to delete
     */
    where?: SocialUserWhereInput
    /**
     * Limit how many SocialUsers to delete.
     */
    limit?: number
  }

  /**
   * SocialUser.friends
   */
  export type SocialUser$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    where?: SocialFriendshipWhereInput
    orderBy?: SocialFriendshipOrderByWithRelationInput | SocialFriendshipOrderByWithRelationInput[]
    cursor?: SocialFriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialFriendshipScalarFieldEnum | SocialFriendshipScalarFieldEnum[]
  }

  /**
   * SocialUser.friendOf
   */
  export type SocialUser$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    where?: SocialFriendshipWhereInput
    orderBy?: SocialFriendshipOrderByWithRelationInput | SocialFriendshipOrderByWithRelationInput[]
    cursor?: SocialFriendshipWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialFriendshipScalarFieldEnum | SocialFriendshipScalarFieldEnum[]
  }

  /**
   * SocialUser.posts
   */
  export type SocialUser$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    where?: SocialPostWhereInput
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    cursor?: SocialPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialUser.comments
   */
  export type SocialUser$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    where?: SocialCommentWhereInput
    orderBy?: SocialCommentOrderByWithRelationInput | SocialCommentOrderByWithRelationInput[]
    cursor?: SocialCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialCommentScalarFieldEnum | SocialCommentScalarFieldEnum[]
  }

  /**
   * SocialUser.likedposts
   */
  export type SocialUser$likedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * SocialUser.likedcomments
   */
  export type SocialUser$likedcommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    where?: CommentLikeWhereInput
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    cursor?: CommentLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * SocialUser.viewedposts
   */
  export type SocialUser$viewedpostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    where?: PostViewWhereInput
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    cursor?: PostViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * SocialUser without action
   */
  export type SocialUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialUser
     */
    select?: SocialUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialUser
     */
    omit?: SocialUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialUserInclude<ExtArgs> | null
  }


  /**
   * Model SocialFriendship
   */

  export type AggregateSocialFriendship = {
    _count: SocialFriendshipCountAggregateOutputType | null
    _avg: SocialFriendshipAvgAggregateOutputType | null
    _sum: SocialFriendshipSumAggregateOutputType | null
    _min: SocialFriendshipMinAggregateOutputType | null
    _max: SocialFriendshipMaxAggregateOutputType | null
  }

  export type SocialFriendshipAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type SocialFriendshipSumAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
  }

  export type SocialFriendshipMinAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type SocialFriendshipMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    friendId: number | null
    createdAt: Date | null
  }

  export type SocialFriendshipCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: number
    _all: number
  }


  export type SocialFriendshipAvgAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type SocialFriendshipSumAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
  }

  export type SocialFriendshipMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type SocialFriendshipMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
  }

  export type SocialFriendshipCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    createdAt?: true
    _all?: true
  }

  export type SocialFriendshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialFriendship to aggregate.
     */
    where?: SocialFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialFriendships to fetch.
     */
    orderBy?: SocialFriendshipOrderByWithRelationInput | SocialFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialFriendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialFriendships
    **/
    _count?: true | SocialFriendshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialFriendshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialFriendshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialFriendshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialFriendshipMaxAggregateInputType
  }

  export type GetSocialFriendshipAggregateType<T extends SocialFriendshipAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialFriendship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialFriendship[P]>
      : GetScalarType<T[P], AggregateSocialFriendship[P]>
  }




  export type SocialFriendshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialFriendshipWhereInput
    orderBy?: SocialFriendshipOrderByWithAggregationInput | SocialFriendshipOrderByWithAggregationInput[]
    by: SocialFriendshipScalarFieldEnum[] | SocialFriendshipScalarFieldEnum
    having?: SocialFriendshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialFriendshipCountAggregateInputType | true
    _avg?: SocialFriendshipAvgAggregateInputType
    _sum?: SocialFriendshipSumAggregateInputType
    _min?: SocialFriendshipMinAggregateInputType
    _max?: SocialFriendshipMaxAggregateInputType
  }

  export type SocialFriendshipGroupByOutputType = {
    id: number
    userId: number
    friendId: number
    createdAt: Date
    _count: SocialFriendshipCountAggregateOutputType | null
    _avg: SocialFriendshipAvgAggregateOutputType | null
    _sum: SocialFriendshipSumAggregateOutputType | null
    _min: SocialFriendshipMinAggregateOutputType | null
    _max: SocialFriendshipMaxAggregateOutputType | null
  }

  type GetSocialFriendshipGroupByPayload<T extends SocialFriendshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialFriendshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialFriendshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialFriendshipGroupByOutputType[P]>
            : GetScalarType<T[P], SocialFriendshipGroupByOutputType[P]>
        }
      >
    >


  export type SocialFriendshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    friend?: boolean | SocialUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialFriendship"]>

  export type SocialFriendshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    friend?: boolean | SocialUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialFriendship"]>

  export type SocialFriendshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    friend?: boolean | SocialUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialFriendship"]>

  export type SocialFriendshipSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    createdAt?: boolean
  }

  export type SocialFriendshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt", ExtArgs["result"]["socialFriendship"]>
  export type SocialFriendshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    friend?: boolean | SocialUserDefaultArgs<ExtArgs>
  }
  export type SocialFriendshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    friend?: boolean | SocialUserDefaultArgs<ExtArgs>
  }
  export type SocialFriendshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    friend?: boolean | SocialUserDefaultArgs<ExtArgs>
  }

  export type $SocialFriendshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialFriendship"
    objects: {
      user: Prisma.$SocialUserPayload<ExtArgs>
      friend: Prisma.$SocialUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      friendId: number
      createdAt: Date
    }, ExtArgs["result"]["socialFriendship"]>
    composites: {}
  }

  type SocialFriendshipGetPayload<S extends boolean | null | undefined | SocialFriendshipDefaultArgs> = $Result.GetResult<Prisma.$SocialFriendshipPayload, S>

  type SocialFriendshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialFriendshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialFriendshipCountAggregateInputType | true
    }

  export interface SocialFriendshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialFriendship'], meta: { name: 'SocialFriendship' } }
    /**
     * Find zero or one SocialFriendship that matches the filter.
     * @param {SocialFriendshipFindUniqueArgs} args - Arguments to find a SocialFriendship
     * @example
     * // Get one SocialFriendship
     * const socialFriendship = await prisma.socialFriendship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialFriendshipFindUniqueArgs>(args: SelectSubset<T, SocialFriendshipFindUniqueArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialFriendship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialFriendshipFindUniqueOrThrowArgs} args - Arguments to find a SocialFriendship
     * @example
     * // Get one SocialFriendship
     * const socialFriendship = await prisma.socialFriendship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialFriendshipFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialFriendshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialFriendship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipFindFirstArgs} args - Arguments to find a SocialFriendship
     * @example
     * // Get one SocialFriendship
     * const socialFriendship = await prisma.socialFriendship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialFriendshipFindFirstArgs>(args?: SelectSubset<T, SocialFriendshipFindFirstArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialFriendship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipFindFirstOrThrowArgs} args - Arguments to find a SocialFriendship
     * @example
     * // Get one SocialFriendship
     * const socialFriendship = await prisma.socialFriendship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialFriendshipFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialFriendshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialFriendships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialFriendships
     * const socialFriendships = await prisma.socialFriendship.findMany()
     * 
     * // Get first 10 SocialFriendships
     * const socialFriendships = await prisma.socialFriendship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialFriendshipWithIdOnly = await prisma.socialFriendship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialFriendshipFindManyArgs>(args?: SelectSubset<T, SocialFriendshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialFriendship.
     * @param {SocialFriendshipCreateArgs} args - Arguments to create a SocialFriendship.
     * @example
     * // Create one SocialFriendship
     * const SocialFriendship = await prisma.socialFriendship.create({
     *   data: {
     *     // ... data to create a SocialFriendship
     *   }
     * })
     * 
     */
    create<T extends SocialFriendshipCreateArgs>(args: SelectSubset<T, SocialFriendshipCreateArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialFriendships.
     * @param {SocialFriendshipCreateManyArgs} args - Arguments to create many SocialFriendships.
     * @example
     * // Create many SocialFriendships
     * const socialFriendship = await prisma.socialFriendship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialFriendshipCreateManyArgs>(args?: SelectSubset<T, SocialFriendshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialFriendships and returns the data saved in the database.
     * @param {SocialFriendshipCreateManyAndReturnArgs} args - Arguments to create many SocialFriendships.
     * @example
     * // Create many SocialFriendships
     * const socialFriendship = await prisma.socialFriendship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialFriendships and only return the `id`
     * const socialFriendshipWithIdOnly = await prisma.socialFriendship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialFriendshipCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialFriendshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialFriendship.
     * @param {SocialFriendshipDeleteArgs} args - Arguments to delete one SocialFriendship.
     * @example
     * // Delete one SocialFriendship
     * const SocialFriendship = await prisma.socialFriendship.delete({
     *   where: {
     *     // ... filter to delete one SocialFriendship
     *   }
     * })
     * 
     */
    delete<T extends SocialFriendshipDeleteArgs>(args: SelectSubset<T, SocialFriendshipDeleteArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialFriendship.
     * @param {SocialFriendshipUpdateArgs} args - Arguments to update one SocialFriendship.
     * @example
     * // Update one SocialFriendship
     * const socialFriendship = await prisma.socialFriendship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialFriendshipUpdateArgs>(args: SelectSubset<T, SocialFriendshipUpdateArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialFriendships.
     * @param {SocialFriendshipDeleteManyArgs} args - Arguments to filter SocialFriendships to delete.
     * @example
     * // Delete a few SocialFriendships
     * const { count } = await prisma.socialFriendship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialFriendshipDeleteManyArgs>(args?: SelectSubset<T, SocialFriendshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialFriendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialFriendships
     * const socialFriendship = await prisma.socialFriendship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialFriendshipUpdateManyArgs>(args: SelectSubset<T, SocialFriendshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialFriendships and returns the data updated in the database.
     * @param {SocialFriendshipUpdateManyAndReturnArgs} args - Arguments to update many SocialFriendships.
     * @example
     * // Update many SocialFriendships
     * const socialFriendship = await prisma.socialFriendship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialFriendships and only return the `id`
     * const socialFriendshipWithIdOnly = await prisma.socialFriendship.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialFriendshipUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialFriendshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialFriendship.
     * @param {SocialFriendshipUpsertArgs} args - Arguments to update or create a SocialFriendship.
     * @example
     * // Update or create a SocialFriendship
     * const socialFriendship = await prisma.socialFriendship.upsert({
     *   create: {
     *     // ... data to create a SocialFriendship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialFriendship we want to update
     *   }
     * })
     */
    upsert<T extends SocialFriendshipUpsertArgs>(args: SelectSubset<T, SocialFriendshipUpsertArgs<ExtArgs>>): Prisma__SocialFriendshipClient<$Result.GetResult<Prisma.$SocialFriendshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialFriendships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipCountArgs} args - Arguments to filter SocialFriendships to count.
     * @example
     * // Count the number of SocialFriendships
     * const count = await prisma.socialFriendship.count({
     *   where: {
     *     // ... the filter for the SocialFriendships we want to count
     *   }
     * })
    **/
    count<T extends SocialFriendshipCountArgs>(
      args?: Subset<T, SocialFriendshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialFriendshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialFriendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialFriendshipAggregateArgs>(args: Subset<T, SocialFriendshipAggregateArgs>): Prisma.PrismaPromise<GetSocialFriendshipAggregateType<T>>

    /**
     * Group by SocialFriendship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFriendshipGroupByArgs} args - Group by arguments.
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
      T extends SocialFriendshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialFriendshipGroupByArgs['orderBy'] }
        : { orderBy?: SocialFriendshipGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialFriendshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialFriendshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialFriendship model
   */
  readonly fields: SocialFriendshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialFriendship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialFriendshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SocialFriendship model
   */
  interface SocialFriendshipFieldRefs {
    readonly id: FieldRef<"SocialFriendship", 'Int'>
    readonly userId: FieldRef<"SocialFriendship", 'Int'>
    readonly friendId: FieldRef<"SocialFriendship", 'Int'>
    readonly createdAt: FieldRef<"SocialFriendship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialFriendship findUnique
   */
  export type SocialFriendshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which SocialFriendship to fetch.
     */
    where: SocialFriendshipWhereUniqueInput
  }

  /**
   * SocialFriendship findUniqueOrThrow
   */
  export type SocialFriendshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which SocialFriendship to fetch.
     */
    where: SocialFriendshipWhereUniqueInput
  }

  /**
   * SocialFriendship findFirst
   */
  export type SocialFriendshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which SocialFriendship to fetch.
     */
    where?: SocialFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialFriendships to fetch.
     */
    orderBy?: SocialFriendshipOrderByWithRelationInput | SocialFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialFriendships.
     */
    cursor?: SocialFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialFriendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialFriendships.
     */
    distinct?: SocialFriendshipScalarFieldEnum | SocialFriendshipScalarFieldEnum[]
  }

  /**
   * SocialFriendship findFirstOrThrow
   */
  export type SocialFriendshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which SocialFriendship to fetch.
     */
    where?: SocialFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialFriendships to fetch.
     */
    orderBy?: SocialFriendshipOrderByWithRelationInput | SocialFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialFriendships.
     */
    cursor?: SocialFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialFriendships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialFriendships.
     */
    distinct?: SocialFriendshipScalarFieldEnum | SocialFriendshipScalarFieldEnum[]
  }

  /**
   * SocialFriendship findMany
   */
  export type SocialFriendshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * Filter, which SocialFriendships to fetch.
     */
    where?: SocialFriendshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialFriendships to fetch.
     */
    orderBy?: SocialFriendshipOrderByWithRelationInput | SocialFriendshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialFriendships.
     */
    cursor?: SocialFriendshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialFriendships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialFriendships.
     */
    skip?: number
    distinct?: SocialFriendshipScalarFieldEnum | SocialFriendshipScalarFieldEnum[]
  }

  /**
   * SocialFriendship create
   */
  export type SocialFriendshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialFriendship.
     */
    data: XOR<SocialFriendshipCreateInput, SocialFriendshipUncheckedCreateInput>
  }

  /**
   * SocialFriendship createMany
   */
  export type SocialFriendshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialFriendships.
     */
    data: SocialFriendshipCreateManyInput | SocialFriendshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialFriendship createManyAndReturn
   */
  export type SocialFriendshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * The data used to create many SocialFriendships.
     */
    data: SocialFriendshipCreateManyInput | SocialFriendshipCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialFriendship update
   */
  export type SocialFriendshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialFriendship.
     */
    data: XOR<SocialFriendshipUpdateInput, SocialFriendshipUncheckedUpdateInput>
    /**
     * Choose, which SocialFriendship to update.
     */
    where: SocialFriendshipWhereUniqueInput
  }

  /**
   * SocialFriendship updateMany
   */
  export type SocialFriendshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialFriendships.
     */
    data: XOR<SocialFriendshipUpdateManyMutationInput, SocialFriendshipUncheckedUpdateManyInput>
    /**
     * Filter which SocialFriendships to update
     */
    where?: SocialFriendshipWhereInput
    /**
     * Limit how many SocialFriendships to update.
     */
    limit?: number
  }

  /**
   * SocialFriendship updateManyAndReturn
   */
  export type SocialFriendshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * The data used to update SocialFriendships.
     */
    data: XOR<SocialFriendshipUpdateManyMutationInput, SocialFriendshipUncheckedUpdateManyInput>
    /**
     * Filter which SocialFriendships to update
     */
    where?: SocialFriendshipWhereInput
    /**
     * Limit how many SocialFriendships to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialFriendship upsert
   */
  export type SocialFriendshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialFriendship to update in case it exists.
     */
    where: SocialFriendshipWhereUniqueInput
    /**
     * In case the SocialFriendship found by the `where` argument doesn't exist, create a new SocialFriendship with this data.
     */
    create: XOR<SocialFriendshipCreateInput, SocialFriendshipUncheckedCreateInput>
    /**
     * In case the SocialFriendship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialFriendshipUpdateInput, SocialFriendshipUncheckedUpdateInput>
  }

  /**
   * SocialFriendship delete
   */
  export type SocialFriendshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
    /**
     * Filter which SocialFriendship to delete.
     */
    where: SocialFriendshipWhereUniqueInput
  }

  /**
   * SocialFriendship deleteMany
   */
  export type SocialFriendshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialFriendships to delete
     */
    where?: SocialFriendshipWhereInput
    /**
     * Limit how many SocialFriendships to delete.
     */
    limit?: number
  }

  /**
   * SocialFriendship without action
   */
  export type SocialFriendshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialFriendship
     */
    select?: SocialFriendshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialFriendship
     */
    omit?: SocialFriendshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialFriendshipInclude<ExtArgs> | null
  }


  /**
   * Model SocialPost
   */

  export type AggregateSocialPost = {
    _count: SocialPostCountAggregateOutputType | null
    _avg: SocialPostAvgAggregateOutputType | null
    _sum: SocialPostSumAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  export type SocialPostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type SocialPostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type SocialPostMinAggregateOutputType = {
    id: number | null
    body: string | null
    postimg: string | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialPostMaxAggregateOutputType = {
    id: number | null
    body: string | null
    postimg: string | null
    authorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialPostCountAggregateOutputType = {
    id: number
    body: number
    postimg: number
    authorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialPostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type SocialPostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type SocialPostMinAggregateInputType = {
    id?: true
    body?: true
    postimg?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialPostMaxAggregateInputType = {
    id?: true
    body?: true
    postimg?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialPostCountAggregateInputType = {
    id?: true
    body?: true
    postimg?: true
    authorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPost to aggregate.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialPosts
    **/
    _count?: true | SocialPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialPostMaxAggregateInputType
  }

  export type GetSocialPostAggregateType<T extends SocialPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialPost[P]>
      : GetScalarType<T[P], AggregateSocialPost[P]>
  }




  export type SocialPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPostWhereInput
    orderBy?: SocialPostOrderByWithAggregationInput | SocialPostOrderByWithAggregationInput[]
    by: SocialPostScalarFieldEnum[] | SocialPostScalarFieldEnum
    having?: SocialPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialPostCountAggregateInputType | true
    _avg?: SocialPostAvgAggregateInputType
    _sum?: SocialPostSumAggregateInputType
    _min?: SocialPostMinAggregateInputType
    _max?: SocialPostMaxAggregateInputType
  }

  export type SocialPostGroupByOutputType = {
    id: number
    body: string
    postimg: string | null
    authorId: number
    createdAt: Date
    updatedAt: Date
    _count: SocialPostCountAggregateOutputType | null
    _avg: SocialPostAvgAggregateOutputType | null
    _sum: SocialPostSumAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  type GetSocialPostGroupByPayload<T extends SocialPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
            : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
        }
      >
    >


  export type SocialPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    postimg?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likes?: boolean | SocialPost$likesArgs<ExtArgs>
    views?: boolean | SocialPost$viewsArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    comments?: boolean | SocialPost$commentsArgs<ExtArgs>
    _count?: boolean | SocialPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    postimg?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    postimg?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectScalar = {
    id?: boolean
    body?: boolean
    postimg?: boolean
    authorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "postimg" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["socialPost"]>
  export type SocialPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | SocialPost$likesArgs<ExtArgs>
    views?: boolean | SocialPost$viewsArgs<ExtArgs>
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    comments?: boolean | SocialPost$commentsArgs<ExtArgs>
    _count?: boolean | SocialPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
  }
  export type SocialPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
  }

  export type $SocialPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialPost"
    objects: {
      likes: Prisma.$PostLikePayload<ExtArgs>[]
      views: Prisma.$PostViewPayload<ExtArgs>[]
      author: Prisma.$SocialUserPayload<ExtArgs>
      comments: Prisma.$SocialCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      body: string
      postimg: string | null
      authorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialPost"]>
    composites: {}
  }

  type SocialPostGetPayload<S extends boolean | null | undefined | SocialPostDefaultArgs> = $Result.GetResult<Prisma.$SocialPostPayload, S>

  type SocialPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialPostCountAggregateInputType | true
    }

  export interface SocialPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialPost'], meta: { name: 'SocialPost' } }
    /**
     * Find zero or one SocialPost that matches the filter.
     * @param {SocialPostFindUniqueArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialPostFindUniqueArgs>(args: SelectSubset<T, SocialPostFindUniqueArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialPostFindUniqueOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialPostFindFirstArgs>(args?: SelectSubset<T, SocialPostFindFirstArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialPosts
     * const socialPosts = await prisma.socialPost.findMany()
     * 
     * // Get first 10 SocialPosts
     * const socialPosts = await prisma.socialPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialPostFindManyArgs>(args?: SelectSubset<T, SocialPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialPost.
     * @param {SocialPostCreateArgs} args - Arguments to create a SocialPost.
     * @example
     * // Create one SocialPost
     * const SocialPost = await prisma.socialPost.create({
     *   data: {
     *     // ... data to create a SocialPost
     *   }
     * })
     * 
     */
    create<T extends SocialPostCreateArgs>(args: SelectSubset<T, SocialPostCreateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialPosts.
     * @param {SocialPostCreateManyArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialPostCreateManyArgs>(args?: SelectSubset<T, SocialPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialPosts and returns the data saved in the database.
     * @param {SocialPostCreateManyAndReturnArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialPost.
     * @param {SocialPostDeleteArgs} args - Arguments to delete one SocialPost.
     * @example
     * // Delete one SocialPost
     * const SocialPost = await prisma.socialPost.delete({
     *   where: {
     *     // ... filter to delete one SocialPost
     *   }
     * })
     * 
     */
    delete<T extends SocialPostDeleteArgs>(args: SelectSubset<T, SocialPostDeleteArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialPost.
     * @param {SocialPostUpdateArgs} args - Arguments to update one SocialPost.
     * @example
     * // Update one SocialPost
     * const socialPost = await prisma.socialPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialPostUpdateArgs>(args: SelectSubset<T, SocialPostUpdateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialPosts.
     * @param {SocialPostDeleteManyArgs} args - Arguments to filter SocialPosts to delete.
     * @example
     * // Delete a few SocialPosts
     * const { count } = await prisma.socialPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialPostDeleteManyArgs>(args?: SelectSubset<T, SocialPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialPostUpdateManyArgs>(args: SelectSubset<T, SocialPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts and returns the data updated in the database.
     * @param {SocialPostUpdateManyAndReturnArgs} args - Arguments to update many SocialPosts.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialPost.
     * @param {SocialPostUpsertArgs} args - Arguments to update or create a SocialPost.
     * @example
     * // Update or create a SocialPost
     * const socialPost = await prisma.socialPost.upsert({
     *   create: {
     *     // ... data to create a SocialPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialPost we want to update
     *   }
     * })
     */
    upsert<T extends SocialPostUpsertArgs>(args: SelectSubset<T, SocialPostUpsertArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostCountArgs} args - Arguments to filter SocialPosts to count.
     * @example
     * // Count the number of SocialPosts
     * const count = await prisma.socialPost.count({
     *   where: {
     *     // ... the filter for the SocialPosts we want to count
     *   }
     * })
    **/
    count<T extends SocialPostCountArgs>(
      args?: Subset<T, SocialPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialPostAggregateArgs>(args: Subset<T, SocialPostAggregateArgs>): Prisma.PrismaPromise<GetSocialPostAggregateType<T>>

    /**
     * Group by SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostGroupByArgs} args - Group by arguments.
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
      T extends SocialPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialPostGroupByArgs['orderBy'] }
        : { orderBy?: SocialPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialPost model
   */
  readonly fields: SocialPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends SocialPost$likesArgs<ExtArgs> = {}>(args?: Subset<T, SocialPost$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends SocialPost$viewsArgs<ExtArgs> = {}>(args?: Subset<T, SocialPost$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    author<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends SocialPost$commentsArgs<ExtArgs> = {}>(args?: Subset<T, SocialPost$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialPost model
   */
  interface SocialPostFieldRefs {
    readonly id: FieldRef<"SocialPost", 'Int'>
    readonly body: FieldRef<"SocialPost", 'String'>
    readonly postimg: FieldRef<"SocialPost", 'String'>
    readonly authorId: FieldRef<"SocialPost", 'Int'>
    readonly createdAt: FieldRef<"SocialPost", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialPost findUnique
   */
  export type SocialPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findUniqueOrThrow
   */
  export type SocialPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findFirst
   */
  export type SocialPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findFirstOrThrow
   */
  export type SocialPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findMany
   */
  export type SocialPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter, which SocialPosts to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost create
   */
  export type SocialPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialPost.
     */
    data: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
  }

  /**
   * SocialPost createMany
   */
  export type SocialPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialPost createManyAndReturn
   */
  export type SocialPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialPost update
   */
  export type SocialPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialPost.
     */
    data: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
    /**
     * Choose, which SocialPost to update.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost updateMany
   */
  export type SocialPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to update.
     */
    limit?: number
  }

  /**
   * SocialPost updateManyAndReturn
   */
  export type SocialPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialPost upsert
   */
  export type SocialPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialPost to update in case it exists.
     */
    where: SocialPostWhereUniqueInput
    /**
     * In case the SocialPost found by the `where` argument doesn't exist, create a new SocialPost with this data.
     */
    create: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
    /**
     * In case the SocialPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
  }

  /**
   * SocialPost delete
   */
  export type SocialPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
    /**
     * Filter which SocialPost to delete.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost deleteMany
   */
  export type SocialPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPosts to delete
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to delete.
     */
    limit?: number
  }

  /**
   * SocialPost.likes
   */
  export type SocialPost$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * SocialPost.views
   */
  export type SocialPost$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    where?: PostViewWhereInput
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    cursor?: PostViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * SocialPost.comments
   */
  export type SocialPost$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    where?: SocialCommentWhereInput
    orderBy?: SocialCommentOrderByWithRelationInput | SocialCommentOrderByWithRelationInput[]
    cursor?: SocialCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialCommentScalarFieldEnum | SocialCommentScalarFieldEnum[]
  }

  /**
   * SocialPost without action
   */
  export type SocialPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialPostInclude<ExtArgs> | null
  }


  /**
   * Model SocialComment
   */

  export type AggregateSocialComment = {
    _count: SocialCommentCountAggregateOutputType | null
    _avg: SocialCommentAvgAggregateOutputType | null
    _sum: SocialCommentSumAggregateOutputType | null
    _min: SocialCommentMinAggregateOutputType | null
    _max: SocialCommentMaxAggregateOutputType | null
  }

  export type SocialCommentAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    postId: number | null
  }

  export type SocialCommentSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    postId: number | null
  }

  export type SocialCommentMinAggregateOutputType = {
    id: number | null
    body: string | null
    commentimg: string | null
    authorId: number | null
    postId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialCommentMaxAggregateOutputType = {
    id: number | null
    body: string | null
    commentimg: string | null
    authorId: number | null
    postId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialCommentCountAggregateOutputType = {
    id: number
    body: number
    commentimg: number
    authorId: number
    postId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialCommentAvgAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
  }

  export type SocialCommentSumAggregateInputType = {
    id?: true
    authorId?: true
    postId?: true
  }

  export type SocialCommentMinAggregateInputType = {
    id?: true
    body?: true
    commentimg?: true
    authorId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialCommentMaxAggregateInputType = {
    id?: true
    body?: true
    commentimg?: true
    authorId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialCommentCountAggregateInputType = {
    id?: true
    body?: true
    commentimg?: true
    authorId?: true
    postId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialComment to aggregate.
     */
    where?: SocialCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialComments to fetch.
     */
    orderBy?: SocialCommentOrderByWithRelationInput | SocialCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialComments
    **/
    _count?: true | SocialCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialCommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialCommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialCommentMaxAggregateInputType
  }

  export type GetSocialCommentAggregateType<T extends SocialCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialComment[P]>
      : GetScalarType<T[P], AggregateSocialComment[P]>
  }




  export type SocialCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialCommentWhereInput
    orderBy?: SocialCommentOrderByWithAggregationInput | SocialCommentOrderByWithAggregationInput[]
    by: SocialCommentScalarFieldEnum[] | SocialCommentScalarFieldEnum
    having?: SocialCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCommentCountAggregateInputType | true
    _avg?: SocialCommentAvgAggregateInputType
    _sum?: SocialCommentSumAggregateInputType
    _min?: SocialCommentMinAggregateInputType
    _max?: SocialCommentMaxAggregateInputType
  }

  export type SocialCommentGroupByOutputType = {
    id: number
    body: string
    commentimg: string | null
    authorId: number
    postId: number
    createdAt: Date
    updatedAt: Date
    _count: SocialCommentCountAggregateOutputType | null
    _avg: SocialCommentAvgAggregateOutputType | null
    _sum: SocialCommentSumAggregateOutputType | null
    _min: SocialCommentMinAggregateOutputType | null
    _max: SocialCommentMaxAggregateOutputType | null
  }

  type GetSocialCommentGroupByPayload<T extends SocialCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialCommentGroupByOutputType[P]>
            : GetScalarType<T[P], SocialCommentGroupByOutputType[P]>
        }
      >
    >


  export type SocialCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    commentimg?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
    likes?: boolean | SocialComment$likesArgs<ExtArgs>
    _count?: boolean | SocialCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialComment"]>

  export type SocialCommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    commentimg?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialComment"]>

  export type SocialCommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    body?: boolean
    commentimg?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialComment"]>

  export type SocialCommentSelectScalar = {
    id?: boolean
    body?: boolean
    commentimg?: boolean
    authorId?: boolean
    postId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "body" | "commentimg" | "authorId" | "postId" | "createdAt" | "updatedAt", ExtArgs["result"]["socialComment"]>
  export type SocialCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
    likes?: boolean | SocialComment$likesArgs<ExtArgs>
    _count?: boolean | SocialCommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SocialCommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }
  export type SocialCommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }

  export type $SocialCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialComment"
    objects: {
      author: Prisma.$SocialUserPayload<ExtArgs>
      post: Prisma.$SocialPostPayload<ExtArgs>
      likes: Prisma.$CommentLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      body: string
      commentimg: string | null
      authorId: number
      postId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["socialComment"]>
    composites: {}
  }

  type SocialCommentGetPayload<S extends boolean | null | undefined | SocialCommentDefaultArgs> = $Result.GetResult<Prisma.$SocialCommentPayload, S>

  type SocialCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialCommentCountAggregateInputType | true
    }

  export interface SocialCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialComment'], meta: { name: 'SocialComment' } }
    /**
     * Find zero or one SocialComment that matches the filter.
     * @param {SocialCommentFindUniqueArgs} args - Arguments to find a SocialComment
     * @example
     * // Get one SocialComment
     * const socialComment = await prisma.socialComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialCommentFindUniqueArgs>(args: SelectSubset<T, SocialCommentFindUniqueArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialCommentFindUniqueOrThrowArgs} args - Arguments to find a SocialComment
     * @example
     * // Get one SocialComment
     * const socialComment = await prisma.socialComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentFindFirstArgs} args - Arguments to find a SocialComment
     * @example
     * // Get one SocialComment
     * const socialComment = await prisma.socialComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialCommentFindFirstArgs>(args?: SelectSubset<T, SocialCommentFindFirstArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentFindFirstOrThrowArgs} args - Arguments to find a SocialComment
     * @example
     * // Get one SocialComment
     * const socialComment = await prisma.socialComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialComments
     * const socialComments = await prisma.socialComment.findMany()
     * 
     * // Get first 10 SocialComments
     * const socialComments = await prisma.socialComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialCommentWithIdOnly = await prisma.socialComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialCommentFindManyArgs>(args?: SelectSubset<T, SocialCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialComment.
     * @param {SocialCommentCreateArgs} args - Arguments to create a SocialComment.
     * @example
     * // Create one SocialComment
     * const SocialComment = await prisma.socialComment.create({
     *   data: {
     *     // ... data to create a SocialComment
     *   }
     * })
     * 
     */
    create<T extends SocialCommentCreateArgs>(args: SelectSubset<T, SocialCommentCreateArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialComments.
     * @param {SocialCommentCreateManyArgs} args - Arguments to create many SocialComments.
     * @example
     * // Create many SocialComments
     * const socialComment = await prisma.socialComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialCommentCreateManyArgs>(args?: SelectSubset<T, SocialCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialComments and returns the data saved in the database.
     * @param {SocialCommentCreateManyAndReturnArgs} args - Arguments to create many SocialComments.
     * @example
     * // Create many SocialComments
     * const socialComment = await prisma.socialComment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialComments and only return the `id`
     * const socialCommentWithIdOnly = await prisma.socialComment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialCommentCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialCommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialComment.
     * @param {SocialCommentDeleteArgs} args - Arguments to delete one SocialComment.
     * @example
     * // Delete one SocialComment
     * const SocialComment = await prisma.socialComment.delete({
     *   where: {
     *     // ... filter to delete one SocialComment
     *   }
     * })
     * 
     */
    delete<T extends SocialCommentDeleteArgs>(args: SelectSubset<T, SocialCommentDeleteArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialComment.
     * @param {SocialCommentUpdateArgs} args - Arguments to update one SocialComment.
     * @example
     * // Update one SocialComment
     * const socialComment = await prisma.socialComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialCommentUpdateArgs>(args: SelectSubset<T, SocialCommentUpdateArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialComments.
     * @param {SocialCommentDeleteManyArgs} args - Arguments to filter SocialComments to delete.
     * @example
     * // Delete a few SocialComments
     * const { count } = await prisma.socialComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialCommentDeleteManyArgs>(args?: SelectSubset<T, SocialCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialComments
     * const socialComment = await prisma.socialComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialCommentUpdateManyArgs>(args: SelectSubset<T, SocialCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialComments and returns the data updated in the database.
     * @param {SocialCommentUpdateManyAndReturnArgs} args - Arguments to update many SocialComments.
     * @example
     * // Update many SocialComments
     * const socialComment = await prisma.socialComment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialComments and only return the `id`
     * const socialCommentWithIdOnly = await prisma.socialComment.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialCommentUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialCommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialComment.
     * @param {SocialCommentUpsertArgs} args - Arguments to update or create a SocialComment.
     * @example
     * // Update or create a SocialComment
     * const socialComment = await prisma.socialComment.upsert({
     *   create: {
     *     // ... data to create a SocialComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialComment we want to update
     *   }
     * })
     */
    upsert<T extends SocialCommentUpsertArgs>(args: SelectSubset<T, SocialCommentUpsertArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentCountArgs} args - Arguments to filter SocialComments to count.
     * @example
     * // Count the number of SocialComments
     * const count = await prisma.socialComment.count({
     *   where: {
     *     // ... the filter for the SocialComments we want to count
     *   }
     * })
    **/
    count<T extends SocialCommentCountArgs>(
      args?: Subset<T, SocialCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialCommentAggregateArgs>(args: Subset<T, SocialCommentAggregateArgs>): Prisma.PrismaPromise<GetSocialCommentAggregateType<T>>

    /**
     * Group by SocialComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCommentGroupByArgs} args - Group by arguments.
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
      T extends SocialCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialCommentGroupByArgs['orderBy'] }
        : { orderBy?: SocialCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialComment model
   */
  readonly fields: SocialCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends SocialPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialPostDefaultArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends SocialComment$likesArgs<ExtArgs> = {}>(args?: Subset<T, SocialComment$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SocialComment model
   */
  interface SocialCommentFieldRefs {
    readonly id: FieldRef<"SocialComment", 'Int'>
    readonly body: FieldRef<"SocialComment", 'String'>
    readonly commentimg: FieldRef<"SocialComment", 'String'>
    readonly authorId: FieldRef<"SocialComment", 'Int'>
    readonly postId: FieldRef<"SocialComment", 'Int'>
    readonly createdAt: FieldRef<"SocialComment", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialComment findUnique
   */
  export type SocialCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * Filter, which SocialComment to fetch.
     */
    where: SocialCommentWhereUniqueInput
  }

  /**
   * SocialComment findUniqueOrThrow
   */
  export type SocialCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * Filter, which SocialComment to fetch.
     */
    where: SocialCommentWhereUniqueInput
  }

  /**
   * SocialComment findFirst
   */
  export type SocialCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * Filter, which SocialComment to fetch.
     */
    where?: SocialCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialComments to fetch.
     */
    orderBy?: SocialCommentOrderByWithRelationInput | SocialCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialComments.
     */
    cursor?: SocialCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialComments.
     */
    distinct?: SocialCommentScalarFieldEnum | SocialCommentScalarFieldEnum[]
  }

  /**
   * SocialComment findFirstOrThrow
   */
  export type SocialCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * Filter, which SocialComment to fetch.
     */
    where?: SocialCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialComments to fetch.
     */
    orderBy?: SocialCommentOrderByWithRelationInput | SocialCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialComments.
     */
    cursor?: SocialCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialComments.
     */
    distinct?: SocialCommentScalarFieldEnum | SocialCommentScalarFieldEnum[]
  }

  /**
   * SocialComment findMany
   */
  export type SocialCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * Filter, which SocialComments to fetch.
     */
    where?: SocialCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialComments to fetch.
     */
    orderBy?: SocialCommentOrderByWithRelationInput | SocialCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialComments.
     */
    cursor?: SocialCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialComments.
     */
    skip?: number
    distinct?: SocialCommentScalarFieldEnum | SocialCommentScalarFieldEnum[]
  }

  /**
   * SocialComment create
   */
  export type SocialCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialComment.
     */
    data: XOR<SocialCommentCreateInput, SocialCommentUncheckedCreateInput>
  }

  /**
   * SocialComment createMany
   */
  export type SocialCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialComments.
     */
    data: SocialCommentCreateManyInput | SocialCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialComment createManyAndReturn
   */
  export type SocialCommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * The data used to create many SocialComments.
     */
    data: SocialCommentCreateManyInput | SocialCommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialComment update
   */
  export type SocialCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialComment.
     */
    data: XOR<SocialCommentUpdateInput, SocialCommentUncheckedUpdateInput>
    /**
     * Choose, which SocialComment to update.
     */
    where: SocialCommentWhereUniqueInput
  }

  /**
   * SocialComment updateMany
   */
  export type SocialCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialComments.
     */
    data: XOR<SocialCommentUpdateManyMutationInput, SocialCommentUncheckedUpdateManyInput>
    /**
     * Filter which SocialComments to update
     */
    where?: SocialCommentWhereInput
    /**
     * Limit how many SocialComments to update.
     */
    limit?: number
  }

  /**
   * SocialComment updateManyAndReturn
   */
  export type SocialCommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * The data used to update SocialComments.
     */
    data: XOR<SocialCommentUpdateManyMutationInput, SocialCommentUncheckedUpdateManyInput>
    /**
     * Filter which SocialComments to update
     */
    where?: SocialCommentWhereInput
    /**
     * Limit how many SocialComments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialComment upsert
   */
  export type SocialCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialComment to update in case it exists.
     */
    where: SocialCommentWhereUniqueInput
    /**
     * In case the SocialComment found by the `where` argument doesn't exist, create a new SocialComment with this data.
     */
    create: XOR<SocialCommentCreateInput, SocialCommentUncheckedCreateInput>
    /**
     * In case the SocialComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialCommentUpdateInput, SocialCommentUncheckedUpdateInput>
  }

  /**
   * SocialComment delete
   */
  export type SocialCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
    /**
     * Filter which SocialComment to delete.
     */
    where: SocialCommentWhereUniqueInput
  }

  /**
   * SocialComment deleteMany
   */
  export type SocialCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialComments to delete
     */
    where?: SocialCommentWhereInput
    /**
     * Limit how many SocialComments to delete.
     */
    limit?: number
  }

  /**
   * SocialComment.likes
   */
  export type SocialComment$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    where?: CommentLikeWhereInput
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    cursor?: CommentLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * SocialComment without action
   */
  export type SocialCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialComment
     */
    select?: SocialCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialComment
     */
    omit?: SocialCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialCommentInclude<ExtArgs> | null
  }


  /**
   * Model PostLike
   */

  export type AggregatePostLike = {
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  export type PostLikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostLikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostLikeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostLikeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostLikeCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    _all: number
  }


  export type PostLikeAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostLikeSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostLikeMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostLikeCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type PostLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLike to aggregate.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikeMaxAggregateInputType
  }

  export type GetPostLikeAggregateType<T extends PostLikeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLike[P]>
      : GetScalarType<T[P], AggregatePostLike[P]>
  }




  export type PostLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithAggregationInput | PostLikeOrderByWithAggregationInput[]
    by: PostLikeScalarFieldEnum[] | PostLikeScalarFieldEnum
    having?: PostLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikeCountAggregateInputType | true
    _avg?: PostLikeAvgAggregateInputType
    _sum?: PostLikeSumAggregateInputType
    _min?: PostLikeMinAggregateInputType
    _max?: PostLikeMaxAggregateInputType
  }

  export type PostLikeGroupByOutputType = {
    id: number
    userId: number
    postId: number
    _count: PostLikeCountAggregateOutputType | null
    _avg: PostLikeAvgAggregateOutputType | null
    _sum: PostLikeSumAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  type GetPostLikeGroupByPayload<T extends PostLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
        }
      >
    >


  export type PostLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type PostLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId", ExtArgs["result"]["postLike"]>
  export type PostLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }

  export type $PostLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLike"
    objects: {
      user: Prisma.$SocialUserPayload<ExtArgs>
      post: Prisma.$SocialPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postId: number
    }, ExtArgs["result"]["postLike"]>
    composites: {}
  }

  type PostLikeGetPayload<S extends boolean | null | undefined | PostLikeDefaultArgs> = $Result.GetResult<Prisma.$PostLikePayload, S>

  type PostLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikeCountAggregateInputType | true
    }

  export interface PostLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLike'], meta: { name: 'PostLike' } }
    /**
     * Find zero or one PostLike that matches the filter.
     * @param {PostLikeFindUniqueArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikeFindUniqueArgs>(args: SelectSubset<T, PostLikeFindUniqueArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikeFindUniqueOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikeFindFirstArgs>(args?: SelectSubset<T, PostLikeFindFirstArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLike.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikeWithIdOnly = await prisma.postLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikeFindManyArgs>(args?: SelectSubset<T, PostLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLike.
     * @param {PostLikeCreateArgs} args - Arguments to create a PostLike.
     * @example
     * // Create one PostLike
     * const PostLike = await prisma.postLike.create({
     *   data: {
     *     // ... data to create a PostLike
     *   }
     * })
     * 
     */
    create<T extends PostLikeCreateArgs>(args: SelectSubset<T, PostLikeCreateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikeCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikeCreateManyArgs>(args?: SelectSubset<T, PostLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikeCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLike.
     * @param {PostLikeDeleteArgs} args - Arguments to delete one PostLike.
     * @example
     * // Delete one PostLike
     * const PostLike = await prisma.postLike.delete({
     *   where: {
     *     // ... filter to delete one PostLike
     *   }
     * })
     * 
     */
    delete<T extends PostLikeDeleteArgs>(args: SelectSubset<T, PostLikeDeleteArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLike.
     * @param {PostLikeUpdateArgs} args - Arguments to update one PostLike.
     * @example
     * // Update one PostLike
     * const postLike = await prisma.postLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikeUpdateArgs>(args: SelectSubset<T, PostLikeUpdateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikeDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikeDeleteManyArgs>(args?: SelectSubset<T, PostLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikeUpdateManyArgs>(args: SelectSubset<T, PostLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikeUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLike.
     * @param {PostLikeUpsertArgs} args - Arguments to update or create a PostLike.
     * @example
     * // Update or create a PostLike
     * const postLike = await prisma.postLike.upsert({
     *   create: {
     *     // ... data to create a PostLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLike we want to update
     *   }
     * })
     */
    upsert<T extends PostLikeUpsertArgs>(args: SelectSubset<T, PostLikeUpsertArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLike.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikeCountArgs>(
      args?: Subset<T, PostLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostLikeAggregateArgs>(args: Subset<T, PostLikeAggregateArgs>): Prisma.PrismaPromise<GetPostLikeAggregateType<T>>

    /**
     * Group by PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeGroupByArgs} args - Group by arguments.
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
      T extends PostLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikeGroupByArgs['orderBy'] }
        : { orderBy?: PostLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLike model
   */
  readonly fields: PostLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends SocialPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialPostDefaultArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostLike model
   */
  interface PostLikeFieldRefs {
    readonly id: FieldRef<"PostLike", 'Int'>
    readonly userId: FieldRef<"PostLike", 'Int'>
    readonly postId: FieldRef<"PostLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostLike findUnique
   */
  export type PostLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findUniqueOrThrow
   */
  export type PostLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findFirst
   */
  export type PostLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findFirstOrThrow
   */
  export type PostLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findMany
   */
  export type PostLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike create
   */
  export type PostLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLike.
     */
    data: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
  }

  /**
   * PostLike createMany
   */
  export type PostLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLike createManyAndReturn
   */
  export type PostLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike update
   */
  export type PostLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLike.
     */
    data: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
    /**
     * Choose, which PostLike to update.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike updateMany
   */
  export type PostLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLike updateManyAndReturn
   */
  export type PostLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike upsert
   */
  export type PostLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLike to update in case it exists.
     */
    where: PostLikeWhereUniqueInput
    /**
     * In case the PostLike found by the `where` argument doesn't exist, create a new PostLike with this data.
     */
    create: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
    /**
     * In case the PostLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
  }

  /**
   * PostLike delete
   */
  export type PostLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter which PostLike to delete.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike deleteMany
   */
  export type PostLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLike without action
   */
  export type PostLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
  }


  /**
   * Model CommentLike
   */

  export type AggregateCommentLike = {
    _count: CommentLikeCountAggregateOutputType | null
    _avg: CommentLikeAvgAggregateOutputType | null
    _sum: CommentLikeSumAggregateOutputType | null
    _min: CommentLikeMinAggregateOutputType | null
    _max: CommentLikeMaxAggregateOutputType | null
  }

  export type CommentLikeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentLikeSumAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentLikeMinAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentLikeMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    commentId: number | null
  }

  export type CommentLikeCountAggregateOutputType = {
    id: number
    userId: number
    commentId: number
    _all: number
  }


  export type CommentLikeAvgAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentLikeSumAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentLikeMinAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentLikeMaxAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
  }

  export type CommentLikeCountAggregateInputType = {
    id?: true
    userId?: true
    commentId?: true
    _all?: true
  }

  export type CommentLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentLike to aggregate.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommentLikes
    **/
    _count?: true | CommentLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentLikeMaxAggregateInputType
  }

  export type GetCommentLikeAggregateType<T extends CommentLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommentLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommentLike[P]>
      : GetScalarType<T[P], AggregateCommentLike[P]>
  }




  export type CommentLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentLikeWhereInput
    orderBy?: CommentLikeOrderByWithAggregationInput | CommentLikeOrderByWithAggregationInput[]
    by: CommentLikeScalarFieldEnum[] | CommentLikeScalarFieldEnum
    having?: CommentLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentLikeCountAggregateInputType | true
    _avg?: CommentLikeAvgAggregateInputType
    _sum?: CommentLikeSumAggregateInputType
    _min?: CommentLikeMinAggregateInputType
    _max?: CommentLikeMaxAggregateInputType
  }

  export type CommentLikeGroupByOutputType = {
    id: number
    userId: number
    commentId: number
    _count: CommentLikeCountAggregateOutputType | null
    _avg: CommentLikeAvgAggregateOutputType | null
    _sum: CommentLikeSumAggregateOutputType | null
    _min: CommentLikeMinAggregateOutputType | null
    _max: CommentLikeMaxAggregateOutputType | null
  }

  type GetCommentLikeGroupByPayload<T extends CommentLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentLikeGroupByOutputType[P]>
            : GetScalarType<T[P], CommentLikeGroupByOutputType[P]>
        }
      >
    >


  export type CommentLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    comment?: boolean | SocialCommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentLike"]>

  export type CommentLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    comment?: boolean | SocialCommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentLike"]>

  export type CommentLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    commentId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    comment?: boolean | SocialCommentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commentLike"]>

  export type CommentLikeSelectScalar = {
    id?: boolean
    userId?: boolean
    commentId?: boolean
  }

  export type CommentLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "commentId", ExtArgs["result"]["commentLike"]>
  export type CommentLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    comment?: boolean | SocialCommentDefaultArgs<ExtArgs>
  }
  export type CommentLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    comment?: boolean | SocialCommentDefaultArgs<ExtArgs>
  }
  export type CommentLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    comment?: boolean | SocialCommentDefaultArgs<ExtArgs>
  }

  export type $CommentLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommentLike"
    objects: {
      user: Prisma.$SocialUserPayload<ExtArgs>
      comment: Prisma.$SocialCommentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      commentId: number
    }, ExtArgs["result"]["commentLike"]>
    composites: {}
  }

  type CommentLikeGetPayload<S extends boolean | null | undefined | CommentLikeDefaultArgs> = $Result.GetResult<Prisma.$CommentLikePayload, S>

  type CommentLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentLikeCountAggregateInputType | true
    }

  export interface CommentLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommentLike'], meta: { name: 'CommentLike' } }
    /**
     * Find zero or one CommentLike that matches the filter.
     * @param {CommentLikeFindUniqueArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentLikeFindUniqueArgs>(args: SelectSubset<T, CommentLikeFindUniqueArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommentLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentLikeFindUniqueOrThrowArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeFindFirstArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentLikeFindFirstArgs>(args?: SelectSubset<T, CommentLikeFindFirstArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommentLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeFindFirstOrThrowArgs} args - Arguments to find a CommentLike
     * @example
     * // Get one CommentLike
     * const commentLike = await prisma.commentLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommentLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommentLikes
     * const commentLikes = await prisma.commentLike.findMany()
     * 
     * // Get first 10 CommentLikes
     * const commentLikes = await prisma.commentLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentLikeWithIdOnly = await prisma.commentLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentLikeFindManyArgs>(args?: SelectSubset<T, CommentLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommentLike.
     * @param {CommentLikeCreateArgs} args - Arguments to create a CommentLike.
     * @example
     * // Create one CommentLike
     * const CommentLike = await prisma.commentLike.create({
     *   data: {
     *     // ... data to create a CommentLike
     *   }
     * })
     * 
     */
    create<T extends CommentLikeCreateArgs>(args: SelectSubset<T, CommentLikeCreateArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommentLikes.
     * @param {CommentLikeCreateManyArgs} args - Arguments to create many CommentLikes.
     * @example
     * // Create many CommentLikes
     * const commentLike = await prisma.commentLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentLikeCreateManyArgs>(args?: SelectSubset<T, CommentLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommentLikes and returns the data saved in the database.
     * @param {CommentLikeCreateManyAndReturnArgs} args - Arguments to create many CommentLikes.
     * @example
     * // Create many CommentLikes
     * const commentLike = await prisma.commentLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommentLikes and only return the `id`
     * const commentLikeWithIdOnly = await prisma.commentLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommentLike.
     * @param {CommentLikeDeleteArgs} args - Arguments to delete one CommentLike.
     * @example
     * // Delete one CommentLike
     * const CommentLike = await prisma.commentLike.delete({
     *   where: {
     *     // ... filter to delete one CommentLike
     *   }
     * })
     * 
     */
    delete<T extends CommentLikeDeleteArgs>(args: SelectSubset<T, CommentLikeDeleteArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommentLike.
     * @param {CommentLikeUpdateArgs} args - Arguments to update one CommentLike.
     * @example
     * // Update one CommentLike
     * const commentLike = await prisma.commentLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentLikeUpdateArgs>(args: SelectSubset<T, CommentLikeUpdateArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommentLikes.
     * @param {CommentLikeDeleteManyArgs} args - Arguments to filter CommentLikes to delete.
     * @example
     * // Delete a few CommentLikes
     * const { count } = await prisma.commentLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentLikeDeleteManyArgs>(args?: SelectSubset<T, CommentLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommentLikes
     * const commentLike = await prisma.commentLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentLikeUpdateManyArgs>(args: SelectSubset<T, CommentLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommentLikes and returns the data updated in the database.
     * @param {CommentLikeUpdateManyAndReturnArgs} args - Arguments to update many CommentLikes.
     * @example
     * // Update many CommentLikes
     * const commentLike = await prisma.commentLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommentLikes and only return the `id`
     * const commentLikeWithIdOnly = await prisma.commentLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommentLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommentLike.
     * @param {CommentLikeUpsertArgs} args - Arguments to update or create a CommentLike.
     * @example
     * // Update or create a CommentLike
     * const commentLike = await prisma.commentLike.upsert({
     *   create: {
     *     // ... data to create a CommentLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommentLike we want to update
     *   }
     * })
     */
    upsert<T extends CommentLikeUpsertArgs>(args: SelectSubset<T, CommentLikeUpsertArgs<ExtArgs>>): Prisma__CommentLikeClient<$Result.GetResult<Prisma.$CommentLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommentLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeCountArgs} args - Arguments to filter CommentLikes to count.
     * @example
     * // Count the number of CommentLikes
     * const count = await prisma.commentLike.count({
     *   where: {
     *     // ... the filter for the CommentLikes we want to count
     *   }
     * })
    **/
    count<T extends CommentLikeCountArgs>(
      args?: Subset<T, CommentLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommentLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentLikeAggregateArgs>(args: Subset<T, CommentLikeAggregateArgs>): Prisma.PrismaPromise<GetCommentLikeAggregateType<T>>

    /**
     * Group by CommentLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentLikeGroupByArgs} args - Group by arguments.
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
      T extends CommentLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentLikeGroupByArgs['orderBy'] }
        : { orderBy?: CommentLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommentLike model
   */
  readonly fields: CommentLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommentLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comment<T extends SocialCommentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialCommentDefaultArgs<ExtArgs>>): Prisma__SocialCommentClient<$Result.GetResult<Prisma.$SocialCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CommentLike model
   */
  interface CommentLikeFieldRefs {
    readonly id: FieldRef<"CommentLike", 'Int'>
    readonly userId: FieldRef<"CommentLike", 'Int'>
    readonly commentId: FieldRef<"CommentLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CommentLike findUnique
   */
  export type CommentLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike findUniqueOrThrow
   */
  export type CommentLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike findFirst
   */
  export type CommentLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentLikes.
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * CommentLike findFirstOrThrow
   */
  export type CommentLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLike to fetch.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommentLikes.
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommentLikes.
     */
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * CommentLike findMany
   */
  export type CommentLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter, which CommentLikes to fetch.
     */
    where?: CommentLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommentLikes to fetch.
     */
    orderBy?: CommentLikeOrderByWithRelationInput | CommentLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommentLikes.
     */
    cursor?: CommentLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommentLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommentLikes.
     */
    skip?: number
    distinct?: CommentLikeScalarFieldEnum | CommentLikeScalarFieldEnum[]
  }

  /**
   * CommentLike create
   */
  export type CommentLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a CommentLike.
     */
    data: XOR<CommentLikeCreateInput, CommentLikeUncheckedCreateInput>
  }

  /**
   * CommentLike createMany
   */
  export type CommentLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommentLikes.
     */
    data: CommentLikeCreateManyInput | CommentLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommentLike createManyAndReturn
   */
  export type CommentLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * The data used to create many CommentLikes.
     */
    data: CommentLikeCreateManyInput | CommentLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentLike update
   */
  export type CommentLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a CommentLike.
     */
    data: XOR<CommentLikeUpdateInput, CommentLikeUncheckedUpdateInput>
    /**
     * Choose, which CommentLike to update.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike updateMany
   */
  export type CommentLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommentLikes.
     */
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyInput>
    /**
     * Filter which CommentLikes to update
     */
    where?: CommentLikeWhereInput
    /**
     * Limit how many CommentLikes to update.
     */
    limit?: number
  }

  /**
   * CommentLike updateManyAndReturn
   */
  export type CommentLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * The data used to update CommentLikes.
     */
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyInput>
    /**
     * Filter which CommentLikes to update
     */
    where?: CommentLikeWhereInput
    /**
     * Limit how many CommentLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommentLike upsert
   */
  export type CommentLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the CommentLike to update in case it exists.
     */
    where: CommentLikeWhereUniqueInput
    /**
     * In case the CommentLike found by the `where` argument doesn't exist, create a new CommentLike with this data.
     */
    create: XOR<CommentLikeCreateInput, CommentLikeUncheckedCreateInput>
    /**
     * In case the CommentLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentLikeUpdateInput, CommentLikeUncheckedUpdateInput>
  }

  /**
   * CommentLike delete
   */
  export type CommentLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
    /**
     * Filter which CommentLike to delete.
     */
    where: CommentLikeWhereUniqueInput
  }

  /**
   * CommentLike deleteMany
   */
  export type CommentLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommentLikes to delete
     */
    where?: CommentLikeWhereInput
    /**
     * Limit how many CommentLikes to delete.
     */
    limit?: number
  }

  /**
   * CommentLike without action
   */
  export type CommentLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentLike
     */
    select?: CommentLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommentLike
     */
    omit?: CommentLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentLikeInclude<ExtArgs> | null
  }


  /**
   * Model PostView
   */

  export type AggregatePostView = {
    _count: PostViewCountAggregateOutputType | null
    _avg: PostViewAvgAggregateOutputType | null
    _sum: PostViewSumAggregateOutputType | null
    _min: PostViewMinAggregateOutputType | null
    _max: PostViewMaxAggregateOutputType | null
  }

  export type PostViewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostViewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostViewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostViewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    postId: number | null
  }

  export type PostViewCountAggregateOutputType = {
    id: number
    userId: number
    postId: number
    _all: number
  }


  export type PostViewAvgAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostViewSumAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostViewMinAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostViewMaxAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
  }

  export type PostViewCountAggregateInputType = {
    id?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type PostViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostView to aggregate.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostViews
    **/
    _count?: true | PostViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostViewMaxAggregateInputType
  }

  export type GetPostViewAggregateType<T extends PostViewAggregateArgs> = {
        [P in keyof T & keyof AggregatePostView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostView[P]>
      : GetScalarType<T[P], AggregatePostView[P]>
  }




  export type PostViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostViewWhereInput
    orderBy?: PostViewOrderByWithAggregationInput | PostViewOrderByWithAggregationInput[]
    by: PostViewScalarFieldEnum[] | PostViewScalarFieldEnum
    having?: PostViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostViewCountAggregateInputType | true
    _avg?: PostViewAvgAggregateInputType
    _sum?: PostViewSumAggregateInputType
    _min?: PostViewMinAggregateInputType
    _max?: PostViewMaxAggregateInputType
  }

  export type PostViewGroupByOutputType = {
    id: number
    userId: number
    postId: number
    _count: PostViewCountAggregateOutputType | null
    _avg: PostViewAvgAggregateOutputType | null
    _sum: PostViewSumAggregateOutputType | null
    _min: PostViewMinAggregateOutputType | null
    _max: PostViewMaxAggregateOutputType | null
  }

  type GetPostViewGroupByPayload<T extends PostViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostViewGroupByOutputType[P]>
            : GetScalarType<T[P], PostViewGroupByOutputType[P]>
        }
      >
    >


  export type PostViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postView"]>

  export type PostViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postView"]>

  export type PostViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postView"]>

  export type PostViewSelectScalar = {
    id?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type PostViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "postId", ExtArgs["result"]["postView"]>
  export type PostViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }
  export type PostViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }
  export type PostViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | SocialUserDefaultArgs<ExtArgs>
    post?: boolean | SocialPostDefaultArgs<ExtArgs>
  }

  export type $PostViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostView"
    objects: {
      user: Prisma.$SocialUserPayload<ExtArgs>
      post: Prisma.$SocialPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      postId: number
    }, ExtArgs["result"]["postView"]>
    composites: {}
  }

  type PostViewGetPayload<S extends boolean | null | undefined | PostViewDefaultArgs> = $Result.GetResult<Prisma.$PostViewPayload, S>

  type PostViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostViewCountAggregateInputType | true
    }

  export interface PostViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostView'], meta: { name: 'PostView' } }
    /**
     * Find zero or one PostView that matches the filter.
     * @param {PostViewFindUniqueArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostViewFindUniqueArgs>(args: SelectSubset<T, PostViewFindUniqueArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostViewFindUniqueOrThrowArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostViewFindUniqueOrThrowArgs>(args: SelectSubset<T, PostViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindFirstArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostViewFindFirstArgs>(args?: SelectSubset<T, PostViewFindFirstArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindFirstOrThrowArgs} args - Arguments to find a PostView
     * @example
     * // Get one PostView
     * const postView = await prisma.postView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostViewFindFirstOrThrowArgs>(args?: SelectSubset<T, PostViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostViews
     * const postViews = await prisma.postView.findMany()
     * 
     * // Get first 10 PostViews
     * const postViews = await prisma.postView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postViewWithIdOnly = await prisma.postView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostViewFindManyArgs>(args?: SelectSubset<T, PostViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostView.
     * @param {PostViewCreateArgs} args - Arguments to create a PostView.
     * @example
     * // Create one PostView
     * const PostView = await prisma.postView.create({
     *   data: {
     *     // ... data to create a PostView
     *   }
     * })
     * 
     */
    create<T extends PostViewCreateArgs>(args: SelectSubset<T, PostViewCreateArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostViews.
     * @param {PostViewCreateManyArgs} args - Arguments to create many PostViews.
     * @example
     * // Create many PostViews
     * const postView = await prisma.postView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostViewCreateManyArgs>(args?: SelectSubset<T, PostViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostViews and returns the data saved in the database.
     * @param {PostViewCreateManyAndReturnArgs} args - Arguments to create many PostViews.
     * @example
     * // Create many PostViews
     * const postView = await prisma.postView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostViews and only return the `id`
     * const postViewWithIdOnly = await prisma.postView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostViewCreateManyAndReturnArgs>(args?: SelectSubset<T, PostViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostView.
     * @param {PostViewDeleteArgs} args - Arguments to delete one PostView.
     * @example
     * // Delete one PostView
     * const PostView = await prisma.postView.delete({
     *   where: {
     *     // ... filter to delete one PostView
     *   }
     * })
     * 
     */
    delete<T extends PostViewDeleteArgs>(args: SelectSubset<T, PostViewDeleteArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostView.
     * @param {PostViewUpdateArgs} args - Arguments to update one PostView.
     * @example
     * // Update one PostView
     * const postView = await prisma.postView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostViewUpdateArgs>(args: SelectSubset<T, PostViewUpdateArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostViews.
     * @param {PostViewDeleteManyArgs} args - Arguments to filter PostViews to delete.
     * @example
     * // Delete a few PostViews
     * const { count } = await prisma.postView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostViewDeleteManyArgs>(args?: SelectSubset<T, PostViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostViews
     * const postView = await prisma.postView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostViewUpdateManyArgs>(args: SelectSubset<T, PostViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostViews and returns the data updated in the database.
     * @param {PostViewUpdateManyAndReturnArgs} args - Arguments to update many PostViews.
     * @example
     * // Update many PostViews
     * const postView = await prisma.postView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostViews and only return the `id`
     * const postViewWithIdOnly = await prisma.postView.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostViewUpdateManyAndReturnArgs>(args: SelectSubset<T, PostViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostView.
     * @param {PostViewUpsertArgs} args - Arguments to update or create a PostView.
     * @example
     * // Update or create a PostView
     * const postView = await prisma.postView.upsert({
     *   create: {
     *     // ... data to create a PostView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostView we want to update
     *   }
     * })
     */
    upsert<T extends PostViewUpsertArgs>(args: SelectSubset<T, PostViewUpsertArgs<ExtArgs>>): Prisma__PostViewClient<$Result.GetResult<Prisma.$PostViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewCountArgs} args - Arguments to filter PostViews to count.
     * @example
     * // Count the number of PostViews
     * const count = await prisma.postView.count({
     *   where: {
     *     // ... the filter for the PostViews we want to count
     *   }
     * })
    **/
    count<T extends PostViewCountArgs>(
      args?: Subset<T, PostViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostViewAggregateArgs>(args: Subset<T, PostViewAggregateArgs>): Prisma.PrismaPromise<GetPostViewAggregateType<T>>

    /**
     * Group by PostView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostViewGroupByArgs} args - Group by arguments.
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
      T extends PostViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostViewGroupByArgs['orderBy'] }
        : { orderBy?: PostViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostView model
   */
  readonly fields: PostViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends SocialUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialUserDefaultArgs<ExtArgs>>): Prisma__SocialUserClient<$Result.GetResult<Prisma.$SocialUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends SocialPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SocialPostDefaultArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostView model
   */
  interface PostViewFieldRefs {
    readonly id: FieldRef<"PostView", 'Int'>
    readonly userId: FieldRef<"PostView", 'Int'>
    readonly postId: FieldRef<"PostView", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PostView findUnique
   */
  export type PostViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView findUniqueOrThrow
   */
  export type PostViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView findFirst
   */
  export type PostViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     */
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * PostView findFirstOrThrow
   */
  export type PostViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostView to fetch.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostViews.
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostViews.
     */
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * PostView findMany
   */
  export type PostViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter, which PostViews to fetch.
     */
    where?: PostViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostViews to fetch.
     */
    orderBy?: PostViewOrderByWithRelationInput | PostViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostViews.
     */
    cursor?: PostViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostViews.
     */
    skip?: number
    distinct?: PostViewScalarFieldEnum | PostViewScalarFieldEnum[]
  }

  /**
   * PostView create
   */
  export type PostViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * The data needed to create a PostView.
     */
    data: XOR<PostViewCreateInput, PostViewUncheckedCreateInput>
  }

  /**
   * PostView createMany
   */
  export type PostViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostViews.
     */
    data: PostViewCreateManyInput | PostViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostView createManyAndReturn
   */
  export type PostViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * The data used to create many PostViews.
     */
    data: PostViewCreateManyInput | PostViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostView update
   */
  export type PostViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * The data needed to update a PostView.
     */
    data: XOR<PostViewUpdateInput, PostViewUncheckedUpdateInput>
    /**
     * Choose, which PostView to update.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView updateMany
   */
  export type PostViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostViews.
     */
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyInput>
    /**
     * Filter which PostViews to update
     */
    where?: PostViewWhereInput
    /**
     * Limit how many PostViews to update.
     */
    limit?: number
  }

  /**
   * PostView updateManyAndReturn
   */
  export type PostViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * The data used to update PostViews.
     */
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyInput>
    /**
     * Filter which PostViews to update
     */
    where?: PostViewWhereInput
    /**
     * Limit how many PostViews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostView upsert
   */
  export type PostViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * The filter to search for the PostView to update in case it exists.
     */
    where: PostViewWhereUniqueInput
    /**
     * In case the PostView found by the `where` argument doesn't exist, create a new PostView with this data.
     */
    create: XOR<PostViewCreateInput, PostViewUncheckedCreateInput>
    /**
     * In case the PostView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostViewUpdateInput, PostViewUncheckedUpdateInput>
  }

  /**
   * PostView delete
   */
  export type PostViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
    /**
     * Filter which PostView to delete.
     */
    where: PostViewWhereUniqueInput
  }

  /**
   * PostView deleteMany
   */
  export type PostViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostViews to delete
     */
    where?: PostViewWhereInput
    /**
     * Limit how many PostViews to delete.
     */
    limit?: number
  }

  /**
   * PostView without action
   */
  export type PostViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostView
     */
    select?: PostViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostView
     */
    omit?: PostViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostViewInclude<ExtArgs> | null
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


  export const SocialSessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SocialSessionScalarFieldEnum = (typeof SocialSessionScalarFieldEnum)[keyof typeof SocialSessionScalarFieldEnum]


  export const SocialUserScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    username: 'username',
    email: 'email',
    password: 'password',
    bio: 'bio',
    gravatar: 'gravatar',
    token: 'token',
    githubotp: 'githubotp',
    createdAt: 'createdAt'
  };

  export type SocialUserScalarFieldEnum = (typeof SocialUserScalarFieldEnum)[keyof typeof SocialUserScalarFieldEnum]


  export const SocialFriendshipScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt'
  };

  export type SocialFriendshipScalarFieldEnum = (typeof SocialFriendshipScalarFieldEnum)[keyof typeof SocialFriendshipScalarFieldEnum]


  export const SocialPostScalarFieldEnum: {
    id: 'id',
    body: 'body',
    postimg: 'postimg',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialPostScalarFieldEnum = (typeof SocialPostScalarFieldEnum)[keyof typeof SocialPostScalarFieldEnum]


  export const SocialCommentScalarFieldEnum: {
    id: 'id',
    body: 'body',
    commentimg: 'commentimg',
    authorId: 'authorId',
    postId: 'postId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialCommentScalarFieldEnum = (typeof SocialCommentScalarFieldEnum)[keyof typeof SocialCommentScalarFieldEnum]


  export const PostLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type PostLikeScalarFieldEnum = (typeof PostLikeScalarFieldEnum)[keyof typeof PostLikeScalarFieldEnum]


  export const CommentLikeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    commentId: 'commentId'
  };

  export type CommentLikeScalarFieldEnum = (typeof CommentLikeScalarFieldEnum)[keyof typeof CommentLikeScalarFieldEnum]


  export const PostViewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    postId: 'postId'
  };

  export type PostViewScalarFieldEnum = (typeof PostViewScalarFieldEnum)[keyof typeof PostViewScalarFieldEnum]


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


  export type SocialSessionWhereInput = {
    AND?: SocialSessionWhereInput | SocialSessionWhereInput[]
    OR?: SocialSessionWhereInput[]
    NOT?: SocialSessionWhereInput | SocialSessionWhereInput[]
    id?: StringFilter<"SocialSession"> | string
    sid?: StringFilter<"SocialSession"> | string
    data?: StringFilter<"SocialSession"> | string
    expiresAt?: DateTimeFilter<"SocialSession"> | Date | string
  }

  export type SocialSessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SocialSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sid?: string
    AND?: SocialSessionWhereInput | SocialSessionWhereInput[]
    OR?: SocialSessionWhereInput[]
    NOT?: SocialSessionWhereInput | SocialSessionWhereInput[]
    data?: StringFilter<"SocialSession"> | string
    expiresAt?: DateTimeFilter<"SocialSession"> | Date | string
  }, "id" | "sid">

  export type SocialSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SocialSessionCountOrderByAggregateInput
    _max?: SocialSessionMaxOrderByAggregateInput
    _min?: SocialSessionMinOrderByAggregateInput
  }

  export type SocialSessionScalarWhereWithAggregatesInput = {
    AND?: SocialSessionScalarWhereWithAggregatesInput | SocialSessionScalarWhereWithAggregatesInput[]
    OR?: SocialSessionScalarWhereWithAggregatesInput[]
    NOT?: SocialSessionScalarWhereWithAggregatesInput | SocialSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SocialSession"> | string
    sid?: StringWithAggregatesFilter<"SocialSession"> | string
    data?: StringWithAggregatesFilter<"SocialSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"SocialSession"> | Date | string
  }

  export type SocialUserWhereInput = {
    AND?: SocialUserWhereInput | SocialUserWhereInput[]
    OR?: SocialUserWhereInput[]
    NOT?: SocialUserWhereInput | SocialUserWhereInput[]
    id?: IntFilter<"SocialUser"> | number
    fullname?: StringFilter<"SocialUser"> | string
    username?: StringFilter<"SocialUser"> | string
    email?: StringFilter<"SocialUser"> | string
    password?: StringNullableFilter<"SocialUser"> | string | null
    bio?: StringNullableFilter<"SocialUser"> | string | null
    gravatar?: StringNullableFilter<"SocialUser"> | string | null
    token?: StringNullableFilter<"SocialUser"> | string | null
    githubotp?: StringNullableFilter<"SocialUser"> | string | null
    createdAt?: DateTimeFilter<"SocialUser"> | Date | string
    friends?: SocialFriendshipListRelationFilter
    friendOf?: SocialFriendshipListRelationFilter
    posts?: SocialPostListRelationFilter
    comments?: SocialCommentListRelationFilter
    likedposts?: PostLikeListRelationFilter
    likedcomments?: CommentLikeListRelationFilter
    viewedposts?: PostViewListRelationFilter
  }

  export type SocialUserOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    gravatar?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    githubotp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    friends?: SocialFriendshipOrderByRelationAggregateInput
    friendOf?: SocialFriendshipOrderByRelationAggregateInput
    posts?: SocialPostOrderByRelationAggregateInput
    comments?: SocialCommentOrderByRelationAggregateInput
    likedposts?: PostLikeOrderByRelationAggregateInput
    likedcomments?: CommentLikeOrderByRelationAggregateInput
    viewedposts?: PostViewOrderByRelationAggregateInput
  }

  export type SocialUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SocialUserWhereInput | SocialUserWhereInput[]
    OR?: SocialUserWhereInput[]
    NOT?: SocialUserWhereInput | SocialUserWhereInput[]
    fullname?: StringFilter<"SocialUser"> | string
    username?: StringFilter<"SocialUser"> | string
    password?: StringNullableFilter<"SocialUser"> | string | null
    bio?: StringNullableFilter<"SocialUser"> | string | null
    gravatar?: StringNullableFilter<"SocialUser"> | string | null
    token?: StringNullableFilter<"SocialUser"> | string | null
    githubotp?: StringNullableFilter<"SocialUser"> | string | null
    createdAt?: DateTimeFilter<"SocialUser"> | Date | string
    friends?: SocialFriendshipListRelationFilter
    friendOf?: SocialFriendshipListRelationFilter
    posts?: SocialPostListRelationFilter
    comments?: SocialCommentListRelationFilter
    likedposts?: PostLikeListRelationFilter
    likedcomments?: CommentLikeListRelationFilter
    viewedposts?: PostViewListRelationFilter
  }, "id" | "email">

  export type SocialUserOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    gravatar?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    githubotp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SocialUserCountOrderByAggregateInput
    _avg?: SocialUserAvgOrderByAggregateInput
    _max?: SocialUserMaxOrderByAggregateInput
    _min?: SocialUserMinOrderByAggregateInput
    _sum?: SocialUserSumOrderByAggregateInput
  }

  export type SocialUserScalarWhereWithAggregatesInput = {
    AND?: SocialUserScalarWhereWithAggregatesInput | SocialUserScalarWhereWithAggregatesInput[]
    OR?: SocialUserScalarWhereWithAggregatesInput[]
    NOT?: SocialUserScalarWhereWithAggregatesInput | SocialUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialUser"> | number
    fullname?: StringWithAggregatesFilter<"SocialUser"> | string
    username?: StringWithAggregatesFilter<"SocialUser"> | string
    email?: StringWithAggregatesFilter<"SocialUser"> | string
    password?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    bio?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    gravatar?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    token?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    githubotp?: StringNullableWithAggregatesFilter<"SocialUser"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SocialUser"> | Date | string
  }

  export type SocialFriendshipWhereInput = {
    AND?: SocialFriendshipWhereInput | SocialFriendshipWhereInput[]
    OR?: SocialFriendshipWhereInput[]
    NOT?: SocialFriendshipWhereInput | SocialFriendshipWhereInput[]
    id?: IntFilter<"SocialFriendship"> | number
    userId?: IntFilter<"SocialFriendship"> | number
    friendId?: IntFilter<"SocialFriendship"> | number
    createdAt?: DateTimeFilter<"SocialFriendship"> | Date | string
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    friend?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
  }

  export type SocialFriendshipOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    user?: SocialUserOrderByWithRelationInput
    friend?: SocialUserOrderByWithRelationInput
  }

  export type SocialFriendshipWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_friendId?: SocialFriendshipUserIdFriendIdCompoundUniqueInput
    AND?: SocialFriendshipWhereInput | SocialFriendshipWhereInput[]
    OR?: SocialFriendshipWhereInput[]
    NOT?: SocialFriendshipWhereInput | SocialFriendshipWhereInput[]
    userId?: IntFilter<"SocialFriendship"> | number
    friendId?: IntFilter<"SocialFriendship"> | number
    createdAt?: DateTimeFilter<"SocialFriendship"> | Date | string
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    friend?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
  }, "id" | "userId_friendId">

  export type SocialFriendshipOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
    _count?: SocialFriendshipCountOrderByAggregateInput
    _avg?: SocialFriendshipAvgOrderByAggregateInput
    _max?: SocialFriendshipMaxOrderByAggregateInput
    _min?: SocialFriendshipMinOrderByAggregateInput
    _sum?: SocialFriendshipSumOrderByAggregateInput
  }

  export type SocialFriendshipScalarWhereWithAggregatesInput = {
    AND?: SocialFriendshipScalarWhereWithAggregatesInput | SocialFriendshipScalarWhereWithAggregatesInput[]
    OR?: SocialFriendshipScalarWhereWithAggregatesInput[]
    NOT?: SocialFriendshipScalarWhereWithAggregatesInput | SocialFriendshipScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialFriendship"> | number
    userId?: IntWithAggregatesFilter<"SocialFriendship"> | number
    friendId?: IntWithAggregatesFilter<"SocialFriendship"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SocialFriendship"> | Date | string
  }

  export type SocialPostWhereInput = {
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    id?: IntFilter<"SocialPost"> | number
    body?: StringFilter<"SocialPost"> | string
    postimg?: StringNullableFilter<"SocialPost"> | string | null
    authorId?: IntFilter<"SocialPost"> | number
    createdAt?: DateTimeFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeFilter<"SocialPost"> | Date | string
    likes?: PostLikeListRelationFilter
    views?: PostViewListRelationFilter
    author?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    comments?: SocialCommentListRelationFilter
  }

  export type SocialPostOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    postimg?: SortOrderInput | SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likes?: PostLikeOrderByRelationAggregateInput
    views?: PostViewOrderByRelationAggregateInput
    author?: SocialUserOrderByWithRelationInput
    comments?: SocialCommentOrderByRelationAggregateInput
  }

  export type SocialPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    body?: StringFilter<"SocialPost"> | string
    postimg?: StringNullableFilter<"SocialPost"> | string | null
    authorId?: IntFilter<"SocialPost"> | number
    createdAt?: DateTimeFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeFilter<"SocialPost"> | Date | string
    likes?: PostLikeListRelationFilter
    views?: PostViewListRelationFilter
    author?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    comments?: SocialCommentListRelationFilter
  }, "id">

  export type SocialPostOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    postimg?: SortOrderInput | SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialPostCountOrderByAggregateInput
    _avg?: SocialPostAvgOrderByAggregateInput
    _max?: SocialPostMaxOrderByAggregateInput
    _min?: SocialPostMinOrderByAggregateInput
    _sum?: SocialPostSumOrderByAggregateInput
  }

  export type SocialPostScalarWhereWithAggregatesInput = {
    AND?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    OR?: SocialPostScalarWhereWithAggregatesInput[]
    NOT?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialPost"> | number
    body?: StringWithAggregatesFilter<"SocialPost"> | string
    postimg?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    authorId?: IntWithAggregatesFilter<"SocialPost"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
  }

  export type SocialCommentWhereInput = {
    AND?: SocialCommentWhereInput | SocialCommentWhereInput[]
    OR?: SocialCommentWhereInput[]
    NOT?: SocialCommentWhereInput | SocialCommentWhereInput[]
    id?: IntFilter<"SocialComment"> | number
    body?: StringFilter<"SocialComment"> | string
    commentimg?: StringNullableFilter<"SocialComment"> | string | null
    authorId?: IntFilter<"SocialComment"> | number
    postId?: IntFilter<"SocialComment"> | number
    createdAt?: DateTimeFilter<"SocialComment"> | Date | string
    updatedAt?: DateTimeFilter<"SocialComment"> | Date | string
    author?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    post?: XOR<SocialPostScalarRelationFilter, SocialPostWhereInput>
    likes?: CommentLikeListRelationFilter
  }

  export type SocialCommentOrderByWithRelationInput = {
    id?: SortOrder
    body?: SortOrder
    commentimg?: SortOrderInput | SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: SocialUserOrderByWithRelationInput
    post?: SocialPostOrderByWithRelationInput
    likes?: CommentLikeOrderByRelationAggregateInput
  }

  export type SocialCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialCommentWhereInput | SocialCommentWhereInput[]
    OR?: SocialCommentWhereInput[]
    NOT?: SocialCommentWhereInput | SocialCommentWhereInput[]
    body?: StringFilter<"SocialComment"> | string
    commentimg?: StringNullableFilter<"SocialComment"> | string | null
    authorId?: IntFilter<"SocialComment"> | number
    postId?: IntFilter<"SocialComment"> | number
    createdAt?: DateTimeFilter<"SocialComment"> | Date | string
    updatedAt?: DateTimeFilter<"SocialComment"> | Date | string
    author?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    post?: XOR<SocialPostScalarRelationFilter, SocialPostWhereInput>
    likes?: CommentLikeListRelationFilter
  }, "id">

  export type SocialCommentOrderByWithAggregationInput = {
    id?: SortOrder
    body?: SortOrder
    commentimg?: SortOrderInput | SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialCommentCountOrderByAggregateInput
    _avg?: SocialCommentAvgOrderByAggregateInput
    _max?: SocialCommentMaxOrderByAggregateInput
    _min?: SocialCommentMinOrderByAggregateInput
    _sum?: SocialCommentSumOrderByAggregateInput
  }

  export type SocialCommentScalarWhereWithAggregatesInput = {
    AND?: SocialCommentScalarWhereWithAggregatesInput | SocialCommentScalarWhereWithAggregatesInput[]
    OR?: SocialCommentScalarWhereWithAggregatesInput[]
    NOT?: SocialCommentScalarWhereWithAggregatesInput | SocialCommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialComment"> | number
    body?: StringWithAggregatesFilter<"SocialComment"> | string
    commentimg?: StringNullableWithAggregatesFilter<"SocialComment"> | string | null
    authorId?: IntWithAggregatesFilter<"SocialComment"> | number
    postId?: IntWithAggregatesFilter<"SocialComment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SocialComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialComment"> | Date | string
  }

  export type PostLikeWhereInput = {
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    id?: IntFilter<"PostLike"> | number
    userId?: IntFilter<"PostLike"> | number
    postId?: IntFilter<"PostLike"> | number
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    post?: XOR<SocialPostScalarRelationFilter, SocialPostWhereInput>
  }

  export type PostLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: SocialUserOrderByWithRelationInput
    post?: SocialPostOrderByWithRelationInput
  }

  export type PostLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: PostLikeUserIdPostIdCompoundUniqueInput
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    userId?: IntFilter<"PostLike"> | number
    postId?: IntFilter<"PostLike"> | number
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    post?: XOR<SocialPostScalarRelationFilter, SocialPostWhereInput>
  }, "id" | "userId_postId">

  export type PostLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: PostLikeCountOrderByAggregateInput
    _avg?: PostLikeAvgOrderByAggregateInput
    _max?: PostLikeMaxOrderByAggregateInput
    _min?: PostLikeMinOrderByAggregateInput
    _sum?: PostLikeSumOrderByAggregateInput
  }

  export type PostLikeScalarWhereWithAggregatesInput = {
    AND?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    OR?: PostLikeScalarWhereWithAggregatesInput[]
    NOT?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostLike"> | number
    userId?: IntWithAggregatesFilter<"PostLike"> | number
    postId?: IntWithAggregatesFilter<"PostLike"> | number
  }

  export type CommentLikeWhereInput = {
    AND?: CommentLikeWhereInput | CommentLikeWhereInput[]
    OR?: CommentLikeWhereInput[]
    NOT?: CommentLikeWhereInput | CommentLikeWhereInput[]
    id?: IntFilter<"CommentLike"> | number
    userId?: IntFilter<"CommentLike"> | number
    commentId?: IntFilter<"CommentLike"> | number
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    comment?: XOR<SocialCommentScalarRelationFilter, SocialCommentWhereInput>
  }

  export type CommentLikeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    user?: SocialUserOrderByWithRelationInput
    comment?: SocialCommentOrderByWithRelationInput
  }

  export type CommentLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_commentId?: CommentLikeUserIdCommentIdCompoundUniqueInput
    AND?: CommentLikeWhereInput | CommentLikeWhereInput[]
    OR?: CommentLikeWhereInput[]
    NOT?: CommentLikeWhereInput | CommentLikeWhereInput[]
    userId?: IntFilter<"CommentLike"> | number
    commentId?: IntFilter<"CommentLike"> | number
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    comment?: XOR<SocialCommentScalarRelationFilter, SocialCommentWhereInput>
  }, "id" | "userId_commentId">

  export type CommentLikeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
    _count?: CommentLikeCountOrderByAggregateInput
    _avg?: CommentLikeAvgOrderByAggregateInput
    _max?: CommentLikeMaxOrderByAggregateInput
    _min?: CommentLikeMinOrderByAggregateInput
    _sum?: CommentLikeSumOrderByAggregateInput
  }

  export type CommentLikeScalarWhereWithAggregatesInput = {
    AND?: CommentLikeScalarWhereWithAggregatesInput | CommentLikeScalarWhereWithAggregatesInput[]
    OR?: CommentLikeScalarWhereWithAggregatesInput[]
    NOT?: CommentLikeScalarWhereWithAggregatesInput | CommentLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CommentLike"> | number
    userId?: IntWithAggregatesFilter<"CommentLike"> | number
    commentId?: IntWithAggregatesFilter<"CommentLike"> | number
  }

  export type PostViewWhereInput = {
    AND?: PostViewWhereInput | PostViewWhereInput[]
    OR?: PostViewWhereInput[]
    NOT?: PostViewWhereInput | PostViewWhereInput[]
    id?: IntFilter<"PostView"> | number
    userId?: IntFilter<"PostView"> | number
    postId?: IntFilter<"PostView"> | number
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    post?: XOR<SocialPostScalarRelationFilter, SocialPostWhereInput>
  }

  export type PostViewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: SocialUserOrderByWithRelationInput
    post?: SocialPostOrderByWithRelationInput
  }

  export type PostViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_postId?: PostViewUserIdPostIdCompoundUniqueInput
    AND?: PostViewWhereInput | PostViewWhereInput[]
    OR?: PostViewWhereInput[]
    NOT?: PostViewWhereInput | PostViewWhereInput[]
    userId?: IntFilter<"PostView"> | number
    postId?: IntFilter<"PostView"> | number
    user?: XOR<SocialUserScalarRelationFilter, SocialUserWhereInput>
    post?: XOR<SocialPostScalarRelationFilter, SocialPostWhereInput>
  }, "id" | "userId_postId">

  export type PostViewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: PostViewCountOrderByAggregateInput
    _avg?: PostViewAvgOrderByAggregateInput
    _max?: PostViewMaxOrderByAggregateInput
    _min?: PostViewMinOrderByAggregateInput
    _sum?: PostViewSumOrderByAggregateInput
  }

  export type PostViewScalarWhereWithAggregatesInput = {
    AND?: PostViewScalarWhereWithAggregatesInput | PostViewScalarWhereWithAggregatesInput[]
    OR?: PostViewScalarWhereWithAggregatesInput[]
    NOT?: PostViewScalarWhereWithAggregatesInput | PostViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PostView"> | number
    userId?: IntWithAggregatesFilter<"PostView"> | number
    postId?: IntWithAggregatesFilter<"PostView"> | number
  }

  export type SocialSessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SocialSessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SocialSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialSessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SocialSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUserCreateInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserUpdateInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialUserCreateManyInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
  }

  export type SocialUserUpdateManyMutationInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialFriendshipCreateInput = {
    createdAt?: Date | string
    user: SocialUserCreateNestedOneWithoutFriendsInput
    friend: SocialUserCreateNestedOneWithoutFriendOfInput
  }

  export type SocialFriendshipUncheckedCreateInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type SocialFriendshipUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: SocialUserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: SocialUserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type SocialFriendshipUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialFriendshipCreateManyInput = {
    id?: number
    userId: number
    friendId: number
    createdAt?: Date | string
  }

  export type SocialFriendshipUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialFriendshipUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostCreateInput = {
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeCreateNestedManyWithoutPostInput
    views?: PostViewCreateNestedManyWithoutPostInput
    author: SocialUserCreateNestedOneWithoutPostsInput
    comments?: SocialCommentCreateNestedManyWithoutPostInput
  }

  export type SocialPostUncheckedCreateInput = {
    id?: number
    body: string
    postimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewUncheckedCreateNestedManyWithoutPostInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type SocialPostUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    views?: PostViewUpdateManyWithoutPostNestedInput
    author?: SocialUserUpdateOneRequiredWithoutPostsNestedInput
    comments?: SocialCommentUpdateManyWithoutPostNestedInput
  }

  export type SocialPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SocialPostCreateManyInput = {
    id?: number
    body: string
    postimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialPostUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCommentCreateInput = {
    body: string
    commentimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: SocialUserCreateNestedOneWithoutCommentsInput
    post: SocialPostCreateNestedOneWithoutCommentsInput
    likes?: CommentLikeCreateNestedManyWithoutCommentInput
  }

  export type SocialCommentUncheckedCreateInput = {
    id?: number
    body: string
    commentimg?: string | null
    authorId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type SocialCommentUpdateInput = {
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    post?: SocialPostUpdateOneRequiredWithoutCommentsNestedInput
    likes?: CommentLikeUpdateManyWithoutCommentNestedInput
  }

  export type SocialCommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type SocialCommentCreateManyInput = {
    id?: number
    body: string
    commentimg?: string | null
    authorId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialCommentUpdateManyMutationInput = {
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateInput = {
    user: SocialUserCreateNestedOneWithoutLikedpostsInput
    post: SocialPostCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateInput = {
    id?: number
    userId: number
    postId: number
  }

  export type PostLikeUpdateInput = {
    user?: SocialUserUpdateOneRequiredWithoutLikedpostsNestedInput
    post?: SocialPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeCreateManyInput = {
    id?: number
    userId: number
    postId: number
  }

  export type PostLikeUpdateManyMutationInput = {

  }

  export type PostLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentLikeCreateInput = {
    user: SocialUserCreateNestedOneWithoutLikedcommentsInput
    comment: SocialCommentCreateNestedOneWithoutLikesInput
  }

  export type CommentLikeUncheckedCreateInput = {
    id?: number
    userId: number
    commentId: number
  }

  export type CommentLikeUpdateInput = {
    user?: SocialUserUpdateOneRequiredWithoutLikedcommentsNestedInput
    comment?: SocialCommentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type CommentLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentLikeCreateManyInput = {
    id?: number
    userId: number
    commentId: number
  }

  export type CommentLikeUpdateManyMutationInput = {

  }

  export type CommentLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostViewCreateInput = {
    user: SocialUserCreateNestedOneWithoutViewedpostsInput
    post: SocialPostCreateNestedOneWithoutViewsInput
  }

  export type PostViewUncheckedCreateInput = {
    id?: number
    userId: number
    postId: number
  }

  export type PostViewUpdateInput = {
    user?: SocialUserUpdateOneRequiredWithoutViewedpostsNestedInput
    post?: SocialPostUpdateOneRequiredWithoutViewsNestedInput
  }

  export type PostViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostViewCreateManyInput = {
    id?: number
    userId: number
    postId: number
  }

  export type PostViewUpdateManyMutationInput = {

  }

  export type PostViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
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

  export type SocialSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SocialSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SocialSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
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

  export type SocialFriendshipListRelationFilter = {
    every?: SocialFriendshipWhereInput
    some?: SocialFriendshipWhereInput
    none?: SocialFriendshipWhereInput
  }

  export type SocialPostListRelationFilter = {
    every?: SocialPostWhereInput
    some?: SocialPostWhereInput
    none?: SocialPostWhereInput
  }

  export type SocialCommentListRelationFilter = {
    every?: SocialCommentWhereInput
    some?: SocialCommentWhereInput
    none?: SocialCommentWhereInput
  }

  export type PostLikeListRelationFilter = {
    every?: PostLikeWhereInput
    some?: PostLikeWhereInput
    none?: PostLikeWhereInput
  }

  export type CommentLikeListRelationFilter = {
    every?: CommentLikeWhereInput
    some?: CommentLikeWhereInput
    none?: CommentLikeWhereInput
  }

  export type PostViewListRelationFilter = {
    every?: PostViewWhereInput
    some?: PostViewWhereInput
    none?: PostViewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialFriendshipOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialUserCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    gravatar?: SortOrder
    token?: SortOrder
    githubotp?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SocialUserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    gravatar?: SortOrder
    token?: SortOrder
    githubotp?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialUserMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bio?: SortOrder
    gravatar?: SortOrder
    token?: SortOrder
    githubotp?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialUserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SocialUserScalarRelationFilter = {
    is?: SocialUserWhereInput
    isNot?: SocialUserWhereInput
  }

  export type SocialFriendshipUserIdFriendIdCompoundUniqueInput = {
    userId: number
    friendId: number
  }

  export type SocialFriendshipCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialFriendshipAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type SocialFriendshipMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialFriendshipMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    createdAt?: SortOrder
  }

  export type SocialFriendshipSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
  }

  export type SocialPostCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    postimg?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialPostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type SocialPostMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    postimg?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialPostMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    postimg?: SortOrder
    authorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialPostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type SocialPostScalarRelationFilter = {
    is?: SocialPostWhereInput
    isNot?: SocialPostWhereInput
  }

  export type SocialCommentCountOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    commentimg?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialCommentAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
  }

  export type SocialCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    commentimg?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialCommentMinOrderByAggregateInput = {
    id?: SortOrder
    body?: SortOrder
    commentimg?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialCommentSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type PostLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostLikeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type SocialCommentScalarRelationFilter = {
    is?: SocialCommentWhereInput
    isNot?: SocialCommentWhereInput
  }

  export type CommentLikeUserIdCommentIdCompoundUniqueInput = {
    userId: number
    commentId: number
  }

  export type CommentLikeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentLikeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type CommentLikeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    commentId?: SortOrder
  }

  export type PostViewUserIdPostIdCompoundUniqueInput = {
    userId: number
    postId: number
  }

  export type PostViewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostViewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostViewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostViewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type PostViewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SocialFriendshipCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialFriendshipCreateWithoutUserInput, SocialFriendshipUncheckedCreateWithoutUserInput> | SocialFriendshipCreateWithoutUserInput[] | SocialFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutUserInput | SocialFriendshipCreateOrConnectWithoutUserInput[]
    createMany?: SocialFriendshipCreateManyUserInputEnvelope
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
  }

  export type SocialFriendshipCreateNestedManyWithoutFriendInput = {
    create?: XOR<SocialFriendshipCreateWithoutFriendInput, SocialFriendshipUncheckedCreateWithoutFriendInput> | SocialFriendshipCreateWithoutFriendInput[] | SocialFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutFriendInput | SocialFriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: SocialFriendshipCreateManyFriendInputEnvelope
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
  }

  export type SocialPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SocialPostCreateWithoutAuthorInput, SocialPostUncheckedCreateWithoutAuthorInput> | SocialPostCreateWithoutAuthorInput[] | SocialPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutAuthorInput | SocialPostCreateOrConnectWithoutAuthorInput[]
    createMany?: SocialPostCreateManyAuthorInputEnvelope
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
  }

  export type SocialCommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SocialCommentCreateWithoutAuthorInput, SocialCommentUncheckedCreateWithoutAuthorInput> | SocialCommentCreateWithoutAuthorInput[] | SocialCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutAuthorInput | SocialCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: SocialCommentCreateManyAuthorInputEnvelope
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type CommentLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type PostViewCreateNestedManyWithoutUserInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type SocialFriendshipUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SocialFriendshipCreateWithoutUserInput, SocialFriendshipUncheckedCreateWithoutUserInput> | SocialFriendshipCreateWithoutUserInput[] | SocialFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutUserInput | SocialFriendshipCreateOrConnectWithoutUserInput[]
    createMany?: SocialFriendshipCreateManyUserInputEnvelope
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
  }

  export type SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<SocialFriendshipCreateWithoutFriendInput, SocialFriendshipUncheckedCreateWithoutFriendInput> | SocialFriendshipCreateWithoutFriendInput[] | SocialFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutFriendInput | SocialFriendshipCreateOrConnectWithoutFriendInput[]
    createMany?: SocialFriendshipCreateManyFriendInputEnvelope
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
  }

  export type SocialPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SocialPostCreateWithoutAuthorInput, SocialPostUncheckedCreateWithoutAuthorInput> | SocialPostCreateWithoutAuthorInput[] | SocialPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutAuthorInput | SocialPostCreateOrConnectWithoutAuthorInput[]
    createMany?: SocialPostCreateManyAuthorInputEnvelope
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
  }

  export type SocialCommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<SocialCommentCreateWithoutAuthorInput, SocialCommentUncheckedCreateWithoutAuthorInput> | SocialCommentCreateWithoutAuthorInput[] | SocialCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutAuthorInput | SocialCommentCreateOrConnectWithoutAuthorInput[]
    createMany?: SocialCommentCreateManyAuthorInputEnvelope
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type CommentLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type PostViewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SocialFriendshipUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialFriendshipCreateWithoutUserInput, SocialFriendshipUncheckedCreateWithoutUserInput> | SocialFriendshipCreateWithoutUserInput[] | SocialFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutUserInput | SocialFriendshipCreateOrConnectWithoutUserInput[]
    upsert?: SocialFriendshipUpsertWithWhereUniqueWithoutUserInput | SocialFriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialFriendshipCreateManyUserInputEnvelope
    set?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    disconnect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    delete?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    update?: SocialFriendshipUpdateWithWhereUniqueWithoutUserInput | SocialFriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialFriendshipUpdateManyWithWhereWithoutUserInput | SocialFriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialFriendshipScalarWhereInput | SocialFriendshipScalarWhereInput[]
  }

  export type SocialFriendshipUpdateManyWithoutFriendNestedInput = {
    create?: XOR<SocialFriendshipCreateWithoutFriendInput, SocialFriendshipUncheckedCreateWithoutFriendInput> | SocialFriendshipCreateWithoutFriendInput[] | SocialFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutFriendInput | SocialFriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: SocialFriendshipUpsertWithWhereUniqueWithoutFriendInput | SocialFriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: SocialFriendshipCreateManyFriendInputEnvelope
    set?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    disconnect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    delete?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    update?: SocialFriendshipUpdateWithWhereUniqueWithoutFriendInput | SocialFriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: SocialFriendshipUpdateManyWithWhereWithoutFriendInput | SocialFriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: SocialFriendshipScalarWhereInput | SocialFriendshipScalarWhereInput[]
  }

  export type SocialPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SocialPostCreateWithoutAuthorInput, SocialPostUncheckedCreateWithoutAuthorInput> | SocialPostCreateWithoutAuthorInput[] | SocialPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutAuthorInput | SocialPostCreateOrConnectWithoutAuthorInput[]
    upsert?: SocialPostUpsertWithWhereUniqueWithoutAuthorInput | SocialPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SocialPostCreateManyAuthorInputEnvelope
    set?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    disconnect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    delete?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    update?: SocialPostUpdateWithWhereUniqueWithoutAuthorInput | SocialPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SocialPostUpdateManyWithWhereWithoutAuthorInput | SocialPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
  }

  export type SocialCommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SocialCommentCreateWithoutAuthorInput, SocialCommentUncheckedCreateWithoutAuthorInput> | SocialCommentCreateWithoutAuthorInput[] | SocialCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutAuthorInput | SocialCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: SocialCommentUpsertWithWhereUniqueWithoutAuthorInput | SocialCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SocialCommentCreateManyAuthorInputEnvelope
    set?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    disconnect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    delete?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    update?: SocialCommentUpdateWithWhereUniqueWithoutAuthorInput | SocialCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SocialCommentUpdateManyWithWhereWithoutAuthorInput | SocialCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SocialCommentScalarWhereInput | SocialCommentScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type CommentLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutUserInput | CommentLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutUserInput | CommentLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutUserInput | CommentLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type PostViewUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutUserInput | PostViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutUserInput | PostViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutUserInput | PostViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SocialFriendshipCreateWithoutUserInput, SocialFriendshipUncheckedCreateWithoutUserInput> | SocialFriendshipCreateWithoutUserInput[] | SocialFriendshipUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutUserInput | SocialFriendshipCreateOrConnectWithoutUserInput[]
    upsert?: SocialFriendshipUpsertWithWhereUniqueWithoutUserInput | SocialFriendshipUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SocialFriendshipCreateManyUserInputEnvelope
    set?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    disconnect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    delete?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    update?: SocialFriendshipUpdateWithWhereUniqueWithoutUserInput | SocialFriendshipUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SocialFriendshipUpdateManyWithWhereWithoutUserInput | SocialFriendshipUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SocialFriendshipScalarWhereInput | SocialFriendshipScalarWhereInput[]
  }

  export type SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<SocialFriendshipCreateWithoutFriendInput, SocialFriendshipUncheckedCreateWithoutFriendInput> | SocialFriendshipCreateWithoutFriendInput[] | SocialFriendshipUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: SocialFriendshipCreateOrConnectWithoutFriendInput | SocialFriendshipCreateOrConnectWithoutFriendInput[]
    upsert?: SocialFriendshipUpsertWithWhereUniqueWithoutFriendInput | SocialFriendshipUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: SocialFriendshipCreateManyFriendInputEnvelope
    set?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    disconnect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    delete?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    connect?: SocialFriendshipWhereUniqueInput | SocialFriendshipWhereUniqueInput[]
    update?: SocialFriendshipUpdateWithWhereUniqueWithoutFriendInput | SocialFriendshipUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: SocialFriendshipUpdateManyWithWhereWithoutFriendInput | SocialFriendshipUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: SocialFriendshipScalarWhereInput | SocialFriendshipScalarWhereInput[]
  }

  export type SocialPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SocialPostCreateWithoutAuthorInput, SocialPostUncheckedCreateWithoutAuthorInput> | SocialPostCreateWithoutAuthorInput[] | SocialPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialPostCreateOrConnectWithoutAuthorInput | SocialPostCreateOrConnectWithoutAuthorInput[]
    upsert?: SocialPostUpsertWithWhereUniqueWithoutAuthorInput | SocialPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SocialPostCreateManyAuthorInputEnvelope
    set?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    disconnect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    delete?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    connect?: SocialPostWhereUniqueInput | SocialPostWhereUniqueInput[]
    update?: SocialPostUpdateWithWhereUniqueWithoutAuthorInput | SocialPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SocialPostUpdateManyWithWhereWithoutAuthorInput | SocialPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
  }

  export type SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<SocialCommentCreateWithoutAuthorInput, SocialCommentUncheckedCreateWithoutAuthorInput> | SocialCommentCreateWithoutAuthorInput[] | SocialCommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutAuthorInput | SocialCommentCreateOrConnectWithoutAuthorInput[]
    upsert?: SocialCommentUpsertWithWhereUniqueWithoutAuthorInput | SocialCommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: SocialCommentCreateManyAuthorInputEnvelope
    set?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    disconnect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    delete?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    update?: SocialCommentUpdateWithWhereUniqueWithoutAuthorInput | SocialCommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: SocialCommentUpdateManyWithWhereWithoutAuthorInput | SocialCommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: SocialCommentScalarWhereInput | SocialCommentScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type CommentLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput> | CommentLikeCreateWithoutUserInput[] | CommentLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutUserInput | CommentLikeCreateOrConnectWithoutUserInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutUserInput | CommentLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentLikeCreateManyUserInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutUserInput | CommentLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutUserInput | CommentLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type PostViewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput> | PostViewCreateWithoutUserInput[] | PostViewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutUserInput | PostViewCreateOrConnectWithoutUserInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutUserInput | PostViewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostViewCreateManyUserInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutUserInput | PostViewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutUserInput | PostViewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type SocialUserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<SocialUserCreateWithoutFriendsInput, SocialUserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutFriendsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialUserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<SocialUserCreateWithoutFriendOfInput, SocialUserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutFriendOfInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialUserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<SocialUserCreateWithoutFriendsInput, SocialUserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutFriendsInput
    upsert?: SocialUserUpsertWithoutFriendsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutFriendsInput, SocialUserUpdateWithoutFriendsInput>, SocialUserUncheckedUpdateWithoutFriendsInput>
  }

  export type SocialUserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<SocialUserCreateWithoutFriendOfInput, SocialUserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutFriendOfInput
    upsert?: SocialUserUpsertWithoutFriendOfInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutFriendOfInput, SocialUserUpdateWithoutFriendOfInput>, SocialUserUncheckedUpdateWithoutFriendOfInput>
  }

  export type PostLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostViewCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type SocialUserCreateNestedOneWithoutPostsInput = {
    create?: XOR<SocialUserCreateWithoutPostsInput, SocialUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutPostsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialCommentCreateNestedManyWithoutPostInput = {
    create?: XOR<SocialCommentCreateWithoutPostInput, SocialCommentUncheckedCreateWithoutPostInput> | SocialCommentCreateWithoutPostInput[] | SocialCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutPostInput | SocialCommentCreateOrConnectWithoutPostInput[]
    createMany?: SocialCommentCreateManyPostInputEnvelope
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostViewUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
  }

  export type SocialCommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<SocialCommentCreateWithoutPostInput, SocialCommentUncheckedCreateWithoutPostInput> | SocialCommentCreateWithoutPostInput[] | SocialCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutPostInput | SocialCommentCreateOrConnectWithoutPostInput[]
    createMany?: SocialCommentCreateManyPostInputEnvelope
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
  }

  export type PostLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostViewUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutPostInput | PostViewUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutPostInput | PostViewUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutPostInput | PostViewUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type SocialUserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<SocialUserCreateWithoutPostsInput, SocialUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutPostsInput
    upsert?: SocialUserUpsertWithoutPostsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutPostsInput, SocialUserUpdateWithoutPostsInput>, SocialUserUncheckedUpdateWithoutPostsInput>
  }

  export type SocialCommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<SocialCommentCreateWithoutPostInput, SocialCommentUncheckedCreateWithoutPostInput> | SocialCommentCreateWithoutPostInput[] | SocialCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutPostInput | SocialCommentCreateOrConnectWithoutPostInput[]
    upsert?: SocialCommentUpsertWithWhereUniqueWithoutPostInput | SocialCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SocialCommentCreateManyPostInputEnvelope
    set?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    disconnect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    delete?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    update?: SocialCommentUpdateWithWhereUniqueWithoutPostInput | SocialCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SocialCommentUpdateManyWithWhereWithoutPostInput | SocialCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SocialCommentScalarWhereInput | SocialCommentScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostViewUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput> | PostViewCreateWithoutPostInput[] | PostViewUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostViewCreateOrConnectWithoutPostInput | PostViewCreateOrConnectWithoutPostInput[]
    upsert?: PostViewUpsertWithWhereUniqueWithoutPostInput | PostViewUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostViewCreateManyPostInputEnvelope
    set?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    disconnect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    delete?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    connect?: PostViewWhereUniqueInput | PostViewWhereUniqueInput[]
    update?: PostViewUpdateWithWhereUniqueWithoutPostInput | PostViewUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostViewUpdateManyWithWhereWithoutPostInput | PostViewUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
  }

  export type SocialCommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<SocialCommentCreateWithoutPostInput, SocialCommentUncheckedCreateWithoutPostInput> | SocialCommentCreateWithoutPostInput[] | SocialCommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: SocialCommentCreateOrConnectWithoutPostInput | SocialCommentCreateOrConnectWithoutPostInput[]
    upsert?: SocialCommentUpsertWithWhereUniqueWithoutPostInput | SocialCommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: SocialCommentCreateManyPostInputEnvelope
    set?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    disconnect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    delete?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    connect?: SocialCommentWhereUniqueInput | SocialCommentWhereUniqueInput[]
    update?: SocialCommentUpdateWithWhereUniqueWithoutPostInput | SocialCommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: SocialCommentUpdateManyWithWhereWithoutPostInput | SocialCommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: SocialCommentScalarWhereInput | SocialCommentScalarWhereInput[]
  }

  export type SocialUserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutCommentsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialPostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<SocialPostCreateWithoutCommentsInput, SocialPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SocialPostCreateOrConnectWithoutCommentsInput
    connect?: SocialPostWhereUniqueInput
  }

  export type CommentLikeCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type CommentLikeUncheckedCreateNestedManyWithoutCommentInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
  }

  export type SocialUserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutCommentsInput
    upsert?: SocialUserUpsertWithoutCommentsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutCommentsInput, SocialUserUpdateWithoutCommentsInput>, SocialUserUncheckedUpdateWithoutCommentsInput>
  }

  export type SocialPostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<SocialPostCreateWithoutCommentsInput, SocialPostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: SocialPostCreateOrConnectWithoutCommentsInput
    upsert?: SocialPostUpsertWithoutCommentsInput
    connect?: SocialPostWhereUniqueInput
    update?: XOR<XOR<SocialPostUpdateToOneWithWhereWithoutCommentsInput, SocialPostUpdateWithoutCommentsInput>, SocialPostUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentLikeUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutCommentInput | CommentLikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutCommentInput | CommentLikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutCommentInput | CommentLikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type CommentLikeUncheckedUpdateManyWithoutCommentNestedInput = {
    create?: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput> | CommentLikeCreateWithoutCommentInput[] | CommentLikeUncheckedCreateWithoutCommentInput[]
    connectOrCreate?: CommentLikeCreateOrConnectWithoutCommentInput | CommentLikeCreateOrConnectWithoutCommentInput[]
    upsert?: CommentLikeUpsertWithWhereUniqueWithoutCommentInput | CommentLikeUpsertWithWhereUniqueWithoutCommentInput[]
    createMany?: CommentLikeCreateManyCommentInputEnvelope
    set?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    disconnect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    delete?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    connect?: CommentLikeWhereUniqueInput | CommentLikeWhereUniqueInput[]
    update?: CommentLikeUpdateWithWhereUniqueWithoutCommentInput | CommentLikeUpdateWithWhereUniqueWithoutCommentInput[]
    updateMany?: CommentLikeUpdateManyWithWhereWithoutCommentInput | CommentLikeUpdateManyWithWhereWithoutCommentInput[]
    deleteMany?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
  }

  export type SocialUserCreateNestedOneWithoutLikedpostsInput = {
    create?: XOR<SocialUserCreateWithoutLikedpostsInput, SocialUserUncheckedCreateWithoutLikedpostsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutLikedpostsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialPostCreateNestedOneWithoutLikesInput = {
    create?: XOR<SocialPostCreateWithoutLikesInput, SocialPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: SocialPostCreateOrConnectWithoutLikesInput
    connect?: SocialPostWhereUniqueInput
  }

  export type SocialUserUpdateOneRequiredWithoutLikedpostsNestedInput = {
    create?: XOR<SocialUserCreateWithoutLikedpostsInput, SocialUserUncheckedCreateWithoutLikedpostsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutLikedpostsInput
    upsert?: SocialUserUpsertWithoutLikedpostsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutLikedpostsInput, SocialUserUpdateWithoutLikedpostsInput>, SocialUserUncheckedUpdateWithoutLikedpostsInput>
  }

  export type SocialPostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<SocialPostCreateWithoutLikesInput, SocialPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: SocialPostCreateOrConnectWithoutLikesInput
    upsert?: SocialPostUpsertWithoutLikesInput
    connect?: SocialPostWhereUniqueInput
    update?: XOR<XOR<SocialPostUpdateToOneWithWhereWithoutLikesInput, SocialPostUpdateWithoutLikesInput>, SocialPostUncheckedUpdateWithoutLikesInput>
  }

  export type SocialUserCreateNestedOneWithoutLikedcommentsInput = {
    create?: XOR<SocialUserCreateWithoutLikedcommentsInput, SocialUserUncheckedCreateWithoutLikedcommentsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutLikedcommentsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialCommentCreateNestedOneWithoutLikesInput = {
    create?: XOR<SocialCommentCreateWithoutLikesInput, SocialCommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: SocialCommentCreateOrConnectWithoutLikesInput
    connect?: SocialCommentWhereUniqueInput
  }

  export type SocialUserUpdateOneRequiredWithoutLikedcommentsNestedInput = {
    create?: XOR<SocialUserCreateWithoutLikedcommentsInput, SocialUserUncheckedCreateWithoutLikedcommentsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutLikedcommentsInput
    upsert?: SocialUserUpsertWithoutLikedcommentsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutLikedcommentsInput, SocialUserUpdateWithoutLikedcommentsInput>, SocialUserUncheckedUpdateWithoutLikedcommentsInput>
  }

  export type SocialCommentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<SocialCommentCreateWithoutLikesInput, SocialCommentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: SocialCommentCreateOrConnectWithoutLikesInput
    upsert?: SocialCommentUpsertWithoutLikesInput
    connect?: SocialCommentWhereUniqueInput
    update?: XOR<XOR<SocialCommentUpdateToOneWithWhereWithoutLikesInput, SocialCommentUpdateWithoutLikesInput>, SocialCommentUncheckedUpdateWithoutLikesInput>
  }

  export type SocialUserCreateNestedOneWithoutViewedpostsInput = {
    create?: XOR<SocialUserCreateWithoutViewedpostsInput, SocialUserUncheckedCreateWithoutViewedpostsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutViewedpostsInput
    connect?: SocialUserWhereUniqueInput
  }

  export type SocialPostCreateNestedOneWithoutViewsInput = {
    create?: XOR<SocialPostCreateWithoutViewsInput, SocialPostUncheckedCreateWithoutViewsInput>
    connectOrCreate?: SocialPostCreateOrConnectWithoutViewsInput
    connect?: SocialPostWhereUniqueInput
  }

  export type SocialUserUpdateOneRequiredWithoutViewedpostsNestedInput = {
    create?: XOR<SocialUserCreateWithoutViewedpostsInput, SocialUserUncheckedCreateWithoutViewedpostsInput>
    connectOrCreate?: SocialUserCreateOrConnectWithoutViewedpostsInput
    upsert?: SocialUserUpsertWithoutViewedpostsInput
    connect?: SocialUserWhereUniqueInput
    update?: XOR<XOR<SocialUserUpdateToOneWithWhereWithoutViewedpostsInput, SocialUserUpdateWithoutViewedpostsInput>, SocialUserUncheckedUpdateWithoutViewedpostsInput>
  }

  export type SocialPostUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<SocialPostCreateWithoutViewsInput, SocialPostUncheckedCreateWithoutViewsInput>
    connectOrCreate?: SocialPostCreateOrConnectWithoutViewsInput
    upsert?: SocialPostUpsertWithoutViewsInput
    connect?: SocialPostWhereUniqueInput
    update?: XOR<XOR<SocialPostUpdateToOneWithWhereWithoutViewsInput, SocialPostUpdateWithoutViewsInput>, SocialPostUncheckedUpdateWithoutViewsInput>
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

  export type SocialFriendshipCreateWithoutUserInput = {
    createdAt?: Date | string
    friend: SocialUserCreateNestedOneWithoutFriendOfInput
  }

  export type SocialFriendshipUncheckedCreateWithoutUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type SocialFriendshipCreateOrConnectWithoutUserInput = {
    where: SocialFriendshipWhereUniqueInput
    create: XOR<SocialFriendshipCreateWithoutUserInput, SocialFriendshipUncheckedCreateWithoutUserInput>
  }

  export type SocialFriendshipCreateManyUserInputEnvelope = {
    data: SocialFriendshipCreateManyUserInput | SocialFriendshipCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialFriendshipCreateWithoutFriendInput = {
    createdAt?: Date | string
    user: SocialUserCreateNestedOneWithoutFriendsInput
  }

  export type SocialFriendshipUncheckedCreateWithoutFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type SocialFriendshipCreateOrConnectWithoutFriendInput = {
    where: SocialFriendshipWhereUniqueInput
    create: XOR<SocialFriendshipCreateWithoutFriendInput, SocialFriendshipUncheckedCreateWithoutFriendInput>
  }

  export type SocialFriendshipCreateManyFriendInputEnvelope = {
    data: SocialFriendshipCreateManyFriendInput | SocialFriendshipCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type SocialPostCreateWithoutAuthorInput = {
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeCreateNestedManyWithoutPostInput
    views?: PostViewCreateNestedManyWithoutPostInput
    comments?: SocialCommentCreateNestedManyWithoutPostInput
  }

  export type SocialPostUncheckedCreateWithoutAuthorInput = {
    id?: number
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewUncheckedCreateNestedManyWithoutPostInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type SocialPostCreateOrConnectWithoutAuthorInput = {
    where: SocialPostWhereUniqueInput
    create: XOR<SocialPostCreateWithoutAuthorInput, SocialPostUncheckedCreateWithoutAuthorInput>
  }

  export type SocialPostCreateManyAuthorInputEnvelope = {
    data: SocialPostCreateManyAuthorInput | SocialPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type SocialCommentCreateWithoutAuthorInput = {
    body: string
    commentimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    post: SocialPostCreateNestedOneWithoutCommentsInput
    likes?: CommentLikeCreateNestedManyWithoutCommentInput
  }

  export type SocialCommentUncheckedCreateWithoutAuthorInput = {
    id?: number
    body: string
    commentimg?: string | null
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type SocialCommentCreateOrConnectWithoutAuthorInput = {
    where: SocialCommentWhereUniqueInput
    create: XOR<SocialCommentCreateWithoutAuthorInput, SocialCommentUncheckedCreateWithoutAuthorInput>
  }

  export type SocialCommentCreateManyAuthorInputEnvelope = {
    data: SocialCommentCreateManyAuthorInput | SocialCommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutUserInput = {
    post: SocialPostCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
  }

  export type PostLikeCreateOrConnectWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeCreateManyUserInputEnvelope = {
    data: PostLikeCreateManyUserInput | PostLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommentLikeCreateWithoutUserInput = {
    comment: SocialCommentCreateNestedOneWithoutLikesInput
  }

  export type CommentLikeUncheckedCreateWithoutUserInput = {
    id?: number
    commentId: number
  }

  export type CommentLikeCreateOrConnectWithoutUserInput = {
    where: CommentLikeWhereUniqueInput
    create: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput>
  }

  export type CommentLikeCreateManyUserInputEnvelope = {
    data: CommentLikeCreateManyUserInput | CommentLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostViewCreateWithoutUserInput = {
    post: SocialPostCreateNestedOneWithoutViewsInput
  }

  export type PostViewUncheckedCreateWithoutUserInput = {
    id?: number
    postId: number
  }

  export type PostViewCreateOrConnectWithoutUserInput = {
    where: PostViewWhereUniqueInput
    create: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput>
  }

  export type PostViewCreateManyUserInputEnvelope = {
    data: PostViewCreateManyUserInput | PostViewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SocialFriendshipUpsertWithWhereUniqueWithoutUserInput = {
    where: SocialFriendshipWhereUniqueInput
    update: XOR<SocialFriendshipUpdateWithoutUserInput, SocialFriendshipUncheckedUpdateWithoutUserInput>
    create: XOR<SocialFriendshipCreateWithoutUserInput, SocialFriendshipUncheckedCreateWithoutUserInput>
  }

  export type SocialFriendshipUpdateWithWhereUniqueWithoutUserInput = {
    where: SocialFriendshipWhereUniqueInput
    data: XOR<SocialFriendshipUpdateWithoutUserInput, SocialFriendshipUncheckedUpdateWithoutUserInput>
  }

  export type SocialFriendshipUpdateManyWithWhereWithoutUserInput = {
    where: SocialFriendshipScalarWhereInput
    data: XOR<SocialFriendshipUpdateManyMutationInput, SocialFriendshipUncheckedUpdateManyWithoutUserInput>
  }

  export type SocialFriendshipScalarWhereInput = {
    AND?: SocialFriendshipScalarWhereInput | SocialFriendshipScalarWhereInput[]
    OR?: SocialFriendshipScalarWhereInput[]
    NOT?: SocialFriendshipScalarWhereInput | SocialFriendshipScalarWhereInput[]
    id?: IntFilter<"SocialFriendship"> | number
    userId?: IntFilter<"SocialFriendship"> | number
    friendId?: IntFilter<"SocialFriendship"> | number
    createdAt?: DateTimeFilter<"SocialFriendship"> | Date | string
  }

  export type SocialFriendshipUpsertWithWhereUniqueWithoutFriendInput = {
    where: SocialFriendshipWhereUniqueInput
    update: XOR<SocialFriendshipUpdateWithoutFriendInput, SocialFriendshipUncheckedUpdateWithoutFriendInput>
    create: XOR<SocialFriendshipCreateWithoutFriendInput, SocialFriendshipUncheckedCreateWithoutFriendInput>
  }

  export type SocialFriendshipUpdateWithWhereUniqueWithoutFriendInput = {
    where: SocialFriendshipWhereUniqueInput
    data: XOR<SocialFriendshipUpdateWithoutFriendInput, SocialFriendshipUncheckedUpdateWithoutFriendInput>
  }

  export type SocialFriendshipUpdateManyWithWhereWithoutFriendInput = {
    where: SocialFriendshipScalarWhereInput
    data: XOR<SocialFriendshipUpdateManyMutationInput, SocialFriendshipUncheckedUpdateManyWithoutFriendInput>
  }

  export type SocialPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SocialPostWhereUniqueInput
    update: XOR<SocialPostUpdateWithoutAuthorInput, SocialPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<SocialPostCreateWithoutAuthorInput, SocialPostUncheckedCreateWithoutAuthorInput>
  }

  export type SocialPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SocialPostWhereUniqueInput
    data: XOR<SocialPostUpdateWithoutAuthorInput, SocialPostUncheckedUpdateWithoutAuthorInput>
  }

  export type SocialPostUpdateManyWithWhereWithoutAuthorInput = {
    where: SocialPostScalarWhereInput
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type SocialPostScalarWhereInput = {
    AND?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
    OR?: SocialPostScalarWhereInput[]
    NOT?: SocialPostScalarWhereInput | SocialPostScalarWhereInput[]
    id?: IntFilter<"SocialPost"> | number
    body?: StringFilter<"SocialPost"> | string
    postimg?: StringNullableFilter<"SocialPost"> | string | null
    authorId?: IntFilter<"SocialPost"> | number
    createdAt?: DateTimeFilter<"SocialPost"> | Date | string
    updatedAt?: DateTimeFilter<"SocialPost"> | Date | string
  }

  export type SocialCommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SocialCommentWhereUniqueInput
    update: XOR<SocialCommentUpdateWithoutAuthorInput, SocialCommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<SocialCommentCreateWithoutAuthorInput, SocialCommentUncheckedCreateWithoutAuthorInput>
  }

  export type SocialCommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SocialCommentWhereUniqueInput
    data: XOR<SocialCommentUpdateWithoutAuthorInput, SocialCommentUncheckedUpdateWithoutAuthorInput>
  }

  export type SocialCommentUpdateManyWithWhereWithoutAuthorInput = {
    where: SocialCommentScalarWhereInput
    data: XOR<SocialCommentUpdateManyMutationInput, SocialCommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type SocialCommentScalarWhereInput = {
    AND?: SocialCommentScalarWhereInput | SocialCommentScalarWhereInput[]
    OR?: SocialCommentScalarWhereInput[]
    NOT?: SocialCommentScalarWhereInput | SocialCommentScalarWhereInput[]
    id?: IntFilter<"SocialComment"> | number
    body?: StringFilter<"SocialComment"> | string
    commentimg?: StringNullableFilter<"SocialComment"> | string | null
    authorId?: IntFilter<"SocialComment"> | number
    postId?: IntFilter<"SocialComment"> | number
    createdAt?: DateTimeFilter<"SocialComment"> | Date | string
    updatedAt?: DateTimeFilter<"SocialComment"> | Date | string
  }

  export type PostLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutUserInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikeScalarWhereInput = {
    AND?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    OR?: PostLikeScalarWhereInput[]
    NOT?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    id?: IntFilter<"PostLike"> | number
    userId?: IntFilter<"PostLike"> | number
    postId?: IntFilter<"PostLike"> | number
  }

  export type CommentLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentLikeWhereUniqueInput
    update: XOR<CommentLikeUpdateWithoutUserInput, CommentLikeUncheckedUpdateWithoutUserInput>
    create: XOR<CommentLikeCreateWithoutUserInput, CommentLikeUncheckedCreateWithoutUserInput>
  }

  export type CommentLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentLikeWhereUniqueInput
    data: XOR<CommentLikeUpdateWithoutUserInput, CommentLikeUncheckedUpdateWithoutUserInput>
  }

  export type CommentLikeUpdateManyWithWhereWithoutUserInput = {
    where: CommentLikeScalarWhereInput
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentLikeScalarWhereInput = {
    AND?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
    OR?: CommentLikeScalarWhereInput[]
    NOT?: CommentLikeScalarWhereInput | CommentLikeScalarWhereInput[]
    id?: IntFilter<"CommentLike"> | number
    userId?: IntFilter<"CommentLike"> | number
    commentId?: IntFilter<"CommentLike"> | number
  }

  export type PostViewUpsertWithWhereUniqueWithoutUserInput = {
    where: PostViewWhereUniqueInput
    update: XOR<PostViewUpdateWithoutUserInput, PostViewUncheckedUpdateWithoutUserInput>
    create: XOR<PostViewCreateWithoutUserInput, PostViewUncheckedCreateWithoutUserInput>
  }

  export type PostViewUpdateWithWhereUniqueWithoutUserInput = {
    where: PostViewWhereUniqueInput
    data: XOR<PostViewUpdateWithoutUserInput, PostViewUncheckedUpdateWithoutUserInput>
  }

  export type PostViewUpdateManyWithWhereWithoutUserInput = {
    where: PostViewScalarWhereInput
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyWithoutUserInput>
  }

  export type PostViewScalarWhereInput = {
    AND?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
    OR?: PostViewScalarWhereInput[]
    NOT?: PostViewScalarWhereInput | PostViewScalarWhereInput[]
    id?: IntFilter<"PostView"> | number
    userId?: IntFilter<"PostView"> | number
    postId?: IntFilter<"PostView"> | number
  }

  export type SocialUserCreateWithoutFriendsInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutFriendsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutFriendsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutFriendsInput, SocialUserUncheckedCreateWithoutFriendsInput>
  }

  export type SocialUserCreateWithoutFriendOfInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutFriendOfInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutFriendOfInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutFriendOfInput, SocialUserUncheckedCreateWithoutFriendOfInput>
  }

  export type SocialUserUpsertWithoutFriendsInput = {
    update: XOR<SocialUserUpdateWithoutFriendsInput, SocialUserUncheckedUpdateWithoutFriendsInput>
    create: XOR<SocialUserCreateWithoutFriendsInput, SocialUserUncheckedCreateWithoutFriendsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutFriendsInput, SocialUserUncheckedUpdateWithoutFriendsInput>
  }

  export type SocialUserUpdateWithoutFriendsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutFriendsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUpsertWithoutFriendOfInput = {
    update: XOR<SocialUserUpdateWithoutFriendOfInput, SocialUserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<SocialUserCreateWithoutFriendOfInput, SocialUserUncheckedCreateWithoutFriendOfInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutFriendOfInput, SocialUserUncheckedUpdateWithoutFriendOfInput>
  }

  export type SocialUserUpdateWithoutFriendOfInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutFriendOfInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PostLikeCreateWithoutPostInput = {
    user: SocialUserCreateNestedOneWithoutLikedpostsInput
  }

  export type PostLikeUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
  }

  export type PostLikeCreateOrConnectWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeCreateManyPostInputEnvelope = {
    data: PostLikeCreateManyPostInput | PostLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostViewCreateWithoutPostInput = {
    user: SocialUserCreateNestedOneWithoutViewedpostsInput
  }

  export type PostViewUncheckedCreateWithoutPostInput = {
    id?: number
    userId: number
  }

  export type PostViewCreateOrConnectWithoutPostInput = {
    where: PostViewWhereUniqueInput
    create: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput>
  }

  export type PostViewCreateManyPostInputEnvelope = {
    data: PostViewCreateManyPostInput | PostViewCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type SocialUserCreateWithoutPostsInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutPostsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutPostsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutPostsInput, SocialUserUncheckedCreateWithoutPostsInput>
  }

  export type SocialCommentCreateWithoutPostInput = {
    body: string
    commentimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: SocialUserCreateNestedOneWithoutCommentsInput
    likes?: CommentLikeCreateNestedManyWithoutCommentInput
  }

  export type SocialCommentUncheckedCreateWithoutPostInput = {
    id?: number
    body: string
    commentimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput
  }

  export type SocialCommentCreateOrConnectWithoutPostInput = {
    where: SocialCommentWhereUniqueInput
    create: XOR<SocialCommentCreateWithoutPostInput, SocialCommentUncheckedCreateWithoutPostInput>
  }

  export type SocialCommentCreateManyPostInputEnvelope = {
    data: SocialCommentCreateManyPostInput | SocialCommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutPostInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type PostViewUpsertWithWhereUniqueWithoutPostInput = {
    where: PostViewWhereUniqueInput
    update: XOR<PostViewUpdateWithoutPostInput, PostViewUncheckedUpdateWithoutPostInput>
    create: XOR<PostViewCreateWithoutPostInput, PostViewUncheckedCreateWithoutPostInput>
  }

  export type PostViewUpdateWithWhereUniqueWithoutPostInput = {
    where: PostViewWhereUniqueInput
    data: XOR<PostViewUpdateWithoutPostInput, PostViewUncheckedUpdateWithoutPostInput>
  }

  export type PostViewUpdateManyWithWhereWithoutPostInput = {
    where: PostViewScalarWhereInput
    data: XOR<PostViewUpdateManyMutationInput, PostViewUncheckedUpdateManyWithoutPostInput>
  }

  export type SocialUserUpsertWithoutPostsInput = {
    update: XOR<SocialUserUpdateWithoutPostsInput, SocialUserUncheckedUpdateWithoutPostsInput>
    create: XOR<SocialUserCreateWithoutPostsInput, SocialUserUncheckedCreateWithoutPostsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutPostsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutPostsInput, SocialUserUncheckedUpdateWithoutPostsInput>
  }

  export type SocialUserUpdateWithoutPostsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialCommentUpsertWithWhereUniqueWithoutPostInput = {
    where: SocialCommentWhereUniqueInput
    update: XOR<SocialCommentUpdateWithoutPostInput, SocialCommentUncheckedUpdateWithoutPostInput>
    create: XOR<SocialCommentCreateWithoutPostInput, SocialCommentUncheckedCreateWithoutPostInput>
  }

  export type SocialCommentUpdateWithWhereUniqueWithoutPostInput = {
    where: SocialCommentWhereUniqueInput
    data: XOR<SocialCommentUpdateWithoutPostInput, SocialCommentUncheckedUpdateWithoutPostInput>
  }

  export type SocialCommentUpdateManyWithWhereWithoutPostInput = {
    where: SocialCommentScalarWhereInput
    data: XOR<SocialCommentUpdateManyMutationInput, SocialCommentUncheckedUpdateManyWithoutPostInput>
  }

  export type SocialUserCreateWithoutCommentsInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutCommentsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutCommentsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
  }

  export type SocialPostCreateWithoutCommentsInput = {
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeCreateNestedManyWithoutPostInput
    views?: PostViewCreateNestedManyWithoutPostInput
    author: SocialUserCreateNestedOneWithoutPostsInput
  }

  export type SocialPostUncheckedCreateWithoutCommentsInput = {
    id?: number
    body: string
    postimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    views?: PostViewUncheckedCreateNestedManyWithoutPostInput
  }

  export type SocialPostCreateOrConnectWithoutCommentsInput = {
    where: SocialPostWhereUniqueInput
    create: XOR<SocialPostCreateWithoutCommentsInput, SocialPostUncheckedCreateWithoutCommentsInput>
  }

  export type CommentLikeCreateWithoutCommentInput = {
    user: SocialUserCreateNestedOneWithoutLikedcommentsInput
  }

  export type CommentLikeUncheckedCreateWithoutCommentInput = {
    id?: number
    userId: number
  }

  export type CommentLikeCreateOrConnectWithoutCommentInput = {
    where: CommentLikeWhereUniqueInput
    create: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput>
  }

  export type CommentLikeCreateManyCommentInputEnvelope = {
    data: CommentLikeCreateManyCommentInput | CommentLikeCreateManyCommentInput[]
    skipDuplicates?: boolean
  }

  export type SocialUserUpsertWithoutCommentsInput = {
    update: XOR<SocialUserUpdateWithoutCommentsInput, SocialUserUncheckedUpdateWithoutCommentsInput>
    create: XOR<SocialUserCreateWithoutCommentsInput, SocialUserUncheckedCreateWithoutCommentsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutCommentsInput, SocialUserUncheckedUpdateWithoutCommentsInput>
  }

  export type SocialUserUpdateWithoutCommentsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialPostUpsertWithoutCommentsInput = {
    update: XOR<SocialPostUpdateWithoutCommentsInput, SocialPostUncheckedUpdateWithoutCommentsInput>
    create: XOR<SocialPostCreateWithoutCommentsInput, SocialPostUncheckedCreateWithoutCommentsInput>
    where?: SocialPostWhereInput
  }

  export type SocialPostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: SocialPostWhereInput
    data: XOR<SocialPostUpdateWithoutCommentsInput, SocialPostUncheckedUpdateWithoutCommentsInput>
  }

  export type SocialPostUpdateWithoutCommentsInput = {
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    views?: PostViewUpdateManyWithoutPostNestedInput
    author?: SocialUserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type SocialPostUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommentLikeUpsertWithWhereUniqueWithoutCommentInput = {
    where: CommentLikeWhereUniqueInput
    update: XOR<CommentLikeUpdateWithoutCommentInput, CommentLikeUncheckedUpdateWithoutCommentInput>
    create: XOR<CommentLikeCreateWithoutCommentInput, CommentLikeUncheckedCreateWithoutCommentInput>
  }

  export type CommentLikeUpdateWithWhereUniqueWithoutCommentInput = {
    where: CommentLikeWhereUniqueInput
    data: XOR<CommentLikeUpdateWithoutCommentInput, CommentLikeUncheckedUpdateWithoutCommentInput>
  }

  export type CommentLikeUpdateManyWithWhereWithoutCommentInput = {
    where: CommentLikeScalarWhereInput
    data: XOR<CommentLikeUpdateManyMutationInput, CommentLikeUncheckedUpdateManyWithoutCommentInput>
  }

  export type SocialUserCreateWithoutLikedpostsInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutLikedpostsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutLikedpostsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutLikedpostsInput, SocialUserUncheckedCreateWithoutLikedpostsInput>
  }

  export type SocialPostCreateWithoutLikesInput = {
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: PostViewCreateNestedManyWithoutPostInput
    author: SocialUserCreateNestedOneWithoutPostsInput
    comments?: SocialCommentCreateNestedManyWithoutPostInput
  }

  export type SocialPostUncheckedCreateWithoutLikesInput = {
    id?: number
    body: string
    postimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    views?: PostViewUncheckedCreateNestedManyWithoutPostInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type SocialPostCreateOrConnectWithoutLikesInput = {
    where: SocialPostWhereUniqueInput
    create: XOR<SocialPostCreateWithoutLikesInput, SocialPostUncheckedCreateWithoutLikesInput>
  }

  export type SocialUserUpsertWithoutLikedpostsInput = {
    update: XOR<SocialUserUpdateWithoutLikedpostsInput, SocialUserUncheckedUpdateWithoutLikedpostsInput>
    create: XOR<SocialUserCreateWithoutLikedpostsInput, SocialUserUncheckedCreateWithoutLikedpostsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutLikedpostsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutLikedpostsInput, SocialUserUncheckedUpdateWithoutLikedpostsInput>
  }

  export type SocialUserUpdateWithoutLikedpostsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutLikedpostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialPostUpsertWithoutLikesInput = {
    update: XOR<SocialPostUpdateWithoutLikesInput, SocialPostUncheckedUpdateWithoutLikesInput>
    create: XOR<SocialPostCreateWithoutLikesInput, SocialPostUncheckedCreateWithoutLikesInput>
    where?: SocialPostWhereInput
  }

  export type SocialPostUpdateToOneWithWhereWithoutLikesInput = {
    where?: SocialPostWhereInput
    data: XOR<SocialPostUpdateWithoutLikesInput, SocialPostUncheckedUpdateWithoutLikesInput>
  }

  export type SocialPostUpdateWithoutLikesInput = {
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: PostViewUpdateManyWithoutPostNestedInput
    author?: SocialUserUpdateOneRequiredWithoutPostsNestedInput
    comments?: SocialCommentUpdateManyWithoutPostNestedInput
  }

  export type SocialPostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    views?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SocialUserCreateWithoutLikedcommentsInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    viewedposts?: PostViewCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutLikedcommentsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    viewedposts?: PostViewUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutLikedcommentsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutLikedcommentsInput, SocialUserUncheckedCreateWithoutLikedcommentsInput>
  }

  export type SocialCommentCreateWithoutLikesInput = {
    body: string
    commentimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: SocialUserCreateNestedOneWithoutCommentsInput
    post: SocialPostCreateNestedOneWithoutCommentsInput
  }

  export type SocialCommentUncheckedCreateWithoutLikesInput = {
    id?: number
    body: string
    commentimg?: string | null
    authorId: number
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialCommentCreateOrConnectWithoutLikesInput = {
    where: SocialCommentWhereUniqueInput
    create: XOR<SocialCommentCreateWithoutLikesInput, SocialCommentUncheckedCreateWithoutLikesInput>
  }

  export type SocialUserUpsertWithoutLikedcommentsInput = {
    update: XOR<SocialUserUpdateWithoutLikedcommentsInput, SocialUserUncheckedUpdateWithoutLikedcommentsInput>
    create: XOR<SocialUserCreateWithoutLikedcommentsInput, SocialUserUncheckedCreateWithoutLikedcommentsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutLikedcommentsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutLikedcommentsInput, SocialUserUncheckedUpdateWithoutLikedcommentsInput>
  }

  export type SocialUserUpdateWithoutLikedcommentsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutLikedcommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    viewedposts?: PostViewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialCommentUpsertWithoutLikesInput = {
    update: XOR<SocialCommentUpdateWithoutLikesInput, SocialCommentUncheckedUpdateWithoutLikesInput>
    create: XOR<SocialCommentCreateWithoutLikesInput, SocialCommentUncheckedCreateWithoutLikesInput>
    where?: SocialCommentWhereInput
  }

  export type SocialCommentUpdateToOneWithWhereWithoutLikesInput = {
    where?: SocialCommentWhereInput
    data: XOR<SocialCommentUpdateWithoutLikesInput, SocialCommentUncheckedUpdateWithoutLikesInput>
  }

  export type SocialCommentUpdateWithoutLikesInput = {
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    post?: SocialPostUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type SocialCommentUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUserCreateWithoutViewedpostsInput = {
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipCreateNestedManyWithoutFriendInput
    posts?: SocialPostCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeCreateNestedManyWithoutUserInput
  }

  export type SocialUserUncheckedCreateWithoutViewedpostsInput = {
    id?: number
    fullname: string
    username: string
    email: string
    password?: string | null
    bio?: string | null
    gravatar?: string | null
    token?: string | null
    githubotp?: string | null
    createdAt?: Date | string
    friends?: SocialFriendshipUncheckedCreateNestedManyWithoutUserInput
    friendOf?: SocialFriendshipUncheckedCreateNestedManyWithoutFriendInput
    posts?: SocialPostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutAuthorInput
    likedposts?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    likedcomments?: CommentLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type SocialUserCreateOrConnectWithoutViewedpostsInput = {
    where: SocialUserWhereUniqueInput
    create: XOR<SocialUserCreateWithoutViewedpostsInput, SocialUserUncheckedCreateWithoutViewedpostsInput>
  }

  export type SocialPostCreateWithoutViewsInput = {
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeCreateNestedManyWithoutPostInput
    author: SocialUserCreateNestedOneWithoutPostsInput
    comments?: SocialCommentCreateNestedManyWithoutPostInput
  }

  export type SocialPostUncheckedCreateWithoutViewsInput = {
    id?: number
    body: string
    postimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    comments?: SocialCommentUncheckedCreateNestedManyWithoutPostInput
  }

  export type SocialPostCreateOrConnectWithoutViewsInput = {
    where: SocialPostWhereUniqueInput
    create: XOR<SocialPostCreateWithoutViewsInput, SocialPostUncheckedCreateWithoutViewsInput>
  }

  export type SocialUserUpsertWithoutViewedpostsInput = {
    update: XOR<SocialUserUpdateWithoutViewedpostsInput, SocialUserUncheckedUpdateWithoutViewedpostsInput>
    create: XOR<SocialUserCreateWithoutViewedpostsInput, SocialUserUncheckedCreateWithoutViewedpostsInput>
    where?: SocialUserWhereInput
  }

  export type SocialUserUpdateToOneWithWhereWithoutViewedpostsInput = {
    where?: SocialUserWhereInput
    data: XOR<SocialUserUpdateWithoutViewedpostsInput, SocialUserUncheckedUpdateWithoutViewedpostsInput>
  }

  export type SocialUserUpdateWithoutViewedpostsInput = {
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUpdateManyWithoutUserNestedInput
  }

  export type SocialUserUncheckedUpdateWithoutViewedpostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    gravatar?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    githubotp?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friends?: SocialFriendshipUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: SocialFriendshipUncheckedUpdateManyWithoutFriendNestedInput
    posts?: SocialPostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutAuthorNestedInput
    likedposts?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    likedcomments?: CommentLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SocialPostUpsertWithoutViewsInput = {
    update: XOR<SocialPostUpdateWithoutViewsInput, SocialPostUncheckedUpdateWithoutViewsInput>
    create: XOR<SocialPostCreateWithoutViewsInput, SocialPostUncheckedCreateWithoutViewsInput>
    where?: SocialPostWhereInput
  }

  export type SocialPostUpdateToOneWithWhereWithoutViewsInput = {
    where?: SocialPostWhereInput
    data: XOR<SocialPostUpdateWithoutViewsInput, SocialPostUncheckedUpdateWithoutViewsInput>
  }

  export type SocialPostUpdateWithoutViewsInput = {
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    author?: SocialUserUpdateOneRequiredWithoutPostsNestedInput
    comments?: SocialCommentUpdateManyWithoutPostNestedInput
  }

  export type SocialPostUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SocialFriendshipCreateManyUserInput = {
    id?: number
    friendId: number
    createdAt?: Date | string
  }

  export type SocialFriendshipCreateManyFriendInput = {
    id?: number
    userId: number
    createdAt?: Date | string
  }

  export type SocialPostCreateManyAuthorInput = {
    id?: number
    body: string
    postimg?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialCommentCreateManyAuthorInput = {
    id?: number
    body: string
    commentimg?: string | null
    postId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikeCreateManyUserInput = {
    id?: number
    postId: number
  }

  export type CommentLikeCreateManyUserInput = {
    id?: number
    commentId: number
  }

  export type PostViewCreateManyUserInput = {
    id?: number
    postId: number
  }

  export type SocialFriendshipUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    friend?: SocialUserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type SocialFriendshipUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialFriendshipUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialFriendshipUpdateWithoutFriendInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: SocialUserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type SocialFriendshipUncheckedUpdateWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialFriendshipUncheckedUpdateManyWithoutFriendInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUpdateWithoutAuthorInput = {
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    views?: PostViewUpdateManyWithoutPostNestedInput
    comments?: SocialCommentUpdateManyWithoutPostNestedInput
  }

  export type SocialPostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    views?: PostViewUncheckedUpdateManyWithoutPostNestedInput
    comments?: SocialCommentUncheckedUpdateManyWithoutPostNestedInput
  }

  export type SocialPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    postimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCommentUpdateWithoutAuthorInput = {
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: SocialPostUpdateOneRequiredWithoutCommentsNestedInput
    likes?: CommentLikeUpdateManyWithoutCommentNestedInput
  }

  export type SocialCommentUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type SocialCommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    postId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUpdateWithoutUserInput = {
    post?: SocialPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentLikeUpdateWithoutUserInput = {
    comment?: SocialCommentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type CommentLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    commentId?: IntFieldUpdateOperationsInput | number
  }

  export type PostViewUpdateWithoutUserInput = {
    post?: SocialPostUpdateOneRequiredWithoutViewsNestedInput
  }

  export type PostViewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostViewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    postId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeCreateManyPostInput = {
    id?: number
    userId: number
  }

  export type PostViewCreateManyPostInput = {
    id?: number
    userId: number
  }

  export type SocialCommentCreateManyPostInput = {
    id?: number
    body: string
    commentimg?: string | null
    authorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostLikeUpdateWithoutPostInput = {
    user?: SocialUserUpdateOneRequiredWithoutLikedpostsNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostLikeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostViewUpdateWithoutPostInput = {
    user?: SocialUserUpdateOneRequiredWithoutViewedpostsNestedInput
  }

  export type PostViewUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PostViewUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type SocialCommentUpdateWithoutPostInput = {
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: SocialUserUpdateOneRequiredWithoutCommentsNestedInput
    likes?: CommentLikeUpdateManyWithoutCommentNestedInput
  }

  export type SocialCommentUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput
  }

  export type SocialCommentUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    body?: StringFieldUpdateOperationsInput | string
    commentimg?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentLikeCreateManyCommentInput = {
    id?: number
    userId: number
  }

  export type CommentLikeUpdateWithoutCommentInput = {
    user?: SocialUserUpdateOneRequiredWithoutLikedcommentsNestedInput
  }

  export type CommentLikeUncheckedUpdateWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CommentLikeUncheckedUpdateManyWithoutCommentInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
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