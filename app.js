/**
 * Module dependencies.
 * 
 * This is the main file for Node.js
 */
//This is my express framework
var express = require('express');
//this is to handle the http request
var  http = require('http');
//This is to deal with path
var  path = require('path');
var bodyParser = require('body-parser');
//instantiating the express framework
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//To take input from the client
//app.use(express.bodyParser());
//#######################
//This means your data can come from client  in the request body as html form data
app.use(bodyParser.urlencoded({extended: false}));
//to read json data from request body 
app.use(express.json());
var functionToConnDb=require('./mongo-connect');
//call the function to connect with database
functionToConnDb();

//To allow access of this data from different domain
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
  res.header("Access-Control-Allow-Credentials", "*");
  //res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "x-access-token");
  next();
});	

///This is imported here
//profile-mapping file contains function definition 
var endPoint = express.Router();

var productMapping=require('./rest-api/mappings/product-mapping');
productMapping(endPoint); //here we are calling function

//here endpoint will be prefix with  v1
app.use('/v1', endPoint);

///#####################
//__dirname
app.use(express.static(path.join(__dirname, 'public')));
//Creating http server on port number 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
  console.log("_@_@_@_@_Yeap my server is ready to handle to http request !!!!!!!!!!!!!!!!!!!!!!!");
});
