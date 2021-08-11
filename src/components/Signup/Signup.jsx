import { Formik,Form} from "formik"
import { useHistory } from "react-router-dom"
import { useState } from "react"
import { FormField } from "components"
import { validationSchema,defaultValues } from "./formikConfig"
export const Signup = ()=>{
    const history=useHistory();
    const [serverError,setServerError]=useState('');
    const signup = ({email,userName,password},{setSubmitting})=>
    console.log('SignUp: ',email,userName,password)

    return <>
            <div className='auth-form'>
                <h2>Signup</h2>
                <Formik
                onSubmit={signup}
                validateOnMount={true}
                initialValues={defaultValues}
                validationSchema={validationSchema}
                >
                    {({ isValid,isSubmitting })=>(
                        <Form>
                            <FormField name='userName' label='User Name'/>
                            <FormField name='email' label='Email' type='email'/>
                            <FormField name='password' label='Password' type='password'/>
                            <FormField name='verifyPassword' label='Verify Password' type='password'/>
                            <div className='auth-link-container'>
                                Already have an account? {''}
                                <span className='auth-link' onClick={()=>history.push('login')}>
                                    LogIn {'>'}

                                </span>
                            </div>
                            <button disabled={isSubmitting || !isValid} type='submit'>
                                SignUp
                            </button>
                        </Form>
                    )}
                </Formik>
                {serverError && <div className='error'>{serverError}</div>}
            </div>
    </>
}