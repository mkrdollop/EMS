import React from 'react';
import Navside from '../../NavsideBar/Navside';
import NavbarTop from '../../../DeployHead/Navigations/NavbarTop';
import { Link } from 'react-router-dom';

function FAQ() {
    return (
        <>
        <div className="ems-dashboard dark dark-sidebar theme-black">   
		<div className="main-wrapper main-wrapper-1">
        <NavbarTop />
        <Navside />
			<div className="main-content">
            <section className="section">
					<h4 className="border-bottom pb-2 mb-4 text-dark">
						FAQ
					</h4>
					<div className="section-body">
						<div className="row">
							<div className="col-12 col-md-10 col-lg-8 mx-auto">
								<div className="card">
									<form className="needs-validation" name="" id="plan" novalidate="">
										<div className="card-header">
											<h4>Add FAQ</h4>
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
														<label>Containt</label>
														<textarea className="form-control" id="description" name="description" required="" value=""></textarea>
													</div>
												</div>
											</div>
										</div>
										<div className="card-footer text-right">
										<Link to="/addfaq"><button type="submit" className="btn btn-primary" id="submitBtn">Add Contains</button></Link>
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

export default FAQ;
