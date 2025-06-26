import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function FilterBar() {
    const [salary, setSalary] = useState(65000);
    const [maxSalary, setMaxSalary] = useState(80000);

    return (
        <div className="flex flex-wrap items-center justify-between gap-6 px-6 md:px-24 py-4 bg-white shadow rounded-xl mt-4 font-satoshi text-[#686868]">

            {/* Search Input */}
            <div className="flex items-center border-r border-gray-300 pr-4 w-full md:w-64 font-semibold">
                <FaSearch className="mr-2" />
                <input
                    type="text"
                    placeholder="Search by Job Title, Role"
                    className="outline-none w-full text-[16px] text-gray-600 placeholder-gray-400"
                />
            </div>

            {/* Location Dropdown */}
            <div className="flex items-center border-r border-gray-300 pr-4 pl-4 font-medium">
                <FaMapMarkerAlt className="mr-2" />
                <select className="outline-none bg-transparent text-[16px]" aria-label="Preferred Location">
                    <option>Preferred Location</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                </select>
            </div>

            {/* Job Type Dropdown */}
            <div className="flex items-center border-r border-gray-300 pr-4 pl-4 font-medium">
                <FaUser className="mr-2" />
                <select className="outline-none bg-transparent text-[16px]" aria-label="Job Type">
                    <option>Job type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Remote</option>
                </select>
            </div>

            {/* Salary Range Slider */}
            <div className="flex items-center pl-4 text-[#222222] font-semibold">
                <span className="text-[16px] mr-4 text-black whitespace-nowrap">Salary Per Month</span>
                <input
                    type="range"
                    min="50000"
                    max="80000"
                    step="5000"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-40 text-black"
                />
                <span className="text-[16px] ml-2 text-black whitespace-nowrap">
                    ₹{salary / 1000}-{maxSalary/1000  }k
                </span>
            </div>
        </div>
    );
}
