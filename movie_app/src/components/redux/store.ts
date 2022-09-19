import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";

import { favouriteMoviesReducer, moviesReducer, singleMovieReducer } from "./moviesReducer";
import authReducer from "./authReducer";


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    singleMovie: singleMovieReducer,
    favouriteMovies: favouriteMoviesReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...(process.env.NODE_ENV !== "production" ? [logger] : [])),
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
