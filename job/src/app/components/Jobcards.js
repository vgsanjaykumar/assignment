import { FaUser, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import Image from "next/image";

export default function JobCard({ company, role, icon, onApply }) {
    return (
        <div className="bg-white rounded-[12px] shadow-md p-5 w-full sm:w-[48%] lg:w-[315px] lg:h-[360px] hover:shadow-lg transition duration-300">
      
            <div className="flex items-center justify-between">
                <div className="relative h-[83.46px] w-[82px]">
                    <Image
                        src={icon}
                        alt={company}
                        layout="fill"
                        objectFit="contain"
                        className="rounded"
                    />
                </div>
                <span className="text-xs font-medium bg-blue-100 text-gray-800 px-2 py-1 rounded-full">
                    24h Ago
                </span>
            </div>

            <h3 className="text-lg font-semibold mt-4 text-gray-900">{role}</h3>

           
            <p className="text-[16px] text-gray-600 flex flex-wrap items-center gap-2 mt-2">
                <span className="flex items-center gap-1">
                    <FaUser className="text-gray-500" /> 1-3 yr Exp
                </span>
                <span className="flex items-center gap-1">
                    <FaBuilding className="text-gray-500" /> Onsite
                </span>
                <span className="flex items-center gap-1">
                    <FaMoneyBillWave className="text-gray-500" /> 12 LPA
                </span>
            </p>

            
            <ul className="text-[14px] text-gray-500 mt-3 space-y-1 leading-relaxed">
                <li>• A user-friendly interface lets you browse stunning photos and videos</li>
                <li>• Filter destinations based on interests and travel style</li>
            </ul>

           
            <button
                onClick={onApply}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white mt-4 py-2 rounded-xl text-sm font-medium">
                Apply Now
            </button>
        </div>
    );
}
