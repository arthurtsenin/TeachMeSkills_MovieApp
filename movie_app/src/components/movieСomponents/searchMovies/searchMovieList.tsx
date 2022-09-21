import React, { ComponentType, ReactNode } from "react";
import styled from "styled-components";
import { MovieListProps, MovieProps, StyleProps } from "../../service/types";

import { useTheme } from "../../theme/ThemeContext";
import { MovieCard } from "../shared/movieCard";

import { SearchMovieListContainer } from "./searchMovie.styled";

export const SearchMovieList = ({ movies }: { movies: MovieListProps; style: StyleProps }) => {
  const theme = useTheme();

  return (
    <SearchMovieListContainer style={theme.changePosition}>
      {movies.map((movie: MovieProps) => {
        return <MovieCard key={movie.imdbID} style={theme.changeTheme} movie={movie} />;
      })}
    </SearchMovieListContainer>
  );
};
