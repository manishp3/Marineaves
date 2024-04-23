import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableUser() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState('')
  useEffect(() => {
    const getUserData = async () => {
      const reqData = await fetch("http://localhost/marinewaves/NewUser.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    
    doc.text("MarineWaves Users", 20, 20);
    doc.autoTable({
      head: [["ID", "Name","Username", "Email","Contact", "Password", "Login Date"]],
      body: userData.map(uData => [
        uData.userid,
        uData.name,
        uData.username,
        uData.email,
        uData.phoneNumber,
        uData.password,
        uData.loginDate,
      ]),
      startY: 30,
      margin: { top: 20 },
    });
    doc.save("MarineWaves-UsersInformation.pdf");
  };

  //----------------DELETE FUNCTION--------------
  const handleDelete = async (id,name) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${name}" ?`);
    
    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/NewUser.php/${id}`);
        setMessage("Record deleted successfully");
  
        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/NewUser.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error);
        setMessage("Failed to delete user. Please try again.");
      }
    }
  };
  return (
    <div className="new-user-container">
    <h3 className="d-inline-block p-md-3">Our Users</h3>
    <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
    {userData.length > 0 ? (
      <table className="table table-hover table-responsive">
        <thead>
          <tr className="table-secondary">
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Password</th>
            <th scope="col">Login Date</th>
            <th scope="col"  colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((uData, index) => (
            <tr key={index}>
              <td>{uData.userid}</td>
              <td>{uData.name}</td>
              <td>{uData.username}</td>
              <td>{uData.email}</td>
              <td>{uData.phoneNumber}</td>
              <td>{uData.password}</td>
              <td>{uData.loginDate}</td>
              <td>
                <Link
                  to={"/dashboard/edit-user/" + uData.userid}
                  className="btn btn-success px-md-3"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button className="btn btn-danger px-md-3" onClick={()=>handleDelete(uData.userid,uData.username)}>
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

export default TableUser;
