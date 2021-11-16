import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { RiFocusLine } from "react-icons/ri";
import { RiAlignLeft } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaTags } from "react-icons/fa";

function ShowData(props) {
    const history= useHistory();
    
    ///////////Redirect page to addplan
    const editPlan = () => history.push('/addplan');
    

    ///////////Click function Show Modal
    const [show, setShow] = useState("none");
    const handleShow = ()=>{setShow("block")}
    const closeModal=()=>{setShow("none")}


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
        <div className="dropdown kb_menu_on_dta_tbl" onClick={()=>onToggleHandler()}>
            <button className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="material-icons">more_vert</span>
            </button>
                <div className={`dropdown-menu ${open}`}>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={handleShow}>
                        <span className="material-icons">visibility</span>{props.view}
                        
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={editPlan}>
                        <span className="material-icons">edit</span>{props.edit}
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
                        <span className="material-icons">delete_outline</span>{props.delete}
                        
                    </a>
                </div>
        </div>

    {/* Modal show */}
    <div class="modal fade show" role="dialog" aria-labelledby="view_modal_popupTitle" style={{display:show}} onClick={closeModal}>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="card card-static-2">
                        <div class="card-body-table" id="showDetail">
                            <div class="shopowner-content-left pd-20 modalId pd-user_popup">
                            <div class="shopowner-dt-left">
                                <h4 class="font-bold mb-0 text-left p-2">Plan Info</h4>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div class="shopowner-dts">
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Plan Title</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">Silver Package</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaRegUser/></i>
                                            </span>
                                            <b>Plan Fee</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">₹1250.00</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Role Type</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">Silver</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaUserTag/></i>
                                            </span>
                                            <b>Posted By</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">KP</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i class="far fa-dot-circle"><RiFocusLine/></i>
                                            </span><b>Status</b>
                                        </span>
                                    <span class="right-dt mt-2 font-16">Active</span>
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

export default ShowData;
