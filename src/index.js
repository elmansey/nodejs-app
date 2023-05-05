const express = require('express');

// init app 
const PORT = 4000;
const app = express();

// route 
app.get('/',(req,res) => res.send("Hello Iam A cloud and Devops Engineer  ") );

app.listen(PORT,() => console.log(`app is up and running on port : ${PORT}`));