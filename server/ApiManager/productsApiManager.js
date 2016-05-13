var defaultApiManager = require('./defaultApiManager.js');
var queryUtils = require('../customUtils/queryUtil.js');
var _ = require('lodash');
var responder = require('../../Routes/responder.js');
var productsApiManager = {};

productsApiManager.handler = function (queryObj,params,req,res){
    var query = _.cloneDeep(queryObj);
    queryUtils.addParamsToQuery(query,params);
    defaultApiManager.handler(query,res,this.responseHandler);
};

productsApiManager.responseHandler = function(err,data,res){
    if(data.hits != undefined){
        var result = data.hits.hits[0]._source;
        responder.sendResponse(result,res);
    }
    else {
        var result = data.message;
        responder.sendResponse(result,res);
    }
};

module.exports = productsApiManager;


