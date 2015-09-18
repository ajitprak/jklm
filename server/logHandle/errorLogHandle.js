var Logger = require('bunyan');
var config = require('../config.js');

var log = new Logger({
    name:'ErrorLog',
    streams:[{
        level : config.logs.errorLogs.level,
        path : config.logs.basePath + config.logs.path
    }]
});

module.exports = log;