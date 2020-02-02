import axios from './../axios'

export default{
  addNewNotice: (postData) => axios.put('/notice/create', postData),
  getAllNotice: () => axios.get('/notice/getall'),
  getSortedNotice: () => axios.get('/notice/getsorted?userId='+ window.localStorage.getItem('x')),
  addHideCategory: (id) => axios.post('/notice/sethidecategory', id)
}