import React, { useEffect } from 'react';  
import { Link, useNavigate } from 'react-router-dom';  
import './Achievements.css';  

const Achievements = () => {  
    const navigate = useNavigate();  

    useEffect(() => {  
        const link = document.createElement('link');  
        link.rel = 'stylesheet';  
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';  
        document.head.appendChild(link);  
    }, []);  

    const handleCardClick = (type) => {  
        navigate(`/details/${type}`);  
    };  

    const achievements = [  
        { 
            type: 'Symposium', 
            icon: 'fas fa-comments', 
            description: 'Uploaded details of participation in academic symposiums, including discussions and presentations.' 
        },
        { 
            type: 'Hackathon', 
            icon: 'fas fa-laptop-code', 
            description: 'Shared experiences and projects developed during hackathons, showcasing innovative solutions.' 
        },
        { 
            type: 'Paper Publication', 
            icon: 'fas fa-file-alt', 
            description: 'Provided information on published papers, including titles, journals, and publication dates.' 
        },
        { 
            type: 'Patent', 
            icon: 'fas fa-cogs', 
            description: 'Detailed patented inventions, including application numbers and brief descriptions of the technology.' 
        }
    ];  

    return (  
        <div>  
            <h2>Achievements</h2>  
            <div className="upload-button-container">
                <Link to="/upload">  
                    <button className="upload-button">Upload Achievement</button>  
                </Link>  
            </div>

            <div className="card-container">  
                {achievements.map(({ type, icon, description }) => (  
                    <div className="card" key={type} onClick={() => handleCardClick(type)}>  
                        <i className={icon} aria-hidden="true"></i>  
                        <h3>{type}</h3>  
                        <p className="card-description">{description}</p>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default Achievements;  
