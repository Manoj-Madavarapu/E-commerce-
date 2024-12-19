import React, { useEffect, useState } from "react"
let Nav=()=>{
        return(
            <>
            <nav className="fake_nav">
                <div className="enav">
                    <h1>Ecommerce</h1>
                </div>
                {/* <div className="einput">
                     <input type="text" className="input" placeholder="search products"/>
                    <i className="fa-solid fa-magnifying-glass search" ></i>
                </div> */}
                <div className="enav_list">
                <ul>
                    <li><a href="#home" className="anchor">Home</a></li>
                    <li><a href="#cards"className="anchor">Shop</a></li>
                    <li><a href="" className="anchor">Items</a></li>
                    <li><a href="" className="anchor">About</a></li>
                    <li><i className="fa-solid fa-cart-shopping cart"></i></li>
                </ul>
                </div>
            </nav>

            </>
        )
    }
export default Nav
