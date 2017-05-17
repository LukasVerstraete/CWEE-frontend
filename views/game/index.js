/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views.game', ['ngRoute'])
.config(['$routeProvider', function($routProvider)
{
    $routProvider
    .when('/game',              {
        templateUrl: 'views/game/index.html',
        controller: 'gameController',
        reloadOnSearch: false
    })
}])

.controller('gameController', ['$scope', function($scope)
{
    $scope.card = {
        value : 1,
        suite : 'hearts'
    };
}]);