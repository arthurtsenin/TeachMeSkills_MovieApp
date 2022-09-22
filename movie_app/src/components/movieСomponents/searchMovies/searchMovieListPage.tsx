import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { SearchMovieList } from "./searchMovieList";
import { addMoviesAction } from "../../redux/moviesReducer";
import { apiKey, movieService } from "../../service/movieService";
import { Loader } from "../../shared/loader";
import { useTheme } from "../../theme/ThemeContext";
import { DefaultMovieList } from "../defaultMovies/defaultMovieList";

import { PageContainer } from "../singleMovie/singleMovie.styled";
import { IRootState } from "../../redux/store";
import { SearchMovieListPageProps } from "../../service/types";

export const SearchMovieListPage = ({ setError, searchMovie } : SearchMovieListPageProps) => {
  const dispatch = useDispatch();
  const movies = useSelector((state: IRootState) => state.movies.movies);
  const favourites = useSelector((state: IRootState) => state.favouriteMovies.favouriteMovies);
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
          <SearchMovieList style={theme.changeTheme} movies={movies} />
        )
      ) : (
          <DefaultMovieList />
      )}
    </PageContainer>
  );
};
