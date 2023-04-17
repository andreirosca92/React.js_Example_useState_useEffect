import React from "react";
import { useState, useEffect } from "react";
const Car = () => {
  //dummy data
  const cars = [
    { id: 1, brand: "Ford", model: "Mustang", year: "1964", color: "blue" },
    { id: 2, brand: "Ford", model: "Fiesta", year: "2022", color: "red" },
    { id: 3, brand: "Ford", model: "Focus", year: "2020", color: "blue" },
    { id: 4, brand: "Ford", model: "Fiesta", year: "2003", color: "black" },
  ];
  const [brand, setBrand] = useState(cars[0].brand);
  const [model, setModel] = useState(cars[0].model);
  const [year, setYear] = useState(cars[0].year);
  const [color, setColor] = useState(cars[0].color);

  const modello = "Fiesta";
  const anno = "2022";
  useEffect(() => {
    setTimeout(() => {
      setModel(modello);
      setColor("red");
      setYear(anno);
    }, 5000);
  }, [modello, anno]);

  function setState() {
    if (brand === "Ford") {
      setBrand("Honda");
      setModel("Jazz");
      setYear("2020");
    } else {
      setBrand("Ford");
      setModel("Mustang");
      setYear("1964");
    }
  }

  return (
    <div>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
      <br />
      <button type="button" onClick={() => setState()}>
        Change
      </button>
      <button type="button" onClick={() => setState()}>
        Undo
      </button>
    </div>
  );
};

export default Car;
