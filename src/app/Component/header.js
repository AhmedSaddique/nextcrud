"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-semibold">
                    <Link href="/">Brand</Link>
                </div>
                <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <button type="button">
                        Menu
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:block`}>
                    <ul className="flex flex-col md:flex-row md:space-x-4">
                        <Link href="/" className="block py-2 px-4 hover:bg-gray-700">insertCard</Link>
                        <Link href="/insert" className="block py-2 px-4 hover:bg-gray-700">Insert</Link>
                        <Link href="/imagecard" className="block py-2 px-4 hover:bg-gray-700">Imagecard</Link>
                        <Link href="/imageinsert" className="block py-2 px-4 hover:bg-gray-700">ImageInsert</Link>
                        <Link href="/upload" className="block py-2 px-4 hover:bg-gray-700">upload</Link>
                        <Link href="/login" className="block py-2 px-4 hover:bg-gray-700">Login</Link>
                        <Link href="/signup" className="block py-2 px-4 hover:bg-gray-700">Signup</Link>


                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
