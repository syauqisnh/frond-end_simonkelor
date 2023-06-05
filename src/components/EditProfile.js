import React, { useState } from 'react';
import ProfilePicture from './ProfiePicture';
// import Sidebar from './Sidebar';
import { Row, Button } from 'react-bootstrap';

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
    {/* <Sidebar/> */}
    <div className='bg-edit-profile'>
    <div className="edit-profile" >
      <form onSubmit={handleSubmit}>
        <label>
          Name
        </label>
          <input
            className='input-profile'
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleChange}
          />
        <label>
          NIP
        </label>
          <input
            className='input-profile'
            type="text"
            name="nip"
            value={profileData.nips}
            onChange={handleChange}
          />
        <label>
          Institution/Unit
        </label>
          <input
            className='input-profile'
            type="text"
            name="institution"
            value={profileData.institution}
            onChange={handleChange}
          />
        <label>
          Phone
        </label>
          <input
            className='input-profile'
            type="tel"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        <label>
          Email
        </label>
          <input
            className='input-profile'
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
          />
        <label>
          Password
        </label>
          <input
            className='input-profile'
            type="password"
            name="password"
            value={profileData.password}
            onChange={handleChange}
          />
        <ProfilePicture
          profilePicture={profileData.profilePicture}
          setProfileData={setProfileData}
        />
        <Row>
          <Button className='button-1' type="submit" href="/" >Update</Button>
          <Button className='button-1' type="submit" href="/" >Back</Button>
        </Row>
      </form>
    </div>
    </div>
    </>
  );
}
  

export default EditProfile;
