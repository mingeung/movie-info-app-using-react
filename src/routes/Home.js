import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import "./Home.css";
import whale from "../image/blue-whale.png";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {loading ? (
        <div className="loading">
          {/* <h1 className="loading-text">Loading...</h1> */}
          <br />
          <span className="loading-img"></span>
        </div>
      ) : (
        <div>
          <div id="title-box">
            <img id="whale" src={whale} alt="whale" />
            <h1 id="title">MVWD</h1>
          </div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              backgroundImg={movie.background_image}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
