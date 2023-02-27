import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    title = "title",
    body = "body",
    authorId = "authorId"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
