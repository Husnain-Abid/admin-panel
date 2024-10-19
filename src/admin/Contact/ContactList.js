import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContactList.css";
import AdminLayout from "../../component/Admin-Layout/AdminLayout";
import { API_URL } from "../../utils/API_URL";
import { useNavigate } from "react-router-dom";

const ContactList = () => {
    const [orders, setOrders] = useState([
        {
            _id: "1",
            customerID: "C001",
            orderDate: "2024-10-10",
            shipDate: "2024-10-12",
            totalAmount: "$150.00",
            paymentStatus: "Paid",
            orderStatus: "Shipped",
            shippingAddress: "123 Main St, City, Country",
            billingAddress: "456 Billing St, City, Country",
            paymentMethod: "Credit Card",
            discountApplied: "$10.00",
            taxAmount: "$5.00",
            trackingNumber: "TRACK12345",
            notes: "Deliver before 5 PM"
        },
        {
            _id: "2",
            customerID: "C002",
            orderDate: "2024-10-11",
            shipDate: "2024-10-13",
            totalAmount: "$200.00",
            paymentStatus: "Pending",
            orderStatus: "Processing",
            shippingAddress: "789 Another St, City, Country",
            billingAddress: "123 Billing St, City, Country",
            paymentMethod: "PayPal",
            discountApplied: "$15.00",
            taxAmount: "$7.00",
            trackingNumber: "TRACK67890",
            notes: "Leave at the front door"
        },
        {
            _id: "3",
            customerID: "C003",
            orderDate: "2024-10-09",
            shipDate: "2024-10-11",
            totalAmount: "$120.00",
            paymentStatus: "Refunded",
            orderStatus: "Returned",
            shippingAddress: "321 Sample Rd, City, Country",
            billingAddress: "654 Billing Rd, City, Country",
            paymentMethod: "Bank Transfer",
            discountApplied: "$5.00",
            taxAmount: "$3.00",
            trackingNumber: "TRACK11223",
            notes: "Customer returned the product"
        }
    ]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleDelete = (id) => {
        try {
            setLoading(true);
            setOrders((prevOrders) => prevOrders.filter(order => order._id !== id));
        } catch (err) {
            setError("Failed to delete order");
        } finally {
            setLoading(false);
        }
    };

    const handleViewDetails = (id) => {
        navigate(`/admin-panel/order-view/${id}`)
    };



    return (

        <AdminLayout>
        {
            loading && "loading orders...."
        }

        <div className="order-list">
            <h2>Order List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer ID</th>
                        <th>Order Date</th>
                        <th>Ship Date</th>
                        <th>Total Amount</th>
                        <th>Payment Status</th>
                        <th>Order Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, i) => (
                        <tr key={order._id}>
                            <td>{i + 1}</td>
                            <td>{order.customerID}</td>
                            <td>{order.orderDate}</td>
                            <td>{order.shipDate}</td>
                            <td>{order.totalAmount}</td>
                            <td>{order.paymentStatus}</td>
                            <td>{order.orderStatus}</td>
                            <td>
                                <button onClick={() => handleViewDetails(order._id)} >View Details</button>
                                <button onClick={() => handleDelete(order._id)} className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </AdminLayout>


    );
};

export default ContactList;
