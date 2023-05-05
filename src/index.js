const express = require('express');
const mongoose = require('mongoose');
// init app 
const PORT = process.env.PORT  || 4000;
const app = express();

const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_PORT =  process.env.DB_PORT
const DB_HOST =  "mongo"
const DB_NAME  = process.env.DB_NAME
// /${DB_NAME}
const URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`

// connect to db 
mongoose.connect(URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));
// route 
app.get('/',(req,res) => res.send("Hello Iam A cloud and Devops Engineer  ") );

app.listen(PORT,() => console.log(`app is up and running on port : ${PORT}`));