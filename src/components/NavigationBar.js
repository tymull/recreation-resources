import React, { useState } from 'react';
import Tab from './Tab';
import './NavigationBar.css';

const NavigationBar = () => {
  // const [activeTab, setActiveTab] = useState(null);

  // const handleHomeClick = () => {
  //   setActiveTab('Home');
  // }
  const categories = ['Sports and Exercise', 'Social Activities', 'Outdoors', 'Events'];
  return (
    <div className="navbar">
      <Tab title="Recreation Resources" isHome={true} />
      {categories.map((category, index) => (
        <Tab key={index} title={category} isHome={false} />
      ))}
    </div>
  );
}

export default NavigationBar;
