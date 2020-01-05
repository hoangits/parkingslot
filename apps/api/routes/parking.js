/**
 * ROOM Router
 * 
 * @author HoangLM2
 */

var express = require('express');
var router = express.Router();

var ParkingController = require(rootPath + 'apps/api/controllers/ParkingController');

router.get('/process', ParkingController.processParking);

module.exports = router;