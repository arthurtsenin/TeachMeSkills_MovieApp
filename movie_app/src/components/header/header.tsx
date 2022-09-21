import React, { ChangeEvent, Dispatch } from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { IRootState } from "../redux/store";
import { useTheme } from "../theme/ThemeContext";
import { Login } from "../service/login";
import { Logout } from "../service/logout";

import { FavouritesTitle, Logo, FavouritesCounter, FormContainer, FormControl, FormCheck } from "./header.styled";
import { HeaderProps } from "../service/types";



export const Header = ({ title, search, setSearch }: HeaderProps) => {
  const theme = useTheme();
  const favourites = useSelector((state: IRootState) => state.favouriteMovies.favouriteMovies);
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);

  return (
    <Navbar style={theme.changeTheme} fixed="top" expand="lg" variant={theme.changeBurger}>
      <Container fluid>
        <Link to="/">
          <Logo>{title}</Logo>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {isLoggedIn ? (
              <Link to="/favouriteMovies">
                <FavouritesTitle>
                  Favoutites {favourites.length > 0 ? <FavouritesCounter>{favourites.length}</FavouritesCounter> : ""}
                </FavouritesTitle>
              </Link>
            ) : null}
          </Nav>
          <FormContainer>
            <Link to="/">
              <FormControl
                value={search}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  event.preventDefault();
                  setSearch(event.target.value);
                }}
                placeholder="Type to find ..."
                className="me-2"
                aria-label="Search"
              />
            </Link>
            <FormCheck onChange={theme.toggleTheme} type="switch" label="Theme" />
          </FormContainer>
          {isLoggedIn ? <Logout /> : <Login />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
