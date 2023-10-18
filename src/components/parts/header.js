// Header.js
import React,{useEffect, useState} from 'react';
import { BsBellFill } from 'react-icons/bs';
import { BsChevronCompactDown } from 'react-icons/bs';
import { HiOutlineChevronDown } from 'react-icons/hi';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
    return (
        <h3>
          {formattedHours}:{minutes.toString().padStart(2, '0')}
          <sup>{ampm}</sup>
        </h3>
    );
  };
  return (
    <header>
      <div className="header_wrapper">
        <div className='header_logo'>
          <img src="./img/login/logo.png"/>
          <h2>J. Mehta & Co.</h2>
        </div>
        <div className='header_title_area'>
          <h4>Human Resource Management System</h4>
        </div>
        <div className="header_date">
          {/* <h3>12:45<sup>PM</sup></h3> */}
          {/* {formattedHours}:{minutes.toString().padStart(2, '0')}
          <sup>{ampm}</sup> */}
          {formatTime(currentTime)}
        </div>      
        <div className='header_profile_acc'>
          <img src="./img/user.svg"/>
          <h5>J Mehta</h5>
        </div>
        <div className='header_down_menu'>
          <HiOutlineChevronDown/>
        </div>
        <div className='header_notification'>
          <BsBellFill/>
        </div>
      </div>
    </header>
  );
};

export default Header;
