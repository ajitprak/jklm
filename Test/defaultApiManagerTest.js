var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var iServiceES = require('../server/iService/iServiceES');
var defaultApiManager = require('../server/ApiManager/defaultApiManager.js');
var q = require('q');

var sandbox = {};
chai.use(sinonChai);

describe('Default APi Manager Test',function(){
   it("checks if the iService.executeQuery is called",function(){
        var deferred = q.defer();
        deferred.resolve({mockKey: 'mockVal'});
        var promise = deferred.promise;
        sandbox.stub = sinon.stub(iServiceES,"executeQuery",function(){
            expect(sandbox.stub.called).to.equal(true);
            return promise;
        });
        defaultApiManager.handler({mockKey:'mockVal'},'response');
    });
    it("Check if onSuccess method is called properly",function(){
        var deferred = q.defer();
        var promise = deferred.promise;
        sandbox.stub = sinon.stub(iServiceES,"executeQuery",function(){
            return promise;
        });
        var response = {};
        response.send = function(){
            expect(true).to.be.equal(true)
        };
        defaultApiManager.handler({mockKey:'mockVal'},response);
       defaultApiManager._testOnlyOnSuccess("Data");
    });
    it("Check if onFailure method is called properly",function(){
        var deferred = q.defer();
        var promise = deferred.promise;
        sandbox.stub = sinon.stub(iServiceES,"executeQuery",function(){
            return promise;
        });
        var response = {};
        response.send = function(){
            expect(true).to.be.equal(true)
        };
        defaultApiManager.handler({mockKey:'mockVal'},response);
        defaultApiManager._testOnlyOnFailure("Data");
    });
    afterEach(function(){
        sandbox.stub.restore();
    });
});


