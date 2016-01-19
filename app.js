var app = angular.module("news", []);

app.controller("MainController", ['$scope', function ($scope){
    $scope.test = "hello";
    $scope.posts = ['post 1', 'post 2', 'post 3', 'post 4'];
}]);