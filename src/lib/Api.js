import axios from 'axios'

export const ENDPOINTS = {
  register: { method: 'POST', url: '/register' },
  verifyAccount: { method: 'GET', url: '/verify-account' },
  login: { method: 'POST', url: '/login' },
  forgotPasswordRequest: {method: "POST", url: '/forgot-password-request'},
  resetPassword: {method: "POST", url: '/reset-password'}
}
const apiInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

export const apiCall = async (endpoint, options = null) => {
  let data = {}
 
  if (options) {
    data = options.data
  }

  try {
    const response = await apiInstance({
      ...endpoint,
      data,
    })
    return response.data
  } catch (err) {
    return false
  }
}
