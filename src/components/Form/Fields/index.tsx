import React from "react";
import "./styles.scss";

interface Fields {
  label: string, 
  size: string, 
  type: string, 
  options?: Array<{value: string; label: string }>, 
  value: string, 
  onChange: (e: string) => void, 
  validation?: (personalNumber: string | number) => void;
}

const Field = (props: Fields) => {
  const { label, size, type, options, value, onChange, validation } = props
  const sizeMap = {
    "1/2": "large",
    "1/3": "medium",
    "2/3": "modal"
  }

  switch (type) {
    case "text":
      return (
        <div className={`input-container ${sizeMap[size]}`}>
          <label>{label}</label>
          <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
          {/* {validation && !validation(value) && <span className="error">Campo inválido</span>} */}
        </div>
      );

    case "select":
      return (
        <div className={`input-container ${sizeMap[size]}`}>
          <label>{label}</label>
          <select value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option: { value: string; label: string }, index: React.Key) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );

    default:
      break;
  }
};

export default Field;
