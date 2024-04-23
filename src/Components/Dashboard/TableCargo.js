import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableCargo() {
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

  //---------------PDF GENERATOR------------
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Cargo Information", 20, 10);
    doc.autoTable({
      head: [
        ["ID", "Type", "Quantity", "Weight", "Packaging Type", "Instructions"],
      ],
      body: userData.map((uData) => [
        uData.id,
        uData.cargoType,
        uData.cargoQuantity,
        uData.cargoWeight,
        uData.cargoPackagingType,
        uData.cargoHandlingInstructions,
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("CargoInformation.pdf");
  };

  //----------DELETE FUNCTION FOR RECORDS---
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${id}" ?`);

    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/CargoAndInsurance.php/${id}/deleteCargo`);
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
      <h3 className="d-inline-block p-md-3">Cargo Information</h3>
      <button className="btn btn-primary" onClick={generatePDF}>
        Download PDF
      </button>
      {userData.length > 0 ? (
        <table className="table table-hover table-responsive">
          <thead>
            <tr  className="table-secondary">
              <th scope="col">ID</th>
              <th scope="col">Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Weight</th>
              <th scope="col">Packaging Type</th>
              <th scope="col">Instructions</th>
              <th scope="col" colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map(
              (uData, index) =>
                uData.id && (
                  <tr key={index}>
                    <td>{uData.id}</td>
                    <td>{uData.cargoType}</td>
                    <td>{uData.cargoQuantity}</td>
                    <td>{uData.cargoWeight}</td>
                    <td>{uData.cargoPackagingType}</td>
                    <td>{uData.cargoHandlingInstructions}</td>
                    <td>
                      <Link
                        to={"/edit-cargo-details/" + uData.id}
                        className="btn btn-success px-md-3"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger px-md-3"
                        onClick={() => handleDelete(uData.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning">No records available.</div>
      )}
    </div>
  );
}

export default TableCargo;
