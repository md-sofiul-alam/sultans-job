import React from "react";

const Blog = () => {
  return (
    <div className="mx-auto">
        <h1 className="text-center text-3xl bg-blue-100 rounded-lg font-bold mt-10 p-6 text-blue-700 container mx-auto">Blog Page</h1>
      <div className="container bg-blue-50 mx-auto p-10 my-6 rounded-xl">
        <h1 className="text-2xl font-semibold my-4 text-blue-600">when to use context API?</h1>
        <p className="text-xl text-gray-800">
          The Context API in React is used for sharing data between components
          without having to pass down props through every level of the component
          tree. It's generally used when data that needs to be accessed by
          multiple components at different levels of the tree. Using the Context
          API can simplify the code and make it easier to manage state across
          the application.
        </p>
      </div>
      <div className="container bg-blue-50 mx-auto p-10 my-6 rounded-xl">
        <h1 className="text-2xl font-semibold my-4 text-blue-600">What is custom hook?</h1>
        <p className="text-xl text-gray-800">
        custom hook is a JavaScript function that allows to reuse stateful logic in a React functional component. Custom hooks provide a way to abstract away complex stateful logic from the component itself, making the code more reusable and easier to read. A custom hook is simply a function that calls other hooks. It can contain any logic that would typically be found in a React component, such as state, effects, and other hooks.
        </p>
      </div>
      <div className="container bg-blue-50 mx-auto p-10 my-6 rounded-xl">
        <h1 className="text-2xl font-semibold my-4 text-blue-600">What is useRef?</h1>
        <p className="text-xl text-gray-800">
        'useRef' is a hook in React that provides a way to create a mutable reference to an element or value that persists across renders. The returned object from 'useRef' contains a 'current' property that can be set and read, and it does not cause the component to re-render when the value is updated.
        </p>
      </div>
      <div className="container bg-blue-50 mx-auto p-10 my-6 rounded-xl">
        <h1 className="text-2xl font-semibold my-4 text-blue-600">What is useMemo?</h1>
        <p className="text-xl text-gray-800">
        'useMemo' is a hook in React that is used to memoize expensive computations and prevent unnecessary re-renders. The basic idea behind 'useMemo' is to cache the result of a function or computation and only recompute it when its dependencies change.
        </p>
      </div>
    </div>
  );
};

export default Blog;
