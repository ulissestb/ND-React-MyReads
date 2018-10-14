import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
 componentDidMount(){
    BooksAPI.getAll()
      .then( (books) => {
        this.setState({books})
      } )
 }

 handleChangeShelf = (e, bookToUpdateShelf) => {
    const shelf = e.target.value;
    bookToUpdateShelf.shelf = shelf;

    this.setState((state) => {
      BooksAPI.update(bookToUpdateShelf, shelf).then(response => {
        bookToUpdateShelf.shelf = shelf;
        const updateBooks = state.books.filter((c) => c.id !== bookToUpdateShelf.id)
        updateBooks.push(bookToUpdateShelf)

        this.setState({
          books: updateBooks
        })

      })
    })
  }

  render() {
    return (
      <div className="app">
          <ListBooks
           books={this.state.books}
           
           />
          <Search />

      </div>
    )
  }
}

export default BooksApp
