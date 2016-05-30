/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var config = {};

config.port = 3000;

//ElasticSearch config Info
config.elasticsearch = {};
config.elasticsearch.url = "http://localhost:9200";

//Redis config Info
config.redis = {};
config.redis.port = 6379;
config.redis.host = "127.0.0.1";

//Logging config
config.logs = {};
config.logs.errorLogs = {};
config.logs.errorLogs.level = "error";
config.logs.basePath = __dirname
config.logs.path = '/logs/errorLogger.log'

module.exports = config;


