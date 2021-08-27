import React from 'react';
// import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { loginUser } from '../../reducers/auth/authActions';
import { useField } from "../../hooks/useField";
import { Form, InputContainer, SubmitButton} from './StyleLoginForm';

import authServices from '../../services/authServices';

const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [username, resetUsername] = useField('text',0,'Blunem');
  const [password, resetPassword] = useField('password',0,'$Fullstack2021');

  const can = () => ((username.value && password.value) );
  const handleSubmit = async (event) => {
    event.preventDefault()
    authServices.login({
          username:username.value,
          password: password.value
        })
        .then(auth => {
          dispatch(loginUser(auth))
          history.push('/')
        })
        .catch(e => {
          const errorInfo = e.response
          console.log(errorInfo)
        });
    resetUsername();
    resetPassword();
  }

  return (
        <Form space={ '1rem' } onSubmit={handleSubmit}>
            <h2>Login</h2>
            <InputContainer space = {'0.5rem'}>
              <label htmlFor = 'username'>Username</label>
              <input {...username} id = {'username'} placeholder = {'Username'} />
            </InputContainer>
            <InputContainer space = {'0.5rem'}>
              <label htmlFor = 'password'>Password</label>
              <input {...password} id = {'password'} placeholder = {'Password'} />
            </InputContainer>
            <SubmitButton  can = { can() } disabled ={ !can()} id='login-button' type='submit'>login</SubmitButton>  
        </Form>
  )
}
export default LoginForm

