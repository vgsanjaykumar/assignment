import React from "react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex flex-wrap justify-between items-center px-6 md:px-10 py-4 gap-y-4 bg-white shadow-sm">
         
            <div className="flex items-center space-x-2">
                <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                <span className="text-xl font-semibold text-purple-700">desk</span>
            </div>

        
            <ul className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
                <li className="hover:text-purple-600 cursor-pointer">Home</li>
                <li className="hover:text-purple-600 cursor-pointer">Find Jobs</li>
                <li className="hover:text-purple-600 cursor-pointer">Find Talents</li>
                <li className="hover:text-purple-600 cursor-pointer">About Us</li>
                <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
            </ul>

           
            <button className="bg-gradient-to-t from-purple-800 to-purple-500 text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
                Create Jobs
            </button>
        </nav>
    );
}
