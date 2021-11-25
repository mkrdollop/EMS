import React from 'react';
import '../../../assets/css/style.css';
import Navside from '../../NavsideBar/Navside';
import NavbarTop from '../../../DeployHead/Navigations/NavbarTop';
import { Link } from 'react-router-dom';
// import Footer from '../../DeployHead/Footer/Footer';

function AboutUs() {
    return (
        <>
        <div className="ems-dashboard dark dark-sidebar theme-black">   
		<div className="main-wrapper main-wrapper-1">

		{/* ///////////////Show Navigation Top Pages from Deployhead/NavbarTop*/}
        <NavbarTop />

		{/* ///////////////Show Sidebar Top Pages from Navsidebar/Navside*/}
        <Navside />
			<div className="main-content">
            <section className="section">
				<Link to="/aboutpage">
					<h4 className="border-bottom pb-2 mb-4 text-dark">
						AboutUs
					</h4>
				</Link>
					
					<div className="section-body">
						<div className="row">
							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="card">
									<form className="needs-validation" name="" id="plan" novalidate="">
										<div className="card-header">
											<h4>Add About Us</h4>
										</div>
										<div className="card-body">
											<div className="row">
												<div className="col-md-6">
													<div className="form-group">
														<label>Role</label>
														<select className="form-control" name="role" id="role">
														<option value="">Select Role</option>
														<option value="Client">Client</option>
														<option value="Employer">Employer</option>
														{/* <option value="KP">KP</option> */}
														</select>
													</div>
												</div>
												<div className="col-md-12">
													<div className="form-group ">
														<label>About</label>
														<textarea className="form-control" id="description" name="description" required="" value=""></textarea>
													</div>
												</div>
											</div>
										</div>
										<div className="card-footer text-right">

    									{/* ///////////Redirect page to AddAbout */}
										<Link to="/addaboutdata"><button type="submit" className="btn btn-primary" id="submitBtn">Add Contains</button></Link>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
        </div>    
        </div>   
        </>
    )
}

export default AboutUs;
