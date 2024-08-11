import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import LoginFooter from '../LoginFooter/LoginFooter';
import Navbar2 from '../Navbar2/Navbar2'
import './UserProfile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser } from '../../action/auth'


const UserProfile = () => {
  
    const navigate = useNavigate();
    const data = useSelector(state => state.auth.data)
    const dispatch = useDispatch();

    useEffect(()=>{
      console.log('Deleting data is the ',data)
      if(data?.success){
        alert('Successfully deleted account')
        localStorage.clear()
        navigate('/')
        window.location.reload();
      }
    },[data])
    // access the information in the user variable from the localstorage
    const user = JSON.parse(localStorage.getItem('Profile'));

// handle for logout from the account
    const handleLogout = () => {
      const confirmation = window.confirm('Do you want logout ')
      if(confirmation){
          localStorage.clear();
          alert('Successfully logout ')
          navigate('/');
          window.location.reload()
        }
      }

// handle for Permanently delete account from the database. 

const handleDelete = () => {
  const delete_confirm = window.confirm("Do you want pernently delete account")
  if(delete_confirm){
    if(user?._id){
      const userId = user?._id;
      dispatch(deleteUser(userId))
    }
    else{
      alert('You have no any account');
    }
  }
}

const handleHome = () => {
  navigate('/')
}


// access the data from the localstorage variable
  const currentProfile = {
    name: user?.username,
    email: user?.Email,
    dob :user?.dob,
    joined : user?.Date
  };




  return (
<>
{
  user?(
<div className="profile-main-container">
    <Navbar2/>
    <div className='profile-container '>
 
      <main className='main-content'>
        <section className='profile-section'>
          <div className='profile-header'>
            <div className='profile-avatar'>
              <div className='avatar'>
                {currentProfile?.name?.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className='profile-details '>
              <h1>{currentProfile?.name}</h1>
              <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joined).fromNow()}</p>
            </div>

              <div className='log-out-button' onClick={handleLogout}>
             Log Out
              </div>

          </div>
          <div className='profile-content'>
            
              <div>
                <h2 className='text-green-500'>Profile Bio</h2>
                <p><strong>Name:</strong> {currentProfile.name}</p>
                <p><strong>Email:</strong> {currentProfile.email}</p>
                <p><strong>DOB: </strong>{moment(currentProfile.dob).format('MMMM Do YYYY')}</p>
                <p><strong>Joined:</strong> {moment(currentProfile.joined).format('MMMM Do YYYY')}</p>
              </div>
          </div>
          <div className="delete-profile-btn">
            <button onClick={handleDelete}>Delete Account Permanently</button>
          </div>
        </section>
      </main>
    </div>
    <LoginFooter/>
    </div>
  ):
  (
    <div className="for-home-container flex justify-center items-center flex-column">
      <p>Path Not Found</p>
      <button className='bg-blue-600 pl-3 pr-3 pt-2 pb-2 text-white items-center'onClick={handleHome}>GO TO HOME</button>
    </div>
  )
}
</>
  );
};
export default UserProfile;