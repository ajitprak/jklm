/**
 * Created by warlock on 15/04/16.
 */
define(['./module'],function(services){
    'use strict';
    services.service('HttpService',['$http','$q',function($http,$q){
        this.get = function(url,callback){
            var request = $http({
                url:url,
                method:'GET'
            });
            return request;
        };

        this.post = function(url,params){
            var request = $http({
                url:url,
                method:'POST',
                params:params
            });
            return request;
        };

        this.update = function(url,params){
            var request = $http({
                url:url,
                method:'UPDATE',
                params:params
            });

            return request;
        };
        this.delete = function(url,params){
            var request = $http({
                url:url,
                method:'DELETE',
                params:params
            });
            return request;
        };
    }]);
});
