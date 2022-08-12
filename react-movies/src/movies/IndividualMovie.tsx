import { movieDTO } from "./movies.model";
import css from "./IndividualMovie.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { urlMovies } from "../endpoints";
import Button from "../utils/Button";
import customConfirm from "../utils/customConfirm";
import { useContext } from "react";
import AlertContext from "../utils/AlertContext";
import Authorized from "../auth/Authorized";

export default function IndividualMovie(props: movieDTO) {
  const buildLink = () => {
    return `/movie/${props.id}`;
  };
  const customAlert=useContext(AlertContext);

  function deleteMovie() {
    axios.delete(`${urlMovies}/${props.id}`).then(() => {
      customAlert();
    });
  }

  return (
    <div className={css.div}>
      <Link to={buildLink()}>
        <img src={props.poster} alt="Poster" />
      </Link>
      <p>
        <Link to={buildLink()}>{props.title}</Link>
      </p>
      <Authorized role="admin" authorized={<>
        <div>
        <Link
          style={{ marginRight: "1rem" }}
          className="btn btn-info"
          to={`/movies/edit/${props.id}`}
        >
          Edit
        </Link>
        <Button
          onClick={() => {
            customConfirm(() => deleteMovie());
          }}
          className="btn btn-danger"
        >
          Delete
        </Button>
      </div>
      </>}></Authorized>
     
    </div>
  );
}
