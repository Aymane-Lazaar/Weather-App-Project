// import "./Weather App Project/App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Weather App Project/HomePage";
import CitiesPage from "./Weather App Project/CitiesPage";
import WeatherDetails from "./Weather App Project/WeatherDetails";

function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cities/:state" element={<CitiesPage />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
     </Router> 
  );
}

export default App;