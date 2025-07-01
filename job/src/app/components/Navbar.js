"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
    const [hovered, setHovered] = useState(false);
    return (
        <nav className="flex flex-wrap justify-center items-center space-x-8  md:px-10  py-8 ">

            <div className="flex items-center space-x-4">
                <Image src="/logo.png" alt="Logo" width={32} height={32} />

            </div>


            <ul className="hidden md:flex items-center space-x-4 text-[#303030] font-[600] ">
                <li className=" cursor-pointer px-4 py-2 transform origin-top-left transition duration-300 hover:scale-110 hover:shadow-md hover:rounded-xl">
                    Home
                </li>


                <li className=" cursor-pointer px-4 py-2 transform origin-top-left transition duration-300 hover:scale-110 hover:shadow-md hover:rounded-xl">Find Jobs</li>
                <li className=" cursor-pointer px-4 py-2 transform origin-top-left transition duration-300 hover:scale-110 hover:shadow-md hover:rounded-xl">Find Talents</li>
                <li className=" cursor-pointer px-4 py-2 transform origin-top-left transition duration-300 hover:scale-110 hover:shadow-md hover:rounded-xl">About Us</li>
                <li className=" cursor-pointer px-4 py-2 transform origin-top-left transition duration-300 hover:scale-110 hover:shadow-md hover:rounded-xl">Testimonials</li>
            </ul>


            <button
                className="relative w-[150px] h-[42px] bg-gradient-to-t from-purple-800 to-purple-500 text-white px-5 py-2 rounded-full shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {/* Create Jobs (initial) */}
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered ? "-translate-y-8 opacity-0" : "translate-y-0 opacity-100"
                        }`}
                >
                    Create Jobs
                </span>

                {/* Login (hover) */}
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${hovered ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        }`}
                >
                    Login
                </span>
            </button>
            );
        </nav>
    );
}
