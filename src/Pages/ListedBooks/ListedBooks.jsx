
const ListedBooks = () => {
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
        </div>
    );
};

export default ListedBooks;