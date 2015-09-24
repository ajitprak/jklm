var passport = require('passport');

var login = {};
login.loginHandler = function(req,res,next){
//    var userName = req.query.username;
//    var password = req.query.password;
    res.redirect('/home.html');
}

module.exports = login;