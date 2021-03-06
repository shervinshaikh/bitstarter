var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');
var index = 'index.html'
var content = fs.readFileSync(index)

app.get('/', function(request, response) {
  response.send(content.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
