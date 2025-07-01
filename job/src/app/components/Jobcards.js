import { FaUser, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import Image from "next/image";

export default function JobCard({ company, role, icon, onApply }) {
    return (
        <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-[316px] hover:shadow-lg transition duration-300">
            {/* Top: Logo + Timestamp */}
            <div className="flex items-center justify-between">
                <div className="relative h-20 w-20">
                    <Image
                        src={icon}
                        alt={company}
                        fill
                        className="object-contain rounded"
                    />
                </div>
                <span className="text-xs font-medium bg-blue-100 text-gray-800 px-2 py-1 rounded-full">
                    24h Ago
                </span>
            </div>

            {/* Job Role */}
            <h3 className="text-xl font-bold mt-4 text-black">{role}</h3>

            {/* Job Details */}
            <div className="text-sm text-[#5A5A5A] flex flex-wrap gap-3 mt-3">
                <span className="flex items-center gap-1">
                    <FaUser /> 1–3 yr Exp
                </span>
                <span className="flex items-center gap-1">
                    <FaBuilding /> Onsite
                </span>
                <span className="flex items-center gap-1">
                    <FaMoneyBillWave /> 12 LPA
                </span>
            </div>

            {/* Description */}
            <ul className="text-sm text-gray-600 mt-4 space-y-1 leading-relaxed">
                <li>• A user-friendly interface lets you browse stunning photos and videos</li>
                <li>• Filter destinations based on interests and travel style</li>
            </ul>

            {/* Apply Button */}
            <button
                onClick={onApply}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-5 py-2 rounded-xl text-sm font-bold">
                Apply Now
            </button>
        </div>
    );
}
