import { userApi } from './../../utils/api/routes'

const Actions = {
  setUserData: data => ({
    type: "USER:SET_DATA",
    payload: data
  }),
  setUsersData: data => ({
    type: "USER:SET_USERS_DATA",
    payload: data
  }),
  fetchUserLogout: (bool) => dispatch =>({
    type: 'USER:SET_IS_AUTH',
    payload: bool
  }),
  fetchUserDataRepeat: (data) => dispatch => {
    dispatch(Actions.setUserData(data))
  },
  fetchUserData: () => dispatch => {
    userApi.getMe().then(({ data }) => {
        if(data === null){
          return  delete window.localStorage.token
        } else {
          const x = data.id
        window.localStorage["x"] = x;
        dispatch(Actions.setUserData(data));
        }
    }).catch((err)=>{
      if(err.response.status === 403){
        return delete window.localStorage.token
      }
    });
  },
  fetchUserLogin: (postData) => dispatch => {
    return  userApi.signin(postData).then(({data})=>{
      if (data.status === "error" ) {
        return dispatch(Actions.setUserData(data))
      } else{
        const { token } = data
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(Actions.fetchUserData());
      }}).catch(({ response }) => {
        if (response.status === 403) {
          console.log('1')
        }
      });
    },
    fetchUserRegister: (postData) => dispatch => {
      return userApi.signup(postData).then(({data}) =>
    console.log(data)
      )
      .catch( ({response}) => {
        if(response.status === 500) {
          dispatch(Actions.fetchUserDataRepeat(response.data ))
        }
      })
    },
  };

  export default Actions
