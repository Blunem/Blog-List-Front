import React from 'react';

import { BsFillHeartFill} from "react-icons/bs";
import {BiUserPin, BiUser, BiLinkAlt,BiMessageRoundedAdd,BiMessageDetail} from "react-icons/bi";

import CommentForm from './CommentForm/CommentForm';
import Block from '../../components/Block/Block';
import { StackList, DataCluster, Button } from './StyleBlogPage';

const BlogPageLayout = ({blog, actions, canDelete }) => {
    
    return(
        <>
            <Block Title = {blog.title}>
                <StackList space= {'0.4rem'}>
                    <DataCluster>
                        <BiLinkAlt/>
                        <h5> {blog.url}</h5>
                    </DataCluster>
                    <DataCluster>
                        <BiUserPin/>
                        <h5>Author: {blog.author}</h5>
                    </DataCluster>
                    <DataCluster>
                        <BiUser/>
                        <h5>Added by {blog.user.name}</h5>
                    </DataCluster>
                    <DataCluster>
                        <BsFillHeartFill/>
                        <h5>Likes: {blog.likes}</h5>
                    </DataCluster>
                    <DataCluster transparent justify = 'flex-end'>
                        <Button onClick={()=>{ actions.like(blog) }}>Like</Button>
                        {canDelete(blog.user.id)? <Button onClick = {() => {actions.erase(blog.id)}}>Delete</Button> : null }
                    </DataCluster>
                </StackList>
            </Block>

            <Block Title = {'Add Comment'}>
                <StackList space= {'0.4rem'}>
                        <DataCluster>
                            <BiMessageRoundedAdd/>
                            <CommentForm handleSubmit = { actions.comment }/>
                        </DataCluster>
                </StackList>
            </Block>

            <Block Title = {'Comments'}>
                <StackList space= {'0.4rem'}>
                    {blog.comments.map(comment => (
                        <DataCluster key={comment.id}>
                            <BiMessageDetail/>
                            <h5>{comment.content}</h5>
                        </DataCluster>))
                    }
                </StackList>
            </Block>
        </>
        )
}

export default BlogPageLayout;


