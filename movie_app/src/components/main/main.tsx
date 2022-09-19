import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { apiKey, movieService } from "../service/movieService";
import { MovieCardDefault } from "./movieCardDefault";
import { Loader } from "../shared/loader";

import { SliderContainer, SliderTitle } from "./main.styled";

export const MovieDefault = ({ setError, defaultMovieTitle1, defaultMovieTitle2, defaultMovieTitle3 }: any) => {
  const [defaultMovie1, SetDefaultMovie1] = useState([]);
  const [defaultMovie2, SetDefaultMovie2] = useState([]);
  const [defaultMovie3, SetDefaultMovie3] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMoviesDefault1 = async (defaultMovieTitle = "Star wars", SetDefault: any) => {
    try {
      setIsLoading(true);
      const response = await movieService.get(`/?${apiKey}&s=${defaultMovieTitle}`);
      if (response.data.Search) {
        SetDefault(response.data.Search);
      }
      setIsLoading(false);
    } catch (err: any) {
      setError(String(err));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMoviesDefault1(defaultMovieTitle1, SetDefaultMovie1);
    getMoviesDefault1(defaultMovieTitle2, SetDefaultMovie2);
    getMoviesDefault1(defaultMovieTitle3, SetDefaultMovie3);
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "35px",
        },
      },
    ],
  };

  return isLoading ? (
    <Loader loading={isLoading} />
  ) : (
    <SliderContainer>
      <SliderTitle>{defaultMovieTitle1}</SliderTitle>
      <hr />
      <Slider {...settings}>
        {defaultMovie1.map((movieCard: any) => {
          return <MovieCardDefault key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
      <SliderTitle>{defaultMovieTitle2}</SliderTitle>
      <hr />
      <Slider {...settings}>
        {defaultMovie2.map((movieCard: any) => {
          return <MovieCardDefault key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
      <SliderTitle>{defaultMovieTitle3}</SliderTitle>
      <hr />
      <Slider {...settings}>
        {defaultMovie3.map((movieCard: any) => {
          return <MovieCardDefault key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
    </SliderContainer>
  );
};
