import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { urlGenres } from "../endpoints";
import Button from "../utils/Button";
import customConfirm from "../utils/customConfirm";
import DisplayError from "../utils/DisplayError";
import GenericList from "../utils/GenericList";
import Pagination from "../utils/Pagnation";
import RecordsPerPageSelect from "../utils/RecordsPerPageSelect";
import { genreDTO } from "./genres.model";

export default function IndexGeners() {
  const [genres, setGenres] = useState<genreDTO[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(urlGenres, {
        params: { page, recordsPerPage },
      })
      .then((response: AxiosResponse<genreDTO[]>) => {
        const totalAmountOfRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );
        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));

        setGenres(response.data);
      });
  }

  async function deleteGenre(id: number) {
    try {
      await axios.delete(`${urlGenres}/${id}`);
      loadData();
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Geners</h3>
      <Link to="/genres/create" className="btn btn-primary">
        Create genre
      </Link>
      <RecordsPerPageSelect
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      ></RecordsPerPageSelect>
      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      ></Pagination>
      <DisplayError errors={errors}></DisplayError>
      <GenericList list={genres}>
        <table className="table table-striped">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>{genre.name}</td>
                <td>
                  <Link
                    className="btn btn-success"
                    to={`/genres/edit/${genre.id}`}
                  >
                    Edit
                  </Link>
                  <Button
                    className="btn btn-danger"
                    onClick={() => {
                      customConfirm(() => deleteGenre(genre.id));
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
