/**
 * Created by warlock on 20/05/16.
 */

var fs = require('fs');
var elasticsearch = require('elasticsearch');
var config = require('../../server/config.js');
var _ = require('underscore');
var mapping = {};

var regEx = new RegExp('\r|\n');

var esClient = elasticsearch.Client({
    host : config.elasticsearch.url,
    log : 'info'
});

var mappingFiles = fs.readdirSync('./Mappings');
_.forEach(mappingFiles,function(fileName){
    var indexName = fileName.substr(0,fileName.indexOf('Map'));
    mapping[indexName] = require('./Mappings/'+fileName);
});

fs.readFile('./indexNames.txt','utf8',function(err,data){
    if(err)throw err;
    else {
        var indexArray = data.split("\n");
        for(i in indexArray){
            var indexName = indexArray[i].replace(regEx,'');
            start(indexName);
        }
    }
});

var createIndex = function (indexName) {
    console.log("Creating Index " + indexName);
    return esClient.indices.create({
        index: indexName
    });
};

var createMapping = function(indexName) {
    docMaps = mapping[indexName];
    if (docMaps != undefined){
        for (doc in docMaps) {
            createDocMapping(docMaps[doc]).then(function (isCreated) {
                if (isCreated.acknowledged) {
                    console.log("Created the mapping");
                }
            });
        }
    }
};

var createDocMapping = function(docMap){
    return esClient.indices.putMapping(docMap);
};

var start = function(indexName){
    createIndex(indexName).then(function(isCreated){
        if(isCreated.acknowledged) {
            console.log("Created the index " + indexName +" "+ isCreated.acknowledged);
            createMapping(indexName);
        }
        else {
            console.log("Some error occured while creating index "+indexName);
        }
    },function(error){
        console.log("Error while creating index : "+indexName+" ."+error);
    });
};
