import React from 'react';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundBack  } from "react-icons/io";

function Features() {

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
                                <Link to="/addplanlist"><IoMdArrowRoundBack/> Back</Link>
                                {/* <h4>Plan Comparison</h4> */}
                            </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <div id="ShowPlan_wrapper" className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                                            <div className="row">
                                               <table id="ShowPlan" className="table table-striped table-hover ">
                                                <thead>
                                                    <tr>
                                                        <th>FEATURES</th>
                                                        <th>FREE</th>
                                                        <th>PREMIUM</th>
                                                        <th>ELITE</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="ShowPlan_tbody">
                                                    <tr>
                                                    <td>Web Portal </td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    {/* <td>Active</td> */}
                                                    </tr>  
                                                    <tr>
                                                    <td>Department/ Branch Wise Reports</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr> 
                                                    <tr>
                                                    <td>Attendance Remarks</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Punch with selfie+ Location </td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Punch with QR Code</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Daily Selfie Punch Report </td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>All In One Time Tracking Report</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Attendance Report </td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Add/ Modify/ Delete Punch</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Night Fixed/ Work Timing</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Manage Employee wise Calendar</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Employee Punch Device Restrictions</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Employee Punch Notification</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Developer Option Restriction</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr>
                                                    <tr>
                                                    <td>Punch Remarks</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Manage Leave Status</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Half Day Status</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Add Over Time</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Punch Address Required</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Manage Employee</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Day Fixed Work Timing </td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Manage Company Calendar</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Manage Holidays</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Admin Mark Attendance</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Punch with Location</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Basic Payroll Calculation Automatically</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr><tr>
                                                    <td>Give Advance & Book Expenses </td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    <td>X</td>
                                                    </tr>
                                                </tbody>
                                            </table> 
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-5">
                                                    <div className="dataTables_info" id="ShowPlan_info" role="status" aria-live="polite">Showing All Feature perches</div>
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

export default Features;
