import Loading from "../utils/Loading";
import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./movies.model";
import css from "./MoviesList.module.css";

export default function MoviesList(props: moviesListProps) {
  if (!props.movies) {
    return <Loading />
  } else if (props.movies.length === 0) {
    return <>There are no movies to display</>;
  } else {  
    return (
      <div className={css.div}>
        {props.movies.map((movie) => {
          return <IndividualMovie {...movie} key={movie.id} />;
        })}
      </div>
    );
  }
}

interface moviesListProps {
  movies?: movieDTO[];
}
