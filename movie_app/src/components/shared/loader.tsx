import React from "react";
import { FlapperSpinner } from "react-spinners-kit";
import styled from "styled-components";

import { LoaderContainer } from "./loader.styled";

interface MainLoaderProps {
  color?: string;
  size?: number;
  loading: boolean;
  speedMultiplier?: number;
}

export const Loader = ({ color = "black", size = 60, loading = false, speedMultiplier = 1 }: MainLoaderProps) => {
  return (
    <LoaderContainer >
      <FlapperSpinner color={color} size={size} speedMultiplier={speedMultiplier} loading={loading} />
    </LoaderContainer>
  );
};
