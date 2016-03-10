var elasticsearch = require('elasticsearch');
var config = require('../config.js');

var esClient = new elasticsearch.Client({
    host : config.elasticsearch.url,
    timeout : 30000
});

var executeQuery = function(queryObj){
    console.log(esClient);
    var promise = esClient[queryObj.esOperation](queryObj.parameters);
    return promise;
};

var iServiceES = function(){
    return {
        executeQuery:executeQuery
    };
};

module.exports = iServiceES();

