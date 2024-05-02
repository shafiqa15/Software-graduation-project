
import image1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/Screenshot 2024-03-01 at 01.22.19.png';
import './SignupPage.css'; // Update this path if necessary
import React, { useState, useEffect } from 'react';
import Top from '../PAGES/Top';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Home1 from '../home/Home1';
import axios from 'axios';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      
    });

    const [passwordShown, setPasswordShown] = useState(false);
    const [passwordShown2, setPasswordShown2] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);
    const [emailExists, setEmailExists] = useState(false);
    const [flage, setFlage] = useState(false);
    const [profile, setProfile] = useState(null); // State to hold the logged-in user's profile info
    const [showProfileModal, setShowProfileModal] = useState(false); // State to control the visibility of the profile modal

    const toggleProfileModal = () => {
        setShowProfileModal(!showProfileModal);
    };

    const navigate = useNavigate(); // Create the navigate function


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const [users, setUsers] = useState([]); 
    const [showUsers, setShowUsers] = useState(false); 


    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
    const togglePasswordVisibility2 = () => setPasswordShown2(!passwordShown2);



    const [username,setusername]=useState('');


    // const handleSubmit = (e) => {
       
    //     e.preventDefault();
    //     setFlage(true);
    //     setEmailExists(false);
    //     setPasswordMatch(formData.password === formData.confirmPassword);
    
    //     if (formData.password !== formData.confirmPassword) {
    //         return; 
    //     }
    //     axios.post('http://192.168.88.5:9000/signup',formData)
    //     .then(response => {
            
    //         console.log('Signup successful:', response.data);
    //         setusername(response.data._id);
    //         navigate("/Home1");

        
    // alert(response.data._id);
    // { alert(formData.email)} //back to it
    // { alert(formData.name)} //back to it
    // { alert(formData.password)} //back to it
    // // { alert(formData.name)} //back to it

         
    // e.preventDefault();
    // const { value } = e.target[0];
    
    // axios.post(
    //     'http://localhost:9000/authenticate',
    //     {username :formData.name}
        
    //     )

    // axios.post(
    //   'http://localhost:9000/authenticate',
    //   {username :value}
      
    //   )
    //   .then(r=> e.onAuth({ ...r.data,secret:value }))
    //   .catch(e => console.log('error',e))
   


          
    //     })
    //     .catch(error => {
    //         console.error('Signup error:', error);
    //         if (error.response) {
    //             console.error('Error response:', error.response);
    //             if (error.response.status === 409 || error.response.data.message === "Email already exists") {
    //                 setEmailExists(true);
    //             } else {
    //                 setEmailExists(false); // Ensure this is reset if the error is not due to a duplicate email
    //             }
    //         } else {
    //             console.error('Error message:', error.message);
    //         }
    //     });   
    // };
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlage(true);
        setEmailExists(false);
        setPasswordMatch(formData.password === formData.confirmPassword);
    
        if (formData.password !== formData.confirmPassword) {
            return; 
        }
        axios.post('http://192.168.88.5:9000/signup', formData)
        .then(response => {
            console.log('Signup successful:', response.data);
            setusername(response.data._id);
            alert(response.data._id); // Ensure this shows the correct ID
            navigate("/NavigationBar", { state: { userId: response.data._id, email: formData.email, name: formData.name, password: formData.password }});
            navigate("/Cart", { state: { userId: response.data._id, email: formData.email, name: formData.name, password: formData.password }});


            e.preventDefault();
            const { value } = e.target[0];
            
            axios.post(
                'http://localhost:9000/authenticate',
                {username :formData.name}
                
                )
        
            axios.post(
              'http://localhost:9000/authenticate',
              {username :value}
              
              )
              .then(r=> e.onAuth({ ...r.data,secret:value }))
              .catch(e => console.log('error',e))



        })
        .catch(error => {
            console.error('Signup error:', error);
            if (error.response && (error.response.status === 409 || error.response.data.message === "Email already exists")) {
                setEmailExists(true);
            }
        });







    };
    

    useEffect(() => {
        axios.get('http://192.168.88.5:9000/signup')
            .then(response => {
                console.log('Fetched users:', response.data); 
                setUsers(response.data); 
                
            })
            .catch(error => {
                console.error('Failed to fetch users:', error);
            });
    }, []);
    

    return (
        <>

<Top></Top>




            <h1 style={{marginTop: '150px', fontFamily: 'fantasy', fontSize: '30px'}}>
                Create a new account for Exclusive Furniture Deals!
            </h1>
            {/* <form onSubmit={handleSubmit} className="signup-form" method='POST'> */}

            <div className="cover-page">
            
                <i style={{marginTop: '-30px'}} className="ri-close-line login__close" id="signup-close" onClick={() => window.location.href = '/'}></i>
                <div className="signup-container" style={{marginTop: '10px'}}>
                    <form onSubmit={handleSubmit} className="signup-form">
                        <div className="password-input-container">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                
                            />
                            {flage && !formData.name && <p className='errormsg'>Name is required.</p>}
                         
                            <label htmlFor="text">Your name</label>
                        
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
                            {flage && !formData.email && <p className='errormsg'>Email is required.</p>}
                            {emailExists && <p className='errormsg'>An account with this email already exists.</p>}
                            <label htmlFor="email">Your Email</label>
                        </div>
                    


                        <div className="password-input-container">
                            <input 
                                type={passwordShown ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                required
                            />
                            {flage && !formData.password && <p className='errormsg'>Password is required.</p>}
                            <label htmlFor="password">Password</label>
                            <span className="toggle-password-icon" onClick={togglePasswordVisibility}>
                                {passwordShown ? '👁️' : '🙈'}
                            </span>
                        </div>

                        <div className="password-input-container">
                            <input 
                                type={passwordShown2 ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                required
                            />
                            {flage && !formData.confirmPassword && <p className='errormsg'>Confirm password is required.</p>}
                            {flage && !passwordMatch && <p className='errormsg'>Passwords do not match.</p>}
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <span className="toggle-password-icon" onClick={togglePasswordVisibility2}>
                                {passwordShown2 ? '👁️' : '🙈'}
                            </span>
                        </div>

                        <button type="submit" className="signup-button" style={{fontFamily: 'fantasy', fontSize: '20px'}}>Sign Up</button>
                    </form>
                    <div className="signup-image-container">
                        <img src={image1} alt="Decorative" className="signup-image" />
                    </div>
                </div>



            </div>




            <div className="users-list">
            <h2>Users</h2>
            {users.map((user,index) => (
                <div key={index}>{user.name}</div> 
            ))}


        </div>

        {profile && (
                    <div onClick={toggleProfileModal} className="profile-icon">
                        <img src={profile.imageUrl || 'default-profile.png'} alt="Profile" />
                    </div>
                )}
        </>
    );
};

export default SignUp;