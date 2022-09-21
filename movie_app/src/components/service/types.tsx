import { Dispatch } from "react";

export interface StyleProps {
  [key: string]: string;
}

export interface HeaderProps {
  title: string;
  search: string;
  setSearch: Dispatch<string>;
}

export interface MovieProps {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type MovieListProps = Array<MovieProps>;

export interface singleMovieProps {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string };
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface ErrorProps {
  error: string;
}