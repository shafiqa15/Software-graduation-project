import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Top from './Top';
import prof from '/Users/shafiqaabdat/Downloads/client-main/src/PAGES/Animation - 1714676364665.json'; 
import Lottie from 'react-lottie';
import Footer from '../footer/Footer';

function NavigationBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { userId, email, name, password, phone, address, location: userLocation } = location.state || {};
    const [userInfo, setUserInfo] = useState({ email, name, password, phone, address, location: userLocation });

    const handleChange = (e) => {
        setUserInfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
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
        if (!userId) {
            alert('User ID is undefined. Cannot update profile.');
            return;
        }
    
        const formData = new FormData();
        Object.keys(userInfo).forEach(key => {
            if (key === 'profileImage') {
                formData.append(key, userInfo[key]);
            } else {
                formData.append(key, userInfo[key]);
            }
        });
    
        const response = await fetch(`http://192.168.88.5:9000/editProfile/${userId}`, {
            method: 'PUT',
            body: formData
        });
        
    
        if (response.ok) {
            alert('Profile updated successfully!');
            // navigate(`/Homee1/${userId}`);

        } else {
            const errorText = await response.text();
            alert(`Failed to update profile. Please try again. Error: ${errorText}`);
        }
    };

    return (
        <div>
            <Top />      <Lottie options={defaultOptions} height={400} width={400} style={styles.lottie} />

      <div style={{marginTop:'-150px'}}>
            <form style={styles.container} onSubmit={handleSubmit}>

                <p style={styles.header}>{name}'s Profile</p>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="name">Name</label>
                    <input style={styles.input} type="text" name="name" id="name" value={userInfo.name} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="email">Email</label>
                    <input style={styles.input} type="email" name="email" id="email" value={userInfo.email} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="password">Password</label>
                    <input style={styles.input} type="password" name="password" id="password" value={userInfo.password} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="phone">Phone Number</label>
                    <input style={styles.input} type="tel" name="phone" id="phone" value={userInfo.phone} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="address">Address</label>
                    <input style={styles.input} type="text" name="address" id="address" value={userInfo.address} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="location">Location</label>
                    <input style={styles.input} type="text" name="location" id="location" value={userInfo.location} onChange={handleChange} />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label} htmlFor="profileImage">Profile Image</label>
                    <input style={styles.input} type="file" name="profileImage" id="profileImage" onChange={(e) => setUserInfo({ ...userInfo, profileImage: e.target.files[0] })} />
                </div>
                <button style={styles.button} type="submit">Update Profile</button>
            </form>
            </div>

            <br/>    <br/>    <br/>
            <Footer></Footer>
        </div>
    );
}

export default NavigationBar;
