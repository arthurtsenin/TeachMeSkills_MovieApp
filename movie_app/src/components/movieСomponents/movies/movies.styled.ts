import React, { useEffect } from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const MovieListContainer = styled.div`
  padding-top: 70px;
`;

export const CardContainer = styled(Card)`
	min-height: 520px;
	max-height: 520px;
	transition: 0.5s ease;
	width: 18rem;
	margin: 10px;
	display: flex;
	justify-content: space-between;
  :hover {
    position: relative;
    z-index: 2;
    transform: scale(1.04);
    cursor: pointer;
`



