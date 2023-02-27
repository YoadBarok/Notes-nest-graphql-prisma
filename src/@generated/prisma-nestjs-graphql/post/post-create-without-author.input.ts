import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PostCreateWithoutAuthorInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    body!: string;
}
