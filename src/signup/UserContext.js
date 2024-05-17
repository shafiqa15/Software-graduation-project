// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [userData, setUserData] = useState(null);
//     const [userId, setuserId] = useState(null);

//     // Mock function to set user data (replace with actual login/signup logic)
//     const loginUser = (data) => {
//         setUserData(data);
//     };

//     return (
//         <UserContext.Provider value={{ userData, setUserData,userId,setuserId }}>
//             {children}
//         </UserContext.Provider>
//     );
// };

// export const useUser = () => useContext(UserContext);
// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [userData, setUserData] = useState({});
    // const loginUser = (data) => {
    //     setUserData(data);
    // };

    return (
        <UserContext.Provider value={{ userId, setUserId, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
