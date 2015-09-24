var loginMiddleware = require('../server/Auth/login.js');
var passport = require('passport');
module.exports = function(app){
   //app.post.apply(app,['/login',loginMiddleware.loginHandler]);
   app.post('/login',passport.authenticate('local'),loginMiddleware.loginHandler);
};


