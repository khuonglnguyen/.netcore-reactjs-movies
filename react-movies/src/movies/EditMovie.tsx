import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie() {
  const nonSelectGenres: genreDTO[] = [{ id: 2, name: "Horror" }];

  const selectGenres: genreDTO[] = [{ id: 1, name: "Action" }];

  const nonSelectMovieTheaters: movieTheaterDTO[] = [
    { id: 1, name: "Lotte Mau Than" },
  ];

  const selectMovieTheaters: movieTheaterDTO[] = [
    { id: 2, name: "Lotte Hung Vuong" },
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "John Wick",
          inTheaters: true,
          trailer: "url",
          realeaseDate: new Date("2019-01-01"),
        }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectGenres}
        selectedGenres={selectGenres}
        nonSelectedMovieTheaters={nonSelectMovieTheaters}
        selectedMovieTheaters={selectMovieTheaters}
        selectedActors={[]}
      ></MovieForm>
    </>
  );
}
