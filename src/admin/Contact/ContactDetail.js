import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ContactDetail.css";
import AdminLayout from "../../component/Admin-Layout/AdminLayout";

const OrderDetail = () => {
    const { id } = useParams(); // Get the order ID from the URL
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Static order data
    const orders = [
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
    ];

    // Simulate fetching the specific order by ID
    useEffect(() => {
        const fetchOrderById = () => {
            const orderDetail = orders.find((order) => order._id === id);
            if (orderDetail) {
                setOrder(orderDetail);
            } else {
                setError("Order not found");
            }
            setLoading(false);
        };

        fetchOrderById();
    }, [id, orders]);

    return (
        <AdminLayout>
            <div className="order-detail">
                <h2>Order Details</h2>
                {loading ? (
                    <p>Loading order details...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <div>
                        <p><strong>Order ID:</strong> {order._id}</p>
                        <p><strong>Customer ID:</strong> {order.customerID}</p>
                        <p><strong>Order Date:</strong> {order.orderDate}</p>
                        <p><strong>Ship Date:</strong> {order.shipDate}</p>
                        <p><strong>Total Amount:</strong> {order.totalAmount}</p>
                        <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
                        <p><strong>Order Status:</strong> {order.orderStatus}</p>
                        <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                        <p><strong>Billing Address:</strong> {order.billingAddress}</p>
                        <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
                        <p><strong>Discount Applied:</strong> {order.discountApplied}</p>
                        <p><strong>Tax Amount:</strong> {order.taxAmount}</p>
                        <p><strong>Tracking Number:</strong> {order.trackingNumber}</p>
                        <p><strong>Notes:</strong> {order.notes}</p>

                        {/* You can add more fields if necessary */}
                    </div>
                )}

                <Link to="/admin-panel/orders" className="back-link">Back to Order List</Link>
            </div>
        </AdminLayout>
    );
};

export default OrderDetail;
