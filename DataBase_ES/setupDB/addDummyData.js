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
    var indexName = fileName.substr(0,fileName.indexOf('.js'));
    data[indexName] = require('./DummyData/'+fileName);
});


var esClient = elasticsearch.Client({
   'host' : config.elasticsearch.url,
    'log' : 'info'
});

var addData = function(dataObj){
    return esClient.index(dataObj);
};

var start = function(){
    _.forEach(data,function(eachIndex){
        _.forEach(eachIndex,function(eachType){
            _.forEach(eachType,function(eachData){
                addData(eachData).then(function(res){
                        console.log("Data Added");
                    },
                    function(error){
                        console.log("Error occured "+error.message);
                    });
            });
        });
    });

};

start();