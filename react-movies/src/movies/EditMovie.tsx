import { actorMovieDTO } from "../actors/actors.model";
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

  const selectedActors: actorMovieDTO[] = [
    {
      id: 1,
      name: "Scarlett Johansson",
      character: "Sac",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_UY209_CR16,0,140,209_AL_.jpg",
    },
    {
      id: 2,
      name: "Elizabeth Olsen",
      character: "Vdsd",
      picture:
        "https://m.media-amazon.com/images/M/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY209_CR4,0,140,209_AL_.jpg",
    }
  ];

  return (
    <>
      <h3>Edit Movie</h3>
      <MovieForm
        model={{
          title: "John Wick",
          inTheaters: true,
          trailer: "url",
          releaseDate: new Date("2019-01-01"),
        }}
        onSubmit={(values) => console.log(values)}
        nonSelectedGenres={nonSelectGenres}
        selectedGenres={selectGenres}
        nonSelectedMovieTheaters={nonSelectMovieTheaters}
        selectedMovieTheaters={selectMovieTheaters}
        selectedActors={selectedActors}
      ></MovieForm>
    </>
  );
}
