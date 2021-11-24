import React from 'react';
import '../../assets/css/style.css';
import ShowData from '../DataTables/ShowData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import { Link } from 'react-router-dom';


function PaymentMethode() {
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
                                    <h4>Payment Methods</h4>
                                    <Link to="/addplan" className="px-4 btn btn-primary ad_btn_on_dtble">
                                        <span className="font-600 font-16">+Add</span>
                                    </Link>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="ShowPlan" class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>User Id</th>
                                                    <th>Role</th>
                                                    <th>Plan</th>
                                                    <th>Duration</th>
                                                    <th>Credit Card</th>
                                                    <th>Debit Card </th>
                                                    <th>UPI </th>
                                                    <th>Wallet</th>
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
                                                    <td>lorem</td>
                                                    <td>lorem</td>
                                                    <td>lorem</td>
                                                    <td>lorem</td>
                                                    <td>lorem</td>
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

export default PaymentMethode;
