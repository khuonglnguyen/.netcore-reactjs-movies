import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenre() {
  return (
    <>
      <h3>Create Genre</h3>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(value) => {}}
      >
        <Form>
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <Field name="name" className="form-control" />
          </div>

          <Button type="submit">Save Changes</Button>
          <Link className="btn btn-secondary" to="/genres">
            Cancel
          </Link>
        </Form>
      </Formik>
    </>
  );
}
