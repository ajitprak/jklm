/**
 * Created by warlock on 04/04/16.
 */

require.config({
    
    paths:{
        angular:'./lib/angular.min',
        uiRouter:'./lib/angular-ui-router.min'
        //bootstrap:'lib/bootstrap.css'
    },
    shim: {
        'angular': {
            exports:'angular'
        },
        'uiRouter':{
            deps:['angular']
        }
    }
});

require(['app'],//'domReady!',
        function () {
            angular.bootstrap(document,['app']);
        }
);