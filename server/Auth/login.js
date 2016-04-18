var passport = require('passport');

var login = {};
login.loginHandler = function(req,res,next){
//    var userName = req.query.username;
//    var password = req.query.password;
if(req.user != undefined){
      var userName = req.user.hits.hits[0]._source.userName;
      var fullName = req.user.hits.hits[0]._source.fullName;
    res.send({userName:userName,fullName:fullName});
}
else {
    //User will be always defined else I wont come to this block - Need to be 100% sure
}
}

login.logoutHandler = function(req,res,next){
    req.logout();
    res.redirect('/index.html');
};
module.exports = login;