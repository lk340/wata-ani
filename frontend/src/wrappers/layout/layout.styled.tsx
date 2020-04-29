import styled, { createGlobalStyle } from "styled-components";

export const Layout = styled("div")``;

export const LayoutGlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    border: none;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export const LayoutChildren = styled("div")``;
