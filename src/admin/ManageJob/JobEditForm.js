import React, { useEffect, useState } from 'react'
import AdminLayout from '../../component/Admin-Layout/AdminLayout'
import "./JobForm.css";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { API_URL } from '../../utils/API_URL';
import { useNavigate, useParams } from 'react-router-dom';


export default function JobEditForm() {

    const [loading, setLoading] = useState(false); // State to manage loading status

    const [initialValues, setInitialValues] = useState({
        title: '',
        location: 'Lahore, Pakistan', // Default value
        description: '',
        responsibilities: '',
        requirements: '',
        experience: ''
    });
    const { slug } = useParams(); // Get the slug from the URL
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        title: Yup.string().required('Job title is required'),
        description: Yup.string().required('Job description is required'),
        responsibilities: Yup.string().required('Job responsibilities is required'),
        requirements: Yup.string().required('Job requirements is required'),
        experience: Yup.string().required('Experience is required'),
    });

    useEffect(() => {
        // Fetch the job data to populate the form
        const fetchJobData = async () => {
            try {
                const response = await axios.get(`${API_URL}/job/get/${slug}`);
                const { title, description, responsibilities, requirements, experience } = response.data;
                setInitialValues({
                    title,
                    description,
                    responsibilities: responsibilities.join(', '),
                    requirements: requirements.join(', '),
                    experience
                });
            } catch (error) {
                console.error('Failed to fetch job details', error);
            }
        };

        fetchJobData();

    }, [slug]);

    const handleSubmit = async (values) => {
        try {
            const updatedJob = {
                ...values,
                responsibilities: values.responsibilities.split(',').map(res => res.trim()),
                requirements: values.requirements.split(',').map(req => req.trim())
            };
            // await axios.put(`/api/jobs/${slug}`, updatedJob   );
            await axios.put( `${API_URL}/job/update/${slug}`, updatedJob );
            navigate(`/musttech-solution/admin-panel/job`); // Redirect to the jobs listing page after update
        } catch (error) {
            console.error('Failed to update job', error);
        }
    };


    return (
        <AdminLayout>

            <div className="job-form">
                <h3> Edit Job Form </h3>

                <Formik
                    enableReinitialize
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form className='job-form'>

                        <label className='label'>Title</label>
                        <Field type="text" id="title" name="title" />
                        <ErrorMessage name="title" component="div" className='job-error' />

                        <label className='label'>Description</label>
                        <Field as="textarea" type="text" id="description" name="description" />
                        <ErrorMessage name="description" component="div" className='job-error' />


                        <label className='label'>Responsibilities</label>
                        <Field as="textarea" type="text" id="responsibilities" name="responsibilities" />
                        <ErrorMessage name="responsibilities" component="div" className='job-error' />


                        <label className='label'>Requirements</label>
                        <Field as="textarea" type="text" id="requirements" name="requirements" />
                        <ErrorMessage name="requirements" component="div" className='job-error' />

                        <label className='label'>Experience</label>
                        <Field type="text" id="firstName" name="experience" />
                        <ErrorMessage name="experience" component="div" className='job-error' />

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Submiting...' : 'Update'}
                        </button>


                    </Form>

                </Formik>

            </div>


        </AdminLayout>

    )
}
