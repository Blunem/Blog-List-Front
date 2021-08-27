import React from 'react';
import { Route, Switch } from "react-router-dom";

import Home from '../../pages/Home/Home';
import Error from '../../pages/Error/Error';
import UserPage from '../../pages/User/UserPage';
import BlogPage from '../../pages/Blog/BlogPage';
import BlogsPage from '../../pages/Blogs/BlogsPage';
import UsersPage from '../../pages/Users/UsersPage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/users/:id',
        main: () => <UserPage/>
    },
    {
        path: '/users',
        main: () => <UsersPage/>
    },
    {
        path: '/blogs/:id',
        main: () => <BlogPage/>
    },
    {
        path: '/blogs',
        main: () => <BlogsPage/>
    },
    {
        path: '/error',
        main: () => <Error/>
    },


]

const ContentRoute = () => {
    
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
                />
            ))}
        </Switch>
    )
}
export default ContentRoute