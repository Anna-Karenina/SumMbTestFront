import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Switch, Route, Redirect} from "react-router-dom";
import Auth from './pages/Auth'
import { connect } from 'react-redux'
import  AdminMenu from './containers/AdminMenu'
import PrivatePage from './utils/helpers/PrivatePage'
import { usersActions } from './Redux/Actions'
import PublicPage from './pages/PublicPage';


const App = ({fetchUserData, isAuth,  hierarchy,fetchUserLogout,username}) =>{
  const [redir, setRedir] = React.useState(false)

  React.useEffect(()=>{
    setTimeout(() => {
      setRedir(true) 
  }, 3000)
  })

  React.useEffect(()=>{
    if(isAuth){
       fetchUserData()
   }return //?
  },[isAuth, fetchUserData])

 return(
  <>
   {redir ? <Redirect to={'/auth'} /> : null}
  <Switch>
    <Route path="/auth" >
      <Auth 
        isAuth={isAuth} 
        fetchUserLogout={fetchUserLogout}
        username={username}/>
    </Route>
    <Route path="/public">
      <PublicPage />
    </Route>
    <PrivatePage 
      path="/adminmenu"
      hierarchy={hierarchy}
      isAuth = {isAuth}>
       <AdminMenu />
    </PrivatePage>
  </Switch>
  </>
 )
}
export default connect( ({ users} ) => ({ 
  isAuth: users.isAuth,
  hierarchy: users.data.hierarchy,
  username:users.data.name }), usersActions )(App)