import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css';
import './login2.css'

const Login = () =>{
 const initialValues = {  email: "", password: "" };
const [formValues, setFormValues] = useState(initialValues);
const[formError, setFormErrors]= useState({});
const[isSubmit,setIsSubmit]= useState(false);

function handleChange(e) {
    const { name, value } = e.target;
   
    setFormValues({ ...formValues, [name]: value });
    
    
}
const  handleSubmit=(e)=>{
    e.preventDefault();
   setFormErrors(validate(formValues))
   setIsSubmit(true)


}
const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
   
    if (!values.password) {
        errors.password = "Password is required";
    }
    if (!values.email) {
        errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format";
    }
    return errors;
};



return (
    <div className="container">
         {Object.keys(formError).length === 0 && isSubmit ? (
    <div className="ui message success">Signed in successfully</div>
  ) : <h3></h3>
    
  }

       
        <form onSubmit={handleSubmit} method='post'>
            <h1>Login Form</h1>
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email"  
                        value={formValues.email} 
                        onChange={handleChange} 
                        placeholder='Email'
                    />
                </div>
                <p>{formError.email}</p>
                <div className="field">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"  
                        value={formValues.password} 
                        onChange={handleChange} 
                        placeholder='Password'
                    />
                </div>
                <p>{formError.password}</p>
                <button type='submit' id='btn' className='fluid ui button blue'>Submit</button>
            </div>
        </form>
    </div>
);
}

    

export default Login
