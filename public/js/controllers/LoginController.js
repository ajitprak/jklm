/**
 * Created by warlock on 15/04/16.
 */

define(['./module'],function(controllers){
    'use strict';
    controllers.controller('LoginController',['$scope','HttpService','$location',function($scope,HttpService,$location){
        $scope.doLogin = function(){
            var userName = $scope.userName;
            var password = $scope.password;
            HttpService.post('/login',{"username":userName,"password":password}).then(
                function(response){
                    if(response.data != undefined && response.data != null){
                        $location.path('/home');
                    }
                },function(response){
                    console.log("Error Occured during Login "+response.data); //Change to pop up or toaster
                    $location.path('/login');
                });
        }
    }]);
});
