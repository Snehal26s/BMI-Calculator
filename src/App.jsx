import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (height === "" || weight === "") {
      alert("Please enter height and weight");
      return;
    }

    const heightInMeter = height / 100;
    const bmiValue = (weight / (heightInMeter * heightInMeter)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setCategory("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />

      <div className="buttons">
        <button onClick={calculateBMI}>Calculate</button>
        <button onClick={resetForm}>Reset</button>
      </div>

      {bmi && (
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
          <p>Category: {category}</p>
        </div>
      )}
    </div>
  );
}

export default App;