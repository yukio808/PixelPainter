var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pixelchat');
var Schema = mongoose.Schema;

var picSchema = new Schema({
  grid : Array,
  file_name : String,
  timestamp: Date
});

var Pic = mongoose.model('Pic', picSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  Pic.find(function(err, pics){
    if(err) throw err;
    console.log(pics[0]);
    res.render('app', {pics : pics, });
  });
});

app.get('/pixelPainter', function (req, res){
  res.render('application');
});

app.post('/pixelPainter', function (req, res){
  var file_name = req.body.file_name;
  var grid = req.body.grid;

  var pic = new Pic(
  {
    file_name : file_name,
    grid : grid
  });

  pic.save(function (err, pic){
    if (err) throw err;
    console.log(pic);
  res.send('victory is mine');
  });
  // console.log(req.body);
  // res.send('successful post{TEST}');
});

app.get('/pixelPainter/:id', function (req, res){
  // console.log(req.params.id);
  Pic.findById(req.params.id, function (err, pic){
    if (err) throw err;
    res.render('restoredgrid', {pic : pic});
  });
});


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('PixelPainter app listening at http://%s:%s', host, port);
});
