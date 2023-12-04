const element = <h1>Hello, world!</h1>;

// This amusing tag syntax is neither HTML nor a string.

// Its name is JSX, which is short for JavaScript extension. 
// It should be used with React to specify how the user interface should appear. 
// While Handlebars or another template language may come to mind when thinking of JSX, 
// the entire power of JavaScript is still available.

//What is JSX?
// JSX is a JavaScript Extension Syntax used in React to easily write HTML and JavaScript together.

// JSX creates "elements" for React.
// JSX is a syntax extension to JavaScript.
// It is used to create HTML elements.
// It is used in combination with React.
// It is used to create user interfaces.
// It is used to create React components.
// It is used to create React applications.

//Why JSX?
// React accepts the notion that other UI logic—how events are handled, how the state evolves over time, 
// and how the data is organized for display—is inextricably linked with rendering logic.

//React separates issues through loosely connected units called "components" that contain both, 
// as opposed to artificially dividing technology by putting HTML and code in different files. 
// Components are reusable pieces of code that can be reused across multiple places in the application.

// Now, let's add some complexity to the JSX to see how it's converted to the React.createElement call.

class JSXDemo extends React.Component {
  handleOnClick = () => {
    console.log("clicked");
  };
  render() {
    return (
      <button id="btn" onClick={this.handleOnClick}>
        Click Here
      </button>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById("root"));
// Here, we've added an onClick handler to the button.

// For the above code, the React.createElement call will look like this:

React.createElement("button", {
  id: "btn", 
  onClick: function() {}
}, "Click Here")

//*************************************************** */
// How to Add Comments to JSX Code
// If you have a line of code like this:

<p>This is some text</p>
// and you want to add a comment for that code, 
// then you have to wrap that code in JSX expresssion syntax inside the /* and */ comment symbols like this:

{/* <p>This is some text</p> */}

//********************************************************* */
// To add JavaScript code inside JSX, we need to write it in curly brackets like this:

const App = () => {
 const number = 10;
 return (
  <div>
   <p>Number: {number}</p>
  </div>
 );
};

// Inside the curly brackets we can only write an expression that evaluates to some value.
// So, often this syntax of using curly brackets is known as JSX Expression Syntax.

//************************************* */
// Following are the valid things you can have in a JSX Expression:
// A string like "hello"
// A number like 10
// An array like [1, 2, 4, 5]
// An object property that will evaluate to some value
// A function call that returns some value which may be JSX
// A map method that always returns a new array
// JSX itself

//***************************************** */
// Following are the invalid things and cannot be used in a JSX Expression:
// A for loop or while loop or any other loop
// A variable declaration
// A function declaration
// An if condition
// An object

//**************************************************** */
// We can write arrays in JSX Expressions because 
// <p>{[1, 2, 3, 4]}</p> is finally converted to <p>{1}{2}{3}{4}</p> 
// when rendering (which can be rendered without any issue).


//********************************************************** */
// Also note that undefined, null, and boolean are not displayed on the UI when used inside JSX.
// So if you have a boolean value and you want to display it on the UI 
// you need to wrap it in ES6 template literal syntax like this:

const App1 = () => {
  const isAdmin = true;
  return (
    <div>
      <p>isAdmin is {`${isAdmin}`} </p>
    </div>
  );
};

//*********************************** */
// Conditional Operators in JSX Expressions
// We can’t write if conditions in JSX expressions, which you might think of as an issue. 
// But React allows us to write conditional operators, 
// like ternary operators as well as the logical short circuit && operator like this:

//<p>{a > b ? "Greater" : "Smaller"}</p>
//<p>{shouldShow && "Shown"}</p>

//********************************************** */
// How to Nest JSX Expressions
// You can even do nesting of JSX expressions like this:

const App3 = () => {
  const number = 10;
  return (
    <div>
      {number > 0 ? (
        <p>Number {number} is positive</p>
      ) : (
        <p>Number {number} is Negative</p>
      )}
    </div>
  );
};

//****************************** */
// How to Add a Class in JSX
// We can add attributes to the JSX elements, for example id and class, the same as in HTML.

//****************IMPORTANT******************************* */
// Note that in React, all the attribute names are written in camelCase.

const App4 = () => {
  const id = "some-id";
  return (
    <div>
      <h1 id={id}>This is a heading</h1>
      <h2 className="active">This is another heading</h2>
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

//*************************************** */
// the props object has the class property with a value active. 
// But in JavaScript, class is a reserved keyword so accessing props.class will result in an error.

// This is why React decided to use className instead of class.

// This use of className instead of class is a frequently asked question in React interviews.



