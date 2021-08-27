import React, { useEffect } from 'react';
import { Route, Switch, Redirect,useHistory } from "react-router-dom";

import Login from '../../pages/Login/Login';
import Dashboard from '../../pages/Dashboard/Dashboard';

import {restoreUser} from '../../reducers/auth/authActions';

import { useSelector, useDispatch } from 'react-redux';

const SystemRoute = () => {
    
    const history = useHistory()
    const dispatch = useDispatch()
    const auth = useSelector(store => store.auth)
    
    useEffect(() => {
        const authUserJSON = window.localStorage.getItem('authUser')
        if (authUserJSON){
            const authUser = JSON.parse(authUserJSON)
            dispatch(restoreUser(authUser))
            history.push('/')
        }
    },[dispatch, history])

    return (
            <Switch>
                <Route path='/login'>
                   <Login/>
                </Route>
                <Route path='/'>
                    { auth? <Dashboard/> : <Redirect to='/login'/> }
                </Route>
            </Switch>  
    )
}
export default SystemRoute