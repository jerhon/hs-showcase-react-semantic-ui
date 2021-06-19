import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ShowcasePage} from "./pages/showcase-page";
import {LoginPage} from "./pages/login-page/login-page";

function App() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage}   />
      <Route>
        <ShowcasePage />
      </Route>
    </Switch>
  </BrowserRouter>
}

export default App;
