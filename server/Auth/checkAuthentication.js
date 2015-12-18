/**
 * Created by ajitprak on 12/16/2015.
 */

var authenticationChecker = function(req,res,next){
    if(req.url == '/index.html' || req.url == '/home.html' || req.url == '/login'){
        next();
    }
    else {
        var authFlag = req.isAuthenticated();
        if(authFlag){
            next();
        }
        else {
            res.redirect('index.html');
        }
    }
};

module.exports = authenticationChecker;