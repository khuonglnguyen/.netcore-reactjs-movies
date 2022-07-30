import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from "yup";
import TextField from "../forms/TextField";

export default function CreateGenre() {
  return (
    <>
      <h3>Create Genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("This field is required"),
        })}
        onSubmit={(value) => {}}
      >
        <Form>
          <TextField field="name" displayName="Name"></TextField>

          <Button type="submit">Save Changes</Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  );
}
