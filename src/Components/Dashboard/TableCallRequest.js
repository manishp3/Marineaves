import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";
import "../Styles/Animation.css";

function TableCallRequest() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const reqData = await fetch("http://localhost/marinewaves/CallRequest.php");
        const resData = await reqData.json();
        console.log(resData);
        setUserData(resData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setMessage("Failed to fetch user data. Please try again.");
      }
    };
    getUserData();
  }, []);

  //----------------DELETE FUNCTION--------------
  const handleDelete = async (id, name) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${name}" ?`);
    
    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/CallRequest.php/${id}`);
        setMessage("Record deleted successfully");

        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/CallRequest.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Failed to delete user. Please try again.");
      }
    }
  };

  const handleApprove = async (callId) => {
    // Find the specific user data by callId
    const uData = userData.find(data => data.id === callId);
  
    let status;
    if (uData.status === 'Pending') {
      status = 'Approved';
    } else {
      status = 'Pending';
    }
  
    const formData = {
      id: callId,
      status: status
    };
  
    const res = await axios.put(
      "http://localhost/MarineWaves/CallRequest.php",
      formData
    );
    console.log("Form submitted:", formData);
  
    // Fetch updated user data
    const updatedUserData = await fetch("http://localhost/marinewaves/CallRequest.php").then(res => res.json());
    setUserData(updatedUserData);
  };

  //---------------PDF GENERATOR------------
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Call Requests", 20, 10);
    doc.autoTable({
      head: [["ID", "Name", "Email", "Contact No.", "Message"]],
      body: userData.map((uData) => [
        uData.id,
        uData.name,
        uData.email,
        uData.phoneNumber,
        uData.message
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("Call Requests.pdf");
  };

  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">Call Requests</h3>
      <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
      {message && <div className="alert alert-warning">{message}</div>}
      {userData.length > 0 ? (
        <table className="table table-hover table-responsive">
          <thead>
            <tr className="table-secondary">
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Message</th>
              <th scope="col">Status</th>
              <th scope="col" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((uData, index) => (
              <tr key={index}>
                <td>{uData.id}</td>
                <td>{uData.name}</td>
                <td>{uData.email}</td>
                <td>{uData.phoneNumber}</td>
                <td>{uData.message}</td>
                <td>
                  {uData.status === "Approved" ? (
                    <i className="bx bx-check call-accept-icon"></i>
                  ) : (
                    <i className="bx bx-x call-decline-icon"></i>
                  )}
                </td>
                <td>
                  {uData.status === "Pending" ? (
                    <button className="btn btn-success px-md-3" onClick={() => handleApprove(uData.id)}>Approve</button>
                  ) : (
                    <button className="btn btn-warning px-md-3" onClick={() => handleApprove(uData.id)}>Cancel</button>
                  )}
                </td>
                <td>
                  <button className="btn btn-secondary px-md-3" onClick={() => handleDelete(uData.id, uData.name)}>Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="alert alert-warning">No Records available</p>
      )}
    </div>
  );
}

export default TableCallRequest;
