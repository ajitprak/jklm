/**
 * Created by ajitprak on 03-06-2016.
 */

var bcrypt = require('bcryptjs');
var errorLogger = require('../logHandle/errorLogHandle.js');

var bcryptUtil = {};

bcryptUtil.encrypt = function (password,callback) {
    bcrypt.genSalt(10,function(err, salt){
        bcrypt.hash(password,salt,function(err, hash){
            if(err == undefined){
                callback(hash);
            }
            else {
                errorLogger.error("Error occured while encrypting password, ERROR : " + err);
            }
        });
    });
};

module.exports = bcryptUtil;