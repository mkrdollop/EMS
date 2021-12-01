import React, { Fragment ,useState} from 'react';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
import Navside from '../NavsideBar/Navside';

function AddUserData(props) {
	console.log(props);
	const [addUser, setAddUser] = useState();
	// const {company,email,mobile,role_type,shift} = props;

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
							Add User Data
						</h4>
						<div className="section-body">
							<div className="row">
								<div className="col-12 col-md-10 col-lg-8 mx-auto">
									<div className="card">
										<form className="needs-validation" name="planForm" id="plan" novalidate="">
											<div className="card-header">
												<h4>Users</h4>
											</div>
											<div className="card-body">
												<div className="row">
													<div className="col-md-6"> 
														<div className="form-group">
															<label>Company Name</label>                                   
															{/* <input type="hidden" name="plan_id" value=""/> */}
															<input type="text" className="form-control" id="plan_title" name="plan_title" required="" />
														</div>
													</div>
                                                    <div className="col-md-6"> 
														<div className="form-group">
															<label>E-mail</label>                                   
															<input type="hidden" name="plan_id" value=""/>
															<input type="email" className="form-control" name="" required="" />
														</div>
													</div>
                                                    <div className="col-md-6 no_of">
														<div className="form-group">
															<label>Mobile No.<span className="no_of_name"></span></label>
															<input type="number" className="form-control" />
														</div>
													</div>
													<div className="col-md-6">
														<div className="form-group">
															<label>Role</label>
															<select className="form-control" name="role" id="role">
															<option value="">Select Role</option>
															<option value="Client">Client</option>
															<option value="Employer">Employer</option>
															</select>
														</div>
													</div>
													<div className="col-md-6 ">
														<div className="form-group ">
															<label>Shift</label>
															<select className="form-control" name="plan_for" id="plan_for">
																<option value="">Select Shift</option>
																<option value="1">Day shift</option>
																<option value="1">Night shift</option>
																<option value="6">Half day</option>
															</select>
														</div>
													</div>
													<div className="col-md-6 fee">
														<div className="form-group">
															<label>Salary</label>
															<input type="number" id="fee" name="fee" className="form-control" required=""/>
														</div>
													</div>
													
												</div>
											</div>
											<div className="card-footer text-right">
											<Link to="/alluserlist"><button type="submit" className="btn btn-primary" id="submitBtn">Submit</button></Link>
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

export default AddUserData;
