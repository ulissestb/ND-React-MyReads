import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Search extends Component{

  state={
    books: [],
    query: ""
  }



clearQuery(){
  this.setState({query: '' , books: []})

}

updateQuery = async event =>{
  const bookName = event.target.value;
  if (bookName !== ''){
    BooksAPI.search(bookName).then( (searchedBooks) =>  {
        this.setState({books: searchedBooks})
    })
    this.setState({query: bookName})
  }else{
   this.clearQuery()

  }

}

  render(){
    const {onChangeShelf} = this.props;
    const { books } = this.state;

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
          {books.map( (book) => (

            <li key={book.id}>
              <div className='book'>
                <div className="book-top">
                  <div className="book-cover"style={ {width: 128, height: 188, backgroundImage:  book.imageLinks ? `url(${book.imageLinks.thumbnail})` : null }}></div>
                    <div className="book-shelf-changer">
                    <select defaultValue="none"   value={book.shelf} onChange={(event) => onChangeShelf(event, book)} >
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
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
