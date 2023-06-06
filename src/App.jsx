import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import GlobalStyle from "./styles/globalStyles";

import Themes from "./themes/mainTheme";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState("null");

  const updateState = (newState) => {
    setState(newState);
  };

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
};

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={Themes[0]}>
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
