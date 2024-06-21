import axios from 'axios';
import React, { useState } from 'react';
import './EmailRestAPI.css';
import home_img from '../images/cash_.webp'; // Ensure this path is correct
import Lottie from 'react-lottie';
import celebrationAnimation from '/Users/shafiqaabdat/Downloads/client-main/src/Cart/Animation - 1714596651280.json'; 

const EmailRestAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_85b8xwb';
    const templateId = 'template_ti9grtk';
    const publicKey = 'bK-T1_bSPgdYHHqaH';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Shafiqa15',
        message: 'Your new password is xyzsjswwuAA111',
      }
    };

   

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
      setIsCodeSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: celebrationAnimation,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};
  return (
    
    <div className="emailFormContainer" style={{marginTop:'50px'}}>
      <br/><br/><br/>
      
      {!isCodeSent ? (
        <>
          <p>Please reenter your email, we will send you a new message!</p>
          <form onSubmit={handleSubmit} className='emailForm'>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Verify</button>
          </form>
        </>
      ) : (
        <div> 
        <Lottie options={defaultOptions} height={100} width={100}/>

        <p >We sent you a new password!</p>
        <button type="submit"> Did not get an email ! resend it!</button>
        </div>
      )}
      <p className="teamText">Cash Blash team</p>
      <img src={home_img} alt="Cash Blash team" />
    </div>
  )
};

export default EmailRestAPI;
