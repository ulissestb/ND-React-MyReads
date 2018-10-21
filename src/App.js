import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom';
import './App.css'
import ListBooks from './ListBooks'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    books: [],
    searchBooks: [],
    query: ''
  }

 componentDidMount(){
    BooksAPI.getAll()
      .then( (books) => {
        this.setState({books})
      } )
 }


 clearQuery(){
   this.setState({query: '' , searchBooks: []})

 }

 updateQuery = async event =>{
   const bookName = event.target.value;
   if (bookName !== ''){
     BooksAPI.search(bookName).then( (searchedBooks) =>  {
         this.setState({searchBooks: searchedBooks})
     })
     this.setState({query: bookName})
   }else{
    this.clearQuery()

   }

 }


 handleChangeShelf = (e, bookToUpdateShelf) => {
    const shelf = e.target.value;
    bookToUpdateShelf.shelf = shelf;

    this.setState((state) => {
      BooksAPI.update(bookToUpdateShelf, shelf).then(response => {
        bookToUpdateShelf.shelf = shelf;
        const updateBooks = state.books.filter((b) => b.id !== bookToUpdateShelf.id)
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
      <Route exact path='/' render={ () => (
          <ListBooks
           books={this.state.books}
           onChangeShelf={this.handleChangeShelf}
           />
         )}/>
      <Route path='/search' render={ () => (
        <Search
        books={this.state.searchBooks}
        updateQuery={this.updateQuery}
        onChangeShelf={this.handleChangeShelf}
         />
      )} />


      </div>
    )
  }
}

export default BooksApp
