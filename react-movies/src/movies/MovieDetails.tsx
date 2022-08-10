import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlMovies } from "../endpoints";
import Loading from "../utils/Loading";
import { movieDTO } from "./movies.model";

export default function MovieDetails() {
  const { id }: any = useParams();
  const [movie, setMovie] = useState<movieDTO>();

  useEffect(() => {
    axios
      .get(`${urlMovies}/${id}`)
      .then((response: AxiosResponse<movieDTO>) => {
        response.data.releaseDate = new Date(response.data.releaseDate);
        setMovie(response.data);
      });
  }, [id]);

  function generateEmbeddedVideoURL(trailer: string): string {
    if (!trailer) {
      return "";
    }

    let videoId = trailer.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return `https://www.youtube.com/embed/${videoId}`;
  }

  return movie ? (
    <div>
      <h2>
        {movie.title}({movie.releaseDate.getFullYear()})
      </h2>
      {movie.genres?.map((genre) => (
        <Link
          key={genre.id}
          style={{ marginRight: "5px" }}
          className="btn btn-primary btn-sm rounded-pill"
          to={`/movies/filter?genreId=${genre.id}`}
        >
          {genre.name}
        </Link>
      ))}{" "}
      | {movie.releaseDate.toDateString()}
      <div style={{ display: "flex", marginTop: "1rem" }}>
        <span style={{ display: "inline-block", marginRight: "1rem" }}>
          <img
            src={movie.poster}
            alt="poster"
            style={{ width: "225px", height: "315px" }}
          />
        </span>
        {movie.trailer ? (
          <div>
            <iframe
              src={generateEmbeddedVideoURL(movie.trailer)}
              title="youtube-trailer"
              width={560}
              height="315"
              allow="accelermeter; autoplay;encrypted-media;gyroscope;picture-in-picture"
            ></iframe>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <Loading></Loading>
  );
}
