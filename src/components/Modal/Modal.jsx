import { Modal, Button, Checkbox } from 'antd';
import React from 'react'
import Actions from './../../Redux/Actions/notifications'

const AppModal = ({item, handleOk , handleCancel,timerId }) => {
  const createdate = new Date(item.createdAt).toLocaleDateString()
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [hidegroup, setHidegroup] =React.useState(false)
  console.log(item)

  const showModal = () => {
    setVisible(true)
    //clearTimeout(timerId)
  };
  handleOk = () => {
    if(hidegroup === true){
    Actions.setThisGroupHide(item._id)
    setConfirmLoading(true)
    }else {
    setVisible(false)}
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false)
  };
  const changeHide = (e) => {
    setHidegroup(e.target.checked)
  }
    return (
      <div>
        <Button size="small" ghost type="primary" onClick={showModal}>
          Подробнее...
        </Button>
        <Modal
          title={item.title}
          visible={visible}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
        >
          <p style={{fontSize: '18px'}}>{item.discription}</p>
          <hr />
           <span>
             Категория: 
             <span style ={{fontWeight: 'bold'}}> {item.category}</span>
            </span>
           <Button>
           <Checkbox
            onChange={changeHide}>
              Не показывать данный тип категорий в дальнейшем
          </Checkbox>
          </Button>
          <hr />
          <span>Создал: {item.creator.name }</span>
          <br />
          <span>Созданно: {createdate}</span>
        </Modal>
      </div>
    );
}
export default AppModal