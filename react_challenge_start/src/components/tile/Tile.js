import React from "react";

export const Tile = ({contact}) => {

  const contactValues = Object.values(contact);

  return (
    <div className="tile-container">

      {contactValues.map((value) => {
      
      <div>
        <p className="tile-title">{value}</p>
        <p className="tile"></p>
        <p className="tile"></p>
      </div>
      
    })}
    </div>
  );
};
      