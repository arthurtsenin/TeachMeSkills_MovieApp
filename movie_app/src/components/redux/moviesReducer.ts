import React from "react";

const ADD_MOVIES = "ADD_MOVIES";
const ADD_MOVIES_DEFAULT = "ADD_MOVIES_DEFAULT";
const ADD_FAVOURITES = "ADD_FAVOURITES";
const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
const ADD_SINGLE_MOVIE = "ADD_SINGLE_MOVIE";

const moviesDefaultState = {
  movies: localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies") || "") : [],
  moviesDefault: [],
};

export const moviesReducer = (state: any = moviesDefaultState, action: any) => {
  switch (action.type) {
    case ADD_MOVIES:
      return { movies: action.payload };
    case ADD_MOVIES_DEFAULT:
      return { moviesDefault: action.payload };
    default:
      return state;
  }
};

const favouriteMoviesDefaultState = {
  favouriteMovies: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites") || "") : [],
};

export const favouriteMoviesReducer = (state: any = favouriteMoviesDefaultState, action: any) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return { ...state, favouriteMovies: [...state.favouriteMovies, action.payload] };
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.filter((movie: any) => movie.imdbID !== action.payload),
      };
    default:
      return state;
  }
};

const singleMovieDefaultState = {
  singleMovie: {},
};

export const singleMovieReducer = (state: any = singleMovieDefaultState, action: any) => {
  switch (action.type) {
    case ADD_SINGLE_MOVIE:
      return { singleMovie: action.payload };
    default:
      return state;
  }
};

export const addMoviesAction = (payload: any) => ({ type: ADD_MOVIES, payload });
export const addMoviesDefaultAction = (payload: any) => ({ type: ADD_MOVIES_DEFAULT, payload });
export const addFavouriteMoviesAction = (payload: any) => ({ type: ADD_FAVOURITES, payload });
export const removeFavouriteMoviesAction = (payload: any) => ({ type: REMOVE_FAVOURITES, payload });
export const addSingleMovieAction = (payload: any) => ({ type: ADD_SINGLE_MOVIE, payload });
