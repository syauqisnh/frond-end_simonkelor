import React from 'react';

function ProfilePicture({ profilePicture, setProfileData }) {
  const handleChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfileData((prevProfileData) => ({
        ...prevProfileData,
        profilePicture: reader.result,
      }));
    };
  };

  return (
    <div className="profile-picture">
      <label>
        Profile Picture:
        <input type="file" accept="image/*" onChange={handleChange} />
      </label>
      {profilePicture && (
        <img src={profilePicture} alt="Profile Picture" />
      )}
    </div>
  );
}

export default ProfilePicture;
