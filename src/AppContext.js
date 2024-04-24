import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [designs, setDesigns] = useState([]);
    const [currentDesign, setCurrentDesign] = useState(null);

    // Additional logic...

 
    const login = (userId) => {
        // Simulate user login
        setUser({ id: userId, name: "John Doe" });
    };

    const logout = () => {
        setUser(null);
        setCurrentDesign(null);
        setDesigns([]);
    };

    const addDesign = (design) => {
        design.id = new Date().getTime(); // Simple unique ID for demo
        setDesigns([...designs, design]);
        setCurrentDesign(design);
    };

    const selectDesign = (designId) => {
        const design = designs.find(d => d.id === designId);
        setCurrentDesign(design);
    };

    const saveDesign = (design) => {
        const updatedDesigns = designs.map(d => d.id === design.id ? design : d);
        setDesigns(updatedDesigns);
    };

    const deleteDesign = (designId) => {
        const updatedDesigns = designs.filter(d => d.id !== designId);
        setDesigns(updatedDesigns);
        if (currentDesign && currentDesign.id === designId) {
            setCurrentDesign(null);
        }
    };

    return (
        // return (
            <AppContext.Provider value={{ user, designs, currentDesign, setUser, setDesigns, setCurrentDesign }}>
                {children}
            </AppContext.Provider>
        );
        // <AppContext.Provider value={{ user, designs, currentDesign, login, logout, addDesign, selectDesign, saveDesign, deleteDesign }}>
        //     {children}
        // </AppContext.Provider>
    // );
};

export const useAppContext = () => useContext(AppContext);
