var loginMiddleware = require('../server/Auth/login.js')
module.exports = function(app){
   //app.post.apply(app,['/login',loginMiddleware.loginHandler]);
   console.log("In login route");
   app.post('/login',loginMiddleware.loginHandler);
};


