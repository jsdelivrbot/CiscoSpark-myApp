var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('socket.io test connection');

  // socket.on('disconnect', function(){
  //   console.log('user disconnected');
  // });

  // socket.on('authenticate', function(){
  //   console.log('Trying to authenticate...');
  //   // initiate the login sequence if not authenticated.
  //   spark.authorization.initiateLogin();
  // });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
