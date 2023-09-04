import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Explain({
  id,
  coverImg,
  title,
  summary,
  genres,
  year,
  rating,
  runtime,
  background_image,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{year}</p>
      <p>{rating}</p>
      <p>{runtime}</p>
      <img src={background_image} alt={title} />
    </div>
  );
}

Explain.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  background_image: PropTypes.string.isRequired,
};

export default Explain;
