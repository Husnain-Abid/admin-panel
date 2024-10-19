import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import './Common.css';


import DashBoard from './admin/DashBoard/DashBoard';
import ManageJob from './admin/ManageJob/ManageJob';
import JobForm from './admin/ManageJob/JobForm';
import ContactList from './admin/Contact/ContactList';
import ContactDetail from './admin/Contact/ContactDetail';
import JobEditForm from './admin/ManageJob/JobEditForm';
import AdminLogin from './admin/AdminLogin/AdminLogin';
import OrderEditForm from './admin/Contact/ContactList';
import OrderDetail from './admin/Contact/ContactDetail';



function App() {

  return (
    <>
      <Routes>

        {/* <Route path='*' element={<Navigate replace to="/" />} /> */}

        {/* Admin Routes  */}

        <Route path='/' element={<DashBoard />} />
        <Route path='/admin-panel/products' element={<ManageJob />} />
        <Route path='/admin-panel/products/create' element={<JobForm />} />
        <Route path='/admin-panel/products/edit/:slug' element={<JobEditForm />} />
        <Route path='/admin-panel/orders' element={<OrderEditForm/>} />
        <Route path='/admin-panel/order-view/:id' element={<ContactDetail />} />
        <Route path='/admin-panel/login' element={<AdminLogin />} />

      </Routes>

    </>
  );
}

export default App;
