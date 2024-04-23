import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

function ShipInformationUser() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin") === "true";
    const isGeneral = localStorage.getItem("isGeneral") === "true";
    
    // Check if either isAdmin or isGeneral is true
    if (isAdmin || isGeneral) {
      // User is logged in, do nothing
    } else {
      // User is not logged in, redirect to login page
      // navigate("/login");
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
    const doc = new jsPDF();
    doc.text("Ship Schedule", 20, 10);
    doc.autoTable({
      head: [["ID", "Ship Name", "Departure Port", "Arrival Port", "Departure Time", "Arrival Time", "Duration", "Ship Frequency", "Availability", "Status"]],
      body: userData.map((uData) => [
        uData.shipId,
        uData.shipName,
        uData.departurePort,
        uData.arrivalPort,
        uData.arrivalTime,
        uData.departureTime,
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


  return (
    <div className="container-fluid mt-md-4 px-5">
      <h3 className="d-inline-block p-md-3">Ship Schedual</h3>
      <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
      <table className="table table-hover table-responsive px-5">
        <thead>
          <tr className="table-secondary">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Departure Port</th>
            <th scope="col">Arrival Port</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Arrival Time</th>
            <th scope="col">Estimated Duration</th>
            <th scope="col">Ship Frequency</th>
            <th scope="col">Availability</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(
            (uData, index) =>
              uData.shipId && (
                <tr key={index}>
                  <td>{uData.shipId}</td>
                  <td>{uData.shipName}</td>
                  <td>{uData.departurePort}</td>
                  <td>{uData.arrivalPort}</td>
                  <td>{uData.departureTime}</td>
                  <td>{uData.arrivalTime}</td>
                  <td>{uData.estimatedDuration}</td>
                  <td>{uData.shipFrequency}</td>
                  <td>{uData.availability}</td>
                  <td>{uData.status}</td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShipInformationUser;
