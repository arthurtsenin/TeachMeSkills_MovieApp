import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

import { DefaultMovieCard } from "./defaultMovieCard";
import { Loader } from "../../shared/loader";

import { SliderContainer, SliderTitle } from "./defaultMovieList.styled";
import { useFetch } from "../../service/useFetchHook";
import { MovieProps } from "../../service/types";

export const DefaultMovieList = () => {
  const firstLineTitle = "star wars";
  const secondLineTitle = "Avengers";
  const thirdLineTitle = "Toy story";

  const firstLine = useFetch(firstLineTitle);
  const secondLine = useFetch(secondLineTitle);
  const thirdLine = useFetch(thirdLineTitle);

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

  return firstLine.isLoading ? (
    <Loader loading={firstLine.isLoading} />
  ) : (
    <SliderContainer>
      <SliderTitle>{firstLineTitle}</SliderTitle>
      <hr />
      <Slider {...settings}>
        {firstLine.defaultMovie.map((movieCard: MovieProps) => {
          return <DefaultMovieCard key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
      <SliderTitle>{secondLineTitle}</SliderTitle>
      <hr />
      <Slider {...settings}>
        {secondLine.defaultMovie.map((movieCard: MovieProps) => {
          return <DefaultMovieCard key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
      <SliderTitle>{thirdLineTitle}</SliderTitle>
      <hr />
      <Slider {...settings}>
        {thirdLine.defaultMovie.map((movieCard: MovieProps) => {
          return <DefaultMovieCard key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
    </SliderContainer>
  );
};
