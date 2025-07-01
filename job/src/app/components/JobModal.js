"use client";

import { useState, useEffect } from "react";
import { MdBusiness, MdLocationOn, MdDateRange } from "react-icons/md";
import {FaMoneyBillWave,FaAlignLeft,FaAngleDoubleRight,FaAngleDoubleDown,} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export default function JobModal({ onClose }) {
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [salaryFrom, setSalaryFrom] = useState("");
    const [salaryTo, setSalaryTo] = useState("");
    const [deadline, setDeadline] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = "auto"; };
    }, []);

    const inputClass = "w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
            <div className="bg-white rounded-2xl shadow-2xl px-8 py-6 w-full max-w-3xl relative">
                <button onClick={onClose} className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl">✕</button>
                <h2 className="text-[24px]  text-center mb-6 text-[#222222] font-[700]">Create Job Opening</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-black font-[600]">
                    <InputWithIcon label="Job Title"  value={jobTitle} onChange={setJobTitle} placeholder="Full Stack Developer" />
                    <InputWithIcon label="Company Name" icon={<MdBusiness />} value={companyName} onChange={setCompanyName} placeholder="Amazon, Microsoft, Swiggy" />
                    <DropdownWithIcon label="Location" icon={<MdLocationOn />} value={location} onChange={setLocation} options={["Bangalore", "Chennai", "Remote"]} />
                    <DropdownWithIcon label="Job Type"  value={jobType} onChange={setJobType} options={["FullTime", "PartTime", "Internship", "Contract"]} />
                    <div>
                        <label className="block text-sm font-medium mb-1">Salary Range</label>
                        <div className="flex gap-2">
                            <InputWithIcon icon={<FaMoneyBillWave />} value={salaryFrom} onChange={setSalaryFrom} placeholder="₹0" type="number" noLabel />
                            <InputWithIcon icon={<FaMoneyBillWave />} value={salaryTo} onChange={setSalaryTo} placeholder="₹12,00,000" type="number" noLabel />
                        </div>
                    </div>
                    <InputWithIcon label="Application Deadline" icon={<MdDateRange />} value={deadline} onChange={setDeadline} type="date" />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Job Description</label>
                    <div className="relative">
                        <FaAlignLeft className="absolute top-3 left-3 text-gray-500" />
                        <textarea
                            className={inputClass + " pt-2 pb-28 text-gray-800"}
                            rows="4"
                            placeholder="Please share a description to let the candidate know more about the job role"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                    <button className="border border-gray-400 rounded-lg px-5 py-2 text-gray-700 hover:bg-gray-100 flex items-center text-[18px] font-[600]">
                        Save Draft <FaAngleDoubleDown className="ml-2" />
                    </button>
                    <button className="bg-blue-500 text-white rounded-lg px-6 py-2 hover:bg-blue-600 flex items-center text-[18px] font-[600] shadow-md">
                        Publish <FaAngleDoubleRight className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function InputWithIcon({ label, icon, value, onChange, placeholder, type = "text", noLabel = false }) {
    return (
        <div>
            {!noLabel && <label className="block text-sm font-medium mb-1">{label}</label>}
            <div className="relative">
                <span className="absolute top-3 left-3 text-gray-500">{icon}</span>
                <input
                    type={type}
                    className={"w-full border border-gray-300 rounded-lg pl-10 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>
        </div>
    );
}

function DropdownWithIcon({ label, icon, value, onChange, options }) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">{label}</label>
            <div className="relative">
                <span className="absolute top-3 left-3 text-gray-500">{icon}</span>
                <select
                    className="w-full border border-gray-300 rounded-lg pl-10 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option disabled value="">{`Choose ${label}`}</option>
                    {options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                    ))}
                </select>
                <IoIosArrowDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
}
