import React from "react";
import './style.css'
import Resto from '../assets/img/Arsitag-Januari-04-Foto-2.jpeg'
import DepanResto from '../assets/img/front-restaurant.jpg'

const Main = () => {
    return (
        <main>
            <img src={Resto} />

            <div className="about-container">
                <p>About Our Restaurant</p>
                <img src={DepanResto} className="image"/>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                     mollit anim id est laborum.</h3>
            </div>

            <h1>Our Service</h1>


            <div className="card-container">
                <div className="card">
                    <div className="box">
                        <h3>French-Style Service</h3>
                        <p>lorem</p>
                    </div>
                </div>
           
                <div className="card">
                    <div className="box">
                        <h3>Guéridon Service</h3>
                        <p>lorem</p>
                    </div>
            </div>
                <div className="card">
                    <div className="box">
                        <h3>Korean-Style Service</h3>
                        <p>lorem</p>
                    </div>
            </div>
            </div>
        </main>
    )
}
export default Main