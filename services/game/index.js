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

.service('GameService', ['$location', 'ServerInteractService', 'UserService', function($location, ServerInteractService, UserService)
{
    var self = this;
    console.log(self);
    UserService.lookForUser();
    if(UserService.getCurrentUser())
    {
        connect(UserService.getCurrentUser(), null);
        $location.path('/game');
    }

    function connect(data, callback)
    {
        ServerInteractService.emit('CONNECT', data);
        ServerInteractService.on('READY', function(data)
        {
            UserService.setCurrentUser(data);
            if(callback)
                callback();
        });
    }

    function disconnect(data, callback)
    {
        ServerInteractService.emit('DISCONNECT', data);
        ServerInteractService.on('READY', function(data)
        {
            UserService.disconnectUser();
            if(callback)
                callback();
        });
    }

    return {
        connect: connect,
        disconnect: disconnect
    };

    //this.connect = function(data, callback)
    //{
    //    ServerInteractService.emit('RECONNECT')
    //}
}])

.service('UserService', ['localStorageService', function(localStorageService)
{
    var currentUser = null;

    this.setCurrentUser = function(user)
    {
        currentUser = user;
        localStorageService.set('clientId', user.clientId);
        localStorageService.set('username', user.username);
    };

    this.getCurrentUser = function()
    {
        return currentUser;
    };

    this.disconnectUser = function()
    {
        currentUser = null;
        localStorageService.remove('clientId');
        localStorageService.remove('username');
    }

    this.lookForUser = function()
    {
        console.log('looking for user');
        var user = {};
        var id = localStorageService.get('clientId');
        var name = localStorageService.get('username');
        console.log();
        if(id || name)
        {
            user.clientId = id;
            user.username = name;
            currentUser = user;
        }
    };
}]);