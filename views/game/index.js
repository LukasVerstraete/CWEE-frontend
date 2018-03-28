/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views.game', ['ngRoute'])
.config(['$routeProvider', function($routProvider)
{
    $routProvider
    .when('/game', {
        templateUrl: 'views/game/index.html',
        controller: 'gameController',
        reloadOnSearch: false
    })
}])

.controller('gameController', ['$scope', 'UserService', function($scope, UserService)
{
    $scope.user = UserService.getCurrentUser();

    $scope.card = {
        value : 1,
        suite : 'hearts'
    };

    $scope.cards1 = [];
    for(let i = 0; i < 13; i++)
    {
        $scope.cards1.push({
            value : 1,
            suite : 'hearts',
            hover: true
        });
    }
    $scope.cards2 = [];
    for(let i = 0; i < 13; i++)
    {
        $scope.cards2.push({
            value : 'back02',
            suite : 'back02',
            hidden: true,
            landscape: true,
            hover: false
        });
    }
    $scope.cards3 = [];
    for(let i = 0; i < 13; i++)
    {
        $scope.cards3.push({
            value : 'back01',
            suite : 'back01',
            hidden: true,
            landscape: false,
            hover: false
        });
    }
    $scope.cards4 = [];
    for(let i = 0; i < 13; i++)
    {
        $scope.cards4.push({
            value : 'back02',
            suite : 'back02',
            hidden: true,
            landscape: true,
            hover: false
        });
    }
}]);