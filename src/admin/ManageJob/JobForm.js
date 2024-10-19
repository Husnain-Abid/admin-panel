import React, { useState } from 'react';
import AdminLayout from '../../component/Admin-Layout/AdminLayout';
import "./JobForm.css"; // Optionally rename this to ProductForm.css
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { API_URL } from '../../utils/API_URL';
import { useNavigate } from 'react-router-dom';

export default function ProductEditForm() {

    const [loading, setLoading] = useState(false); // State to manage loading status

const navigate = useNavigate();

    // Initial values for the product form
    const initialValues = {
        name: '',
        description: '',
        price: '',
        oldPrice: '',
        stock: '',
        category: '',
        image: null, // For file upload
    };

    // Validation schema for the product form
    const validationSchema = Yup.object({
        name: Yup.string().required('Product name is required'),
        description: Yup.string().required('Product description is required'),
        price: Yup.number().required('Product price is required').positive('Price must be positive'),
        oldPrice: Yup.number().nullable().positive('Old Price must be positive'), // Optional field
        stock: Yup.number().required('Stock quantity is required').min(0, 'Stock cannot be negative'),
        category: Yup.string().required('Product category is required'),
        image: Yup.string().required('Product image is required')
    });

    // Form submission handler
    const onSubmit = async (values, { resetForm }) => {
        try {
            // Store form data in localStorage
            localStorage.setItem('productData', JSON.stringify(values));

            // Simulate API call (you can uncomment this part when your API is ready)
            // const formData = new FormData();
            // Object.keys(values).forEach((key) => {
            //     if (key === "image" && values[key]) {
            //         formData.append(key, values[key]);
            //     } else {
            //         formData.append(key, values[key]);
            //     }
            // });

            // Simulate an API call delay
            // const response = await axios.post(`${API_URL}/product/post`, formData, {
            //     headers: {
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });

            // Show a success toast notification
            toast.success("Product added successfully and saved in local storage!");

            navigate(`/admin-panel/products`);

            // Clear form fields
            resetForm();
        } catch (error) {
            toast.error('There was an error submitting your form.');
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="job-form">
                <h3> Add Product Data </h3>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form className='job-form'>

                        <label className='label'>Product Name</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" className='job-error' />

                        <label className='label'>Description</label>
                        <Field as="textarea" type="text" id="description" name="description" />
                        <ErrorMessage name="description" component="div" className='job-error' />

                        <label className='label'>Price</label>
                        <Field type="text" id="price" name="price" />
                        <ErrorMessage name="price" component="div" className='job-error' />

                        <label className='label'>Old Price (Optional)</label>
                        <Field type="text" id="oldPrice" name="oldPrice" />
                        <ErrorMessage name="oldPrice" component="div" className='job-error' />

                        <label className='label'>Stock</label>
                        <Field type="text" id="stock" name="stock" />
                        <ErrorMessage name="stock" component="div" className='job-error' />

                        <label className='label'>Category</label>
                        <Field type="text" id="category" name="category" />
                        <ErrorMessage name="category" component="div" className='job-error' />

                        <label className='label'>Product Image</label>
                        <Field type="file" id="image" name="image" />
                        <ErrorMessage name="image" component="div" className='job-error' />

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>

                    </Form>
                </Formik>
            </div>
        </AdminLayout>
    );
}
