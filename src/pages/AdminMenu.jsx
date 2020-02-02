  import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import Noticemenu from "../components/Admin/Noticemenu";
import NoticeContent from "../components/Admin/NoticeContent";
import AddNewNotification from "../components/Admin/NewNoticeForm";
import ListOfAllNotification from "../components/Admin/ListOfAllNotification";

const AdminMenu = ({fetchAllNoticeData,notification}) => {
  const [currentTab, setCurrentTab] = React.useState('createnotification')

  const componentsSwitch = (key) => {
    switch (key) {
      case 'createnotification':
        return <AddNewNotification  />
      case 'allnotification':
        return <ListOfAllNotification notification={notification}/>
      case 'editnotification':
        return (<h3>In progress..</h3>)
      default:
        break;
     }
    }
  return (
   <>
   <Link to='/public'>
     <Button>На главную</Button>
    </Link>
    <main>
      <div style ={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <div style ={{ 
          marginTop: '10vh',
          boxShadow: 'rgba(0, 0, 0, 0.3) 0.5px 1px 2px 0px',
          border: 'rgba(0,0,0,.2) solid 0.2px',
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center'}}>
        <Noticemenu
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab}
          fetchAllNoticeData ={fetchAllNoticeData} />
        <NoticeContent 
          currentTab={currentTab}
          componentsSwitch={componentsSwitch}
          notification={notification}/>
        </div>
      </div>
    </main>   
   </>
  )
}
export default AdminMenu