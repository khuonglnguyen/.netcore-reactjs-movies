import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function CreateMovie() {
  const nonSelectGenres: genreDTO[] = [
    { id: 1, name: "Action" },
    { id: 2, name: "Horror" },
  ];
  
  const nonSelectMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Lotte Mau Than" },
    { id: 2, name: "Lotte Hung Vuong" },
  ];

  return (
    <>
      <h3>Create Movie</h3>
      <MovieForm
        model={{ title: "", inTheaters: false, trailer: "" }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectGenres}
        selectedGenres={[]} 
        nonSelectedMovieTheaters={nonSelectMovieTheaters}
        selectedMovieTheaters={[]} 
      ></MovieForm>
    </>
  );
}
