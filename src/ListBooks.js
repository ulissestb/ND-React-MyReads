import React from 'react';

const ListBooks = (props) => {
  return(

    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>

            <div className="bookshelf-books">

              <ol className="books-grid">
              {props.books.filter( book => book.shelf === 'currentlyReading').map( book => (
                <li key={book.title}>
                  <div className='book'>
                    <div className="book-top">
                      <div className="book-cover" style={ {width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => props.onChangeShelf(e, book)} >
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
          </div>


          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
            <ol className="books-grid">
            {props.books.filter( book => book.shelf === 'wantToRead').map( book => (
              <li key={book.title}>
                <div className='book'>
                  <div className="book-top">
                    <div className="book-cover" style={ {width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                      <div className="book-shelf-changer">
                          <select value={book.shelf} onChange={(e) => props.onChangeShelf(e, book)} >
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
          </div>


          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
              <ol className="books-grid">
              {props.books.filter( book => book.shelf === 'read').map( book => (
                <li key={book.title}>
                  <div className='book'>
                    <div className="book-top">
                      <div className="book-cover" style={ {width: 128, height: 188, backgroundImage:`url(${book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(e) => props.onChangeShelf(e, book)} >
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
              </ol>
            </div>
          </div>

        </div>
      </div>
      <div className="open-search">
        <a href="/search">Add a book</a>
      </div>
    </div>


  )
}

export default ListBooks
