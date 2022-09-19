import React from "react";
import styled from "styled-components";

import { useTheme } from "../../theme/ThemeContext";
import { MovieCard } from "../shared/movieCard";

import { MovieListContainer } from "./movies.styled";


export const MovieList = ( {movies} :any) => {
  const theme = useTheme();

  return (
    <MovieListContainer style={theme.changePosition}>
      {movies.map((movie: any) => {
        return <MovieCard key={movie.imdbID} style={theme.changeTheme} movie={movie} />;
      })}
    </MovieListContainer>
  );
};
