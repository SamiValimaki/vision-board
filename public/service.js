angular.module('vision board').service('service', function($http) {
  this.getImages = function() {
    return $http({
      method: "GET",
      url: "/api/images"
    })
  },
  this.postImages = function(data) {
    return $http({
      method: "POST",
      url: "/api/images",
      data: data
    }).then(function(response) {
      return response.data;
    })
  },
  this.deleteImage = function(data) {
    return $http({
        method: "DELETE",
        url: "/api/images/?id=" + data.imageid + '&noteid=' + data.noteid
      }).then(function(response) {
        return response.data;
      })
  },
  this.editNotes = function(data) {
    return $http({
      method: "PUT",
      url: "/api/notes",
      data: data
    }).then(function(response) {
      return response.data;
    })
  },
  this.updateNotes = function(data) {
    return $http({
      method: "PUT",
      url: "/api/data",
      data: data
    }).then(function(response) {
      console.log(res);
    })
  },
  this.getNotes = function() {
    return $http({
      method: "GET",
      url: "/api/notes"
    }).then(function(response) {
      return response.data;
    })
  }
  this.getData = function() {
    return $http({
      method: "GET",
      url: "/api/data"
    }).then(function(response) {
      return response.data;
    })
  }
});
