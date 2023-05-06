const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const os = require('os');

// init app 
const PORT = process.env.PORT  || 4000;
const app = express();


const REDIS_HOST="redis"
const REDIS_PORT=6379

// connect to redis 
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', err => console.log('redis connected successfully... !'));
redisClient.connect();


// connect to mongo 
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_PORT =  process.env.DB_PORT
const DB_HOST =  "mongo"
const DB_NAME  = process.env.DB_NAME
// /${DB_NAME}
const URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`

// connect to db 
mongoose.connect(URI)
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(err => console.log(err));
// route 
app.get('/',(req,res) => {
  res.send(`hello the machine is  ${os.hostname}`)
} );

app.listen(PORT,() => console.log(`app is up and running on port : ${PORT}`));