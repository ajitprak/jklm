var Logger = require('bunyan');
var config = require('../config.js');

var log = new Logger({
    name:'ErrorLog',
    streams:[{
        level : config.logs.errorLogs.level,
        path : config.logs.basePath + config.logs.path, //Change the key as stream (from path) to do stdout stream or email stream
        period : 'weekly', // Log rotation happens once in a week
        count : 3 // Log rotation keeps three backup files i.e 3 week data
    }]
});

module.exports = log;