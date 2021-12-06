import React, { Fragment, useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { RiFocusLine } from "react-icons/ri";
import { RiAlignLeft } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import {BASE_URL} from '../../http-commen';

function ShowUserData(props) {
    // console.log(props);
    const history= useHistory();

    const token = localStorage.getItem("token");
    
    const  [isViewData, setIsViewData] = useState([]);
    const  [editData, setEditData] = useState({
        company_name:" ",
        first_name:" ",
        country_name:" ",
        work_timing_name:" ",
    });
    console.log(editData);
    useEffect(() => showUserHandler(), []);
    // useEffect(() => editUserList(), []);

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

    // const editPageHandler = async event => {
	// 	event.preventDefault();
    //     const fildName= event.target.getAttribute("name"); 
    //     const fildValue= event.target.value; 

    //     const newUserData = {...editData};
    //     newUserData[fildName] = fildValue; 
    //     setEditData(newUserData);  
    //     console.log(newUserData);
    // }

    useEffect(() => editUserList(), []);
    async function editUserList(credentials){
        console.log(credentials);
        // let formData = new FormData();
        //     formData.append('company_name', credentials.company_name);
        //     formData.append('first_name',credentials.first_name);
        //     formData.append('country_name', credentials.country_name);
        //     formData.append('work_timing_name',credentials.work_timing_name);
        var details = {
            // 'company_name':,
            // 'first_name':,
            // 'country_name':credentials.country_name,
            // 'work_timing_name':credentials.work_timing_name,
         };
        console.log(props.user_id);

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
         }
         formBody = formBody.join("&");

       // var updateData = [];
       const Response = await fetch(BASE_URL+"/update_user_profile?user_id="+props.user_id,{
        method: 'POST',
        headers: {
           'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
           'Authorization': token
        },
        data:formBody
    })
    .then(res => res.json())
    .then((result) => { 
        console.log("result");
        setEditData(result);
    },[]);
    }

    ///////////Redirect page
    const editPageHandler = (e) => history.push('/showuser/'+props.user_id);


    /////////////// delete Users Data
    async function deleteHandler(id) {
        // console.log(id);
        console.log(alert("Are you sure wants to delete"));
        const Deletedata = await fetch(BASE_URL+"/update_user_by_admin?user_id="+props.user_id+"&is_deleted=0",{
            method: 'PUT',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
        })
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
                    <label className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" onClick={editPageHandler}>
                        <span className="material-icons">edit</span>{props.edit}
                    </label>
                    <label className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" onClick={deleteHandler}>
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
