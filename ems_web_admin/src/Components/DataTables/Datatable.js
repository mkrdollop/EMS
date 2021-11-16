import React, { Fragment, useState } from 'react';
import '../../assets/css/style.css';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Navside from '../NavsideBar/Navside';
import { BsThreeDotsVertical } from "react-icons/bs";
import ShowData from './ShowData';

function Datatable() {

	const stockVeiwMenu=[
		{
			veiwIcon: <BsThreeDotsVertical/>,
			view:"Veiw",
			edit:"Edit",
			delete:"Delete",

		},
		{
			veiwIcon: <BsThreeDotsVertical/>,
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

			{/* Main Content  */}
			<div className="main-content">
				{/* <!-- Datatable --> */}
				<section className="section">
					<div className="section-body">
						<div className="row">
		                	<div className="col-12">
								<div className="card table-card">
									<div className="card-header position-relative">
											<h4>All Plan</h4>
											<a href="#" className="px-4 btn btn-primary ad_btn_on_dtble">
												<span className="font-600 font-16">+</span>
												Add
											</a>
									</div>
							<div className="card-body">
								<div className="table-responsive">
									<table id="ShowPlan" className="table table-striped table-hover">
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
									    <tbody className="ShowPlan_tbody">

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
															<td> */}
															{/* <div className="dropdown kb_menu_on_dta_tbl show" onClick={onToggleHandler}>
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
																	<span className="material-icons">more_vert</span>
																</button>
																<div className={`dropdown-menu dropdown-menu-right ${open}`} aria-labelledby="dropdownMenuButton">
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">visibility</span>
																		View
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">edit</span>
																		Edit
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">delete_outline</span>
																		Delete
																	</a>
																	</div>
																</div> */}
															{/* </td>
														</tr> */}
														{/* <tr>
															<td>ID</td>
															<td>lorem</td>
															<td>lorem</td>
															<td>lorem Type</td>
															<td>Active</td>
															<td> */}
																
																
															{/* <div className="dropdown kb_menu_on_dta_tbl" onClick={onToggleHandler}>
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<span className="material-icons">more_vert</span>
																</button>
            													<div className={`dropdown-menu dropdown-menu-right ${open}`} aria-labelledby="dropdownMenuButton"> */}

																{/* {stockVeiwMenu.map((data, index) => {
																			return (
																				<>
																				<ShowData key={index} view={data.view} edit={data.edit} delete={data.delete}/>
																				</>
																			);
																			})} */}
																{/* {stockVeiwMenu.map((data, i)=>{
																	return(
																		
																		<div className={`dropdown-menu dropdown-menu-right ${open}`} aria-labelledby="dropdownMenuButton">
																			<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																				<span className="material-icons">visibility</span>
																				View
																			</a>
																			<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																				<span className="material-icons">edit</span>
																				Edit
																			</a>
																			<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																				<span className="material-icons">delete_outline</span>
																				Delete
																			</a>
																		</div>
																	);
																})} */}
																{/* </div>
																</div> */}
															{/* </td>
														</tr> */}
														{/* <tr>
															<td>ID</td>
															<td>lorem</td>
															<td>lorem</td>
															<td>lorem Type</td>
															<td>Active</td>
															<td> */}
																{/* <div className="dropdown kb_menu_on_dta_tbl">
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<span className="material-icons">more_vert</span>
																</button>
																<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">visibility</span>
																		View
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">edit</span>
																		Edit
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">delete_outline</span>
																		Delete
																	</a>
																</div>
																</div> */}
															{/* </td>
														</tr> */}
														{/* <tr>
															<td>ID</td>
															<td>lorem</td>
															<td>lorem</td>
															<td>lorem Type</td>
															<td>Active</td>
															<td>
																<div className="dropdown kb_menu_on_dta_tbl" onClick={onToggleHandler}>
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<span className="material-icons">more_vert</span>
																</button> */}
																{/* <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">visibility</span>
																		View
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">edit</span>
																		Edit
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">delete_outline</span>
																		Delete
																	</a>
																</div> */}
																{/* </div> */}
															{/* </td>
														</tr> */}
														{/* <tr>
															<td>ID</td>
															<td>lorem</td>
															<td>lorem</td>
															<td>lorem Type</td>
															<td>Active</td>
															<td>
																<div className="dropdown kb_menu_on_dta_tbl">
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<span className="material-icons">more_vert</span>
																</button>
																<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">visibility</span>
																		View
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">edit</span>
																		Edit
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">delete_outline</span>
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
																<div className="dropdown kb_menu_on_dta_tbl">
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<span className="material-icons">more_vert</span>
																</button>
																<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">visibility</span>
																		View
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">edit</span>
																		Edit
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">delete_outline</span>
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
																<div className="dropdown kb_menu_on_dta_tbl">
																<button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																	<span className="material-icons">more_vert</span>
																</button>
																<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">visibility</span>
																		View
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">edit</span>
																		Edit
																	</a>
																	<a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
																		<span className="material-icons">delete_outline</span>
																		Delete
																	</a>
																</div>
																</div>
															</td>
														</tr> */}

														
									</tbody>
									
									</table>
									<tfoot>
									<Stack direction="row" spacing={1}>
									<Button size="small">
										Previous
									</Button>
									<Button variant="contained" size="small">
										1
									</Button>
									<Button size="small">
										Next
									</Button>			 				  
									</Stack>		
									</tfoot>
							</div>
							</div>
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


export default Datatable;
