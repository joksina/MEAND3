var app = angular.module("news", []);

app.controller("MainController", ['$scope', function ($scope){
  $scope.test = "hello";
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}];

  //A function to append a post to the innerHTML
  $scope.addPost = function () {
    $scope.posts.push({title: $scope.title, upvotes: 0});
    $scope.title = '';
    //prevent user from submiting a blank title
    if(!$scope.title || $scope.title === '') {
      return;
    }
  };
  //create a function that increments the upvotes
  $scope.incrementUpvotes = function (post) {
    post.upvotes += 1
  }
}]);