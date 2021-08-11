import * as Yup from 'yup'

export const defaultValues={
    email:'',
    password:'',
    userName:'',
    verifyPassword:'',
}

export const validationSchema=Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('Required'),
    password:Yup.string().required('Required').min(8,'Must be at least 8 charecters'),
    verifyPassword:Yup.string().required('Required').oneOf([Yup.ref('password'),null],'Passwords not same'),
    userName:Yup.string().required('Required').matches(/^\S*$/,'No spaces').min(3,'Must be at least 3 charecters')
})