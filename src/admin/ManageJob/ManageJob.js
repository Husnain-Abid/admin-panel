import React, { useState } from "react";
import "./ManageJob.css";
import AdminLayout from "../../component/Admin-Layout/AdminLayout";
import { useNavigate } from "react-router-dom";

const ManageJob = () => {
    // Static products data
    const initialProducts = [
        { id: 1, title: "Product 1", description: "High-quality product made from premium materials.", slug: "product-1" },
        { id: 2, title: "Product 2", description: "Affordable and reliable for everyday use.", slug: "product-2" },
        { id: 3, title: "Product 3", description: "Innovative design with advanced features.", slug: "product-3" }
    ];

    const [products, setProducts] = useState(initialProducts);
    const navigate = useNavigate();

    // Delete job by slug
    const deleteJob = (slug) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.slug !== slug));
    };

    // Edit job by slug
    const editJob = (slug) => {
        navigate(`/admin-panel/products/edit/${slug}`);
    };

    return (
        <AdminLayout>
            <div className="job-management">
                <div className="heading">
                    <h2>Manage Products Applications</h2>
                    <div>
                        <button onClick={() => navigate(`/admin-panel/products/create`)}>Add Product</button>
                    </div>
                </div>

                <div className="job-list">
                    <h3>Products</h3>
                    {products.length === 0 ? (
                        <p>No Products available.</p>
                    ) : (
                        <ul>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <div>
                                        <strong>{product.title}</strong>
                                        <p>{product.description}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => editJob(product.slug)} className="edit">Edit</button>
                                        <button onClick={() => deleteJob(product.slug)} className="delete">Delete</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
};

export default ManageJob;
