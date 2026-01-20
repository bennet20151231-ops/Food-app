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
            <div style={{width: "100%"}}><iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=chennai+(FoodApp)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">popolazione comuni Italia mappa interattiva</a></iframe></div>
        </div>
    </section>
  )
}
