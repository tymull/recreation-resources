import React from 'react';
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Banner from './components/Banner';
import NavigationBar from './components/NavigationBar';
import './App.css';
import ContentPage from './components/ContentPage';  // ensure you import the ContentPage component

function App() {
  return (
    // for some reason HashRouter works better than Router for hosting on github pages
    <HashRouter>
      <div className="App">
        <Banner/>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<ContentPage page="Recreation Resources" />} />
          <Route path="/campus-events" element={<ContentPage page="Campus Events" />} />
          <Route path="/community-events" element={<ContentPage page="Community Events" />} />
          <Route path="/nearby" element={<ContentPage page="Nearby" />} />
          <Route path="/far-away" element={<ContentPage page="Far Away" />} />
          <Route path="/campus-activities" element={<ContentPage page="Campus Activities" />} />
          <Route path="/community-activities" element={<ContentPage page="Community Activities" />} />
          <Route path="/campus-sports" element={<ContentPage page="Campus Sports" />} />
          <Route path="/community-sports" element={<ContentPage page="Community Sports" />} />
          
          {/* Add more routes for other dropdown items... */}
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
