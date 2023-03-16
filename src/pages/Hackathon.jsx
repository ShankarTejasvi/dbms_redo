
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';


import "./Hackathon.css"
import React, { useState } from 'react';

const HackathonForm = () => {
  const [teamName, setTeamName] = useState('');
  const [maxTeamSize, setMaxTeamSize] = useState('');
  const [currentTeamSize, setCurrentTeamSize] = useState('');
  const [registrationLink, setRegistrationLink] = useState('');
  const [venue, setVenue] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [hackathonDate, setHackathonDate] = useState('');
  const [skillsRequired, setSkillsRequired] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with the form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="teamName">Team Name:</label>
      <input type="text" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} required />

      <label htmlFor="maxTeamSize">Maximum Team Size:</label>
      <input type="number" id="maxTeamSize" value={maxTeamSize} onChange={(e) => setMaxTeamSize(e.target.value)} required />

      <label htmlFor="currentTeamSize">Current Team Size:</label>
      <input type="number" id="currentTeamSize" value={currentTeamSize} onChange={(e) => setCurrentTeamSize(e.target.value)} required />

      <label htmlFor="registrationLink">Registration Link:</label>
      <input type="url" id="registrationLink" value={registrationLink} onChange={(e) => setRegistrationLink(e.target.value)} required />

      <label htmlFor="venue">Venue:</label>
      <input type="text" id="venue" value={venue} onChange={(e) => setVenue(e.target.value)} required />

      <label htmlFor="problemStatement">Problem Statement Description:</label>
      <textarea id="problemStatement" value={problemStatement} onChange={(e) => setProblemStatement(e.target.value)} required></textarea>

      <label htmlFor="hackathonDate">Hackathon Date:</label>
      <input type="date" id="hackathonDate" value={hackathonDate} onChange={(e) => setHackathonDate(e.target.value)} required />

      <label htmlFor="skillsRequired">Skills Required:</label>
      <select multiple id="skillsRequired" value={skillsRequired} onChange={(e) => setSkillsRequired(Array.from(e.target.selectedOptions, option => option.value))}>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
        <option value="NodeJS">NodeJS</option>
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Django">Django</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
};

export default HackathonForm;
