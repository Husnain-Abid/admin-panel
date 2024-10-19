import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Career.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../utils/API_URL';

export default function Career() {

  const iconRoute = ASSET_PATHS.ICON_URL

  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);

  // Fetch jobs when the component mounts
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${API_URL}/job/get`); // Assuming /jobs is your endpoint
        setJobs(response.data); // Set the job data from the API
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };

    fetchJobs(); // Call the function when the component mounts
  }, []);

  const handleNav = (slug) => {
    navigate(`/job/${slug}`);
  }



  return (
    <>
      <Layout>
        <div className='career'>
          <div className='career-hero'>
            <div className='content'>
              <h2>
                Whatever you
                decide to do,
                make sure it
                makes you happy.
              </h2>
            </div>
            <div className='career_img'>
              <img src={`${iconRoute}/career_img.svg`} alt='career_img' />
            </div>

          </div>

          <div className='career-job'>

            <h3>job opportunities </h3>

            {/* {Jobs.map((e) => {

              return (
                <>
                  <div className='job' key={e.id}>

                    <div className='title'>
                      <h4>{e.title}</h4>
                      <span>{e.location}</span>
                    </div>

                    <div className='view-detail'>
                      <button onClick={() => handleNav(e.slug)}>View Details</button>
                    </div>

                  </div>
                </>

              )

            })} */}


            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div className='job' key={job._id}>
                  <div className='title'>
                    <h4>{job.title}</h4>
                    <span>{job.location}</span>
                  </div>
                  <div className='view-detail'>
                    <button onClick={() => handleNav(job.slug)}>View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No jobs available at the moment.</p>
            )}



          </div>


        </div>
      </Layout>
    </>
  )
}
