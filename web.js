
var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var buffer = new Buffer(100);

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    var reply = buffer.toString();
    reponse.send(reply);
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
