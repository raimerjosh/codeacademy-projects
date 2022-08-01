import React from "react";

export const Tile = ({ contact }) => {
  const contactValues = Object.values(contact);
  
  return (
    <div className="tile-container">
      {contactValues.map((value, i) => (
        <p key={i} className={`${i === 0 ? "tile-title" : ""} tile`}>
          {value}
        </p>
      ))}
    </div>
  );
};

