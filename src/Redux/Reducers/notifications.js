const initstate = {
  data:[],

}
export default (state = initstate, { type , payload }) =>{
  switch (type) {
    case 'NOTIFICATIONS:SET_DATA':
      return {
        ...state,
        data: [...payload],
      };
    default:
      return state
  }
}
