
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePostInput {
    createdAt?: Nullable<DateTime>;
    title: string;
    body: string;
    authorId: number;
}

export class OrderByParams {
    orderByField: string;
    orderByDirection?: Nullable<string>;
}

export class WhereParams {
    whereField: string;
    intValue?: Nullable<number>;
    stringValue?: Nullable<string>;
    dateTimeValue?: Nullable<DateTime>;
}

export class UpdatePostInput {
    title: string;
    body: string;
}

export class CreateUserInput {
    email: string;
    name?: Nullable<string>;
    password: string;
}

export class UpdateUserInput {
    name?: Nullable<string>;
    password: string;
}

export class Post {
    id: number;
    createdAt?: Nullable<DateTime>;
    title: string;
    body: string;
    authorId: number;
    author: User;
}

export abstract class IQuery {
    abstract posts(orderBy?: Nullable<OrderByParams>, where?: Nullable<WhereParams>): Nullable<Post>[] | Promise<Nullable<Post>[]>;

    abstract post(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract users(orderBy?: Nullable<OrderByParams>, where?: Nullable<WhereParams>): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export class AllPostsUpdated {
    posts: Nullable<Post>[];
}

export abstract class IMutation {
    abstract createPost(createPostInput: CreatePostInput): Post | Promise<Post>;

    abstract updatePost(id: number, updatePostInput: UpdatePostInput): Post | Promise<Post>;

    abstract removePost(id: number): Nullable<Post> | Promise<Nullable<Post>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(id: number, updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: number): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class ISubscription {
    abstract allPosts(): Nullable<AllPostsUpdated> | Promise<Nullable<AllPostsUpdated>>;
}

export class User {
    id: number;
    email: string;
    name?: Nullable<string>;
    posts: Nullable<Post>[];
}

export type DateTime = any;
type Nullable<T> = T | null;
