import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { urlGenres } from "../endpoints";
import DisplayError from "../utils/DisplayError";
import Loading from "../utils/Loading";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";

export default function EditGenre() {
  const { id }: any = useParams();
  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${urlGenres}/${id}`)
      .then((response: AxiosResponse<genreCreationDTO>) => {
        setGenre(response.data);
      });
  }, [id]);

  async function edit(genreToEdit: genreCreationDTO) {
    try {
      await axios.put(`${urlGenres}/${id}`, genreToEdit);
      history.push('/genres');
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Edit Genre</h3>
      <DisplayError errors={errors}></DisplayError>
      {genre ? (
        <GenreForm
          model={genre}
          onSubmit={async (value) => {
            await edit(value);
          }}
        ></GenreForm>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}
