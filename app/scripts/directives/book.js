'use strict';

angular.module("myApp")
  .directive('book', function() {
    return {
      replace: true,
      templateUrl: "views/book.html",
      restrict: "E",
      scope: {
        "book": "=",
      },
      link: function() {},
    };
  });
