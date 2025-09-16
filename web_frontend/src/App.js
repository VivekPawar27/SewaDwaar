import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import VerifyOTP from './pages/VerifyOTP';
import ResetPassword from './pages/ResetPassword';

import Home from "./pages/Home";
import AdminRequest from './pages/AdminRequest';
import Upload from './pages/Upload';
import AddScheme from './pages/AddScheme';
import Dashboard from './pages/Dashboard';
import MainPage from './pages/MainPage';
import ChangePassword from './pages/ChangePassword';
import Contact from "./pages/Contact";
import About from "./pages/About";
import Help from "./pages/Help";
import AdminDashboard from './pages/AdminDash';
import SchemeDataPage from './pages/SchemeDataPage';
import ApprovalList from './pages/ApprovalList';

function App() {
  const loggedIn = !!localStorage.getItem("token");

  // PrivateRoute wrapper
  const PrivateRoute = ({ children }) => {
    const location = useLocation();
    if (!loggedIn) {
      toast.error("You must be logged in to access this page");
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  const protectedRoutes = [
    { path: "change-password", element: <ChangePassword /> },
    { path: "AdminRequest", element: <AdminRequest /> },
    { path: "AddScheme", element: <AddScheme /> },
    { path: "admindash", element: <AdminDashboard /> },
    { path: "upload", element: <Upload /> },
    { path: "viewdata", element: <SchemeDataPage /> },
    { path: "approval", element: <ApprovalList /> },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Forgot password flow */}
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyOTP />} />
          <Route path="/reset" element={<ResetPassword />} />

          {/* Main layout */}
          <Route path="/" element={<MainPage />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="help" element={<Help />} />
            <Route path="dashboard" element={loggedIn ? <Navigate to="/admindash" replace /> : <Dashboard />} />

            {/* Protected routes */}
            {protectedRoutes.map(({ path, element }) => (
              <Route
                key={path}
                path={path}
                element={<PrivateRoute>{element}</PrivateRoute>}
              />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
