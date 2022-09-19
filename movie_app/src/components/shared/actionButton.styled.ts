import React, { useEffect } from "react";
import styled from "styled-components";

export const ButtonCard = styled.button`
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  padding: 8px;
  background: #ff2366;
  border-radius: 5px;
  color: white;
  text-align: center;
  transition: 0.5s ease;

  :hover {
    color: rgba(7, 6, 18, 0.8);
    transform: scale(1.01);
  }

  :disabled {
    background-color: #eee;
    border-color: #eee;
    color: #444;
    cursor: not-allowed;
    border: 1px solid gray;
  }
`;
