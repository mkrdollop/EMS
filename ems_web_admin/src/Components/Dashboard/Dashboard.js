import React, { Fragment } from "react";
import "../../assets/css/style.css";

import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import NavbarTop from "../../DeployHead/Navigations/NavbarTop";
import Footer from "../../DeployHead/Footer/Footer";
import Navside from "../NavsideBar/Navside";
import ShowData from "../DataTables/ShowData";
import { Link } from "react-router-dom";

function Dashboard() {
  const stockVeiwMenu = [
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
    {
      view: "Veiw",
      edit: "Edit",
      delete: "Delete",
    },
  ];
  return (
    <Fragment>
      <div className="ems-dashboard dark dark-sidebar theme-black">
        <div className="main-wrapper main-wrapper-1">
          {/* // export from DeployHead/Navigations Componantes*/}
          <NavbarTop />

          {/* // Export from SidebarNav/Sidebar Componantes */}
          <Navside />

          {/* // Main Content */}
          <div className="main-content">
            {/* <!-- Cards --> */}
            <section className="section custom_crds_on_dashboard">
              <h4 className="border-bottom pb-2 mb-4 text-dark">Dashboard</h4>
              <div className="row">
                <div className="col-xl-3 col-lg-6">
                  <a href="#" className="card">
                    <div className="card-bg">
                      <div
                        className="py-3 d-flex justify-content-between"
                        style={{
                          border: "2px solid orange",
                          borderRadius: "7px",
                        }}
                      >
                        <div className="col">
                          <span className="dash_count col-black font-weight-bold mb-0 font-20 totalUser">
                            2555
                          </span>
                          <h6 className="col-dark-gray mb-0">Total Users</h6>
                        </div>

                        <i className="icons_custom_on_dash card-icon col-orange font-30 p-r-30">
                          <FaUsers />
                        </i>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <a href="#" className="card">
                    <div className="card-bg">
                      <div
                        className="py-3 d-flex justify-content-between"
                        style={{
                          border: "2px solid #2f9ff7",
                          borderRadius: "7px",
                        }}
                      >
                        <div className="col">
                          <span className="dash_count mb-0 col-black font-weight-bold font-20 totalEmployer">
                            2455
                          </span>
                          <h6 className="col-dark-gray mb-0">
                            Total Employers
                          </h6>
                        </div>
                        <i className="icons_custom_on_dash  card-icon col-blue font-30 p-r-30">
                          <FaUserTie />
                        </i>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <a href="#" className="card">
                    <div className="card-bg">
                      <div
                        className="py-3 d-flex justify-content-between"
                        style={{
                          border: "2px solid #08a395",
                          borderRadius: "7px",
                        }}
                      >
                        <div className="col">
                          <span className="dash_count mb-0 col-black font-weight-bold font-20 totalApprovedKP">
                            100
                          </span>
                          <h6 className="col-dark-gray mb-0">
                            Total Companies
                          </h6>
                        </div>
                        <i className="icons_custom_on_dash card-icon col-teal font-50 p-r-30">
                          <FaHandshake />
                        </i>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <a href="#" className="card">
                    <div className="card-bg">
                      <div
                        className="py-3 d-flex justify-content-between"
                        style={{
                          border: "2px solid #de268c",
                          borderRadius: "7px",
                        }}
                      >
                        <div className="col">
                          <span className="dash_count col-black font-weight-bold mb-0 font-20 totalClient">
                            141
                          </span>
                          <h6 className="col-dark-gray mb-0">Total Clients</h6>
                        </div>
                        <i className="icons_custom_on_dash card-icon col-yellow font-30 p-r-30">
                          <FaUserSecret />
                        </i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="section-body">
                <div className="row">
                  <div className="col-12">
                    <div className="card table-card">
                      <div className="card-header">
                        <h4>All Plan</h4>
                        <Link
                          to="/addplan"
                          className="px-4 btn btn-primary ad_btn_on_dtble"
                        >
                          <span className="font-600 font-16">+</span>
                          Add
                        </Link>
                      </div>
                      <div className="card-body">
                        <div className="table-responsive">
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
                                className="table table-striped table-hover"
                              >
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
                                <tbody className="ShowPlan_tbody">
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
                                            <ShowData
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
                                      <a
                                        href="#"
                                        aria-controls="ShowPlan"
                                        data-dt-idx="0"
                                        tabindex="0"
                                        className="page-link"
                                      >
                                        Previous
                                      </a>
                                    </li>
                                    <li className="paginate_button page-item active">
                                      <a
                                        href="#"
                                        aria-controls="ShowPlan"
                                        data-dt-idx="1"
                                        tabindex="0"
                                        className="page-link"
                                      >
                                        1
                                      </a>
                                    </li>
                                    <li
                                      className="paginate_button page-item next disabled"
                                      id="ShowPlan_next"
                                    >
                                      <a
                                        href="#"
                                        aria-controls="ShowPlan"
                                        data-dt-idx="2"
                                        tabindex="0"
                                        className="page-link"
                                      >
                                        Next
                                      </a>
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
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default Dashboard;
