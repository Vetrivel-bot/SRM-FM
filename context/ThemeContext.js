import React, { createContext, useState, useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native'; // This detects iOS/Android settings
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme } from '../theme/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme(); // Returns 'light' or 'dark'
  const [themePreference, setThemePreference] = useState(null); // 'light', 'dark', or null (system)

  // 1. Load saved preference on startup
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('userTheme');
        if (savedTheme) {
          setThemePreference(savedTheme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    loadTheme();
  }, []);

  // 2. Determine active mode:
  // If we have a preference, use it. Otherwise, use the System Scheme.
  const activeMode = themePreference || systemScheme;

  // Calculate isDark based on the result above
  const isDark = activeMode === 'dark';

  // 3. Toggle Function (Saves the preference)
  const toggleTheme = async () => {
    const newMode = isDark ? 'light' : 'dark';
    setThemePreference(newMode); // Update State
    try {
      await AsyncStorage.setItem('userTheme', newMode); // Save to Storage
    } catch (error) {
      console.log('Error saving theme:', error);
    }
  };

  // 4. (Optional) Function to reset back to "System Default"
  // You can call this if you add a "Use System Settings" button later
  const resetToSystem = async () => {
    setThemePreference(null);
    try {
      await AsyncStorage.removeItem('userTheme');
    } catch (error) {
      console.log('Error removing theme:', error);
    }
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, resetToSystem }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
