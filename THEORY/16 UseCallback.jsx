// The React useCallback Hook returns a memoized callback function.

// Think of memoization as caching a value so that it does not need to be recalculated.

// This allows us to isolate resource intensive functions so that they will not automatically run on every render.

// The useCallback Hook only runs when one of its dependencies update.

// This can improve performance.

//******************************************** */
//The useCallback and useMemo Hooks are similar. 
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

//********WHAT IS MEMOIZATION?*****************/

// Memoization is the process of caching a value so that it does not need to be recalculated.
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// Memoization is a technique used to optimize function calls by caching the result of a function based on its inputs.

// In the context of the useCallback hook, memoization means that the provided callback function will be cached 
// and reused if the dependencies specified in the dependency array do not change. 
// This can improve performance by preventing unnecessary re-creation of the callback function.



//*********************FOR BETTER UNDERSTANDING OF UseMemo Hook*********************************************** */
// When you use the useMemo hook in React, it memoizes the provided value so that it is only recreated if the value or any of its dependencies change. 
// This can help improve performance by preventing unnecessary re-renders of components that depend on the value.

// Without using useMemo, the value will be created each time the component re-renders, 
// even if the dependencies of the value haven't changed. 
// This can potentially cause unnecessary re-renders and impact performance.

//*********************FOR BETTER UNDERSTANDING OF UseCallback Hook*********************************************** */
// CODEIUM explains the meaning of UseCallback hook in detail.

// When you use the useCallback hook in React, it memoizes the provided callback function 
// so that it is only recreated if any of its dependencies change. 
// This can help improve performance by preventing unnecessary re-renders of components that depend on the callback.

// Without using useCallback, the callback function will be created each time the component re-renders, 
// even if the dependencies of the function haven't changed. 
// This can potentially cause unnecessary re-renders and impact performance.

// Here's an example to illustrate the difference:

import React, { useState } from 'react';
// Without useCallback
const WithoutCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default WithoutCallbackExample;

// With useCallback
const WithCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};
export default WithCallbackExample;

// In the example above, the WithoutCallbackExample component creates a new handleClick function on each render, 
// even though the function's logic doesn't depend on any changing variables. This can lead to unnecessary re-renders.

// In the example code I provided earlier, when useCallback is used to wrap the handleClick function, 
// it memoizes the function based on the count dependency. 
// This means that if the count value remains the same between re-renders, the same memoized function will be used. 
// However, if the count value changes, a new memoized function will be created.
// This can help optimize performance by avoiding unnecessary re-renders when count remains the same.