import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';

function FAQPages() {
    return (
        <>
        <section className="top_section">
            <div className="container">
                <img src="./Image/logo.png" className="img-fluid logo" />
                <h1 className="top-title">FAQ <span className="underline"></span></h1>
                <ul className="ems_breadcrums">
                    <li><Link to="/dashboard" className="page_name">Dashboard </Link>//</li>
                    <li><Link to="/faq" className="page_name active">FAQ</Link></li>
                </ul>
            </div>
        </section>
         <section className="privacy-page faq-page commn-text bg-gray">
            <div className="container">
                <div className="top-title">
                <h2>Frequently Asked Questions</h2>
                </div>
                <div className="privacy-item">
                    <span className="faq-item">1</span>
                    <h2 className="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <span className="faq-item">2</span>
                    <h2 className="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <span className="faq-item">3</span>
                    <h2 className="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <span className="faq-item">4</span>
                    <h2 className="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="privacy-item">
                    <span className="faq-item">5</span>
                    <h2 className="privacy-title">Cookies </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
    </section>     
        </>
    )
}

export default FAQPages;
