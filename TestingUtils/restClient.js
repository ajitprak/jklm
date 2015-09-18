/* Mock client file for testing hawk */
var request = require('request');
var hawk = require('hawk');

var credentials = {
    id : 'userid',
    key : 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
    algorithm : 'sha256'
};

var requestOptions = {
    url : 'http://localhost:3000/secureContent',
    method : 'GET',
    headers : {}
};

var header = hawk.client.header('http://localhost:3000/secureContent','GET',{credentials:credentials,ext:'some-app-data'}); 
requestOptions.headers.Authorization = header.field;

request(requestOptions,function(err,response,body){
    if(err){
        console.log("Unauthorised");
    }
    else {
        console.log(body);
        //console.log("Authorized"); //response,body
    }
});