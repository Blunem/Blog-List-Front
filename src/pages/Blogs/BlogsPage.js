import React from 'react'
import { useSelector } from 'react-redux';
import BlogList from '../../components/Blogs/BlogList/BlogList';

const BlogsPage = () => {
    const blogs = useSelector(store => store.blogs)
    return(
        <>
            <BlogList data = { blogs } Title = {'All Blogs'} />
        </>
    )

}
export default BlogsPage