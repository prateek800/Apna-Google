import React, { createContext, useContext, useReducer } from "react";

// Data Layer preparation
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Hooks which allows us to pull info from data layer
export const useStateValue = () => useContext(StateContext);
