import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";

export interface movieDTO {
  id: number;
  title: string;
  poster: string;
}

export interface movieCreationDTO {
  title: string;
  inTheaters: boolean;
  trailer: string;
  realeaseDate?: Date;
  poster?: File;
  posterURL?: string;
  gernresIds?: number[];
  movieTheatersIds?: number[];
  actors?: actorMovieDTO[];
}

export interface landingPageDTO {
  inTheaters?: movieDTO[];
  upcomingReleases?: movieDTO[];
}

export interface moviesPostGetDTO {
  genres: genreDTO[];
  movieTheaters: movieTheaterDTO[];
}
