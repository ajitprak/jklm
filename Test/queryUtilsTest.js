/**
 * Created by warlock on 14/03/16.
 */

var chai = require('chai');
var queryUtils = require('../server/customUtils/queryUtil.js');
var expect = chai.expect;

describe("Test Case for queryUtils",function(){
    it("Test if addParamsToQuery is properly adding parameters to the given query object",function(){
        var queryDefinition = {key1:"value1",key2:"?",key3:{key31:"value31",key32:"?"}}; //Checking for deepness Level1
        var params = {key2:"AddedVal",key32:"AddedVal"};
        queryUtils.addParamsToQuery(queryDefinition,params);
        expect(queryDefinition.key2).to.equal("AddedVal");
        expect(queryDefinition.key3.key32).to.equal("AddedVal");
    });
    it("Test if no alteration happens to the queryobj when params are passed as null",function(){
        var queryDefinition = {key1:"value1",key2:"?",key3:{key31:"value31",key32:"?"}};
        queryUtils.addParamsToQuery(queryDefinition,undefined);
        expect(queryDefinition.key2).to.equal("?");
        expect(queryDefinition.key3.key32).to.equal("?");
    });
});
