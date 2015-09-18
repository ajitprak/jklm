var databaseMock = require('../../Test/userSample.js');

var login = {};
login.loginHandler = function(req,res,next){
    var userName = req.query.userName;
    var password = req.query.password;
    if(databaseMock[userName] != undefined && databaseMock[userName].pass == password){
           //res.writeHead(200,{'Content-Type' : 'text/html'});
           //res.end('Login successful for '+databaseMock[userName].fullName+'; Welcome');
           return true;
    }
    else return false;
}

module.exports = login;