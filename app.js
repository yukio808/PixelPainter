var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var picSchema = new Schema ({
  grid : String,
  fileName : String,
  timestamp : Date
});

var pic = mongoose.model('Pic', picSchema);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended : false }));
// app.use(bodyParser.json());
app.set('view engine', 'jade');

//////////////////////////////////
app.get('/', function (req, res ){
  res.send('Hello World');
});

app.get('/pixlePainter', function (req, res){
  res.render('app');
});

app.post('/pixlePainter', function (req, res){
  var saved_file = req.body.saved_file;
  var file_content = req.body.file_content;

  fs.writeFile(/*where to be stored*/saved_file, file_content, function (err){
    if(err) throw err;

    console.log(/*where to be stored*/ file_name);

    // res.redirect(/*if we need it*/);
  });
});
app.get('/pixlePainter', function (req, res) {
  var saved_file = req.params.name;

  fs.readFile(SAVE_DIR + file_name, function (err, data){
    if (err) throw err;
    // res.writeHead(200, {"content-type" : "plain-text"});
    res.render("file", {saved_file : saved_file, content : data });
  });
});




var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('PixelPainter app listening at http://%s:%s', host, port);
});