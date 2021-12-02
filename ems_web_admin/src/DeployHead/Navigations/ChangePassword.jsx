import React, { Fragment,useState } from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import NavbarTop from './NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
// import Navside from '../NavsideBar/Navside';
import Navside from '../../Components/NavsideBar/Navside';




function ChangePassword() {
	const [title, setTitle] = useState();
	// const [description, setDescription] = useState();
	const [password, setPassword] = useState();
	const [error, setError] = useState();
	const [passwordError, setPasswordError] = useState();
	let errors = {};	


	const validateForm=()=> {

		//let fields = this.state.fields;
		
		let formIsValid = true;
		errors["email"]="";
		errors["password"]="";

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
  
		//console.log(errors);
		setError({
		   error: errors
		});
		
		return formIsValid;
  
  
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
										<form className="needs-validation" name="planForm" id="plan" novalidate="">

									
											<div className="card-body">
											

													<div className="col-md-6"> 
														<div className="form-group">
															<label>Old Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="plan_title" name="plan_title" required=""/>
														</div>
													</div>



													<div className="col-md-6"> 
														<div className="form-group">
															<label>New Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="plan_title" name="plan_title" required=""/>
														</div>
													</div>


													<div className="col-md-6"> 
														<div className="form-group">
															<label>Confirm Password</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input onChange={e => setTitle(e.target.value)} type="text" className="form-control" id="plan_title" name="plan_title" required=""/>
														</div>
													</div>

												</div>
								

											<div className="card-footer text-right">
											<Link to="/addplanlist"><button type="submit" className="btn btn-primary" id="submitBtn">Submit</button></Link>
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
