const ProfileModal = ({ profile, onClose }) => {
    return (
        <div className="profile-modal">
            <h2>User Profile</h2>
            <p>Name: {profile.name}</p>
            <p>Email: {profile.email}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ProfileModal;
