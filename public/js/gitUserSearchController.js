githubUserSearch.controller('GitUserSearchController', function($scope, $resource){

  var searchResource = $resource('https://api.github.com/search/users');
  var count = 0, result_length, search_result = [];

  $scope.doSearch = function() {
      searchResource.get({
        q: $scope.searchTerm,
        access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8" 
      }, function(results){
        var result_length = results.items.length;

        results.items.forEach(function(item){
        var userRepos = $resource(item.repos_url);
        userRepos.query({
          access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8"
        }, function(repos) {
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
