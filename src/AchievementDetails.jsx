import React from 'react';
import { useParams } from 'react-router-dom';
import './AchievementDetails.css';

const AchievementDetails = () => {
    const { type } = useParams();

    // Define headers and fields based on achievement type
    const tableConfig = {
        Symposium: [
            { header: "S.No", field: "id" },
            { header: "Project Title", field: "title" },
            { header: "Team Members", field: "teamMembers" },
            { header: "Technology Used", field: "technologyUsed" },
            { header: "Start Date", field: "startDate" },
            { header: "End Date", field: "endDate" },
            { header: "Outcomes", field: "outcomes" },
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
        Paper : [
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

    // Sample data for demonstration purposes
    const data = [
        {
            id: 1,
            serialNo: "12345",
            title: 'Advancements in Machine Learning Algorithms',
            teamMembers: 'Alice Johnson, Bob Smith, Charlie Brown, David Wilson, Eve Davis, Frank Miller',
            conferenceDetails: 'International Journal of Machine Learning',
            startDate: '2024-01-15',
            endDate: '2024-01-20',
            outcomes: 'Improved accuracy in predictions',
            technologyUsed: 'Machine Learning',
            documentLink: '/path/to/document'
        }
    ];

    const headers = tableConfig[type] || [];

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
                    {data.map((item, index) => (
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
