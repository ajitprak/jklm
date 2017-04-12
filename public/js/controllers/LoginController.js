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

        $scope.onInit = function(){

            var log = function(a){
                $(".info").html( $(".info").html() + "<br/>" + a );
            };

            var toggleClick = function(){

                var divObj = $(this).next();
                var nstyle = divObj.css("display");

                if(nstyle == "none"){
                    divObj.slideDown(false,function(){
                        $("html").bind("click",function(){
                            divObj.slideUp();
                            $("html").unbind("click");
                        });
                    });
                }
            };

            $(".clickme").click(toggleClick);


            //jquery document ready -- Raj file
            function t(t) {
                e(t).bind("click", function (t) {
                    t.preventDefault();
                    e(this).parent().fadeOut()
                })
            }
            e(".dropdown-toggle").click(function () {
                var t = e(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
                e(".button-dropdown .dropdown-menu").hide();
                e(".button-dropdown .dropdown-toggle").removeClass("active");
                if (t) {
                    e(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
                }
            });
            e(document).bind("click", function (t) {
                var n = e(t.target);
                if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-menu").hide();
            });
            e(document).bind("click", function (t) {
                var n = e(t.target);
                if (!n.parents().hasClass("button-dropdown")) e(".button-dropdown .dropdown-toggle").removeClass("active");
            })

        }
    }]);
});
