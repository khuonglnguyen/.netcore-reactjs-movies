import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { urlGenres } from "../endpoints";
import DisplayError from "../utils/DisplayError";
import GenreForm from "./GenreForm";
import { genreCreationDTO } from "./genres.model";

export default function CreateGenre() {
  const history = useHistory();
  const [errors, setErrors] = useState<string[]>([]);

  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      history.push("/genres");
    } catch (error) {
      const err = error as AxiosError;
      if (err.response) {
        setErrors(err.response.data);
      }
    }
  }

  return (
    <>
      <h3>Create Genre</h3>
      <DisplayError errors={errors}></DisplayError>
      <GenreForm
        model={{ name: "" }}
        onSubmit={async (value) => {
          await create(value);
        }}
      ></GenreForm>
    </>
  );
}
