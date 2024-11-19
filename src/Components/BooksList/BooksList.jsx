import { faFileAlt, faMapMarkerAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BooksList = ({ book }) => {
    const {bookId, image, bookName, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book;
    console.log(book);
    return (
        <>
            <div className="flex flex-col md:flex-row gap-10 my-10 border-2 border-gray-400 p-10 rounded-xl shadow shadow-gray-400">
                <div className="md:bg-[#efeeee] mx-auto md:mx-0 my-auto p-10 rounded-md">
                    <figure>
                        <img src={image} alt={bookName} className='w-32' />
                    </figure>
                </div>
                <div>
                    <h1 className="font-bold text-2xl font-sans mb-2">{bookName}</h1>
                    <p className="text-base font-medium text-[#575656] font-serif">By: {author}</p>
                    <div className="flex gap-5 mt-3">
                        <p className='flex gap-10'><span className="font-bold text-base text-[#131313]">Tag</span> <span>{tags.map((tag, index) => <span key={index} className='text-[#23BE0A] font-medium text-sm'>{tag}</span>)}</span></p>
                        <p className="text-[#7f6969] mb-2"><FontAwesomeIcon icon={faMapMarkerAlt} /> Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <div className="flex gap-10 text-[#3e3c3c] text-base font-serif font-normal mb-2">
                        <p> <FontAwesomeIcon icon={faUser}/> publisher: {publisher}</p>
                        <p><FontAwesomeIcon icon={faFileAlt}/> Page {totalPages}</p>
                    </div>

                    <hr className="mt-3" />

                    <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                        <p className="text-blue-500 bg-blue-300 rounded-full p-3 font-sans text-sm lg:text-base">Category: {category}</p>
                        <p className="text-[#c78118] bg-[#d7bb91] rounded-full p-3 font-sans text-sm lg:text-base">Rating: {rating}</p>
                        <Link to={`/bookdetails/${bookId}`} className="text-white bg-green-500 rounded-full p-3 font-sans text-xl font-medium">View Details</Link>
                    </div>

                </div>
            </div>
        </>
    );
}

BooksList.propTypes = {
    book: PropTypes.object
}
export default BooksList;