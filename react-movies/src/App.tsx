import "./App.css";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./route-config";
import configureValidation from "./validation";

configureValidation();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <div className="container">
          <Switch>
            {routes.map((route) => {
              return (
                <Route key={route.path} path={route.path} exact={route.exact}>
                  <route.component></route.component>
                </Route>
              );
            })}
          </Switch>
        </div>
        <footer className="db-footer py-5 mt-5 bg-light">
          <div className="container">Develop by Khuong Nguyen</div>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
