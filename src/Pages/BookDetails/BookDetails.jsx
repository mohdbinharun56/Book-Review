// import { faBookSkull } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState({});
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    // console.log(typeof bookId,typeof bookIdInt);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => {
                const detailsBook = data.find(book => book.bookId === bookIdInt);
                // console.log(detailsBook);
                setBookDetails(detailsBook);
            })
            .catch(error => console.log(error));

    }, [bookIdInt]);

    return (
        <div>
            {/* <h1>Book Details: {bookDetails.author}</h1> */}
            <div className="mt-20 mb-10 flex gap-20">
                <div className="bg-base-200 p-20 w-1/3 rounded-lg shadow-xl">
                    <img src={bookDetails.image} alt={bookDetails.bookName} width={500} height={500} />
                </div>
                <div>
                    <h1>{bookDetails.bookName}</h1>
                    <p>{bookDetails.author}</p>
                    <span>{bookDetails.category}</span>
                    <p><span>Review: </span>{bookDetails.review}</p>
                    <p className="flex gap-20"> Tag: <span className="flex gap-10">{
                        bookDetails.tags ? bookDetails.tags.map((tag, idx) => <p key={idx}>#{tag}</p>) : <p>Loading....</p>
                    }</span></p>
                    <p>Number of Pages: {bookDetails.totalPages}</p>
                    <p>Publisher: {bookDetails.publisher}</p>
                    <p>Year of Publishing: {bookDetails.yearOfPublishing}</p>
                    <p>Ratings: {bookDetails.rating}</p>


                </div>
            </div>
        </div>
    );
}

export default BookDetails;