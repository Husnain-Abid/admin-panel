// src/CareerPage.js
import React, { useState } from 'react';
import './ApplyFom.css'; // Import the CSS file
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../../utils/API_URL';

const ApplyFom = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [loading, setLoading] = useState(false); // State to manage loading status


    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const initialValues = {
        name: "",
        city: "",
        email: "",
        cv: null
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        city: Yup.string().required('City is required'),
        cv: Yup.mixed().required('Please select a Resume file')
            .test('fileSize', 'File size is too large', value => value && value.size <= 2 * 1024 * 1024)
            .test('fileType', 'Unsupported File Format', value => value && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type))
    });



    const onSubmit = async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('city', values.city);
        formData.append('cv', values.cv);
        setLoading(true); // Set loading to true when the request starts

        try {
            // Replace with your API endpoint
            const response = await axios.post(`${API_URL}/apply-job`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false); // Set loading to false when the request is completed

            toast.success(response.data);

            // Clear form fields
            resetForm();
        } catch (error) {
            setLoading(false); // Set loading to false when the request is completed
            toast.error('There was an error submitting your form.');
        }
    };



    return (
        <div className="apply-form">
            <button className="apply-button" onClick={toggleForm}>
                {formVisible ? 'Close Application Form' : 'Apply for a Job'}
            </button>
            {formVisible && (

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >

                    {({ setFieldValue }) => (
                        <Form className="application-form">
                            <div className="form-group">
                                <label>Name:</label>
                                <div>
                                    <Field type="text" name="name" />
                                    <ErrorMessage name="name" component="div" className='form-error' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <div>
                                    <Field type="email" name="email" />
                                    <ErrorMessage name="email" component="div" className='form-error' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>City:</label>
                                <div>
                                    <Field type="text" name="city" />
                                    <ErrorMessage name="city" component="div" className='form-error' />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Upload CV:</label>
                                <div>
                                    <input
                                        type="file"
                                        name="cv"
                                        onChange={(event) => {
                                            setFieldValue("cv", event.currentTarget.files[0]);
                                        }}
                                    />
                                    <ErrorMessage name="cv" component="div" className='form-error' />
                                </div>
                            </div>



                            <div className='form-btn'>
                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={loading} // Disable button while loading
                                >
                                    {loading ? 'Submitting...' : 'Submit Application'}
                                </button>
                            </div>


                        </Form>
                    )}

                </Formik>

            )}
        </div>
    );
};

export default ApplyFom;
