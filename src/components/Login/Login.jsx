import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm =(props)=>{

    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} type={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} component={'input'} name={'rememberMe'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}
const LoginReduxForm = reduxForm({
    form:'login'
})(LoginForm)

const Login =(props)=>{
    const onSubmit =(formData)=>{
        console.log(formData)
    }

    return(
            <div>
                <h2>Login</h2>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
            
    )
}
export default Login