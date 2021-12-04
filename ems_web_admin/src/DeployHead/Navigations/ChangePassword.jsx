import React, { Fragment,useState } from 'react';
import '../../assets/css/style.css';
import { Link, useHistory,Redirect } from "react-router-dom";
import NavbarTop from './NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
// import Navside from '../NavsideBar/Navside';
import Navside from '../../Components/NavsideBar/Navside';
import {BASE_URL} from '../../http-commen';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


function ChangePassword() {

	//  const history = useHistory();
	// const [title, setTitle] = useState();
	const [oldpassword, setOldPassword] = useState();
	const [newpassword, setNewPassword] = useState();
	const [cpassword, setCPassword] = useState();
	// const [error, setError] = useState();
	const [opasswordError, setOPasswordError] = useState();
	const [npasswordError, setNPasswordError] = useState();
	const [cpasswordError, setCPasswordError] = useState();


	const token = localStorage.getItem("token");

	// let errors = {};	


	const validateForm=()=> {
		
		let formIsValid = true;
		
		// oldpassword
		console.log(oldpassword);
	
		if (!oldpassword){
				formIsValid = false;
				setOPasswordError("*Please enter your old password.");
		} 
		else if (oldpassword.length < 6 || oldpassword.length > 15) {
				formIsValid = false;
				setOPasswordError("*Enter password between 6 char and 15 char");
		}
	

		// newpassword
		if (!newpassword){
			formIsValid = false;
			setNPasswordError("*Please enter your new password.");
	  	} 
	  	else if (newpassword.length < 6 || newpassword.length > 15) {
			formIsValid = false;
			setNPasswordError("*Enter password between 6 char and 15 char");
	  	}
 
		// confirm password
		if (!cpassword){
			formIsValid = false;
			setCPasswordError("*Please enter your confirm password.");
	  	} 
	  	else if (cpassword.length < 6 || cpassword.length > 15) {
			formIsValid = false;
			setCPasswordError("*Enter password between 6 char and 15 char");
	  	}
		else if (newpassword != cpassword) {
			setCPasswordError("*Passwords Don't Match");
		}

		return formIsValid;
  
	 }



	const handleSubmit = async e => {
		e.preventDefault();
		
		if(validateForm()){
			changePassword({
				oldpassword,
				newpassword
			  });
			// alert("success");
			
		}
		
	}


	  async function changePassword(param){
		  console.log(param);

		  var details = {
			"old_password":param.oldpassword, 
			"new_password":param.newpassword
         };
      
         var formBody = [];
         for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");

        var responseData = await fetch(BASE_URL+"/admin_change_password",{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
            body:formBody
            // query:'users'
        })	
    .then(res =>{res.json()
	// console.log(res.json)
	})
    .then((result) => {
      console.log(result);
      
    },[])
	// const jsonResponse = await responseData.json();
	// console.log(jsonResponse);
	// if (responseData.status>=400){
	// 	  toast.error(jsonResponse.message);
	// }else{
	// 	  toast.success(jsonResponse.message);		  			  
	// }

	
	
    
    }
  

    return (
    <Fragment>
	 {/* <ToastContainer /> */}
		<div className="ems-dashboard dark dark-sidebar theme-black">    
			<div className="main-wrapper main-wrapper-1">

				{/* ///////export from DeployHead/Navigations Componantes */}
				<NavbarTop />

				{/* ///////Export from SidebarNav/Sidebar Componantes */}

				<Navside />
			{/* <!-- Main Content --> */}
				<div className="main-content overflow-hidden">
					<section className="section">
						<h4 className="border-bottom pb-2 mb-4 text-dark">
							Change Password
						</h4>
						<div className="section-body">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="card">
										<form className="needs-validation" name="planForm" id="plan" onSubmit={handleSubmit} noValidate="">

									
											<div className="card-body">
											

													<div className="col-md-6"> 
														<div className="form-group">
															<label>Old Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setOldPassword(e.target.value)} type="password"  placeholder="Enter Old Password" className="form-control" id="old_Password" name="old_password" required=""/>
															<div>{opasswordError}</div>
														</div>
													</div>



													<div className="col-md-6"> 
														<div className="form-group">
															<label>New Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setNewPassword(e.target.value)} type="password"  placeholder="Enter New Password" className="form-control" id="new_password" name="new_password" required=""/>
															<div>{npasswordError}</div>
														</div>
													</div>


													<div className="col-md-6"> 
														<div className="form-group">
															<label>Confirm Password</label>                                   
															<input type="hidden" name="plan_id"   value=""/>
															<input onChange={e => setCPassword(e.target.value)} type="password" placeholder="Confirm Password" className="form-control" id="confirm_password" name="confirm_password" required=""/>
															<div>{cpasswordError}</div>
														</div>
													</div>

												</div>
								

											<div className="card-footer text-right">
												<button type="submit" className="btn btn-primary" id="submitBtn">Submit</button>
											</div>

										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
			<Footer />
		</div>
    </Fragment>
    )
}

export default ChangePassword;
