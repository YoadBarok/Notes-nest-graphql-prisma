

Make sure to migrate & seed the db before running the server:
npx prisma migrate dev --name init
npx prisma db seed

to start in dev mode run (concurrent script):

npm run dev