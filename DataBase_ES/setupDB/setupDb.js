/**
 * Created by warlock on 20/05/16.
 */

var fs = require('fs');
var elasticsearch = require('elasticsearch');
var config = require('../../server/config.js');
var mapping = {};
mapping['user'] = require('./Mappings/userMappings.js');
mapping['cart'] = require('./Mappings/cartMappings.js');
mapping['products'] = require('./Mappings/productsMappings.js');

var regEx = new RegExp('\r|\n');

var esClient = elasticsearch.Client({
    host : config.elasticsearch.url,
    log : 'info'
});

fs.readFile('./Mappings/indexNames.txt','utf8',function(err,data){
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
