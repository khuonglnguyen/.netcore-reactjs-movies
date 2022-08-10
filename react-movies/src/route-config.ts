import CreateActor from "./actors/CreateActor";
import EditActor from "./actors/EditActor";
import IndexActors from "./actors/IndexActor";
import CreateGenre from "./genres/CreateGenre";
import EditGenre from "./genres/EditGenre";
import IndexGeners from "./genres/indexGeners";
import CreateMovie from "./movies/CreateMovie";
import EditMovie from "./movies/EditMovie";
import FilterMovies from "./movies/FilterMovies";
import LandingPage from "./movies/LandingPage";
import MovieDetails from "./movies/MovieDetails";
import CreateMovieTheater from "./movietheaters/CreateMovieTheater";
import EditMovieTheater from "./movietheaters/EditMovieTheater";
import IndexMovieTheaters from "./movietheaters/IndexMovieTheaters";
import RedirectToLandingPage from "./utils/RedirectToLandingPage";

const routes = [
  { path: "/genres", component: IndexGeners, exact: true },
  { path: "/genres/create", component: CreateGenre },
  { path: "/genres/edit/:id(\\d+)", component: EditGenre },

  { path: "/actors", component: IndexActors, exact: true },
  { path: "/actors/create", component: CreateActor },
  { path: "/actors/edit/:id(\\d+)", component: EditActor },

  { path: "/movietheaters", component: IndexMovieTheaters, exact: true },
  { path: "/movietheaters/create", component: CreateMovieTheater },
  { path: "/movietheaters/edit/:id(\\d+)", component: EditMovieTheater },

  { path: "/movies/filter", component: FilterMovies },
  { path: "/movies/create", component: CreateMovie },
  { path: "/movies/edit/:id(\\d+)", component: EditMovie },
  { path: "/movie/:id(\\d+)", component: MovieDetails },

  { path: "/", component: LandingPage, exact: true },
  { path: "*", component: RedirectToLandingPage },
];
export default routes;
