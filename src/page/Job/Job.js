import React, { useEffect, useState } from 'react';
import Layout from '../../component/Layout/Layout';
import ASSET_PATHS from '../../constant';
import './Job.css';
import { useParams } from 'react-router-dom';
import ApplyFom from '../../component/subComponent/ApplyFom/ApplyFom';
import axios from 'axios'; // Import axios for API requests
import { API_URL } from '../../utils/API_URL'; // Assuming you have an API_URL set up for your backend

export default function Job() {
  const imgRoute = ASSET_PATHS.IMG_URL;
  const iconRoute = ASSET_PATHS.ICON_URL;
  const { slug } = useParams(); // Get the slug from URL parameters

  // State to store the job details
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job details based on slug when the component mounts
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/job/get/${slug}`); // Fetch job by slug from backend
        setJobDetails(response.data); // Store the job details in the state
        setLoading(false); // Disable loading state
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to fetch job details');
        setLoading(false); // Disable loading state in case of error
      }
    };

    fetchJobDetails(); // Call the function
  }, [slug]); // Re-run the effect if the slug changes

  // Show loading state
  if (loading) {
    return <p>Loading job details...</p>;
  }

  // Show error message if there's any error
  if (error) {
    return <p>{error}</p>;
  }

  // If no job details are found, return a not found message
  if (!jobDetails) {
    return <p>Job not found</p>;
  }

  return (
    <>
      <Layout>
        <div className='job'>
          <div className='job-title'>
            <h2>{jobDetails.title}</h2>
            <p><span>MustTech Solutions</span> is looking for an <span>{jobDetails.title}</span></p>
          </div>

          <div className='job-responsibilities'>
            <h2>Responsibilities</h2>
            <ul>
              {jobDetails.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='job-requirement'>
            <h2>Requirements:</h2>
            <ul>
              {jobDetails.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='job-experience'>
            <h2>Experience:</h2>
            <ul>
              <li>{jobDetails.experience}</li>
            </ul>
          </div>
        </div>

        <ApplyFom></ApplyFom>
      </Layout>
    </>
  );
}
