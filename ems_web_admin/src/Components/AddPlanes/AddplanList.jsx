import React from 'react';
import '../../assets/css/style.css';
import ShowData from '../DataTables/ShowData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Button from '@mui/material/Button';
import { Link, useHistory } from "react-router-dom";

function AddplanList() {
    const history= useHistory();

    const showFeatures = () => history.push('/features');

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
		
	
	]
    return (
        <>
        <div className="ems-dashboard dark dark-sidebar theme-black">   
		<div className="main-wrapper main-wrapper-1">
        <NavbarTop />
        <Navside />
			<div className="main-content">
            <section className="section">
                <div className="section-body">
                    <div className="row">
                        <div className="col-12">
                            <div className="card table-card">
                                <div className="card-header">
                                    <h4>Add Plan</h4>
                                    <Link to="/addplan" className="px-4 btn btn-primary ad_btn_on_dtble">
                                        <span className="font-600 font-16">+</span>
                                        Add
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="ShowPlan" className="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Plan Name</th>
                                                    <th>Plan Description</th>
                                                    <th>Plan Cost</th>
                                                    <th>Plan Duration </th>
                                                    <th>Features</th>
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
                                                    <td>lorem Type</td>
                                                    <td>Active</td>
                                                    <td><Button onClick={showFeatures} variant="contained" size="small">plan</Button></td>
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

export default AddplanList;
