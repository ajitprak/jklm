/**
 * Created by warlock on 20/05/16.
 */

var elasticsearch = require('elasticsearch');
var config = require('../../server/config.js');
var _ = require('underscore');
var data = {};
data['user'] = require('./DummyData/userData.js');
data['cart'] = require('./DummyData/cartData.js');
data['products'] = require('./DummyData/productsData.js');


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