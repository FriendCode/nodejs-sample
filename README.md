Sample Web Application using Node.js and Socket.io
=============

[![Code Now](https://friendco.de/widgets/image/codenow?url=https%3A%2F%2Fgithub.com%2FFriendCode%2Fnodejs-sample.git)](https://friendco.de/widgets/url/codenow?url=https%3A%2F%2Fgithub.com%2FFriendCode%2Fnodejs-sample.git)


A complete sample application in node.js using express and socket.io which 
can run on FriendCode and Heroku.

## Important
 * Requires a **Procfile** to run on **FriendCode** and **Heroku**
 * Like Heroku the port must be fetch from an environment variable called **PORT** (`process.env.PORT` in NodeJs)
 * FriendCode's runtime is in many ways similar to (and compatible with) Heroku's, so be aware of that

## Example :

    var express = require('express');
    
    var app = express.createServer(express.logger());
    
    app.get('/', function(request, response) {
      response.send('Hello World!');
    });
    
    // Get the port from the environment or default to 5000
    var port = process.env.PORT || 5000;
    app.listen(port, function() {
      console.log("Listening on " + port);
    });

Happy coding !
