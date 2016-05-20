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

fs.readFile('./Mappings/indexNames.txt','utf8',function(err,data){
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

function indexExists(indexName) {
    return esClient.indices.exists({
        index: indexName
    });
};

function start(indexName){
    indexExists(indexName).then(function(exists){
        if(exists){
            console.log(indexName,exists);
            return deleteIndex(indexName);
        }
        else {
            console.log("The index "+indexName+" does not exist");

        }
    })
};
