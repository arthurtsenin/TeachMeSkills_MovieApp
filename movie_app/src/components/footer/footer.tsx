import React from "react";

import { useTheme } from "../theme/ThemeContext";

import { FooterContainer } from "./footer.styled";

export const Footer = () => {
  const theme = useTheme();

  return <FooterContainer style={theme.changeTheme}>© Arthur Tsenin - TeachMeSkills - 2022 </FooterContainer>;
};
