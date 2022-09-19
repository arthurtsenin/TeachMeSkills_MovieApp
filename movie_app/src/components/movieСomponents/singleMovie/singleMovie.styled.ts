import React from "react";
import styled from "styled-components";

export const PageContainer = styled.div`
min-height: 100vh;
`
export const SingleMovieContainer = styled.div`
	max-width: 1170px;
	margin: 0 auto;
	padding-top: 70px;
`
export const  SingleMovieTitle =styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
export const  SingleMovieTitleText =styled.div`
	font-size: 3.5rem;
	padding: 10px;
	width: 650px;
`
export const SingleMovieButtons =styled.div`
	width: 450px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
`
export const SingleMovieContent =styled.div`
	padding: 10px;
	display: flex;
`

export const SingleMoviePoster =styled.div`
	margin-right: 20px;
`
export const SingleMovieInfo =styled.div`
	font-size: 1.5rem;
`

export const SingleMovieInfoText =styled.div`
	font-size: 1.5rem;
	margin-bottom: 20px;
`

export const SingleMovieInfoTitle =styled.span`
	font-weight: 700;
  margin-right: 10px;
`

export const SingleMoviePlot =styled.div`
	padding: 10px;
	font-size: 2rem;
`