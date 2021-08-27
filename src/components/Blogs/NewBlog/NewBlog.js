import React from 'react';
import BlogForm from '../BlogForm/BlogForm';
import Block from '../../Block/Block';


const NewBlog = () => {
    return(
        <Block Title = {'New Blog'}>
            <BlogForm/>
        </Block>
    )
}
export default NewBlog;