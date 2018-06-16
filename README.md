# modern-api
Modern API

https://medium.freecodecamp.org/how-to-setup-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-e251ac189649
https://github.com/wesharehoodies/graphql-nodejs-hapi-api

## 1 - MongoDB
### RUN
mongod --dbpath /Users/marcoguastalli/opt/MongoDB/m27data/db
### LOGIN
mongo --host 127.0.0.1:27017

## 2 - node
npm init -y
cd /Users/marcoguastalli/dev/repository/git/nodejs/modern-api
#yarn add hapi nodemon
node index.js
Server running at: http://localhost:4000

## 3 - Mongoose
#yarn add mongoose

## 4 - GET
http://localhost:4000/api/v1/paintings

## 5 - POST
curl -d "name=Mona%20Lista&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMona_Lisa&technique=italiana" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:4000/api/v1/paintings
