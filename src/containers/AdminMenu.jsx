import { connect } from "react-redux";
import { noticeActions } from "../Redux/Actions";
import AdminMenu from "../pages/AdminMenu";

const mapStateToProps = (state) =>{
  return{
    notification : state.notifications.data
    }
}
const mapDispachToProps = (dispatch) =>{
  return {
    fetchAllNoticeData : () => dispatch(noticeActions.fetchAllNoticeData())
  }
}
export default connect(mapStateToProps ,mapDispachToProps)(AdminMenu)