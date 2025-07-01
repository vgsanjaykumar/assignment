"use client"; 

import { useState } from "react";
import Navbar from "./Navbar";
import FilterBar from "./FilterBar";
import JobCard from "./Jobcards";
import JobModal from "./JobModal";


const jobs = [
    { company: "Amazon", role: "Full Stack Developer", icon: "/amazon logo.jpg" },
    { company: "Tesla", role: "Node Js Developer", icon: "/tesla logo.webp" },
    { company: "Swiggy", role: "UX/UI Designer", icon: "/swiggy logo.png" },
    { company: "Amazon", role: "Full Stack Developer", icon: "/amazon logo.jpg" },
    { company: "Tesla", role: "Node Js Developer", icon: "/tesla logo.webp" },
    { company: "Swiggy", role: "UX/UI Designer", icon: "/swiggy logo.png" },
    { company: "Tesla", role: "Node Js Developer", icon: "/tesla logo.webp" },
    { company: "Swiggy", role: "UX/UI Designer", icon: "/swiggy logo.png" },
];

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="bg-[#f9fafb] min-h-screen w-full">
            <div className="h-[214px] bg-white shadow">
                <Navbar />
                <FilterBar />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4  ">
                    {jobs.map((job, idx) => (
                        <JobCard key={idx} {...job} onApply={() => setShowModal(true)} />
                    ))}
                </div>
            </div>

            {showModal && <JobModal onClose={() => setShowModal(false)} />}
        </div>
    
    );
}
