var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
var io = require('socket.io')(http);

// This will inlcude a body in the request when getting post
app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/', function (req, res) {
  console.log("We got a webhook WEEEE!");

  var messageId = req.body.data.id;
  var personId = req.body.data.personId;
  socket.emit('messageReceived');

  res.end();
})

io.on('connection', function(socket){
  console.log('socket.io test connection');

  socket.emit('messageReceived');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
