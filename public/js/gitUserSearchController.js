githubUserSearch.controller('GitUserSearchController', function($scope, $resource){

  var searchResource = $resource('https://api.github.com/search/users');
<<<<<<< HEAD
  // var searchRepo = $resource('');
=======
  var count = 0, result_length, search_result = [];
>>>>>>> fbdabf4bb7bbebb6e64927e433c60dce4d0f019e

  $scope.doSearch = function() {

    $scope.hello = 'uefsd';
      searchResource.get({
        q: $scope.searchTerm,
        access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8" 
<<<<<<< HEAD
      });
    };
    // if($scope.searchRepos !== ""){
    //   $scope.apply();
      // $scope.searchRepos = searchResource.get({
      //   q: $scope.searchTerm + '/repos',
      //   access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8"
      // });
    // };
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
=======
      }, function(results){
        result_length = results.items.length;

        results.items.forEach(function(item){
        var userRepos = $resource(item.repos_url);
        userRepos.query({
          access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8"
        }, function(repos) {
                        $scope.hello = "yoooo"
          var repo_count = repos.length;
          item.repoCount = repo_count;
          search_result.push(item)
          count++;
          if (count === result_length) {
              $scope.searchResult = search_result;
          }
        });
      });  
    });
  } 
});
>>>>>>> fbdabf4bb7bbebb6e64927e433c60dce4d0f019e
