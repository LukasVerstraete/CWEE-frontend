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
            var cardIndent = 50;

            // setting the correct on screen position
            var stackWidth = $scope.cards.length * 20;
            var screenHalfWidth = $window.innerWidth / 2;
            var screenHalfHeight = $window.innerHeight / 2;

            var x = screenHalfWidth - stackWidth / 2;
            var y = $window.innerHeight + cardIndent;

            if($scope.position == 2)
            {
                x = -cardIndent;
                y = screenHalfHeight - stackWidth / 2;
            }
            if($scope.position == 3)
                y = -cardIndent;
            if($scope.position == 4)
            {
                x = $window.innerWidth + cardIndent;
                y = screenHalfHeight - stackWidth / 2;
            }

            $scope.style = {
                'position' : 'absolute',
                'left' : x,
                'top' : y
            };
        }
    };
}])