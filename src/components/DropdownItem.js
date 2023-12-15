import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DropdownItem.css';

const DropdownItem = ({ page }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (page === 'Recreation Resources') {
      navigate('/'); // Navigate to the homepage directly
    }
    else {
      const route = page.toLowerCase().replace(/\s/g, '-'); // Convert "Organized Sports" to "organized-sports"
      navigate(`/${route}`);
    }
  };

  return (
    <div className="dropdownItem" onClick={handleClick}>
      {page}
    </div>
  );
}

export default DropdownItem;


