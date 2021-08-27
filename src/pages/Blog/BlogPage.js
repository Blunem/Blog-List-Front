import React from 'react'

import { useHistory, useRouteMatch  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import BlogPageLayout from './BlogPageLayout';
import { addComment, like, deleteBlog } from '../../reducers/blogs/blogsActions';

const BlogPage = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const match = useRouteMatch('/blogs/:id')

    const user = useSelector(state => state.auth.id)
    const blog = useSelector(state => state.blogs.find(blog => match? blog.id === (match.params.id) : false) )

  

    const handleDelete = (id) => {
        dispatch(deleteBlog(id,user))
        history.push('/')
    }

    const handleLike = (blog) => {
        const voted = {...blog, likes: blog.likes + 1}
        dispatch(like(voted))
    }

    const handleComment= (content) => {
        dispatch(addComment(blog.id, content ))
    }

    const blogActions = {
        like: handleLike,
        comment: handleComment,
        erase: handleDelete
    }

    const canEraseBlog = (blogId) =>  (user === blogId)

    return(
        <>
            <BlogPageLayout blog = {blog} actions = {blogActions} canDelete ={canEraseBlog}/>
        </>
    )
}

export default BlogPage;


