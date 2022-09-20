import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { addFavouriteMoviesAction } from "../redux/moviesReducer";
import { ActionButton } from "../shared/actionButton";
import { useTheme } from "../theme/ThemeContext";
import { IRootState } from "../redux/store";

import { CardContainer,LinkContainer, ImgContainer, TitleContainer} from "./movieCardDefault.styled";


export const MovieCardDefault = ({ movie }: any) => {
  const theme = useTheme();
  const favourites = useSelector((state: any = []) => state.favouriteMovies.favouriteMovies);
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
  let storedMovie = favourites.find((item: any) => item.imdbID === movie.imdbID);
  const favouriteDisabled = storedMovie ? true : false;

  return (
    <CardContainer style={theme.changeTheme}>
      <LinkContainer to={isLoggedIn ? `/movieList/${movie.imdbID}`: '/'}>
        <ImgContainer src={movie.Poster} />
        <Card.Body>
          <TitleContainer style={theme.changeLink}>
            {movie.Title} ({movie.Year})
          </TitleContainer>
        </Card.Body>
      </LinkContainer>
      <ActionButton  disabled={favouriteDisabled} action={addFavouriteMoviesAction(movie)} text={"Add to favourites"} />
    </CardContainer>
  );
};
