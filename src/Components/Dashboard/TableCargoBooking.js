import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableCargoBooking() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      try {
        const reqData = await fetch("http://localhost/marinewaves/test.php");
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

  //----------DELETE FUNCTION FOR RECORDS---
  const handleDelete = async (id) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${id}" ?`);
    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/test.php/${id}/deleteRecord`);
        setMessage("Record deleted successfully");

        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/test.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Failed to delete user. Please try again.");
      }
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    // PDF generation logic
  };

  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">Placed Orders</h3>
      {userData.length > 0 ? (
        <table className="table table-hover table-responsive">
        <thead>
          <tr  className="table-secondary">
            <th scope="col">ID</th>
            <th scope="col">Sender Name</th>
            <th scope="col">Sender Company</th>
            <th scope="col">Sender Email</th>
            <th scope="col">Sender Contact No.</th>
            <th scope="col">Reciever Name</th>
            <th scope="col">Reciever Company</th>
            <th scope="col">Reciever Email</th>
            <th scope="col">Reciever Contact No.</th>
            <th scope="col" className="border-left">Cargo Type</th>
            <th scope="col">Quantity</th>
            <th scope="col">Weight</th>
            <th scope="col">Packaging Type</th>
            <th scope="col">Handling Instructions</th>
            <th scope="col" className="border-left">
              Insurance Provider
            </th>
            <th scope="col">Policy No.</th>
            <th scope="col">Insurance Type</th>
            <th scope="col">Cargo Value</th>
            <th scope="col">Coverage Amt</th>
            <th scope="col">Expiry Date</th>
            <th scope="col">Insurance Contact</th>
            <th scope="col">Insurance Email</th>
            <th scope="col" className="border-left">
              PickUp Name
            </th>
            <th scope="col">PickUp Email</th>
            <th scope="col">PickUp Contact</th>
            <th scope="col">PickUp Address</th>
            <th scope="col">Delivery Name</th>
            <th scope="col">Delivery Email</th>
            <th scope="col">Delivery Contact</th>
            <th scope="col">Delivery Address</th>
            <th scope="col" className="border-left">
              Booking Reference
            </th>
            <th scope="col">Customer Reference</th>
            <th scope="col">Storage Type</th>
            <th scope="col">Warehouse</th>
            <th scope="col">Customs</th>
            <th scope="col" colSpan="2" className="border-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map(
            (uData, index) =>
              uData.id && (
                <tr key={index}>
                  <td>{uData.id}</td>
                  <td>{uData.senderName}</td>
                  <td>{uData.senderCompany}</td>
                  <td>{uData.senderEmail}</td>
                  <td>{uData.senderPhoneNumber}</td>
                  <td>{uData.recieverName}</td>
                  <td>{uData.recieverCompany}</td>
                  <td>{uData.recieverEmail}</td>
                  <td>{uData.recieverPhoneNumber}</td>
                  <td className="border-left">{uData.cargoType}</td>
                  <td>{uData.cargoQuantity}</td>
                  <td>{uData.cargoWeight}</td>
                  <td>{uData.cargoPackagingType}</td>
                  <td>{uData.cargoHandlingInstructions}</td>
                  <td className="border-left">{uData.insuranceProviderName}</td>
                  <td>{uData.insurancePolicyNumber}</td>
                  <td>{uData.insuranceType}</td>
                  <td>{uData.cargoValue}</td>
                  <td>{uData.insuranceCoverageAmount}</td>
                  <td>{uData.insuranceExpiryDate}</td>
                  <td>{uData.insuranceProviderPhoneNumber}</td>
                  <td>{uData.insuranceProviderEmail}</td>
                  <td className="border-left">{uData.pickUpName}</td>
                  <td>{uData.pickUpEmail}</td>
                  <td>{uData.pickUpPhoneNumber}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{uData.pickUpAddress}</td>
                  <td>{uData.deliveryName}</td>
                  <td>{uData.deliveryEmail}</td>
                  <td>{uData.deliveryPhoneNumber}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{uData.deliveryAddress}</td>
                  <td className="border-left">{uData.bookingReferenceKey}</td>
                  <td>{uData.customerReferenceKey}</td>
                  <td>{uData.storageType}</td>
                  <td>{uData.warehouse}</td>
                  <td>{uData.clearCustoms}</td>
                  <td className="border border-left">
                  <button className="btn btn-danger px-md-3" onClick={()=>handleDelete(uData.id)}>
                    Delete
                  </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      ) : (
        <div className="alert alert-warning">
          {message || "No records available."}
        </div>
      )}
    </div>
  );
}

export default TableCargoBooking;
