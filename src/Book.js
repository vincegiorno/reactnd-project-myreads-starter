import React, { Component} from 'react';
import './App.css'

class Book extends Component {

  const {book, changeShelf} = this.props;

  render {
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ backgroundImage: {book.imageLinks.thnumbnail}}}></div>
            <div className="book-shelf-changer">
              <BookChanger book={book} onSelect={changeShelf} />
            </div>
          </div>
          <div className="book-title">To Kill a Mockingbird</div>
          <div className="book-authors">Harper Lee</div>
        </div>
      </li>
    )
  }
}
