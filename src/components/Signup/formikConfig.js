import * as Yup from 'yup'
// signup validation
export const defaultValues={
    email:'',
    password:'',
    userName:'',
    verifyPassword:'',
}

export const validationSchema=Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('Required'),
    password:Yup.string().required('Required').min(2,'Must be at least 2 charecters (:'),
    verifyPassword:Yup.string().required('Required').oneOf([Yup.ref('password'),null],'Passwords are not same'),
    userName:Yup.string().required('Required').matches(/^\S*$/,'No spaces').min(3,'Must be at least 3 charecters')
})