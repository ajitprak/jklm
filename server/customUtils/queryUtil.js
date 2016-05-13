var appConstants = require('./appConstants.js');
var _ = require('underscore');
var queryUtil = {};
var paramMap = {
    'getUserProfile' : {'user_name' : 'userName'},
    'getCartDetails' : {'user_name' : 'userName'},
    'login' : {'user_name' : 'userName','password':'password'},
    'getSoldItemsForUser': {'user_name' : 'userName'}
};
var queryName;

queryUtil.addParamsToQuery = function(queryDefinition,params){
    if(queryDefinition=="undefined" || params  == "undefined" || _.isEmpty(params))
    {return;}
    if(queryDefinition.queryName != undefined) {queryName = queryDefinition.queryName;}
    //walk through object literl.
    for ( key in queryDefinition) {
        if(typeof queryDefinition[key] == "object"){
            queryUtil.addParamsToQuery(queryDefinition[key],params);
        }
        else{
            if (queryDefinition[key] == appConstants.QUERY_PARAM_IN &&  typeof(params[paramMap[queryName][key]]) != "undefined")
            {
                //console.log("key:" + key + " value : " + parameters[key]);
                 queryDefinition[key] = params[paramMap[queryName][key]];
            }
        }
    }
};

module.exports = queryUtil;