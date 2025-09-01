#!/bin/bash
npm install --prefix server
npm run build --prefix server
(cd server && npx prisma db push)

npm install --prefix client
npm start --prefix server &
npm start --prefix client

