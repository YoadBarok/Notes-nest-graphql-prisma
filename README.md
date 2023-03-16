

Make sure to migrate & seed the db before running the server:
<br>npx prisma migrate dev<br>
npx prisma db seed

to start in dev mode run:

npm run dev

the above script will run concurrently "prisma:generate", "gen-typing", "start:dev"
