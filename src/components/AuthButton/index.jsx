import React from "react";
import { useHistory, Link } from "react-router-dom";
import { Button } from 'antd'

const setSignOut = (fetchUserLogout,history)=>{
  delete window.localStorage.token
  fetchUserLogout(false)
  history.push("/auth/signin")
}

const  AuthButton = ({isAuth, fetchUserLogout, username})=> {
  let history = useHistory();
  const [name, setName] = React.useState(username)
  React.useEffect(()=>{
    return setName(username)
  },[username])
  return( 
  <>
  {
    isAuth ? (
      <p>
        Welcome!{" "}{name}
        <br />
        <Button
          onClick={()=>setSignOut(fetchUserLogout,history)}
        >
          Выйти
        </Button>
      </p>
    ) : (
      <>
      <p>Вы не Авторизованы</p>
      <Link to='/auth/signin'>
        <Button>Войти</Button>
      </Link>
      </>
    )
  }
  <Link to='../public'>
    <Button>На главную</Button>
  </Link> 
  <br />
  <br />
  <Link to='../adminmenu'>
    <Button>Меню администратора</Button>
  </Link> 
 </>
  )
}
// export default connect(null ,usersActions)(AuthButton)
export default AuthButton