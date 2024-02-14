import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager, ThemeProvider } from "styled-components";

import App from "./App";
import "normalize.css";
import "./assets/css/index.less";
import store from "./stores";
import { theme } from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Suspense fallback="loading">
      <BrowserRouter>
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </StyleSheetManager>
      </BrowserRouter>
    </Suspense>
  </Provider>
);
