/**
 * Created by Lukas on 30-6-2017.
 */
angular.module('CWEE.services.server', [])

.service('ServerInteractService', ['$rootScope', function($rootScope)
{
    var socket = io.connect("localhost:3000",{transports:['websocket']});
    this.on = function(eventName, callback)
    {
        socket.on(eventName, function()
        {
            var args = arguments;
            $rootScope.$apply(function()
            {
                callback.apply(socket, args);
            });
        });
    };

    this.emit = function(eventName, data, callback)
    {
        socket.emit(eventName, data, function()
        {
            var args = arguments;
            $rootScope.$apply(function()
            {
                if(callback)
                {
                    callback.apply(socket, args);
                }
            });
        });
    };
}])

.service('GameService', ['ServerInteractService', 'UserService', function(ServerInteractService, UserService)
{
    this.connect = function(data, callback)
    {
        ServerInteractService.emit('CONNECT', data);
        ServerInteractService.on('READY', function(data)
        {
            console.log('READY: ' + data);
            UserService.setCurrentUser(data);
            callback();
        });
    };
}])

.service('UserService', [function()
{
    var currentUser = null;

    this.setCurrentUser = function(user)
    {
        currentUser = user;
    };

    this.getCurrentUser = function()
    {
        return currentUser;
    };
}]);