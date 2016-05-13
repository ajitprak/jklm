var iServiceES = require('../iService/iServiceES');
var errorLog = require('../logHandle/errorLogHandle.js');

var defaultApiManager = {};

defaultApiManager.handler = function(queryObj,response,callback){
    var queryForLog = (typeof queryObj == 'object')?JSON.stringify(queryObj):queryObj;
    errorLog.debug("ES Query : "+queryForLog);
    var onSuccess = function(responseData){
        callback(null,responseData,response);
        errorLog.debug("Response from ES :"+responseData);
    };
    var onFailure = function(error){
        errorLog.error(error);
        callback(null,error,response);
    };
    var esPromise = iServiceES.executeQuery(queryObj);
    esPromise.then(onSuccess,onFailure);

    /* test-code */
    //use grunt-strip-code to remove code similar to below which are ment only for testing
    this._testOnlyOnSuccess = onSuccess;
    this._testOnlyOnFailure = onFailure;
    /* end-test-code */
};

module.exports = defaultApiManager;


