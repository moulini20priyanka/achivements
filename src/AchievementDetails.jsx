import React from 'react';
import { useParams } from 'react-router-dom';
import './AchievementDetails.css';

const AchievementDetails = () => {
    const { type } = useParams();

    const tableConfig = {
        Symposium: [
            { header: "S.No", field: "id" },
            { header: "Event Name", field: "title" },
            { header: "Event Date", field: "eventDate" },
            { header: "Team Members", field: "teamMembers" },
            { header: "Location", field: "location" },
            { header: "Organizer(s)", field: "organizer" },
            { header: "Event Type", field: "eventType" },
            { header: "Achievement", field: "achievement" },
            { header: "Document", field: "documentLink" },
        ],
        Patent: [
            { header: "S.No", field: "id" },
            { header: "Patent Number", field: "serialNo" },
            { header: "Title of Invention", field: "title" },
            { header: "Inventors' Names", field: "teamMembers" },
            { header: "Patent Type", field: "technologyUsed" },
            { header: "Start Date", field: "startDate" },
            { header: "Document", field: "documentLink" },
        ],
        "Paper Publication": [
            { header: "S.No", field: "id" },
            { header: "Paper Title", field: "title" },
            { header: "Authors Name", field: "teamMembers" },
            { header: "Journal Name", field: "conferenceDetails" },
            { header: "Publication Date", field: "startDate" },
            { header: "Research Area", field: "technologyUsed" },
            { header: "Outcomes", field: "outcomes" },
            { header: "Document", field: "documentLink" },
        ],
        Hackathon: [
            { header: "S.No", field: "id" },
            { header: "Project Title", field: "title" },
            { header: "Team Members", field: "teamMembers" },
            { header: "Technology Used", field: "technologyUsed" },
            { header: "Start Date", field: "startDate" },
            { header: "End Date", field: "endDate" },
            { header: "Outcomes", field: "outcomes" },
            { header: "Document", field: "documentLink" },
        ],
    };

    const data = {
        Symposium: [
            {
                id: 1,
                title: 'Innovative Tech Summit',
                eventDate: '2024-03-12',
                teamMembers: 'John Doe, Jane Smith, Emily Davis',
                location: 'San Francisco, CA',
                organizer: 'Tech Innovations Group',
                eventType: 'Conference',
                achievement: 'Best Tech Innovation',
                documentLink: '/path/to/document'
            }
        ],
        Patent: [
            {
                id: 2,
                serialNo: "12345",
                title: 'Next Gen AI Technology',
                teamMembers: 'Alice Johnson, Bob Smith',
                technologyUsed: 'Artificial Intelligence',
                startDate: '2023-01-10',
                documentLink: '/path/to/document'
            }
        ],
        "Paper Publication": [
            {
                id: 3,
                title: 'Advancements in Machine Learning Algorithms',
                teamMembers: 'Charlie Brown, Eve Davis',
                conferenceDetails: 'International Journal of Machine Learning',
                startDate: '2024-01-15',
                technologyUsed: 'Machine Learning',
                outcomes: 'Improved accuracy in predictions',
                documentLink: '/path/to/document'
            }
        ],
        Hackathon: [
            {
                id: 4,
                title: 'Smart City Solutions',
                teamMembers: 'David Wilson, Frank Miller',
                technologyUsed: 'IoT',
                startDate: '2024-02-20',
                endDate: '2024-02-21',
                outcomes: 'Awarded Best Innovation',
                documentLink: '/path/to/document'
            }
        ]
    };

    const headers = tableConfig[type] || [];
    const achievementData = data[type] || [];

    return (
        <div>
            <h2>{type} Details</h2>
            <table className="achievement-table">
                <thead>
                    <tr>
                        {headers.map((col) => (
                            <th key={col.field}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {achievementData.map((item) => (
                        <tr key={item.id}>
                            {headers.map((col) => (
                                <td key={col.field}>
                                    {col.field === "documentLink" ? (
                                        <a href={item[col.field]} target="_blank" rel="noopener noreferrer">
                                            View Document
                                        </a>
                                    ) : (
                                        item[col.field]
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AchievementDetails;
