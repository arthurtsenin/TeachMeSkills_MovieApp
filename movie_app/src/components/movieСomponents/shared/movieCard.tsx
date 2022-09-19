import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import { addFavouriteMoviesAction, removeFavouriteMoviesAction } from "../../redux/moviesReducer";
import { IRootState } from "../../redux/store";
import { ActionButton } from "../../shared/actionButton";
import { useTheme } from "../../theme/ThemeContext";

import { CardContainer } from "../movies/movies.styled";

export const MovieCard = ({ movie }: any) => {
  const theme = useTheme();
  const favourites = useSelector((state: any = []) => state.favouriteMovies.favouriteMovies);
  const isLoggedIn = useSelector((state: any) => !!state.auth.authData.accessToken);
  const { favouriteMovies } = useParams();
  
  let storedMovie = favourites.find((item: any) => item.imdbID === movie.imdbID);
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
