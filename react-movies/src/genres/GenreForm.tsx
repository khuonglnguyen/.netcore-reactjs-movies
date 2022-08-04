import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import TextField from "../forms/TextField";
import Button from "../utils/Button";
import * as Yup from "yup";
import { genreCreationDTO } from "./genres.model";

export default function GenreForm(props: genreFormProps) {
  return (
    <Formik
      initialValues={props.model}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .max(50,'Max lenght is 50 characters')
          .firstLetterUppercase(),
      })}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Name"></TextField>

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save Changes
          </Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

interface genreFormProps {
  model: genreCreationDTO;
  onSubmit(
    value: genreCreationDTO,
    action: FormikHelpers<genreCreationDTO>
  ): void;
}
