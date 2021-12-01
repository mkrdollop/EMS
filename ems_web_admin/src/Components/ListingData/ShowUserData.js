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
    console.log(props);
    const history= useHistory();
    const token = localStorage.getItem("token");

    const  [isEdit, setIsEdit] = useState([]);
    const  [isDelete, setIsDelete] = useState([]);

    // console.log(isDelete);
    // console.log(isEdit.admin_id);
    // function handleRemove(id) {
        // console.log(id);
        // const newList = isEdit.filter((item) => isEdit.admin_id !== id);
        // setIsDelete({ type: 'deleted', id });
        // console.log(newList);
        // setIsEdit(newList);
    //   }


    useEffect(() => deleteHandler(), []);
    useEffect(() => AddUser (), []);

    async function AddUser (){
        const Response= await fetch(BASE_URL+"/get_admin_profile",{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
        .then(res => res.json())
        .then((result) => {
            setIsEdit(result.userData);
            // console.log(result.userData);
        },[])
    }
    // this.props.match.params.id

    ///////////Redirect page
    const showUser = () => history.push('/showuser');
    // const deleteUser = () => history.location.key(id);

    // const handleRemove = () => history.push('/alluserlist');
    
    // <button type="button" class="btn btn-danger" onClick={() => setIsEdit(isEdit - 1)}>Delete</button>
    // axios.delete(BASE_URL+"/update_user_by_admin", {
    //     headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    //         'Authorization': token
    //     },
    //     body: JSON.stringify({
    //         is_deleted: "delete",
    //     })
    //   });
    async function deleteHandler(id) {
        console.log(id);
        const Deletedata = await fetch(BASE_URL+"/update_user_by_admin",{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
            body: JSON.stringify({
                is_deleted: 0,
                // user_id:
            })
        })
        .then(res => res.json())
        .then((result) => {
            setIsDelete(result);
            // console.log(result.message);
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
                    <label className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" onClick={() => deleteHandler(isEdit.admin_id)}>
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
                            <div className="shopowner-dts">
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Employee Name</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16">{isEdit.name}</span>
                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><FaRegUser/></i>
                                            </span>
                                            <b>E-mail</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">{isEdit.email}</span>

                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Role Type</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16"></span>
                                    </div> 
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><RiAlignLeft/></i>
                                            </span>
                                            <b>Mobile</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16"></span>
                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i><FaUserTag/></i>
                                            </span>
                                            <b>Shift</b>
                                        </span>
                                        <span className="right-dt mt-2 font-16"></span>
                                    </div>
                                    <div className="shopowner-dt-list">
                                        <span className="left-dt">
                                            <span className="dp_icon">
                                                <i className="far fa-dot-circle"><RiFocusLine/></i>
                                            </span><b>Salary</b>
                                        </span>
                                    <span className="right-dt mt-2 font-16"></span>
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
