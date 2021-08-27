import React from 'react'

import { useField } from '../../../hooks/useField'
import { Input, Form, SubmitButton } from './StyleCommentForm'


const CommentForm = ( {handleSubmit} ) => {
    const [comment, resetComment] = useField('text')

    const handleSend = (event) => {
        event.preventDefault()
        handleSubmit( comment.value )
        resetComment()
    }
    return(
        <Form onSubmit = {handleSend} justify = {'space-between'} >
            <Input {...comment} id ={'comments'} placeholder = {'Comment'}/>
            {comment.value.trim().length >= 4? <SubmitButton type='submit' >Add</SubmitButton> : null}
        </Form>
    
    )

}

export default CommentForm