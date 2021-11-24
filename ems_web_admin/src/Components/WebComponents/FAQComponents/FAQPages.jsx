import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/style.css';

function FAQPages() {
    return (
        <>
        <section class="top_section">
            <div class="container">
                <img src="./Image/logo.png" class="img-fluid logo" />
                <h1 class="top-title">FAQ <span class="underline"></span></h1>
                <ul class="ems_breadcrums">
                    <li><Link to="/dashboard" class="page_name">Dashboard </Link>//</li>
                    <li><Link to="/faqpage" class="page_name active">FAQ</Link></li>
                </ul>
            </div>
        </section>
         <section class="privacy-page faq-page commn-text bg-gray">
            <div class="container">
                <div class="top-title">
                <h2>Frequently Asked Questions</h2>
                </div>
                <div class="privacy-item">
                    <span class="faq-item">1</span>
                    <h2 class="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <span class="faq-item">2</span>
                    <h2 class="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <span class="faq-item">3</span>
                    <h2 class="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <span class="faq-item">4</span>
                    <h2 class="privacy-title">Lorem Ipsum is simply dummy text</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <span class="faq-item">5</span>
                    <h2 class="privacy-title">Cookies </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
    </section>     
        </>
    )
}

export default FAQPages;
