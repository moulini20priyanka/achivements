import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Achievements.css';

const Achievements = () => {
    const navigate = useNavigate();

    const handleCardClick = (type) => {
        navigate(`/details/${type}`);
    };

    return (
        <div>
            <h2>Achievements</h2>
            
            <div className="card-container">
                {['Symposium', 'Hackathon', 'Paper', 'Patent'].map((type) => (
                    <div className="card" key={type} onClick={() => handleCardClick(type)}>
                        <h3>{type}</h3>
                    </div>
                ))}
            </div>
            <Link to="/upload">
                <button className="upload-button">Upload Achievement</button>
            </Link>

        </div>

        
    );
};

export default Achievements;
