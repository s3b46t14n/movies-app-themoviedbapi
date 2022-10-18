import "./Navbar.css";
function Navbar(props) {
  return (
    <nav className={`${props.darkMode ? "dark" : ""} navbar-container`}>
      <div>
        <span className="navbar-header">iWatch TV</span>
        <input
          type="text"
          className="input-box"
          placeholder="Search here..."
          // onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="menu">
        <div className="toggler">
          <p className="toggler--light">Light</p>
          <div className="toggler--slider" onClick={props.toggleDarkMode}>
            <div className="toggler--slider--circle"></div>
          </div>
          <p className="toggler--dark">Dark</p>
        </div>

        <a href="/home">
          <span>Home</span>
        </a>
        <a href="/Search">
          <span>Search</span>
        </a>
        <a href="/home#upcoming">
          <span>Upcoming</span>
        </a>
        <a href="#/home#popular">
          <span>popular</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
