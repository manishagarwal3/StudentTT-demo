import React , {useState} from 'react';
import './Register.css'
import {Link} from "react-router-dom";

const Register =()=>{

    const [values,setValues]= useState({
        fullname: "",
        rollno:"",
        password:"",
        
    });
    
    const handleFullname=(e) =>{
        setValues({...values, fullname:e.target.value})
    }

    const handlerollno=(e) =>{
        setValues({...values, rollno:e.target.value})
    }

    const handlepassword=(e) =>{
        setValues({...values, password:e.target.value})
    }

    const [submitted,setSubmitted]= useState(false);

    const[valid, setValid]=useState(false);
     

    const handleSubmit=(e)=>{
        e.preventDefault();
if(values.fullname && values.rollno && values.password)
{
    setValid(true);
}

        setSubmitted(true);
    } 


    return(
        <><p> 
        Already have an Account? <Link to='/'>Sign In</Link>
    </p>
    <h1>Create Account</h1>
    <form onSubmit={handleSubmit}>
        {submitted && valid ? <div className="success-message" >Success! Thankyou for registering</div> :null}
        <div>
            <h5>Full Name</h5>
            <input type="text" value={values.fullname} onChange={handleFullname}/>
            
        </div>
        {submitted && !values.fullname ? <span>Please enter full name </span> :null}

        <div>
            <h5>Roll</h5>
            <input type="text" value={values.rollno} onChange={handlerollno}/>
            

        </div>
        {submitted && !values.rollno ? <span>Please enter roll number </span> :null}


        <div>
            <h5>Password</h5>
            <input type="password" value={values.password} onChange={handlepassword}/>

        </div>
        {submitted && !values.password? <span> Enter password </span> :null}
        <br/>
        <div>
        <input type="submit" value="Submit"/>
        </div>
    </form>
    </>
)
};


export default Register;