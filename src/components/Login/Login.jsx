import { FormField } from "components/FormField/FormField"
import { Form, Formik } from "formik"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { fb } from "service"
import { defaultValues, validationSchema } from "./formikConfig"



export const Login = ()=>{
    // Error state for server
    const [serverError,setServerError]=useState('');

    const history =useHistory()

    const login=({email,password},{setSubmitting})=>{
        // do the sign in using firebase method 
        fb.auth.signInWithEmailAndPassword(email,password)
        .then(res=>{
            if(!res.user){
                setServerError('Problem in logging in. Please try again.')
            }
        })
        .catch(error=>{
            // catch firebase errors
            if(error.code==='auth/wrong-password'){
                setServerError('Invalid credentials');
            }else if(error.code==='auth/user-not-found'){
                setServerError('No account for this email');
            }else{
                setServerError('somthing went wrong');
            }
        })
        // finish submitting post
        .finally(()=>setSubmitting(false))
    }
    return (
        <div className='auth-form'>
            <h2>Login</h2>
            <Formik
            onSubmit={login}
            validateOnMount={true}
            initialValues={defaultValues}
            validationSchema={validationSchema}
            >
                {/* isvalid for the form and submitting for form status to enable or disable submit button */}
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
                        type='password'
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