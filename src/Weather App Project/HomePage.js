import React from "react";
import { Link } from "react-router-dom";

const states = [
  "California",
  "Texas",
  "NewYork",
  "Florida",
  "Illinois",
];

function HomePage() {
  return (
    <div>
      <h1>Choose a State</h1>
      <ul>
        {states.map((state, index) => (
          <li key={index}>
            <Link to={`/cities/${state}`}>{state}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;