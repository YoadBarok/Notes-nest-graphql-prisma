import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPostsInput } from '../user/user-create-nested-one-without-posts.input';

@InputType()
export class PostCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutPostsInput;
}
