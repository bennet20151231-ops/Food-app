import React from "react";
import './Hero.css';
import Ordernow from "./Ordernowbtn";
class Hero extends React.Component{
    render(){
        return(
            <section className="herosec">
                <div className="herocontent">
                    <h1>Fast Food Restaurant</h1>
                    <p>Fast Food Restaurant
                        Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
                        <Ordernow/>
                </div>
            </section>
        )
    }
};export default Hero;