var express = require('express');
var path = require('path');
var router = express.Router();
const fs = require('fs')


router.route('/100')
  .get(function (req, res) {
    var pathtosearch = path.join(__dirname, '../www/assets/images/raw/100');
    fs.readdir(pathtosearch, (err, files)=>{
        res.json(files);
    })
  }) 

  router.route('/250')
  .get(function (req, res) {
    var pathtosearch = path.join(__dirname, '../www/assets/images/raw/250');
    fs.readdir(pathtosearch, (err, files)=>{
        res.json(files);
    })
  }) 

  router.route('/500')
  .get(function (req, res) {
    var pathtosearch = path.join(__dirname, '../www/assets/images/raw/500');
    fs.readdir(pathtosearch, (err, files)=>{
        res.json(files);
    })
  }) 

  module.exports = router;