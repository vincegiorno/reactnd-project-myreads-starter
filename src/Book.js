import React, { Component} from 'react';
import './App.css';

class Book extends Component {

  bookChanger = (e) => {
    let newShelf = e.target.value;
    this.props.changeShelf(this.props.book, newShelf);
  }
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover">
              <img src={this.props.book.imageLinks.thumbnail}
                alt='Cover'/>
            </div>
            <div className="book-shelf-changer">
              <select onChange={this.bookChanger}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
