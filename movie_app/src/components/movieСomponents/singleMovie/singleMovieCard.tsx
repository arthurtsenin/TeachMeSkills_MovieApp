import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { addFavouriteMoviesAction, removeFavouriteMoviesAction } from "../../redux/moviesReducer";
import { IRootState } from "../../redux/store";
import { singleMovieProps } from "../../service/types";
import { ActionButton } from "../../shared/actionButton";

import {
  SingleMovieContainer,
  SingleMovieTitle,
  SingleMovieTitleText,
  SingleMovieButtons,
  SingleMovieContent,
  SingleMoviePoster,
  SingleMovieInfo,
  SingleMovieInfoText,
  SingleMovieInfoTitle,
  SingleMoviePlot,
} from "./singleMovie.styled";

export const MovieCard = ({ singleMovie }: { singleMovie: singleMovieProps }) => {
  const favourites = useSelector((state: IRootState) => state.favouriteMovies.favouriteMovies);
  const storedMovie = favourites.find((item: singleMovieProps) => item.imdbID === singleMovie.imdbID);
  const favouriteDisabled = storedMovie ? true : false;
  const movieDisabled = storedMovie ? false : true;

  return (
    <SingleMovieContainer>
      <SingleMovieTitle>
        <SingleMovieTitleText>
          {singleMovie.Title}({singleMovie.Year})
        </SingleMovieTitleText>
        <SingleMovieButtons>
          <ActionButton
            disabled={favouriteDisabled}
            action={addFavouriteMoviesAction(singleMovie)}
            text={"Add to favourites"}
          />
          <ActionButton
            disabled={movieDisabled}
            action={removeFavouriteMoviesAction(singleMovie.imdbID)}
            text={"Remove from favourites"}
          />
        </SingleMovieButtons>
      </SingleMovieTitle>
      <SingleMovieContent>
        <SingleMoviePoster>
          <img src={singleMovie.Poster} alt="Poster not found" />
        </SingleMoviePoster>
        <SingleMovieInfo>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>BoxOffice:</SingleMovieInfoTitle>
            {singleMovie.Title}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>BoxOffice:</SingleMovieInfoTitle> {singleMovie.BoxOffice}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Awards:</SingleMovieInfoTitle> {singleMovie.Awards}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>imdbRating:</SingleMovieInfoTitle> {singleMovie.imdbRating}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Genre:</SingleMovieInfoTitle> {singleMovie.Genre}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Year:</SingleMovieInfoTitle> {singleMovie.Year}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Country:</SingleMovieInfoTitle> {singleMovie.Country}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Runtime:</SingleMovieInfoTitle> {singleMovie.Runtime}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Director:</SingleMovieInfoTitle> {singleMovie.Director}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Actors:</SingleMovieInfoTitle> {singleMovie.Actors}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Rated:</SingleMovieInfoTitle> {singleMovie.Rated}
          </SingleMovieInfoText>
        </SingleMovieInfo>
      </SingleMovieContent>
      <SingleMoviePlot> {singleMovie.Plot}</SingleMoviePlot>
    </SingleMovieContainer>
  );
};
