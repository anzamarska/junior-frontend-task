import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { Header } from "components/Header";
import { Home } from "pages/Home";
import  MyProfile from "pages/MyProfile/MyProfile"
import { GlobalStyle, theme } from "./styles";

export const App = () => (
  <Router>
    <Switch>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        <Header />

        <Route exact path="/">
          <Home />
        </Route>
        
        <Route path="/my-profile">
          <MyProfile />
        </Route>
    </ThemeProvider>
    </Switch>
  </Router>
);
