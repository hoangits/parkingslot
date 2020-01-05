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

var table = "authenticates";

// Connection URL
//var url = 'mongodb://' + dbconfig.mongo.master.user + ':' + dbconfig.mongo.master.password + '@' + dbconfig.mongo.master.host + ':' + dbconfig.mongo.master.port + '/' + dbconfig.mongo.master.database;
//var url = 'mongodb://' + dbconfig.mongo.master.host + ':' + dbconfig.mongo.master.port + '/' + dbconfig.mongo.master.database;
var url = MongoSetting.url_mongodb;

// var Sequelize = require("sequelize");
// var sequelize = new Sequelize(dbconfig.master.database,
// dbconfig.master.username, dbconfig.master.password, dbconfig.master);

var Auth = module.exports = {};

/**
 * Get Info Account by Alias
 * @param <string> alias_id
 * @return <string> doc
 */
Auth.getToken = function (params, callback) {
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
 * Add account info
 * @param {array} params
 * @param {string} callback
 * @returns {undefined}
 */
Auth.addToken = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);
            collection.insertOne(params, function (err, result) {
                assert.equal(err, null);
                //console.log("Inserted addToken.");
                db.close();
                callback(200, {});
            });
        }
    });
}

/**
 * Update status token
 * @param {string} params
 * @param {func} callback
 * @returns {undefined}
 */
Auth.updateToken = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);
            collection.updateOne(
                params['cond'],
                {$set: params['set'] },
                function (err, results) {
                    assert.equal(err, null);
                    //console.log("Update status token.");
                    db.close();
                    callback(200, results);
                }
            );
        }
    });
}

/**
 * Delete token
 * @param {string} params
 * @param {func} callback
 * @returns {undefined}
 */
Auth.deleteToken = function (params, callback) {
    var db = MongoClient.connect(url, function (err, db) {
        if (err) {
            var errLogger = rootLogger.getLogger("error");
            errLogger.info(err);
            callback(999, "Error database");
        } else {
            var collection = db.collection(table);
            collection.deleteMany(
                params['cond'],
                function (err, results) {
                    assert.equal(err, null);
                    //console.log("Delete old token of user");
                    db.close();
                    callback(200, results);
                }
            );
        }
    });
}