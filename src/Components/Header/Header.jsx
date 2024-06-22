import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ProfileContainer from './ProfileContainer';
import './style.css';
import SimpleBottomNavigation from './BottomNav';
import SearchBox from '../MobileSearchBar/Search';

function Head() {
  return (
    <>
      <div className='navbar'>
        <Logo />
        <div className='navbar-items'>
          <SearchBar />
          <ProfileContainer />
          <SearchBox />
          <SimpleBottomNavigation />
        </div>
      </div>
    </>
  );
}

export default Head;
