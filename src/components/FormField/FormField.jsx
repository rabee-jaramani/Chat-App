import { ErrorMessage,Field } from "formik";

//  form component with props ( name - label - type)
export const FormField = ({name,label,type='text'})=>(
    <label>
        {label}
        <Field type={type} name={name}/>
        <ErrorMessage className='error' component='div' name={name} />
     </label>
)