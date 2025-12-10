import './global.css';
// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomeScreen from './screens/HomeScreen'; // Your main screen
import { AppProvider } from 'context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </AppProvider>
  );
}
