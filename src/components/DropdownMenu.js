import React from 'react';
import DropdownItem from './DropdownItem';
import './DropdownMenu.css';

const DropdownMenu = ({ category }) => {
  // For simplicity, let's assume there are three activities per category.
  // You can expand this using the provided resources.
  // For card sorting take things at the leaves and put those in index card.
  const pages = {
    'Sports & Outdoors': ['Organized Sports', 'Equipment', 'Parks'],
    'Leisure': ['Activities', 'Food', 'Clubs'],
    'Events': ['Campus Events', 'Community Events'],
    'Facilities': ['Campus Facilities', 'Community Facilities']
  };

  return (
    <div className="dropdownMenu">
      {pages[category].map((page, index) => (
        <DropdownItem key={index} page={page} />
      ))}
    </div>
  );
}

export default DropdownMenu;
