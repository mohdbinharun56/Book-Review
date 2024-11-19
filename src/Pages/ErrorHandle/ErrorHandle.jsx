import { NavLink } from "react-router-dom";

const ErrorHandle = () => {
    return (
        <div>
            <div className="flex flex-col w-fit mx-auto my-40 text-center">
                <h1 className="mb-5 font-bold text-6xl text-[#131313] font-sans">4O4</h1>
                <p className="text-3xl font-medium ">This page is Not Found. <br /> <span className="text-xl font-normal mt-0">Please check & Try again.</span></p>
                <NavLink to="/" className="text-blue-500  link mt-2">Back to Home</NavLink>
            </div>
            
        </div>
    );
};

export default ErrorHandle;