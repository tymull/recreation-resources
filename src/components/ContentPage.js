import React from 'react';
import Card from './Card';
import SportsAndOutdoors from './Pages/SportsAndOutdoors';
import Leisure from './Pages/Leisure';
import Events from './Pages/Events';
import Facilities from './Pages/Facilities';
import HomeContent from './Pages/HomeContent';

// const contentSections = {
//   "Home": ["Homepage"],
//   "Exercise": [
//     "Why did the scarecrow win an award? Because he was outstanding in his field!",
//     "Why don't skeletons fight each other? They don't have the guts.",
//     "What lights up a soccer stadium? A soccer match!"
//   ],
//   "Nature Walks": [
//     "Why did the golfer bring two pairs of pants? In case he got a hole in one.",
//     "I told my wife she was drawing her eyebrows too high. She looked surprised.",
//     "I'd tell a chemistry joke but I know I wouldn't get a reaction."
//   ],
//   "Meditation": [
//     "What do you call a fake noodle? An impasta.",
//     "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
//     "How many apples grow on a tree? All of them."
//   ],
//   "Reading": [
//     "What do you call a fish with no eyes? A fsh.",
//     "What do you call a deer with no eyes? No idea.",
//     "What do you call a deer with no eyes and no legs? Still no idea."
//   ],
//   "Social Gatherings": [
//     "1. Eat at a Hole-in-the-Wall Restaurant",

//     "2. Check out The Social in underground Provo",

//     "3. Grab waffles at Waffle Love"
//   ]
//   // ... Add more contentSections for other activities
// };

// const ContentPage = ({ page }) => {
//   return (
//     <div className="content-page">
//       {contentSections[page].map((contentSection, index) => (
//         <Card key={index} contentSection={contentSection} />
//       ))}
//     </div>
//   );
// }

const contentMappings = {
  "Home": HomeContent,
  "Campus Events": Events,
  "Community Events": Events,
  "Campus Facilities": Facilities,
  "Community Facilities": Facilities,
  "Activities": Leisure,
  "Food": Leisure,
  "Clubs": Leisure,
  "Organized Sports": SportsAndOutdoors,
  "Equipment": SportsAndOutdoors,
  "Parks": SportsAndOutdoors
  // Add other mappings as necessary
};

const ContentPage = ({ page }) => {
  // Find the content based on the page prop
  const content = contentMappings[page]?.find(p => p.page === page)?.contentSections || [];
  
  return (
    <div className="content-page">
      {content.map((contentSection, index) => (
        // Ensure the Card component receives the correct props
        <Card key={index} contentSection={contentSection} />
      ))}
    </div>
  );
};

export default ContentPage;
