import { notisApi } from './../../utils/api/routes'

const Actions = {
  setStoreNoticeData: data => ({
    type: "NOTIFICATIONS:SET_DATA",
    payload: data
  }),
   setNoticeData: (postData) => dispatch => {
    return  notisApi.addNewNotice(postData)
    .then(({data})=>{
      dispatch(Actions.setStoreNoticeData(data))
    }).catch(({ err }) => {
          console.log(err)
      });
    },
    fetchAllNoticeData:()=> dispatch =>{
      return notisApi.getAllNotice()
      .then(({data}) =>{
        dispatch(Actions.setStoreNoticeData(data))
      })
      .catch(({ err }) => {
        console.log(err)
    })
  },
    fetchSortNoticeData:()=> dispatch =>{
      return notisApi.getSortedNotice()
      .then(({data}) =>{
        dispatch(Actions.setStoreNoticeData(data))
      })
      .catch(({ err }) => {
        console.log(err)
    });
    },
    setThisGroupHide: (id) => {
      console.log(id)
      return notisApi.addHideCategory({id})
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
  };

  export default Actions
