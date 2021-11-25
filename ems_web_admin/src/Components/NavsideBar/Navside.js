import React, { useState } from "react";

import '../../assets/css/style.css';
import { FaWallet } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaCube } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaRegClone } from "react-icons/fa";
import { FaClone } from "react-icons/fa";
import { RiAddBoxFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMoneyCheck } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaFolder } from "react-icons/fa"
import { MdManageAccounts } from "react-icons/md";
import { MdAddBox } from "react-icons/md";
import SidebarMenu from "../NavsideBar/SidebarMenu";
import '../../assets/css/bootstrap.min.css'; 
import { Link } from "react-router-dom";

function Navside() {

    const stockData = [
        {
            menuId:1,
            parentMenu: "User Managment",
            parentIcon: <FaUserAlt/>,
            
        },
        {
            menuId:2,
            parentMenu: "Plan Managment",
            parentIcon: <FaClone/>,
            
        },
        {   
            menuId:3,
            parentMenu: "Role Management",
            parentIcon: <FaUsers/>,
        },
        {
            menuId:4,
            parentMenu: "Transaction Managment",
            parentIcon: <FaHandHoldingUsd/>,
        },
        {
            menuId:5,
            parentMenu: "Web Management",
            parentIcon: <MdAddBox/>,
            
        },
        {
            menuId:6,
            parentMenu: "Notification",
            parentIcon: <FaBell/>,
            
        },
        // {
        //     menuId:5,
        //     parentMenu: "Job Managment",
        //     parentIcon: <FaFolder/>,
            
        // },
        // {
        //     menuId:6,
        //     parentMenu: "Project Managment",
        //     parentIcon: <MdManageAccounts/>,
            
        // },
       
        // {
        //     menuId:9,
        //     parentMenu: "Community Managment",
        //     parentIcon: <FaUsers/>,
            
        // },
        // {
        //     menuId:10,
        //     parentMenu: "Skill Managment",
        //     parentIcon: <FaGraduationCap/>,
           
        // },
        // {
        //     menuId:11,
        //     parentMenu: "Payment mode",
        //     parentIcon: <FaMoneyCheck/>,
            
        // },
        // {
        //     menuId:12,
        //     parentMenu: "Wallet Managment",
        //     parentIcon: <FaWallet/>,
        //     // childMenu
            
        // },
        // {
        //     menuId:13,
        //     parentMenu: "Earning Managment",
        //     parentIcon: <RiAddBoxFill/>,
            
        // },
        ];

    return (
        <>
        <div className="main-sidebar sidebar-style-2">
			<aside id="sidebar-wrapper">
				<div className="sidebar-brand">
                    <a href="#"> 
						<img alt="image" src= "./Image/logo.png" className="header-logo" />
					</a>
				</div>
				<ul className="sidebar-menu">
					<li className="dropdown active">
                        <Link to="/dashboard" className="nav-link"><i ><FaCube/></i>
                            <span>Dashboard</span>
                        </Link>
					</li>


                {stockData.map((data, index) => {
                    return (
                        <>
                        <SidebarMenu key={index} menu={data.parentMenu} menuIcon={data.parentIcon} menuId={data.menuId}/>
                        </>
                    );
                    })}
					
					{/* <li className="dropdown"><a onClick={() => setOpen(!open)} aria-controls="user-management" aria-expanded={open} ><i ><FaUserAlt/></i><span>User Managment</span><FaAngleDown/></a>
						<Collapse in={open}>
						<ul className="dropdown-menu" id="user-management">
							<li><a className="nav-link" href="#">Users</a></li>
							<li><a className="nav-link" href="#">Client</a></li>
							<li><a className="nav-link" href="#">Employers</a></li>
							<li className="dropdown"><a href="#" className="nav-link"><span>Knowledge Partner</span><FaAngleDown/></a>
								<ul className="dropdown-menu">
									<li><a className="nav-link" href="#">Approved KP</a></li>
									<li><a className="nav-link" href="#">Unapproved KP</a></li>							
								</ul>
							</li >
						</ul>
						</Collapse>
					</li> */}
					
					{/* <li className="dropdown"><a href="#" onClick={()=>openAccordion("plan_manager")} className="nav-link"><i><FaRegClone/></i><span>Plan Managment</span><FaAngleDown/></a>
						<ul className="dropdown-menu" id="plan_manager" style={{display:style}}>
							<li><a className="nav-link" href="#">Add Plan</a></li>
							<li><a className="nav-link" href="#">View Plan</a></li>
		                    <li><a className="nav-link" href="#">View User Plan</a></li>
						</ul>
					</li>
                    
					<li className="dropdown"><a href="#" onClick={()=>openAccordion("Question_Managment")} className="nav-link"><i><FaRegClone/></i><span>Question Managment</span><FaAngleDown/></a>
						<ul className="dropdown-menu" id="Question_Managment" style={{display:style}}>
							<li><a className="nav-link" href="#">Add Plan</a></li>
							<li><a className="nav-link" href="#">View Plan</a></li>
		                    <li><a className="nav-link" href="#">View User Plan</a></li>
						</ul>
					</li>			
					
					<li className="dropdown"><a href="#" className="nav-link"><i ><FaMoneyCheck/></i><span>Payment Mode</span><FaAngleDown/></a>
						<ul className="dropdown-menu">
						    <li><a className="nav-link" href="#">Add Payment Mode</a></li>
							<li><a className="nav-link" href="#">View Payment Mode</a></li>
						</ul>
					</li>
					
					<li className="dropdown"><a href="#" className="nav-link"><i ><FaHandHoldingUsd/></i><span>Transaction Managment</span><FaAngleDown/></a>
						<ul className="dropdown-menu">
							<li><a className="nav-link" href="#">Total Earning</a></li>
							<li><a className="nav-link" href="#">Total Released</a></li>
						</ul>
					</li>
					
					<li className="dropdown"><a href="#" className="nav-link"><i><FaBell/></i><span>Notification</span><FaAngleDown/></a>
						<ul className="dropdown-menu">
							<li><a className="nav-link" href="#">Notification List</a></li>
						</ul>
					</li>
					
					<li className="dropdown"><a href="#" className="nav-link"><i><FaInfo/></i><span>Customer Support</span><FaAngleDown/></a>
                    <ul className="dropdown-menu">
                        <li><a className="nav-link" href="#">View Contacts</a></li>
                    </ul>
					</li> */}
					
				</ul>
			</aside>
		</div>
        </>
    );
}

export default Navside;
