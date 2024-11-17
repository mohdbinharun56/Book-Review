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
                    <h1 className="text-[#131313] font-bold text-4xl font-serif mb-5">{bookDetails.bookName}</h1>
                    <p className="text-base text-[#767575] font-medium mb-5">By: {bookDetails.author}</p>
                    <hr className="mb-5"/>
                    <span className="font-sans text-xl font-medium text-[#131313]">{bookDetails.category}</span>
                    <hr className="mt-5"/>
                    <p className="mt-5 text-[#767575] text-base font-thin mb-5"><span className="font-bold font-sans text-base text-[#131313] mr-2">Review: </span>{bookDetails.review}</p>
                    <p className="flex gap-20 text-base font-bold mb-5"> Tag: <span className="flex gap-10">{
                        bookDetails.tags ? bookDetails.tags.map((tag, idx) => <p key={idx} className="text-[#23BE0A] cursor-pointer font-medium hover:underline">#{tag}</p>) : <p>Loading....</p>
                    }</span></p>
                    <hr />
                    <p className="mt-5 text-[#767575] text-base font-normal">Number of Pages: <span className="font-semibold text-[#131313]">{bookDetails.totalPages}</span></p>
                    <p className="mt-5 text-[#767575] text-base font-normal">Publisher: <span className="font-semibold text-[#131313]">{bookDetails.publisher}</span></p>
                    <p className="mt-5 text-[#767575] text-base font-normal">Year of Publishing: <span className="font-semibold text-[#131313]">{bookDetails.yearOfPublishing}</span></p>
                    <p className="mt-5 text-[#767575] text-base font-normal">Rating: <span className="font-semibold text-[#131313]">{bookDetails.rating}</span></p>


                </div>
            </div>
        </div>
    );
}

export default BookDetails;