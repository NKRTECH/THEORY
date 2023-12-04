//*********************SUMMARY*************************** */
//****************How to reuse Components?***************** */

// Class Components
// Class-defined components offer greater functionalities. 
// The first and most crucial one is the possibility of state for class components 

// The class component has a constructor() method. It will be called when the component is started.
// The component's properties are stored in the constructor() method.
// Component properties in React should be saved in a state object.
// Additionally, the constructor() method is where you acknowledge the parent component's inheritance 
// by including the super() statement, 
// which executes the constructor() method of the parent component 
// and grants your component access to all of the parent component's functions (React.Component).

//***************************************************** */
// Create a constructor function in the Car component, and add a color property: 
// The constructor() method in the below Car component has the color property, which is saved in a state object.

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}

//************************************************************* */
// How to reuse Components?
// For example: If we create one Class component in a separate new file with the.js file extension 
//and paste the following code within it as follows:
import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default Car;

// We can use the statement import React (like previously) and end with the phrase export default Car;

// In order to be able to use the Car component, you will import the file in your application.
// Now we import the Car.js file in the application, as shown below, 
//and we can use the Car component as if it was created here.

import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

//*********************************************** */
// We are creating the component the Car component once and will be able to reuse the component anywhere we want. 
// For Example: If we create another component Garage.js we can import the Car component here too.

import React from 'react';
import Car from './Car.js';

class Garage extends React.Component {
  render() {
    return (
 <div>
 <h2>Hi, This is Garage!</h2>;
<Car/>
   </div>
    )
  }
}

export default Garage;
//output: Hi, This is Garage! I am a Car!