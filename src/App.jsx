import React, { Suspense } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import Loader from "./Components/Loader";
// import ShatteredImage from "./Components/Shatter";
// import Navbar from "./Components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = React.lazy(() => import("./Components/Home"));

const lightTheme = createTheme({
  palette: {
    mode: "light",
    // primary: {
    //   main: "#05223b",
    // },
    // secondary: {
    //   main: "#EEE2B1",
    // },
    // tertiary: {
    //   main: "#FFFFFF",
    // },
    // background: {},
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: "linear-gradient(150deg,#fffff 20%, #fff4d9 140%)",
        },
      },
    },
  },
});

// color pallets
// #090909
// #F2EED7
// #F2B31D
// #7C7C7C

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
