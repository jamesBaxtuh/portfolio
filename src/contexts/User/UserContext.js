// External NPM Packages
import { useContext, createContext } from 'react';

export const UserContext = createContext();

// Custom hook for accessing context
export const useUserContext = () => useContext(UserContext);
