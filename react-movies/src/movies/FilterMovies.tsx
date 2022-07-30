import { Field, Form, Formik } from "formik";
import { genreDTO } from "../genres/genres.model";
import Button from "../utils/Button";

export default function FilterMovies() {
  const initialValues: filterMoviesFormm = {
    title: "",
    genreId: 0,
    upcommingReleases: false,
    inTheaters: false,
  };

  const genres: genreDTO[] = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Action" },
  ];

  return (
    <>
      <h3>Filter Movies</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={(value) => console.log(value)}
      >
        {(formikProps) => (
          <Form>
            <div className="row gx-3 align-items-center">
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
                  onClick={() => formikProps.setValues(initialValues)}
                >
                  Clear
                </Button>
              </div>
            </div>
          </Form>
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
}
