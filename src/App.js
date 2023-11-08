import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import './App.css';
import ContentPage from './components/ContentPage';  // ensure you import the ContentPage component

function App() {
  return (
    // <Router basename="/recreation-resources">
    <HashRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ContentPage page="Home" />} />
          <Route path="/campus-events" element={<ContentPage page="Campus Events" />} />
          <Route path="/community-events" element={<ContentPage page="Community Events" />} />
          <Route path="/campus-facilities" element={<ContentPage page="Campus Facilities" />} />
          <Route path="/community-facilities" element={<ContentPage page="Community Facilities" />} />
          <Route path="/activities" element={<ContentPage page="Activities" />} />
          <Route path="/food" element={<ContentPage page="Food" />} />
          <Route path="/clubs" element={<ContentPage page="Clubs" />} />
          <Route path="/organized-sports" element={<ContentPage page="Organized Sports" />} />
          <Route path="/equipment" element={<ContentPage page="Equipment" />} />
          <Route path="/parks" element={<ContentPage page="Parks" />} />
          
          {/* Add more routes for other dropdown items... */}
        </Routes>
      </div>
    </HashRouter>
    // </Router>
  );
}

export default App;
