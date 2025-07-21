import React, { createContext, useContext, useState } from 'react';

// PUBLIC_INTERFACE
const ThemeContext = createContext();

// PUBLIC_INTERFACE
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  // Could expand to custom themes
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// PUBLIC_INTERFACE
export function useTheme() {
  return useContext(ThemeContext);
}
