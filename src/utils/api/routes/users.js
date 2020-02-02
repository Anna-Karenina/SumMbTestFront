import axios from './../axios'

export default{
  signin: (postData) => axios.post('/auth/signin', postData),
  getMe: () => axios.get('/auth/me'),
  signup: (postData) => axios.post('/auth/signup', postData),
}