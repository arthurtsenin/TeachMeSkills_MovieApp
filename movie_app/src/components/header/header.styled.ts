import React from "react";
import styled from "styled-components";
import { Form } from "react-bootstrap";

export const MovieListContainer = styled.div`
  padding-top: 70px;
`;

export const Logo = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding: 8px;
  background: #ff2366;
  border-radius: 5px;
  color: white;
  margin-right: 15px;
`;

export const FavouritesTitle = styled.div`
  position: relative;
  font-size: 20px;
  font-weight: 700;
  padding: 8px;
  background: #ff2368;
  border-radius: 5px;
  color: white;
  max-width: 115px;
`;

export const FavouritesCounter = styled.div`
  position: absolute;
  top: 0px;
  right: -17px;
  background: red;
  border-radius: 20px;
  font-size: 17px;
  width: 25px;
  text-align: center;
  padding: 3px;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormControl = styled(Form.Control)`
  min-width: 200px;
`;

export const FormCheck = styled(Form.Check)`
margin: 0 10px 0 10px;
`;
