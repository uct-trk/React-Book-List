import React from 'react'

// 1 yöntemde export default React.createContext yaptık
/* export default React.createContext(); */

// 2. yöntem
export const ThemeContext = React.createContext();


class ThemeContextProvider extends React.Component{
    state = {
        isDarkTheme: true,
        dark: {bg: "#222529", txt: "#D65f5f", hover: "rgba(231, 76, 60, 0.8)"},
        light: {bg: "#f8f9fa", txt: "#222529", hover: "rgba(254, 209, 54, 0.8)"},
    }

    changeTheme = () => {
        this.setState({isDarkTheme: !this.state.isDarkTheme})
    }

    render() {
        return( // spread operatoru olarak gönderiyoruz. Spread operatoru state objesini kopyalar.  object olduğu için tekrar süslü paranteze aldık
            <ThemeContext.Provider value={{...this.state, changeTheme: this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}


export default ThemeContextProvider
