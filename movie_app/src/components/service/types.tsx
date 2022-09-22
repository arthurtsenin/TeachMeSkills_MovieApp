import {
  Dispatch,
  ReactChild,
  ReactFragment,
  ReactPortal,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

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
  DVD?: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore?: string;
  Plot: string;
  Poster: string;
  Production?: string;
  Rated: string;
  Ratings?: { Source?: string; Value?: string };
  Released?: string;
  Response?: string;
  Runtime: string;
  Title: string;
  Type?: string;
  Website?: string;
  Writer?: string;
  Year: string;
  imdbID?: string;
  imdbRating?: string;
  imdbVotes?: string;
}

export interface ErrorProps {
  error: string;
}

export interface ActionButtonProps {
  disabled?: boolean;
  text: string;
  action: {
    payload: MovieProps;
    type: string;
  };
}

export interface childrenProps {
  children: ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface SearchMovieListPageProps {
  searchMovie: string;
  setError: Dispatcher<string>;
}
