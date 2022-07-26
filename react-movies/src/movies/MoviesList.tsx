import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "./MoviesList.module.css"

export default function MoviesList(props: moviesListProps) {
  return (
    <div className={css.div}>
      {props.movies.map((movie) => {
        return <IndividualMovie {...movie} key={movie.id }/>;
      })}
    </div>
  );
}

interface moviesListProps {
  movies: movieDTO[];
}
