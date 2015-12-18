var express = require('express');
var app = express();
var path = require('path');
var config = require('./server/config');
var restAuthorization = require('./server/Auth/restAuthorization');
checkAuthentication = require('./server/Auth/checkAuthentication');//combine with rest Authorisation
//var login = require('./server/Auth/login.js');
var passport = require('passport');
var passportLocal = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var User = require('./server/Auth/User.js');

//Move to routes later
var index = function(req, res){
    if(req.isAuthenticated()){
        console.log("Authenticated");
    }
    if(req.user) {
        res.cookie('user', JSON.stringify({
            'username': req.user.username,
            'role': req.user.role,
            'fullname': req.user.fullname,
            'uid': req.user.id
        }));
    }
    res.render('index');
};

//initializing dependencies for session
app.use(bodyParser.urlencoded({extended:false}));
//app.set('views',__dirname+'/views');
app.use(express.static(path.join(__dirname,'/views')));
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

app.use(restAuthorization);
app.use(checkAuthentication);//combine with rest Authorisation

require('./Routes/entityRouteRegistory.js')(app);
require('./Routes/authRouteRegistory.js')(app);

/*app.get('/',function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Welcome to Hawk Security Services');
});*/
//app.get('/',index);

app.get('/secureContent',function(req,res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.end('Some secured content');
});
app.get('/payment',function(req,res,next){
    res.sendFile(path.join(__dirname,'./views/payment.html'));
});
//var homeHandler = ;

app.listen(config.port,function(){
    console.log("Server listening to port "+config.port);
});
//console.log(app._router.stack);

