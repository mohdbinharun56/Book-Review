import { useEffect, useRef, useState } from "react";
import { getList } from "../../../public/utilities";
import { useLoaderData } from "react-router-dom";
import BooksList from "../../Components/BooksList/BooksList";

const ListedBooks = () => {
    const [listBooks, setListBooks] = useState([]);
    const [booksData, setBooksData] = useState([]);
    const [books, setBooks] = useState([]);
        
    const data = useLoaderData();
    const clickRead = useRef();
    useEffect(()=>{
        clickRead.current.click();
    },[])

    useEffect(()=>{
        setBooksData(data);
    },[data]);
    
    useEffect(()=>{
        const exist = booksData.filter(book=> listBooks.includes(book.bookId));
        if(exist.length>0){
            setBooks(exist);
        }
    },[booksData,listBooks])

    // console.log(books);

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

    return (
        <div>
            <h1 className="text-center font-bold text-2xl bg-base-200 rounded-md mt-10 p-10">Books</h1>

            <div className="mt-10 flex justify-center">
                <select className="text-white p-2 outline-none border border-green-500 text-center rounded-lg bg-green-500 font-semibold text-xl">
                    <option value="">Sort-By</option>
                    <option value="">category-1</option>
                    <option value="">category-2</option>
                </select>
            </div>

            <div className="border-b">
                <button ref={clickRead} onClick={() => handleList("Read")} className="mr-2 border p-2">Read Bookd</button>
                <button onClick={() => handleList("Wishlist")} className="mr-2 border p-2">Wishlist</button>
            </div>

            {/* <div>{listBooks.length}</div> */}
            {/* <div>
                {
                    listBooks.length === 0 ?
                        <p className="text-3xl mt-5 text-center">The Books List is Empty. Please Read or add Wishlist First.</p> :
                        listBooks.map(id => <p key={id}>{id}</p>)
                        // booksData.filter(book=>book.bookId === ))
                }
            </div> */}
            <div>
               {
                    books.map(book=><BooksList key={book.bookId} book={book}></BooksList>) 
               }
            </div>
        </div>
    );
};

export default ListedBooks;