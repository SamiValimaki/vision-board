angular.module('vision board')
.controller('homeCtrl', function($scope, $http, service){
  $scope.getImages = function() {
    service.getImages().then(function(res) {
      $scope.images = res.data;
      console.log('hello');
      $scope.getNotes();
    })
  };
  $scope.setBigImage = function(image, index) {
    $scope.bigImage = image;
    $scope.imageIndex = index;
  }
  $scope.nextBigImage = function() {
    $scope.imageIndex += 1;
    $scope.bigImage = $scope.images[$scope.imageIndex];
  }
  $scope.prevBigImage = function() {
    $scope.imageIndex -= 1;
    $scope.bigImage = $scope.images[$scope.imageIndex];
  }
  $scope.initImageAdd = function (category) {
    $scope.newImage = {};
    $scope.newImage.category = category;
    $scope.newImage.url = "";
    $scope.newImage.notes = "";
  }
  $scope.postImages = function(newImage) {
    console.log(newImage.notes)
    service.postImages({imageurl: newImage.url, category: newImage.category, note: newImage.notes}).then(function(res) {
      if (res == 'ok') {
        $scope.images.push ({imageurl: newImage.url, category: newImage.category, notes: newImage.notes });
      }
    })
  }
  $scope.setGonnerImage = function (image) {
    $scope.gonnerImage = image;
  }
  // $scope.data = function() {
  //   $scope.data = {imageid, imageurl, note, noteid}
  // }
  $scope.deleteImage = function (id) {
      service.deleteImage({imageid: id}).then(function(res) {
        for (var i = 0; i < $scope.images.length; i++) {
          if ($scope.images[i].imageid == id) {
            $scope.images.splice (i, 1);
            break;
          }
        }
      });
  }
  $scope.editNotes = function(note, imageid) {
  console.log ("editNotes (controller)", note, imageid)
    service.editNotes({note: note, imageid: imageid}).then(function(res) {
      console.log(res);
    })
  }
  $scope.getNotes = function() {
    service.getNotes().then(function(res) {
      console.log(res);
      for(var i = 0; i < $scope.images.length; i++) {
        for(var j = 0; j < res.length; j++) {
          if(res[j].imageid == $scope.images[i].imageid) {
            $scope.images[i].note = res[j].note;
          }
        }
      }
    });
  }
  $scope.getData = function() {
    service.getData().then(function(res) {
      $scope.images = res;
    })
  };
  $scope.getData();
});
