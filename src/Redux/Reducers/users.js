const initstate = {
  data:[],
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token
}
export default (state = initstate, { type , payload }) =>{
  switch (type) {
    case 'USER:SET_DATA':
      return {
        data: payload,
        isAuth: !!window.localStorage.token,
      }
    case 'USER:SET_IS_AUTH':
      return {
        ...state,
        isAuth: payload
    }


    default:
      return state
  }
}
