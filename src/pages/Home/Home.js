import React from 'react'
import { useSelector } from 'react-redux';

import BlogList from '../../components/Blogs/BlogList/BlogList'
import NewBlog from '../../components/Blogs/NewBlog/NewBlog';

const Home = () => {
    
    const auth = useSelector(store => store.auth)
    const blogs = useSelector(store => store.blogs)

    const userBlogs = (param) => blogs.filter(blog => blog.user.id.includes(param))

    return(
        <>
            <BlogList Title = {`${auth.name}'s blogs`} data = { userBlogs(auth.id) }/>
            <NewBlog/>
        </>
    )
}

export default Home