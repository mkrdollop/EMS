import React, { Fragment } from 'react';
import '../../assets/css/style.css';

function Footer() {
    return (
        <Fragment>
			 {/* <!-- Footer --> */}
		<footer className="main-footer position-fixed overflow-hidden z-index-99">
			<div className="footer-left">
				Copyright &copy; 2021
				<div className="bullet"></div>
				Design By <a href="#">EMS</a>
			</div>
			<div className="footer-right"></div>
		</footer>	
       
        </Fragment>
    )
}

export default Footer;
