import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'


class BooksApp extends React.Component {
  state = {
    library: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((library) => {
      this.setState({library});
    })
  }

  updateBooks(newBook) {
    let books = this.state.library.filter((book) => {
      book.id !== newBook.id;
    })
    books.append(newBook);
    BooksAPI.update(book, book.shelf)
    this.setState({library: books})
  }

  render() {

    let booksCurrent = [],
        booksWant = [],
        booksRead = [];
    this.state.library.map((book) => {
      switch(book.shelf) {
        case 'currentlyReading':
          booksCurrent.append(book);
        case 'wantToRead':
          booksWant.append(book);
        case 'read':
          booksRead.append(book);
        default:
      }
    });
    let shelves = {
      {books: booksCurrent, title: 'Currently Reading'},
      {books: booksWant, title: 'Want to Read'},
      {books: booksRead, title: 'Read'}
    };

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search
            onSelect={this.updateBooks}
            getBooks={BooksAPI.search}
        )}/>

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => (<Bookshelf books={shelf.books} title={shelf.title} changeShelf={this.updateBooks} />))}
              </div>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}
