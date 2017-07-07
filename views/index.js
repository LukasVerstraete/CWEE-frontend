/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views', ['ngRoute', 'CWEE.views.game', 'CWEE.views.login'])

.config(function($routeProvider) {
    $routeProvider.otherwise("/login");
})

.run(['GameService', function(GameService) {
    //This makes sure game service is started
}])

.controller('mainCtrl', [function()
{}]);