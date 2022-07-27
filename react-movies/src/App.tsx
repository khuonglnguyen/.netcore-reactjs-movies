import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { landingPageDTO, movieDTO } from "./movies/movies.model";
import MoviesList from "./movies/MoviesList";
import Button from "./utils/Button";
import Menu from "./Menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexGeners from "./geners/indexGeners";

function App() {
  const [moveis, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "End Game",
            poster:
              "https://cdn.europosters.eu/image/1300/posters/avengers-endgame-journey-s-end-i122136.jpg",
          },
          {
            id: 2,
            title: "Black Widow",
            poster:
              "https://thegioidienanh.vn/stores/news_dataimages/phuongha/082021/14/10/3949_1._Black_Widow_khong_phYi_la_bY_phim_ma_nhiYu_ngYYi_ham_mY_kY_vYng.jpg?rt=20210814105239",
          },
        ],
        upcomingReleases: [
          {
            id: 3,
            title: "Green Arrow",
            poster:
              "data:image/jpeg;base64,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",
          },
        ],
      });
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <h3>In Theaters</h3>
              <MoviesList movies={moveis.inTheaters} />
              <h3>Upcoming Releases</h3>
              <MoviesList movies={moveis.upcomingReleases} />
            </Route>
            <Route exact path="/geners">
              <IndexGeners></IndexGeners>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
