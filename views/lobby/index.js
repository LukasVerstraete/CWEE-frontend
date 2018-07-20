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

.controller('lobbyController', ['$scope', '$location', 'UserService', 'GameService', 'LobbyService', function($scope, $location, UserService, GameService, LobbyService)
{

    //setup
    $scope.user = UserService.getCurrentUser();
    getServerList();

    $scope.createGame = function(form)
    {
        GameService.createGame(form.game, function() 
        {
            getServerList();
        });
        form.game.name = '';
    };

    $scope.joinGame = function(gameName)
    {
        GameService.joinGame({name: gameName}, function(data) 
        {
            $location.path('/game');
        });
    }

    function getServerList()
    {
        LobbyService.getServerList(function(data) 
        {
            $scope.games = data;
        });
    }
}]);