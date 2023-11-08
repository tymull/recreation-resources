import React, { useState, useRef, useEffect } from 'react';
import DropdownMenu from './DropdownMenu';
import { useNavigate } from 'react-router-dom'; // Use the useNavigate hook from react-router-dom
import './Tab.css';

const Tab = ({ title, isHome }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const tabRef = useRef(null);
  const navigate = useNavigate(); // Use the navigate function from the useNavigate hook

  const handleClickOutside = (event) => {
    if (tabRef.current && !tabRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleDropdown = () => {
    if (isHome) {
      navigate('/'); // Navigates directly to home with path '/'
    } else {
      setShowDropdown(!showDropdown);
    }
  };

  return (
    <div className="tab" ref={tabRef} onClick={toggleDropdown}>
      {title}
      {!isHome && showDropdown && <DropdownMenu category={title} />}
    </div>
  );
}

export default Tab;
