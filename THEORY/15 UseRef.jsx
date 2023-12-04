// React useRef Hook


// The useRef Hook allows you to persist values between renders.

// It can be used to store a mutable value that does not cause a re-render when updated.

// It can be used to access a DOM element directly.

// Does Not Cause Re-renders
// If we tried to count how many times our application renders using the useState Hook, 
// we would be caught in an infinite loop since this Hook itself causes a re-render.

// To avoid this, we can use the useRef Hook.
// Use useRef to track application renders.
// useRef() only returns one item. It returns an Object called current.
// When we initialize useRef we set the initial value: useRef(0).

// It's like doing this: const count = {current: 0}. We can access the count by using count.current.
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//******************************************************************** */
// Accessing DOM Elements
// In general, we want to let React handle all DOM manipulation.

// But there are some instances where useRef can be used without causing issues.

// In React, we can add a ref attribute to an element to access it directly in the DOM.
// Use useRef to focus the input:

import { useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//******************************************************** */
// Tracking State Changes
// The useRef Hook can also be used to keep track of previous state values.

// This is because we are able to persist useRef values between renders.

// Above statement means that the previousInputValue.current will not be immediately updated. 
// It will only be updated the next time when the component re-renders.
// At first input, the previousInputValue.current will show nothing, only after the second input, 
// the component will get re-rendered and the previousInputValue.current will be updated to the previous value.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2> 
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//*************************************************** */
// In this example, the useRef hook is used to access the input element directly without needing to query the DOM
// the ref can be used to access other properties and methods of the DOM element, 
// such as setting the value of the input field to an empty string when the button is clicked.

import React, { useRef, useEffect } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Access the input element directly using the ref
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current.value = ""}>Clear</button>
    </div>
  );
}

export default App;