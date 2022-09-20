import React from "react";
import axios from "axios";

const urlMovie = "http:www.omdbapi.com/?s=star wars&";
export const apiKey = "apikey=94eef3f9"

// b6adf45a


export const movieService = axios.create({
  baseURL: "http://www.omdbapi.com",
});
