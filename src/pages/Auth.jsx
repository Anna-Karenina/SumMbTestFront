import React from "react";
import { Switch, Route } from "react-router-dom";
import AuthButton from '../components/AuthButton'
import { NoAccess } from './../utils/helpers/NoAccessComponent'
import  SignIn  from '../containers/SignIn'
import  SignUp  from '../containers/SignUp'

export default function Auth({isAuth,hierarchy, fetchUserLogout, username}) {
 return (
  <div>
   <AuthButton 
    isAuth={isAuth} 
    username={username} 
    fetchUserLogout={fetchUserLogout}/>
    <Switch>
     <Route path="/auth/signin">
      <SignIn />
     </Route>
     <Route path="/auth/signup">
      <SignUp /> 
     </Route>
     <Route exact path="/auth/noaccess">
      <NoAccess isAuth={isAuth} hierarchy={hierarchy}/>
     </Route>
    </Switch>
  </div>
 );
}