import React from 'react';
import "./Footer.css";


const Footer = (props) => {
    return ( 
        <div className="row row-space">
            <div className="col-md-12" style={{padding: 0}}>
                <div className="footer-area">
                    <p className="footer-text">© 2021 - devCodeCamp Library Project - Developed by <a href="https://joshuab94.github.io" className="footer-link" target="_blank" rel="noreferrer noopener">Joshua Berrios</a></p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;