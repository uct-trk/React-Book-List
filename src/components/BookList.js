
import React, { Component } from 'react'
import Book from './Book'
import './BookList.css'
import { BookContext } from '../context/BookContext'
import { ThemeContext } from '../context/ThemeContext'



class BookList extends Component {

    // veriyi context üzerinden alıyoruz 1 yöntem
    /* static contextType = BookContext; */

    render() {

        // almış olduğumuz veriyi books adlı değişkene atadık 1. yöntem
        /* const books = this.context */



        return (
            <ThemeContext.Consumer>
                {(contextTheme) => (
                    <BookContext.Consumer>
                    {contextBook => {

                        const {books} = contextBook

                        const {changeTheme, isDarkTheme, dark, light} = contextTheme;
                        const theme = isDarkTheme ? dark : light

                        return (
                            <section className="page-section" style={{background: theme.bg, color: theme.txt}} id="portfolio">
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase">Book List</h2>
                                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                        <button className="btn btn-lg btn-warning mb-3" style={{marginTop: "-50px"}} onClick={changeTheme}>Change Theme Color</button>
                                    </div>
                                    <div className="row">
                                        {// Bütün Booksları key numarasına göre tek tek map et
                                            books.map((book, i) => {
                                                return <Book book={book}
                                                    key={i} />
                                            })}
                                    </div>
                                </div>
                            </section>
                        )
                    }}
                </BookContext.Consumer>
                )}
            </ThemeContext.Consumer>
        )
    }
}
export default BookList

