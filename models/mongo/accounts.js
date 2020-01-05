/**
 * MONGODB
 * Mongo Model Account
 * 
 * @author HoangLM2
 */

        "use strict";

var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();
//var dbconfig = require(rootPath + 'configs/databases.json')[app.get('env')];
var MongoSetting = require(rootPath + 'configs/mongo_setting');
var defined = require(rootPath + 'configs/define.js');

var table = "accounts";

// Connection URL
//var url = 'mongodb://' + dbconfig.mongo.master.user + ':' + dbconfig.mongo.master.password + '@' + dbconfig.mongo.master.host + ':' + dbconfig.mongo.master.port + '/' + dbconfig.mongo.master.database;
//var optAuth = {db: {authSource: 'admin'}};
//var url = 'mongodb://' + dbconfig.mongo.master.host + ':' + dbconfig.mongo.master.port + '/' + dbconfig.mongo.master.database;
var url = MongoSetting.url_mongodb;

// var Sequelize = require("sequelize");
// var sequelize = new Sequelize(dbconfig.master.database,
// dbconfig.master.username, dbconfig.master.password, dbconfig.master);

var Accounts = module.exports = {};

/**
 * Get Info Account by Alias
 * @param <string> alias_id
 * @return <string> doc
 */
Accounts.getAccountByAlias = function (params, callback) {
//    var db = MongoClient.connect(url, optAuth, function (err, db) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);
            // Find some documents
            collection.find(params.cond).toArray(function (err, docs) {
//            collection.find({$or:[params.cond]}).toArray(function (err, docs) {
                assert.equal(err, null);
                db.close();
                callback(200, docs);
            });
        }
    });
}

/**
 * Get Info Account
 * @param <string> alias_id
 * @return <string> doc
 */
Accounts.getAccount = function (params, callback) {
//    var db = MongoClient.connect(url, optAuth, function (err, db) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);
            // Find some documents
            collection.findOne(params.cond, function (err, docs) {
                assert.equal(err, null);
                db.close();
                callback(200, docs);
            });
        }
    });
}

/**
 * Get Multi Account
 * @param <int> cardId
 * @return <string> doc
 */
Accounts.getMultiAccount = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        }
        else {
            var collection = db.collection(table);
            // Find some documents    
            //collection.find(params.cond, function (err, docs) {
            collection.find(params.cond).toArray(function (err, docs) {            
                assert.equal(err, null);
                db.close();
                callback(200, docs);
            });            
        }
    });
}

/**
 * Get Multi User Data
 * @param <int> cardId
 * @return <string> doc
 */
Accounts.getTopWinAttackOrProtect = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        }
        else {
            var collection = db.collection(table);
            // Find some documents    
            //collection.find(params.cond).toArray(function (err, docs) {   
            //params.cond = [{$sort:{trophy_score:-1}},{$limit: 5}]
            collection.aggregate(params.cond).toArray(function (err, docs) {            
                assert.equal(err, null);
                db.close();
                callback(200, docs);
            });            
        }
    });
}


/**
 * Add account info
 * @param {array} params
 * @param {func} callback
 * @returns {undefined}
 */
Accounts.addAccount = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);
            collection.insertOne(params, function (err, result) {
                assert.equal(err, null);
                //console.log("Inserted a document into the collection.");
                db.close();
                callback(200, result);
            });
        }
    });
}

/**
 * Update info account
 * @param {array} params
 * @param {func} callback
 * @returns {undefined}
 */
Accounts.updateAccount = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);    
            collection.updateOne(
                params['cond'],
                //{$set: params['set'] },
                params['set'],
                function (err, results) {
                    assert.equal(err, null);
                    //console.log("Update collection.");
                    db.close();
                    callback(200, results);
                }
            );
            
        }
    });
}

