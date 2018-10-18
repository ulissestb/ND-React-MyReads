import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component{

  state={
    newBooks: [],
    query: ""
  }

  updateQuery = event =>{
    const query = event.target.value;
    this.setState({ query });
      console.log(this.state.query)
      BooksAPI.search(query).then( (searchedBooks) => {
          this.setState({newBooks: searchedBooks})
      })
  }


  render(){


    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'>Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.updateQuery}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.newBooks.map( (findedBook) => (
            <li key={findedBook.id}>
              <div className='book'>
                <div className="book-top">
                  <div className="book-cover"style={ {width: 128, height: 188, backgroundImage:`url(${findedBook.imageLinks.thumbnail})`}}></div>
                    <div className="book-shelf-changer">
                        <select value={findedBook.shelf} onChange={(e) => this.props.onChangeShelf(e, findedBook)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                    </div>
                  </div>
                  <div className="book-title">{findedBook.title}</div>
                  <div className="book-authors">{findedBook.authors}</div>
              </div>
            </li>
          ) )}
          </ol>
        </div>
      </div>

    )
  }
}

export default Search
