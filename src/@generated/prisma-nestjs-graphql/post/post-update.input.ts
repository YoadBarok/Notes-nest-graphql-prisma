import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutPostsNestedInput } from '../user/user-update-one-required-without-posts-nested.input';

@InputType()
export class PostUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    body?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
}
