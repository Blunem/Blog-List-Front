import React from 'react';
import { Link } from "react-router-dom";
import { BsFillHeartFill, BsTrashFill, BsCardHeading } from "react-icons/bs";
import { BlogWrapper, FirstChild, LastChild, DeleteButton} from './StyleBlog';




const BlogCard = ({blog, handleDelete}) => {
   
    return(
        
        <BlogWrapper gap={'0.5rem'} justify={'space-between'}>
            <FirstChild gap={'0.4rem'}>
                <BsCardHeading/>
                <Link to={`/blogs/${blog.id}`}><h6>{blog.title} by {blog.author}</h6></Link>
            </FirstChild>
            <LastChild gap = {'0.8rem'}>
                <h6>{blog.likes}</h6>
                <BsFillHeartFill/>
                <DeleteButton onClick = {handleDelete} >
                    <BsTrashFill/>
                </DeleteButton>
            </LastChild>
        </BlogWrapper>
    )
}
export default BlogCard;