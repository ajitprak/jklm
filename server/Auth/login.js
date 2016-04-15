var passport = require('passport');

var login = {};
login.loginHandler = function(req,res,next){
//    var userName = req.query.username;
//    var password = req.query.password;
    res.send(res);
}

login.logoutHandler = function(req,res,next){
    req.logout();
    res.redirect('/index.html');
};
module.exports = login;