import React, { Fragment,useState } from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import NavbarTop from './NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
// import Navside from '../NavsideBar/Navside';
import Navside from '../../Components/NavsideBar/Navside';
import {BASE_URL} from '../../http-commen';



function ChangePassword() {
	const [title, setTitle] = useState();
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

		//let fields = this.state.fields;
		
		let formIsValid = true;
		// errors["password"]="";

		console.log(oldpassword);
		if (!oldpassword && newpassword) {
		   formIsValid = false;
		   //errors["password"] = "*Please enter your password.";
		   setOPasswordError("*Please enter your password.");
		}
		
		if (typeof oldpassword !== "undefined" && typeof newpassword !== "undefined") {
		   if (oldpassword.length < 6) {
				 formIsValid = false;
				 //errors["password"] = "*Please enter minimum 6 character.";
				 setOPasswordError("*Please enter minimum 6 character.");
		   } else if (oldpassword.length > 15) {
				 formIsValid = false;
				 //errors["password"] = "*Please enter maximum 15 character.";
				 setOPasswordError("*Please enter maximum 15 character.");
		   }
		}
  
		
		return formIsValid;
  
  
	 }



	 const handleSubmit = async e => {;
		e.preventDefault();
		
		if(validateForm()){
			changePassword({
				oldpassword,
				newpassword
			  });
			alert("success");
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
    .then(res => res.json())
    .then((result) => {
    //   setPlanList(result.plan);
      console.log(result);
      
    },[])
    
    }
  

    return (
    <Fragment>
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
										<form className="needs-validation" name="planForm" id="plan" onSubmit={handleSubmit} novalidate="">

									
											<div className="card-body">
											

													<div className="col-md-6"> 
														<div className="form-group">
															<label>Old Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setOldPassword(e.target.value)} type="text"  placeholder="Enter Old Password" className="form-control" id="plan_title" name="old_password" required=""/>
															<div>{opasswordError}</div>
														</div>
													</div>



													<div className="col-md-6"> 
														<div className="form-group">
															<label>New Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setNewPassword(e.target.value)} type="text"  placeholder="Enter New Password" className="form-control" id="plan_title" name="new_password" required=""/>
															<div>{npasswordError}</div>
														</div>
													</div>


													<div className="col-md-6"> 
														<div className="form-group">
															<label>Confirm Password</label>                                   
															<input type="hidden" name="plan_id"   value=""/>
															<input onChange={e => setCPassword(e.target.value)} type="text" placeholder="Confirm Password" className="form-control" id="plan_title" name="confirm_password" required=""/>
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
