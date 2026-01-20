import React  from "react";
import './Homemenus.css';
import Offerimg from '../../Assets/food1.jpg';
import Menuitemimg1 from '../../Assets/piza1.jpg';
import Menuitemimg2 from '../../Assets/food4.png';
import Menuitemimg3 from '../../Assets/food3.png';
import Ordernow from "./Ordernowbtn";
const Homemenusec =()=>{
    return(
        <section className="homemenuec">
            <div className="menutop">
                <div className="offerbox">
                    <div className="imgpart">
                        <img src={Offerimg} alt="offer" />
                    </div>
                    <div className="offercontent">
                        <h2>Tasty Thursdays</h2>
                        <h1>20% Off</h1>
                       <Ordernow/>
                    </div>
                </div>
             
                <div className="offerbox">
                    <div className="imgpart">
                        <img src={Offerimg} alt="offer" />
                    </div>
                    <div className="offercontent">
                        <h2>Tasty Thursdays</h2>
                        <h1>20% Off</h1>
                       <Ordernow/>
                    </div>
                </div>
                
            </div>

            <div className="heading">
                <h1>Our Menus</h1>
            </div>
            <div className="ourmenus">
                <div className="menuitem">
                    <div className="itemimg">
                        <img src={Menuitemimg1} alt="menus" />
                    </div>
                    <div className="itemcontent">
                        <h2>Delicious Pizza</h2>
                        <p>Delicious PizzaVeniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    </div>
                    <div className="price">
                        <h3>$20</h3>
                        <div className="itemicon">
                            <i class='bxr  bx-cart'  ></i>
                        </div>
                    </div>
                </div>
                <div className="menuitem">
                    <div className="itemimg">
                        <img src={Menuitemimg2} alt="menus" />
                    </div>
                    <div className="itemcontent">
                        <h2>Delicious Pizza</h2>
                        <p>Delicious PizzaVeniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    </div>
                    <div className="price">
                        <h3>$20</h3>
                        <div className="itemicon">
                            <i class='bxr  bx-cart'  ></i>
                        </div>
                    </div>
                </div>
                <div className="menuitem">
                    <div className="itemimg">
                        <img src={Menuitemimg3} alt="menus" />
                    </div>
                    <div className="itemcontent">
                        <h2>Delicious Pizza</h2>
                        <p>Delicious PizzaVeniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
                    </div>
                    <div className="price">
                        <h3>$20</h3>
                        <div className="itemicon">
                            <i class='bxr  bx-cart'  ></i>
                        </div>
                    </div>
                </div>
            </div>


            

            

            


            
        </section>

        
    )
    
};
export default Homemenusec;