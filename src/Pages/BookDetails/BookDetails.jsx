import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const [bookDetails,setBookDetails] = useState({});
    const {bookId} = useParams();
    const bookIdInt = parseInt(bookId);
    // console.log(typeof bookId,typeof bookIdInt);

    useEffect(()=>{
        fetch('/books.json')
        .then(res=>res.json())
        .then(data=>{
            const detailsBook = data.find(book=>book.bookId === bookIdInt);
            // console.log(detailsBook);
            setBookDetails(detailsBook);
        })
        
    },[bookIdInt]);

    return (
        <div>
           <h1>Book Details: {bookDetails.author}</h1> 
        </div>
    );
}

export default BookDetails;