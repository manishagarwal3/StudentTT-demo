import React,{useState} from 'react'
import './Login.css'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [userval, setUserval] = useState("");
  const [passval, setPassval] = useState("");

  
  const navigate = useNavigate();

  const handlesubmit =(e) =>{
    e.preventDefault();
    navigate('/Coursemain');
  }

  return (
    <div className='main-login'>     
             <div className="login-contain">
               <div className="left-side">
                 <form onSubmit ={handlesubmit}>
                   <label htmlFor="username" >Username :</label>
                        <input placeholder='Enter username' value={userval} onChange={(e)=>{setUserval(e.target.value)}} id="uname"/>
                    <br/>
                   <label htmlFor ="pwd"> Password :</label>
                        <input placeholder='Enter password' type="password" value={passval} onChange={(e)=>{setPassval(e.target.value)}} id="pwd"/>
                    <br/>    
                        <button type="submit"  id="sub_button">Login</button>
                                <div className="footer">
                  {/* <h4><Link to='/AllCourses'>Login Link</Link> </h4> */}
                </div>

                 </form>
               </div>
               <div className="right-side"></div>
            </div>
        <div className="footer">
          <h4>Don't have account ? <Link to='/Register'> Register Now</Link> </h4>
        </div>
    </div>
  )
}

export default Login