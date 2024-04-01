import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/Users/shafiqaabdat/Downloads/client-main/src/home/home.css'; // Ensure this path is correct
import home_img from '/Users/shafiqaabdat/Downloads/client-main/src/images/cash_.webp'; // Ensure this path is correct
import Slider from '/Users/shafiqaabdat/Downloads/client-main/src/slider/Slider.js';
import Footer from '/Users/shafiqaabdat/Downloads/client-main/src/footer/Footer.js';
import Services from '/Users/shafiqaabdat/Downloads/client-main/src/services/Service.js';
import ProductCard from './Trending/ProductCard';
import { Container, Row, Col } from "reactstrap";
import axios from 'axios';
import Design from '../design/Design';
import Top from '../PAGES/Top';

const Home1 = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    document.body.classList.add('customBodyStyle');
    // Dynamically load the Google Platform Library
    const script = document.createElement('script');
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "843618684207-f392btl1s2c433krt88t3qidmsptb9im.apps.googleusercontent.com", // Replace with your client ID
        callback: handlecallbackresponse,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"), // This ID should match the div below
        { theme: "outline", size: "large" }, // Customize button appearance
      );
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      document.body.classList.remove('customBodyStyle');
    };
  }, []);

  const handlecallbackresponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };
  const year = new Date().getFullYear();

  const [formData, setFormData] = useState({

    email:'',
    password: '',
   
});

  const handleLogin = () => {
    setflageerror(true);
    // Implement your login logic here
    const userData={
      email:formData.email,
      password:formData.password
    };
    // console.log('Login submitted:', { username, password });
    axios.post('http://192.168.1.12:9000/signin',userData)
    .then( res =>{ 
      res.data? <Link className="nav__link" to="/Home"></Link>:setflage(true);
     

    // <Text style={styles.passwordMatchMessage}>Passwords do not match.</Text>
    }
    )
    .catch( e =>{console.log(e);
    // console.log(flage);
  });
    
    // Here you would typically include a call to your API for the login
  };

  const handleChange = (e) => {
    const {name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};



  const [flageerror, setflageerror] = useState(false);
  const [flage, setflage] = useState(false);


  return (
    <>
    <Top></Top>

  <div  className="sora" >
  
<div className="content">

  <br/>
  <span className='advanced-glow' >Trending product in {year} </span>
        <h1>DESIGN YOUR HOUSE</h1>
<h2>Make Your Interior More Minimalistic & Modern </h2>
<br/>
<span>


  Cach bblash is where you will find all the modern styles of furniture and Electronics 
</span>

<br>

</br>
          <button className="custom-button">Shop Now</button> {/* Button added here */}
          <p className='animated-text new2'> Categories </p>
          <p className="animated-text new">Cash Bblash</p>
          

        </div>

        </div>
      


 

     
<div>





{/* <img src={home_img}  style={{ top: '0px', borderRadius: '50%', width: '90px', height: '90px' }} /> */}

<div className="slider-container">

  <Slider />
</div>


</div>
<br/><br/>
  <Services></Services>

  {/* <div  className="sora2" > */}
  <section className='trending'>
    <Container>
      <Row>
        <Col lg="12" className="text-center">
        <br/>
        <h2 className='section_title' >
        Trending Products

        </h2>

        </Col>
        <ProductCard>

        </ProductCard>
      </Row>
    </Container>
  </section>
{/* // </div> */}

 
          {/* <div className="buttons-container">
          <button className="button-style">Learn More↗</button>
        </div> */}

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer></Footer>

    </>
    
  );
}

export default Home1;