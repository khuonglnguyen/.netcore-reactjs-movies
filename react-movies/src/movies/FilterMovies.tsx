import axios, { AxiosResponse } from "axios";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { urlGenres, urlMovies } from "../endpoints";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";
import Pagination from "../utils/Pagnation";
import { movieDTO } from "./movies.model";
import MoviesList from "./MoviesList";

export default function FilterMovies() {
  const initialValues: filterMoviesFormm = {
    title: "",
    genreId: 0,
    upcommingReleases: false,
    inTheaters: false,
    page: 1,
    recordsPerPage: 10,
  };

  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [movies, setMovies] = useState<movieDTO[]>([]);
  const history = useHistory();
  const query = new URLSearchParams(useLocation().search);
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);

  useEffect(() => {
    axios
      .get(`${urlGenres}/all`)
      .then((response: AxiosResponse<genreDTO[]>) => {
        setGenres(response.data);
      });
  }, []);

  useEffect(() => {
    if (query.get("title")) {
      initialValues.title = query.get("title")!;
    }

    if (query.get("genreId")) {
      initialValues.genreId = parseInt(query.get("genreId")!, 10);
    }

    if (query.get("upcommingReleases")) {
      initialValues.upcommingReleases = true;
    }

    if (query.get("inTheaters")) {
      initialValues.inTheaters = true;
    }

    if (query.get("page")) {
      initialValues.page = parseInt(query.get("page")!, 10);
    }

    searchMovies(initialValues);
  }, []);

  function searchMovies(values: filterMoviesFormm) {
    modifyURL(values);
    axios
      .get(`${urlMovies}/filter`, { params: values })
      .then((response: AxiosResponse<movieDTO[]>) => {
        const records = parseInt(response.headers["totalamountofrecords"], 10);
        setTotalAmountOfPages(Math.ceil(records / values.recordsPerPage));
        setMovies(response.data);
      });
  }

  function modifyURL(values: filterMoviesFormm) {
    const queryString: string[] = [];

    if (values.title) {
      queryString.push(`title=${values.title}`);
    }

    if (values.genreId !== 0) {
      queryString.push(`genreId=${values.genreId}`);
    }

    if (values.upcommingReleases) {
      queryString.push(`upcommingReleases=${values.upcommingReleases}`);
    }

    if (values.inTheaters) {
      queryString.push(`inTheaters=${values.inTheaters}`);
    }

    queryString.push(`page=${values.page}`);

    history.push(`/movies/filter?${queryString.join("&")}`);
  }

  return (
    <>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={async (value) => {
          value.page = 1;
          await searchMovies(value);
        }}
      >
        {(formikProps) => (
          <>
            <Form>
              <div className="row gx-3 align-items-center mb-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title of the movie"
                    {...formikProps.getFieldProps("title")}
                  />
                </div>
                <div className="col-auto">
                  <select
                    className="form-select"
                    {...formikProps.getFieldProps("genreId")}
                  >
                    <option value="0">---Choose a genre---</option>
                    {genres.map((genre) => {
                      return (
                        <option key={genre.id} value={genre.id}>
                          {genre.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-auto">
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      id="upcommingReleases"
                      name="upcommingReleases"
                      type="checkbox"
                    ></Field>
                    <label
                      className="form-check-label"
                      htmlFor="upcommingReleases"
                    >
                      Upcomming Releases
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="form-check">
                    <Field
                      className="form-check-input"
                      id="inTheaters"
                      name="inTheaters"
                      type="checkbox"
                    ></Field>
                    <label className="form-check-label" htmlFor="inTheaters">
                      In Theaters
                    </label>
                  </div>
                </div>
                <div className="col-auto">
                  <Button
                    className="btn btn-primary"
                    onClick={() => formikProps.submitForm()}
                  >
                    Apply
                  </Button>
                  <Button
                    className="btn btn-danger ms-3"
                    onClick={() => {
                      formikProps.setValues(initialValues);
                      searchMovies(initialValues);
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </Form>
            <MoviesList movies={movies}></MoviesList>
            <Pagination
              totalAmountOfPages={totalAmountOfPages}
              currentPage={formikProps.values.page}
              onChange={(newPage) => {
                formikProps.values.page = newPage;
                searchMovies(formikProps.values);
              }}
            ></Pagination>
          </>
        )}
      </Formik>
    </>
  );
}

interface filterMoviesFormm {
  title: string;
  genreId: number;
  upcommingReleases: boolean;
  inTheaters: boolean;
  page: number;
  recordsPerPage: number;
}
