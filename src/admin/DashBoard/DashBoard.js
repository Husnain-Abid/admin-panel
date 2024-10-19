import React from 'react'
import ASSET_PATHS from '../../constant'
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../../component/Admin-Layout/AdminLayout';

export default function DashBoard() {
    const imgRoute = ASSET_PATHS.IMG_URL
    const iconRoute = ASSET_PATHS.ICON_URL
    const navigate = useNavigate();

    return (
        <>
            <AdminLayout>
                <div className="DashBoard">

                    <h2>Dashboard</h2>
                    <p>This is the main content area where you can show dashboard data.</p>


                </div>
            </AdminLayout>

        </>
    )
}
