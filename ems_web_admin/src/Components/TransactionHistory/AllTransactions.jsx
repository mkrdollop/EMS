import React from 'react';
import '../../assets/css/style.css';
import ShowData from '../DataTables/ShowData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { padding } from '@mui/system';

function AllTransactions() {
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
            <section class="section">
                <div class="section-body">
                    <div class="row">
                        <div class="col-12">
                            <div class="card table-card">
                                <div class="card-header">
                                    <h4>All Transactions</h4>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="ShowPlan" class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Transaction Id</th>
                                                    <th>Transaction Date/Time </th>
                                                    <th>Subscribed Plan</th>
                                                    <th>Transaction Made By </th>
                                                    <th>Transaction Amount</th>
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
                                                    <td>
                                                        <ShowData key={index} view={data.view} edit={data.edit} delete={data.delete} />
                                                    </td>
                                                    </tr>
                                                        </>
                                                    );
                                                    })}
                                            </tbody>
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

export default AllTransactions;
