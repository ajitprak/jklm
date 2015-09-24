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
        if(response.hits.hits.length <= 0){
             done(null,false);
        }
        else done(null,response);
    };
    var onFailure = function(error){     
            done(error);
    };
    esCall.then(onSuccess,onFailure);
};

User.serialize = function(user,done){
    var actualData = user.hits.hits[0]._source;
    appConstants.users[actualData.userName] = actualData; //Remove after redis implementation
    done(null,actualData.userName);
};

User.deserialize = function(id,done){
    done(null,appConstants.users[id]);//Remove after redis implementation
};

module.exports = User;


