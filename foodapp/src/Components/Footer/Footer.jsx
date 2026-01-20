import React  from "react";
import './Footer.css';
const Footer =()=>{
    return(
        <>
        <footer>
           <div className="imoportlink">
                <h2>Conatct Us</h2>
                <ul>
                    <li><a href="#"><i class='bxr  bx-location-alt-2'  ></i> kanyakumari </a></li>
                    <li><a href="#"><i class='bxr  bx-phone'  ></i>  +91 12345 6987</a></li>
                    <li><a href="#"><i class='bxr  bx-envelope'  ></i>  Foodapp@gmail.com </a></li>
                </ul>
           </div>
           <div className="imoportlink">
                <h2>Food  App</h2>
                <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                <div className="socil">
                    <ul>
                    <li><a href="#"><i class='bxr  bx-location-alt-2'  ></i>  </a></li>
                    <li><a href="#"><i class='bxr  bx-phone'  ></i>  </a></li>
                    <li><a href="#"><i class='bxr  bx-envelope'  ></i></a></li>
                </ul>
                </div>
           </div>
            <div className="imoportlink">
                <h2>Opening Time</h2>
                <p>10.00am to 10.00pm</p>
                <div className="socil">
                    <ul>
                    <li><a href="#"><i class='bxr  bx-location-alt-2'  ></i>  </a></li>
                    <li><a href="#"><i class='bxr  bx-phone'  ></i>  </a></li>
                    <li><a href="#"><i class='bxr  bx-envelope'  ></i></a></li>
                </ul>
                </div>
           </div>
        </footer>
        <div className="footerlast">
        <p>$ 2025 all rights reserved by free html templates</p>
        <p> $ distributed by themewagon</p>

        </div>


        </>
    )
};
export default Footer;