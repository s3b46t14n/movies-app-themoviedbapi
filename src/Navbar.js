import "./Navbar.css";
function Navbar(props) {
  return (
    <nav className="navbar-container">
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
        <a href="/movies">
          <span>Movie</span>
        </a>
        <a href="/series">
          <span>Series</span>
        </a>
        <a href="https://github.com/matthew-clay">
          <span>Login</span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
