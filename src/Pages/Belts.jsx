import React from "react";
import { belts } from "../date";

function Belts() {
  return (
    <div>
      {belts.map((title) => (
        <div key={title.id}>
          <img src={title.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Belts;
