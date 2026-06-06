"use client";

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const DropdownSelect = ({
  label,
  options,
  name,
  onChange,
}: {
  label: string;
  options: string[];
  name: string;
  onChange?: (value: string) => void;
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((d) => d !== name) : [...prev, name],
    );
  };

  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-900 mb-3">{label}</h3>
      <button
        onClick={() => toggleDropdown(name)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg text-left text-gray-700 hover:border-gray-400 transition flex items-center justify-between bg-white"
      >
        <span>{options[0]}</span>
        <BiChevronDown
          size={20}
          className={`text-gray-500 transition ${
            openDropdowns.includes(name) ? "rotate-180" : ""
          }`}
        />
      </button>
      {openDropdowns.includes(name) && (
        <div className="absolute z-10 w-64 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange?.(option);
                toggleDropdown(name);
              }}
              className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-gray-700 first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownSelect;
