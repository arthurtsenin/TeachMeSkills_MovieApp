import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { ErrorModalPopUp } from "./components/service/modalErrorRequest";
import { Header } from "./components/header/header";
import { ThemeChange } from "./components/theme/ThemeContext";

import { Footer } from "./components/footer/footer";

import { IRootState, useAppDispatch } from "./components/redux/store";

import { getProfile } from "./components/redux/actionCreators";
import { MoviePage } from "./components/movieСomponents/movies/movieListPage";
import { SingleMoviePage } from "./components/movieСomponents/singleMovie/singleMoviePage";
import { FavouriteMoviesListPage } from "./components/movieСomponents/favouriteMovies/favouriteMovieListPage";

function App() {
  const [searchMovie, setSearchMovie] = useState(
    localStorage.getItem("search") ? JSON.parse(localStorage.getItem("search") || "") : ""
  );
  const [error, setError] = useState("");
  const isLoggedIn = useSelector((state: any) => !!state.auth.authData.accessToken);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("search", JSON.stringify(searchMovie));
  }, [searchMovie]);

  return (
    <ThemeChange>
      <Router>
        {error === "" ? null : <ErrorModalPopUp error={error} />}
        <Header search={searchMovie} setSearch={setSearchMovie} title="My Movie App" />
        <Routes>
          <Route path="/" element={<MoviePage setError={setError} searchMovie={searchMovie} />} />
          {isLoggedIn ? (
            <Route path="/movieList/:id" element={<SingleMoviePage />} />
          ) : (
            <Route path="/" element={<MoviePage setError={setError} searchMovie={searchMovie} />} />
          )}
          {isLoggedIn ? (
            <Route path="/:favouriteMovies" element={<FavouriteMoviesListPage />} />
          ) : (
            <Route path="/" element={<MoviePage setError={setError} searchMovie={searchMovie} />} />
          )}
        </Routes>
        <Footer />
      </Router>
    </ThemeChange>
  );
}

export default App;
