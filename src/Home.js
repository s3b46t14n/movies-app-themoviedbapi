import MovieLists from "./components/MovieLists";
import "./Home.css";
function Home() {
  return (
    <section className="home">
      <a href="https://www.themoviedb.org/" className="link">
        Movies App using The Movie Database (TMDB) API
      </a>
      <MovieLists />
    </section>
  );
}

export default Home;
