import Link from "next/link";
import { useState } from "react";

export default function AdminSignin(){
    const [ values, setValues ] = useState({
        email: '',
        password: '',
    });
    const { email, password } = values;

    const handleChange = (name) => (e) => {
        setValues({ ...values, [name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table(values);
    };

    return (
        <div className="flex justify-center py-8 bg-gray-900 h-screen items-center" 
             style={{
                     background: "#ee0979",
                     background: "-webkit-linear-gradient(to right, #ff6a00, #ee0979)",
                     background: "linear-gradient(to right, #ff6a00, #ee0979)"
                }}>
            <div className="w-full max-w-sm">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                    <Link href="/">
                        <a className="flex justify-center block text-gray-700 text-2xl font-bold mb-2">
                            Hintsphere
                        </a>
                    </Link>
                    <div className="flex justify-center">
                        <div className="relative">
                            <img className="inline-block object-cover w-16 h-16 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar"/>
                            <span className="absolute right-0 w-4 h-4 bg-green-600 border-2 border-white rounded-full top-2"></span>
                        </div>
                    </div>
                    <label className="block text-gray-700 text-lg font-bold mb-2 text-center">Register</label>
                    <hr className="mb-3"/>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" value={email} onChange={handleChange('email')} required/>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" value={password} onChange={handleChange('password')} required/>
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="flex items-center justify-center mb-3">
                        <label className="block text-gray-700 text-sm font-bold">Already have an account. 
                            <Link href="/admin/signin">
                                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                                    {' '}Login
                                </a>
                            </Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}