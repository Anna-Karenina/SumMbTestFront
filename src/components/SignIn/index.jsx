import React from "react";
import {  Link } from "react-router-dom";
import { Input, Tooltip, Icon, List, Card, Button } from 'antd';
import styled from './SignIn.module.css'

const SignIn = props => {
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
    <Card title='Авторизация'>
    <form onSubmit={handleSubmit}>
      <Input
        className = {styled.inputUserData}
        placeholder="Ввидите почту"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        touched = {touched}
        value={values.email}
        name="email"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
        value={values.password}
        name="password"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={
          <Tooltip title={`${errors.password}`}>
            { errors.password || errors.password !== undefined ? 
              <Icon type="info-circle" style={{ color: 'red' }} />
              :
              <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
            }
          </Tooltip>
        }        
      />
      <Button onClick = {handleSubmit}>Войти</Button>
    </form>

    <Link to="/auth/signup">Регистрация</Link>
    </Card>
    </List.Item>
    </List>
    <Link to="/public">Продолжить без авторизации</Link><br/>
    <Link to="/adminmenu">Admin Page</Link>
    </>
  );
};
export default SignIn
