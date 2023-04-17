import React from "react";
import { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("red");
  return (
    <div>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("yellow")}>
        YELLOW
      </button>
    </div>
  );
};

export default Color;
