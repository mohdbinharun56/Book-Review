import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books,setBooks] = useState([]);
    
    useEffect(()=>{
        fetch('./books.json')
        .then(response=>response.json())
        .then(data=>setBooks(data))
    },[]);
    return (
        <div className="mt-20 font-bold text-5xl">
            <h1 className="text-center">Books</h1>
            <div className="mt-20 grid gap-20 md:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(book=><Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;