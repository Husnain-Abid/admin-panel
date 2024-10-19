import React, { useState } from 'react'
import Layout from '../../component/Layout/Layout'
import ASSET_PATHS from '../../constant'
import './Contact.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API_URL } from '../../utils/API_URL';

export default function Contact() {
  const imgRoute = ASSET_PATHS.IMG_URL
  const iconRoute = ASSET_PATHS.ICON_URL

  const [loading, setLoading] = useState(false); // State to manage loading status


  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    subject: '', // Add this line
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    subject: Yup.string().required('Please select a subject'),
    message: Yup.string().required('Message is required'),
  });



  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true); // Set loading to true when the request starts

      const response = await axios.post(`${API_URL}/contact/post`, values);
      setLoading(false); // Set loading to true when the request starts

      // Show a success toast notification
      toast.success(response.data.message);

      // Clear form fields
      resetForm();
    } catch (error) {
      toast.error('There was an error submitting your form.');
    }
  };



  return (
    <>
      <Layout>

        <div className="contact-container">

          <div className="contact-info">

            <div className='part-1'>
              <h2>Contact Information</h2>
              <p>Say something to start a live chat!</p>
            </div>

            <div className='part-2'>
              <ul>
                <li><span><img src={`${iconRoute}/phone2.svg`} alt="phone" /></span> +92 302-6666400</li>
                <li><span><img src={`${iconRoute}/email.svg`} alt="email" /></span> info@musttechsolutions.com</li>
                <li><span><img src={`${iconRoute}/location2.svg`} alt="location" /></span> Model Town, C-Block <br /> Lahore, Pakistan</li>
              </ul>
            </div>
            <div className='part-3'>
              <div className="social-icons">
                <a href="#"><span><img src={`${iconRoute}/twitter.svg`} alt="Twitter" /> </span> </a>
                <a href="https://www.instagram.com/musttech_01/?igsh=MzcwYnQxeXBja3Zi" target='_blank'><span><img src={`${iconRoute}/insta.svg`} alt="Instagram" /></span></a>
                <a href="#"><span><img src={`${iconRoute}/discord.svg`} alt="LinkedIn" /></span></a>
              </div>
            </div>

            <div className='contact-image'>
              <img src={`${iconRoute}/c-img1.svg`} />
            </div>
            <div className='contact-image-1'>
              <img src={`${iconRoute}/c-img2.svg`} />
            </div>

          </div>

          <div className="contact-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <Field type="text" id="firstName" name="firstName" />
                    <ErrorMessage name="firstName" component="div" className='contact-error' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <Field type="text" id="lastName" name="lastName" />
                    <ErrorMessage name="lastName" component="div" className='contact-error' />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component="div" className='contact-error' />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field type="tel" id="phoneNumber" name="phoneNumber" />
                    <ErrorMessage name="phoneNumber" component="div" className='contact-error' />
                  </div>
                </div>


                <div className="form-radio-row">
                  <label>Select Subject?</label>
                  <div className="radio-group">
                    <label>
                      <Field type="radio" name="subject" value="Web-Development" />
                      Web Development
                    </label>
                    <label>
                      <Field type="radio" name="subject" value="Web-Design" />
                      Web Design
                    </label>
                    <label>
                      <Field type="radio" name="subject" value="App-Development" />
                      App Development
                    </label>
                    <label>
                      <Field type="radio" name="subject" value="Digital-Marketing" />
                      Digital Marketing
                    </label>
                  </div>
                  <ErrorMessage name="subject" component="div" className='contact-error' />
                </div>

                <div className="form-message-row">
                  <label htmlFor="message">Message</label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Write your message.."
                  />
                  <ErrorMessage name="message" component="div" className='contact-error' />
                </div>

                <div className="form-btn-row">
                  <button
                    type="submit"
                    className="submit-button"
                    disabled={loading} // Disable button while loading
                  >
                    {loading ? 'Submiting...' : 'Submit'}
                  </button>
                </div>



              </Form>

            </Formik>



            {/* 
            <div className='areoplan'>

              <img src={`${iconRoute}/areoplan.svg`} />

            </div> */}

          </div>

        </div>



      </Layout >
    </>
  )
}
