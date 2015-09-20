var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var queryUtil = require('../server/customUtils/queryUtil.js');
var loginApiManager = require('../server/ApiManager/loginApiManager.js');
var defaultApiManager = require('../server/ApiManager/defaultApiManager.js');

var sandbox = {};
chai.use(sinonChai);

describe("Login Api Manager Testing",function(){
    it("Check if the addParamsToQuery and default.handler is called", function(){
        sandbox.addParamsToQueryStub = sinon.stub(queryUtil,"addParamsToQuery",function(query,params){
            expect(sandbox.addParamsToQueryStub.called).to.equal(true);
        });
        sandbox.defaultHandlerStub = sinon.stub(defaultApiManager,"handler",function(){
            expect(sandbox.defaultHandlerStub.called).to.equal(true);
        });
        loginApiManager.handler("query","params","req","res");
    });
    after(function(){
        sandbox.addParamsToQueryStub.restore();
        sandbox.defaultHandlerStub.restore();
    });
});


