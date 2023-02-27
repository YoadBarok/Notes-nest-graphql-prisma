import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostService } from './post.service';
import { PubSub } from 'graphql-subscriptions';
import { PostCreateInput } from 'src/@generated/prisma-nestjs-graphql/post/post-create.input';
import { PostUpdateInput } from 'src/@generated/prisma-nestjs-graphql/post/post-update.input';
import { OrderByParams, WhereParams } from 'src/graphql';

const pubSub = new PubSub();

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  async create(@Args('createPostInput') createPostInput: PostCreateInput) {
    const createdPost = await this.postService.create(createPostInput);
    await this.updateAllPostsSubscription();
    return createdPost;
  }

  @Query('posts')
  findAll(
    @Args('orderBy')
    orderBy?: OrderByParams,
    @Args('where')
    where?: WhereParams,
  ) {
    return this.postService.findAll(orderBy, where);
  }

  @Query('post')
  findOne(@Args('id') id: number) {
    return this.postService.findOne({ id });
  }

  @Mutation('updatePost')
  update(
    @Args('id') id: number,
    @Args('updatePostInput') updatePostInput: PostUpdateInput,
  ) {
    return this.postService.update(id, updatePostInput);
  }

  @Mutation('removePost')
  async remove(@Args('id') id: number) {
    const removedPost = await this.postService.remove(id);
    await this.updateAllPostsSubscription();
    return removedPost;
  }

  @Subscription()
  allPosts() {
    return pubSub.asyncIterator('allPosts');
  }

  async updateAllPostsSubscription() {
    const posts = await this.postService.findAll();
    pubSub.publish('allPosts', { allPosts: { posts } });
  }
}
