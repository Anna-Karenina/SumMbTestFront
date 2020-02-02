import React from "react";
import { Card } from 'antd';

const { Meta } = Card;

const Onenitis = ({title, discription, category,readed,createdAt ,creator  }) =>{
  let createdate = new Date(createdAt).toLocaleDateString()
  return(
    <Card 
      title={title} 
      style={{ width: 300, margin: '2% 0' }}>
    <p>{discription}</p>
    <Meta description={`Категория: ${category}`} />
    <Meta description={`Счетчик просмотров: ${readed.length}`} />
    <Meta description={ `Созданно: ${createdate}` } />
    <Meta description={`Создал: ${creator.name}`} />
    </Card>
  )
}
const ListOfAllNotification=({notification}) =>{
  
  return (
   <div style={{margin: '2% 0', height: '50vh', overflow: 'scroll'}} >
    {
      notification.map(i =>
        <Onenitis 
          key={notification.length++} 
          title={i.title} 
          discription={i.discription} 
          category={i.category} 
          readed={i.readed} 
          createdAt={i.createdAt} 
          creator = {i.creator} /> 
      )
    }
   </div>
  )
}
export default ListOfAllNotification