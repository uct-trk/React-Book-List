import React from 'react'

// 1 yöntemde export default React.createContext yaptık
/* export default React.createContext(); */

// 2. yöntem
export const BookContext = React.createContext();


class BookContextProvider extends React.Component{
    state = {
        books: [
            {
                title: "Kırmızı Pazartesi",
                author: "Haruki Murakami",
                pageNum: 296,
                imageURL: "https://admin-7866.kxcdn.com/Upload/BooksImage//9789750719363_front_cover(11).jpg",
                topic:"Kırmızı Pazartesi, bir cinayetin arka planını göstermekten öte, acımasız törelerin kıskacındaki bir halkın ortak davranış biçimlerinin portresini de çiziyor. Böylece alabildiğine sürükleyici bu kısa ve ölümsüz roman, adeta bir toplumun ruh çözümlemesi niteliğini de kazanmış oluyor."
            },
            {
                title: "Şeker Portakalı",
                author: "Haruki Murakami",
                pageNum: 296,
                imageURL: "https://admin-7866.kxcdn.com/Upload/BooksImage//9789750721571_front_cover(6).jpg",
                topic:"Kırmızı Pazartesi, bir cinayetin arka planını göstermekten öte, acımasız törelerin kıskacındaki bir halkın ortak davranış biçimlerinin portresini de çiziyor. Böylece alabildiğine sürükleyici bu kısa ve ölümsüz roman, adeta bir toplumun ruh çözümlemesi niteliğini de kazanmış oluyor."
            },
            {
                title: "En uzun Yüzyıl",
                author: "Haruki Murakami",
                pageNum: 296,
                imageURL: "https://admin-7866.kxcdn.com/Upload/BooksImage//9789750721915_front_cover(6).jpg",
                topic:"Kırmızı Pazartesi, bir cinayetin arka planını göstermekten öte, acımasız törelerin kıskacındaki bir halkın ortak davranış biçimlerinin portresini de çiziyor. Böylece alabildiğine sürükleyici bu kısa ve ölümsüz roman, adeta bir toplumun ruh çözümlemesi niteliğini de kazanmış oluyor."
            },
            {
                title: "Kırmızı Pazartesi",
                author: "Haruki Murakami",
                pageNum: 296,
                imageURL: "https://admin-7866.kxcdn.com/Upload/BooksImage//9789750719370_front_cover.jpg",
                topic:"Kırmızı Pazartesi, bir cinayetin arka planını göstermekten öte, acımasız törelerin kıskacındaki bir halkın ortak davranış biçimlerinin portresini de çiziyor. Böylece alabildiğine sürükleyici bu kısa ve ölümsüz roman, adeta bir toplumun ruh çözümlemesi niteliğini de kazanmış oluyor."
            },
            {
                title: "Kırmızı Pazartesi",
                author: "Haruki Murakami",
                pageNum: 296,
                imageURL: "https://admin-7866.kxcdn.com/Upload/BooksImage//9789750721908_front_cover(3).jpg",
                topic:"Kırmızı Pazartesi, bir cinayetin arka planını göstermekten öte, acımasız törelerin kıskacındaki bir halkın ortak davranış biçimlerinin portresini de çiziyor. Böylece alabildiğine sürükleyici bu kısa ve ölümsüz roman, adeta bir toplumun ruh çözümlemesi niteliğini de kazanmış oluyor."
            },
            {
                title: "Kırmızı Pazartesi",
                author: "Haruki Murakami",
                pageNum: 296,
                imageURL: "https://admin-7866.kxcdn.com/Upload/BooksImage//9789750725616_front_cover(6).jpg",
                topic:"Kırmızı Pazartesi, bir cinayetin arka planını göstermekten öte, acımasız törelerin kıskacındaki bir halkın ortak davranış biçimlerinin portresini de çiziyor. Böylece alabildiğine sürükleyici bu kısa ve ölümsüz roman, adeta bir toplumun ruh çözümlemesi niteliğini de kazanmış oluyor."
            },
        ]
    }

    render() {
        return(
            <BookContext.Provider value={{...this.state}}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}


export default BookContextProvider



// 1-) Defaul Value - varsayılan değer tanımlayacağız this.context (bu birinci yol)
// - ilk yaptığımız şey context componentri oluşturduk
// - Baslangıc degeri verip export ettik
// kullanmak istediğmiz yerde import ettik
//   static contextType = BookContext;
// const books = this.context contexti books adlı geğişkene atadık


// 2-) Provider ---> Consumer (bu ikinci yol)
// - Class component oluşturduk ve veriyi state içerisine koyduk
// - BookContex i provider ile aldık
// - Parent child ilişkisi {this.props.children}
// - veriyi göndereceğimiz componente contex import edilir
// -render içerisinde consumer ile providerden gelen veriyi yakalıyoruz