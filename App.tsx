import './global.css';

// App.js
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomeScreen from './screens/HomeScreen'; // Your main screen

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}
