import React from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => {



    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'>Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={props.query} onChange={props.updateQuery}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {props.books.filter( b => b.id !== props.initBooks.id).map( (book) => (
            <li key={book.id}>
              <div className='book'>
                <div className="book-top">
                  <div className="book-cover"style={ {width: 128, height: 188, backgroundImage:  book.imageLinks ? `url(${book.imageLinks.thumbnail})` : null }}></div>
                    <div className="book-shelf-changer">
                    <select  defaultValue={book.shelf !== undefined ? book.shelf : 'none'} onChange={(event) => props.onChangeShelf(event, book)} >
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

export default Search
