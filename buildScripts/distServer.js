import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
/* eslint-disable no-console */


/** This is not for actual production use: only for local debugging purposes only */
const port = 3000;

const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req,resp){
  resp.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.get('/users', function(req, resp){
  //hardcoding for simplicity, in real life: it will hit db
  resp.json([
    {"id": 1, "firstName": "Nick", "lastName": "Saban" },
    {"id": 2, "firstName": "Bear", "lastName": "Bryant" },
    {"id": 3, "firstName": "Gene", "lastName": "Stallings" },
  ])
});

app.listen(port, function(err){
  if(err){
    console.log(err); //eslint-disable-line no-console
  }else{
    open('http://localhost:' + port);
  }
})
