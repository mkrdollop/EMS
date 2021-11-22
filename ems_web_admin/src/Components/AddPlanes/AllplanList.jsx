import React from 'react';
import '../../assets/css/style.css';
import ShowData from '../DataTables/ShowData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';

function AllplanList() {
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
                                    <h4>All Plan</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="ShowPlan" class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Plan Name</th>
                                                    <th>Plan Description</th>
                                                    <th>Plan Cost</th>
                                                    <th>Plan Created At </th>
                                                    <th>Last Modified On</th>
                                                    <th>Plan Duration</th>
                                                    <th>Plan Type</th>
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
                                                    <td>Active</td>
                                                    <td>Active</td>
                                                    <td>Active</td>
                                                    <td>
                                                        <ShowData key={index} view={data.view} edit={data.edit} delete={data.delete} />
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

export default AllplanList;
