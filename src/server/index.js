var express = require('express');
var app = express();
var port = process.env.PORT || 4000;

app.use(express.static(__dirname + '/../client'));

app.listen(port, function () {
  console.log('app listening on port 4000.');
});