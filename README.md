# modern-api
Modern API

https://medium.freecodecamp.org/how-to-setup-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-e251ac189649
https://medium.freecodecamp.org/how-to-set-up-a-powerful-api-with-nodejs-graphql-mongodb-hapi-and-swagger-part-ii-80266790a3ac
https://github.com/wesharehoodies/graphql-nodejs-hapi-api

## 1 - MongoDB
### RUN
mongod --dbpath /Users/marco27/opt/MongoDB/m27data/db
### LOGIN
mongo --host 127.0.0.1:27017
    use local
    db.paintings.find();

## 2 - node
#only 1st time: npm init -y
#only 1st timeyarn add hapi nodemon
cd /Users/marco27/dev/repository/git/modern-api
node index.js
    Server running at: http://localhost:4000

## 3 - Mongoose
#yarn add mongoose

## 4 - GET
http://localhost:4000/api/v1/paintings

## 5 - POST
curl -d "name=Mona%20Lista&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMona_Lisa&technique=italiana" -H "Content-Type: application/x-www-form-urlencoded" -X POST http://localhost:4000/api/v1/paintings/

## 6 - GraphQL
#only 1st time: yarn add graphql apollo-server-hapi
http://localhost:4000/graphiql
{
  painting(id:"5c2a0a3b995e9e0e6cc8cf41"){
    name
  }
}
http://localhost:4000/graphiql?query=%7B%0A%20%20painting(id%3A%5c2a0a3b995e9e0e6cc8cf41%22)%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D
## 7 - Swagger
#only 1st time: yarn add hapi-swagger inert vision
http://localhost:4000/documentation

## 8 - Update
npm update
npm install -g npm
npm audit fix