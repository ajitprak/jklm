var passport = require('passport');

var login = {};
login.loginHandler = function(req,res,next){
//    var userName = req.query.username;
//    var password = req.query.password;
    passport.authenticate('local');
    next();
//    if(databaseMock[userName] != undefined && databaseMock[userName].pass == password){
//           //res.writeHead(200,{'Content-Type' : 'text/html'});
//           //res.end('Login successful for '+databaseMock[userName].fullName+'; Welcome');
//           return true;
//    }
//    else return false;
}

module.exports = login;