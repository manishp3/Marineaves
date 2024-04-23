import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableSenderReciever() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("http://localhost/marinewaves/Sender.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);

  //---------------PDF GENERATOR------------
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Sender & Reciever Information", 20, 10);

    const tableData = userData.map((uData) => [
      uData.senderId,
      uData.senderName,
      uData.senderEmail,
      uData.senderPhoneNumber,
      uData.recieverName,
      uData.recieverEmail,
      uData.recieverPhoneNumber,
    ]);

    doc.autoTable({
      head: [
        ["ID", "Sender Name", "Sender Email", "Sender Contact No.", "Receiver Name", "Receiver Email", "Receiver Contact No."]
      ],
      body: tableData,
      startY: 20,
      margin: { top: 20 },
    });

    doc.save("SenderInformation.pdf");
  };

  //----------DELETE FUNCTION FOR RECORDS---
  const handleDelete = async (id, name) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete "${name}" ?`
    );

    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(
          `http://localhost/marinewaves/Sender.php/${id}/deleteSender`
        );
        setMessage("Record deleted successfully");

        // Fetch updated user data
        const updatedUserData = await fetch(
          "http://localhost/marinewaves/Sender.php"
        ).then((res) => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Failed to delete user. Please try again.");
      }
    }
  };

  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">Sender & Reciever Information</h3>
      <button className="btn btn-primary" onClick={generatePDF}>
        Download PDF
      </button>
      {userData.length > 0 ? (
        <table className="table table-hover table-responsive">
          <thead>
            <tr className="table-secondary">
              <th scope="col">ID</th>
              <th scope="col">Sender Name</th>
              <th scope="col">Sender Email</th>
              <th scope="col">Sender Contact No.</th>
              <th scope="col">Reciever Name</th>
              <th scope="col">Reciever Email</th>
              <th scope="col">Reciever Contact No.</th>
              <th scope="col" colSpan="2">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((uData, index) => (
              <tr key={index}>
                <td>{uData.senderId}</td>
                <td>{uData.senderName}</td>
                <td>{uData.senderEmail}</td>
                <td>{uData.senderPhoneNumber}</td>
                <td>{uData.recieverName}</td>
                <td>{uData.recieverEmail}</td>
                <td>{uData.recieverPhoneNumber}</td>
                <td>
                  <Link
                    to={"/edit-personal-info/" + uData.senderId}
                    className="btn btn-success px-md-3"
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger px-md-3"
                    onClick={() => handleDelete(uData.senderId, uData.senderName)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning">No records available.</div>
      )}

    </div>
  );
}

export default TableSenderReciever;
