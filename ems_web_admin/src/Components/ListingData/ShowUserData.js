import React, { Fragment, useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { RiFocusLine } from "react-icons/ri";
import { RiAlignLeft } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import {BASE_URL} from '../../http-commen';
import axios from 'axios';

function ShowUserData(props) {
    // console.log(props);
    const history= useHistory();

    const token = localStorage.getItem("token");
    const  [isViewData, setIsViewData] = useState([]);
    // const  [isDelete, setIsDelete] = useState([]);
    // console.log(isDelete);

    //// useEffect(() => deleteHandler(), []);
    useEffect(() => showUserHandler(), []);

    /////////////// view Users Data
    async function showUserHandler(){
        const Response = await fetch(BASE_URL+"/get_user_profile?user_id="+props.user_id,{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
        .then(res => res.json())
        .then((result) => { 
            // console.log(result);
            setIsViewData(result.userData);
        },[])
    }
    ///////////Redirect page
    const showUser = () => history.push('/showuser');

    // <button type="button" class="btn btn-danger" onClick={() => handleRemove(isViewData - 1)}>Delete</button>
    
    async function deleteHandler(id) {
        // console.log(id);
        const Deletedata = await fetch(BASE_URL+"/update_user_by_admin?user_id="+props.user_id+"&is_deleted=0",{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
        .then(res => res.json())
        .then((result) => {
            // setIsDelete(result);
            // console.log(alert("delete"));
            // history.push(resetRoute);
            // history.push("/alluserlist");

        },[]);
    }

    ///////////Click function Show Modal
    const [show, setShow] = useState("");
    const handleShow = ()=>{setShow("block")}
    const closeModal=()=>{setShow("")}

    ///////////Click function for visible the data table three dots
    const [open, setopen] = useState("");
    const onToggleHandler=(element)=>{
        if (open==="") {
            setopen("show");
        }
        else setopen("");
    }

    return (
        <Fragment>
        <div className="dropdown kb_menu_on_dta_tbl">
            <button  onClick={()=>onToggleHandler()} className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="material-icons">more_vert</span>
            </button>
                <div className={`dropdown-menu viewpage ${open}`}>
                    <label className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" onClick={handleShow}>
                        <span className="material-icons">visibility</span>{props.view}
                        
                    </label>
                    <label className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" onClick={showUser}>
                        <span className="material-icons">edit</span>{props.edit}
                    </label>
                    <label className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" onClick={() => deleteHandler(props.user_id)}>
                        <span className="material-icons">delete_outline</span>{props.delete}
                    </label>
                </div>
        </div>

    {/* Modal show */}

    <div className="modal fade show" role="dialog" aria-labelledby="view_modal_popupTitle" style={{display:show}}>
    <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
            <div className="modal-body">
                <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="card card-static-2">
                        <div className="card-body-table" id="showDetail">
                            <div className="shopowner-content-left pd-20 modalId pd-user_popup">
                            <div className="shopowner-dt-left">
                                <h4 className="font-bold mb-0 text-left p-2">View Employee</h4>
                                    <button onClick={closeModal} type="button" className="close"  data-dismiss="modal" aria-label="Close">

                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div class="shopowner-dts">
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Company Name</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16">{isViewData.company_name}</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Comnpany Owner</b>
                                        </span>

                                        <span className="right-dt mt-2 font-16">{isViewData.first_name}</span>

                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaRegUser/></i>
                                            </span>
                                            <b>E-mail</b>
                                        </span>

                                        <span class="right-dt mt-2 font-16">{isViewData.email}</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Role Type</b>
                                        </span>

                                        <span class="right-dt mt-2 font-16">{isViewData.role_type}</span>

                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Country</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">{isViewData.country_name}</span>
                                    </div> 
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Mobile</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">{isViewData.mobile}</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaUserTag/></i>
                                            </span>
                                            <b>Shift</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">{isViewData.work_timing_name}</span>
                                    </div>
                                    {/* <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaUserTag/></i>
                                            </span>
                                            <b>Employee Strength</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">{isViewData.emp_strength}</span>
                                    </div> */}
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i class="far fa-dot-circle"><RiFocusLine/></i>
                                            </span><b>Salary</b>
                                        </span>

                                    <span class="right-dt mt-2 font-16">{isViewData.salary_amount}</span>
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
    </div> 
        </Fragment>
    )
}

export default ShowUserData;
