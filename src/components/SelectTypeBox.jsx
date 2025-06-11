import React, { useState, useEffect } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function SelectTypeBox({ options, labelName, value, setValue }) {
  const [selectedOptions, setSelectedOptions] = useState(value || []);
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item) => item !== option)
      : [...selectedOptions, option];

    setSelectedOptions(updatedOptions);
    setValue(updatedOptions); // Update the parent value
  };

  useEffect(() => {
    setSelectedOptions(value || []);
  }, [value]);

  return (
    <div className="w-full mx-auto mt-3">
      {/* Label + Input */}
      <div className="relative">
        <label className="font-semibold">{labelName}</label>
        <input
          type="text"
          value={selectedOptions.join(', ')}
          readOnly
          onClick={() => setShowOptions(!showOptions)}
          className="w-full py-3 px-3 outline-none border border-gray-900 rounded-[10px] mt-1 bg-white text-gray-900"
          placeholder="All Possible"
        />
        <div
          onClick={() => setShowOptions(!showOptions)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-900"
        >
          {showOptions ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
        </div>
      </div>

      {/* Dropdown options */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          showOptions ? 'max-h-[500px] mt-3' : 'max-h-0'
        }`}
      >
        <div className="space-y-2">
          {options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 bg-gray-900 px-4 py-2 rounded-lg text-white"
            >
              <input
                type="checkbox"
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
                className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-300 rounded focus:ring-blue-500"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
