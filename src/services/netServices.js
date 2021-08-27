import axios from 'axios'

let token = null;

export const setToken = newToken => {
  token = `bearer ${newToken}`
}

const auth = (authtoken) =>  {
  return authtoken?  { headers : { Authorization: token } } : null
}

const getAll = async (baseUrl) => {
  const response = await axios.get(baseUrl,auth(token))
  return response
}

const send = async (baseUrl, newObject) => {
  const response = await axios.post(baseUrl,newObject,auth(token))
  return response
}

const update = async(baseUrl,id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject, auth(token))
  return response
}

const erase = async(baseUrl,id) => { 
  const response = await axios.delete(`${baseUrl}/${id}`, auth(token))
  return response
}

const actions = { getAll, setToken, send, update, erase, token }
export default actions