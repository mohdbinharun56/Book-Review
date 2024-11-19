// import { faBookSkull } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { getList, setList } from "../../../public/utilities";

const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState({});
    const { bookId } = useParams();
    const bookIdInt = parseInt(bookId);
    // console.log(typeof bookId,typeof bookIdInt);

    useEffect(() => {
        fetch('/books.json') // fetch all books from books.json
            .then(res => res.json())
            .then(data => {
                const detailsBook = data.find(book => book.bookId === bookIdInt);
                // console.log(detailsBook);
                setBookDetails(detailsBook);
            })
            .catch(error => toast(error));

    }, [bookIdInt]);

    const alertNotifyRead = (key, id) => {
        const readList = getList(key);
        const isExistReadList = readList.includes(id);

        const getBooksWishlist = getList("Wishlist");
        const exist = getBooksWishlist.includes(id);
        if (exist) {
            toast("its already been added into Wishlist and this Book will not be added to the Read list.");
        }
        else if(isExistReadList){
            toast('This Book is already added in the Read list');
        } else {
            setList(key, id);
            toast("Read Successfully.");
        }
        // const getBooksList = getList(key);
        // console.log(getBooksList);
    }
    const alertNotifyWishlist = (key, id) => {
        const wishlist = getList(key);
        const isExistWishlist = wishlist.includes(id);
        const getBooksList = getList("Read");
        // console.log("read books",getBooksList);
        const exist = getBooksList.includes(id);
        // console.log(exist);
        if (exist) {
            toast("its already been added into Read list and this Book will not be added to the Wishlist.");
        }else if(isExistWishlist){
            toast('This Book is already added in the Wishlist')
        } else {
            setList(key, id);
            toast("Added book to Wishlist.");
        }
        // console.log(key,id);
    }

    return (
        <div>
            {/* <h1>Book Details: {bookDetails.author}</h1> */}
            <div className="mt-20 mb-10 flex flex-col mx-auto w-fit md:flex-row gap-20">
                <div className="lg:bg-base-200 lg:p-20 lg:w-1/3 lg:rounded-lg lg:shadow-xl">
                    <img src={bookDetails.image} alt={bookDetails.bookName} width={500} height={500} />
                </div>
                <div>
                    <h1 className="text-[#131313] font-bold text-4xl font-serif mb-5">{bookDetails.bookName}</h1>
                    <p className="text-base text-[#767575] font-medium mb-5">By: {bookDetails.author}</p>
                    <hr className="mb-5" />
                    <span className="font-sans text-xl font-medium text-[#131313]">{bookDetails.category}</span>
                    <hr className="mt-5" />
                    <p className="mt-5 text-[#767575] text-base font-thin mb-5"><span className="font-bold font-sans text-base text-[#131313] mr-2">Review: </span>{bookDetails.review}</p>
                    <p className="flex gap-20 text-base font-bold mb-5"> Tag: <span className="flex gap-10">{
                        bookDetails.tags ? bookDetails.tags.map((tag, idx) => <p key={idx} className="text-[#23BE0A] cursor-pointer font-medium hover:underline">#{tag}</p>) : <p>Loading....</p>
                    }</span></p>
                    <hr />
                    <p className="mt-5 text-[#767575] text-base font-normal">Number of Pages: <span className="font-semibold text-[#131313]">{bookDetails.totalPages}</span></p>
                    <p className="mt-5 text-[#767575] text-base font-normal">Publisher: <span className="font-semibold text-[#131313]">{bookDetails.publisher}</span></p>
                    <p className="mt-5 text-[#767575] text-base font-normal">Year of Publishing: <span className="font-semibold text-[#131313]">{bookDetails.yearOfPublishing}</span></p>
                    <p className="mt-5 text-[#767575] text-base font-normal">Rating: <span className="font-semibold text-[#131313]">{bookDetails.rating}</span></p>

                    <div className="mt-10">
                        <Link onClick={() => alertNotifyRead("Read", bookIdInt)} className="px-7 py-4 border border-[#757676] rounded-md mr-3">Read</Link>
                        <Link onClick={() => alertNotifyWishlist("Wishlist", bookIdInt)} className="bg-[#50B1C9] text-white font-bold text-base px-7 py-4 border border-[#50B1C9] rounded-md mr-3">Wishlist</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;