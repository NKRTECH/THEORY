
// Props are arguments passed into React components.

// Props are passed to components via HTML attributes.

// props stands for properties.

// Props allow us to pass data from one component to another.

// Props are read-only. You will get an error if you try to change their value.
// Props are immutable.

// React Props are like function arguments in JavaScript and attributes in HTML.

// To send props into a component, use the same syntax as HTML attributes:

// Example
// Add a "brand" attribute to the Car element:
const myElement = <Car brand="Ford" />;

// The component receives the argument as a props object:
// Example
// Use the brand attribute in the component:

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;}
//output: I am a Ford!

//*************************************** */
// Pass Data
// Props are also how you pass data from one component to another, as parameters.

// Example
// Send the "brand" property from the Garage component to the Car component:

function Car(props) {
  return <h2>That is a { props.brand }!</h2>;
}
function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
//Output: Who lives in my garage? That is a Ford!

//**************************************** */
// If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:

// Example
// Create a variable named carName and send it to the Car component:

function Car(props) {
  return <h2>That is a { props.brand }!</h2>;
}

function Garage() {
  const carName = "SUZUKI";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carName } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
//Output: Who lives in my garage? That is a SUZUKI

//******************************************* */
// if it was an object:

// Example
// Create an object named carInfo and send it to the Car component:

function Car(props) {
  return <h2>That is a { props.brand.model }!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);
//Output: Who lives in my garage? That is a Mustang

