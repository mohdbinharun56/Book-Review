import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink className="mt-2" to="/">Home</NavLink></li>
                        <li><NavLink className="mt-2" to="/listedbooks">Listed Books</NavLink></li>
                        <li><NavLink className="mt-2" to="/pagestoread-analysis">Pages to Read</NavLink></li>
                        <li><NavLink className="mt-2" to="/about-us">About Us</NavLink></li>
                        <li><NavLink className="mt-2" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-3xl">Book Vibe</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink className="bg-white mr-3" to="/">Home</NavLink></li>
                    <li><NavLink className="bg-white mr-3" to="/listedbooks">Listed Books</NavLink></li>
                    <li><NavLink className="bg-white mr-3" to="/pagestoread-analysis">Pages to Read</NavLink></li>
                    <li><NavLink className="bg-white mr-3" to="/about-us">About Us</NavLink></li>
                    <li><NavLink className="bg-white mr-3" to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn mr-3 bg-green-500 text-white hover:bg-green-950 duration-1000">Sign In</Link>
                <a className="btn mr-4 bg-sky-500 text-white hover:bg-sky-950 duration-1000">Sign Up</a>
            </div>
        </div>
    );
};

export default Header;