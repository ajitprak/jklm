var User = {};
var entityApi = require('../EntityApi/loginApi.js');
var queryUtil = require('../customUtils/queryUtil.js');
var iServiceES = require('../iService/iServiceES.js');
var appConstants = require('../customUtils/appConstants.js'); //Remove after redis implementation
var _ = require('lodash');
var logger = require('../logHandle/errorLogHandle.js');
var mail = require('../Mail/mailSender.js');

User.authenticate = function (username,password,done){
    var query = _.cloneDeep(entityApi.login); // '_' is lodash here
    var params = {userName:username,password:password};
    queryUtil.addParamsToQuery(query,params);
    var esCall = iServiceES.executeQuery(query);
    var queryForLog = (typeof query == 'object')?JSON.stringify(query):query;
    logger.debug("ES Query : "+queryForLog);

    var onSuccess = function(response){
        if(response.hits.hits.length <= 0){
             done(null,false);
        }
        else done(null,response);
        response = (typeof response == 'object')?JSON.stringify(response):response;
        logger.debug("Response from ES :"+response);
    };
    var onFailure = function(error){
            logger.error("DB error :"+error.message);
            done("DB error :"+error.message);
            /*mail.send("DB error :"+error.message);/*Uncomment here to send mail on error*/
    };
    esCall.then(onSuccess,onFailure);
};

User.serialize = function(user,done){
    var actualData = user.hits.hits[0]._source;
    //actualData.userName = actualData.user_name;
    //delete actualData.user_name;
    
    /*appConstants.users[actualData.user_name] = actualData; //Remove after redis implementation
    /done(null,actualData.user_name);*/
    
    done(null,{
    	name : actualData.user_name,
    	fullName : actualData.full_name
    });
};

User.deserialize = function(user,done){
    //done(null,appConstants.users[user]);//Remove after redis implementation
	done(null,user);
};

module.exports = User;


