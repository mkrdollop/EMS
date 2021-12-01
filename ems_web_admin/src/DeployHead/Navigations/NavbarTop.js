import React, { Fragment,useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import '../../assets/css/style.css';
import { IoMdSettings } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaUser} from "react-icons/fa";
import { FaSignOutAlt} from "react-icons/fa";
import {BASE_URL} from '../../http-commen';

function NavbarTop() {
	const token = localStorage.getItem("token");

	/////////Open Profile dropdown
    const [topDropdown, setTopDropdown] = useState("");
    const [detail, setDetail] = useState("");
	const handleTopDropdown=()=>{
		if(topDropdown===""){
			setTopDropdown("show");
		}else{
			setTopDropdown("");
		}
	}

	/////////Open Notification dropdown
	const [Notifi, setNotifi] = useState("");
	const handleTopNotifi=()=>{
		if(Notifi===""){
			setNotifi("show");
		}else{
			setNotifi("");
		}
	}

	//^^^^^^^^^^ logout ^^^^^^^^^^^^
	const history = useHistory();
	const logout = () => {
		localStorage.clear();
        history.push({
			pathname:  "/",
			
		});
    }

	useEffect(() => adminDetail(), []);
	console.log(detail);
	//<<<<<<<<<<<<<<<<< get admin detail >>>>>>>>>>>>>>>
	async function adminDetail (){
        var responseData = await fetch(BASE_URL+"/get_admin_profile",{
            method: 'GET',
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
               'Authorization': token
            },
            
        })
		.then(res => res.json())
		.then((result) => {
		setDetail(result.userData);
		
		},[])
	}
    return (
    <Fragment>
        {/* <div class="ems-dashboard dark dark-sidebar theme-black sidebar-mini"> */}
        <div className="ems-dashboard dark dark-sidebar theme-black">    
        	<div className="main-wrapper main-wrapper-1">
				<div className="navbar-bg"></div>
					<nav className="navbar navbar-expand-lg main-navbar position-fixed">
						<div className="search_dash_input position-relative">
							<input type="text" name="" placeholder="Seach here..."/>
							<a href="#">
								<i><FiSearch/></i>
							</a>
						</div>
						<div className="form-inline mr-auto">
							<ul className="navbar-nav mr-3">
								<li>
									<a href="#" data-toggle="sidebar" className="nav-link nav-link-lg collapse-btn"> 
										<i data-feather="align-justify"></i>
									</a>
								</li>
								<li>
									<a href="#" className="nav-link nav-link-lg fullscreen-btn">
										<i data-feather="maximize"></i>
									</a>
								</li>
							</ul>
						</div>
						<ul className="navbar-nav navbar-right">
							<li className={`nav-item dropdown notification_dropdown pr-3 ${Notifi}`}>

								<a className="nav-link h_link notification notificationActive dropdown-toggle" id="notificactionDropdown"
								 datatoggle="dropdown" aria-haspopup="true" aria-expanded="false"
								  href="#" onClick={"updateStatus() showNotification();"} >
								

								 {/* <a className="nav-link h_link notification notificationActive dropdown-toggle" id="notificactionDropdown"
								 datatoggle="dropdown" aria-haspopup="true" aria-expanded="false"
								  href="#" onClick={() => {updateStatus(); showNotification()} }>
								 */}
								 {/* <a className="nav-link h_link notification notificationActive dropdown-toggle" id="notificactionDropdown"
								 datatoggle="dropdown" aria-haspopup="true" aria-expanded="false"
								  href="#" > */}
								



									<span className="icons mr-0">
										<i onClick={handleTopNotifi}><FaBell/></i>
									</span>
									<span className="noti_circle pulls-effact align-items-center rounded-circle justify-content-center d-none noti-count">
										1
									</span>
								</a>
								<div className={`dropdown-menu ${Notifi}`} aria-labelledby="notificactionDropdown">
									<div className="delete_all_btn ">
										<h6 className="font-14 mb-0">Notifications</h6>
										<a href="#" className="btn btn_delete">View all</a>
									</div>
								</div>
							</li>
							<li className="dropdown profile_dropdown">
								<a href="#" datatoggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user" onClick={handleTopDropdown} style={{padding:"1rem !important" ,borderRadius:"7px"}}> 
									<span className="icons mr-0">
										<i><FaUser/></i>
									</span>
									<span className="ml-2">
										{detail.name}
									</span>
								</a>
								<div className={`dropdown-menu dropdown-menu-right pullDown ${topDropdown}`} >
									<div className="dropdown-title">Hello {detail.name}</div>
										<a href="admin_change_password" className="dropdown-item has-icon"> <i><FaUser/></i> Chnage Password</a>
										<a href="admin_setting" className="dropdown-item has-icon"> <i><IoMdSettings/></i> Setting</a>
									<div className="dropdown-divider"></div>
										<a onClick={logout} className="dropdown-item has-icon text-danger"> <i><FaSignOutAlt/></i> Logout</a>
								</div>
							</li>
						</ul>
				</nav>
        	</div>
		</div>  
    </Fragment>
    )
}

export default NavbarTop;
