/**
 * Created by warlock on 11/03/16.
 */
var chai = require('chai');
var expect = chai.expect;
var iServiceES = require('../server/iService/iServiceES.js');

describe('iServiceES Test',function(){
    it.skip('Is iService.executeQuery returning a promise',function(){ //Test once with it.only coz it will try to access db everytime we test
        var returnVal = iServiceES.executeQuery({esOperation:'search',parameters:{}});
        expect(returnVal.then).to.exist;
        expect(returnVal.then).to.be.a('function');
    });
});
