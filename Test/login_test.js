//Decrepted Check once and delete as on 20th Sept 
var assert = require('assert');
var loginApiManager = require('../server/ApiManager/loginApiManager.js');
var sinon = require('sinon');
var queryMock = require('../TestingUtils/mockEntityApi');

//Relocate After
var req = {};
req.query = {};
var res = {};
res.send = function(result){
    console.log(result);
};

describe('Check Login ApiManager',function(){
    it.skip('Should call the Login API Managers handler',function(){
        var functionCalSpy = sinon.spy();
        loginApiManager.handler(queryMock.query,{"mockFielf1":"mockFielf1","mockFielf2":"mockFielf2"},req,res);//req,res,next
        //Testing whether the login.handler function is called
        assert.equal(functionCalSpy.called,true);
        assert.equal(functionCalSpy.calledOnce,true);
    });
//    it('Should return failure on LogIn',function(){
//      var req = {};
//        req.query = {};
//        req.query.userName = 'kaka'; //Wrong userName
//        req.query.password = 'password';
//        var res ={},next = {};
//        var isLogin = login.loginHandler(req,res,next)
//        assert.equal(isLogin,false);
//    });
});

//PASTE in LINE 7
/*var req = {};
        req.query = {};
        req.query.userName = 'ajiprak';
        req.query.password = 'password';
        var res ={},next = {};*/