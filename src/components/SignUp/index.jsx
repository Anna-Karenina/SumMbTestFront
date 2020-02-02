import React from "react";
import {  Link } from "react-router-dom";
import { Input, Tooltip, Icon, List, Card, Button } from 'antd';
import styled from './SignUp.module.css'

const SignUp = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  console.log(props)
  return (
    <>
    <List 
     style = {{ display: 'flex', justifyContent: 'center', alignItems: 'center' , height: '70vh'}}
     grid={{ gutter: 16, column: 1 }}
    >
    <List.Item
    style = {{width: '40vw' , textAlign: 'center'}}>
    <Card title='Регистрация'>
    <form onSubmit={handleSubmit}>
      <Input
        className = {styled.inputUserData}
        placeholder="Заполните Имя"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        touched = {touched}
        value={values.newusername}
        name="newusername"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title={`${errors.newusername}`}>
            { errors.newusername || errors.newusername !== undefined ? 
              <Icon type="info-circle" style={{ color: 'red' }} />
              :
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            }
          </Tooltip>
        }
      />
      <Input
        className = {styled.inputUserData}
        placeholder="Почта"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        touched = {touched}
        value={values.email}
        name="email"
        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title={`${errors.email}`}>
            { errors.email || errors.email !== undefined ? 
              <Icon type="info-circle" style={{ color: 'red' }} />
              :
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            }
          </Tooltip>
        }        
      />
      <Input
        className = {styled.inputUserData}
        placeholder="Пароль"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        touched = {touched}
        value={values.signUpPassword}
        name="signUpPassword"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title={`${errors.signUpPassword}`}>
            { errors.signUpPassword || errors.signUpPassword !== undefined ? 
              <Icon type="info-circle" style={{ color: 'red' }} />
              :
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            }
          </Tooltip>
        }        
      />
      <Input
        className = {styled.inputUserData}
        placeholder="Повторите пароль"
        type="password"
        onChange={handleChange}
        onBlur={handleBlur}
        touched = {touched}
        value={values.signUpPasswordrepeat}
        name="signUpPasswordrepeat"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title={`${errors.signUpPasswordrepeat}`}>
            { errors.signUpPasswordrepeat || errors.signUpPasswordrepeat !== undefined ? 
              <Icon type="info-circle" style={{ color: 'red' }} />
              :
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            }
          </Tooltip>
        }        
      />
      <Button onClick = {handleSubmit}>Регистрация</Button>
    </form>
    </Card>
    </List.Item>
    </List>
    <Link to="/public">Продолжить без авторизации</Link><br/>
    </>
  );
};
export default SignUp
