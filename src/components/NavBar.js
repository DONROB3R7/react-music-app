import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(props) {
    const {buttons, active} = props;
    console.log(props);
  return (
    <>
        <nav className="bg-black p-2 mt-0 fixed w-full z-10 top-0">
            <div className="container mx-auto flex flex-wrap items-center">
                <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                    <Link className="text-white no-underline hover:text-white hover:no-underline" to="/">
                        <span className="text-2xl pl-2"><i className="em em-grinning"></i> Space Something</span>
                    </Link>
                </div>
                {buttons ? 
                <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                    <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                        <li className="mr-3">
                            <Link className={`inline-block  no-underline hover:text-gray-200 hover:text-underline py-2 px-4 ${active === 'about-us' ? 'text-white' : 'text-gray-600' }`} to="/about-us">About Us</Link>
                        </li>
                        <li className="mr-3">
                            <Link className={`inline-block  no-underline hover:text-gray-200 hover:text-underline py-2 px-4  ${active === 'faq' ? 'text-white' : 'text-gray-600' }`} to="/faq">FAQ</Link>
                        </li>
                            <li className="mr-3">
                            <Link className={`inline-block  no-underline hover:text-gray-200 hover:text-underline py-2 px-4 ${active === 'contact' ? 'text-white' : 'text-gray-600' }`} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div> : <></> }
            </div>
        </nav>
    </>
  )
}
