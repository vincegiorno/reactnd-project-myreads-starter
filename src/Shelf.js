import React, { Component} from 'react';
import './App.css'

class Shelf extends Component {

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (<Book book=book changeShelf={this.props.onSelect}))
          </ol>
        </div>
      </div>


    )
  }
}
