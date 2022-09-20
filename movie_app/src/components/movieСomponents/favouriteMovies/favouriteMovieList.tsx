import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useTheme } from "../../theme/ThemeContext";
import { MovieCard } from "../shared/movieCard";

import { FavouritesListText } from "./favouriteMovies.styled";

export const FavouriteMoviesList = () => {
  const theme = useTheme();
  const favourites = useSelector((state: any = []) => state.favouriteMovies.favouriteMovies);


  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <div style={theme.changePosition}>
      {favourites.length > 0 ? (
        favourites.map((movie: any) => {
          return <MovieCard key={movie.imdbID} movie={movie} />;
        })
      ) : (
        <FavouritesListText>Add your favourite movies</FavouritesListText>
      )}
    </div>
  );
};
