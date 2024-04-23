import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function TableTracking() {
  const [userData, setUserData] = useState([]);
  const {shipId} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    
    // Check if either isAdmin or isGeneral is true
    if (isAdmin) {
      // User is logged in, do nothing
    } else {
      // User is not logged in, redirect to login page
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("http://localhost/marinewaves/TrackingInsert.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);
  console.log(userData);
  
  //-------------------delete record function--------------------
  const handleDelete = async (id,name) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${name}" ?`);
    
    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/TrackingInsert.php/${id}`);
        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/TrackingInsert.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error)
      }
    }
  };
  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">All Updations</h3>
      <Link to='/dashboard/tracking-form' className="btn btn-success mx-3">New Tracking</Link>
      <table className="table table-hover table-responsive">
        <thead>
          <tr  className="table-secondary">
            <th scope="col">Ship ID</th>
            <th scope="col">Shipping ID</th>
            <th scope="col">Ship Name</th>
            <th scope="col">Current Location</th>
            <th scope="col">Destination</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Status</th>
            <th scope="col">Last Updated Time</th>
            <th scope="col" colSpan="2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map(
            (uData, index) =>
              uData.shipId && (
                <tr key={index}>
                  <td>{uData.shipId}</td>
                  <td>{uData.shippingId}</td>
                  <td>{uData.shipName}</td>
                  <td>{uData.currentLocation}</td>
                  <td>{uData.destination}</td>
                  <td>{uData.estimatedTimeOfArriaval}</td>
                  <td>{uData.status}</td>
                  <td>{uData.lastUpdatedTime}</td>
                  <td>
                    <Link
                      to={"/dashboard/update-tracking/" + uData.shipId}
                      className="btn btn-success px-md-3"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                  <button className="btn btn-danger px-md-3" onClick={()=>handleDelete(uData.shipId, uData.shipName)}>
                     Delete
                  </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TableTracking;
