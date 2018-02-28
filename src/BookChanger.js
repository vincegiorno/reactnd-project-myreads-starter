import React, { Component} from 'react';

class BookChanger extends Component {

  const {book, onSelect} = this.props;

  render() {
    <div className="book-shelf-changer">
      <select onchange={handleShelfChange}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  }
}
