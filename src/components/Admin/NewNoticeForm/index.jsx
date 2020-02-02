import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux'
import { noticeActions } from './../../../Redux/Actions'
import { Input, Form, List, Card, Button,Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const AddNewNotification = props => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    isValid,
  } = props;
  console.log(props)

  const selectHandleChange =(e)=>{
    setFieldValue('category', e)
  }

  return (
    <List 
     style = {{ 
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center' , 
      height: '55vh'}}
     grid={{ gutter: 16, column: 1 }}
   >
    <List.Item
      style = {{width: '50vw' , textAlign: 'center'}}>
     <Card title='Создать уведомление'>
      <Form layout="vertical" onSubmit={handleSubmit}>
      <Input
        size="large" 
        placeholder="Заголовок" 
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        name="title"
        style = {{ marginBottom: '1.5vh'}}
      />
      <TextArea 
        placeholder="Текст уведомления" 
        allowClear
        onChange={handleChange} 
        name="discription"
        onBlur={handleBlur}
        value={values.discription}
        style = {{ marginBottom: '1.5vh'}}/>
      <Select
        name="category"
        showSearch
        style={{ width: 200,  marginBottom: '1.5vh' }}
        placeholder="Выбрать категорию"
        optionFilterProp="children"
        onChange={selectHandleChange} 
        onBlur={handleBlur}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="art">Искусство</Option>
        <Option value="sport">Спорт</Option>
        <Option value="music">Музыка</Option>
      </Select><br />
      {errors.title &&  errors.discription && <div id="feedback">{errors.title || errors.discription}</div>}
      <Button disabled ={!isValid} loading = {isSubmitting} onClick={handleSubmit}>Отправить</Button>
    </Form>
      </Card>
    </List.Item>
    </List>
  );
};

const EnhancedAddNewNotification = withFormik({
  mapPropsToValues: () => ({ 
    discription: '' ,
    category: '',
    title: '' }),
  validate: values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Заголовок не должен быть пустым';
    }
    else if(values.title.length > 240) {
      errors.title = 'Максимальная длина заголовка 240 символов';
    }
    if (!values.discription) {
      errors.discription = 'Описание не должно быть пустое';
    }
    if (!values.category){
      errors.category = 'Категория должена быть выбрана';
    }
    return errors;
  },

  handleSubmit: (values, { setSubmitting,resetForm, props }) => {
    setSubmitting(true)
     props.setNoticeData(values)
     resetForm()
      setSubmitting(false);
  },
// TODO: асинхронные запросы не работают, алерт с подтверждением
  displayName: 'AddNewNotification',
})(AddNewNotification);


const mapDispachToProps = (dispatch) =>{
  return {
    setNoticeData : (values) => dispatch(noticeActions.setNoticeData(values))
  }
}
export default connect(null ,mapDispachToProps )(EnhancedAddNewNotification)