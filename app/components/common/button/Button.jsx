import React from "react";
import "./button.css";

const Button = ({ label, icon, onClick, customStyles }) => {
  return (
    <div>
      <button style={customStyles} onClick={onClick} className="common-btn">
        {icon && <span className="btn-icon">{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default Button;
