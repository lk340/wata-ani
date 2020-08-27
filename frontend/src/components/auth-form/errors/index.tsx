import * as React from "react";

import * as Context from "@/context";

import * as Styled from "./errors.styled";

export const Errors = () => {
  const { theme } = Context.Theme.useThemeContext();
  
  return (
    <Styled.Errors>Errors</Styled.Errors>
  );
};
