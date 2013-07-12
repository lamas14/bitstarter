var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = new Buffer(50);
  buf.write(fs.readFileSync('index.html', function (err, data){if(err) throw err;}), "utf-8");
  response.send(buf.toString('utf-8', 0, 27);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
