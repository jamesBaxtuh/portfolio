// External NPM Packages
import { createContext, useContext } from 'react';

export const ThemeContext = createContext();

// Custom hook for accessing theme
export const useTheme = () => useContext(ThemeContext);
