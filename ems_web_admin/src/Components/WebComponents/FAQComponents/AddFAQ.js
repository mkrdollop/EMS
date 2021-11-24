import React from 'react';
import FAQModel from '../FAQComponents/FAQModel';
import Navside from '../../NavsideBar/Navside';
import NavbarTop from '../../../DeployHead/Navigations/NavbarTop';

function AddFAQ() {
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
                                    <h4>Add FAQ</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="ShowPlan" class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>User Id</th>
                                                    <th>Users</th>
                                                    <th>Contains</th>
                                                    <th>Updated Date</th>
                                                    <th>Created Date</th>
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
                                                    <td>lorem Type</td>
                                                    <td>Active</td>
                                                    <td>Date</td>
                                                    <td>
                                                        <FAQModel key={index} view={data.view} edit={data.edit} delete={data.delete} />
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

export default AddFAQ;
