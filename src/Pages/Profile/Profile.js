import React, { useEffect, useState } from 'react';
import './Profile.css'
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';


const Profile = () => {
    const [profile , setProfile] = useState([])
    const {user} = useAuth()
    const {profileId} = useParams()
    useEffect(() => {
        fetch("https://blooming-thicket-66783.herokuapp.com/users")
          .then((res) => res.json())
          .then((data) => setProfile(data));
      }, []);
  return (
    <div>
      <div className='main-profile'>
        <div>
            <input type="img" /><br />
            <button className='profile-btn'>
                <span></span>
            </button>
            {/* <span><a href="#"></a></span> */}

            
        </div>
        <div>
            <h4>User Id:</h4>
            <h1>{user?._id}</h1>
            <h4>Full Name</h4>
            <h2>{user?.displayName}</h2>
            <h4>Email Address</h4>
            <h2>{user?.email}</h2>
            <h4>Phone</h4>
            <h2>68546546464</h2>            
        </div> 
        
      </div>
    </div>
  );
};

export default Profile;
