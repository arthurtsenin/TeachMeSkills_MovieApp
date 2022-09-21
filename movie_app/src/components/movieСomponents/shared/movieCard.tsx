import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { addFavouriteMoviesAction, removeFavouriteMoviesAction } from "../../redux/moviesReducer";
import { IRootState } from "../../redux/store";
import { MovieProps, StyleProps } from "../../service/types";
import { ActionButton } from "../../shared/actionButton";
import { useTheme } from "../../theme/ThemeContext";

import { CardContainer } from "../searchMovies/searchMovie.styled";

export const MovieCard = ({ movie }: { movie: MovieProps; style: StyleProps }) => {
  const theme = useTheme();
  const favourites = useSelector((state: IRootState) => state.favouriteMovies.favouriteMovies);
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);
  const { favouriteMovies } = useParams();

  let storedMovie = favourites.find((item: MovieProps) => item.imdbID === movie.imdbID);
  const favouriteDisabled = storedMovie ? true : false;

  return (
    <CardContainer style={theme.changeTheme}>
      <Link to={isLoggedIn ? `/movieList/${movie.imdbID}` : "/"}>
        <Card.Img style={{ height: "350px" }} src={movie.Poster} />
        <Card.Body>
          <Card.Title style={theme.changeLink}>
            {movie.Title} ({movie.Year})
          </Card.Title>
        </Card.Body>
      </Link>
      {favouriteMovies ? (
        <ActionButton action={removeFavouriteMoviesAction(movie.imdbID)} text={"Remove from favourites"} />
      ) : (
        <ActionButton
          disabled={favouriteDisabled}
          action={addFavouriteMoviesAction(movie)}
          text={"Add to favourites"}
        />
      )}
    </CardContainer>
  );
};
