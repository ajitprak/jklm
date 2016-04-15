/**
 * Created by warlock on 30/03/16.
 */

define([
    'angular',
    'uiRouter',
    'controllers/index',
    'services/index'
    ],function(ng){
        'use strict';

        return ng.module('app',[
            'app.controllers',
            'app.services',
            'ui.router'
        ]);
    });
