import * as React from "react";
import Cookies from "js-cookie";

import * as Styled from "./csrf.styled";

const CSRFToken = Cookies.get("Co6kpjZ4jUn61vnF15QRXu");

export const CSRF = () => <Styled.CSRF value={CSRFToken} />;
