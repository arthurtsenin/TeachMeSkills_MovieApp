import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { addFavouriteMoviesAction, removeFavouriteMoviesAction } from "../../redux/moviesReducer";
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

export const MovieCard = ({
  singleMovie,
  Title,
  Year,
  Poster,
  BoxOffice,
  Awards,
  imdbRating,
  Genre,
  Country,
  Runtime,
  Director,
  Actors,
  Rated,
  Plot,
}: any) => {
  const favourites = useSelector((state: any = []) => state.favouriteMovies.favouriteMovies);

  let storedMovie = favourites.find((item: any) => item.imdbID === singleMovie.imdbID);
  const favouriteDisabled = storedMovie ? true : false;
  const movieDisabled = storedMovie ? false : true;

  return (
    <SingleMovieContainer>
      <SingleMovieTitle>
        <SingleMovieTitleText>
          {Title}({Year})
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
          <img src={Poster} alt="Poster not found" />
        </SingleMoviePoster>
        <SingleMovieInfo>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>BoxOffice:</SingleMovieInfoTitle>
            {Title}{" "}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>BoxOffice:</SingleMovieInfoTitle> {BoxOffice}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Awards:</SingleMovieInfoTitle> {Awards}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>imdbRating:</SingleMovieInfoTitle> {imdbRating}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Genre:</SingleMovieInfoTitle> {Genre}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Year:</SingleMovieInfoTitle> {Year}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Country:</SingleMovieInfoTitle> {Country}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Runtime:</SingleMovieInfoTitle> {Runtime}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Director:</SingleMovieInfoTitle> {Director}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Actors:</SingleMovieInfoTitle> {Actors}
          </SingleMovieInfoText>
          <SingleMovieInfoText>
            <SingleMovieInfoTitle>Rated:</SingleMovieInfoTitle> {Rated}
          </SingleMovieInfoText>
        </SingleMovieInfo>
      </SingleMovieContent>
      <SingleMoviePlot> {Plot}</SingleMoviePlot>
    </SingleMovieContainer>
  );
};
