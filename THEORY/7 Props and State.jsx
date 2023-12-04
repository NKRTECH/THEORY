// What is the state?
// The term "state" refers to data that a component manages 
// and which may have an impact on the information that the component displays. 
//The state object is where you store property values that belong to the component.
// State generally refers to application data or properties that need to be tracked.

// Do's and Don'ts of State
// Do
// - Keep state local to the component only
// - Use immutable objects as state
// - Initialize state in the constructor
// Don't
// - Update state directly
// - Use setState() to update state

// Creating the state Object
// The state object is initialized in the constructor:
// The state object can contain as many properties as you like:
// Using the state Object
// Refer to the state object anywhere in the component by using the this.state.propertyname syntax:

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nayan",
      age: 22
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
      </div>
    );
  }
}
export default App;
//output: Nayan
//output: 22

//*************************************** */
//Use of setState()
// setState() method is used to update the state of the component.
// It takes an object as an argument and updates the state of the component accordingly.
// The setSate() method is asynchronous.
//Make use of setState() to update the state of the component and dont directly update the state of the component.
// General Syntax for setState()
// setState(newState, callback)

//Example
// Use the setState() method to update the state of the component.

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nayan",
      age: 22
    };
  }
  increaseAge = () => {
    this.setState({ age: this.state.age + 1 });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.increaseAge}>Click</button>
      </div>
    );
  }
}
export default App;

//Important points to remember while using setState()
// Code has to be executed after the state has been updated.Since setState() method is asynchronous.
// Place the code in the callback function which is the second argument of the setState() method.
// For example:

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nayan",
      age: 22
    };
  }
  increaseAge = () => {
    this.setState({ age: this.state.age + 1 }, () => {
      console.log(this.state.age);
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <button onClick={this.increaseAge}>Click</button>
      </div>
    )
  }
}
export default App

//******************************** */
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: "blue"});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          <p>
            It is a {this.state.color}
            {this.state.model}
            from {this.state.year}.
          </p>
          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
  }

// Always use the setState() method to change the state object, 
// it will ensure that the component knows its been updated 
// and calls the render() method (and all the other lifecycle methods).

