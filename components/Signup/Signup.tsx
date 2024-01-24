"use client"

import React, { useState, useEffect } from 'react';

const JobsComponent = () => {
  const [jobs, setJobs] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  const fetchJobs = async (url:any) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }

      const data = await response.json();
      setJobs(data.results || []);
      setNextPageUrl(data.next);
      setPrevPageUrl(data.previous);
    } catch (error:any) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    // Initial load
    fetchJobs("https://learnkoodsapi.onrender.com/jobs_api/");
  }, []);

  const handleNextPage = () => {
    if (nextPageUrl) {
      fetchJobs(nextPageUrl);
    }
  };

  const handlePrevPage = () => {
    if (prevPageUrl) {
      fetchJobs(prevPageUrl);
    }
  };

  return (
    <div>
      <h1>Jobs List</h1>
      {jobs.length > 0 ? (
        <ul>
          {jobs.map((job:any) => (
            <li key={job.job_id}>
              <strong>{job.job_title}</strong> - {job.company} - {job.location}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jobs found.</p>
      )}

      <div>
        <button onClick={handlePrevPage} disabled={!prevPageUrl}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!nextPageUrl}>
          Next
        </button>
      </div>
    </div>
  );
};

export default JobsComponent;
