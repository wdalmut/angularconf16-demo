'use strict';

angular.module('myApp')
  .controller('MainCtrl', function ($scope, bookService) {
    $scope.book = {};
    $scope.save = function(book) {
      bookService.create(book).success(function(book) {
        $scope.books = $scope.books.concat([book]);
      });
      $scope.book = {};
    };

    $scope.books = [];
    bookService.getAll().success(function(books) {
      $scope.books = books;
    });
  });
