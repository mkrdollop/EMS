import React, { Fragment ,useState,useEffect} from 'react';
import '../../assets/css/style.css';
import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
import Navside from '../NavsideBar/Navside';
import {BASE_URL} from '../../http-commen';

function AddUserData() {
    const token = localStorage.getItem("token");
	const {id} = useParams();
	console.log(id);
    const  [isShowUserData, setIsShowUserData] = useState([]);

	// console.log(isShowUserData.company_name);
    useEffect(() => showUserHandler(), []);

	async function showUserHandler(){
        const Response = await fetch(BASE_URL+"/get_user_profile?user_id="+id,{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
        .then(res => res.json())
        .then((result) => { 
            // console.log(result);
            setIsShowUserData(result.userData);
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
															<input value={isShowUserData.company_name} type="company_name" className="form-control" id="plan_title" name={isShowUserData.company_name} required="" />
														</div>
													</div><div className="col-md-6"> 
														<div className="form-group">
															<label>Company Owner</label>                                   
															{/* <input type="hidden" name="plan_id" value=""/> */}
															<input value={isShowUserData.first_name} type="first_name" className="form-control" id="plan_title" name="plan_title" required="" />
														</div>
													</div>
                                                    <div className="col-md-6"> 
														<div className="form-group">
															<label>E-mail</label>                                   
															{/* <input type="hidden" name="plan_id" value=""/> */}
															<input value={isShowUserData.email} type="email" className="form-control" name="email" required="" />
														</div>
													</div>
                                                    <div className="col-md-6 no_of">
														<div className="form-group">
															<label>Mobile No.<span className="no_of_name"></span></label>
															<input value={isShowUserData.mobile} type="mobile" className="form-control" />
														</div>
													</div>
													{/* <div className="col-md-6 no_of">
														<div className="form-group">
															<label>Country Name<span className="no_of_name"></span></label>
															<input type="text" className="form-control" name="" required="" />
														</div>
													</div> */}
													<div className="col-md-6">
														<div className="form-group">
															<label>Role</label>
															<select className="form-control" name="role_type" id="role_type">
															<option value={isShowUserData.role_type}>{isShowUserData.role_type}</option>
															<option value="Client">Client</option>
															<option value="Employer">Employer</option>
															</select>
														</div>
													</div>
													<div className="col-md-6 ">
														<div className="form-group ">
															<label>Shift</label>
															<select className="form-control" name="work_timing_name" id="work_timing_name">
																<option value={isShowUserData.work_timing_name}>{isShowUserData.work_timing_name}</option>
																<option value="1">Day shift</option>
																<option value="1">Night shift</option>
																<option value="6">Half day</option>
															</select>
														</div>
													</div>
													<div className="col-md-6 fee">
														<div className="form-group">
															<label>Salary</label>
															<input value={isShowUserData.salary_amount} type="salary_amount" name="salary_amount" className="form-control" required=""/>
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
