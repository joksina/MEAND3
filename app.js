// when the controller goes out of scope, we lose the data
// that data cannot be easily accessed from other controllers or directives
// the data is difficult to mock, which is important when writing automated tests
//using ui-routes because it's new and mor flexible
var app = angular.module("news", ['ui.router']);

app.factory('posts', [function () {
  var o = {
    posts: []
  };

  return o;
}]);

app.controller("MainController", ['$scope', 'posts', function ($scope, posts){
  $scope.test = "hello";
  $scope.posts = posts.posts;
  $scope.posts = [
    {title: 'post 1', upvotes: 5},
    {title: 'post 2', upvotes: 2},
    {title: 'post 3', upvotes: 15},
    {title: 'post 4', upvotes: 9},
    {title: 'post 5', upvotes: 4}];

  //A function to append a post to the innerHTML
  $scope.addPost = function () {
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: [
        {author: 'AJ', body: 'Cool post!', upvotes: 0},
        {author: 'Lyly', body: 'Great idea but everything is wrong!', upvotes: 0}
      ]
    });
    $scope.title = '';
    $scope.link = '';
    //prevent user from submiting a blank title
    if(!$scope.title || $scope.title === '') {
      return;
    }
  };
  //create a function that increments the upvotes
  //post is being passed to reference the post in the html file
  $scope.incrementUpvotes = function (post) {
    post.upvotes += 1;
  };
}]);

app.controller('PostController', ['$scope', '$stateParams', 'posts'], function ($scope, $stateParams, posts) {
  $scope.post = posts.posts[$stateParams.id];
});

//configure the app to route to url
app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainController'
    })
    .state('posts', {
      url: '/posts/{id}',
      templateUrl: '/posts.html',
      controller: 'PostController'
    });
    $urlRouterProvider.otherwise('home');
}])