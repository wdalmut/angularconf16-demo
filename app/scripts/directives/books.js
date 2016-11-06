'use strict';

angular.module("myApp")
  .directive('booksList', function() {
    return {
      replace: true,
      templateUrl: "views/books-list.html",
      restrict: "E",
      scope: {
        "books": "=",
      },
      link: function() {},
    };
  });
