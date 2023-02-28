import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams, WhereParams } from 'src/graphql';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  create(createPostInput: Prisma.PostCreateInput) {
    return this.prisma.post.create({
      data: createPostInput,
    });
  }

  findAll(orderBy?: OrderByParams, where?: WhereParams) {
    const { orderByField = 'createdAt', orderByDirection = 'desc' } =
      orderBy || {};
    const { whereField, intValue, stringValue, dateTimeValue } = where || {};
    const whereValue = intValue
      ? intValue
      : stringValue
      ? stringValue
      : dateTimeValue;
    return this.prisma.post.findMany({
      orderBy: { [orderByField]: orderByDirection },
      where: { [whereField]: whereValue },
      include: {
        author: true,
      },
    });
  }

  findOne(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  update(id: number, updatePostInput: Prisma.PostUpdateInput) {
    return this.prisma.post.update({
      where: {
        id: id,
      },
      data: updatePostInput,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({
      where: {
        id,
      },
    });
  }
}
