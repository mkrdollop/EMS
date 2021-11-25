import React,{ Form } from 'react';
import '../../assets/css/style.css';
import ShowUserData from '../ListingData/ShowUserData';
import Navside from '../NavsideBar/Navside';
import NavbarTop from '../../DeployHead/Navigations/NavbarTop';
import { Link } from 'react-router-dom';

function NotificationList() {
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
                      <h4>Notification List</h4>
                      <Link
                        to="/showuser"
                        className="px-4 btn btn-primary ad_btn_on_dtble"
                      >
                        <span className="font-600 font-16">+</span>
                        Add
                      </Link>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <div
                          id="ShowPlan_wrapper"
                          className="dataTables_wrapper container-fluid dt-bootstrap4 no-footer"
                        >
                          <div className="row">
                            <div className="col-sm-12 col-md-6">
                              <div
                                className="dataTables_length"
                                id="ShowPlan_length"
                              >
                                <label>
                                  Show{" "}
                                  <select
                                    name="ShowPlan_length"
                                    aria-controls="ShowPlan"
                                    className="form-select form-control form-control-sm"
                                  >
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                  </select>{" "}
                                  entries
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                              <div
                                id="ShowPlan_filter"
                                className="dataTables_filter"
                              >
                                <label>
                                  Search:
                                  <input
                                    type="search"
                                    className="form-control form-control-sm"
                                    placeholder=""
                                    aria-controls="ShowPlan"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <table
                              id="ShowPlan"
                              class="table table-striped table-hover"
                            >
                              <thead>
                                <tr>
                                  <th>Title</th>
                                  <th>Payment</th>
                                  <th>Status</th>
                                  <th>New Device</th>
                                  <th>Inactive Users</th>
                                  <th>Date</th>
                                  <th>User Role</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody class="ShowPlan_tbody">
                                {stockVeiwMenu.map((data, index) => {
                                  return (
                                    <>
                                      <tr>
                                        <td><input type="checkbox" aria-label="Checkbox for following text input" /> Creating somthing</td>
                                        <td>1 month</td>
                                        <td>Enable</td>
                                        <td>lorem Type</td>
                                        <td>lorem Type</td>
                                        <td>11/24/2021</td>
                                        <td>Employee</td>
                                        <td>
                                          <ShowUserData
                                            key={index}
                                            view={data.view}
                                            edit={data.edit}
                                            delete={data.delete}
                                          />
                                        </td>
                                      </tr>
                                    </>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-5">
                              <div
                                className="dataTables_info"
                                id="ShowPlan_info"
                                role="status"
                                aria-live="polite"
                              >
                                Showing 1 to 9 of 9 entries
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-7">
                              <div
                                className="dataTables_paginate paging_simple_numbers"
                                id="ShowPlan_paginate"
                              >
                                <ul className="pagination">
                                  <li
                                    className="paginate_button page-item previous disabled"
                                    id="ShowPlan_previous"
                                  >
                                    <Link
                                      to="/previewtable"
                                      aria-controls="ShowPlan"
                                      data-dt-idx="0"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Previous
                                    </Link>
                                  </li>
                                  <li className="paginate_button page-item active">
                                    <Link
                                      to="#"
                                      aria-controls="ShowPlan"
                                      data-dt-idx="1"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      1
                                    </Link>
                                  </li>
                                  <li
                                    className="paginate_button page-item next disabled"
                                    id="ShowPlan_next"
                                  >
                                    <Link
                                      to="#"
                                      aria-controls="ShowPlan"
                                      data-dt-idx="2"
                                      tabindex="0"
                                      className="page-link"
                                    >
                                      Next
                                    </Link>
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
  );
}

export default NotificationList;
