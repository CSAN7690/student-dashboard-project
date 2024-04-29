import React from 'react'
import './sidebar.scss';

function Sidebar({ cohorts, selectCohort }) {
    return (
        <div className='sidebar'>
            <h2>Choose a Class by Start Date</h2>
            <ul>
                <li onClick={() => selectCohort('All Students')}>All Students</li>
                {cohorts.map(cohort => (
                    <li key={cohort} onClick={() => selectCohort(cohort)}>
                        {cohort.replace(/_/g, ' ').replace(/(\d+)/, ' $1')}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar