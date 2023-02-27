import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const firstUser = await prisma.user.create({
    data: {
      email: 'firstUser@email.com',
      name: 'firstUser',
      password: "password"
    },
  });
  
  const secondUser = await prisma.user.create({
    data: {
      email: 'secondUser@email.com',
      name: 'secondUser',
      password: "password2"
    },
  });

  const firstPost = await prisma.post.create({
    data: {
      title: 'First post',
      body: 'Body of the first post Body of the first post Body of the first post Body of the first post Body of the first post ',
      authorId: firstUser.id,
    },
  });
  
  const secondPost = await prisma.post.create({
    data: {
      title: 'Second post',
      body: 'Body of the Second post Body of the Second post Body of the Second post Body of the Second post Body of the Second post ',
      authorId: firstUser.id,
    },
  });

  console.log({ firstPost });
  console.log({ secondPost });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
