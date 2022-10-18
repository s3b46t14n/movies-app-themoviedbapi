import "./App.css";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movie from "./components/Movie";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <main className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
