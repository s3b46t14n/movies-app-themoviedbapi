import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log(darkMode);
  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <main className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home darkMode={darkMode} />
    </main>
  );
}

export default App;
