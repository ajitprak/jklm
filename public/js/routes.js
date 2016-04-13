require(['./app'],function(app){
    'use strict';
    return app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');
        var allPages = [
            {
                name: 'home',
                info :{
                    url:'/home',
                    templateUrl : 'partial-home.html',
                    controller : 'HomeController'
                }
            }
        ];
        for(var page in allPages){
            if (allPages.hasOwnProperty(page)) {
                $stateProvider.state(allPages[page].name,allPages[page].info);
            }
        }
    }]);
});


