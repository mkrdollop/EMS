import React, { Fragment, useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { RiFocusLine } from "react-icons/ri";
import { RiAlignLeft } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import {BASE_URL} from '../../http-commen';

function PlanAction(props) {
    const history= useHistory();
    const token = localStorage.getItem("token");
    
    
    ///////////Redirect page
    const editplan = () => history.push('/addplan');
    
    ///////////Click function Show Modal
    const [show, setShow] = useState("none");
    const [showPlan, setPlan] = useState();
    
    const handleShow = ()=>{
        setShow("block");
        PlanDetail()
        console.log(PlanDetail());
        
    }
    async function PlanDetail (){
        await fetch(BASE_URL+"/admin_get_all_plan?plan_id="+props.plan_id,{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })

    .then(res => res.json())
    .then((result) => {
    //   setPlanList(result.plan);
      console.log(result);
      
    },[])
    

    }

        
        
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
        <div className="dropdown kb_menu_on_dta_tbl">
            <button  onClick={()=>onToggleHandler()} className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="material-icons">more_vert</span>
            </button>
                <div className={`dropdown-menu viewpage ${open}`}>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={handleShow}>
                        <span className="material-icons">visibility</span>{props.view}
                        
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={editplan}>
                        <span className="material-icons">edit</span>{props.edit}
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
                        <span className="material-icons">delete_outline</span>{props.delete}
                    </a>
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
                                <h4 className="font-bold mb-0 text-left p-2">View Plan</h4>
                                    <button  onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div className="shopowner-dts">
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Plan Name</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16">{/* {showPlan.plan_name} */}</span>
                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><FaRegUser/></i>
                                            </span>
                                            <b>Plan Type</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">
                                        {/* {userList.email} */}
                                        </span>

                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Plan Feature</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16">Employee</span>
                                    </div> 
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Plan Amount</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16">12333333</span>
                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><FaUserTag/></i>
                                            </span>
                                            <b>Plan Description</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16">Day Time</span>
                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i className="far fa-dot-circle"><RiFocusLine/></i>
                                            </span><b>Status</b>
                                        </span>
                                    <span className="right-dt mt-2 font-16">12k</span>
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

export default PlanAction;
