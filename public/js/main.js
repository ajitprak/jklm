/**
 * Created by warlock on 04/04/16.
 */

require.config({
    
    paths:{
        'domReady': '../lib/requirejs-domready/domReady',
        'angular':'../lib/angular',
        'uiRouter':'../lib/angular-ui-router.min'
        //bootstrap:'lib/bootstrap.css'
    },
    shim: {
        'angular': {
            exports:'angular'
        },
        'uiRouter':{
            deps:['angular']
        }
    },
    deps: ['./bootstrap']
});
