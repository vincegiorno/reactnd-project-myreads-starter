import React, { Component} from 'react';
import './App.css'

class Book extends Component {

  const {book, changeShelf} = this.props;
  bookChanger = (e) => {
    book.shelf = e.target.value;
    changeShelf(book);
  }
  render {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: {book.imageLinks.thnumbnail}}}></div>
            <div className="book-shelf-changer">
              <select onchange={bookChanger}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">To Kill a Mockingbird</div>
          <div className="book-authors">Harper Lee</div>
        </div>
      </li>
    )
  }
}
