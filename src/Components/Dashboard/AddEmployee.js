import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddEmployee() {
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

  // State to store the transportation details.
  const [staffInfo, setStaffInfo] = React.useState({
    /**----------FOR Employees----------- */
    employeeName: "",
    employeeRole: "",
    employeeDepartment: "",
    employeeJoiningDate: "",
    employeeEmail: "",
    employeePhoneNumber: "",
    employeeLine1: "",
    employeeCity: "",
    employeeState: "",
    employeeCountry: "",
    employeeSalary: "",
    employeeWorkingHours: "",
    employeeStatus: "",
    employeeLeave: "",
  });

  const handleInput = (e) => {
    setStaffInfo({ ...staffInfo, [e.target.name]: e.target.value });
  };
  console.log(staffInfo);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      /**----SETTING VALUE FOR PICK UP------ */
      employeeName: staffInfo.employeeName,
      employeeRole: staffInfo.employeeRole,
      employeeDepartment: staffInfo.employeeDepartment,
      employeeJoiningDate: staffInfo.employeeJoiningDate,
      employeeEmail: staffInfo.employeeEmail,
      employeePhoneNumber: staffInfo.employeePhoneNumber,
      employeeLine1: staffInfo.employeeLine1,
      employeeCity: staffInfo.employeeCity,
      employeeState: staffInfo.employeeState,
      employeeCountry: staffInfo.employeeCountry,
      employeeSalary: staffInfo.employeeSalary,
      employeeWorkingHours: staffInfo.employeeWorkingHours,
      employeeStatus: staffInfo.employeeStatus,
      employeeLeave: staffInfo.employeeLeave,
    };
    try {
      const res = await axios.post(
        "http://localhost/MarineWaves/CompanyStaff.php",
        formData
      );
      console.log("Form submitted:", formData);
      alert("Your Form has been Submitted Successfully!");
      navigate("/dashboard/staff-information");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <section>
          <h2 className="py-3 text-center mb-5">Employee information </h2>
          <div className="row">
            <div className="form-group col-md-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-user root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="InputFullNamePickup"
                  name="employeeName"
                  onChange={handleInput}
                  placeholder="Enter Employee Name"
                />
              </div>
            </div>

            <div className="form-group col-md-3">
              <div className="input-group">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="employeeRole"
                  name="employeeRole"
                  onChange={handleInput}
                >
                  <option defaultValue="">Select Role</option>
                  <option value="Manager">Manager</option>
                  <option value="Supervisior">Supervisior</option>
                  <option value="Employee">Employee</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bx bx-unite root-icon"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group col-md-3">
              <div className="input-group">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="employeeDepartment"
                  name="employeeDepartment"
                  onChange={handleInput}
                >
                  <option defaultValue="">Select Department</option>
                  <option value="Ship Operations">Ship Operations</option>
                  <option value="Port Management">Port Management</option>
                  <option value="Cargo Handling">Cargo Handling</option>
                  <option value="Logistics">Logistics</option>
                  <option value="Finance">Finance</option>
                  <option value="Customer Service">Customer Service</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bx bx-unite root-icon"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group col-md-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-envelope root-icon"></i>
                  </span>
                </div>
                <input
                  type="email"
                  className="form-control"
                  id="employeeEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="employeeEmail"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="form-group col-md-3">
              <label htmlFor="InputLine1Pickup">Employee Contact</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-phone root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeePhoneNumber"
                  placeholder="Enter Contact No."
                  name="employeePhoneNumber"
                  onChange={handleInput}
                />
              </div>
            </div>

            {/**-----Joining Date----- */}
            <div className="form-group col-md-3">
              <label htmlFor="InputLine1Pickup">Joining Date</label>
              <div className="input-group">
                <input
                  type="date"
                  className="form-control"
                  id="employeeJoiningDate"
                  name="employeeJoiningDate"
                  onChange={handleInput}
                />
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bx bx-calendar"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="InputPostalCodePickup">Salary</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-dollar root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeeSalary"
                  placeholder="Enter Employee Salary"
                  name="employeeSalary"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="InputPostalCodePickup">Work Load Hours</label>
              <div className="input-group">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  id="employeeWorkingHours"
                  name="employeeWorkingHours"
                  onChange={handleInput}
                >
                  <option defaultValue="">Select Working Hours</option>
                  <option value="8">8 hours</option>
                  <option value="12">12 hours</option>
                  <option value="16">16 hours</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="bx bx-time root-icon"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="form-group col-md-3">
              <label htmlFor="InputLine1Pickup">Line 1</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-home root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeeLine1"
                  placeholder="Address Line 1"
                  name="employeeLine1"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group col-md-3 mb-4 ">
              <label htmlFor="InputCityPickup">City</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bxs-edit-location root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeeCity"
                  placeholder="Enter Employee City"
                  name="employeeCity"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="InputStatePickup">State</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeeState"
                  placeholder="Enter State"
                  name="employeeState"
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="form-group col-md-3 mb-3">
              <label htmlFor="InputCountryPickup">Country</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeeCountry"
                  placeholder="Enter Country"
                  name="employeeCountry"
                  onChange={handleInput}
                />
              </div>
            </div>

            <div className="form-group mt-2 col-md-5">
              <div className="form-check form-check-inline">
                <label className="my-2 mr-2" htmlFor="InputStatePickup">
                  Job Type :
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="employeeStatus"
                  id="fullTimeStatus"
                  value="Full-Time"
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="fullTimeStatus">
                  Full-Time
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="employeeStatus"
                  id="partTimeStatus"
                  value="Part-Time"
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="partTimeStatus">
                  Part-Time
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="employeeStatus"
                  id="contractStatus"
                  value="Contract"
                  onChange={handleInput}
                />
                <label className="form-check-label" htmlFor="contractStatus">
                  Contract
                </label>
              </div>
            </div>
            <div className="form-group col-md-3 mb-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="bx bx-flag root-icon"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="employeeLeave"
                  placeholder="Enter leaves"
                  name="employeeLeave"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
        </section>
        <button type="submit" className="btn btn-success my-5 text-white px-5">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
