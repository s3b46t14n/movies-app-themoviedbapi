import "./Poster.css";

function Poster({ movie }) {
  const splittedDate = new Date(movie.release_date).toDateString().split(" ");
  const customDateFormat = `${splittedDate[2]} ${splittedDate[1]} ${splittedDate[3]}`;
  return (
    <li className="movie">
      <img
        className="movie-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-info">
        <div className="movie-rating">
          <img
            className="star mr-1 "
            src="https://img.icons8.com/color/48/000000/star--v1.png"
            alt="star"
          />
          <span className="rating">{movie.vote_average}</span>
        </div>
        <span className="movie-title">{movie.original_title}</span>
        <span className="movie-date">{customDateFormat}</span>
        <button type="button" className="btn-info">
          More info
        </button>
      </div>
    </li>
  );
}

export default Poster;
