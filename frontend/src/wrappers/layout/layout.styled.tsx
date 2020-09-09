import styled, { createGlobalStyle } from "styled-components";

import * as Constants from "@/utils/style/constants";

import muliVariable from "@/fonts/muli-variable.ttf";

export const Layout = styled("div")``;

export const LayoutGlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "muli";
    src: url(${muliVariable});
  }

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${Constants.theme.background};
    border: none;
    font-size: ${Constants.fontSizes.fallback};
    font-family: "muli", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: "muli";
  }
`;

export const LayoutChildren = styled("div")`
	overflow-x: hidden;
`;
