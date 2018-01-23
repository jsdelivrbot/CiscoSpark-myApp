var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

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

http.listen(8080, function(){
  console.log('listening on *:8080');
});
