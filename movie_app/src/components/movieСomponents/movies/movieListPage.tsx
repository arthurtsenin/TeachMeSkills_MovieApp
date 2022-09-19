import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { MovieList } from "./movieList";
import { addMoviesAction } from "../../redux/moviesReducer";
import { apiKey, movieService } from "../../service/movieService";
import { Loader } from "../../shared/loader";
import { useTheme } from "../../theme/ThemeContext";
import { MovieDefault } from "../../main/main";

import { PageContainer } from "../singleMovie/singleMovie.styled";



export const MoviePage = ({ setError, searchMovie }: any) => {
  const dispatch = useDispatch();
  const movies = useSelector((state: any = []) => state.movies.movies);
  const favourites = useSelector((state: any = []) => state.favouriteMovies.favouriteMovies);
  const [isLoading, setIsLoading] = useState(false);
  const theme  = useTheme();
 

  const getMovies = async (searchMovie: string) => {
    try {
      setIsLoading(true);
      const response = await movieService.get(`/?${apiKey}&s=${searchMovie}`);
      if (response.data.Search) {
        dispatch(addMoviesAction(response.data.Search));
      }
      setIsLoading(false);
    } catch (err: any) {
      setError(String(err));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMovies(searchMovie);
    dispatch(addMoviesAction([]));
  }, [searchMovie]);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [movies, favourites]);

  return (
    <PageContainer style={theme.changeTheme}>
      {searchMovie.length > 0 ? (
        isLoading ? (
          <Loader loading={isLoading} />
        ) : (
          <MovieList style={theme.changeTheme} movies={movies} />
        )
      ) : (
        <MovieDefault
          style={theme.changeTheme}
          defaultMovieTitle1="Star wars"
          defaultMovieTitle2="Avengers"
          defaultMovieTitle3="Toy story"
        />
      )}
    </PageContainer>
  );
};
