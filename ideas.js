// DELETE DATA FROM INNER JOIN TABLE

// homeCtrl
// delete function deletes (image, imageid, imageurl, category, note, noteid)

// $scope.data = function() {
//   $scope.data = {imageid, imageurl, category, note, noteid}
//   $scope.deleteData = ng-click(deletes everything)
// }

// service
// this.deleteData = function(data) {
//   return $http({
//       method: "DELETE",
//       url: "/api/images/?id=" + data.imageid + '&noteid=' + data.noteid
//     }).then(function(response) {
//       return response.data;
//     })
// },

// deleteImage: function(req, res) {
//   db.delete_images([parseInt(req.query.id)], function(err, res) {
//     db.delete_notes([req.query.noteid, req.body.note], function(err, res) {
//     return;
//     })
//   })
// }
// };
// notes_imageid_FK


// deleteNotes: function(req, res) {
//   db.delete_notes([req.body.imageid, req.body.note], function(err, notes) {
//     if(err) {
//       return res.status(500).send(err)
//     }
//     else {
//       res.send(notes)
//     }
//   })
// },
