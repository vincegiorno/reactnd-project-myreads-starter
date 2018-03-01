import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Shelf from './Shelf';
import * as BooksAPI from './BooksAPI'
import './App.css';


class Search extends Component {

  state = {
    searchString: '',
    results: []
  };

  handleChange(e) {
    this.setState({searchString: e.target.value});
    console.log(this.state.searchString);
  }

  handleSearch(e) {
    e.preventDefault();
    BooksAPI.search(this.state.searchString).then((results) => {
      results.map((book) => {book.shelf = 'none'})
      this.setState({results})});
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <form onSubmit={this.handleSearch.bind(this)}>
              <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)}
                placeholder="Search by title or author"/>
              <input type="submit" value="Submit" />
            </form>

          </div>
        </div>
        <div className="search-books-results">
          <Shelf books={this.state.results}
            title='' hidden={true}
            changeShelf={this.props.putOnShelf.bind(this)} />
        </div>
      </div>
    )
  }

}

export default Search
