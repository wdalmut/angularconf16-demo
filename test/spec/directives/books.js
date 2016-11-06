'use strict';

describe("Books List", function() {
  var $compile,
    $rootScope;

  beforeEach(module('myApp'));

  beforeEach(function() {
    inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it("should expose our books", function() {
    $rootScope.books = [
      { id: 1, title: "This is a book", isbn: "9835623", available: true },
      { id: 1, title: "Another book", isbn: "9835624", available: true },
      { id: 1, title: "A secret book", isbn: "9835625", available: false },
    ];
    var element = $compile('<books-list books="books"></books-list>')($rootScope);

    $rootScope.$digest();

    var html = element.html();
    expect(html).toContain("This is a book");
    expect(html).toContain("Another book");
    expect(html).not.toContain("A secret book");
  });
});
