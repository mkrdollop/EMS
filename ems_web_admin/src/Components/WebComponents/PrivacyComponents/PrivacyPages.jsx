import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';

function PrivacyPages() {
    return (
        <>
        <section className="top_section">
            <div className="container">
                <img src="./Image/logo.png" className="img-fluid logo" />
                <h1 className="top-title">Privacy Policy <span className="underline"></span></h1>
                <ul className="ems_breadcrums">
                    <li><Link to="/dashboard" className="page_name">Dashboard </Link>//</li>
                    <li><Link to="/privacypolicy" className="page_name active">Privacy Policy</Link></li>
                </ul>
            </div>
        </section>
        <section className="privacy-page commn-text bg-gray">
            <div className="container">
                <div className="privacy-item">
                    <h2 className="privacy-title">Overview </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <h2 className="privacy-title">Overview </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <h2 className="privacy-title">Terms </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <h2 className="privacy-title">Policy </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <h2 className="privacy-title">Conditions </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </section>  
        </>
    )
}

export default PrivacyPages;
