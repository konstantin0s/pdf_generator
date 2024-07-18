import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [greyMode, setGreyMode] = useState(false);

  const toggleTheme = () => {
    setGreyMode((prevMode) => !prevMode);
  };

  return <ThemeContext.Provider value={{ greyMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
