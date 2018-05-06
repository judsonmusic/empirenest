const express = require('express')
const path = require('path')
const open = require('open')
const router = express.Router()
const compression = require('compression');
const fs = require('fs')
const cors = require('cors')
var bodyParser = require('body-parser')

const port = process.env.PORT || 3000
const app = express()
app.use(cors())

app.use(bodyParser.json({
    limit: '50mb'
}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

const images = require('./middleware/images');
app.use('/api', router);
app.use('/api/images', images)


// serve static assets normally
app.use(express.static('www'))
var a = ['/'];
//all get requests resolve to index.
app.get(a, function (req, res) {
  //console.log('This is a test', req.originalUrl, req.url);
  res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.setHeader('Expires', '-1');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('X-UA-Compatible', 'IE=Edge,chrome=1');
  res.setHeader('Judson', 'Rocks!');
  if (req.originalUrl == '/') {  
    res.sendFile('www/index.html', {root: __dirname});
  }
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (req, res, next) {
    //console.log('THIS IS A TEST!');
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    //res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Judson', 'was here!');
    next();
  });
  
  router.get('*', function (req, res, next) {
    
    //res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    //res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.setHeader('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.setHeader('Expires', '-1');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Judson', 'was here!');
    next();
  });

  app.use(compression()); //use compression 

app.listen(port, () => {
    open('http://localhost:' + port)
})

console.log("server started on port " + port)