import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    library: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((library) => {
      this.setState({library});
    })
  }

  updateBooks(newBook, shelf) {
    let books = this.state.library.filter((book) => book.id !== newBook.id);
    newBook.shelf = shelf;
    books.push(newBook);
    BooksAPI.update(newBook, shelf);
    this.setState({library: books});
  }

  render() {

    let booksCurrent = this.state.library.filter((book) => book.shelf === 'currentlyReading');
    let booksWant = this.state.library.filter((book) => book.shelf === 'wantToRead');
    let booksRead = this.state.library.filter((book) => book.shelf === 'read');
    let shelves = [
      {books: booksCurrent, title: 'Currently Reading'},
      {books: booksWant, title: 'Want to Read'},
      {books: booksRead, title: 'Read'}
    ];

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search
            putOnShelf={this.updateBooks.bind(this)}
          />
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {shelves.map((shelf) => (<Shelf books={shelf.books}
                  key={shelf.title} title={shelf.title} hidden={false}
                  changeShelf={this.updateBooks.bind(this)} />))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
