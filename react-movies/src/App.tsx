import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./validation";
import { useEffect, useState } from "react";
import { claim } from "./auth/auth.models";
import AuthenticationContext from "./auth/AuthenticationContext";
import { getClaims } from "./auth/handleJWT";
import configureInterceptor from "./utils/httpinterceptors";

configureValidation();
configureInterceptor();

function App() {
  const [claims, setClaims] = useState<claim[]>([]);

  useEffect(() => {
    setClaims(getClaims());
  }, []);

  function isAdmin() {
    return (
      claims.findIndex(
        (claim) => claim.name === "role" && claim.value === "admin"
      ) > -1
    );
  }

  return (
    <>
      <BrowserRouter>
        <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
          <Menu></Menu>
          <div className="container">
            <Switch>
              {routes.map((route) => {
                return (
                  <Route key={route.path} path={route.path} exact={route.exact}>
                    {route.isAdmin && !isAdmin() ? (
                      <>You are not allowed to see this page</>
                    ) : (
                      <route.component></route.component>
                    )}
                  </Route>
                );
              })}
            </Switch>
          </div>
          <footer className="db-footer py-5 mt-5 bg-light">
            <div className="container">Develop by Khuong Nguyen</div>
          </footer>
        </AuthenticationContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
