import React, { Component } from 'react'

class Book extends Component{

  render(){
    const {books, onChangeShelf, allBooks} = this.props;
    return(
      <div className="bookshelf-books">
      <ol className="books-grid">
      {books.filter( book => book.id && book.shelf=== undefined ).map( book => (
        <li key={book.title}>
          <div className='book'>
            <div className="book-top">
              <div className="book-cover" style={ {width: 128, height: 188, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : null}}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => onChangeShelf(event, book)} >
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
        </li>)
      )}
      </ol>
      </div>

)}}
export default Book
