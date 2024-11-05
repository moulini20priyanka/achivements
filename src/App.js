import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Achievements from './Achievements';
import AchievementForm from './AchievementForm';
import AchievementDetails from './AchievementDetails'; // Import the details component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Achievements />} />
                <Route path="/upload" element={<AchievementForm />} />
                <Route path="/details/:type" element={<AchievementDetails />} /> {/* New route for details page */}
            </Routes>
        </Router>
    );
};

export default App;
