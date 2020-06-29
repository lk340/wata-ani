import styled, { createGlobalStyle } from "styled-components";

import * as Colors from "@/utils/style/colors";
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
    color: ${Colors.TEXT.white};
    background-color: ${Colors.DARK.one};
    border: none;
    font-size: ${Constants.fontSizes.layout.fallBack};
    /* font-family: "muli", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
    font-family: "muli";
  }
`;

export const LayoutChildren = styled("div")`
	margin: 0px auto;
	min-height: 100vh;

	border: white solid 1px;
`;
