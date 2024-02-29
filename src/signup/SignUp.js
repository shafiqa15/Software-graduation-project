import React, { useState } from 'react';
import '/Users/shafiqaabdat/Downloads/client-main/src/signup/SignupPage.css'; // Make sure this path is correct
import image1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/Screenshot 2024-03-01 at 01.22.19.png';
const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '' // This is the confirmation password field
    });
    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [showLogin, setShowLogin] = useState(false);
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const togglePasswordVisibility2 = () => {
        setPasswordShown2(!passwordShown2);
    };

    const [passwordMatch, setPasswordMatch] = useState(true); // State to keep track of password match

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match.");
            return; // Don't submit form until passwords match
        }

        if (!passwordMatch) {
            alert("Passwords don't match.");
            return; // Don't submit form until passwords match
        }


        // Proceed with the form submission
        console.log('Form data submitted:', formData);
        // Here you would typically also include a call to your API for the signup
    };

    return (
        <>
                        <h1 style={{marginTop:'70px',fontFamily:'fantasy',fontSize:'30px'}}>
    Create a new account for Exclusive Furniture Deals!
</h1>
       
        <div className="cover-page">
 
            {/* Assuming <Top> is a navbar or header component */}
            {/* <Top /> */}
            <i style={{marginTop:'-30px'}} className="ri-close-line login__close" id="signup-close"  onClick={() => window.location.href = '/'}></i>

            <div className="signup-container" style={{marginTop:'10px'}}>
                
                {/* <h2>Sign Up for Exclusive Furniture Deals!</h2> */}
                <form onSubmit={handleSubmit} className="signup-form">
            <div>
            <br/>
            <div className="password-input-container">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                        
                    /> 
                    <label htmlFor="text" > Your name </label>
              
                  </div>
                  </div>
                  <div className="password-input-container">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                        
                    />
                     <label htmlFor="email" > Your Email </label>
                    </div>
                    
                    <div className="password-input-container">
                        <input 
                            type={passwordShown ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="password-input"
                            required
                        />
                          <label htmlFor="password" > password </label>
                        <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
                            {passwordShown ? '👁️' : '🙈'}
                        </span>
                    </div>
                    <div className="password-input-container">
                    
                        <input 
                            type= {passwordShown2 ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="password-input"
                            required
                        />
                                   <label htmlFor="password" >confirm password </label>

                            <span className="toggle-password-icon" onClick={togglePasswordVisibility2}>
                            {passwordShown2 ? '👁️' : '🙈'}
                            
                        </span>
                    </div>
                    <button type="submit" className="signup-container" style={{fontFamily:'fantasy',fontSize:'20px'}}>Sign Up</button>
                    {!passwordMatch && (
                        <label className="password-match-message">
                            Passwords do not match.
                        </label>
                    )}
                  
                   

                </form>
                <div className="signup-image-container">
                        <img src={image1} alt="Decorative" className="signup-image" />
                    </div>
            </div>
   
        </div>
        </>
    );
    
};

export default SignUp;
