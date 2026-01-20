import React from "react";
import './Header.css';
import { Link } from "react-router-dom";
function Menubar(){
    
    return(
        <header>
            <div className="logo">
                <h1>FoodApp</h1>
                <div className="menutoogle">
                    <i class='bxr  bx-menu-wider'  ></i> 
                </div>
            </div>
            <div className="menus">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/menu"}>Menus</Link></li>
                    <li><Link to={"/book"}>Book Table</Link></li>
                </ul>
            </div>
            <div className="orderlink">
                <ul>
                    <li><a href="#"><i class='bxr  bx-burger'  ></i> </a></li>
                    <li><a href="#"><i class='bxr  bx-cart'  ></i>  </a></li>
                    <li><a href="#"><i class='bxr  bx-user'  ></i>  </a></li>
                    <li className="ordernow"><a href="#">Order Now </a></li>

                </ul>
            </div>
        </header>
    )
};
export default Menubar;