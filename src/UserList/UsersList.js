import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://192.168.88.8:9000/users'); // Adjusted URL
                setUsers(response.data);
                setIsLoading(false);
            } catch (error) {
                setError(`Failed to fetch users: ${error.response ? error.response.data.message : error.message}`);
                setIsLoading(false);
            }
            
        };

        fetchUsers();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Registered Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        {/* Add more columns as necessary */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            {/* Display more user details as necessary */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
