var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var picSchema = new Schema({
  grid : String,
  filename : String,
  timestamp: Date
});

var Pic = mongoose.model('Pic', picSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('application');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('PixelPainter app listening at http://%s:%s', host, port);
});