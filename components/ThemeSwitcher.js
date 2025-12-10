// src/components/ThemeSwitcher.js
import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme, theme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: theme.text }]}>
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        value={isDark}
        onValueChange={toggleTheme}
        trackColor={{ false: '#767577', true: theme.primary }}
        thumbColor={isDark ? theme.secondary : '#f4f3f4'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 150,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
});

export default ThemeSwitcher;
