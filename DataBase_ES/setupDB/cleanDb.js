/**
 * Created by warlock on 20/05/16.
 */

var fs = require('fs');
var elasticsearch = require('elasticsearch');
var config = require('../../server/config.js');

var esClient = elasticsearch.Client({
    host: config.elasticsearch.url,
    log: 'info'
});

fs.readFile('./indexNames.txt','utf8',function(err,data){
    if(err)throw err;
    else {
        var indexArray = data.split("\n");
        for(i in indexArray){
           start(indexArray[i]);
        }
    }
});

function deleteIndex(indexName) {
    return esClient.indices.delete({
        index: indexName
    });
};

function deleteIndexWrapper(indexName){
    console.log("Deleting Index " + indexName);
    deleteIndex(indexName).then(function(res){
        console.log("Index Deleted " + indexName);
    },function(error){
        console.log("Some Error occured : " + error.message);
    });
};

function indexExists(indexName) {
    return esClient.indices.exists({
        index: indexName
    });
};

function start(indexName){
    indexExists(indexName).then(function(exists){
        if(exists){
            return deleteIndexWrapper(indexName);
        }
        else {
            console.log("The index "+indexName+" does not exist");

        }
    },function(error){
        console.log("Error occured " + error.message);
    });
};
