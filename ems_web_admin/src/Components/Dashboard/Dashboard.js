import React, { Fragment } from 'react';
import '../../assets/css/style.css';

import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Footer from '../../DeployHead/Footer/Footer';
import Navside from '../NavsideBar/Navside';
import ShowData from '../DataTables/ShowData'

function Dashboard() {
	const stockVeiwMenu=[
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
	
	]
   
    return (
<Fragment>
	<div className="ems-dashboard dark dark-sidebar theme-black">    
		<div className="main-wrapper main-wrapper-1">
			{/* // export from DeployHead/Navigations Componantes*/}
			<NavbarTop />

			{/* // Export from SidebarNav/Sidebar Componantes */}
			<Navside />

			{/* // Main Content */}
			<div className="main-content">
				{/* <!-- Cards --> */}
				<section className="section custom_crds_on_dashboard">
					<h4 className="border-bottom pb-2 mb-4 text-dark">
						Dashboard
					</h4>
					<div className="row">
						<div className="col-xl-3 col-lg-6">
							<a href="#" className="card">
								<div className="card-bg">
									<div className="py-3 d-flex justify-content-between" style={{border: "2px solid orange",borderRadius:"7px"}}>
										<div className="col">
											<span className="dash_count col-black font-weight-bold mb-0 font-20 totalUser">2555</span>
											<h6 className="col-dark-gray mb-0">Total Users</h6>
										</div>
										
										<i className="icons_custom_on_dash card-icon col-orange font-30 p-r-30"><FaUsers/></i>
									</div>
								</div>
							</a>
						</div>
						<div className="col-xl-3 col-lg-6">
							<a href="#" className="card">
								<div className="card-bg">
									<div className="py-3 d-flex justify-content-between" style={{border: "2px solid #2f9ff7",borderRadius:"7px"}}>
										<div className="col">
											<span className="dash_count mb-0 col-black font-weight-bold font-20 totalEmployer">2455</span>
											<h6 className="col-dark-gray mb-0">Total Employers</h6>
										</div>
										<i className="icons_custom_on_dash  card-icon col-blue font-30 p-r-30"><FaUserTie/></i>
									</div>
								</div>
							</a>
						</div>
						<div className="col-xl-3 col-lg-6">
							<a href="#" className="card">
								<div className="card-bg">
									<div className="py-3 d-flex justify-content-between" style={{border: "2px solid #08a395",borderRadius: "7px"}}>
										<div className="col">
											<span className="dash_count mb-0 col-black font-weight-bold font-20 totalApprovedKP">100</span>
											<h6 className="col-dark-gray mb-0">Total Companies</h6>
										</div>
										<i className="icons_custom_on_dash card-icon col-teal font-50 p-r-30"><FaHandshake/></i>
									</div>
								</div>
							</a>
						</div>
						<div className="col-xl-3 col-lg-6">
							<a href="#" className="card">
								<div className="card-bg">
									<div className="py-3 d-flex justify-content-between" style={{border: "2px solid #de268c",borderRadius: "7px"}}>
										<div className="col">
											<span className="dash_count col-black font-weight-bold mb-0 font-20 totalClient">141</span>
											<h6 className="col-dark-gray mb-0">Total Clients</h6>
										</div>
										<i className="icons_custom_on_dash card-icon col-yellow font-30 p-r-30"><FaUserSecret/></i>
									</div>
								</div>
							</a>
						</div>
					</div>
				</section>
				<section class="section">
					<div class="section-body">
						<div class="row">
							<div class="col-12">
								<div class="card table-card">
									<div class="card-header">
										<h4>All Plan</h4>
									</div>
									<div class="card-body">
										<div class="table-responsive">
											<table id="ShowPlan" class="table table-striped table-hover">
												<thead>
													<tr>
														<th>ID</th>
														<th>Title</th>
														<th>Fee</th>
														<th>Role Type</th>
														<th>Active</th>
														<th>Action</th>
													</tr>
												</thead>
												<tbody class="ShowPlan_tbody">

												{stockVeiwMenu.map((data, index) => {
																return (
																	<>
																	<tr>
																	<td>ID</td>
																	<td>lorem</td>
																	<td>lorem</td>
																	<td>lorem Type</td>
																	<td>Active usha</td>
																	<td>
																		<ShowData key={index} view={data.view} edit={data.edit} delete={data.delete} />
																	</td>
																	</tr>
																		</>
																	);
																	})}
													{/* <tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
														
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr>
													<tr>
														<td>ID</td>
														<td>lorem</td>
														<td>lorem</td>
														<td>lorem Type</td>
														<td>Active</td>
														<td>
															<div class="dropdown kb_menu_on_dta_tbl">
															<button class="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																<span class="material-icons">more_vert</span>
															</button>
															<div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">visibility</span>
																	View
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">edit</span>
																	Edit
																</a>
																<a class="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																	<span class="material-icons">delete_outline</span>
																	Delete
																</a>
															</div>
															</div>
														</td>
													</tr> */}
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<Footer />
		</div>
	</div>
</Fragment>
    )
}

export default Dashboard;
