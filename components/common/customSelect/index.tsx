import React, { useState } from "react";

interface IProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}
const CustomSelect = ({ options, value, onChange, label }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  
  const handleOptionClick = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearchValue("");
  };

  const handleInputFocus = () => {
    setSearchValue(value);
    setIsOpen(true); 
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-1 px-3 relative">
      {label && <label>{label}</label>}
      {isOpen ? (
        <input
          type="text"
          placeholder="Choose speciality"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
          className="cursor-text border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
        />
      ) : (
        <div
          id="custom-select"
          onClick={handleInputFocus}
          className="cursor-pointer border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
        >
          {value ? value : "Choose speciality"}
        </div>
      )}
      {isOpen && (
        <div
          className="absolute max-h-32 h-auto top-full left-0 mt-1 bg-white border rounded-xl shadow-lg w-full z-10 options overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
         {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-blue-50 rounded-xl"
                onClick={() => {
                    handleOptionClick(option)}}
              >
                {option}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
