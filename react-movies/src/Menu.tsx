import { NavLink } from "react-router-dom";
import Authorized from "./auth/Authorized";

export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          React Movies
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/movies/filter" className="nav-link">
                Filter Movies
              </NavLink>
            </li>
            <Authorized role="admin" authorized={<>
              <li className="nav-item">
              <NavLink to="/genres" className="nav-link">
                Genres
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/actors" className="nav-link">
                Actors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movietheaters" className="nav-link">
                Movie Theaters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/create" className="nav-link">
                Create a Movie
              </NavLink>
            </li>
            </>}></Authorized>
           
          </ul>
        </div>
      </div>
    </nav>
  );
}
