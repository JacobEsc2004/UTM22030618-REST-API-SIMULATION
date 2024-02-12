const books = require('./books.json');

const getBook = (searchTerm) => {  
    const foundBook = books.find(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(foundBook){
        return {
            code: 200,
            body: foundBook,
            msg: "Book '" + foundBook.title + "' found",
        }
    }
    return {
        code: 400,
        body: null,
        msg: "The book was not found",
    }
}
const getBooks = () => {
    return {
        code: 200,
        body: books,
        msg: "These are all the books",
    }
}

const addBook = (newBook) => {
    books.push(newBook);
    return {
        code: 201,
        body: books,
        msg: "Book added",
    }
}

const removeBookByTitleOrISBN = (searchTerm) => {
    const index = books.findIndex(book => book.title === searchTerm || book.ISBN === searchTerm);
    if(index !== -1){
        const deletedBookName = books[index].title;
        const deletedBook = books.splice(index,1)[0];
        return {
            code: 200,
            body: books,
            msg: "The book " + deletedBookName + " was deleted",
        }
    }
    return {
        code: 400,
        body: null,
        msg: "The book was not found",
    }
}

const filterBy = (property,searchTerm) => {
    const filteredBooks = books.filter(book => book[property] === searchTerm);
    return {
        code: 200,
        body: filteredBooks,
        msg: "Filtered books",
    }
}

const listBooks = () => {  
    const formattedBooks = books.map(book => `${book.title} - ${book.author} - ${book.year}`);
    return {
        code: 200,
        body: formattedBooks,
        msg: "Listed books",
    }
}

const getBooksByYear = (year) => {
    const filteredBooks = books.filter(book => book.year === year);
    return {
        code: 200,
        body: filteredBooks,
        msg: "These are the books published on: " + year,
    }
}

const genreFullAvailability = (genre) => {  
    const allAvailable = books.every(book => book.genre === genre && book.stock > 0);
    if (allAvailable) {
        return {
            code: 200,
            body: "True",
            msg: "All the " + genre + " books are available",
        }
    }
    return {
        code:   400 ,
        body: "False",
        msg: "Not all the " + genre + " books are available",
    }
}


const genrePartialAvailability = (genre) => {
    const partialAvailable = books.filter(book => book.genre === genre && book.stock > 0);
    if(partialAvailable.length === 0){
        return {
            code: 400,
            body: "False",
            msg: "There is not " + genre + " books available",
        }
    }
    return {
        code: 200,
        body: "True",
        msg: "There is at least one book of " + genre + " available",
    }
}

const getCountBy = (property, searchTerm) => {
    const count = books.filter(book => book[property] === searchTerm).length;
    return {
        code: 200,
        body: count,
        msg: "Count of books by " + property + " " + searchTerm,
    } 
}

console.log(getBook("9780307744432"));
console.log(getBooks());
console.log(addBook({ "title": "It", "ISBN": "9781444707861", "year": 1986, "genre": "Terror, Novel", "author": "Stephen King", "stock": 10, "publisher": "Viking" }));
console.log(removeBookByTitleOrISBN("9780735219090"));
console.log(filterBy("author","Stephen King"));
console.log(listBooks());
console.log(getBooksByYear(2014));
console.log(genreFullAvailability("Fiction"));
console.log(genrePartialAvailability("Science"));
console.log(filterBy("author","Stephen King"));
console.log(getCountBy('year', 2011));