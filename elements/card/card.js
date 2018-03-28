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
                var cardName;
                if(!$scope.card.hidden)
                {
                    if($scope.card.value < 10)
                        cardName = '0' + $scope.card.value + $scope.card.suite.charAt(0);
                    else
                        cardName = $scope.card.value + $scope.card.suite.charAt(0);
                }
                else
                {
                    cardName = $scope.card.value;
                }
                var imageUrl = 'art/' + cardName + '.gif';
                $scope.imageUrl = imageUrl;
                var x = $scope.x + 'px';
                var y = $scope.y + 'px';

                $scope.something = function(number)
                {
                    console.log('clicked on #' + number);
                }

                $scope.style = {
                    // 'position' : 'absolute',
                    // 'left' : x,
                    // 'top' : y,
                    'outline' : 'none'
                };

                if($scope.card.hover)
                    $scope.hoverClass = 'card-rise';
                $scope.imageStyle = {
                    'min-width' : '70px',
                    'image-rendering' : 'pixelated'
                };
                if($scope.card.landscape)
                {
                    if($scope.card.hover)
                        $scope.hoverClass = 'card-landscape-rise';
                    $scope.imageStyle = {
                        'min-height' : '70px',
                        'image-rendering' : 'pixelated'
                    };
                }

                
            }
        };
    }])