githubUserSearch.controller('GitUserSearchController', function($scope, $resource){

  var searchResource = $resource('https://api.github.com/search/users');

  $scope.doSearch = function() {
    if($scope.searchResult !== "") {
      $scope.$apply();
      $scope.searchResult = searchResource.get({
        q: $scope.searchTerm,
        access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8" 
    });
  };
    // $scope.image.width = img.width;
    // $scope.image.height = img.height;
    
  };
});