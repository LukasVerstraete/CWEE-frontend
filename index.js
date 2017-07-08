/**
 * Created by lukas on 5-5-2017.
 */
angular.module('CWEE', ['ngMaterial', 'LocalStorageModule', 'CWEE.views', 'CWEE.elements', 'CWEE.services'])

.config(function(localStorageServiceProvider)
{
    localStorageServiceProvider.setPrefix('CWEE');
    localStorageServiceProvider.setStorageType('sessionStorage');
});


// it was once fortold that this code would start a revolution...
// ...now it's just in comments because canvas is not as usefull as the programmer thought.

// window.onload = function()
// {
//     // setupWindow();
//     // var game = new Game();
//     // game.startUp();
// };
