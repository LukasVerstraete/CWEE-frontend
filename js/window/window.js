/**
 * Created by lukas on 5-5-2017.
 */
var gameWindow = {};

var setupWindow = function()
{
    console.log("setting up the window");
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");

    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;

    context.canvas.width = WIDTH;
    context.canvas.height = HEIGHT;

    canvas.style.display = 'block';

    gameWindow.canvas = canvas;
    gameWindow.context = context;
    gameWindow.width = WIDTH;
    gameWindow.height = HEIGHT;
}

var resize = function()
{
    gameWindow.width = window.innerWidth;
    gameWindow.height = window.innerHeight;
    gameWindow.canvas.width = gameWindow.width;
    gameWindow.canvas.height = gameWindow.height;
}

window.onresize = function()
{
    resize();
}