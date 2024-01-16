import axios from '@/util/axios'

export const login = ({ userName, password }) => {
  const data = {
    userName,
    password
  }
  return axios.request({
    url: '/login',
    data,
    method: 'post'
  })
}

export const saveError = () => {

  return axios.request({
    url: '/test/start',
    method: 'get'
  })
}