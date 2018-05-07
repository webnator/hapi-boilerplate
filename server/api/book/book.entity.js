'use strict';

const BookDAO = require('./book.DAO');

class BookEntity {

  constructor({bookResponses}) {
    this.bookResponses = bookResponses;
    this.bookDAO = new BookDAO();
    this.books;
  }

  _setBooks(books) {
    this.books = books;
  }

  async getBooks(urlParams) {
    let books = await this.bookDAO.getBooks(urlParams);
    this._setBooks(books.dbData.result);
    return this.books;
  }

  async createBook(book) {
    let resultBook = await this.bookDAO.createBook(book);
    return resultBook.dbData.entity;
  }

  async findBook(id) {
    let resultBook = await this.bookDAO.findBook(id);
    return resultBook.dbData.result;
  }

  async deleteBook(id) {
    await this.bookDAO.deleteBook(id);
  }

}

module.exports = BookEntity;