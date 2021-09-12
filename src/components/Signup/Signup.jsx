import { Formik,Form} from "formik"
import {fb} from 'service'
import { useHistory } from "react-router-dom"
import { useState } from "react"
import { FormField } from "components"
import { validationSchema,defaultValues } from "./formikConfig"
export const Signup = ()=>{
    const history=useHistory();
    const [serverError,setServerError]=useState('');
    const signup = ({email,userName,password},{setSubmitting})=>{
        fb.auth.createUserWithEmailAndPassword(email,password)
        .then(res=>{
            if(res?.user?.uid){
                fetch('/api/createUser',{
                    method:'POST',
                    headers:{
                       'Content-Type':'application/json',
                    },
                    body: JSON.stringify({
                        userName:res.user.userNamme,
                        userId: res.user.uid,
                    }),
                })
                .then(()=>{
                    fb.firestore
                    .collection('chatUsers')
                    .doc(res.user.uid)
                    .set({userName,avatar:''})
                })
            }else{
                setServerError('Problem in signing up, Please try again')
            }

        })
        .catch(error=>{
            if(error.code==='auth/wrong-password'){
                setServerError('Invalid credentials');
            }else if(error.code==='auth/user-not-found'){
                setServerError('No account for this email');
            }else{
                setServerError('somthing went wrong');
            }
        })
        .finally(()=>setSubmitting(false))
    }

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
