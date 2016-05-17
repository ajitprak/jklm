/**
 * Created by warlock on 14/05/16.
 */

var defaultApiManager = require('./defaultApiManager.js');
var _ = require('lodash');
var queryUtils = require('../customUtils/queryUtil.js');
var responder = require('../../Routes/responder.js');

var cartApiManager = {};

cartApiManager.handler = function(queryObj,params,req,res){
    var query = _.cloneDeep(queryObj);
    queryUtils.addParamsToQuery(query,params);
    defaultApiManager.handler(query,res,this.responseHandler);
};

cartApiManager.responseHandler = function(err,data,res){
    var result = {};
    if(data.hits != undefined) {
        result = data.hits.hits[0]._source;
        responder.sendResponse(result,res);
    }
    else {
        result = data.message;
        responder.sendResponse(result,res);
    }
};

module.exports = cartApiManager;