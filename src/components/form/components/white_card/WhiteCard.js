import React from "react";
import "./WhiteCard.css"; // Import the CSS file for styling
import FormCard from "../form/FormCard";

const WhiteCard = ({ text, additionalText }) => {
  return (
    <div className="white-card">
      <FormCard />
    </div>
  );
};

export default WhiteCard;
