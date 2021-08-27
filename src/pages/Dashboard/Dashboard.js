import React, { useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { logUserOut } from '../../reducers/auth/authActions';

import { getBlogs } from '../../reducers/blogs/blogsActions';
import { getUsers } from '../../reducers/users/userActions';

import FrontPage from '../../Layouts/FrontPage/FrontPage';
import ContentRoute from '../../components/Routes/ContentRoute';



const Dashboard = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const auth = useSelector(store => store.auth)
    const error = useSelector(store => store.error)
 
    const handleLogout = () => {
        dispatch(logUserOut())
    }

    useEffect( () => {
        if(auth){
            dispatch(getBlogs())
            dispatch(getUsers())
        }
    },[dispatch,auth])

    useEffect( () => {
        if(error.code)
            history.push('/error') 
    },[history, error])

    return(
        <FrontPage user = {auth.name} actions = {{logout: handleLogout}}>
            <ContentRoute />
        </FrontPage>
    )
}
export default Dashboard