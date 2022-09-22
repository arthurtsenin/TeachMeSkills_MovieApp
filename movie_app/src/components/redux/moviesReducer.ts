import React from "react";
import { MovieListProps, MovieProps, singleMovieProps } from "../service/types";

const ADD_MOVIES = "ADD_MOVIES";
const ADD_FAVOURITES = "ADD_FAVOURITES";
const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
const ADD_SINGLE_MOVIE = "ADD_SINGLE_MOVIE";


const moviesDefaultState = {
  movies: localStorage.getItem("movies") ? JSON.parse(localStorage.getItem("movies") || "") : [],
};


export const moviesReducer = (state: {movies:MovieListProps} = moviesDefaultState, action:any ) => {
  switch (action.type) {
    case ADD_MOVIES:
      return { movies: action.payload };
    default:
      return state;
  }
};


const favouriteMoviesDefaultState = {
  favouriteMovies: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites") || "") : [],
};

export const favouriteMoviesReducer = (state: {favouriteMovies:MovieListProps} = favouriteMoviesDefaultState, action: any ) => {
  switch (action.type) {
    case ADD_FAVOURITES:
      return { ...state, favouriteMovies: [...state.favouriteMovies, action.payload] };
    case REMOVE_FAVOURITES:
      return {
        ...state,
        favouriteMovies: state.favouriteMovies.filter((movie: MovieProps) => movie.imdbID !== action.payload),
      };
    default:
      return state;
  }
};

const singleMovieDefaultState = {
  singleMovie: {},
};
console.log(singleMovieDefaultState)

export const singleMovieReducer = (state: any = singleMovieDefaultState, action: any) => {
  switch (action.type) {
    case ADD_SINGLE_MOVIE:
      return { singleMovie: action.payload };
    default:
      return state;

  }

};



export const addMoviesAction = (payload: MovieListProps) => ({ type: ADD_MOVIES, payload });
export const addFavouriteMoviesAction = (payload: any) => ({ type: ADD_FAVOURITES, payload });
export const removeFavouriteMoviesAction = (payload:any) => ( { type: REMOVE_FAVOURITES, payload });
export const addSingleMovieAction = (payload: any) => ({ type: ADD_SINGLE_MOVIE, payload });
