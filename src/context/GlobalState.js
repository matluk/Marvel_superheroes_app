import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
// initial state

const initialState = {
  favorites: localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [],
};

// create context

export const GlobalContext = createContext(initialState);

// provider components

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state]);

  //actions
  const addItemToFavorites = (item) => {
    dispatch({ type: "ADD_ITEM_TO_FAVORITES", payload: item });
  };

  const removeItemFromFavorites = (item) => {
    dispatch({ type: "REMOVE_ITEM_FROM_FAVORITES", payload: item });
  };



  return (
    <GlobalContext.Provider
      value={{
        favorites: state.favorites,
        addItemToFavorites,
        removeItemFromFavorites,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
