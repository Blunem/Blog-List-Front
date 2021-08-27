import blogsServices from "../../services/blogServices";
import { setError, errorExtractor } from '../error/errorActions';
import * as BlogActions from './blogActionsCreators';



const errorWatcher = (e, dispatch) => {
  const error = errorExtractor(e)
  dispatch(setError(error))
  return error
} 

const errorHandler = (e, dispatch, id='') => {
  const error = errorWatcher(e,dispatch)
  if (error.code === 404 && id )
    dispatch(BlogActions.eraseBlog(id))

}

export const addComment = (blogId,content) => {
    return async (dispatch) => {
      try{
        const commentReceived = await blogsServices.comment(blogId,content)
        dispatch(BlogActions.comment(commentReceived))
      }catch(e){
        errorHandler(e, dispatch, blogId)
      }
    }
  }

export const like = (blog) => {
  return async (dispatch) => {
    try{
      const updatedBlog = await blogsServices.vote(blog)
      dispatch(BlogActions.vote(updatedBlog))
    }catch(e){
      errorHandler(e, dispatch, blog.id)
    }
  }
}

export const deleteBlog = (id,userId) => {
  return async (dispatch) => {
    try{
       await blogsServices.deleteBlog(id)
       dispatch(BlogActions.eraseBlog(id,userId))
    }catch(e){
      errorHandler(e,dispatch, id)
    }
  }
}

export const getBlogs = () => {
    return async (dispatch) => {
        try{
            const blogs = await blogsServices.getAll()
            dispatch(BlogActions.setBlogs(blogs))
        }catch(e){
          errorHandler(e,dispatch)
        }
    }
}

export const  createBlog = (blogData) => {
    return async (dispatch) => {
        try{
            const addedBlog = await blogsServices.createBlog(blogData)
            dispatch(BlogActions.newBlog(addedBlog))
        }catch(e){
            errorHandler(e,dispatch)
      }
    }
  }
