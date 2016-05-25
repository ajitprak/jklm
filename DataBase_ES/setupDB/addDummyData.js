/**
 * Created by warlock on 20/05/16.
 */

var elasticsearch = require('elasticsearch');
var fs = require('fs');
var config = require('../../server/config.js');
var _ = require('underscore');
var data = {};

var dataFiles = fs.readdirSync('./DummyData');
_.forEach(dataFiles,function(fileName){
    var indexName = fileName.substr(0,fileName.indexOf('Data'));
    console.log("Index Name : "+ indexName);
    data[indexName] = require('./DummyData/'+fileName);
});


var esClient = elasticsearch.Client({
   'host' : config.elasticsearch.url,
    'log' : 'info'
});

var addData = function(dataObj){
    return esClient.index(dataObj);
};

var addDataWrapper = function(dataObj){
    console.log("Adding data for the type : " + dataObj.type);
    addData(dataObj).then(function(res){
            console.log("Data Added for the type : " + dataObj.type);
        },
        function(error){
            console.log("Error occured while adding data for type : " + dataObj.type + " ,Error msg : " + error.message);
        });
};

var start = function(){
    _.forEach(data,function(eachIndex){
        _.forEach(eachIndex,function(eachType){
            _.forEach(eachType,function(eachData){
                addDataWrapper(eachData);
            });
        });
    });

};

start();