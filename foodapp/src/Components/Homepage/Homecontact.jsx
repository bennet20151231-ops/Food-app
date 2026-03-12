import React from 'react'
import './Homecontact.css';
import Ordernow from './Ordernowbtn';
export default function Homecontact() {
  return (
    <section className='homecontact'>
        <div className="formleftpart">
            <div className="heading">
                <h1>Book A Table</h1>
            </div>
            <form >
                <div className="inputs">
                    <label htmlFor="username">Customer Name</label>
                    <div>
                        <input 
                        type="text" 
                        name="customername" 
                        placeholder='Enter your Name'  />
                    </div>
                </div>
                <div className="inputs">
                    <label htmlFor="username">Customer Email</label>
                    <div>
                        <input 
                        type="email" 
                        name="customeremail" 
                        placeholder='Enter your Email'  />
                    </div>
                </div>
                 <div className="inputs">
                    <label htmlFor="username">Customer Mobile</label>
                    <div>
                        <input 
                        type="tel" 
                        name="customermobile" 
                        placeholder='Enter your mobile'  />
                    </div>
                </div>
                 <div className="inputs">
                    <label htmlFor="username">Customer Book Date</label>
                    <div>
                        <input 
                        type="date" 
                        name="customerdate" 
                        placeholder='Enter your Bookin date'  />
                    </div>
                </div>
                <div>
                    <Ordernow/>
                </div>
            </form>
        </div>
        <div className="formright">
            <div style={{width: "100%"}}>
                <iframe
                    title="Google Map Location"
                    src="https://maps.google.com/..."
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    ></iframe>
                </div>
        </div>
    </section>
  )
}
