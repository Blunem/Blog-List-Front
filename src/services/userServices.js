import netServices from './netServices'

const baseUrl = '/api/users'


const getAll = async () => {
  const response = await netServices.getAll(baseUrl)
  return response.data
}
const userServices = { getAll }

export default userServices