// Imports modules
var express = require('express');
var socketio = require('socket.io');

// Imports local modules
var routes = require('./routes');

// Creation of the application
var app = express.createServer(express.logger());
var io = socketio.listen(app);

// Configuration of the application
app.configure(function() {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// Development version : allow debug
app.configure('development', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Production version
app.configure('production', function() {
    app.use(express.errorHandler());
});

// Routes
var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
app.get('/', routes.index);

var status = "FriendCode is ...";
io.sockets.on('connection', function (socket) {
    io.sockets.emit('status', { "status": status });
    socket.on('reset', function (data) {
        status = "FriendCode is Awesome !";
        io.sockets.emit('status', { "status": status });
    });
});