var dogApp = angular.module("dogApp", []);
dogApp.controller('dogs', function ($scope) {
    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
});
dogApp.controller('catsController', function () {
     this.cats =  ['כלב', 'cat2', 'cat3'];
});