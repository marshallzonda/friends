import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common/FormsControls/FormControls';
import {required} from '../../utils/validators/validators'
import { connect } from 'react-redux';
import {login} from '../../redux/auth-reducer'
import { Redirect } from 'react-router-dom';
import style from '../Common/FormsControls/FormControls.module.css'

const LoginForm =({handleSubmit,error})=>{
    
    return(
            <form onSubmit={handleSubmit}>
                <div>
                    <Field validate={[required]} placeholder={'Email'} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field  validate={[required]} placeholder={'Password'} type={'password'} name={'password'} component={Input}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login =(props)=>{
    const onSubmit =(formData)=>{
       props.login(formData.email,formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'profile'} />
    }
        return(
            <div>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            
    )
   
}
let mapStateToProps = (state)=>({
    isAuth:state.auth.isAuth
})
export default connect(mapStateToProps,{login})(Login) 