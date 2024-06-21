import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  theme: 'light',
  dentists: [],
  favorites: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'ADD_TO_FAVORITES':
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }));
  }, []);

  const setTheme = (theme) => {
    dispatch({ type: 'SET_THEME', payload: theme });
  };

  const addToFavorites = (dentist) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: dentist });
  };

  return (
    <GlobalContext.Provider value={{ ...state, setTheme, addToFavorites }}>
      {children}
    </GlobalContext.Provider>
  );
};
