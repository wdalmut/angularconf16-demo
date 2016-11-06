'use strict';

describe('Service: bookService', function () {

  // load the controller's module
  beforeEach(module('myApp'));

  var bookService,
      httpBackend;

  beforeEach(inject(function(_bookService_, $httpBackend) {
    bookService = _bookService_;
    httpBackend = $httpBackend;
  }));

  it("should retrieve all books", function() {
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

    bookService.getAll().then(function(books) {
      expect(books.data.length).toBe(3);
      expect(books.data.map((item) => item.title)).toEqual(["This is a book", "Another super book", "A rare book to read"]);
    });
    httpBackend.flush();
  });
});

