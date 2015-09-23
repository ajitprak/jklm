var User = {};
var entityApi = require('../EntityApi/loginApi.js');
var queryUtil = require('../customUtils/queryUtil.js');
var iServiceES = require('../iService/iServiceES.js');
var appConstants = require('../customUtils/appConstants.js'); //Remove after redis implementation

User.authenticate = function (username,password,done){
    var query = entityApi.login;
    var params = {userName:username,password:password};
    queryUtil.addParamsToQuery(query,params);
    var esCall = iServiceES.executeQuery(query);
    var onSuccess = function(response){
        done(null,response);
    };
    var onFailure = function(error){
        if(error){
            done(null,null);
        }
        else {
            done(error);
        }
    };
    esCall.then(onSuccess,onFailure);
};

User.serialize = function(user,done){
    appConstants.users[user.id] = user; //Remove after redis implementation
    done(null,user.id);
};

User.deserialize = function(id,done){
    done(null,appConstants.users[user.id]);//Remove after redis implementation
};

module.exports = User;


