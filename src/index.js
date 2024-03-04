import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {ThemeProvider} from "styled-components";
import {Provider} from "react-redux";
import store from "./redux/store";
import theme from "./theme";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeModeProvider } from "./context/Context";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <ThemeModeProvider>
          <App />
          </ThemeModeProvider>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);