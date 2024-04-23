import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import axios from "axios";

function TableEmployee() {
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
      const reqData = await fetch("http://localhost/marinewaves/CompanyStaff.php");
      const resData = await reqData.json();
      console.log(resData);
      setUserData(resData);
    };
    getUserData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF('landscape'); // Specify landscape orientation
    doc.text("Employee Information", 20, 10);
    doc.autoTable({
      head: [["ID", "Name", "Role", "Department", "Joining Date","Email","Contact no.","Address","Salary","Work Hours","Status","Leaves"]],
      body: userData.map((uData) => [
        uData.id,
        uData.employeeName,
        uData.employeeRole,
        uData.employeeDepartment,
        uData.employeeJoiningDate,
        uData.employeeEmail,
        uData.employeePhoneNumber,
        uData.employeeAddress,
        uData.employeeSalary,
        uData.employeeWorkingHours,
        uData.employeeStatus,
        uData.employeeLeave
      ]),
      startY: 20,
      margin: { top: 20 },
    });
    doc.save("MarineWaves-Employee Information.pdf");
};



  //-------------------delete record function--------------------
  const handleDelete = async (id,name) => {
    const isConfirmed = window.confirm(`Are you sure you want to delete "${name}" ?`);
    
    if (isConfirmed) {
      try {
        // Delete the record
        await axios.delete(`http://localhost/marinewaves/CompanyStaff.php/${id}`);
        // Fetch updated user data
        const updatedUserData = await fetch("http://localhost/marinewaves/CompanyStaff.php").then(res => res.json());
        setUserData(updatedUserData);
      } catch (error) {
        console.error("Error deleting user:", error)
      }
    }
  };

  return (
    <div className="new-user-container">
      <h3 className="d-inline-block p-md-3">Marinewaves Employees</h3>
      <Link to='/dashboard/add-employee' className="btn btn-success mx-3">Add New Employee</Link>
      <button className="btn btn-primary" onClick={generatePDF}>Download PDF</button>
      {userData.length > 0 ? (
        <table className="table table-hover table-responsive">
        <thead>
          <tr  className="table-secondary">
            <th scope="col">ID</th>
            <th scope="col">Employe Name</th>
            <th scope="col">Role</th>
            <th scope="col">Department</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Email</th>
            <th scope="col">Contact No.</th>
            <th scope="col">Address</th>
            <th scope="col">Salary</th>
            <th scope="col">Working Hours</th>
            <th scope="col">Status</th>
            <th scope="col">Leaves</th>
            <th scope="col" colSpan="2">
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
                  <td>{uData.employeeName}</td>
                  <td>{uData.employeeRole}</td>
                  <td>{uData.employeeDepartment}</td>
                  <td>{uData.employeeJoiningDate}</td>
                  <td>{uData.employeeEmail}</td>
                  <td>{uData.employeePhoneNumber}</td>
                  <td style={{whiteSpace:"nowrap"}}>{uData.employeeAddress}</td>
                  <td>{uData.employeeSalary}</td>
                  <td>{uData.employeeWorkingHours}</td>
                  <td>{uData.employeeStatus}</td>
                  <td>{uData.employeeLeave}</td>
                  <td>
                    <Link
                      to={"/dashboard/edit-employee/" + uData.id}
                      className="btn btn-success px-md-3"
                    >
                      Edit
                    </Link>
                  </td>
                  <td>
                  <button className="btn btn-danger px-md-3" onClick={()=>handleDelete(uData.id, uData.employeeName)}>
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

export default TableEmployee;
