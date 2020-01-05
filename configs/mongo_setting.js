/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var app = express();

var dbconfig = require(rootPath + 'configs/databases.json')[app.get('env')];
// Connection URL
var url_mongodb = 'mongodb://' + dbconfig.mongo.master.user + ':' + dbconfig.mongo.master.password + '@' + dbconfig.mongo.master.host + ':' + dbconfig.mongo.master.port + '/' + dbconfig.mongo.master.database;
//var url_mongodb = 'mongodb://' + dbconfig.mongo.master.host + ':' + dbconfig.mongo.master.port + '/' + dbconfig.mongo.master.database;


var MongoSetting = {
    url_mongodb: url_mongodb
}

//export 
module.exports = MongoSetting;


