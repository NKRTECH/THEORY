// React useState Hook
// The React useState Hook allows us to track state in a function component.

// State generally refers to data or properties that need to be tracking in an application.

// Import useState
import { useState } from "react";

// Notice that we are destructuring useState from react as it is a named export.
// Initialize useState
// We initialize our state by calling useState in our function component.

// useState accepts an initial state and returns two values:
// The current state.
// A function that updates the state.
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
// Notice that again, we are destructuring the returned values from useState.

// The first value, color, is our current state.

// The second value, setColor, is the function that is used to update our state.

// Read State
// We can now include our state anywhere in our component.
import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
//output: My favorite color is red!

// Update State
// To update our state, we use our state updater function.
// We should never directly update state. Ex: color = "red" is not allowed.
// Use a button to update the state:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);
//output(initially): My favorite color is red!
//after clicking button: My favorite color is blue!

// What Can State Hold
// The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
// We could create multiple state Hooks to track individual values.
// Create a single Hook that holds an object:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
//output: My Ford
//It is a red Mustang from 1964.

// Updating Objects and Arrays in State
// When state is updated, the entire state gets overwritten.

// What if we only want to update the color of our car?

// If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.

// We can use the JavaScript spread operator to help us.

// Example:
import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);
//output: My Ford
//It is a blue Mustang from 1964.

// Because we need the current value of state, we pass a function into our setCar function. 
// This function receives the previous value.
// We then return an object, spreading the previousState and overwriting only the color.
