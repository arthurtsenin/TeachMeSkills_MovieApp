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
import { settings1, settings2, settings3 } from "./sliderSettings";

export const DefaultMovieList = () => {
  const firstLineTitle = "star wars";
  const secondLineTitle = "Avengers";
  const thirdLineTitle = "Toy story";

  const firstLine = useFetch(firstLineTitle);
  const secondLine = useFetch(secondLineTitle);
  const thirdLine = useFetch(thirdLineTitle);

  return firstLine.isLoading ? (
    <Loader loading={firstLine.isLoading} />
  ) : (
    <SliderContainer>
      <SliderTitle>{firstLineTitle}</SliderTitle>
      <hr />
      <Slider {...settings1}>
        {firstLine.defaultMovie.map((movieCard: MovieProps) => {
          return <DefaultMovieCard key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
      <SliderTitle>{secondLineTitle}</SliderTitle>
      <hr />
      <Slider {...settings2}>
        {secondLine.defaultMovie.map((movieCard: MovieProps) => {
          return <DefaultMovieCard key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
      <SliderTitle>{thirdLineTitle}</SliderTitle>
      <hr />
      <Slider {...settings3}>
        {thirdLine.defaultMovie.map((movieCard: MovieProps) => {
          return <DefaultMovieCard key={movieCard.imdbID} movie={movieCard} />;
        })}
      </Slider>
    </SliderContainer>
  );
};
