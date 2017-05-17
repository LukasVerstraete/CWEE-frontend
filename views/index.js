/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views', ['ngRoute', 'CWEE.views.game'])

.config(function($routeProvider) {
    $routeProvider.otherwise("/game");
})

.controller('mainCtrl', [function()
{}]);