import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import GenericList from "../utils/GenericList";
import { genreDTO } from "./genres.model";

export default function IndexGeners() {
  const [genres, setGenres] = useState<genreDTO[]>();

  useEffect(() => {
    axios.get(urlGenres).then((response: AxiosResponse<genreDTO[]>) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <>
      <h3>Geners</h3>
      <Link to="/genres/create" className="btn btn-primary">
        Create genre
      </Link>
      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <th></th>
            <th>Name</th>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.name}</td>
                <td>
                  <Link className="btn btn-success" to={`/genres/${genre.id}`}>
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
