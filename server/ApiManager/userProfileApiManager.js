/**
 * Created by warlock on 28/04/16.
 */

var queryUtils = require('../customUtils/queryUtil.js');
var defaultApiManager = require('./defaultApiManager.js');
var _ = require('lodash');
var responder = require('../../Routes/responder.js');

var userProfileApiManager = {};

userProfileApiManager.handler = function(queryObj,params,req,res){
    var query = _.cloneDeep(queryObj);
    queryUtils.addParamsToQuery(query,params);
    defaultApiManager.handler(query,res,this.responseHandler);
};

userProfileApiManager.responseHandler = function(data,res){
  //var result = data[0];
  //result.cartDetails = data[1];
  router.sendResponse(data,res);
};

module.exports = userProfileApiManager;
