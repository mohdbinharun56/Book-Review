import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero bg-base-200 mt-10 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse w-fit">
                <img
                    src="./bannerpng.png"
                    className="md:max-w-72 bg-none" />
                <div className="p-10">
                    <h1 className="md:w-[520px] my-8 text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/listedbooks" className="btn bg-green-500 text-white px-7 hover:bg-green-900 duration-700 transition-all">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;