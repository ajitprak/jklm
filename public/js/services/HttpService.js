/**
 * Created by warlock on 15/04/16.
 */
define(['./module'],function(services){
    'use strict';
    services.service('HttpService',['$http','$q',function($http,$q){
        this.get = function(url,callback){
            var request = $http.get(url);
            return request;
        };

        this.post = function(url,params){
            var request = $http.post(url,params);
            return request;
        };

        this.put = function(url,params){
            var request = $http.put(url,params);
            return request;
        };
        this.delete = function(url){
            var request = $http.delete(url);
            return request;
        };
    }]);
});
