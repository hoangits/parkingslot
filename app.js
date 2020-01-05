#!/usr/bin/env node

//#####################
//#     EXTERNAL APP
//#####################
var http = require('http');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var logger = require('morgan');
//var methodOverride = require('method-override');

// set GLOBAL rootPath
global.rootPath = __dirname + '/';

var app = express();

//all environments
app.set('port', process.env.PORT || 3000); //9000


if (app.get('env') == "development") {
    var fs = require('fs');
    try {        
        var rfs = require('rotating-file-stream');

        var shortID = require('shortid');
        var uuid = shortID.generate();
        logger.token('id', function getId(req) {
            return req.id
        })
        app.use(assignId);

        function assignId(req, res, next) {
            req.id = uuid;
            next();
        }
        //log dir
        var logDirectory = path.join(__dirname, 'logs');
        // ensure log directory exists
        fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
        // create a rotating write stream
        var accessLogStream = rfs('access.log', {
            interval: '1d', // rotate daily
            path: logDirectory
        })                   
        // setup the logger
        //app.use(logger('short', {stream: accessLogStream}));    
        var format = ":date[iso] - :remote-addr :method :url :status - :res[content-length] :response-time ms";
        app.use(logger(format, {stream: accessLogStream}));
        //app.use(logger('dev'));

        // only use in development
        app.use(errorhandler({log: errorNotification}));
        function errorNotification(err, str, req) {
            var title = 'Error in ' + req.method + ' ' + req.url
            var fileTrackErr = __dirname + '/' + "logs/errorhandler.txt";
            var fsWriter = fs.createWriteStream(fileTrackErr);
            var dataErr = {
                title: title,
                message: str,
                err: err
            }
            fsWriter.write(JSON.stringify(dataErr));
        }
        //end error stack traces

    } catch (err) {
        var fileTrackErr = __dirname + '/' + "logs/track_err.txt";
        var fsWriter = fs.createWriteStream(fileTrackErr);
        var dataErr = {
            data: err
        }
        fsWriter.write(JSON.stringify(dataErr));
    }
}

//parse json & urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//handle error
// app.use(errorHandler(true));


// /////////////
// Route
// /////////////
var parkingRoutes = require('./apps/api/routes/parking');


///////////////////////////////
//  Render Response View
// ///////////////////////////////
app.use('/parking', parkingRoutes);

app.use(function (err, req, res, next) {
//    console.error(err.stack);
    // var errLogger = rootLogger.getLogger("error");
    // errLogger.info(err);
    //response error
    res.status(500).send('Internal Server Error!')
});

//console.log('Environment: ' + app.get('env'));
var server = http.createServer(app);
server.listen(app.get('port'), function () {
    if ("development" == app.get('env')) {
        console.log('Express server listening on port ' + app.get('port'));
    }
});
