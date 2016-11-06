'use strict';

describe("Book", function() {
  var $compile,
    $rootScope;

  beforeEach(module('myApp'));

  beforeEach(function() {
    inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it("should expose a book", function() {
    $rootScope.book = { id: 1, title: "This is a book", isbn: "9835623", available: true };
    var element = $compile('<book book="book"></book>')($rootScope);

    $rootScope.$digest();

    var html = element.html();
    expect(html).toContain("This is a book");
  });
});

