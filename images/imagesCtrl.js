var app = require('../server');
var db = app.get('db');

module.exports = {
  getImages: function(req, res) {
    db.get_images([], function (err, images) {
      if(err) {
        return res.status(500).send(err)
      }
      else {
        res.send(images)
      }
    })
  },
  getData: function(req, res) {
    db.join_tables([], function (err, allData) {
      if(err) {
        return res.status(500).send(err)
      }
      else {
        res.send(allData)
      }
    })
  },
  postImages: function(req, res) {
    console.log("postImages", req.body)
    db.post_images([req.body.imageurl, req.body.category], function(err, id) {
      if(err) {
        return res.status(500).send(err)
      }
      else {
          var imageid = JSON.parse(JSON.stringify(id))[0].imageid;
  console.log ("postImages: edit_notes:", imageid, req.body.note)
          db.edit_notes([imageid, req.body.note], function(err, notes) {
            if(err) {
  console.log (err)
              return res.status(500).send(err)
            }
            else {
              return res.send('ok');
            }
          })
      }
    })
  },
  deleteImage: function(req, res) {
    db.delete_images([parseInt(req.query.id)], function(err, res) {
      console.log(err);
      db.delete_notes([req.query.noteid, req.body.note], function(err, res) {

      })
    })
  }
};
