import React,{ useState,useEffect } from 'react';
import '../../assets/css/style.css';
import ShowUserData from '../ListingData/ShowUserData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
// import { Link } from 'react-router-dom';
import {BASE_URL} from '../../http-commen';
// import Axios from 'axios';
// console.log(BASE_URL+"/admin_get_user_list");

function AllUserList(props) {
    const  [userList, setUserList] = useState([]);
    // console.log(userList);
    const data = userList.map((user,i)=>{
        return(
            <tr key={i}>
                <td>{user.user_id}</td>
                <td>{user.company_name}</td>   
                <td>{user.first_name}</td>  
                <td>{user.mobile}</td>  
                <td>{user.email}</td>  
                <td>{user.country_name}</td>  
                <td>{user.emp_strength}</td>
                <td>
                    <ShowUserData key={i} user_id={user.user_id} view="View" edit="Edit" delete="Delete" />
                </td>
            </tr>
            
        )
    });
    
    const token = localStorage.getItem("token");
    console.log(token);

    useEffect(() => UserList(), []);

    async function UserList (){
        await fetch(BASE_URL+"/admin_get_user_list",{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
            query: JSON.stringify({
                user_type: 'Admin_User',
            })
        })
        .then(res => res.json())
        .then((result) => {
            setUserList(result.users);
        //  console.log(result);
        
        },[])
    }
    
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
                                    {/* <Link to="/showuser" className="px-4 btn btn-primary ad_btn_on_dtble">
                                        <span className="font-600 font-16">+</span>
                                        Add
                                    </Link> */}
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <div id="ShowPlan_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="dataTables_length" id="ShowPlan_length">
                                                        <label>Show <select name="ShowPlan_length" aria-controls="ShowPlan" className="form-select form-control form-control-sm">
                                                                <option value="10">10</option>
                                                                <option value="25">25</option>
                                                                <option value="50">50</option>
                                                                <option value="100">100</option>
                                                            </select> entries
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div id="ShowPlan_filter" className="dataTables_filter">
                                                        <label>Search:
                                                            <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="ShowPlan" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                            <table id="ShowPlan" class="table table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Company_Name</th>
                                                        <th>Company_Owner </th>
                                                        <th>Mobile</th>
                                                        <th>Email</th>
                                                        <th>Country</th>
                                                        <th>Employee_Strength</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody class="ShowPlan_tbody">
                                                   {data}
                                                {/* {stockVeiwMenu.map((data, index) => {
                                                    return (
                                                        <>
                                                        <td>
                                                            <ShowUserData key={index} view={data.view} edit={data.edit} delete={data.delete} />
                                                        </td>
                                                            </>
                                                        );
                                                })} */}
                                                </tbody>
                                            </table>
                                            </div>
                                            <div className="row">
                                                    <div className="col-sm-12 col-md-5">
                                                        <div className="dataTables_info" id="ShowPlan_info" role="status" aria-live="polite">Showing 1 to 9 of 9 entries</div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-7">
                                                        <div className="dataTables_paginate paging_simple_numbers" id="ShowPlan_paginate">
                                                            <ul className="pagination">
                                                                <li className="paginate_button page-item previous disabled" id="ShowPlan_previous">
                                                                    <a href="#" aria-controls="ShowPlan" data-dt-idx="0" tabindex="0" className="page-link">Previous</a>
                                                                </li>
                                                                <li className="paginate_button page-item active">
                                                                    <a href="#" aria-controls="ShowPlan" data-dt-idx="1" tabindex="0" className="page-link">1</a>
                                                                </li>
                                                                <li className="paginate_button page-item next disabled" id="ShowPlan_next">
                                                                    <a href="#" aria-controls="ShowPlan" data-dt-idx="2" tabindex="0" className="page-link">Next</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>            
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
