import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useTheme } from "../../theme/ThemeContext";
import { FavouriteMovieList } from "./favouriteMovieList";

import { FavouritesListTitle } from "./favouriteMovies.styled";
import { PageContainer } from "../singleMovie/singleMovie.styled";
import { IRootState } from "../../redux/store";

export const FavouriteMovieListPage = () => {
  const theme = useTheme();
  const favourites = useSelector((state: IRootState) => state.favouriteMovies.favouriteMovies);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  return (
    <PageContainer style={theme.changeTheme}>
      <FavouritesListTitle>
        My favourite movies
        <hr />
      </FavouritesListTitle>
      <FavouriteMovieList />
    </PageContainer>
  );
};
