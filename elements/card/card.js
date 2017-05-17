/**
 * Created by lukas on 18-5-2017.
 */
angular.module('CWEE.elements.card',['ngRoute'])

    .directive('cweeCard', [function() {
        return {
            restrict: 'E',
            scope: {
                card: '=',
                x: '=',
                y: '='
            },
            templateUrl: 'elements/card/index.html',
            controller: function($scope)
            {
                // converting card to correct image
                var cardName = '0' + $scope.card.value + $scope.card.suite.charAt(0);
                var imageUrl = 'art/' + cardName + '.gif';
                $scope.imageUrl = imageUrl;
                var x = $scope.x + 'px';
                var y = $scope.y + 'px';

                $scope.something = function(number)
                {
                    console.log('clicked on #' + number);
                }

                $scope.style = {
                    'position' : 'absolute',
                    'left' : x,
                    'top' : y
                };

                $scope.imageStyle = {
                    'min-width' : '50px',
                    'image-rendering' : 'pixelated'
                };
            }
        };
    }])