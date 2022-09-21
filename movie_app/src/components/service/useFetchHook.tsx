import React, { useEffect, useState } from "react";
import { apiKey, movieService } from "./movieService";

type useFetchType = ReturnType<typeof useFetch>;

export const useFetch = (search: string) => {
  const [defaultMovie, SetDefaultMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMoviesDefault = async () => {
    try {
      setIsLoading(true);
      const response = await movieService.get(`/?${apiKey}&s=${search}`);
      if (response.data.Search) {
        SetDefaultMovie(response.data.Search);
      }
      setIsLoading(false);
    } catch (err: any) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMoviesDefault();
  }, []);

  return { defaultMovie, isLoading };
};
