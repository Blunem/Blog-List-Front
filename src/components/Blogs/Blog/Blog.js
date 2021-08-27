import React from 'react';

import { Link } from "react-router-dom";
import { BsFillHeartFill, BsCardHeading } from "react-icons/bs";
import { BlogWrapper, FirstChild, LastChild } from './StyleBlog';


const Blog = ({ Instance } ) => {
    const blog = Instance
    return(
        
        <BlogWrapper gap={'0.5rem'} justify={'space-between'}>
            <FirstChild gap={'0.4rem'}>
                <BsCardHeading/>
                <Link to={`/blogs/${blog.id}`}><h6>{blog.title} {blog.author? `by ${blog.author}` : '' } </h6></Link>
            </FirstChild>
            <LastChild gap = {'0.8rem'}>
                <h6>{blog.likes}</h6>
                <BsFillHeartFill/>
            </LastChild>
        </BlogWrapper>
    )
}   

export default Blog;