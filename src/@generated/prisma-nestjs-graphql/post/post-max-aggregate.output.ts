import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PostMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    body?: string;

    @Field(() => Int, {nullable:true})
    authorId?: number;
}
