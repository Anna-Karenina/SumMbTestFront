import React from "react";
import {connect} from 'react-redux'
import { Button, notification, Card } from 'antd';
import {noticeActions} from '../Redux/Actions'
import socket from '../utils/socket'
import  AppModal  from "./../components/Modal/Modal";


const openNotification = (item ,timerID) => {
  const key = `open${item.id}`;
  const btn = (
    <AppModal item = {item} key = {key} timerID={timerID}/>
  );
  notification.open({
    message: item.title,
    placement:'bottomRight',
    description:item.discription,
    btn,
    key,
    duration: 0
  });

};

const showNotice =(notifications)=>{
  const userId  = window.localStorage.getItem('x')
  const nlenght = notifications.length
  for (let item = 0; item < nlenght; item++) {
    (function(x){
     let timerID =  setTimeout(()=>{
        openNotification(x ,timerID);
        updateReadStatus(notifications[item]._id,userId)
     },item*4500);
   }(notifications[item]));
  }
}
const updateReadStatus = (item, usersId) =>{
  socket.emit("CLIENT:READ_NOTIFICATIONS",
    {noticeID:item, 
    usersId:usersId }, (data) => {
    console.log(data)
  })
}

const  PublicPage = ({notifications, setStoreNoticeData,fetchAllNoticeData,fetchSortNoticeData , usersId})=> {
  const onNewNotification = data => {
    setStoreNoticeData([data]);
  };

  React.useEffect(() => {
    fetchSortNoticeData()
  },[fetchSortNoticeData]);

  React.useEffect(() => {
    showNotice(notifications)
  },[notifications]);

  React.useEffect(() => {
    socket.on("SERVER:NEW_NOTICE", onNewNotification);
    return () =>{
      socket.removeListener("SERVER:NEW_NOTICE", onNewNotification)};
  },);

  return(
    <div>
  <Button 
    type="primary" 
    onClick={()=>fetchAllNoticeData()}>
    Показать уведомления
  </Button>
    <br />
    <br />
    <div style={{display: 'flex', flexDirection: 'row', padding: '2vw'}}>
    <Card title="показать уведомления"  style={{ width: '32vw', margin: '2vw'}}>
      <p>при нажатии на кнопку воспроизводятся все уведомления которые есть в бд</p>
    </Card>
    <Card title='подробнее' style={{ width: '32vw', margin: '2vw'}}>
      <p>Автоматически показываются те,которые выкладываются оналйн из меню администратора(по вэбсокетам) и у которых нету статуса прочитанно и их нету в группе скрытых для конкретного пользователя. Отредактировть группы можно пока только нажав "подробнее"  на уведомлении </p>
    </Card>
    </div>

    </div>
  );
}
export default connect(
  ({ notifications }) => ({ 
    notifications: notifications.data}),
  noticeActions
)(PublicPage)