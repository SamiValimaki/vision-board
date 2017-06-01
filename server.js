var bodyParser = require('body-parser');
var express = require('express');
var session = require('express-session');
var app = module.exports = express();
var massive = require('massive');
var http = require('http');
var connectionString = "postgres://zxvrbbaq:xXnmzRk6vBHDdIj9haUs3uLdHkzAENFR@stampy.db.elephantsql.com:5432/zxvrbbaq";
var massiveInstance = massive.connectSync({connectionString : connectionString});



const massiveServer = massive.connectSync({
    connectionString: connectionString
});
app.set('db', massiveServer);
var db = app.get('db');

app.use(express.static('./public'));
app.use(bodyParser.json());


var imagesCtrl = require('./images/imagesCtrl.js');
app.get('/api/images', imagesCtrl.getImages);
app.post('/api/images', imagesCtrl.postImages);
app.delete('/api/images', imagesCtrl.deleteImage);
app.get('/api/data', imagesCtrl.getData);


var notesCtrl = require('./notes/notesCtrl.js');
app.put('/api/notes', notesCtrl.editNotes);
app.get('/api/notes', notesCtrl.getNotes);
app.put('/api/data', notesCtrl.updateNotes);



app.listen(3000, function() {
  console.log('listening on port 3000')
});
