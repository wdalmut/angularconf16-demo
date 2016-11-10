'use strict';

angular.module("myApp")
  .directive('bookForm', function() {
    return {
      replace: true,
      templateUrl: "views/book-form.html",
      restrict: "E",
      scope: {
        "save": "=",
      },
      link: function(scope) {
        scope.book = {};
      }
    };
  });

