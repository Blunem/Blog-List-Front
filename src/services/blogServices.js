import netServices from './netServices'

const baseUrl = '/api/blogs'

const getAll = async () => {
  const response = await netServices.getAll(baseUrl)
  return response.data
}

const createBlog = async (blog) => {
    const response = await netServices.send(baseUrl, blog)
    return response.data
}

const deleteBlog = async (id) => {
  const response = await netServices.erase(baseUrl, id)
  return response.data
}

const vote = async (blog) => {
  const response = await netServices.update(`${baseUrl}/vote`, blog.id, blog)
  return response.data
}

const comment = async (blogId, content) => {
  const response = await netServices.send(`${baseUrl}/comment/${blogId}`, { content })
  return response.data
}


const blogsServices = { getAll, createBlog, deleteBlog, vote, comment, setToken: netServices.setToken };
export default blogsServices;