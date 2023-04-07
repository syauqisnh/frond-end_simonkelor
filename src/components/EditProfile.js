import React, { useState } from 'react';
import ProfilePicture from './ProfiePicture';
import Sidebar from './Sidebar';

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
    <>
    <Sidebar/>
    <div className='bg-edit-profile'>
    <div className="edit-profile" >
      <form onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>
        <label>
          Name:
        </label>
          <input
            className='input-text'
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        <label>
          Institution:
        </label>
          <input
           className='input-text'
            type="text"
            name="institution"
            value={profileData.institution}
            onChange={handleChange}
          />
        <label>
          Phone:
        </label>
          <input
           className='input-text'
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        <label>
          Email:
        </label>
          <input
           className='input-text'
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        <label>
          Password:
        </label>
          <input
            className='input-text'
            type="password"
            name="password"
            value={profileData.password}
            onChange={handleChange}
          />
        <ProfilePicture
          profilePicture={profileData.profilePicture}
          setProfileData={setProfileData}
        />
        <button type="submit" className='button-edit' >Update</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default EditProfile;
