import React from 'react';
import { useDispatch } from 'react-redux';

import { createBlog } from '../../../reducers/blogs/blogsActions';
import { useField } from '../../../hooks/useField';

import { Form ,InputContainer, InputCluster, Input, SubmitButton, ClearButton } from './StyleBlogForm';
import { BiBookmark, BiUserPin, BiLinkExternal} from "react-icons/bi";


import { BsXCircleFill } from "react-icons/bs";

const BlogForm = ({ telephone }) => {
   
    const dispatch = useDispatch()
    const [author,resetAuthor] = useField('text')
    const [title,resetTitle] = useField('text')
    const [url,resetUrl] = useField('text')

    const canSend = () => author.value && url.value && title.value

    const handleReset = () => {
        resetAuthor()
        resetTitle()
        resetUrl()
    }

    const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(createBlog({
          author: author.value,
          title: title.value,
          url: url.value
      }))
      handleReset()
    }
    
    return(
        <Form onSubmit={handleSubmit} space={'0.5rem'}>

            <InputCluster justify = {'space-between'} gap ={'0.5rem'}>
                <InputContainer gap={'0.2rem'}>
                    <BiBookmark/>
                    <Input {...title} id = {'title'} placeholder = {'Title'} />
                </InputContainer>
                {title.value? <ClearButton type= {'button'} onClick = {resetTitle}><BsXCircleFill/></ClearButton> : null}
            </InputCluster>

            <InputCluster justify = {'space-between'} gap ={'0.5rem'}>
                <InputContainer gap={'0.2rem'}>
                    <BiUserPin/>
                    <Input {...author} id = {'author'} placeholder = {'Author'} />
                </InputContainer>
                {author.value? <ClearButton type= {'button'} onClick = {resetAuthor}><BsXCircleFill/></ClearButton> : null }
            </InputCluster>

            <InputCluster justify = {'space-between'} gap ={'0.5rem'}>
                <InputContainer gap={'0.2rem'}>
                    <BiLinkExternal/>
                    <Input {...url} id = {'url'} placeholder = {'Url'} />
                </InputContainer>
                { url.value? <ClearButton type= {'button'} onClick = {resetUrl}><BsXCircleFill/></ClearButton> : null }
            </InputCluster>
            { canSend()? <SubmitButton id='add-blog-button' type='submit'>Add</SubmitButton>  : null }
        </Form>
       
    )  
}

export default BlogForm