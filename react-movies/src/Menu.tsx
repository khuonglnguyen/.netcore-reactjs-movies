import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthenticationContext from "./auth/AuthenticationContext";
import Authorized from "./auth/Authorized";
import { logout } from "./auth/handleJWT";
import Button from "./utils/Button";

export default function Menu() {
  const { update, claims } = useContext(AuthenticationContext);

  function getuserEmail(): string {
    return claims.filter((x) => x.name === "email")[0]?.value;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          React Movies
        </NavLink>
        <div
          className="collapse navbar-collapse"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/movies/filter" className="nav-link">
                Filter Movies
              </NavLink>
            </li>
            <Authorized
              role="admin"
              authorized={
                <>
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
                  <li className="nav-item">
                    <NavLink to="/users" className="nav-link">
                      Users
                    </NavLink>
                  </li>
                </>
              }
            ></Authorized>
          </ul>
          <div className="d-flex">
            <Authorized
              authorized={
                <>
                  <span className="nav-link">Hello, {getuserEmail()}</span>
                  <Button
                    onClick={() => {
                      logout();
                      update([]);
                    }}
                    className="nav-link btn btn-link"
                  >
                    Logout
                  </Button>
                </>
              }
              notAuthorized={
                <>
                  <Link className="nav-link btn btn-link" to={"/register"}>
                    Register
                  </Link>
                  <Link className="nav-link btn btn-link" to={"/login"}>
                    Login
                  </Link>
                </>
              }
            ></Authorized>
          </div>
        </div>
      </div>
    </nav>
  );
}
