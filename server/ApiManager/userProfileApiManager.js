/**
 * Created by warlock on 28/04/16.
 */

var queryUtils = require('../customUtils/queryUtil.js');
var defaultApiManager = require('./defaultApiManager.js');
var _ = require('lodash');

var userProfileApiManager = {};

userProfileApiManager.handler = function(queryObj,params,req,res){
    var query = _.cloneDeep(queryObj);
    queryUtils.addParamsToQuery(query,params);
    defaultApiManager.handler(query,res);
};

module.exports = userProfileApiManager;
