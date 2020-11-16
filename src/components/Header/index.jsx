import React from 'react';
import './style.scss';
import masiv from '../../assets/Images/Masiv.png';

const Header = () => {

  return (
    <div className='header'>
      <img src={masiv} alt='Masivian'/>
    </div>
  );
};

export default Header;