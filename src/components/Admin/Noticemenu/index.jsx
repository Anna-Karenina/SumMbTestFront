import React from "react";
import { Menu, Icon } from "antd";

export default function Noticemenu({currentTab, setCurrentTab, fetchAllNoticeData}){
  
  const handleClick = e => {
    setCurrentTab(e.key)
  };
  return(
    <Menu 
      style={{marginTop: '.1vh'}}
      onClick={handleClick} 
      selectedKeys={[currentTab]} 
      mode="horizontal"
    >
    <Menu.Item key="createnotification">
      <Icon type="mail" />
      Создать Уведомление
    </Menu.Item>
    <Menu.Item 
      key="allnotification" 
      onClick={fetchAllNoticeData}>
      <Icon type="unordered-list" />
        Все уведомления
    </Menu.Item>
    <Menu.Item key="editnotification" >
      <Icon type="edit" />
        Редактировать Уведомление
    </Menu.Item>
    </Menu>
  );
}
