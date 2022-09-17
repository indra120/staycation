import axios from 'axios'

export default function request(token) {
  return axios.create({
    baseURL: '/api/',
    headers: {
      token: `Bearer ${token}`,
    },
  })
}