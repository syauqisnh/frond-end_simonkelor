import React, { useState } from 'react';
import ProfilePicture from '../pages/ProfiePicture';

function EditProfile() {
  const [profileData, setProfileData] = useState({
    name: "",
    institution: "",
    phone: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevProfileData) => ({
      ...prevProfileData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(profileData);
  };

  return (
    <div className="edit-profile">
      <form onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Institution:
          <input
            type="text"
            name="institution"
            value={profileData.institution}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={profileData.password}
            onChange={handleChange}
          />
        </label>
        <ProfilePicture
          profilePicture={profileData.profilePicture}
          setProfileData={setProfileData}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default EditProfile;
