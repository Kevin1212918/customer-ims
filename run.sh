#!/bin/bash
npm install --prefix server
npm install --prefix client
(cd server && npx prisma db push)
npm start --prefix server & npm start --prefix client