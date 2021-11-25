import React from 'react';
import '../../../assets/css/style.css';
import { Link } from 'react-router-dom';

function TermsPages() {
    return (
        <>
        <section class="top_section">
            <div class="container">
                <img src="./Image/logo.png" class="img-fluid logo" />
                <h1 class="top-title">Terms & Conditions <span class="underline"></span></h1>
                <ul class="ems_breadcrums">
                    <li><Link to="/dashboard" class="page_name">Dashboard </Link>//</li>
                    <li><Link to="/termconditions" class="page_name active">Terms & Conditions</Link></li>
                </ul>
            </div>
        </section>
        <section class="privacy-page commn-text bg-gray">
            <div class="container">
                <div class="top-title">
                <h2>Terms & Conditions</h2>
                </div>
                <div class="privacy-item">
                    <h2 class="privacy-title">Overview </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <h2 class="privacy-title">Overview </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <h2 class="privacy-title">Terms </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <h2 class="privacy-title">Policy </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div class="privacy-item">
                    <h2 class="privacy-title">Conditions </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <label for="terms" ><input type="checkbox" id="terms" /> Are you agree terms & Conditions</label>
                </div>
            </div>
        </section>  
        </>
    )
}

export default TermsPages;
