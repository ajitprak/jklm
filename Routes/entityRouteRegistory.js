var fs = require('fs');
var _ = require('underscore');

var entityApis = {};
var apiManagers = {};
var entityApiFiles = fs.readdirSync('./server/EntityApi');
_.each(entityApiFiles,function(entityApiFileName){
    var apiName = entityApiFileName.substring(0,entityApiFileName.indexOf('.'));
    entityApis[apiName] = require('../server/EntityApi/'+entityApiFileName);
});

var apiManagerFiles = fs.readdirSync('./server/ApiManager');
_.each(apiManagerFiles,function(apiManagerFileName){
    var apiName = apiManagerFileName.substring(0,apiManagerFileName.indexOf('Api'));
    apiManagers[apiName] = require('../server/ApiManager/'+apiManagerFileName);
});


module.exports = function(app){
    var commonHandler = function(req,res){
            var params = req.query;
            var operation = req.query.operation;
            var queryObject = entityApis[req.query.entity+'Api'][operation];
            apiManagers[req.query.entity].handler(queryObject,params,req,res);
            //each handler must be a promise and it must be returned here with the data from db and in the then we write the logic to communicate with the client 
        };
        _.each(entityApis,function(entityApiAll){
            _.each(entityApiAll,function(entityApi){
                if(entityApi.operation == 'POST'){
                    //console.log("API Path "+entityApi.apiPath);
                    app.post.apply(app,[entityApi.apiPath,commonHandler]);
                }
    //        else if(entityApi.operation == 'GET'){
    //            app.get.apply(entityApi.apiPath,commonHandler);
    //        }
        });
    });
};