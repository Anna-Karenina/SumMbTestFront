import { withFormik } from 'formik';
import { connect } from 'react-redux'
import SignUP from './../components/SignUp';
import { usersActions } from './../Redux/Actions';

const EnchantedSignUp = withFormik({
  mapPropsToValues: () => (
  {
     email: '', newusername: '' , signUpPassword:'', signUpPasswordrepeat: ''
   }),
  validate: values => {
    let errors = {};

    if (!values.email) {
      errors.email = 'Обязательно';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
        values.email
      )
    ) {
      errors.email = 'Неверный формат, укажите почту';
    }

    if(!values.signUpPassword){
      errors.signUpPassword = 'Обязательно ввести Имя и Фамилию';
    }

    if (!values.signUpPasswordrepeat) {
      errors.signUpPasswordrepeat = 'Обязательно';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.{3,})/.test(
        values.signUpPasswordrepeat
      )
    ) {
      errors.signUpPassword = 'Пароль должен состоять из 6 латинских букв и одной заглавной';
    }

    if (!values.signUpPassword) {
      errors.signUpPasswordrepeat = 'Обязательно';
    } else if (values.signUpPasswordrepeat !== values.signUpPassword)
     {
      errors.signUpPasswordrepeat = 'Пароли не совпадают';
    }

    return errors;
  },

  handleSubmit: (values,  { setSubmitting, setStatus, props }) => {
    values.email.toLowerCase()
    props.fetchUserRegister(values)
      .then(()=>{
        setTimeout(() => {
          props.history.push('/auth')
          setSubmitting(false)
        }, 1000);

      }).catch(err=>{
         if(err.status === 'error'){
           setStatus(err.status)
         }
      })
  },validateOnChange: true, validateOnBlur: false,
  displayName: 'SignUpForm',
})(SignUP);

const mapStateToProps = (state) =>{
  return{
    // status : state.user.data.status,
    // message : state.user.data.message,
    // variants: state.user.data.variants,
    }
  }
  const mapDispachToProps = (dispatch) =>{
    return {
      fetchUserRegister : (values) => dispatch(usersActions.fetchUserRegister(values))
    }
  }
export default connect(mapStateToProps, mapDispachToProps)(EnchantedSignUp)
