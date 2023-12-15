import React, { useState, useRef, useEffect } from 'react';
import './Card.css';

const Card = ({ contentSection }) => {
  // const [isOverflowing, setIsOverflowing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);

  // useEffect(() => {
  //   // Function to check for overflow
  //   const checkForOverflow = () => {
  //     const contentElement = contentRef.current;
  //     console.log(isOverflowing + " before");
  //     setIsOverflowing(contentElement.scrollHeight > contentElement.offsetHeight);
  //     console.log(isOverflowing + " after");
  //   };
  //   // Call the function after a short delay to ensure content is rendered
  //   const timeoutId = setTimeout(checkForOverflow, 5000);

  //   checkForOverflow();
  //   // Set up a resize event listener to check for overflow when window size changes
  //   window.addEventListener('resize', checkForOverflow);
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     clearTimeout(timeoutId);
  //     window.removeEventListener('resize', checkForOverflow);
  //   };
  // }, []); // The dependency array is left empty so it only runs on mount

  // useEffect(() => {
  //   const contentElement = contentRef.current;
  //   if (contentElement.scrollHeight > contentElement.clientHeight) {
  //     setIsOverflowing(true);
  //   }
  // }, []);

  // useEffect(() => {
  //   console.log(isOverflowing); // This will log the updated state after it changes
  // }, [isOverflowing]); // Dependency array tells React to re-run this effect when isOverflowing changes

  // // This function only toggles the expansion, not the overflow state
  // const toggleExpand = (e) => {
  //   //e.stopPropagation(); // Prevent event bubbling to the card's onClick
  //   setIsExpanded(!isExpanded);
  // };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  
  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <div className="card-content" ref={contentRef}>
        {contentSection}
      </div>
      {/* sets image for expanding and collapsing */}
      {/* {isOverflowing && !isExpanded &&  */}
      {!isExpanded && 
        <div className="expand-container">
          <img src={`${process.env.PUBLIC_URL}/overflow-icon.svg`} alt="Expand" className="expand-icon" />
        </div>
      }
      {/* {isOverflowing && isExpanded &&  */}
      {isExpanded && 
        <div className="collapse-container">
          <img src={`${process.env.PUBLIC_URL}/up-chevron.svg`} alt="Collapse" className="collapse-icon" />
        </div>
      }
    </div>
  );
}

export default Card;
