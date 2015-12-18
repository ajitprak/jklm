var express = require('express');
var app = express();
var path = require('path');
var config = require('./server/config');
var authorization = require('./server/Auth/restAuthorization');
//var login = require('./server/Auth/login.js');
var passport = require('passport');
var passportLocal = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var User = require('./server/Auth/User.js');

//initializing dependencies for session
app.use(bodyParser.urlencoded({extended:false}));
//app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname,'/views/public')));
app.use(express.static(path.join(__dirname,'/public')));
app.use(cookieParser());
app.use(expressSession({
    secret : process.env.SESSION_SECRET || 'BharathMataKiJAI',
    resave : false,
    saveUninitialized : false
}));

//Initializing passport
app.use(passport.initialize());
app.use(passport.session());

//Tell passport how to verify out user

passport.use(new passportLocal.Strategy(User.authenticate));

//Tell passport how to serialize and deserialize user
passport.serializeUser(User.serialize); 
passport.deserializeUser(User.deserialize);

app.use(authorization);

require('./Routes/entityRouteRegistory.js')(app);
require('./Routes/authRouteRegistory.js')(app);

app.get('/secureContent',function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Some secured content');
});
app.get('/payment',function(req,res,next){
    res.sendFile(path.join(__dirname,'./views/secure/payment.html'));
});

app.listen(config.port,function(){
    console.log("Server listening to port "+config.port);
});
//console.log(app._router.stack);

