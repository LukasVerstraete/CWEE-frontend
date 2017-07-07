/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views.login', ['ngRoute'])
.config(['$routeProvider', function($routProvider)
{
    $routProvider
    .when('/login',
    {
        templateUrl: 'views/login/index.html',
        controller: 'loginController',
        reloadOnSearch: false
    })
    .when('/login/connect',
    {
        templateUrl: 'views/login/connect.html',
        controller: 'loginConnectController',
        reloadOnSearch: false
    })
}])

.controller('loginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService)
{
    $scope.toConnect = function()
    {
        if(UserService.getCurrentUser())
            $location.path('/game');
        else
            $location.path('/login/connect');
    };
}])
.controller('loginConnectController', ['$scope', '$location', 'GameService', function($scope, $location, GameService)
{
    $scope.connect = function(form)
    {
        console.log('attempting connection...');
        GameService.connect(form.user, function()
        {
            $location.path('/game');
        });
    };
}]);