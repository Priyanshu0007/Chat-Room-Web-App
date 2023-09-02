import React from "react";
import { Switch } from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import PublicRoute from "./component/PublicRoute";
import PrivateRoute from "./component/PrivateRoute";
import Home from "./pages/home/Index";
import SignIn from "./pages/SignIn";
import "./styles/main.scss";
import {ProfileProvider} from "./context/profile.context";
function App() {
  return (
    <ProfileProvider>
    <Switch>
      <PublicRoute path="/signin">
        <SignIn/>
      </PublicRoute>
      <PrivateRoute path="/">
        <Home></Home>
      </PrivateRoute>
    </Switch>
    </ProfileProvider>
  );
}

export default App;
