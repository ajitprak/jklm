var util = require('util');
var defaultApiManager = require('./defaultApiManager.js');
var queryUtil = require('../customUtils/queryUtil.js');

var loginApiManager = {};
//util.inherits(loginApiManager,defaultApiManager);
loginApiManager.handler = function(queryDefinition,parameters,request,response){
    queryUtil.addParamsToQuery(queryDefinition,parameters);
    defaultApiManager.handler(queryDefinition,response); 
};

module.exports = loginApiManager;


