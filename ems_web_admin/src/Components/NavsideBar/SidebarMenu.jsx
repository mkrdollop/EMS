
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function SidebarMenu(props){
    // console.log(props);

    const stockDataMenu = [
        {
            menuId:1,
            childMenu:"User Menu1 usha",

            
        },
        {
            menuId:1,
            childMenu:"Plan menu2",

            
        },
        {
            menuId:1,
            childMenu:"Plan menu8",
            
        },
        {
            menuId:2,
            childMenu:"Plan menu2 usha",

            
        },
        {
            menuId:3,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:3,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:3,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:4,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:4,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:5,
            childMenu:"Plan menu8 another 5",
            
        },
        {
            menuId:5,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:6,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:6,
            childMenu:"Plan menu8 another 6",
            
        },
        {
            menuId:7,
            childMenu:"Plan menu8 another7",
            
        },
        {
            menuId:7,
            childMenu:"Plan menu8 another7",
            
        },
        {
            menuId:8,
            childMenu:"Plan menu8 another ",
            
        },
        {
            menuId:8,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:9,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:9,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:10,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:11,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:11,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:12,
            childMenu:"Plan menu8 another",
            
        },
        {
            menuId:13,
            childMenu:"Plan menu8 another",
            
        },
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
                        var subMenuData = <li><a className="nav-link" href="#">{data.childMenu}</a></li> ;
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