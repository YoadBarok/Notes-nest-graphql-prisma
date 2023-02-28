import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { OrderByParams, WhereParams } from 'src/graphql';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(createUserInput: Prisma.UserCreateInput) {
    const hashedPassword = await bcrypt.hash(createUserInput.password, 10);
    return this.prisma.user.create({
      data: { ...createUserInput, password: hashedPassword },
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
    return this.prisma.user.findMany({
      orderBy: { [orderByField]: orderByDirection },
      where: { [whereField]: whereValue },
      include: {
        posts: true,
      },
    });
  }

  findOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      include: {
        posts: true,
      },
    });
  }

  update(id: number, updateUserInput: Prisma.UserUpdateInput) {
    return this.prisma.post.update({
      where: {
        id: id,
      },
      data: updateUserInput,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
