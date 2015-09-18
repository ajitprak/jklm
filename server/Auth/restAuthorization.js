var hawk = require('hawk');

var credentialsFunction = function (id,callback){
    var credentials = {
        key : 'werxhqb98rpaxn39848xrunpaw3489ruxnpa98w4rxn',
        algorithm : 'sha256',
        user : 'restClient'
    };
    callback(null,credentials);
};

var isRestClient = function(req){
    var userAgent = req.headers['user-agent'];
    var isRestClient = true;
    var browserAgent = ['Gecko','AppleWebKit','Chrome','Mozilla','Opera','Trident'];
    if(userAgent != undefined || userAgent != null){
        for(browser in browserAgent){
            if(userAgent.indexOf(browser) == -1){}
            else isRestClient = false;
        };
    }
    return isRestClient;
};

var restAuthorization = function(req,res,next){
    if(isRestClient(req)){ //For checking whether request is form browser or rest-client
        hawk.server.authenticate(req,credentialsFunction,{},function(err,credentials,artifacts){
            if(err){
                console.log("This client not authorised");
                res.send("UnAuthorised Access");
                next(err);
            }
            else {
                //console.dir(artifacts);
                next();
            }
        });
    }
    else next(); //Need to check for user authenticity
};

module.exports = restAuthorization;