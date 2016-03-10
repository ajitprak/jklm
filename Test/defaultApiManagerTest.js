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
        sandbox.stub = sinon.stub(iServiceES,"executeQuery",function(queryObj){
            //expect(onSuccess).to.be.a('function');
            expect(sandbox.stub.called).to.equal(true);
            return promise;
        });
        defaultApiManager.handler({mockKey:'mockVal'},'response');
    });
    after(function(){
        sandbox.stub.restore();
    });
});


