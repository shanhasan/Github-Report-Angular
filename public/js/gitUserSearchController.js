githubUserSearch.controller('GitUserSearchController', function($scope, $resource){

  var searchResource = $resource('https://api.github.com/search/users');
  var count = 0, result_length, search_result = [];

  $scope.doSearch = function() {

    $scope.hello = 'uefsd';
    // if($scope.searchResult !== "") {
      searchResource.get({
        q: $scope.searchTerm,
        access_token: "91d8e96fd50ab4006e5925eb6471c6784894b8d8" 
      }, function(results){

                      $scope.hello = "yoooo"


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
              // $rootScope.$$phase || $rootScope.$apply();
              // $scope.$apply(function(){
                $scope.searchResult = search_result;
              // });
              // console.log('found all')
              // console.log($scope.searchResult, search_result)
              $scope.hello = "yoooo"
            }
            // console.log($scope.searchResult);

          });
        });  
      });
    // }
  } 
});



          // Do query
          // When we get the result back from the query, do a callback, and add information to our user
          // then add the user to our results array