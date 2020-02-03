import { withFormik } from 'formik';
import SignIn from '../components/SignIn';
import { connect } from 'react-redux'
import {usersActions} from './../Redux/Actions';

const EnchantedSignIn = withFormik ({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validate: (values, touched) => {
    let errors = {};
    if (!values.email && !touched.email) {
      errors.email = 'Обязательно'
    }else if(values.email.length < 3){
      errors.email = 'Логин должен быть больше 3 знаков'
    }
    if(!values.password && !touched.password) {
      errors.password = 'Ввидите пароль!'
    }
    return( errors )
  },

  handleSubmit: (values, { setSubmitting, props}) => {
    props.fetchUserLogin(values)
      .then(()=>{
        
          setSubmitting(false)
        }
      ).catch(err => {
        console.log(err)
        setSubmitting(false)
        })
  },
  validateOnChange: true,
  validateOnBlur: false,
  displayName: 'SignInForm',
})(SignIn);


const mapStateToProps = (state) =>{
  return{
    // status : state.user.data.status,
    // message : state.user.data.message,
    // variants: state.user.data.variants,
    }
  }
  
  const mapDispachToProps = (dispatch) =>{
    return {
      fetchUserLogin : (values) => dispatch(usersActions.fetchUserLogin(values))
    }
  }

export default connect(mapStateToProps, mapDispachToProps)(EnchantedSignIn)
