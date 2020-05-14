import * as React from "react";
import axios from "axios";

import * as Helpers from "@/context/helpers";
import * as Stubs from "@/mirage/stubs";

// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = "CSRFToken"
// axios.defaults.withCredentials = true

type State = {
  Field
};

const initialState = Object.freeze<State>({
  Field
});

export const useTodosContext = Helpers.createUseContext(() => {
  const [todos, _setTodos] = React.useState<State>({ ...initialState });

// =============== //
// ↓↓↓ Getters ↓↓↓ //
// =============== //

// =============== //
// ↓↓↓ Setters ↓↓↓ //
// =============== //

  const setTodos = (state: Partial<State>) => _setTodos({ ...todos, ...state });

// =============== //
// ↓↓↓ Handlers ↓↓↓ //
// =============== //

// =============== //
// ↓↓↓ API ↓↓↓ //
// =============== //

// =============== //
// ↓↓↓ Exports ↓↓↓ //
// =============== //

  const state = todos;

  const getters = {};

  const setters = {
     setTodos
   };

  const handlers = {};

  const api = {};

  return {
    todos: { state, getters, setters, handlers, api },
  };
});

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <useTodosContext.Provider>{children}</useTodosContext.Provider>;
};
