import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IRootState } from "../../redux/store";
import { MovieProps } from "../../service/types";

import { useTheme } from "../../theme/ThemeContext";
import { MovieCard } from "../shared/movieCard";

import { FavouritesListText } from "./favouriteMovies.styled";

export const FavouriteMovieList = () => {
  const theme = useTheme();
  const favourites = useSelector((state:IRootState) => state.favouriteMovies.favouriteMovies);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div style={theme.changePosition}>
      {favourites.length > 0 ? (
        favourites.map((movie: MovieProps) => {
          return <MovieCard  style={theme.changePosition} key={movie.imdbID} movie={movie} />;
        })
      ) : (
        <FavouritesListText>Add your favourite movies</FavouritesListText>
      )}
    </div>
  );
};
