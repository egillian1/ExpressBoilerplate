'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


var router = express.Router();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(router);
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function(req, res) {
  res.render('index.html');
  console.log("Index rendered");
});

app.listen(5000);
