<<<<<<< HEAD
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 4200;

app.use(express.static(path.join(__dirname,'')));

app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'')));

const server = http.createServer(app);

server.listen(port,()=> console.log('corriendo'));
=======
const express = require ('express');
const http = require ('http');
const path = require ('path');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname,'')));

app.get('/*',(req,res)=> res.sendFile(path.join(__dirname,'index.html')));

const server = http.createServer(app);

server.listen(port,()=> console.log('corriendo'));
>>>>>>> 6c50ebc0495d556bbb74d1471537ea88f7668f23
