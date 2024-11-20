import { useLoaderData } from "react-router-dom";
import { getList } from "../../../public/utilities";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";

const PagesToRead = () => {
    const [listofReadBooks, setReadBooksList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        // console.log(data);
        const readList = getList("Read");
        // console.log(readList);
        if (readList.length > 0) {
            const isExist = data.filter(data => readList.includes(data.bookId));
            // console.log(isExist);
            if (isExist) {
                setReadBooksList(isExist);
            }
        }
    }, [data]);
    console.log(listofReadBooks);
    return (
        <div className="flex justify-center mt-40">
            {
                listofReadBooks.length > 0 ? <div>
                    <BarChart width={800} height={400} data={listofReadBooks}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="totalPages" fill="#8884d8"></Bar>
                    </BarChart>
                </div> : <div></div>
            }
            {/* {listofReadBooks.length} */}
        </div>
    );
};

export default PagesToRead;