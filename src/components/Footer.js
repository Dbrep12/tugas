import React from "react";
import Fb from '../assets/img/fb.png'
import Ig from '../assets/img/ig.png'
import X from '../assets/img/twitter.png'
import './style.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <p>Get connected with us on social networks!</p>
                <div className="footer-image">
                    <a href="#"><img src={X}></img></a>
                    <a href="#"><img src={Fb}></img></a>
                    <a href="#"><img src={Ig}></img></a>
                </div>
            </div>
        </div>
    )
}
export default Footer