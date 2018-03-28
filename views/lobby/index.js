/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views.lobby', ['ngRoute'])
.config(['$routeProvider', function($routProvider)
{
    $routProvider
    .when('/lobby', {
        templateUrl: 'views/lobby/index.html',
        controller: 'lobbyController',
        reloadOnSearch: false
    })
}])

.controller('gameController', ['$scope', 'UserService', 'GameService', function($scope, UserService, GameService)
{
    $scope.user = UserService.getCurrentUser();
    $scope.games = GameService.getCurrentGames();

}]);