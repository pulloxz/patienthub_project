import React from "react";
import "./BlackCard.css"; // Import the CSS file for styling

const BlackCard = ({ text,additionalText }) => {
  return (
    <div className="black-card">
      <p className="text">{text}</p>
      <div className="line"></div>
      <p className="additional_text">{additionalText}</p>
    </div>
  );
};

export default BlackCard;