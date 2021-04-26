import BookList from './BookList'
import React, { Component } from 'react'
import BookContextProvider from '../context/BookContext'
import ThemeContextProvider, { ThemeContext } from '../context/ThemeContext'

class App extends Component {

    render() {
        return (
            <div>
                <ThemeContextProvider>
                    <BookContextProvider>
                        <BookList />
                    </BookContextProvider>
                </ThemeContextProvider>
            </div>
        )
    }
}
export default App
