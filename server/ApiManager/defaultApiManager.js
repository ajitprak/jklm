var iServiceES = require('../iService/iServiceES');
var errorLog = require('../logHandle/errorLogHandle.js');

var defaultApiManager = {};

defaultApiManager.handler = function(queryObj,response){
    var onSuccess = function(responseData){
        response.send(responseData);
    };
    var onFailure = function(error){
        errorLog.error(error);
        response.send(error);
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


