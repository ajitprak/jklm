var express = require('express');
var app = express();
var config = require('./server/config');
var restAuthorization = require('./server/Auth/restAuthorization');
//var login = require('./server/Auth/login.js');

app.use(restAuthorization);
app.get('/',function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Welcome to Hawk Security Services');
});

app.get('/secureContent',function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Some secured content');
});

/*app.get('/login',function(req,res,next){
    login.loginHandler(req,res,next);
});*/

//var homeHandler = ;
require('./Routes/entityRouteRegistory.js')(app);

app.listen(config.port,function(){
    console.log("Server listening to port "+config.port);
});
//console.log(app._router.stack);

