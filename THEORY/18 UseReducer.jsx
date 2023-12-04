// The useReducer Hook is similar to the useState Hook.
// It allows for custom state logic.

// Syntax
// The useReducer Hook accepts two arguments.

// useReducer(<reducer>, <initialState>)

// The reducer function contains your custom state logic and 
//{****IMPORTANT*******} the initialStatecan be a simple value but generally will contain an object.

// The useReducer Hook returns the current state and a dispatchmethod.

// useReducer is a hook for state management, much like useState, and relies upon a kind of function called a reducer.

// Reducers are simple, predictable (pure) functions that take a previous state object and an action object and return a new state object. 
// useReducer can be used in many of the same ways that useState can, 
// but is more helpful for managing state across multiple components that may involve different operations or "actions".
// The useReducer Hook is the better alternative to the useState hook and 
// is generally more preferred over the useState hook when you have complex state-building logic or 
// when the next state value depends upon its previous value or when the components are needed to be optimized.



import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);

//************second example**************************************************
import React, { useReducer } from 'react';

// Define the initial state
const initialState = {
  count: 0,
};

// Define the reducer function
const reducer = (current, action) => {
  switch (action.type) {
    case 'increment':
      return { count: current.count + 1 };
    case 'decrement':
      return { count: current.count - 1 };
    case 'reset':
      return { count: 0 };
    default:
      throw new Error('Unsupported action type');
  }
};

// Component using the useReducer hook
const Counter = () => {
  // Pass the reducer function and initial state to useReducer
  const [current, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count: {current.count}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
};

export default Counter;

//************third example with array**************************************************
import React, { useReducer } from 'react';

// Define the initial state
const initialState = [];

// Define the reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(item => item !== action.payload);
    case 'reset':
      return [];
    default:
      throw new Error('Unsupported action type');
  }
};

// Component using the useReducer hook
const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAddTodo = () => {
    const newTodo = prompt('Enter a new todo');
    if (newTodo) {
      dispatch({ type: 'add', payload: newTodo });
    }
  };

  const handleRemoveTodo = todo => {
    dispatch({ type: 'remove', payload: todo });
  };

  const handleResetTodos = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleResetTodos}>Reset Todos</button>
      <ul>
        {state.map(todo => (
          <li key={todo}>
            {todo}
            <button onClick={() => handleRemoveTodo(todo)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;