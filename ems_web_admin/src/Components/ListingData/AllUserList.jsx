import React from 'react';
import '../../assets/css/style.css';
import ShowUserData from '../ListingData/ShowUserData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import { Link } from 'react-router-dom';

function AllUserList() {
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
	
	]
    return (
        <>
        <div className="ems-dashboard dark dark-sidebar theme-black">   
		<div className="main-wrapper main-wrapper-1">
        <NavbarTop />
        <Navside />
			<div className="main-content">
            <section class="section">
                <div class="section-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="card table-card">
                                <div class="card-header">
                                    <h4>All Users</h4>
                                    <Link to="/showuser" className="px-4 btn btn-primary ad_btn_on_dtble">
                                        <span className="font-600 font-16">+</span>
                                        Add
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="ShowPlan" class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Company Name</th>
                                                    <th>Company Owner </th>
                                                    <th>Contact Number </th>
                                                    <th>Email Address </th>
                                                    <th>Country </th>
                                                    <th>Employee Strength</th>
                                                    <th>Actions</th>
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
                                                    <td>Active usha</td>
                                                    <td>
                                                        <ShowUserData key={index} view={data.view} edit={data.edit} delete={data.delete} />
                                                    </td>
                                                    </tr>
                                                        </>
                                                    );
                                                    })}
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
        </div>    
        </div> 
        </>
    )
}

export default AllUserList;
