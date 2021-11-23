import React from 'react';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';

function Features() {
   

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
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table id="ShowPlan" class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th>FEATURES</th>
                                                    <th>FREE</th>
                                                    <th>PREMIUM</th>
                                                    <th>ELITE</th>
                                                </tr>
                                            </thead>
                                            <tbody class="ShowPlan_tbody">
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
