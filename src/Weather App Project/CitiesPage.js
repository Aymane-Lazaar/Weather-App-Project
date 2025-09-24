import React from "react";
import { useParams, Link } from "react-router-dom";

const citiesByState = {
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Texas: ["Houston", "Austin", "Dallas"],
  NewYork: ["New York City", "Buffalo", "Albany"],
  Florida: ["Miami", "Orlando", "Tampa"],
  Illinois: ["Chicago", "Springfield", "Naperville"],
};

function CitiesPage() {
  const {state}=useParams();
  const cities=citiesByState[state]

  return (
    <div>
      <h1>Cities in {state}</h1>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <Link to={`/weather/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitiesPage;