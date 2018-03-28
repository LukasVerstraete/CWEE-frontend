/**
 * Created by lukas on 9-9-2017.
 */
angular.module('CWEE.elements.cardStack',['ngRoute'])

.directive('cweeCardStack', [function() {
    return {
        restrict: 'E',
        scope: {
            cards: '=',
            position: '='
        },
        templateUrl: 'elements/cardStack/index.html',
        controller: function($scope, $window)
        {    
            var columns = '';
            for(let i = 0; i < $scope.cards.length; i++)
            {
                columns += 'auto ';
            }

            $scope.style = {
                'position' : 'absolute',
                'left' : '35%',
                'bottom' : '-40px',
                'display': 'grid',
                'grid-template-columns' : columns,
            };

            $scope.cardStyle = {
                'margin-left' : '-40px'
            };

            if($scope.position == 2)
            {
                $scope.style = {
                    'position' : 'absolute',
                    'left' : '-40px',
                    'top' : '35%',
                    'display': 'grid',
                    'grid-template-rows' : columns,
                };

                $scope.cardStyle = {
                    'margin-top' : '-50px'
                };
            }
            if($scope.position == 3)
            {
                $scope.style = {
                    'position' : 'absolute',
                    'left' : '35%',
                    'top' : '-40px',
                    'display': 'grid',
                    'grid-template-columns' : columns,
                };
            }
            if($scope.position == 4)
            {
                $scope.style = {
                    'position' : 'absolute',
                    'right' : '-40px',
                    'top' : '35%',
                    'display': 'grid',
                    'grid-template-rows' : columns,
                };

                $scope.cardStyle = {
                    'margin-top' : '-50px'
                };
            }
        }
    };
}])