'use client'; // Directive for client-side rendering in Next.js

import React, { useEffect, useState } from 'react'; // Import useEffect and useState from React

export default function Home() {
  // Declare a state variable 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  // useEffect runs whenever 'count' changes
  useEffect(() => {
    console.log("useEffect function triggered");

    // Fetching data from a dummy API
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json()) // Convert response to JSON
      .then((json) => console.log(json)) // Log the data received from the API
      .catch((error) => console.error("Error fetching data:", error)); // Handle any errors in the fetch request
  }, [count]); // Dependency array - this effect runs every time 'count' changes

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-500 mb-4">Understanding useEffect</h1>
      <h2 className="text-2xl text-gray-700 mb-6">A React Hook for Side Effects</h2>

      {/* Button to increment the counter */}
      <button 
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={() => setCount(count + 1)}
      >
        Increment Counter: {count}
      </button>
    </div>
  );
}
