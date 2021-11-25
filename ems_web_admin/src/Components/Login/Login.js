import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import './Login.css';

async function loginUser(credentials) {
   console.log(JSON.stringify(credentials));
   const data = {userEmail:"admin@gmail.com",userPassword:"123456"};
   /* const data = new FormData();
            data.append('email', "admin@gmail.com");
            data.append('password', "123456"); */
            
   return await fetch('http://localhost:3001/admin_login', {
   //return fetch('http://116.75.243.44:8080/poiesis_live/user_login', {
      mode: 'no-cors',
      method: 'POST',
      headers: {
         //'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
      },
      
      //body: data
      body: JSON.stringify(data)
   }) 
     /* .then(function(response) {

      console.log(response);

      }).catch(err=>{
         console.log("error : "+err);
      }) */
  }

function Login({setToken}) {
   const history = useHistory();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   /////////Redirect page to addplan
   function handleClick(){
      history.push("/dashboard");
   }

   const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
         email,
         password
      });
      console.log(token);
      //setToken(token);
    }

    
    return (
   <Fragment>
   <div className="login_main_sec">
      <section className="section admin-login-page">
         <div className="container-fluid mt-3 row w-100">
            <div className="col-sm-12 col-md-6 col-lg-6">
               <div className="d-inline-block login_logo_ctnr">
                  <img style={{display:"block", margin:0, paddingBottom:35,height:"auto"}} src="./Image/logo_main.png" width="240" height="25"/>
               </div>
               <div className="card card-primary card_login_fl">
                  <div className="card-header d-block">
                     <h2 className="text-dark w-100 pb-1 mt-2">Login</h2>
                     <p className="border-bottom pb-2 font-14 mb-0">
                        Enter your email id or password to access your account.
                     </p>
                  </div>
                  <div className="card-body">
                     <form onSubmit={handleSubmit} className="login_form">
                        <div className="form-group mb-4">
                           <label for="email">Email</label>
                           <input onChange={e => setEmail(e.target.value)} id="email" type="email" className="form-control" name="email" placeholder="Enter Your Email-ID"/>
                           {/* <input onChange={handleChange} id="email" type="email" className="form-control" name="email" placeholder="Enter Your Email-ID"/> */}
                           <div className="invalid-feedback">
                              Please fill in your email
                           </div>
                        </div>
                        <div className="form-group">
                           <label for="password">Password</label>
                           <input onChange={e => setPassword(e.target.value)} id="password" type="password" className="form-control" name="password" placeholder="Enter Your Password"/>
                           <div className="invalid-feedback">
                              please fill in your password
                           </div>
                        </div>
                        <div className="form-group form-check mt-4 mb-0 d-flex align-items-center justify-content-between">
                           <div className="round float-left">
                                 <input type="checkbox" className="form-check-input h-auto" id="checkRememberMe"/>
                                 <label className="form-check-label" for="checkRememberMe"></label>
                                 <span className="remember_check_btn ml-0 pl-2 font-14 font-500">Remember Me</span>
                           </div>
                              <a href="#" style={{textDecoration:"underline"}}>
                                 Forgot Password?
                              </a>
                           </div>
                        <div className="form-group login_btn_group mb-0">
                           <button type="submit" className="login_btn mb-0 btn btn-primary btn-lg btn-block">
                              Login
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div className="col-lg-6 p-5 text-center login_vec_img_sec">
               <img className="img-fluid" src= "./Image/login_vec_img.png" style={{maxWidth: "75%"}}/>
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
