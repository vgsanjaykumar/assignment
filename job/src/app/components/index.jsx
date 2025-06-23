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
        <div className="bg-[#f9fafb] min-h-screen">
            <Navbar />
            <FilterBar />
            <div className="flex flex-wrap gap-6 justify-center px-6 py-6">
                {jobs.map((job, idx) => (
                    <JobCard key={idx} {...job} onApply={() => setShowModal(true)} />
                ))}
            </div>

            {showModal && <JobModal onClose={() => setShowModal(false)} />}
        </div>
    );
}
