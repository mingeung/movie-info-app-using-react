import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, coverImg, title, summary, genres, backgroundImg }) {
  return (
    <div className="total">
      <div className="box" style={{ backgroundImage: `${backgroundImg}` }}>
        <Link to={`/movie/${id}`}>
          <div className="flexBox">
            <div className="imgBox">
              <img className="coverImg" src={coverImg} alt={title} />
            </div>
            <div className="textBox">
              <h2 className="title">{title}</h2>
              <p className="summary">{summary}</p>
              <ul className="genres">
                {genres.map((g) => (
                  <span key={g} className="genre">
                    #{g}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundImg: PropTypes.string.isRequired,
};

export default Movie;
