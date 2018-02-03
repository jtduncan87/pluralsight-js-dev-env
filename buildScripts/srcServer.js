import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';
/* eslint-disable no-console */

const port = 3000;

const app = express();

const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.get('/', function(req,resp){
  resp.sendFile(path.join(__dirname, '../src/index.html'))
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
