
import * as Yup from 'yup'
// default values for Formik form
export const defaultValues={
    email:'',
    password:''
}
// validation function to check email and password for login
export const validationSchema=Yup.object().shape({
email:Yup.string().required('Required'),
password:Yup.string().required('Requied')
})