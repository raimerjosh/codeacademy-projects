import React from "react";
import { Tile } from "../../components/tile/Tile";

export const TileList = ({contactArray}) => {
  
  return (
    <div>
      {contactArray.map((contact, i ) => {
        <Tile contact={contact} key={i}/>
      })}
    </div>
  );
};
