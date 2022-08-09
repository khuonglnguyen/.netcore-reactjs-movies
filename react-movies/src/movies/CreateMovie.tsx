import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlMovies } from "../endpoints";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import Loading from "../utils/Loading";
import MovieForm from "./MovieForm";
import { moviesPostGetDTO } from "./movies.model";

export default function CreateMovie() {
  const [nonSelectGenres, setNonSelectGenres] = useState<genreDTO[]>([]);
  const [nonSelectMovieTheaters, setNonSelectMovieTheaters] = useState<
    movieTheaterDTO[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${urlMovies}/postget`)
      .then((response: AxiosResponse<moviesPostGetDTO>) => {
        setNonSelectGenres(response.data.genres);
        setNonSelectMovieTheaters(response.data.movieTheaters);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h3>Create Movie</h3>
      {loading ? (
        <Loading></Loading>
      ) : (
        <MovieForm
          model={{ title: "", inTheaters: false, trailer: "" }}
          onSubmit={(values) => console.log(values)}
          nonSelectedGenres={nonSelectGenres}
          selectedGenres={[]}
          nonSelectedMovieTheaters={nonSelectMovieTheaters}
          selectedMovieTheaters={[]}
          selectedActors={[]}
        ></MovieForm>
      )}
    </>
  );
}
