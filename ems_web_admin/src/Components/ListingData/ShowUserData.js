import React, { Fragment, useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { RiFocusLine } from "react-icons/ri";
import { RiAlignLeft } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import {BASE_URL} from '../../http-commen';

function ShowUserData(props) {
    const history= useHistory();
    const  [isEdit, setisEdit] = useState([]);
    console.log(userList);


    const token = localStorage.getItem("token");
    console.log(token);
    
    useEffect(() => AddUser(), []);

    async function AddUser (){
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
    // this.props.match.params.id

    ///////////Redirect page
    const showUser = () => history.push('/showuser');
    
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
        <div className="dropdown kb_menu_on_dta_tbl">
            <button  onClick={()=>onToggleHandler()} className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="material-icons">more_vert</span>
            </button>
                <div className={`dropdown-menu viewpage ${open}`}>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={handleShow}>
                        <span className="material-icons">visibility</span>{props.view}
                        
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={showUser}>
                        <span className="material-icons">edit</span>{props.edit}
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#">
                        <span className="material-icons">delete_outline</span>{props.delete}
                    </a>
                </div>
        </div>

    {/* Modal show */}
    <div class="modal fade show" role="dialog" aria-labelledby="view_modal_popupTitle" style={{display:show}}>
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <div class="row">
                <div class="col-lg-12 col-md-12">
                    <div class="card card-static-2">
                        <div class="card-body-table" id="showDetail">
                            <div class="shopowner-content-left pd-20 modalId pd-user_popup">
                            <div class="shopowner-dt-left">
                                <h4 class="font-bold mb-0 text-left p-2">View Employee</h4>
                                    <button  onClick={closeModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div class="shopowner-dts">
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Employee Name</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">Ramchandra</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaRegUser/></i>
                                            </span>
                                            <b>E-mail</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">{userList.email}</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Role Type</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">Employee</span>
                                    </div> 
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Mobile</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">12333333</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaUserTag/></i>
                                            </span>
                                            <b>Shift</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">Day Time</span>
                                    </div>
                                    <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i class="far fa-dot-circle"><RiFocusLine/></i>
                                            </span><b>Salary</b>
                                        </span>
                                    <span class="right-dt mt-2 font-16">12k</span>
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
