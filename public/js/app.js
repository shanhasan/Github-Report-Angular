var githubUserSearch = angular.module('GitUserSearch', ['ngResource']);

// adding a controller

githubUserSearch.controller('GitUserSearchController', function($scope, $http){
  //a scope function to load the data
  $scope.loadData = function () {
    $http.get('/').success(function(data) {
      $scope.items = data;
    });
  };
});