import axios from 'axios';
import image1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/Screenshot 2024-03-01 at 01.22.19.png';
import './SignupPage.css'; // Update this path if necessary
import React, { useState, useEffect } from 'react';


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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const [users, setUsers] = useState([]); // State to store users
    const [showUsers, setShowUsers] = useState(false); // This state might be used to control the visibility of the users list


    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
    const togglePasswordVisibility2 = () => setPasswordShown2(!passwordShown2);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFlage(true);
        setEmailExists(false);
        setPasswordMatch(formData.password === formData.confirmPassword);
    
        if (formData.password !== formData.confirmPassword) {
            return; // Stop the form submission if passwords do not match
        }
    
        axios.post('http://192.168.88.8:9000/signup', formData)
        .then(response => {
            console.log('Signup successful:', response.data);
            // Redirect the user to the home page after successful signup
            window.location.href = '/Home1';
        })
        .catch(error => {
            console.error('Signup error:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 409 || error.response.data.message === "Email already exists") {
                    setEmailExists(true);
                } else {
                    setEmailExists(false); // Ensure this is reset if the error is not due to a duplicate email
                }
            } else {
                console.error('Error message:', error.message);
            }
        });   
    };
    
 
    // // UseEffect to call fetchUsers when the component mounts
    // useEffect(() => {
    //     axios.get('http://192.168.88.8:9000/signup') // Adjust this URL
    //         .then(response => {
    //             console.log('Fetched users:', response.data);
    //             setUsers(response.data); // Ensure this matches your response structure
    //         })
    //         .catch(error => console.error('Failed to fetch users:', error));
    // }, []);

    useEffect(() => {
        axios.get('http://192.168.88.8:9000/signup') // Adjust this URL
            .then(response => {
                console.log('Fetched users:', response.data); // Check the structure here
                setUsers(response.data); // Adjust based on your actual structure
            })
            .catch(error => {
                console.error('Failed to fetch users:', error);
            });
    }, []);
    
    // useEffect(() => {
    //     // Temporary hardcoded data to test rendering
    //     setUsers([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
    // }, []);
    

    return (
        <>




            <h1 style={{marginTop: '70px', fontFamily: 'fantasy', fontSize: '30px'}}>
                Create a new account for Exclusive Furniture Deals!
            </h1>
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

{/* 
                        <input
                                type="button"
                                name="b"
                                value={formData.name}
                                onChange={fetchUsers}
                                placeholder="Your Email"
                                required
                            /> */}



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
                <div key={index}>{user.name}</div> // Adjust according to your user object structure
            ))}
        </div>
        </>
    );
};

export default SignUp;
