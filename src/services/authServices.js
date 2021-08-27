import netServices from './netServices'

const baseUrl = '/api/auth'

const login = async credentials => {
  const response = await netServices.send(`${baseUrl}/login`, credentials)
  return response.data
}

const authServices = { login }

export default authServices