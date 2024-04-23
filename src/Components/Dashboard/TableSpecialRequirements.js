import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableSpecialRequirements() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const reqData = await fetch("http://localhost/marinewaves/SpecialRequirements.php");
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

  //---------------PDF GENERATOR------------
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Special Requirements", 20, 10);
    doc.autoTable({
      head: [["ID", "Booking Ref", "Customer Ref", "Storage Type", "Warehouse", "Customs"]],
      body: userData.map((uData) => [
        uData.id,
        uData.bookingReferenceKey,
        uData.customerReferenceKey,
        uData.storageType,
        uData.warehouse,
        uData.clearCustoms,
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("SpecialRequirements.pdf");
  };

  //----------DELETE FUNCTION FOR RECORDS---
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${id}" ?`);

    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/SpecialRequirements.php/${id}/deleteSpecial`);
        setMessage("Record deleted successfully");

        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/SpecialRequirements.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Failed to delete user. Please try again.");
      }
    }
  };

  return (
    <div className="container m-0">
      <h3 className="my-4 d-inline-block mr-3">Special Requirements</h3>
      <button className="btn btn-primary mb-3" onClick={generatePDF}>Download PDF</button>
      {userData.length > 0 ? (
        <table className="table table-hover">
          <thead className="table-secondary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">B Reference</th>
              <th scope="col">C Reference</th>
              <th scope="col">Storage Type</th>
              <th scope="col">Warehouse</th>
              <th scope="col">Customs</th>
              <th scope="col" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((uData) => (
              <tr key={uData.id}>
                <td>{uData.id}</td>
                <td>{uData.bookingReferenceKey}</td>
                <td>{uData.customerReferenceKey}</td>
                <td>{uData.storageType}</td>
                <td>{uData.warehouse}</td>
                <td>{uData.clearCustoms}</td>
                <td>
                  <Link to={`/edit-special-requirements/${uData.id}`} className="btn btn-success px-md-3">Edit</Link>
                </td>
                <td>
                  <button className="btn btn-danger px-md-3" onClick={() => handleDelete(uData.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="alert alert-warning">{message || "No data available"}</p>
      )}
    </div>
  );
}

export default TableSpecialRequirements;
