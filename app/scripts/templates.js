angular.module('templates-main', ['views/book-form.html', 'views/book.html', 'views/books-list.html', 'views/main.html']);

angular.module("views/book-form.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/book-form.html",
    "<div>\n" +
    "    <form>\n" +
    "        Title: <input type=\"text\" name=\"title\" ng-model=\"book.title\" /><br>\n" +
    "        ISBN: <input type=\"text\" ng-model=\"book.isbn\" /><br>\n" +
    "        Available: <input type=\"checkbox\" ng-model=\"book.available\" /><br>\n" +
    "        <button id=\"save\" type=\"button\" ng-click=\"save(book)\">Save</button><br>\n" +
    "    </form>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("views/book.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/book.html",
    "<div>\n" +
    "    {{ book.title }}\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/books-list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/books-list.html",
    "<div>\n" +
    "    <book ng-if=\"book.available\" book=\"book\" ng-repeat=\"book in books\"></book>\n" +
    "</div>\n" +
    "");
}]);

angular.module("views/main.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("views/main.html",
    "<h1>Create</h1>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "    <book-form book=\"book\" save=\"save\"></book-form>\n" +
    "</div>\n" +
    "\n" +
    "<hr/>\n" +
    "\n" +
    "<div class=\"row\">\n" +
    "  <h1>Available Books</h1>\n" +
    "  <books-list books=\"books\"></books-list>\n" +
    "</div>\n" +
    "");
}]);
