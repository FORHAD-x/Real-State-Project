import { MdMessage } from "react-icons/md"; 
import { FaVideo } from "react-icons/fa"; 
import { BsFillChatDotsFill } from "react-icons/bs"; 
import { FaPhoneAlt } from "react-icons/fa"; 
import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <>
    <section className='contact_wrapper'>
        <div className="contact-container paddings innerWidth flexCenter">
            {/* left-side */}
            <div className="contact-left flexColStart">
                <span className="orangeText ">Our Contact Us</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you. We believe a good
                <br /> 
                place to live can make your life better</span>
                
                <div className="contactsMode flexCenter">
                    {/*========== =====first row start ================== */}
                    <div className="row flexColStart">

                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <FaPhoneAlt size={25}/>
                                </div>
                                <div className="details flexColStart">
                                    <span className="primaryText">call</span>
                                    <span className="secondaryText">021 123 145 14</span>

                                </div>
                            </div>
                            <div className="button">Call now</div>
                        </div>
                        {/* ================================ */}

                    
                    <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <FaVideo  size={25}/>
                                </div>
                                <div className="details flexColStart">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">021 123 145 14</span>

                                </div>
                            </div>
                            <div className="button">Video Call now</div>
                        </div>
                    </div>
                    {/*// =================first row end ===============//*/}



                     {/* ==============second row start====================*/}

                    <div className="row flexColStart">

                        <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                <BsFillChatDotsFill size={25} />

                                </div>
                                <div className="details flexColStart">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 145 14</span>

                                </div>
                            </div>
                            <div className="button">Chat now</div>
                        </div>

                    {/* ================================ */}
                    <div className="mode flexColCenter">
                            <div className="flexStart">
                                <div className="icon flexCenter">
                                    <MdMessage  size={25}/>
                                </div>
                                <div className="details flexColStart">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 145 14</span>

                                </div>
                            </div>
                            <div className="button">Message now</div>
                        </div>
                    </div>
                     {/* ==============second row end ====================*/}




                </div>
            </div>


            {/* right side */}
            <div className="contact-right">
                <div className="img-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contact