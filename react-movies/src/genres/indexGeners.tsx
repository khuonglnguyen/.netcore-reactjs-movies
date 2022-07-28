import { Link } from "react-router-dom";

export default function IndexGeners() {
  return (
    <>
      <h3>Geners</h3>
      <Link to="/genres/create" className="btn btn-primary">Create genre</Link>
    </>
  );
}
