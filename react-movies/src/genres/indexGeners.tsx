import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import { genreDTO } from "./genres.model";

export default function IndexGeners() {
  useEffect(() => {
    axios
      .get(urlGenres)
      .then((response: AxiosResponse<genreDTO[]>) =>
        console.log(response.data)
      );
  }, []);

  return (
    <>
      <h3>Geners</h3>
      <Link to="/genres/create" className="btn btn-primary">
        Create genre
      </Link>
    </>
  );
}
