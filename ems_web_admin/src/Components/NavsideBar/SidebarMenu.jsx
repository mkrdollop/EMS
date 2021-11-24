
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SidebarMenu(props){
    // console.log(props);

    const stockDataMenu = [
        {
            menuId:1,
            childMenu:"All User List",
            Link:"/alluserlist"
        }, 
        
        // {
        //     menuId:1,
        //     childMenu:"Company List",
        // },  Link
        // {
        //     menuId:1,
        //     childMenu:"Contact Number",
           
        // },
        {
            menuId:2,
            childMenu:"All Plan",
            Link:"/allplan"
        }, 
        {
            menuId:2,
            childMenu:"Add Plan ",
            Link:"/addplanlist"
        }, 
        
        {
            menuId:3,
            childMenu:"Admin",
            Link
        },
        {
            menuId:3,
            childMenu:"Admin_User",
            Link
            
        },
        {
            menuId:3,
            childMenu:"Employee",
            Link
        }, 
        {
            menuId:4,
            childMenu:"History of all transaction",
            Link:"/alltransactions"
        }, 
        {
            menuId:4,
            childMenu:"Payment Methods",
            Link:"/paymentmethode"
        }, 
        {
            menuId:5,
            childMenu:"FAQ",
            Link:"/faq"
        },
        {
            menuId:5,
            childMenu:"Privacy Policy",
            Link:"/privacypolicy"
        },
        {
            menuId:5,
            childMenu:"Terms and Condition",
            Link:"/termconditions"
        },
        {
            menuId:5,
            childMenu:"About Us",
            Link:"/about"
        },
        // {
        //     menuId:7,
        //     childMenu:"Plan menu8 another7",
            
        // },
        
        // {
        //     menuId:8,
        //     childMenu:"Plan menu8 another",
            
        // },
       
        // {
        //     menuId:9,
        //     childMenu:"Plan menu8 another",
            
        // },
        // {
        //     menuId:10,
        //     childMenu:"Plan menu8 another",
            
        // },
        // {
        //     menuId:11,
        //     childMenu:"Plan menu8 another",
            
        // },
        // {
        //     menuId:12,
        //     childMenu:"Plan menu8 another",
            
        // },
       
    ];
    
    ///////////Open Side menu dropdown
    const [style, setStyle] = useState("none");
	const openAccordion = (id) =>{
		if(style=="none")
			setStyle("block");
		else{
			setStyle("none");
		}
	}
    return(
        <>
        <li className="dropdown"><a href="#" onClick={()=>openAccordion(`${props.menuId}`)} className="nav-link"><i>{props.menuIcon}</i><span>{props.menu}</span><FaAngleDown/></a>
            <ul className="dropdown-menu" id={`${props.menuId}`} style={{display:style}} >

                {stockDataMenu.map((data, index) => {
                    if(data.menuId==props.menuId){
                        
                        var subMenuData = <li><Link className="nav-link" to={data.Link}>{data.childMenu}</Link></li> ;
                    }

                return (
                    <>
                    {subMenuData}
                    </>
                    );
                    })}
                
            </ul>
        </li>
        </>
    );
}
export default SidebarMenu;