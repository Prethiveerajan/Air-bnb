import React from 'react';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from '../ProfileMenu/BasicMenu';
import './style.css';

function ProfileContainer() {
  return (
    <div className='profile-container'>
      <div className='airbnb-your-home'>Airbnb your Home</div>
      <div className='airbnb-your-home'>
        <LanguageRoundedIcon sx={{ fontSize: "1.5rem" }} />
      </div>
      <div className='profile-div'></div>
      <BasicMenu />
    </div>
  );
}

export default ProfileContainer;
