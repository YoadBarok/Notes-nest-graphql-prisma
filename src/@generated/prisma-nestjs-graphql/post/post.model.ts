import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Post {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => Int, {nullable:false})
    authorId!: number;
}
