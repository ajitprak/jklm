/**
 * Created by ajitprak on 03-06-2016.
 */

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var queryUtils = require('../server/customUtils/queryUtil.js');
var defaultApiManager = require('../server/ApiManager/defaultApiManager.js');
var cartApiManager = require('../server/ApiManager/cartApiManager.js');
var responder = require('../Routes/responder.js');

chai.use(sinonChai);
var sandbox = {};

describe('Test cases for Cart Api Manager',function(){
    it('Check if queryUtils.addParamsToQuery and defaultApiManager.handler function is called properly',function(){
        var query = {};
        var params = {};
        sandbox.stub = sinon.stub(queryUtils,'addParamsToQuery',function(query,params){
            expect(sandbox.stub.called).to.equal(true);
        });
        sandbox.stub2 = sinon.stub(defaultApiManager,'handler',function(){
            expect(sandbox.stub2.called).to.equal(true);
        });
        cartApiManager.handler(query,params,{},{});
    });
    it('Check if the responder.send function is called properly on data availability',function(){
        var data = {hits:{hits:[{_source:"abcd"}]}}; //Data output format from DB
        sandbox.stub = sinon.stub(responder,'sendResponse',function(result,res){
            expect(sandbox.stub.called).to.equal(true);
            expect(result).to.equal("abcd");
        });
        cartApiManager.responseHandler(null,data,{});
    });
    it('Check if responder.send function is called on DB error with error message',function(){
        var data = {message:'DB syntax error'};
        sandbox.stub = sinon.stub(responder,'sendResponse',function(result,res){
            expect(sandbox.stub.called).to.equal(true);
            expect(result).to.equal('DB syntax error');
        });
        cartApiManager.responseHandler(null,data,{});
    });
    afterEach(function(){
        sandbox.stub.restore();
        sandbox.stub2.restore(); //Find a better way because it is called after each it, we need to call it only after the first it
    });
});
