import React, { Fragment, useState } from 'react';
import { MdContentPaste } from "react-icons/md";
import { MdOutlineFactCheck } from "react-icons/md";

function TermsModel(props) {
    
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
            <button onClick={()=>onToggleHandler()} className="bg-transparent border-0 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="material-icons">more_vert</span>
            </button>
                <div className={`dropdown-menu viewpage ${open}`}>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="#" onClick={handleShow}>
                        <span className="material-icons">visibility</span>{props.view}
                        
                    </a>
                    <a className="dropdown-item kb_menu_on_dta_tbl_ed_vw_del_btn" href="/termconditions">
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
                                <h4 class="font-bold mb-0 text-left p-2"><i><MdOutlineFactCheck /></i> TermsAndConditions</h4>
                                    <button  onClick={closeModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                            <div class="shopowner-dts">
                                    {/* <div class="shopowner-dt-list">
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                                <i><FaTags/></i>
                                            </span>
                                            <b>Users</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">Admin</span>
                                    </div> */}
                                    <div class="shopowner-dt-list" style={{width: '100%'}}>
                                        <span class="left-dt">
                                            <span class="dp_icon">
                                            <i><MdContentPaste/></i>
                                            </span>
                                            <b>Contains</b>
                                        </span>
                                        <span class="right-dt mt-2 font-16">5.1	FAQ
                                        Ability to add/ modify/ remove FAQ page content. 
                                        5.2	Privacy Policy
                                        Ability to add/ modify/ remove Privacy Policy page Content.  
                                        5.3	Terms and Condition
                                        Ability to add/ modify/ remove Privacy Policy page Content.  
                                        5.4	About Use
                                        Ability to add/ modify/ remove Privacy Policy page Content.  
                                        </span>
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

export default TermsModel;
