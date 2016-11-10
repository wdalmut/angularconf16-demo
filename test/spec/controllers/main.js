'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var MainCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of books to the scope', function () {
    httpBackend.whenGET("http://localhost:8085/book").respond([
      {
        id: 1,
        title: "This is a book",
        isbn: "9835623",
        available: true
      },
      {
        id: 1,
        title: "Another super book",
        isbn: "9835624",
        available: true
      },
      {
        id: 1,
        title: "A rare book to read",
        isbn: "9835625",
        available: false
      }
    ]);
    httpBackend.flush();
    expect(scope.books.length).toBe(3);
    expect(scope.books.map((item) => item.title)).toEqual([
        "This is a book",
        "Another super book",
        "A rare book to read"
    ]);
  });

  it('should create a new book', function () {
    var book = {title: "This is a book", isbn: "9835623", available: true};
    scope.save(book);

    httpBackend.whenGET("http://localhost:8085/book").respond([]);
    httpBackend.whenPOST("http://localhost:8085/book").respond(Object.assign({}, book, {id: 1}));
    httpBackend.flush();

    expect(scope.books.length).toBe(1);

    expect(scope.books[0].id).toBe(1);
    expect(scope.books[0].title).toEqual("This is a book");
    expect(scope.books[0].isbn).toEqual("9835623");
    expect(scope.books[0].available).toBe(true);
  });
});
