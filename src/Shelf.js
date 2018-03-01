import React, { Component} from 'react';
import './App.css';
import Book from './Book';

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title" hidden={this.props.hidden}>
          {this.props.title}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (<Book book={book}
              key={book.id} changeShelf={this.props.changeShelf.bind(this)} />))}
          </ol>
        </div>
      </div>


    )
  }
}

export default Shelf
