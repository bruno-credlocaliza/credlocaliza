import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Localizacao from "./pages/localizacao";
import Login from "./pages/login";

import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
    // <BrowserRouter>
        <Switch>
            {/* <Route exact path="/" component={Main}/> */}
            <Route path="/login" component={Login}/>
            <PrivateRoute path="/localizacao" component={Localizacao}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    // </BrowserRouter>
)

export default Routes;