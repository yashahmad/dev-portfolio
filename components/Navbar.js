import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isopen, setIsopen] = useState(true);

    const handleToggle = (e) => {
        setIsopen(!isopen);
    }

    return (
        <>
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-3 mx-auto">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/">
                                <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-2xl hover:text-gray-700 dark:hover:text-gray-300">Dev Portfolio</a>
                            </Link>
                        </div>

                        <div className="flex md:hidden">
                            <button type="button" onClick={handleToggle} className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className={"items-center md:flex" +(isopen ? ' hidden' : '')}>
                        {/* <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                            <a className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#">Home</a>
                            <a className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#products">Products</a>
                            <a className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#services">Services</a>
                            <a className="my-1 text-sm leading-5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400 hover:underline md:mx-4 md:my-0" href="#contact">Contact</a>
                        </div> */}

                        <div className="flex items-center py-2 -mx-1 md:mx-0">
                            <Link href="/app">
                                <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-gray-500 rounded-md hover:bg-blue-600 md:mx-2 md:w-auto">Login</a>
                            </Link>
                            <Link href="/">
                                <a className="block w-1/2 px-3 py-2 mx-1 text-sm font-medium leading-5 text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 md:mx-0 md:w-auto">Join free</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    );
};