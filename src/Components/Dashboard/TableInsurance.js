import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableInsurance() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState('');
  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("http://localhost/marinewaves/CargoAndInsurance.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF('landscape');
    doc.text("Insurance Information", 20, 10);
    doc.autoTable({
      head: [[
        "ID",
        "Provider",
        "Policy No.",
        "Insurance Type",
        "Cargo Value",
        "Coverage Amt",
        "Expiry Date",
        "Contact No.",
        "Email",
      ]],
      body: userData.map((uData) => [
        uData.insuranceId,
        uData.insuranceProviderName,
        uData.insurancePolicyNumber,
        uData.insuranceType,
        uData.cargoValue,
        uData.insuranceCoverageAmount,
        uData.insuranceExpiryDate,
        uData.insuranceProviderPhoneNumber,
        uData.insuranceProviderEmail,
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("InsuranceInformation.pdf");
  };

    //----------DELETE FUNCTION FOR RECORDS---
    const handleDelete = async (id) => {
      const isConfirmed = window.confirm(`Are you sure you want to delete "${id}" ?`);
  
      if (isConfirmed) {
        try {
          // Delete the record
          await axios.delete(`http://localhost/marinewaves/CargoAndInsurance.php/${id}/deleteInsurance`);
          setMessage("Record deleted successfully");
  
          // Fetch updated user data
          const updatedUserData = await fetch("http://localhost/marinewaves/CargoAndInsurance.php").then((res) => res.json());
          setUserData(updatedUserData);
        } catch (error) {
          console.error("Error deleting user:", error);
          setMessage("Failed to delete user. Please try again.");
        }
      }
    };
  return (
    <div className="new-user-container">
    <h3 className="d-inline-block p-md-3">Insurance Information</h3>
    <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
    {userData.length > 0 ? (
      <table className="table table-hover table-responsive">
        <thead>
          <tr  className="table-secondary">
            <th scope="col">ID</th>
            <th scope="col">Provider</th>
            <th scope="col">Policy No.</th>
            <th scope="col">Insurance Type</th>
            <th scope="col">Cargo Value</th>
            <th scope="col">Coverage Amt</th>
            <th scope="col">Expiry Date</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Email</th>
            <th scope="col" colSpan="2">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map(
            (uData, index) =>
              uData.insuranceId && (
                <tr key={index}>
                  <td>{uData.insuranceId}</td>
                  <td>{uData.insuranceProviderName}</td>
                  <td>{uData.insurancePolicyNumber}</td>
                  <td>{uData.insuranceType} {uData.cargoWeight}</td>
                  <td>{uData.cargoValue}</td>
                  <td>{uData.insuranceCoverageAmount}</td>
                  <td>{uData.insuranceExpiryDate}</td>
                  <td>{uData.insuranceProviderPhoneNumber}</td>
                  <td>{uData.insuranceProviderEmail}</td>
                  <td>
                  <Link
                    to={"/edit-cargo-details/" + uData.insuranceId}
                    className="btn btn-success px-md-3"
                  >
                    Edit
                  </Link>
                  </td>
                  <td>
                  <button
                    className="btn btn-danger px-md-3"
                    onClick={() => handleDelete(uData.insuranceId)}>
                    Delete
                  </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    ) :(
      <div className="alert alert-warning">No records available.</div>
    )}
      
    </div>
  );
}

export default TableInsurance;
