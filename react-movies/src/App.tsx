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
      </BrowserRouter>
    </>
  );
}

export default App;
