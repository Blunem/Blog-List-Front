import React from 'react'

import { useRouteMatch  } from 'react-router-dom';
import { useSelector} from 'react-redux';

import UserPageLayout from './UserPageLayout';

const UserPage = () => {

    const match = useRouteMatch('/users/:id')

    const stateBlogs = useSelector(state => state.blogs.filter(blog => match? blog.user.id === (match.params.id) : false))
    const stateUser = useSelector(state => state.users.find(user => match? user.id === (match.params.id) : false))
 

    const blogs = stateBlogs.map(blog => ({ likes: blog.likes, title: blog.title, id: blog.id }))
    const user =  {...stateUser, blogs  }

    return(
        <>
            <UserPageLayout user = {user} />
        </>
    )
}

export default UserPage;


