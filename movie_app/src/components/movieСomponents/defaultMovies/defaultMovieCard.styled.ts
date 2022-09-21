import React from "react";
import styled from "styled-components";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardContainer = styled(Card)`
width: 180px;
height: 330px;
display:flex;
:hover {
	position: relative;
	z-index: 2;
	transform: scale(1.01);
	cursor: pointer;
`;

export const ImgContainer = styled(Card.Img)`
  object-fit: cover;
  height: 200px;
`;

export const TitleContainer = styled(Card.Title)`
  font-size: 12px;
  padding: 0;
  flex: 1 1 auto;
`;

export const LinkContainer = styled(Link)`
  flex: 1 1 auto;
`;


