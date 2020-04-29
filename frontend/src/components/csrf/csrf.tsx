import * as React from "react";
import Cookies from "js-cookie";

import * as Styled from "./csrf.styled";

const CSRFToken = Cookies.get("CSRFToken");

export const CSRF = () => <Styled.CSRF value={CSRFToken} />;
