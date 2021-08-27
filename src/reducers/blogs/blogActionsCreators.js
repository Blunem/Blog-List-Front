
export const newBlog = (blog) => {
    return{
      type: 'NEW_BLOG',
      payload: blog
    }
  }

export const setBlogs = (blogs) => {
    return{
      type: 'SET_BLOGS',
      payload: blogs
    }
  }

export const eraseBlog = (id, user) => {
    return{
      type: 'DELETE_BLOG',
      payload: {id, user}
    }
  }

export const vote = (blog) => {
    return{
      type: 'LIKE',
      payload: blog
    }
  }

export const comment = (comment) => {
    return{
      type: 'COMMENT',
      payload: comment
    }
  }
