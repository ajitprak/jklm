/**
 * Created by warlock on 28/04/16.
 */

var queryUtils = require('../customUtils/queryUtil.js');
var defaultApiManager = require('./defaultApiManager.js');
var _ = require('lodash');
var responder = require('../../Routes/responder.js');
var async = require('async');
var cartQuery = require('../EntityApi/userProfileApi.js').getCartDetails;
var soldItemsQuery = require('../EntityApi/productApi.js').getSoldItemsForUser;

var userProfileApiManager = {};

userProfileApiManager.handler = function(queryObj,params,req,res){
    var query = _.cloneDeep(queryObj);
    queryUtils.addParamsToQuery(query,params);
    //For fetching cart details
    var queryCart = _.cloneDeep(cartQuery);
    queryUtils.addParamsToQuery(queryCart,params);
    //For fetching sold items history for user
    var querySoldItems = _.cloneDeep(soldItemsQuery,params);

    async.parallel({
            userProfile:function(callback){
                defaultApiManager.handler(query,res,callback);
            },
            cart:function(callback){
                defaultApiManager.handler(queryCart,res,callback);
            }
        },
        function(err,data){
            userProfileApiManager.responseHandler(data,res);
         });

};

userProfileApiManager.responseHandler = function(data,res){
    var result = {};
    result.cart = data.cart.hits.hits[0]._source;
    result.userProfile = data.userProfile.hits.hits[0]._source;
  responder.sendResponse(result,res);
};

module.exports = userProfileApiManager;
