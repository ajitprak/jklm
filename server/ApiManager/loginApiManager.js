var util = require('util');
var defaultApiManager = require('./defaultApiManager.js');
var queryUtil = require('../customUtils/queryUtil.js');
var _ = require('lodash');

var loginApiManager = {};
//util.inherits(loginApiManager,defaultApiManager);
loginApiManager.handler = function(queryDefinition,parameters,request,response){
    var query = _.cloneDeep(queryDefinition)
    queryUtil.addParamsToQuery(query,parameters);
    defaultApiManager.handler(query,response); 
};

module.exports = loginApiManager;


