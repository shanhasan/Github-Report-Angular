githubUserSearch.controller('GitUserSearchController', function($scope, $resource){

  var searchResource = $resource('https://api.github.com/users');
  var searchRepo = $resource('');

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


 // function GitHubCtrl($scope, $http) {
 //      $scope.getGitInfo = function () {
 //         $scope.userNotFound = false;
 //         $scope.loaded = false;
 //         $http.get("https://api.github.com/users/" + $scope.username)
 //               .success(function (data) {
 //                  if (data.name == "") data.name = data.login;
 //                  $scope.user = data;
 //                  $scope.loaded = true;
 //               })
 //               .error(function () {
 //                  $scope.userNotFound = true;
 //               });
 //         $http.get("https://api.github.com/users/" + $scope.username + "/repos").success(function (data) {
 //            $scope.repos = data;
 //            $scope.reposFound = data.length > 0;
 //         });
 //      }
 //   }