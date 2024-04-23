import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableTransport() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch(
        "http://localhost/marinewaves/TransportInformation.php"
      );
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);

  //---------------PDF GENERATOR------------
  const generatePDF = () => {
    const doc = new jsPDF('landscape');
    doc.text("Transportation Information", 20, 10);
    doc.autoTable({
      head: [["ID", "PickUp Name", "PickUp Email","PickUp Contact", "PickUp Address", "Delivery Name", "Delivery Email","Delivery Contact", "Delivery Address"]],
      body: userData.map((uData) => [
        uData.id,
        uData.pickUpName,
        uData.pickUpEmail,
        uData.pickUpPhoneNumber,
        uData.pickUpAddress,
        uData.deliveryName,
        uData.deliveryEmail,
        uData.deliveryPhoneNumber,
        uData.deliveryAddress,
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("TransportationInformation.pdf");
  };

  //----------DELETE FUNCTION FOR RECORDS---
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${id}" ?`);
    
    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/TransportInformation.php/${id}/deleteTransport`);
        setMessage("Record deleted successfully");
  
        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/TransportInformation.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Failed to delete user. Please try again.");
      }
    }
  };

  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">Transportation Information</h3>
      <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
      {userData.length > 0 ? (
        <table className="table table-hover table-responsive">
          <thead>
            <tr className="table-secondary">
              <th scope="col">ID</th>
              <th scope="col">PickUp Name</th>
              <th scope="col">PickUp Email</th>
              <th scope="col">PickUp Contact</th>
              <th scope="col">PickUp Address</th>
              <th scope="col">Delivery Name</th>
              <th scope="col">Delivery Email</th>
              <th scope="col">Delivery Contact</th>
              <th scope="col">Delivery Address</th>
              <th scope="col" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((uData, index) => (
              uData.id && (
                <tr key={index}>
                  <td>{uData.id}</td>
                  <td>{uData.pickUpName}</td>
                  <td>{uData.pickUpEmail}</td>
                  <td>{uData.pickUpPhoneNumber}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{uData.pickUpAddress}</td>
                  <td>{uData.deliveryName}</td>
                  <td>{uData.deliveryEmail}</td>
                  <td>{uData.deliveryPhoneNumber}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{uData.deliveryAddress}</td>
                  <td>
                    <Link
                      to={"/edit-transport-details/" + uData.id}
                      className="btn btn-success px-md-3"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                    <button className="btn btn-danger px-md-3" onClick={() => handleDelete(uData.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning">No records available.</div>
      )}
    </div>
  );
}

export default TableTransport;
