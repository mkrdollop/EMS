import React, { Fragment, useState,useEffect } from 'react';
import { Link, useHistory,Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import PropTypes from 'prop-types';
import './Login.css';


function Login() {

   const history = useHistory();
   // const [login,setLogin] = (useState);
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [error, setError] = useState();
   const [emailError, setEmailError] = useState();
   const [passwordError, setPasswordError] = useState();
   let errors = {};
    useEffect(() => {

        const token = localStorage.getItem("token");
        if (token != null ) {
            console.log(token);
            history.push({
               pathname:  "/dashboard",
               /* state: {
                  response: "messageFromServer" 
               }  */
            });
            
        }
        
    });

   //************ Login Validation ************* */

   const validateForm=()=> {

      //let fields = this.state.fields;
      
      let formIsValid = true;
      errors["email"]="";
      errors["password"]="";
      if (!email) {
         formIsValid = false;
         //errors["email"] = "*Please enter your email-ID.";
         setEmailError("*Please enter your email-ID.");
      }
      
      if (typeof email !== "undefined") {
         //regular expression for email validation
         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
         if (!pattern.test(email)) {
               formIsValid = false;
               //errors["email"] = "*Please enter valid email-ID.";
               setEmailError("*Please enter valid email-ID.");
         }
      }

      if (!password) {
         formIsValid = false;
         //errors["password"] = "*Please enter your password.";
         setPasswordError("*Please enter your password.");
      }
      
      if (typeof password !== "undefined") {
         if (password.length < 6) {
               formIsValid = false;
               //errors["password"] = "*Please enter minimum 6 character.";
               setPasswordError("*Please enter minimum 6 character.");
         } else if (password.length > 15) {
               formIsValid = false;
               //errors["password"] = "*Please enter maximum 15 character.";
               setPasswordError("*Please enter maximum 15 character.");
         }
      }

      /*  if (typeof fields["password"] !== "undefined") {
         //if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
               formIsValid = false;
               errors["password"] = "*Please enter secure and strong password.";
         }
      } */
      //console.log(errors);
      setError({
         error: errors
      });
      
      return formIsValid;


   }



   async function loginUser(credentials) {
   //   console.log(credentials);
      console.log(error);
      if(validateForm()){
         var details = {
            'email': credentials.email,
            'password': credentials.password,
         };
      
         var formBody = [];
         for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");
         const response = await fetch('http://localhost:3001/admin_login', {
            //mode: 'no-cors',
            method: 'POST',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            
            body:formBody
         }) 
         const jsonResponse = await response.json();
         //console.log(jsonResponse);
         if (response.status>=400){

               toast.error(jsonResponse.message);
         }else{
               toast.success(jsonResponse.message);
               localStorage.setItem('token', jsonResponse.token);
               history.push({
                  pathname:  "/dashboard",
               });
               
         }
      } 
  }




   const handleSubmit = async e => {;
      e.preventDefault();
      loginUser({
         email,
         password
      });
      
    }


    return (
   <Fragment>
   <ToastContainer />
   <div className="login_main_sec">
      <section className="section admin-login-page">
         <div className="container-fluid mt-3 row w-100">
            <div className="col-sm-12 col-md-6 col-lg-6">
               <div className="d-inline-block login_logo_ctnr">
                  <img style={{display:"block", margin:0, paddingBottom:35,height:"auto"}} alt="logo_main.png" src="./Image/logo_main.png" width="240" height="25"/>
               </div>
               <div className="card card-primary card_login_fl">
                  <div className="card-header d-block">
                     <h2 className="text-dark w-100 pb-1 mt-2">Login</h2>
                     <p className="border-bottom pb-2 font-14 mb-0">
                        Enter your email id or password to access your account.
                     </p>
                  </div>
                  <div className="card-body">
                     <form className="login_form" onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                           <label for="email">Email</label>
                           <input onChange={e => setEmail(e.target.value)} id="email" type="email" className="form-control" name="email" placeholder="Enter Your Email-ID"/>
                           
                           <div >
                              {emailError}
                              
                           </div>
                        </div>
                        <div className="form-group">
                           <label for="password">Password</label>
                           <input onChange={e => setPassword(e.target.value)} id="password" type="password" className="form-control" name="password" placeholder="Enter Your Password"/>
                           <div >
                              {passwordError}
                           </div>
                        </div>
                        <div className="form-group form-check mt-4 mb-0 d-flex align-items-center justify-content-between">
                           <div className="round float-left">
                                 <input type="checkbox" className="form-check-input h-auto" id="checkRememberMe"/>
                                 <label className="form-check-label" for="checkRememberMe"></label>
                                 <span className="remember_check_btn ml-0 pl-2 font-14 font-500">Remember Me</span>
                           </div>
                              <Link to="#" style={{textDecoration:"underline"}}>
                                 Forgot Password?
                              </Link>
                           </div>
                        <div className="form-group login_btn_group mb-0">
                           <button  type="submit" className="login_btn mb-0 btn btn-primary btn-lg btn-block">
                              Login
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 p-5 text-center login_vec_img_sec">
               <img alt="login_vec_img.png" src= "./Image/login_vec_img.png" style={{maxWidth: "75%"}}/>
            </div>
         </div>
      </section>
   </div>
   </Fragment>
    )
}
   Login.propTypes = {
      setToken: PropTypes.func.isRequired
   }

export default Login;
