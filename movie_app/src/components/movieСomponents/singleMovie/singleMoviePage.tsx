import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { IRootState } from "../../redux/store";
import { addSingleMovieAction } from "../../redux/moviesReducer";
import { ErrorModalPopUp } from "../../service/modalErrorRequest";
import { apiKey, movieService } from "../../service/movieService";
import { MovieCard } from "./singleMovieCard";
import { Loader } from "../../shared/loader";
import { useTheme } from "../../theme/ThemeContext";

import { PageContainer } from "./singleMovie.styled";

export const SingleMoviePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const theme = useTheme();

  const singleMovie = useSelector((state: IRootState) => state.singleMovie.singleMovie);
  const favourites = useSelector((state: IRootState) => state.favouriteMovies.favouriteMovies);

  useEffect(() => {
    localStorage.setItem("singleMovie", JSON.stringify(singleMovie));
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [singleMovie, favourites]);

  const getSingleMovie = async () => {
    try {
      setIsLoading(true);
      const response = await movieService.get(`/?${apiKey}&i=${id}`);
      if (response.data) {
        dispatch(addSingleMovieAction(response.data));
      }
      setIsLoading(false);
    } catch (err: any) {
      setError(String(err));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSingleMovie();
    dispatch(addSingleMovieAction([]));
  }, []);

  return (
    <PageContainer style={theme.changeTheme}>
      {error === "" ? null : <ErrorModalPopUp error={error} />}
      {isLoading ? <Loader loading={isLoading} /> : <MovieCard singleMovie={singleMovie} />}
    </PageContainer>
  );
};
