import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useTheme } from "../../theme/ThemeContext";
import { FavouriteMoviesList } from "./favouriteMovieList";

import { FavouritesListTitle } from "./favouriteMovies.styled";
import { PageContainer } from "../singleMovie/singleMovie.styled";

export const FavouriteMoviesListPage = () => {
  const theme = useTheme();
  const favourites = useSelector((state: any = []) => state.favouriteMovies.favouriteMovies);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <PageContainer style={theme.changeTheme}>
      <FavouritesListTitle>
        My favourite movies
        <hr />
      </FavouritesListTitle>
      <FavouriteMoviesList />
    </PageContainer>
  );
};
