import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate for navigation
import './AchievementForm.css'; // Ensure to import your CSS

const AchievementForm = () => {
    const [formData, setFormData] = useState({
        achievementType: '',
        serialNo: '',
        title: '',
        teamMembers: '',
        description: '',
        technologyUsed: '',
        conferenceDetails: '',
        startDate: '',
        endDate: '',
        outcomes: '',
        document: null,
    });
    const navigate = useNavigate(); // For navigating after form submission

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            document: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission logic here
        // Reset form after submission
        setFormData({
            achievementType: '',
            serialNo: '',
            title: '',
            teamMembers: '',
            description: '',
            technologyUsed: '',
            conferenceDetails: '',
            startDate: '',
            endDate: '',
            outcomes: '',
            document: null,
        });
        navigate('/'); // Navigate back after submission
    };

    const renderConditionalFields = () => {
        switch (formData.achievementType) {
            case 'Project':
                return (
                    <>
                        <label className="label">Project Title</label>
                        <input className="input" type="text" name="title" onChange={handleChange} required />

                        <label className="label">Project Team Members</label>
                        <input className="input" type="text" name="teamMembers" onChange={handleChange} required />

                        <label className="label">Technology Used</label>
                        <input className="input" type="text" name="technologyUsed" onChange={handleChange} required />

                        <label className="label">Conference/Publication Details</label>
                        <input className="input" type="text" name="conferenceDetails" onChange={handleChange} required />
                    </>
                );
            case 'Patent':
                return (
                    <>
                        <label className="label">Patent Number</label>
                        <input className="input" type="text" name="serialNo" onChange={handleChange} required />

                        <label className="label">Title of Invention</label>
                        <input className="input" type="text" name="title" onChange={handleChange} required />

                        <label className="label">Inventors' Names</label>
                        <input className="input" type="text" name="teamMembers" onChange={handleChange} required />

                        <label className="label">Patent Type</label>
                        <input className="input" type="text" name="technologyUsed" onChange={handleChange} required />
                    </>
                );
            case 'Paper Publication':
                return (
                    <>
                        <label className="label">S.No</label>
                        <input className="input" type="number" name="serialNo" onChange={handleChange} required />

                        <label className="label">Paper Title</label>
                        <input className="input" type="text" name="title" onChange={handleChange} required />

                        <label className="label">Authors Name</label>
                        <input className="input" type="text" name="teamMembers" onChange={handleChange} required />

                        <label className="label">Journal Name</label>
                        <input className="input" type="text" name="conferenceDetails" onChange={handleChange} required />
                    </>
                );
            case 'Hackathon':
                return (
                    <>
                        <label className="label">Project Title</label>
                        <input className="input" type="text" name="title" onChange={handleChange} required />

                        <label className="label">Project Team Members</label>
                        <input className="input" type="text" name="teamMembers" onChange={handleChange} required />

                        <label className="label">Technology Used</label>
                        <input className="input" type="text" name="technologyUsed" onChange={handleChange} required />
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="formContainer">
            <h2 className="formTitle">Achievement Form</h2>
            <form onSubmit={handleSubmit}>
                <label className="label">Select Achievement Type</label>
                <select className="input" name="achievementType" value={formData.achievementType} onChange={handleChange} required>
                    <option value="">Select...</option>
                    <option value="Project">Project</option>
                    <option value="Patent">Patent</option>
                    <option value="Paper Publication">Paper Publication</option>
                    <option value="Hackathon">Hackathon</option>
                </select>

                {renderConditionalFields()}

                <label className="label">Start Date</label>
                <input className="input" type="date" name="startDate" onChange={handleChange} required />

                <label className="label">End Date</label>
                <input className="input" type="date" name="endDate" onChange={handleChange} required />

                <label className="label">Outcomes</label>
                <input className="input" type="text" name="outcomes" onChange={handleChange} required />

                <label className="label">Upload Document</label>
                <input className="input" type="file" onChange={handleFileChange} required />

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AchievementForm;
