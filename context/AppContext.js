// src/context/AppContext.js
import React, { createContext, useState, useContext } from 'react';

// 1. Create Context
const AppContext = createContext();

// 2. Create Provider
export const AppProvider = ({ children }) => {
  // Define your state variables here
  const [data, setData] = useState(null);

  // Define your functions here
  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        updateData,
      }}>
      {children}
    </AppContext.Provider>
  );
};

// 3. Custom Hook for easy usage
export const useAppContext = () => useContext(AppContext);
