import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "../../index.css";
import Preloader from "../Utility/Preloader";

function DashboardLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    // Check if user is admin; if not, redirect to login page
    if (!isAdmin || isAdmin !== "true") {
      navigate("/login");
    }
  }, []);

  return (
    <div className="dashboard-container container-fluid pl-0">
      <div className="row dashboard-row">
        <div className="col-md-2">
          <div className="sidebar py-4">
            <Link to="/dashboard/new-user" className="sidebar-item">
              <i className='bx bx-user header-icon'></i> Users
            </Link>
            <Link to="/dashboard/staff-information" className="sidebar-item">
              <i className='bx bx-user header-icon'></i> Employees
            </Link>
            <Link to="/dashboard/ship-information" className="sidebar-item">
              <i className='bx bx-timer header-icon'></i> Ship Schedual
            </Link>
            <Link to="/dashboard/call-request" className="sidebar-item">
              <i className='bx bx-phone header-icon'></i> Call Requests
            </Link>
            <Link to="/dashboard/cargo-booking" className="sidebar-item">
              <i className='bx bx-data header-icon' ></i> Booking
            </Link>
            <Link to="/dashboard/sender" className="sidebar-item">
              <i className='bx bx-send header-icon' ></i> Sender & Reciever
            </Link>
            <Link to="/dashboard/cargo-information" className="sidebar-item">
              <i className='bx bx-scatter-chart header-icon'></i> Cargo
            </Link>
            <Link to="/dashboard/insurance-information" className="sidebar-item">
              <i className='bx bx-credit-card-alt header-icon' ></i> Insurance
            </Link>
            <Link to="/dashboard/transport-information" className="sidebar-item">
              <i className='bx bxs-truck header-icon' ></i> Transport
            </Link>
            <Link to="/dashboard/special" className="sidebar-item">
              <i className='bx bx-git-compare header-icon'></i> Special Requirements
            </Link>
            <Link to="/dashboard/tracking-information" className="sidebar-item">
              <i className='bx bx-git-compare header-icon'></i> Tracking
            </Link>
          </div>
        </div>
        <div className="col-md-10">
          <div className="content">
            {/*<Preloader/>*/}
            <Outlet />  
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
