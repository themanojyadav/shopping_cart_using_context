import { createContext, useReducer, useState } from "react";

export const ToastrContext = createContext();
const inititalState = {
  showToastr: false,
  message: "",
};

const reducer = (initialState, action) => {
  if (action.type === "SHOW_TOASTR") {
    let newState = {
      ...initialState,
      showToastr: true,
      message: action.payload.message,
    };
    return newState;
  }
  if (action.type === "HIDE_TOASTR") {
    let newState = {
      ...initialState,
      showToastr: false,
      message: "",
    };
    return newState;
  }

  return initialState;
};

const ToastrContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, inititalState);

  return (
    <ToastrContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastrContext.Provider>
  );
};

export default ToastrContextProvider;
