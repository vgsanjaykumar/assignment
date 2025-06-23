import { FaSearch, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function FilterBar() {
    return (
        <div className="flex flex-wrap items-center justify-between gap-6 px-6 md:px-24 py-4 bg-white shadow rounded-xl mt-4">

            <div className="flex items-center border-r border-gray-300 pr-4 w-full md:w-64">
                <FaSearch className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Search By Job Title, Role"
                    className="outline-none w-full text-[16px] text-gray-700"
                />
            </div>

            <div className="flex items-center border-r border-gray-300 pr-4 pl-4 text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                <select className="outline-none bg-transparent text-[16px]">
                    <option>Preferred Location</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                </select>
            </div>

       
            <div className="flex items-center border-r border-gray-300 pr-4 pl-4 text-gray-600">
                <FaUser className="mr-2" />
                <select className="outline-none bg-transparent text-[16px]">
                    <option>Job type</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Remote</option>
                </select>
            </div>

           
            <div className="flex items-center pl-4 text-gray-600">
                <div className="text-[16px] mr-4 text-black whitespace-nowrap">Salary Per Month</div>
                <input
                    type="range"
                    min="50000"
                    max="80000"
                    step="5000"
                    defaultValue="65000"
                    className="w-40"
                />
                <div className="text-[16px] ml-2 text-black whitespace-nowrap">₹50k - ₹80k</div>
            </div>
        </div>
    );
}
