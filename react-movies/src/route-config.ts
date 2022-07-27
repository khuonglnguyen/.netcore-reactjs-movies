import IndexGeners from "./geners/indexGeners";
import LandingPage from "./movies/LandingPage";

const routes = [
  { path: "/geners", component: IndexGeners },
  { path: "/", component: LandingPage, exact: true },
];
export default routes;
