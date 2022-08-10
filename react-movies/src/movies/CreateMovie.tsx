import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { urlMovies } from "../endpoints";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import DisplayError from "../utils/DisplayError";
import { convertMovieToFormData } from "../utils/formDataUtils";
import Loading from "../utils/Loading";
import MovieForm from "./MovieForm";
import { movieCreationDTO, moviesPostGetDTO } from "./movies.model";

export default function CreateMovie() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

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

  async function create(movie: movieCreationDTO) {
    try {
      const formData = convertMovieToFormData(movie);
      const response = await axios({
        method: "post",
        url: urlMovies,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      history.push(`/movies/${response.data}`);
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Create Movie</h3>
      <DisplayError errors={errors}></DisplayError>
      {loading ? (
        <Loading></Loading>
      ) : (
        <MovieForm
          model={{ title: "", inTheaters: false, trailer: "" }}
          onSubmit={async (values) => await create(values)}
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
