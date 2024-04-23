import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableShipScheduling() {
  const [userData, setUserData] = useState([]);
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
      const reqData = await fetch("http://localhost/marinewaves/ShipScheduling.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);


  //---------------PDF GENERATOR------------
  const generatePDF = () => {
    const doc = new jsPDF('landscape');
    doc.text("Ship Schedule", 20, 10);
    doc.autoTable({
      head: [["ID", "Name", "Departure Port", "Arrival Port", "Departure Time","Arrival Time","Duration","Frequency","Availibility","Status",]],
      body: userData.map((uData) => [
        uData.shipId,
        uData.shipName,
        uData.departurePort,
        uData.arrivalPort,
        uData.departureTime,
        uData.arrivalTime,
        uData.estimatedDuration,
        uData.shipFrequency,
        uData.availability,
        uData.status
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("Ship Schedule.pdf");
  };

    //----------------DELETE FUNCTION--------------
    const handleDelete = async (id,name) => {
      const isConfirmed = window.confirm(`Are you sure you want to delete "${name}" ?`);
      
      if (isConfirmed) {
        try {
          // Delete the record
          await axios.delete(`http://localhost/marinewaves/ShipScheduling.php/${id}`);
    
          // Fetch updated user data
          const updatedUserData = await fetch("http://localhost/marinewaves/ShipScheduling.php").then(res => res.json());
          setUserData(updatedUserData);
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }
    };

  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">Ship Schedual</h3>
      <Link to='/dashboard/add-ship-scheduling' className="btn btn-success mx-3">Add New Ship</Link>
      <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
      <table className="table table-hover table-responsive">
        <thead>
          <tr className="table-secondary">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Arrival Port</th>
            <th scope="col">Departure Port</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Estimated Duration</th>
            <th scope="col">Ship Frequency</th>
            <th scope="col">Availability</th>
            <th scope="col">Status</th>
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
                  <td>{uData.shipName}</td>
                  <td>{uData.arrivalPort}</td>
                  <td>{uData.departurePort}</td>
                  <td>{uData.departureTime}</td>
                  <td>{uData.arrivalTime}</td>
                  <td>{uData.estimatedDuration}</td>
                  <td>{uData.shipFrequency}</td>
                  <td>{uData.availability}</td>
                  <td>{uData.status}</td>
                  <td>
                    <Link
                      to={"/dashboard/edit-ship-scheduling/" + uData.shipId}
                      className="btn btn-success px-md-3"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                  <button className="btn btn-danger px-md-3" onClick={()=>handleDelete(uData.shipId,uData.shipName)}>
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

export default TableShipScheduling;
