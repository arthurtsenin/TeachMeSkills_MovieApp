import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { ButtonCard } from "./actionButton.styled";

import { IRootState } from "../redux/store";


export const ActionButton = ({ action, text, disabled }: any) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: IRootState) => !!state.auth.authData.accessToken);

  return isLoggedIn ? <ButtonCard disabled={disabled} onClick={() => dispatch(action)}>{text}</ButtonCard> : null
};
