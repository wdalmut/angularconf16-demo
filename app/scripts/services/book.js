'use strict';

angular.module('myApp').service('bookService', function($http) {
  return {
    "getAll": function() {
      return $http.get("http://localhost:8085/book");
    },
    "create": function(book) {
      return $http.post("http://localhost:8085/book", book);
    },
  };
});
