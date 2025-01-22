import { useState } from "react";

import "./customSelectStyles.css";

type CustomSelectProps = {
  selectedOption?: string;
  options: string[];
  placeholder?: string;
  onOptionClick: (option: string) => void;
  style?: React.CSSProperties;
};

export default function CustomSelect({
  selectedOption,
  options,
  placeholder,
  onOptionClick,
  style,
}: CustomSelectProps) {
  const [isDropdownOpen, setDropdownState] = useState(false);
  return (
    <>
      <div
        className="cs-select-wrapper"
        style={{ ...(style || {}) }}
        onClick={() => setDropdownState(!isDropdownOpen)}
      >
        <div className={`cs-select ${isDropdownOpen ? "open" : ""}`}>
          <div
            className={`cs-select__trigger ${
              !selectedOption ? "placeholder" : ""
            }`}
          >
            <span>{selectedOption || placeholder || "Select a value"}</span>
            <div className="cs-arrow"></div>
          </div>
          <div className="cs-custom-options">
            {options.map((option) => (
              <span
                key={option}
                data-value={option}
                className={`cs-custom-option ${
                  option === selectedOption ? "selected" : ""
                }`}
                onClick={() => onOptionClick(option)}
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
