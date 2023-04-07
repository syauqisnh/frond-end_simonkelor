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
        <label className='label-editprof'>
          Name:
        </label>
          <input
            className='input-text'
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </label>
        <label className='label-editprof'>
=======
        <label>
>>>>>>> 9bc439351da318c8b3ec90c4163f05f8133ce2ef
          Institution:
        </label>
          <input
            type="text"
            name="institution"
            value={profileData.institution}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </label>
        <label className='label-editprof'>
=======
        <label>
>>>>>>> 9bc439351da318c8b3ec90c4163f05f8133ce2ef
          Phone:
        </label>
          <input
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </label>
        <label className='label-editprof'>
=======
        <label>
>>>>>>> 9bc439351da318c8b3ec90c4163f05f8133ce2ef
          Email:
        </label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
<<<<<<< HEAD
        </label>
        <label className='label-editprof'>
=======
        <label>
>>>>>>> 9bc439351da318c8b3ec90c4163f05f8133ce2ef
          Password:
        </label>
          <input
            type="password"
            name="password"
            value={profileData.password}
            onChange={handleChange}
          />
        <ProfilePicture
          profilePicture={profileData.profilePicture}
          setProfileData={setProfileData}
        />
        <button type="submit" >Update</button>
      </form>
    </div>
    </div>
    </>
  );
}

export default EditProfile;
