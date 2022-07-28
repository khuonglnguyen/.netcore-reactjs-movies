import { Link } from "react-router-dom";

export default function IndexMovieTheaters() {
  return (
    <>
      <h3>Movie Theaters</h3>
      <Link to="/movietheaters/create" className="btn btn-primary">Create movie theater</Link>
    </>
  );
}
