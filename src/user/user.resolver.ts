import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';
import { OrderByParams, WhereParams } from 'src/graphql';
import { UserUpdateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-update.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.userService.create(createUserInput);
  }

  @Query('users')
  findAll(
    @Args('orderBy')
    orderBy?: OrderByParams,
    @Args('where')
    where?: WhereParams,
  ) {
    return this.userService.findAll(orderBy, where);
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.userService.findOne({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('id') id: number,
    @Args('updateUserInput') updateUserInput: UserUpdateInput,
  ) {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.userService.remove(id);
  }
}
