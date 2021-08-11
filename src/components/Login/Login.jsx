import { FormField } from "components/FormField/FormField"
import { Form, Formik } from "formik"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { defaultValues, validationSchema } from "./formikConfig"



export const Login = ()=>{
    const [serverError,setServerError]=useState('');

    const history =useHistory()
    const login=({email,password},{setSubmitting})=>
    console.log('Logging In: ', email,password)
    return (
        <div className='auth-form'>
            <h2>Login</h2>
            <Formik
            onSubmit={login}
            validateOnMount={true}
            initialValues={defaultValues}
            validationSchema={validationSchema}
            >
                {({isValid,isSubmitting})=>(
                    <Form>
                        <FormField
                        name='email'
                        label='Email'
                        type='email'
                        />
                        <FormField
                        name='password'
                        label='Password'
                        type='passwrod'
                        />
                        <div className='auth-link-container'>
                            Do not have an account?{' '}
                            <span className='auth-link' onClick={()=>history.push('signup')}>
                                Sign Up {'>'}
                            </span>
                        </div>
                        <button disabled={isSubmitting || !isValid} type='submit'>
                                LogIn
                        </button>
                    </Form>
                )}
            </Formik>
            {serverError && <div className='error'>{serverError}</div>}

        </div>
    )
}