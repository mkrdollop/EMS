import React, {useState,useEffect} from 'react';
import FAQModel from '../FAQComponents/FAQModel';
import Navside from '../../NavsideBar/Navside';
import NavbarTop from '../../../DeployHead/Navigations/NavbarTop';
import PrivacyModel from './PrivacyModel';
import { Link } from 'react-router-dom';
import {BASE_URL} from '../../../http-commen';

function AddPrivacy() {
    const token = localStorage.getItem("token");

    const [privacy, setPrivacy] = useState([]);
    useEffect(() => privacyList(), []);

    const PRIVACY_DATA = privacy.map(data =>{
        // console.log("data");
            return(
                <tr>
                    <td>{data.id}</td>
                    <td>{data.policy}</td>  
                    <td>{data.created_at}</td>  
                    <td>{data.updated_at}</td>  
                    <td>
                    <PrivacyModel key={data.id} view="View" edit="Edit" delete="Delete" />
                    </td>
                </tr>
            )
    });
    async function privacyList (){
        await fetch(BASE_URL+"/get_privcy_policy",{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
        .then(res => res.json())
        .then((result) => {
            setPrivacy(result.privacypolicy);
        //  console.log(result.privacypolicy);
        },[])
    }
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
                                        <h4>Add Privacy And Policy</h4>
                                        <Link to="/privacypolicy" className="px-4 btn btn-primary ad_btn_on_dtble">
		                            	<span className="font-600 font-16">+</span>
		                        		    Add
		                        	    </Link>
                                    </div>
                                    <div className="card-body">
                                        <div className="table-responsive">
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
                                                <table id="ShowPlan" className="table table-striped table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Id</th>
                                                            <th>Policy</th>
                                                            <th>Updated Date</th>
                                                            <th>Created Date</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="ShowPlan_tbody">
                                                        {PRIVACY_DATA}
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

export default AddPrivacy;
