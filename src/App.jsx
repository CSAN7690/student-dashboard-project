import React, { useState, useEffect } from "react";
import data from './data/data.json';
import Sidebar from "./components/Sidebar";
import StudentCard from "./components/StudentCard";
import './app.scss';

function App() {
  const [selectedCohort, setSelectedCohort] = useState('All Students');

  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const cohortSet = new Set(data.map(student => student.cohort));
    setCohorts(Array.from(cohortSet));
  }, []);

  const filteredStudents = selectedCohort === 'All Students'
    ? data
    : data.filter(student => student.cohort === selectedCohort);
  const handleSelectCohort = (cohort) => {
    setSelectedCohort(cohort);
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <Sidebar cohorts={cohorts} selectCohort={handleSelectCohort} />
      </div>
      <header className="main-header">
        <h1>Student Dashboard</h1>
      </header>
      <main className="main-content">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </main>
    </div>
  );
}

export default App;
