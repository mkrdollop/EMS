import React, { Fragment } from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Navside from '../NavsideBar/Navside';

function AddPayment() {
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
							payments
						</h4>
						<div className="section-body">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="card">
										<form className="needs-validation" name="planForm" id="plan" novalidate="">
											<div className="card-header">
												<h4>Add payments</h4>
											</div>
											<div className="card-body">
												<div className="row">
													<div className="col-md-6"> 
														<div className="form-group">
															<label>Plan Title</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input type="text" value="" className="form-control" id="plan_title" name="plan_title" required=""/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Role</label>
															<select className="form-control" name="role" id="role">
															<option value="">Select Role</option>
															<option value="Client">Client</option>
															<option value="Employer">Employer</option>
															<option value="KP">KP</option>
															</select>
														</div>
													</div>
													<div className="col-md-12">
														<div className="form-group ">
															<label>Description</label>
															<textarea className="form-control" id="description" name="description" required="" value=""></textarea>
														</div>
													</div>
													
													<div className="col-md-6 plan_for" style={{display: "block"}}>
														<div className="form-group ">
															<label>Plan For</label>
															<select className="form-control" name="plan_for" id="plan_for">
																<option value="">Select Duration</option>
																<option value="1">1 Month</option>
																<option value="1">3 Month</option>
																<option value="6">6 Months</option>
																<option value="6">1 year</option>
															</select>
														</div>
													</div>
													
													<div className="col-md-6 duration" style={{display: "block"}}>
													<div className="form-group">
														<label>Features</label>
														<select className="form-control" name="duration" id="duration">
														<option value="">Payment method</option>
														<option value="1">by cash</option>
														<option value="6">Transactions</option>
														</select>
													</div>
													</div>
													
													<div className="col-md-6 fee" style={{display: "none"}}>
														<div className="form-group">
															<label>Fee</label>
															<input type="number" value="" id="fee" name="fee" className="form-control" required=""/>
														</div>
													</div>
													<div className="col-md-6 no_of" style={{display: "none"}}>
														<div className="form-group">
															<label> No of <span className="no_of_name"></span></label>
															<input type="number" value="" name="no_of" id="no_of" required="" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6 annual_dis" style={{display: "none"}}>
														<div className="form-group">
															<label> Annual Discount (IN %)</label>
															<input type="number" value="" name="annual_discount" id="annual_discount" required="" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6 no_of_add" style={{display: "none"}}>
														<div className="form-group">
															<label> No of Advertisement</label>
															<input type="number" value="" name="no_of_advertisement" id="no_of_advertisement" required="" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6 kp_earn" style={{display: "none"}}>
														<div className="form-group">
															<label> KP Earn</label>
															<input type="number" value="" name="kp_earn" id="kp_earn" required="" className="form-control"/>
														</div>
													</div>
													<div className="col-md-6 commission" style={{display: "none"}}>
														<div className="form-group">
															<label> Admin Commission (IN %)</label>
															<input type="number" value="" name="admin_commission" id="admin_commission" required="" className="form-control"/>
														</div>
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
		</div>
    </Fragment>
    )
}

export default AddPayment;
