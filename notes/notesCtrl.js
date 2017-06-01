var app = require('../server');
var db = app.get('db');

module.exports = {
  editNotes: function(req, res) {
    db.update_notes([req.body.imageid, req.body.note], function(err, notes) {
      if(err) {
        return res.status(500).send(err)
      }
      else {
        res.send(notes)
      }
    })
  },
  getNotes: function(req, res) {
    db.get_notes(function(err, notes) {
      if(err) {
        return res.status(500).send(err)
      }
      else {
        res.send(notes)
      }
    })
  },
  updateNotes: function(req, res) {
    db.update_notes([req.body.bigImage.id, req.body.note], function(err, notes) {
      if(err) {
        return res.status(500).send(err)
      }
      else {
        res.send(notes);
      }
    })
  }
};
