import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Top from './Top';
import prof from '/Users/shafiqaabdat/Downloads/client-main/src/PAGES/Animation - 1714676364665.json'; 
import Lottie from 'react-lottie';
import Footer from '../footer/Footer';
import axios from 'axios';
import { useUser } from '../signup/UserContext';
function NavigationBar() {
    const location = useLocation();
    const navigate = useNavigate();
    // const { userId, email, name, password, phoneNumber, country, location: userLocation } = location.state || {};
    // const [userInfo, setUserInfo] = useState({ userId,email, name, password, phoneNumber, country, location: userLocation });
    // const { userData } = useUser();
    const { userData, setUserData } = useUser();
    if (!userData) {
        return <div>No user data available.</div>;
    }
 const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} with value: ${value}`);
    setUserData(prev => ({ ...prev, [name]: value }));
    console.log(userData); // Log the userInfo state after updating
};

    
    

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: prof,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const styles = {
        container: {
            backgroundColor: '#ffffff', // Brighter background
            padding: '20px',
            borderRadius: '12px', // More pronounced border radius
            boxShadow: '0 10px 30px #d96b64', // More dramatic shadow
            maxWidth: '600px',
            margin: '40px auto',
            textAlign: 'center',
            border: '1px solid #eee' // Subtle border
        },
        header: {
            color: '#d96b64', // Vibrant purple
            fontSize: '26px', // Slightly larger text
            marginBottom: '15px',
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' // Modern font
        },
        inputContainer: {
            margin: '15px 0' // Increase space between inputs
        },
        label: {
            display: 'block',
            marginBottom: '10px',
            fontWeight: 'bold',
            color: '#333', // Darker color for better readability
            fontSize: '16px' // Larger font size for labels
        },
        input: {
            padding: '12px 20px',
            width: '100%',
        
            borderRadius: '8px',
            border: '2px solid #d96b64', // Purple border to match header
            outline: 'none',
            transition: 'border-color 0.3s', // Smooth transition for focus
            ':focus': {
                borderColor: '#d96b64' // Coral color on focus
            }
        },
        button: {
            padding: '12px 25px',
            backgroundColor: '#472826', // Coral background
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '18px', // Larger button text
            marginTop: '25px',
            transition: 'background-color 0.3s', // Smooth transition for hover
            ':hover': {
                backgroundColor: '#472826' // Tomato color on hover
            }
        },
        lottie: {
            margin: '0 auto',
            maxWidth: '400px',
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userData.userId) {
            alert('User ID is undefined. Cannot update profile.');

            return;
        }
    
  


        axios.put(`http://192.168.88.2:9000/editProfile/${userData.userId}`, userData)
    .then(res => {
        // console.log(res.data);
        // alert(JSON.stringify(res.data));
        // alert(userData.data);
        // alert(userData.address);
        alert("success");
        
    })
    .catch(error => {
        console.error("Error updating profile:", error);
        alert("Failed to update profile. Please try again.");
    });

    
    
 
    
            // navigate(`/Homee1/${userId}`);

        // } else {
        //     const errorText = await response.text();
        //     alert(`Failed to update profile. Please try again. Error: ${errorText}`);
        // }
    };

    return (
        <div>
            <Top />      <Lottie options={defaultOptions} height={400} width={400} style={styles.lottie} />

            {/* <h1>User Profile</h1>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p> */}
      <div style={{marginTop:'-150px'}}>
            <form style={styles.container} onSubmit={handleSubmit}>

                <p style={styles.header}>{userData.name}'s Profile</p>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="name">Name</label>
                    <input style={styles.input} type="text" name="name" id="name" value={userData.name} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="email">Email</label>
                    <input style={styles.input} type="email" name="email" id="email" value={userData.email} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input style={styles.input} type="password" name="password" id="password" value={userData.password} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="phoneNumber">Phone Number</label>
                    <input style={styles.input} type="tel" name="phoneNumber" id="phone" value={userData.phoneNumber} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="country">country</label>
                    <input style={styles.input} type="text" name="country" id="address" value={userData.country} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="location">Location</label>
                    <input style={styles.input} type="text" name="location" id="location" value={userData.location} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="profileImage">Profile Image</label>
                    <input style={styles.input} type="file" name="profileImage" id="profileImage" onChange={(e) => setUserData({ ...userData, profileImage: e.target.files[0] })} />
                </div>
                <button style={styles.button} type="submit">Update Profile</button>
            </form>
            </div>

            <br/>
            <Footer></Footer>
        </div>
    );
}

export default NavigationBar;
