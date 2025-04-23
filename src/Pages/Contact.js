import React, { useState } from 'react'
import '../Styles/contact.css'
import Buttons from '../Component/Buttons'
import emailjs from 'emailjs-com';
import ContactOptions from '../Component/ContactOptions';


function Contact() {
  const [vname, setVname] = useState("");
  const [vemail, setVemail] = useState("");
  const [vsubject, setVsubject] = useState("");
  const [vdesc, setVdesc] = useState("");
  const [showError, setShowError] = useState(false);


  const setName = (event) => {
    setVname(event.target.value)
  }

  const setEmail = (event) => {
    setVemail(event.target.value)
  }


  const setSubject = (event) => {
    setVsubject(event.target.value)
  }


  const setDesc = (event) => {
    setVdesc(event.target.value)
  }

  const sendMail = () => {
    emailjs.send("service_uefkxbo", "template_kfpfgcl")
      .then((result) => {
        window.location.reload()
      }, (error) => {
        console.log(error.text);
      });
  }

  const sendMesage = () =>{
    setShowError(false);
    setTimeout(function(){
      setShowError(true);
    },2000)
  }


  return (
    <div className='dp contact df' style={{ flexDirection: 'column' }}>
      <div className='f4 df text-shadow'>CONTACT ME</div>
      <div className='boxc'>
        <div className='contact-form'>
          <div class="fields dfc">
            <div class="username">
              <input type="username" class="user-input" placeholder="Your name" onChange={setName} />
            </div>
            <div class="password">
              <input type="username" class="user-input" placeholder="Your email" onChange={setEmail} />
            </div>
            <div class="username">
              <input type="username" class="user-input" placeholder="subject" onChange={setSubject} />
            </div>
            <div class="text-area">
              <textarea type="username" class="user-input" placeholder="Your message" onChange={setDesc} />
            </div>
            <div class="submitBtn">

              <ContactOptions/>
              {/* <div class="frame" style={{marginLeft: '5vw'}}>
                <Buttons text={<FontAwesomeIcon icon={faPhone} />} width='2vw' height='7vh' />
                <Buttons text={<FontAwesomeIcon icon={faWhatsappquare} />} width='2vw' height='7vh' />
                <Buttons text={<FontAwesomeIcon icon={faBook} />} width='2vw' height='7vh' />
                <Buttons text={<FontAwesomeIcon icon={faSoccerBall} />} width='2vw' height='7vh' />
              </div> */}
              <div className='neu-btn submit-btn' style={{ width: '10vw' }} onClick={sendMesage}>Send Now</div>
             
            </div>
            {showError && <div style={{color:'red',fontSize:'0.5em',marginTop:'2vh'}}>*Opps! Failed to send message</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact