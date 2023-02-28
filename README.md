

Make sure to migrate & seed the db before running the server:
npx prisma migrate dev --name init
npx prisma db seed

to start in dev mode run:

npm run dev

the above script will run concurrently "prisma:generate", "gen-typing", "start:dev"