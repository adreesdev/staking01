import React, { useMemo, useState } from "react";
import { responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { createCustomTheme } from "./utils/createCustomTheme";
import Home from "./components/Home/Home";
import Navbar from "./components/Home/Navbar";
import Cards from "./components/Home/Cards";

const App = () => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((val) => (val === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    let theme = createCustomTheme(mode);
    theme = responsiveFontSizes(theme);
    return theme;
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          limit={3}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Navbar />
        <Home />
        <Cards />
      </ThemeProvider>
    </>
  );
};

export default App;
