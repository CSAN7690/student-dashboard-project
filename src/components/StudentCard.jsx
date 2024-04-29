import React from 'react'
import './studentcard.scss'

function StudentCard({ student, onToggleData }) {

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <div className="student-card">
            <img src={student.profilePhoto} alt={`${student.name}'s profile`} />
            <h3>{student.name}</h3>
            <p>{student.email}</p>
            <p>Birthday: {formatDate(student.birthday)}</p>

            <button onClick={() => onToggleData(student.id)}>Show More...</button>
        </div>
    );
};

export default StudentCard