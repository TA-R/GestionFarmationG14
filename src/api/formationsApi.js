import axiosClient from './axiosClient'

export const getFormations = async (search = '') => {
  const params = search.trim() ? { search } : {}
  const response = await axiosClient.get('/formations', { params })
  return response.data
}

export const createFormation = async (formation) => {
  const response = await axiosClient.post('/formations', formation)
  return response.data
}

export const updateFormation = async (id, formation) => {
  const response = await axiosClient.put(`/formations/${id}`, formation)
  return response.data
}

export const deleteFormation = async (id) => {
  await axiosClient.delete(`/formations/${id}`)
}
