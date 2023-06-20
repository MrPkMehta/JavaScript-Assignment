/** Write a program that takes a list of books, including their authors and publication years as input. The program
should then filter out all books that were published before 2010 and create a new array with the remaining
books, but with their author names capitalized. */



// list of books name along with the author name and the published year
const books = [
    {
        bookName: "Biology",
        author: "priyamanshu",
        year: 2011
    },
    {
        bookName: "chemestry",
        author: "harsh",
        year: 2010
    },
    {
        bookName: "botny",
        author: "anand",
        year: 2012
    },
    {
        bookName: "java",
        author: "hitesh",
        year: 2009
    },
    {
        bookName: "c++",
        author: "ankita",
        year: 2008
    }
]


//filter the books with the help of filter function and then use map function to iterate on every element and then convert the author name to uppercase.

//hear ...book is used to copy all properties of the originol book content 
let filterBooks = books.filter((book) => book.year >= 2010).map((book) => ({
    ...book, author: book.author.toUpperCase() //callback function is used inside this({})
}))


//log the filtered books with upper case authpr name
console.log(filterBooks);