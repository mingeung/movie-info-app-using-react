import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Explain from "../components/Explain";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./Detail.css";

//이전 페이지로 가기

function Detail() {
  const [loading, setLoading] = useState(true);
  const [coverImg, setCoverImg] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [genres, setGenres] = useState([]);
  const [year, setYear] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState("");
  const [background_image, setBackground_image] = useState("");

  //이전 페이지로 가기
  const history = useHistory();

  // function handleUseHitory() {
  //   history.back(); // 이전 URL로 변경한다.
  // }

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setCoverImg(json.data.movie.medium_cover_image);
    setTitle(json.data.movie.title);
    setSummary(json.data.movie.description_full);
    setGenres(json.data.movie.genres);
    setYear(json.data.movie.year);
    setRating(json.data.movie.rating);
    setRuntime(json.data.movie.runtime);
    setBackground_image(json.data.movie.background_image);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loading">
          {/* <h1 className="loading-text">Loading...</h1> */}
          <div className="loading-img"></div>
        </div>
      ) : (
        <div style={{ backgroundImage: `${background_image}` }}>
          <div className="detailBox">
            <img src="/image/x.png" id="x" onClick={() => history.goBack()} />

            <div className="imgBox">
              <img className="coverImg" src={coverImg} alt={title} />
            </div>
            <div className="textBox">
              <div>
                <h2 className="colorTitle">{title}</h2>
                <div className="detailElement">
                  {/* <img src="/image/movie.png" alt="movie" id="movie" /> */}
                  <p className="year">🕡 {year}</p>
                  <p className="rating">⭐️ {rating}</p>
                  {/* <img src="/image/clock.png" alt="clock" id="clock" /> */}
                  <p className="runtime">🎥 {runtime}분</p>
                </div>
              </div>
              <p className="description">{summary}</p>
              <ul className="genres">
                {genres.map((g) => (
                  <span key={g} className="genre">
                    #{g}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
