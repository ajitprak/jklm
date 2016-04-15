/**
 * Created by warlock on 15/04/16.
 */

define(['./module'],function(controllers){
    'use strict';
    controllers.controller('LoginController',['$scope','HttpService','$location',function($scope,HttpService,$location){
        $scope.doLogin = function(){
            var userName = $scope.userName;
            var password = $scope.password;
            HttpService.post('/login',{userName:userName,password:password}).then(
                function(data,status,headers,config){
                    if(data != undefined && data != null){
                        $location.path('/home');
                    }
                }
            ).error();
        }
    }]);
});
