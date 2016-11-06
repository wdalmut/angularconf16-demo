'use strict';

describe("Book Form", function() {
  var $compile,
    $rootScope;

  beforeEach(module('myApp'));

  beforeEach(function() {
    inject(function(_$compile_, _$rootScope_){
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it("should expose a book", function(done) {
    $rootScope.book = {};
    $rootScope.save = function(book) {
      expect(book.title).toEqual("Some text");
      expect(book.isbn).toEqual("123456");
      expect(book.available).toBe(true);
      done();
    };

    var element = $compile('<book-form book="book" save="save"></book-form>')($rootScope);

    $rootScope.$digest();

    angular.element(element.find('input')[0]).val('Some text').triggerHandler('input');
    angular.element(element.find('input')[1]).val('123456').triggerHandler('input');
    angular.element(element.find('input')[2]).prop('checked', 'checked').triggerHandler('click');
    $rootScope.$apply();

    element.find('button')[0].click();
  });
});


