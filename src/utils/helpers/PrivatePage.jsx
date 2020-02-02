import React from "react";
import { Route,Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuth, hierarchy,children, ...rest }) => {
  console.log(hierarchy)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth && hierarchy === 3 ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/auth/noaccess",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute