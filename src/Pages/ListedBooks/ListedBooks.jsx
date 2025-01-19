import { useEffect, useRef, useState } from "react";
import { getList } from "../../../public/utilities";
import { useLoaderData } from "react-router-dom";
import BooksList from "../../Components/BooksList/BooksList";

const ListedBooks = () => {
    const [listBooks, setListBooks] = useState([]);
    const [booksData, setBooksData] = useState([]);
    const [sortedBooks, setSortedBooks] = useState([]);

    const data = useLoaderData();
    const clickRead = useRef();

    useEffect(() => {
        clickRead.current.click();
    }, []);

    useEffect(() => {
        setBooksData(data);
    }, [data]);

    useEffect(() => {
        const exist = booksData.filter(book => listBooks.includes(book.bookId));
        setSortedBooks(exist);
    }, [booksData, listBooks]);

    const handleList = (key) => {

        if (key === "Read") {
            const getSaveBooks = getList(key);
            if (getSaveBooks.length > 0) {
                setListBooks(getSaveBooks);
            } else {
                setListBooks([]);
            }
        }
        else if (key === "Wishlist") {
            const getSaveBooks = getList(key);
            if (getSaveBooks.length > 0) {
                setListBooks(getSaveBooks);
            } else {
                setListBooks([]);
            }
        }
    }

    const handleSortChange = (e) => {
        const sortField = e.target.value;

        let sorted = [...sortedBooks];
        if (sortField === "Rating") {
            sorted.sort((a, b) => b.rating - a.rating);
        } else if (sortField === "number-of-pages") {
            sorted.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortField === "publisher-year") {
            sorted.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
        setSortedBooks(sorted);
    };

    return (
        <div>
            <h1 className="text-center font-bold text-2xl bg-base-200 rounded-md mt-10 p-10">Books</h1>

            <div className="mt-10 flex justify-center">
                <select
                    onChange={handleSortChange}
                    className="text-white p-2 outline-none text-center rounded-lg bg-green-500 font-semibold text-xl"
                >
                    <option value="" className=" bg-gray-200 text-black">Sort-By</option>
                    <option value="Rating" className=" bg-gray-200 text-black">Rating</option>
                    <option value="number-of-pages" className=" bg-gray-200 text-black">Number of pages</option>
                    <option value="publisher-year" className=" bg-gray-200 text-black">Publisher year</option>
                </select>
            </div>

            <div className="border-b">
                <button ref={clickRead} onClick={() => handleList("Read")} className="mr-2 border p-2">
                    Read Books
                </button>
                <button onClick={() => handleList("Wishlist")} className="mr-2 border p-2">
                    Wishlist
                </button>
            </div>

            <div>
                {sortedBooks.map(book => (
                    <BooksList key={book.bookId} book={book}></BooksList>
                ))}
            </div>
        </div>
    );
};

export default ListedBooks;
