import React from 'react'

import { BsFillHeartFill} from "react-icons/bs";
import { BiUser,BiLayer} from "react-icons/bi";


import Block from '../../components/Block/Block';
import { StackList, DataCluster } from './StyleBlogPage'
import BlogList from '../../components/Blogs/BlogList/BlogList';

const likesAccumulator = (accumulator, currentValue) => accumulator + currentValue.likes;

const UserPageLayout = ({user}) => {
  
    
    const totalLikes = user.blogs.reduce(likesAccumulator,0)
    const popularBlogs = user.blogs.filter(blog => blog.likes >= 10)

    return(
        <>
            <Block Title = {user.username}>
                <StackList space= {'0.4rem'}>
                    <DataCluster>
                        <BiUser/>
                        <h5>Name: {user.name}</h5>
                    </DataCluster>
                    
                    <DataCluster>
                        <BiLayer/>
                        <h5>Blogs: {user.blogs.length}</h5>
                    </DataCluster>
                   
                    <DataCluster>
                        <BsFillHeartFill/>
                        <h5>Likes: {totalLikes} </h5>
                    </DataCluster>
                </StackList>
            </Block>

            <BlogList Title = {'Blogs'} data = {user.blogs}/>
            {user.blogs.length>1? <BlogList Title = {'Popular Blogs'} data = {popularBlogs}/> : null }
        </>
        )
}

export default UserPageLayout;


