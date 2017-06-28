/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.views.login', ['ngRoute'])
.config(['$routeProvider', function($routProvider)
{
    $routProvider
    .when('/login',              {
        templateUrl: 'views/login/index.html',
        controller: 'loginController',
        reloadOnSearch: false
    })
}])

.controller('loginController', ['$scope', function($scope)
{
    $scope.card = {
        value : 1,
        suite : 'hearts'
    };
}]);