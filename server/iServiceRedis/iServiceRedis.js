//Session handling done using redis store, we can use this for any other crud operations in Redis
var redis = require('redis');
var config = require('../config.js');

var rClient = redis.createClient(config.redis.port,config.redis.host);

rClient.on('connect',function(){
	console.log("Connected to Redis");
});

var iServiceRedis = {};

iServiceRedis.post = function(obj){

};


